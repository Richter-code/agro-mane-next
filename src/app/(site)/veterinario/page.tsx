'use client'

import { Stethoscope, Heart, Calendar, Clock, Phone, CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/animations'
import Link from 'next/link'
import Image from 'next/image'

const servicos = [
  {
    icon: <Stethoscope className="h-8 w-8" />,
    titulo: 'Consultas Gerais',
    descricao: 'Avaliação completa, diagnóstico preventivo e orientação personalizada para cada fase da vida do seu pet.',
  },
  {
    icon: <Heart className="h-8 w-8" />,
    titulo: 'Vacinação & Vermifugação',
    descricao: 'Cartão de vacinas atualizado, vermífugos de qualidade e orientação sobre calendário de imunização.',
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    titulo: 'Consultas Agendadas',
    descricao: 'Marque seu horário com antecedência e evite filas. Atendimento rápido e humanizado.',
  },
  {
    icon: <CheckCircle2 className="h-8 w-8" />,
    titulo: 'Orientação Nutricional',
    descricao: 'Recomendação de rações premium, suplementos e dietas específicas para cada raça e idade.',
  },
]

const diferenciais = [
  'Consultório moderno e equipado',
  'Profissionais experientes e cadastrados',
  'Atendimento diário incluindo sábados',
  'Produtos veterinários de qualidade',
  'Orientação preventiva sem custo adicional',
  'Integração com loja física (rações, medicamentos)',
]

export default function VeterinarioPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <FadeIn>
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brandDark/70 border border-brandDark text-brandLight text-xs tracking-wide mb-4">
              <Stethoscope className="h-4 w-4 text-brandAccent" />
              <span>Consultório Veterinário Próprio</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold">
              Cuidados Veterinários<br />de Qualidade para seu Pet
            </h1>
            <p className="text-lg text-brandLight/80 max-w-3xl mx-auto leading-relaxed">
              Consultório próprio com profissionais experientes, atendimento diário e orientação preventiva. 
              Porque cuidar do seu melhor amigo é nossa prioridade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" asChild className="bg-brandAccent text-brandDark hover:bg-brand">
                <a href="https://wa.me/5519934377777?text=Olá! Gostaria de agendar uma consulta veterinária." target="_blank" rel="noopener">
                  Agendar Consulta
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-brandAccent/60 text-brandLight">
                <Link href="/unidades" as={"/unidades" as any}>Ver Unidades</Link>
              </Button>
            </div>
          </div>
        </FadeIn>

        {/* Imagem destaque */}
        <FadeIn delay={0.2}>
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden mb-16 border border-brandDark/40">
            <div className="absolute inset-0 bg-gradient-to-br from-brandDark/60 to-brand/30 z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20 text-center p-8">
              <div>
                <Stethoscope className="h-16 w-16 mx-auto mb-4 text-brandAccent" />
                <p className="text-lg font-medium text-brandLight">
                  Consultório equipado com ambiente acolhedor e seguro
                </p>
                <p className="text-sm text-brandLight/70 mt-2">
                  [Substitua por foto real do consultório em /public/agromane/consultorio-vet.jpg]
                </p>
              </div>
            </div>
            {/* Placeholder - substitua por Image real quando tiver foto */}
            <div className="absolute inset-0 bg-brandDark/80" />
          </div>
        </FadeIn>

        {/* Serviços */}
        <div className="mb-20">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Nossos Serviços Veterinários
            </h2>
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-2 gap-6">
            {servicos.map((servico, index) => (
              <StaggerItem key={index}>
                <Card className="h-full bg-gradient-to-br from-brandDark/60 to-brand/20 border-brandDark/40 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-brandAccent/20 flex items-center justify-center text-brandAccent">
                      {servico.icon}
                    </div>
                    <h3 className="font-display text-xl font-bold">{servico.titulo}</h3>
                    <p className="text-brandLight/80 leading-relaxed">{servico.descricao}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* Diferenciais */}
        <FadeIn delay={0.4}>
          <div className="bg-gradient-to-br from-brand/30 to-brandDark/60 rounded-2xl p-10 border border-brandDark/40 mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
              Por que escolher nosso consultório?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {diferenciais.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brandAccent flex-shrink-0 mt-0.5" />
                  <span className="text-brandLight/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* CTA Agendamento */}
        <FadeIn delay={0.6}>
          <Card className="bg-gradient-to-br from-brandDark/80 to-brand/30 border-brandDark/40">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="font-display text-3xl font-bold">
                Pronto para cuidar do seu pet?
              </h2>
              <p className="text-brandLight/80 max-w-2xl mx-auto leading-relaxed">
                Agende uma consulta pelo WhatsApp ou ligue diretamente para nossa central. 
                Atendemos de segunda a sábado com horários flexíveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button size="lg" asChild className="bg-brandAccent text-brandDark hover:bg-brand">
                  <a href="https://wa.me/5519934377777?text=Olá! Gostaria de agendar uma consulta veterinária." target="_blank" rel="noopener">
                    <Phone className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-brandAccent/60 text-brandLight">
                  <a href="tel:1934377777">
                    <Phone className="mr-2 h-5 w-5" />
                    (19) 3437-7777
                  </a>
                </Button>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-brandLight/70 pt-4">
                <Clock className="h-4 w-4" />
                <span>Seg-Sex: 8h-19h | Sáb: 8h-18h</span>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  )
}
