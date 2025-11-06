interface Props { params: { slug: string } }

export default function CategoriaPage({ params }: Props){
  const map: Record<string, string> = {
    pet: 'Pet', piscina: 'Piscina', jardim: 'Jardim', veterinario: 'Veterinário'
  }
  const title = map[params.slug] || params.slug
  return (
    <div>
      <h1 className="text-2xl font-bold">Categoria: {title}</h1>
      <p className="opacity-75">Em breve: listagem de produtos da categoria.</p>
    </div>
  )
}
