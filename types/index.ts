export interface UserProfile {
    id: string
    user_id: string
    personality_data: {
        traits: string[]
        interests: string[]
        goals: string[]
    }
    preferences: {
        budget: 'low' | 'medium' | 'high'
        time_available: '15min' | '30min' | '1hr' | '2hr+'
        environment: string[]
        activity_level: string
    }
    created_at?: string
    updated_at: string
}

export interface Experience {
    id: string
    title: string
    description: string
    category: string
    difficulty_level: 'beginner' | 'intermediate' | 'advanced'
    estimated_time: string
    budget_required: 'low' | 'medium' | 'high'
    instructions: {
        intro: string
        steps: Array<{
            step: number
            title: string
            description: string
            tip?: string
            video_timestamp?: string
        }>
    }
    video_links?: Array<{
        title: string
        url: string
        duration: string
    }>
    resource_links?: Array<{
        title: string
        url: string
    }>
    tags: string[]
    materials?: string[]
    success_criteria: string[]
    created_at?: string
}

export interface WeeklyPackage {
    id: string
    user_id: string
    start_date: string
    end_date: string
    experiences: string[] // Array of experience IDs
    status: 'active' | 'completed' | 'expired'
    created_at: string
}

export interface UserProgress {
    id: string
    user_id: string
    package_id: string
    experience_id: string
    day_number: number
    completed: boolean
    completion_date?: string
    notes?: string
    created_at: string
}

export interface ChatMessage {
    role: 'user' | 'assistant'
    content: string
    timestamp: Date
}

export interface ProfileData {
    personality_data: {
        traits: string[]
        interests: string[]
        goals: string[]
    }
    preferences: {
        budget: 'low' | 'medium' | 'high'
        time_available: '15min' | '30min' | '1hr' | '2hr+'
        environment: string[]
        activity_level: string
    }
}
