'use client'

import React, { useState, useEffect } from 'react'
import { WeeklyPackage, Experience } from '@/types'
import { Card } from './ui/Card'
import { Check, Lock } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

interface WeeklyCalendarProps {
    package: WeeklyPackage
}

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default function WeeklyCalendar({ package: pkg }: WeeklyCalendarProps) {
    const [experiences, setExperiences] = useState<Experience[]>([])
    const [progress, setProgress] = useState<Record<number, boolean>>({})
    const supabase = createClient()

    useEffect(() => {
        loadExperiences()
        loadProgress()
    }, [pkg])

    const loadExperiences = async () => {
        const { data } = await supabase
            .from('experiences')
            .select('*')
            .in('id', pkg.experiences)

        if (data) {
            // Sort experiences in the order they appear in the package
            const sorted = pkg.experiences.map(id => data.find(exp => exp.id === id)).filter(Boolean) as Experience[]
            setExperiences(sorted)
        }
    }

    const loadProgress = async () => {
        const { data } = await supabase
            .from('user_progress')
            .select('day_number, completed')
            .eq('package_id', pkg.id)

        if (data) {
            const progressMap = data.reduce((acc, item) => {
                acc[item.day_number] = item.completed
                return acc
            }, {} as Record<number, boolean>)
            setProgress(progressMap)
        }
    }

    const getCurrentDay = () => {
        const start = new Date(pkg.start_date)
        const today = new Date()
        const diffTime = today.getTime() - start.getTime()
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
        return Math.max(0, Math.min(diffDays, 6))
    }

    const currentDay = getCurrentDay()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {experiences.map((experience, index) => {
                const isCompleted = progress[index]
                const isCurrent = index === currentDay
                const isLocked = index > currentDay

                return (
                    <Link
                        key={experience.id}
                        href={isLocked ? '#' : `/experience/${experience.id}`}
                        className={isLocked ? 'cursor-not-allowed' : ''}
                    >
                        <Card
                            hover={!isLocked}
                            className={`relative ${isCurrent ? 'ring-2 ring-purple-500 shadow-lg' : ''
                                } ${isLocked ? 'opacity-60' : ''}`}
                        >
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-semibold text-gray-500">
                                        Day {index + 1}
                                    </span>
                                    {isCompleted && (
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                    {isLocked && (
                                        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                                            <Lock className="w-4 h-4 text-white" />
                                        </div>
                                    )}
                                </div>

                                <h4 className="font-semibold text-sm mb-1 line-clamp-2">
                                    {experience.title}
                                </h4>
                                <p className="text-xs text-gray-600">{experience.category}</p>

                                {isCurrent && (
                                    <div className="mt-3 px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded text-center">
                                        Today
                                    </div>
                                )}
                            </div>
                        </Card>
                    </Link>
                )
            })}
        </div>
    )
}
