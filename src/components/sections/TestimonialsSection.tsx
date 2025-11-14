'use client'

import { Card, CardContent } from '@/components/ui/card'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/animations'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    role: 'Proprietária - Sítio Esperança',
    image: '👩‍🌾',
    rating: 5,
    text: 'Atendimento excepcional! A equipe sempre disponível para tirar dúvidas e os produtos são de qualidade comprovada. Meus animais nunca estiveram tão saudáveis.',
  },
  {
    id: 2,
    name: 'Carlos Andrade',
    role: 'Gerente - Agro Vale',
    image: '👨‍💼',
    rating: 5,
    text: 'Trabalho com a Agro Mané há mais de 3 anos. A consultoria técnica é de alto nível e os preços são competitivos. Recomendo para quem quer crescer com qualidade.',
  },
  {
    id: 3,
    name: 'Ana Paula Rocha',
    role: 'Veterinária',
    image: '👩‍⚕️',
    rating: 5,
    text: 'Como veterinária, confio nos produtos da Agro Mané para recomendar aos meus clientes. A procedência é garantida e o atendimento é sempre profissional.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Mais de 10.000 clientes satisfeitos confiam em nós
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id}>
              <Card className="h-full bg-gradient-to-br from-white/5 to-transparent hover:from-white/10 transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <Quote className="h-10 w-10 text-brand/50" />

                  <p className="text-lg text-white/90 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <div className="font-semibold text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-white/60">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Trust badges */}
        <FadeIn delay={0.4}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-brand">+10.000</div>
              <div className="text-sm text-white/60">Clientes Ativos</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-brand">4.9/5</div>
              <div className="text-sm text-white/60">Avaliação Média</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-brand">7</div>
              <div className="text-sm text-white/60">Lojas Físicas</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-brand">15+</div>
              <div className="text-sm text-white/60">Anos de Mercado</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
