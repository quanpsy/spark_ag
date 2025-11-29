'use client'

import { useState, useRef, useEffect } from 'react'
import { ChatMessage as ChatMessageType } from '@/types'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import ChatMessage from './ui/ChatMessage'
import { Send, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ChatInterface() {
    const [messages, setMessages] = useState<ChatMessageType[]>([
        {
            role: 'assistant',
            content: "Hi! I'm so excited to help you discover amazing new experiences! 🎉\n\nLet's start by getting to know you a bit. What are some things you enjoy doing in your free time?",
            timestamp: new Date()
        }
    ])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const router = useRouter()

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const sendMessage = async () => {
        if (!input.trim() || loading) return

        const userMessage: ChatMessageType = {
            role: 'user',
            content: input,
            timestamp: new Date()
        }

        setMessages(prev => [...prev, userMessage])
        setInput('')
        setLoading(true)

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMessage]
                })
            })

            const data = await response.json()

            const assistantMessage: ChatMessageType = {
                role: 'assistant',
                content: data.message,
                timestamp: new Date()
            }

            setMessages(prev => [...prev, assistantMessage])

            // Save profile data if chat is complete
            if (data.profileComplete) {
                await saveProfile(data.profileData)
            }
        } catch (error) {
            console.error('Error sending message:', error)
            const errorMessage: ChatMessageType = {
                role: 'assistant',
                content: "I'm sorry, I encountered an error. Please try again.",
                timestamp: new Date()
            }
            setMessages(prev => [...prev, errorMessage])
        } finally {
            setLoading(false)
        }
    }

    const saveProfile = async (profileData: any) => {
        try {
            const response = await fetch('/api/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(profileData)
            })

            if (response.ok) {
                // Generate weekly package
                await fetch('/api/generate-package', { method: 'POST' })

                // Redirect to dashboard
                router.push('/dashboard')
            }
        } catch (error) {
            console.error('Error saving profile:', error)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] max-w-4xl mx-auto p-4">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 px-2">
                {messages.map((msg, idx) => (
                    <ChatMessage key={idx} message={msg} />
                ))}
                {loading && (
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                            <Loader2 className="w-5 h-5 text-white animate-spin" />
                        </div>
                        <div className="bg-gray-100 rounded-2xl px-4 py-3">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="flex gap-2 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your response..."
                    disabled={loading}
                    className="flex-1"
                />
                <Button
                    onClick={sendMessage}
                    disabled={loading || !input.trim()}
                    className="px-4"
                >
                    <Send className="w-5 h-5" />
                </Button>
            </div>
        </div>
    )
}
