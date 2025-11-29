import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import WeeklyCalendar from '@/components/WeeklyCalendar'
import ExperienceCard from '@/components/ExperienceCard'
import { Button } from '@/components/ui/Button'
import { Sparkles, Calendar } from 'lucide-react'
import Link from 'next/link'

export default async function DashboardPage() {
    const supabase = await createClient()

    const {
        data: { session }
    } = await supabase.auth.getSession()

    if (!session) {
        redirect('/login')
    }

    // Fetch active weekly package
    const { data: activePackage } = await supabase
        .from('weekly_packages')
        .select('*')
        .eq('user_id', session.user.id)
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(1)
        .single()

    // Fetch today's experience
    let todayExperience = null
    let currentDayNumber = 0

    if (activePackage && activePackage.experiences.length > 0) {
        const start = new Date(activePackage.start_date)
        const today = new Date()
        const diffTime = today.getTime() - start.getTime()
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
        currentDayNumber = Math.max(0, Math.min(diffDays, 6))

        const todayExpId = activePackage.experiences[currentDayNumber]

        if (todayExpId) {
            const { data: experience } = await supabase
                .from('experiences')
                .select('*')
                .eq('id', todayExpId)
                .single()

            todayExperience = experience
        }
    }

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">
                        Welcome Back! 👋
                    </h1>
                    <p className="text-gray-600">
                        {activePackage
                            ? "Here's your personalized weekly adventure"
                            : "Ready to start your first adventure?"}
                    </p>
                </div>

                {todayExperience ? (
                    <section className="mb-12">
                        <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-6 h-6 text-purple-600" />
                            <h2 className="text-2xl font-semibold">Today's Experience</h2>
                        </div>
                        <div className="max-w-2xl">
                            <ExperienceCard
                                experience={todayExperience}
                                featured
                                dayNumber={currentDayNumber}
                            />
                        </div>
                    </section>
                ) : activePackage ? (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12 text-center max-w-2xl mx-auto">
                        <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">Your Week is Ready!</h2>
                        <p className="text-gray-600 mb-4">
                            Check out your personalized 7-day experience calendar below.
                        </p>
                    </div>
                ) : (
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-12 mb-12 text-center max-w-2xl mx-auto">
                        <Sparkles className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                        <h2 className="text-3xl font-semibold mb-3">Ready for Your First Adventure?</h2>
                        <p className="text-gray-600 mb-6 text-lg">
                            You don't have an active weekly package yet. Let's create one tailored just for you!
                        </p>
                        <Link href="/chat">
                            <Button size="lg">
                                Start AI Onboarding
                            </Button>
                        </Link>
                    </div>
                )}

                {activePackage && (
                    <section>
                        <div className="flex items-center gap-2 mb-4">
                            <Calendar className="w-6 h-6 text-purple-600" />
                            <h2 className="text-2xl font-semibold">Your 7-Day Journey</h2>
                        </div>
                        <WeeklyCalendar package={activePackage} />
                    </section>
                )}
            </div>
        </div>
    )
}
