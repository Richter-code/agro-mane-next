import './globals.css'
import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { getSocialMeta } from '@/lib/brand'
import { Chatbot } from '@/components/features/Chatbot'
import Link from 'next/link'
import { Inter, Merriweather } from 'next/font/google'

// Fontes: body (Inter), títulos (Merriweather)
const bodyFont = Inter({ subsets: ['latin'], variable: '--font-body' })
const displayFont = Merriweather({ subsets: ['latin'], weight: ['700','900'], variable: '--font-display' })

const social = getSocialMeta()

export const metadata: Metadata = {
  title: 'Agropecuária do Mané — Piracicaba SP | Pet, Piscina, Jardim & Veterinário',
  description: 'Tudo o que você precisa em um só lugar: Pet, Piscina, Jardim e consultório veterinário próprio. Mais de 20 mil amigos nas redes e unidades modernas em Piracicaba - SP.',
  keywords: ['Agropecuária do Mané', 'Agro Mané', 'Piracicaba', 'Pet Piracicaba', 'Piscina Piracicaba', 'Jardim Piracicaba', 'Veterinário Piracicaba', 'AgroMané'],
  openGraph: {
    title: 'Agropecuária do Mané — Piracicaba SP',
    description: 'Pet, Piscina, Jardim & Veterinário. Unidades modernas com consultório e estacionamento próprio.',
    type: 'website',
    locale: 'pt_BR'
  },
  alternates: { canonical: 'https://agro-mane-next-i7zuwc3a3-alan-s-projects-1ccac041.vercel.app' },
  authors: [{ name: 'Agropecuária do Mané' }]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning className={`${bodyFont.variable} ${displayFont.variable} dark`}>
      <body className="min-h-screen bg-hero-agromane bg-black text-brandLight antialiased font-body">
        <Header />
        {children}
        <Chatbot />
        <footer className="border-t border-brandDark/30 bg-brandDark/80 backdrop-blur-xl mt-24">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <Link href="/" className="flex items-center gap-2 text-2xl font-display font-bold">
                  <span className="text-3xl">�</span>
                  <span>Agropecuária do Mané</span>
                </Link>
                <p className="text-sm text-brandLight/80 leading-relaxed">
                  Onde cuidar do seu pet, da piscina e do jardim é nosso negócio. Unidades modernas com consultório veterinário e estacionamento próprio.
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold mb-4 text-brandAccent">Categorias</h3>
                <ul className="space-y-2 text-sm text-brandLight/80">
                  <li><Link href="/categorias/pet" className="hover:text-brandAccent transition-colors">Pet</Link></li>
                  <li><Link href="/categorias/piscina" className="hover:text-brandAccent transition-colors">Piscina</Link></li>
                  <li><Link href="/categorias/jardim" className="hover:text-brandAccent transition-colors">Jardim</Link></li>
                  <li><Link href="/categorias/veterinario" className="hover:text-brandAccent transition-colors">Veterinário</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-display font-bold mb-4 text-brandAccent">Institucional</h3>
                <ul className="space-y-2 text-sm text-brandLight/80">
                  <li><Link href="/sobre" className="hover:text-brandAccent transition-colors">Sobre a Marca</Link></li>
                  <li><Link href="/unidades" className="hover:text-brandAccent transition-colors">Unidades</Link></li>
                  <li><Link href="/servicos" className="hover:text-brandAccent transition-colors">Serviços Veterinários</Link></li>
                  <li><Link href="/contato" className="hover:text-brandAccent transition-colors">Contato</Link></li>
                  <li><Link href="/login" className="hover:text-brandAccent transition-colors" as={"/login" as any}>Área do Cliente</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-display font-bold mb-4 text-brandAccent">Piracicaba – SP</h3>
                <ul className="space-y-2 text-sm text-brandLight/80">
                  <li>R. São José, 1122 — Alto</li>
                  <li>Virgílio da Silva Fagundes, 675</li>
                  <li><a href="tel:1934377777" className="hover:text-brandAccent transition-colors">(19) 3437-7777</a></li>
                  <li>
                    <a
                      href="https://www.facebook.com/agropecuariadomane"
                      target="_blank"
                      rel="noopener"
                      className="hover:text-brandAccent transition-colors"
                    >
                      Facebook (+20 mil amigos)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/agropecuariadomane/"
                      target="_blank"
                      rel="noopener"
                      className="hover:text-brandAccent transition-colors"
                    >
                      Instagram Oficial
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-brandDark/40 text-center text-xs text-brandLight/60">
              © {new Date().getFullYear()} Agropecuária do Mané. Marca local consolidada em Piracicaba — SP.
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
