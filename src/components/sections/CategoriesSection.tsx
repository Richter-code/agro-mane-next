'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/animations'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    href: '/categorias/pet',
    icon: '🐾',
    title: 'Pet',
    description: 'Rações premium, acessórios, bem-estar e serviços para cada fase do seu melhor amigo.',
    gradient: 'from-brandDark/40 to-brand/30',
    textColor: 'text-brandAccent',
  },
  {
    href: '/categorias/piscina',
    icon: '💧',
    title: 'Piscina',
    description: 'Tratamento completo: cloro, analisadores, bombas e kits para água sempre perfeita.',
    gradient: 'from-cyan-700/40 to-cyan-400/30',
    textColor: 'text-cyan-300',
  },
  {
    href: '/categorias/jardim',
    icon: '🌱',
    title: 'Jardim',
    description: 'Sementes, ferramentas e insumos para cultivo saudável e paisagismo duradouro.',
    gradient: 'from-green-700/40 to-green-400/30',
    textColor: 'text-green-300',
  },
  {
    href: '/categorias/veterinario',
    icon: '🩺',
    title: 'Veterinário',
    description: 'Consultório próprio, orientação preventiva e cuidados especializados.',
    gradient: 'from-purple-700/40 to-purple-400/30',
    textColor: 'text-purple-300',
  },
]

export function CategoriesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Especialidades da Agropecuária
            </h2>
            <p className="text-lg text-brandLight/80 max-w-2xl mx-auto leading-relaxed">
              Do cuidado diário do seu pet ao tratamento completo da piscina e cultivo do jardim — tudo integrado em um só lugar.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <StaggerItem key={category.href}>
              <Link href={category.href as any} className="group block h-full">
                <Card className={`h-full bg-gradient-to-br ${category.gradient} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-brandDark/40`}>
                  <CardContent className="p-7 flex flex-col h-full">
                    <div className="text-5xl mb-3">{category.icon}</div>
                    <h3 className={`text-xl font-display font-bold mb-2 ${category.textColor}`}>
                      {category.title}
                    </h3>
                    <p className="text-brandLight/80 text-sm flex-grow mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-medium text-brandAccent group-hover:gap-3 transition-all">
                      <span>Ver detalhes</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
