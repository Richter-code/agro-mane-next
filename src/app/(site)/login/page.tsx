import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FadeIn } from '@/components/ui/animations'

export const metadata = {
  title: 'Login | Agropecuária do Mané',
  description: 'Acesso à área do cliente da Agropecuária do Mané — pedidos, favoritos e histórico.'
}

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto py-24 px-4">
      <FadeIn>
        <h1 className="font-display text-3xl font-bold mb-2">Área do Cliente</h1>
        <p className="text-sm text-brandLight/70 mb-8 leading-relaxed">
          Faça login para acompanhar pedidos, acessar favoritos e receber recomendações.
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <form className="space-y-5 bg-brandDark/60 backdrop-blur rounded-xl p-6 border border-brandDark/40">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">E-mail</label>
            <Input id="email" name="email" type="email" placeholder="seuemail@exemplo.com" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Senha</label>
            <Input id="password" name="password" type="password" placeholder="••••••••" required />
          </div>
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 select-none">
              <input type="checkbox" name="remember" className="accent-brandAccent" />
              <span className="opacity-70">Manter conectado</span>
            </label>
            {/* Rota futura /recuperar ainda não existe - removida para evitar erro typedRoutes */}
            <span className="opacity-70">Esqueceu a senha? <em className="text-brandAccent">(em breve)</em></span>
          </div>
          <Button className="w-full bg-brandAccent text-brandDark hover:bg-brand" type="submit">
            Entrar
          </Button>
          <p className="text-xs text-center opacity-70">
            {/* Rota futura /registro ainda não existe - placeholder */}
            Novo por aqui? <span className="text-brandAccent">Registro em breve</span>
          </p>
        </form>
      </FadeIn>
    </div>
  )
}
