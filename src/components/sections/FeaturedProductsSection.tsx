'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/ui/animations'
import { ShoppingCart, Star, Heart } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'
import { useState } from 'react'

const featuredProducts = [
  {
    id: 1,
    name: 'Ração Premium Golden Para Cães Adultos',
    category: 'Pet',
    price: 189.90,
    oldPrice: 229.90,
    rating: 4.8,
    reviews: 342,
    image: '/assets/products/racao-golden.svg',
    badge: '20% OFF',
    inStock: true,
  },
  {
    id: 2,
    name: 'Cloro Granulado HTH 10kg',
    category: 'Piscina',
    price: 149.90,
    rating: 4.9,
    reviews: 128,
    image: '/assets/products/cloro-hth.svg',
    badge: 'Mais Vendido',
    inStock: true,
  },
  {
    id: 3,
    name: 'Kit Ferramentas para Jardim Profissional',
    category: 'Jardim',
    price: 299.90,
    oldPrice: 399.90,
    rating: 4.7,
    reviews: 89,
    image: '/assets/products/kit-jardim.svg',
    badge: 'Oferta',
    inStock: true,
  },
  {
    id: 4,
    name: 'Antipulgas e Carrapatos Bravecto',
    category: 'Pet',
    price: 159.90,
    rating: 5.0,
    reviews: 256,
    image: '/assets/products/bravecto.svg',
    badge: 'Top 1',
    inStock: true,
  },
]

export function FeaturedProductsSection() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Produtos em Destaque
              </h2>
              <p className="text-xl text-white/70">
                Selecionados especialmente para você
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="mt-6 md:mt-0">
              <Link href="/produtos">
                Ver Todos os Produtos
              </Link>
            </Button>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <StaggerItem key={product.id}>
              <Card className="group h-full overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden bg-white/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.badge && (
                      <Badge variant="default" className="shadow-lg">
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-all"
                    aria-label="Adicionar aos favoritos"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        favorites.includes(product.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-white'
                      }`}
                    />
                  </button>
                </div>

                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <span>{product.category}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-yellow-500 text-yellow-500" />
                      <span>{product.rating}</span>
                      <span className="text-xs">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg leading-tight line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-brand">
                      {formatCurrency(product.price)}
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-white/50 line-through">
                        {formatCurrency(product.oldPrice)}
                      </span>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="p-5 pt-0">
                  <Button className="w-full" size="lg">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Adicionar ao Carrinho
                  </Button>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
