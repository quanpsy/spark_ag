import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({ req, res })

    const {
        data: { session },
    } = await supabase.auth.getSession()

    // Protected routes
    if (req.nextUrl.pathname.startsWith('/dashboard') ||
        req.nextUrl.pathname.startsWith('/chat') ||
        req.nextUrl.pathname.startsWith('/profile') ||
        req.nextUrl.pathname.startsWith('/experience')) {
        if (!session) {
            return NextResponse.redirect(new URL('/login', req.url))
        }
    }

    // Auth routes (redirect to dashboard if already logged in)
    if (req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/signup') {
        if (session) {
            return NextResponse.redirect(new URL('/dashboard', req.url))
        }
    }

    return res
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}
