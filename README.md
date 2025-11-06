````markdown
# Agro Mané (Next.js)

Projeto Next.js 14 com App Router, Tailwind e testes (RTL) — versão profissional do site.

> Nota: este repositório está sendo usado como backup/versionamento antes do deploy real. Não comitar segredos (.env, .env.local). Use `.env.example` para documentar variáveis quando necessário.

## Scripts

- `pnpm dev` — inicia em http://localhost:3001
- `pnpm build` — build de produção
- `pnpm start` — serve produção
- `pnpm test` — executa Jest (RTL)

## Estrutura
- `src/app/(site)` — páginas principais
- `src/components/Categories.tsx` — cards de categorias com Link
- `src/app/api/*` — rotas de API (newsletter, contact, checkout) gravando em `data/*.json`
- `public/assets` — assets estáticos (logo, hero)

## Observações
- Copie `hero-agromane.jpg` para `public/assets/` para exibir o herói localmente.
- Os testes e o TypeScript dependem das dependências dev do `package.json`. Rode `pnpm install` primeiro.

## Teste rápido
```bash
pnpm install
pnpm dev
# Abra http://localhost:3001
```

## Testes
```bash
pnpm test
```

## Deploy

Consulte o arquivo [DEPLOY.md](./DEPLOY.md) para instruções completas de:
- Conectar ao GitHub
- Deploy automático na Vercel
- Configuração de domínio personalizado
- Variáveis de ambiente
- CI/CD e deploy de preview

**Resumo rápido (Vercel)**:
1. Crie o repositório no GitHub e faça push
2. Importe o projeto em https://vercel.com/new
3. Configure variáveis de ambiente (se necessário)
4. Deploy automático a cada push em `main`

````
