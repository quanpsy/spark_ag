import React from 'react'

interface CardProps {
    children: React.ReactNode
    className?: string
    hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
    return (
        <div
            className={`bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden ${hover ? 'hover:shadow-xl transition-shadow duration-300' : ''
                } ${className}`}
        >
            {children}
        </div>
    )
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return <div className={`p-6 border-b border-gray-100 ${className}`}>{children}</div>
}

export function CardContent({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return <div className={`p-6 ${className}`}>{children}</div>
}

export function CardFooter({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return <div className={`p-6 border-t border-gray-100 ${className}`}>{children}</div>
}
