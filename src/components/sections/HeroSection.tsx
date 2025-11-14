'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/animations'
import { ArrowRight, Sparkles, Leaf } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
      {/* Fundo temático */}
      <div className="absolute inset-0 bg-hero-agromane" />
      <div className="absolute inset-0 bg-gradient-to-br from-brandDark/80 via-black/40 to-brand/30 mix-blend-overlay" />
      {/* Ornamentos */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-brand/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-brandDark/40 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brandDark/70 border border-brandDark text-brandLight text-xs tracking-wide mb-6">
              <Leaf className="h-4 w-4 text-brandAccent" />
              <span>Agropecuária do Mané • Piracicaba SP</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
              Tudo o que você precisa
              <span className="block mt-3">em um só lugar!</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-brandLight/80 max-w-3xl mx-auto leading-relaxed">
              Mais de <strong className="text-brandAccent">20 mil amigos</strong> nas redes sociais, unidades modernas com
              consultório veterinário e estacionamento próprio. Pet, Piscina, Jardim e cuidados especializados para seu dia a dia.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-brandAccent text-brandDark hover:bg-brand">
                <Link href="/produtos" as={"/produtos" as any}>
                  Ver Produtos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-brandAccent/60 text-brandLight hover:bg-brandDark/60">
                <Link href="/contato" as={"/contato" as any}>
                  Falar com Especialista
                </Link>
              </Button>
              <Button size="lg" variant="ghost" asChild className="text-brandAccent hover:bg-brandDark/50">
                <Link href="/unidades" as={"/unidades" as any}>Ver Unidades</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-8 justify-center items-center pt-12 text-xs md:text-sm text-brandLight/70">
              {[
                { icon: '🌿', label: 'Unidades modernas' },
                { icon: '🩺', label: 'Consultório veterinário' },
                { icon: '🚗', label: 'Estacionamento próprio' },
                { icon: '🤝', label: '+20 mil seguidores' }
              ].map(item => (
                <div key={item.label} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-brandDark/60 flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
