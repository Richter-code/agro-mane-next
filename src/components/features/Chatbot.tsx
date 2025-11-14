'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { X, Send, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const quickQuestions = [
  'Qual a melhor ração para filhotes?',
  'Como tratar água de piscina?',
  'Dicas para jardim no verão',
  'Horário de atendimento veterinário',
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([
    {
      text: 'Olá! Sou o assistente virtual da Agro Mané. Como posso te ajudar hoje?',
      sender: 'bot',
    },
  ])

  const handleSend = () => {
    if (!message.trim()) return

    setMessages((prev) => [...prev, { text: message, sender: 'user' }])
    setMessage('')

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: 'Obrigado pela mensagem! Em breve um dos nossos especialistas entrará em contato. Para atendimento imediato, ligue (19) 3437-7777.',
          sender: 'bot',
        },
      ])
    }, 1000)
  }

  const handleQuickQuestion = (question: string) => {
    setMessages((prev) => [...prev, { text: question, sender: 'user' }])
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: 'Ótima pergunta! Um especialista entrará em contato em breve para te ajudar com isso. Você também pode nos ligar em (19) 3437-7777.',
          sender: 'bot',
        },
      ])
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-brand shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        onClick={() => setIsOpen(true)}
        aria-label="Abrir chat"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)]"
          >
            <Card className="shadow-2xl">
              <div className="bg-gradient-to-r from-brand to-green-500 p-4 rounded-t-xl flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">Assistente Agro Mané</h3>
                  <p className="text-xs text-white/80">Online agora</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                  aria-label="Fechar chat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <CardContent className="p-4 space-y-4">
                {/* Messages */}
                <div className="h-[300px] overflow-y-auto space-y-3 pr-2">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                          msg.sender === 'user'
                            ? 'bg-brand text-white'
                            : 'bg-white/10 text-white'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Questions */}
                {messages.length === 1 && (
                  <div className="space-y-2">
                    <p className="text-xs text-white/60">Perguntas rápidas:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickQuestions.map((q, i) => (
                        <button
                          key={i}
                          onClick={() => handleQuickQuestion(q)}
                          className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs transition-colors"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Digite sua mensagem..."
                    className="flex-1"
                  />
                  <Button size="icon" onClick={handleSend}>
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
