import React from 'react'
import { ChatMessage as ChatMessageType } from '@/types'
import { User, Bot } from 'lucide-react'

interface ChatMessageProps {
    message: ChatMessageType
}

export default function ChatMessage({ message }: ChatMessageProps) {
    const isUser = message.role === 'user'

    return (
        <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'} animate-fade-in`}>
            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${isUser ? 'bg-gradient-to-br from-purple-500 to-blue-500' : 'bg-gradient-to-br from-green-500 to-teal-500'
                }`}>
                {isUser ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
            </div>

            <div className={`max-w-[70%] rounded-2xl px-4 py-3 ${isUser
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
        </div>
    )
}
