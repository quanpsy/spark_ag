import ChatInterface from '@/components/ChatInterface'

export default function ChatPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
            <div className="max-w-5xl mx-auto py-8">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold mb-2">Let's Get to Know You</h1>
                    <p className="text-gray-600">
                        Chat with our AI to create your personalized experience profile
                    </p>
                </div>

                <ChatInterface />
            </div>
        </div>
    )
}
