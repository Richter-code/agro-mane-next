'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/animations'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand/20 via-transparent to-blue-500/20" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Precisa de Ajuda ou Quer um{' '}
              <span className="text-brand">Projeto Personalizado?</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para te atender. 
              Consultoria gratuita e orientação veterinária todos os dias.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/contato">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                asChild
              >
                <a href="tel:1934377777">
                  <Phone className="mr-2 h-5 w-5" />
                  (19) 3437-7777
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-6 justify-center items-center pt-8 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Atendimento online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Resposta em até 1h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Consultoria gratuita</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
