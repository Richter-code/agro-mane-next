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

## Deploy (Vercel recomendado)

- Vercel (CLI ou Dashboard)
  - Configure as variáveis de ambiente no projeto (Project Settings > Environment Variables)
  - Opcional (CLI): `vercel`, depois `vercel --prod`
- Execução manual/servidor próprio
  - `pnpm install && pnpm build && pnpm start`
  - Rodar atrás de um proxy (Nginx/Caddy) com HTTPS e variáveis via `.env` (não comitar)

````
