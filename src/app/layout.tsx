import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agropecuária do Mané — Pet, Piscina e Jardim',
  description: 'Pet, Piscina e Jardim, simples assim!'
}

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="min-h-screen">
        <header className="sticky top-0 backdrop-blur bg-black/40 border-b border-white/10">
          <div className="container flex items-center justify-between py-3">
            <a href="/" className="inline-flex items-center gap-2 font-bold">
              <img src="/assets/logo.svg" alt="Agro Mané" className="h-7" />
              <span>Agropecuária do Mané</span>
            </a>
            <nav className="hidden md:flex items-center gap-2">
              <a className="px-2 py-1 rounded hover:bg-white/10" href="/produtos">Produtos</a>
              <a className="px-2 py-1 rounded hover:bg-white/10" href="/servicos">Serviços</a>
              <a className="px-2 py-1 rounded hover:bg-white/10" href="/unidades">Unidades</a>
              <a className="px-2 py-1 rounded hover:bg-white/10" href="/sobre">Sobre</a>
              <a className="px-2 py-1 rounded border border-white/20" href="/contato">Contato</a>
            </nav>
          </div>
        </header>
        <main className="container py-6">{children}</main>
        <footer className="container py-6 text-sm opacity-70">© {new Date().getFullYear()} Agropecuária do Mané</footer>
      </body>
    </html>
  )
}
