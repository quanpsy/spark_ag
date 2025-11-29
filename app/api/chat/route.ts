import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are a friendly, enthusiastic guide helping users discover new experiences. 
Your goal is to learn about their personality, interests, and constraints through natural conversation. 

Ask engaging questions ONE AT A TIME, and respond warmly to their answers. Extract the following information:
1. Personality traits (creative, analytical, adventurous, cautious, etc.)
2. Current hobbies and interests
3. Things they've wanted to try but haven't
4. Budget for weekly activities (low/medium/high)
5. Daily available time (15min, 30min, 1hr, 2hr+)
6. Environment preferences (indoor/outdoor, solo/social)
7. Physical activity level preference (low/medium/high)

Keep the conversation natural and fun. Don't make it feel like a form.

After gathering enough information (usually 7-10 exchanges), respond with JSON in this EXACT format:
{
  "message": "Your final encouraging message to the user",
  "profileComplete": true,
  "profileData": {
    "personality_data": {
      "traits": ["trait1", "trait2"],
      "interests": ["interest1", "interest2"],
      "goals": ["goal1", "goal2"]
    },
    "preferences": {
      "budget": "low|medium|high",
      "time_available": "15min|30min|1hr|2hr+",
      "environment": ["indoor", "outdoor"],
      "activity_level": "low|medium|high"
    }
  }
}

If more information is needed, respond normally without the JSON structure.`

export async function POST(request: NextRequest) {
    try {
        const { messages } = await request.json()

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.ANTHROPIC_API_KEY!,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 1024,
                system: SYSTEM_PROMPT,
                messages: messages.map((msg: any) => ({
                    role: msg.role,
                    content: msg.content
                }))
            })
        })

        if (!response.ok) {
            throw new Error('Claude API request failed')
        }

        const data = await response.json()
        const assistantMessage = data.content[0].text

        // Check if the response contains profile completion JSON
        try {
            const jsonMatch = assistantMessage.match(/\{[\s\S]*\}/)
            if (jsonMatch) {
                const parsed = JSON.parse(jsonMatch[0])
                if (parsed.profileComplete) {
                    return NextResponse.json(parsed)
                }
            }
        } catch (e) {
            // Not JSON, continue with regular message
        }

        return NextResponse.json({
            message: assistantMessage,
            profileComplete: false
        })
    } catch (error) {
        console.error('Chat API error:', error)
        return NextResponse.json(
            { error: 'Failed to process chat message' },
            { status: 500 }
        )
    }
}
