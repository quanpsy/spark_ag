import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
    return clsx(inputs)
}

export function formatDate(date: string | Date): string {
    const d = new Date(date)
    return d.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
}

export function getDayOfWeek(date: string | Date): string {
    const d = new Date(date)
    return d.toLocaleDateString('en-US', { weekday: 'long' })
}

export function getCurrentDayNumber(startDate: string): number {
    const start = new Date(startDate)
    const today = new Date()
    const diffTime = Math.abs(today.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return Math.min(diffDays, 6) // 0-6 for 7 days
}
