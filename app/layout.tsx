import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'ExperienceHub - Discover New Adventures',
    description: 'AI-powered personalized weekly experiences to expand your horizons',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navigation />
                <main>{children}</main>
            </body>
        </html>
    )
}
