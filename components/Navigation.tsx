'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from './ui/Button'
import { createClient } from '@/lib/supabase/client'
import { Home, MessageSquare, User, LogOut, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navigation() {
    const pathname = usePathname()
    const router = useRouter()
    const supabase = createClient()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        checkAuth()
    }, [])

    const checkAuth = async () => {
        const { data: { session } } = await supabase.auth.getSession()
        setIsAuthenticated(!!session)
    }

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push('/')
    }

    const isActive = (path: string) => pathname === path

    if (pathname === '/' || pathname === '/login' || pathname === '/signup') {
        return (
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center gap-2">
                            <Sparkles className="w-6 h-6 text-purple-600" />
                            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                ExperienceHub
                            </span>
                        </Link>

                        <div className="flex gap-3">
                            <Link href="/login">
                                <Button variant="ghost">Sign In</Button>
                            </Link>
                            <Link href="/signup">
                                <Button>Get Started</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-purple-600" />
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                            ExperienceHub
                        </span>
                    </Link>

                    <div className="flex items-center gap-6">
                        <Link href="/dashboard">
                            <button
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive('/dashboard')
                                        ? 'bg-purple-100 text-purple-700'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <Home className="w-5 h-5" />
                                <span className="hidden sm:inline">Dashboard</span>
                            </button>
                        </Link>

                        <Link href="/chat">
                            <button
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive('/chat')
                                        ? 'bg-purple-100 text-purple-700'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <MessageSquare className="w-5 h-5" />
                                <span className="hidden sm:inline">Chat</span>
                            </button>
                        </Link>

                        <Link href="/profile">
                            <button
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${isActive('/profile')
                                        ? 'bg-purple-100 text-purple-700'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <User className="w-5 h-5" />
                                <span className="hidden sm:inline">Profile</span>
                            </button>
                        </Link>

                        <button
                            onClick={handleSignOut}
                            className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <LogOut className="w-5 h-5" />
                            <span className="hidden sm:inline">Sign Out</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
