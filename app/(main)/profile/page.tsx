'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { UserProfile } from '@/types'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { User, Sparkles, Clock, DollarSign } from 'lucide-react'

export default function ProfilePage() {
    const [profile, setProfile] = useState<UserProfile | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const supabase = createClient()

    useEffect(() => {
        loadProfile()
    }, [])

    const loadProfile = async () => {
        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
            router.push('/login')
            return
        }

        const { data } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('user_id', user.id)
            .single()

        if (data) {
            setProfile(data)
        }

        setLoading(false)
    }

    const generateNewPackage = async () => {
        setLoading(true)
        try {
            await fetch('/api/generate-package', { method: 'POST' })
            router.push('/dashboard')
        } catch (error) {
            console.error('Failed to generate package:', error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        )
    }

    if (!profile) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="text-center max-w-md">
                    <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold mb-4">No Profile Found</h1>
                    <p className="text-gray-600 mb-6">
                        Complete the AI onboarding to create your personalized profile.
                    </p>
                    <Button onClick={() => router.push('/chat')}>
                        Start Onboarding
                    </Button>
                </div>
            </div>
        )
    }

    const budgetLabels = {
        low: 'Budget-Friendly ($)',
        medium: 'Moderate ($$)',
        high: 'Premium ($$$)'
    }

    const timeLabels = {
        '15min': '15 minutes',
        '30min': '30 minutes',
        '1hr': '1 hour',
        '2hr+': '2+ hours'
    }

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">Your Profile</h1>
                    <p className="text-gray-600">
                        Your personalized preferences and interests
                    </p>
                </div>

                {/* Personality Traits */}
                <Card className="mb-6">
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-6 h-6 text-purple-600" />
                            <h2 className="text-2xl font-semibold">Personality & Interests</h2>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2">Traits</h3>
                                <div className="flex flex-wrap gap-2">
                                    {profile.personality_data.traits.map((trait, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                                        >
                                            {trait}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Interests</h3>
                                <div className="flex flex-wrap gap-2">
                                    {profile.personality_data.interests.map((interest, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                                        >
                                            {interest}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {profile.personality_data.goals && profile.personality_data.goals.length > 0 && (
                                <div>
                                    <h3 className="font-semibold mb-2">Goals</h3>
                                    <ul className="space-y-1">
                                        {profile.personality_data.goals.map((goal, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-gray-700">
                                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                                {goal}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Preferences */}
                <Card className="mb-6">
                    <CardHeader>
                        <h2 className="text-2xl font-semibold">Preferences</h2>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <DollarSign className="w-5 h-5 text-gray-600" />
                                    <h3 className="font-semibold">Budget</h3>
                                </div>
                                <p className="text-gray-700">{budgetLabels[profile.preferences.budget]}</p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Clock className="w-5 h-5 text-gray-600" />
                                    <h3 className="font-semibold">Available Time</h3>
                                </div>
                                <p className="text-gray-700">{timeLabels[profile.preferences.time_available]}</p>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Environment</h3>
                                <div className="flex flex-wrap gap-2">
                                    {profile.preferences.environment.map((env, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium capitalize"
                                        >
                                            {env}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Activity Level</h3>
                                <p className="text-gray-700 capitalize">{profile.preferences.activity_level}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Actions */}
                <div className="flex gap-4">
                    <Button onClick={() => router.push('/chat')} variant="outline" className="flex-1">
                        Update Profile
                    </Button>
                    <Button onClick={generateNewPackage} disabled={loading} className="flex-1">
                        {loading ? 'Generating...' : 'Generate New Week'}
                    </Button>
                </div>
            </div>
        </div>
    )
}
