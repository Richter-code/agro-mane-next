import Link from 'next/link'

// Nota: esta loja oferece orientação veterinária todos os dias — ver Instagram/Facebook para agendamento
const items = [
  { href: '/categorias/pet', icon: '🐾', title: 'Pet', desc: 'Rações, petiscos, higiene e acessórios.' },
  { href: '/categorias/piscina', icon: '🏊', title: 'Piscina', desc: 'Cloro, analisadores e soluções.' },
  { href: '/categorias/jardim', icon: '🌿', title: 'Jardim', desc: 'Ferramentas, substratos e cuidados.' },
  { href: '/categorias/veterinario', icon: '🩺', title: 'Veterinário', desc: 'Assistência Veterinária diariamente.' },
]

export default function Categories(){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((it) => (
        <Link
          key={it.href}
          href={it.href}
          aria-label={`Ir para ${it.title}`}
          className="block rounded-xl border border-white/15 bg-white/5 shadow transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand cursor-pointer"
        >
          <article role="group" aria-labelledby={`cat-${it.title.toLowerCase()}`} className="p-4 h-full">
            <div className="text-2xl">{it.icon}</div>
            <h3 id={`cat-${it.title.toLowerCase()}`} className="mt-2 font-bold text-lg">{it.title}</h3>
            <p className="opacity-75 text-sm">{it.desc}</p>
          </article>
        </Link>
      ))}
    </div>
  )
}
