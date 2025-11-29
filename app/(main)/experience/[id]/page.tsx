'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Experience, UserProgress } from '@/types'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Clock, DollarSign, TrendingUp, CheckCircle, Circle, ExternalLink } from 'lucide-react'

export default function ExperiencePage() {
    const params = useParams()
    const router = useRouter()
    const [experience, setExperience] = useState<Experience | null>(null)
    const [progress, setProgress] = useState<UserProgress | null>(null)
    const [loading, setLoading] = useState(true)
    const supabase = createClient()

    useEffect(() => {
        loadExperience()
    }, [params.id])

    const loadExperience = async () => {
        const { data: expData } = await supabase
            .from('experiences')
            .select('*')
            .eq('id', params.id)
            .single()

        if (expData) {
            setExperience(expData)
        }

        // Load user progress
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
            const { data: progressData } = await supabase
                .from('user_progress')
                .select('*')
                .eq('user_id', user.id)
                .eq('experience_id', params.id)
                .single()

            if (progressData) {
                setProgress(progressData)
            }
        }

        setLoading(false)
    }

    const toggleComplete = async () => {
        if (!progress) return

        const newCompleted = !progress.completed

        const { error } = await supabase
            .from('user_progress')
            .update({
                completed: newCompleted,
                completion_date: newCompleted ? new Date().toISOString() : null
            })
            .eq('id', progress.id)

        if (!error) {
            setProgress({ ...progress, completed: newCompleted })
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        )
    }

    if (!experience) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Experience Not Found</h1>
                    <Button onClick={() => router.push('/dashboard')}>
                        Back to Dashboard
                    </Button>
                </div>
            </div>
        )
    }

    const budgetIcons = {
        low: '$',
        medium: '$$',
        high: '$$$'
    }

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white mb-8">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <div className="text-sm font-semibold mb-2 opacity-90">
                                {experience.category}
                            </div>
                            <h1 className="text-4xl font-bold mb-4">{experience.title}</h1>
                            <p className="text-lg opacity-90">{experience.description}</p>
                        </div>
                        {progress && (
                            <button
                                onClick={toggleComplete}
                                className="ml-4 flex-shrink-0"
                            >
                                {progress.completed ? (
                                    <CheckCircle className="w-12 h-12 text-green-300" />
                                ) : (
                                    <Circle className="w-12 h-12 opacity-50 hover:opacity-100 transition-opacity" />
                                )}
                            </button>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            <span>{experience.estimated_time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <DollarSign className="w-5 h-5" />
                            <span>{budgetIcons[experience.budget_required]}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5" />
                            <span className="capitalize">{experience.difficulty_level}</span>
                        </div>
                    </div>
                </div>

                {/* Materials */}
                {experience.materials && experience.materials.length > 0 && (
                    <Card className="mb-8">
                        <CardHeader>
                            <h2 className="text-2xl font-semibold">Materials Needed</h2>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {experience.materials.map((material, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                        <span>{material}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                )}

                {/* Instructions */}
                <Card className="mb-8">
                    <CardHeader>
                        <h2 className="text-2xl font-semibold">Step-by-Step Guide</h2>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-700 mb-6 italic">{experience.instructions.intro}</p>

                        <div className="space-y-6">
                            {experience.instructions.steps.map((step, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                                        {step.step}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                                        <p className="text-gray-700 mb-2">{step.description}</p>
                                        {step.tip && (
                                            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 text-sm">
                                                <span className="font-semibold">💡 Tip: </span>
                                                {step.tip}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Video Links */}
                {experience.video_links && experience.video_links.length > 0 && (
                    <Card className="mb-8">
                        <CardHeader>
                            <h2 className="text-2xl font-semibold">Video Tutorials</h2>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {experience.video_links.map((video, idx) => (
                                    <a
                                        key={idx}
                                        href={video.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <div>
                                            <div className="font-medium">{video.title}</div>
                                            <div className="text-sm text-gray-600">{video.duration}</div>
                                        </div>
                                        <ExternalLink className="w-5 h-5 text-purple-600" />
                                    </a>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Success Criteria */}
                <Card className="mb-8">
                    <CardHeader>
                        <h2 className="text-2xl font-semibold">Success Criteria</h2>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {experience.success_criteria.map((criteria, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <span>{criteria}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex gap-4">
                    <Button onClick={() => router.push('/dashboard')} variant="outline" className="flex-1">
                        Back to Dashboard
                    </Button>
                    {progress && (
                        <Button onClick={toggleComplete} className="flex-1">
                            {progress.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}
