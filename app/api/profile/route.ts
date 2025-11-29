import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
    try {
        const profileData = await request.json()
        const supabase = await createClient()

        // Get current user
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        // Insert or update user profile
        const { data, error } = await supabase
            .from('user_profiles')
            .upsert({
                user_id: user.id,
                personality_data: profileData.personality_data,
                preferences: profileData.preferences,
                updated_at: new Date().toISOString()
            })
            .select()
            .single()

        if (error) {
            console.error('Profile save error:', error)
            return NextResponse.json({ error: 'Failed to save profile' }, { status: 500 })
        }

        return NextResponse.json({ success: true, profile: data })
    } catch (error) {
        console.error('Profile API error:', error)
        return NextResponse.json(
            { error: 'Failed to process profile' },
            { status: 500 }
        )
    }
}

export async function GET(request: NextRequest) {
    try {
        const supabase = await createClient()

        // Get current user
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        // Fetch user profile
        const { data, error } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('user_id', user.id)
            .single()

        if (error) {
            return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
        }

        return NextResponse.json(data)
    } catch (error) {
        console.error('Profile fetch error:', error)
        return NextResponse.json(
            { error: 'Failed to fetch profile' },
            { status: 500 }
        )
    }
}
