import React from 'react'
import { Experience } from '@/types'
import { Card, CardContent, CardFooter } from './ui/Card'
import { Button } from './ui/Button'
import { Clock, DollarSign, TrendingUp } from 'lucide-react'
import Link from 'next/link'

interface ExperienceCardProps {
    experience: Experience
    featured?: boolean
    dayNumber?: number
}

export default function ExperienceCard({ experience, featured = false, dayNumber }: ExperienceCardProps) {
    const budgetIcons = {
        low: '$',
        medium: '$$',
        high: '$$$'
    }

    return (
        <Card hover className={featured ? 'border-2 border-purple-500' : ''}>
            <CardContent className="p-0">
                <div className={`bg-gradient-to-br ${featured
                        ? 'from-purple-600 to-blue-600'
                        : 'from-purple-500 to-pink-500'
                    } p-6 text-white`}>
                    {dayNumber !== undefined && (
                        <div className="text-sm font-semibold mb-2 opacity-90">Day {dayNumber + 1}</div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
                    <p className="text-sm opacity-90">{experience.category}</p>
                </div>

                <div className="p-6">
                    <p className="text-gray-700 mb-4 line-clamp-3">{experience.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {experience.tags.slice(0, 4).map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{experience.estimated_time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <DollarSign className="w-4 h-4" />
                            <span>{budgetIcons[experience.budget_required]}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <TrendingUp className="w-4 h-4" />
                            <span className="capitalize">{experience.difficulty_level}</span>
                        </div>
                    </div>
                </div>
            </CardContent>

            <CardFooter>
                <Link href={`/experience/${experience.id}`} className="w-full">
                    <Button className="w-full">
                        {featured ? 'Start Today\'s Experience' : 'View Details'}
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
