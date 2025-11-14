'use client'

import Link from 'next/link'
import { ShoppingCart, Menu, Search, X, Leaf } from 'lucide-react'
import { Logo } from '@/components/brand/Logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const mainMenu = [
  { href: '/produtos', label: 'Produtos' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/unidades', label: 'Unidades' },
  { href: '/veterinario', label: 'Veterinário' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
]

const categories = [
  { href: '/categorias/pet', label: 'Pet', icon: '🐾', desc: 'Rações premium, acessórios e cuidados.' },
  { href: '/categorias/piscina', label: 'Piscina', icon: '💧', desc: 'Tratamento, bombas, kits de análise.' },
  { href: '/categorias/jardim', label: 'Jardim', icon: '🌱', desc: 'Sementes, ferramentas e insumos.' },
  { href: '/categorias/veterinario', label: 'Veterinário', icon: '🩺', desc: 'Consultório próprio e orientação.' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full font-body">
      {/* Top bar */}
      <div className="w-full bg-brandDark text-brandLight text-xs tracking-wide">
        <div className="container mx-auto px-4 py-1 flex items-center justify-between">
          <span className="flex items-center gap-2"><Leaf className="h-3 w-3" /> Piracicaba – SP • Unidades modernas com consultório veterinário</span>
          <span className="hidden sm:inline">+20 mil amigos nas redes</span>
        </div>
      </div>
      <div className="border-b border-brandDark/40 bg-black/75 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Marca centralizado no componente dedicado */}
          <Logo variant="horizontal" withText className="text-brandLight" />

          {/* Desktop Navigation principal */}
          <nav className="hidden lg:flex items-center gap-6">
            {mainMenu.map(item => (
              <Link
                key={item.href}
                href={item.href as any}
                className="text-sm font-medium transition-colors hover:text-brandAccent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search Desktop */}
            {!searchOpen && (
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            )}

            {searchOpen && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '200px', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="hidden md:block"
              >
                <div className="relative">
                  <Input
                    placeholder="Buscar produtos..."
                    className="pr-8"
                    autoFocus
                    onBlur={() => setSearchOpen(false)}
                  />
                  <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
                </div>
              </motion.div>
            )}

            {/* Cart */}
            <Button variant="ghost" size="icon" asChild>
              <Link href="/carrinho">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Carrinho</span>
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu + Mega categorias */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-brandDark/40 bg-brandDark/95"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {/* Mobile Search */}
              <div className="relative">
                <Input placeholder="Buscar produtos..." />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              </div>

              {/* Mobile Categories */}
              <nav className="flex flex-col gap-2">
                {mainMenu.map(item => (
                  <Link
                    key={item.href}
                    href={item.href as any}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-brandDark/60"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>

              <div className="pt-4 border-t border-brandDark/50">
                <h4 className="text-xs uppercase tracking-wider text-brandAccent mb-2">Categorias</h4>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map(cat => (
                    <Link
                      key={cat.href}
                      href={cat.href as any}
                      className="group rounded-lg p-3 bg-black/30 hover:bg-black/50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="text-lg mb-1">{cat.icon}</div>
                      <div className="text-sm font-medium">{cat.label}</div>
                      <div className="text-[11px] opacity-60 leading-tight">{cat.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </header>
  )
}
