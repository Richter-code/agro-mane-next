import Image from 'next/image'
import Categories from '@/components/Categories'

export default function Home(){
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-white/10 bg-white/5 p-0 overflow-hidden">
        <div className="grid place-items-center min-h-[220px] lg:min-h-[360px]">
          <Image src="/assets/hero-agromane.jpg" alt="Agro Mané — Pet, Piscina, Jardim e Vet" width={851} height={315} priority className="max-w-[1200px] w-full h-auto object-contain" />
        </div>
        <div className="p-4">
          <p className="opacity-80">Pet, Piscina e Jardim, simples assim! 7 lojas em Piracicaba.</p>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-3">Categorias</h2>
        <Categories />
      </section>
    </div>
  )
}
