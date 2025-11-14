'use client'

import { MapPin, Phone, Clock, Car, Stethoscope, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/animations'
import Link from 'next/link'

const unidades = [
  {
    nome: 'Centro — R. São José',
    endereco: 'R. São José, 1122 — Alto',
    cidade: 'Piracicaba — SP',
    telefone: '(19) 3437-7777',
    whatsapp: '19934377777',
    horario: 'Seg-Sex: 8h-19h | Sáb: 8h-18h | Dom: 9h-13h',
    destaques: ['Moderna e rápida', 'Estacionamento próprio', 'Consultório veterinário'],
    mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.8!2d-47.6489!3d-22.7245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzI4LjIiUyA0N8KwMzgnNTYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890',
  },
  {
    nome: 'Unidade Virgílio',
    endereco: 'Virgílio da Silva Fagundes, 675',
    cidade: 'Piracicaba — SP',
    telefone: '(19) 3437-7777',
    whatsapp: '19934377777',
    horario: 'Seg-Sex: 8h-19h | Sáb: 8h-17h',
    destaques: ['Amplo estacionamento', 'Atendimento pet especializado', 'Área de piscina completa'],
    mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.8!2d-47.6489!3d-22.7245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzI4LjIiUyA0N8KwMzgnNTYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890',
  },
  {
    nome: 'Unidade Paulista',
    endereco: 'Av. Paulista (em breve)',
    cidade: 'Piracicaba — SP',
    telefone: '(19) 3437-7777',
    whatsapp: '19934377777',
    horario: 'Seg-Sáb: 8h-18h',
    destaques: ['Grande variedade jardim', 'Produtos agropecuários', 'Área pet completa'],
    mapa: null,
  },
]

export default function UnidadesPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16 space-y-4">
            <h1 className="font-display text-4xl md:text-6xl font-bold">
              Nossas Unidades em Piracicaba
            </h1>
            <p className="text-lg text-brandLight/80 max-w-3xl mx-auto leading-relaxed">
              Unidades modernas com estacionamento próprio, consultório veterinário e atendimento especializado. 
              Visite a loja mais próxima e descubra por que mais de 20 mil amigos confiam na Agropecuária do Mané.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="space-y-12">
          {unidades.map((unidade, index) => (
            <StaggerItem key={index}>
              <Card className="overflow-hidden bg-gradient-to-br from-brandDark/60 to-black/40 border-brandDark/40">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Info */}
                    <div className="p-8 space-y-6">
                      <div>
                        <h2 className="font-display text-2xl font-bold text-brandAccent mb-2">
                          {unidade.nome}
                        </h2>
                        <div className="flex items-start gap-2 text-brandLight/80">
                          <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                          <div>
                            <p>{unidade.endereco}</p>
                            <p className="text-sm opacity-70">{unidade.cidade}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-brand" />
                          <a href={`tel:${unidade.telefone.replace(/\D/g, '')}`} className="hover:text-brandAccent transition-colors">
                            {unidade.telefone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="h-5 w-5 text-brand" />
                          <span className="text-brandLight/80">{unidade.horario}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-brandAccent">Destaques</h3>
                        <ul className="space-y-2">
                          {unidade.destaques.map((destaque, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              {destaque.includes('Estacionamento') && <Car className="h-4 w-4 text-brand" />}
                              {destaque.includes('Consultório') && <Stethoscope className="h-4 w-4 text-brand" />}
                              {!destaque.includes('Estacionamento') && !destaque.includes('Consultório') && <Star className="h-4 w-4 text-brand" />}
                              <span className="text-brandLight/80">{destaque}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-3 pt-4">
                        <Button asChild size="sm" className="bg-brandAccent text-brandDark hover:bg-brand">
                          <a href={`https://wa.me/${unidade.whatsapp}`} target="_blank" rel="noopener">
                            WhatsApp
                          </a>
                        </Button>
                        <Button asChild size="sm" variant="outline" className="border-brandAccent/60 text-brandLight">
                          <Link href="/contato" as={"/contato" as any}>Como Chegar</Link>
                        </Button>
                      </div>
                    </div>

                    {/* Map */}
                    <div className="h-64 md:h-auto bg-brandDark/40 flex items-center justify-center">
                      {unidade.mapa ? (
                        <iframe
                          src={unidade.mapa}
                          width="100%"
                          height="100%"
                          className="border-0"
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Mapa ${unidade.nome}`}
                        />
                      ) : (
                        <div className="text-center p-8">
                          <MapPin className="h-12 w-12 mx-auto mb-3 text-brand/50" />
                          <p className="text-sm text-brandLight/60">Mapa em breve</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <FadeIn delay={0.6}>
          <div className="mt-16 text-center bg-gradient-to-br from-brandDark/80 to-brand/20 rounded-2xl p-12 border border-brandDark/40">
            <h2 className="font-display text-3xl font-bold mb-4">
              Não encontrou a unidade mais próxima?
            </h2>
            <p className="text-brandLight/80 mb-6 max-w-xl mx-auto">
              Entre em contato conosco e descubra qual loja fica mais perto de você. Estamos sempre expandindo para melhor atendê-lo!
            </p>
            <Button asChild size="lg" className="bg-brandAccent text-brandDark hover:bg-brand">
              <Link href="/contato" as={"/contato" as any}>Falar Conosco</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}