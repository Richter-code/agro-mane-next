import { HeroSection } from '@/components/sections/HeroSection'
import { CategoriesSection } from '@/components/sections/CategoriesSection'
import { FeaturedProductsSection } from '@/components/sections/FeaturedProductsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
