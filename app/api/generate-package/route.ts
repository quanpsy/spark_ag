import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

const MATCHING_PROMPT = `Given this user profile:
{PROFILE}

And this database of experiences:
{EXPERIENCES}

Create a 7-day package of diverse experiences that:
1. Match the user's personality and interests
2. Fit within their budget and time constraints
3. Offer variety across different categories
4. Progress in difficulty throughout the week (start easy, build up)
5. Include at least one thing outside their comfort zone

Return ONLY a JSON array of exactly 7 experience IDs in order, like this:
["id1", "id2", "id3", "id4", "id5", "id6", "id7"]

No explanations, just the JSON array.`

export async function POST(request: NextRequest) {
    try {
        const supabase = await createClient()

        // Get current user
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        // Fetch user profile
        const { data: profile } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('user_id', user.id)
            .single()

        if (!profile) {
            return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
        }

        // Fetch all experiences
        const { data: experiences } = await supabase
            .from('experiences')
            .select('id, title, category, difficulty_level, budget_required, estimated_time, tags')

        if (!experiences || experiences.length < 7) {
            return NextResponse.json({ error: 'Not enough experiences in database' }, { status: 400 })
        }

        // Use Claude to match experiences
        const prompt = MATCHING_PROMPT
            .replace('{PROFILE}', JSON.stringify(profile))
            .replace('{EXPERIENCES}', JSON.stringify(experiences))

        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.ANTHROPIC_API_KEY!,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 500,
                messages: [{
                    role: 'user',
                    content: prompt
                }]
            })
        })

        const data = await response.json()
        const assistantMessage = data.content[0].text

        // Extract JSON array from response
        const jsonMatch = assistantMessage.match(/\[[\s\S]*?\]/)
        if (!jsonMatch) {
            throw new Error('Failed to parse experience IDs from Claude response')
        }

        const selectedIds = JSON.parse(jsonMatch[0])

        // Create weekly package
        const startDate = new Date()
        const endDate = new Date()
        endDate.setDate(endDate.getDate() + 6)

        const { data: packageData, error: packageError } = await supabase
            .from('weekly_packages')
            .insert({
                user_id: user.id,
                start_date: startDate.toISOString().split('T')[0],
                end_date: endDate.toISOString().split('T')[0],
                experiences: selectedIds,
                status: 'active'
            })
            .select()
            .single()

        if (packageError) {
            console.error('Package creation error:', packageError)
            return NextResponse.json({ error: 'Failed to create package' }, { status: 500 })
        }

        // Create progress entries for each day
        const progressEntries = selectedIds.map((expId: string, index: number) => ({
            user_id: user.id,
            package_id: packageData.id,
            experience_id: expId,
            day_number: index,
            completed: false
        }))

        await supabase.from('user_progress').insert(progressEntries)

        return NextResponse.json({ success: true, package: packageData })
    } catch (error) {
        console.error('Package generation error:', error)
        return NextResponse.json(
            { error: 'Failed to generate package' },
            { status: 500 }
        )
    }
}
