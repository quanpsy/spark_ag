import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Sparkles, Zap, Heart, TrendingUp } from 'lucide-react'

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 px-4">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-pink-600/10"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center animate-fade-in">
                        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Sparkles className="w-4 h-4" />
                            AI-Powered Experience Discovery
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
                            Discover New Experiences,
                            <br />
                            Every Single Week
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Break out of your routine with AI-curated weekly adventures tailored to your personality,
                            interests, and schedule. 7 days, 7 new experiences.
                        </p>

                        <div className="flex gap-4 justify-center">
                            <Link href="/signup">
                                <Button size="lg" className="text-lg">
                                    Start Your Journey
                                </Button>
                            </Link>
                            <Link href="/login">
                                <Button size="lg" variant="outline" className="text-lg">
                                    Sign In
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center animate-slide-up">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">1. Chat with AI</h3>
                            <p className="text-gray-600">
                                Have a natural conversation about your interests, personality, and what you'd like to explore.
                            </p>
                        </div>

                        <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">2. Get Your Week</h3>
                            <p className="text-gray-600">
                                Receive a personalized 7-day package of curated experiences matched to you.
                            </p>
                        </div>

                        <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">3. Try & Grow</h3>
                            <p className="text-gray-600">
                                Follow step-by-step guides, watch tutorials, and discover new passions every day.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12">Why ExperienceHub?</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
                            <h3 className="text-2xl font-semibold mb-3">Personalized Just for You</h3>
                            <p className="text-gray-600">
                                Our AI analyzes your personality, interests, budget, and time to create the perfect weekly package.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <Sparkles className="w-12 h-12 text-blue-600 mb-4" />
                            <h3 className="text-2xl font-semibold mb-3">Step-by-Step Guidance</h3>
                            <p className="text-gray-600">
                                Every experience comes with detailed instructions, video tutorials, and all the resources you need.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <Heart className="w-12 h-12 text-pink-600 mb-4" />
                            <h3 className="text-2xl font-semibold mb-3">Break Your Routine</h3>
                            <p className="text-gray-600">
                                Discover activities you've never tried before and expand your horizons one day at a time.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                            <Zap className="w-12 h-12 text-teal-600 mb-4" />
                            <h3 className="text-2xl font-semibold mb-3">Fits Your Schedule</h3>
                            <p className="text-gray-600">
                                From 15-minute activities to 2-hour adventures, we match experiences to your available time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Start Your Adventure?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join thousands discovering new passions every week
                    </p>
                    <Link href="/signup">
                        <Button size="lg" variant="secondary" className="text-lg bg-white text-purple-600 hover:bg-gray-100">
                            Get Started Free
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
