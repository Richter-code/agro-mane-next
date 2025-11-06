# Deploy do Agro Mané Next.js

Este guia descreve como conectar o projeto ao GitHub e fazer deploy automático na Vercel.

---

## 1. Conectar ao GitHub

O projeto já está com Git inicializado, `.gitignore` configurado e commit realizado (`chore: initial project backup`).

### Passos para criar o repositório remoto e fazer push:

**Opção A: Criar repositório via navegador (recomendado se não tiver `gh` autenticado)**

1. Acesse: https://github.com/new
2. Preencha:
   - **Repository name**: `agro-mane-next`
   - **Description** (opcional): "Agro Mané — Next.js + Tailwind + TypeScript (versão profissional)"
   - **Visibility**: Public ou Private (sua escolha)
   - **NÃO** marque "Initialize this repository with a README" (já temos arquivos)
3. Clique em "Create repository"
4. Copie a URL do repositório (SSH ou HTTPS), por exemplo:
   - SSH: `git@github.com:SEU_USUARIO/agro-mane-next.git`
   - HTTPS: `https://github.com/SEU_USUARIO/agro-mane-next.git`

5. No terminal, rode:

```bash
cd ~/Downloads/agro-mane-next

# Adicionar o remoto (substitua <URL> pela URL copiada)
git remote add origin <URL>

# Verificar
git remote -v

# Push da branch main com upstream
git push -u origin main
```

**Opção B: Criar repositório via GitHub CLI (se você tiver `gh` autenticado)**

```bash
cd ~/Downloads/agro-mane-next

# Criar repo público (ou use --private)
gh repo create agro-mane-next --public --source=. --remote=origin -y

# Push
git push -u origin main
```

---

## 2. Deploy na Vercel (automático)

A Vercel detecta projetos Next.js e configura o build automaticamente.

### Passos:

1. **Acesse**: https://vercel.com/new
2. **Importe o repositório GitHub**:
   - Clique em "Import Git Repository"
   - Selecione `agro-mane-next` (autorize o acesso ao GitHub se necessário)
3. **Configure o projeto**:
   - **Project Name**: `agro-mane-next` (ou personalize)
   - **Framework Preset**: Next.js (detectado automaticamente)
   - **Root Directory**: `.` (raiz)
   - **Build Command**: `pnpm build` (ou `npm run build` se não usar pnpm)
   - **Output Directory**: `.next` (padrão)
   - **Install Command**: `pnpm install` (ou `npm install`)
4. **Variáveis de ambiente** (se necessário):
   - Clique em "Environment Variables"
   - Adicione qualquer `.env` necessário (ex.: chaves de API, tokens)
   - **Importante**: não versione `.env` no Git (já está no `.gitignore`)
5. **Deploy**:
   - Clique em "Deploy"
   - A Vercel fará o build e publicará automaticamente
   - Você receberá uma URL pública (ex.: `https://agro-mane-next.vercel.app`)

### Deploy automático (CI/CD):

Após a configuração inicial, **todo push para `main`** no GitHub dispara um novo deploy automaticamente na Vercel.

Para deploy de preview (branches de feature):
- Crie uma branch: `git checkout -b feature/nova-funcionalidade`
- Faça push: `git push origin feature/nova-funcionalidade`
- A Vercel cria um deploy de preview com URL única para teste

---

## 3. Configurações adicionais (opcional)

### Custom Domain (domínio personalizado)

1. Acesse o projeto na Vercel
2. Vá em **Settings > Domains**
3. Adicione seu domínio (ex.: `agromane.com.br`)
4. Configure os registros DNS conforme instruções da Vercel

### Analytics e Monitoramento

A Vercel oferece:
- **Vercel Analytics**: ative em Settings > Analytics (rastreia Core Web Vitals)
- **Speed Insights**: métricas de performance em tempo real

### Variáveis de ambiente por ambiente

- **Production**: variáveis para produção
- **Preview**: variáveis para branches de feature/preview
- **Development**: variáveis locais (use `.env.local` no projeto)

---

## 4. Comandos úteis (local)

```bash
# Rodar dev local
pnpm dev

# Build de produção (testar antes de deploy)
pnpm build
pnpm start

# Testes
pnpm test

# Lint
pnpm lint
```

---

## 5. Checklist de publicação

- [x] Git inicializado
- [x] `.gitignore` configurado (Node.js, Next.js, `.env*`)
- [x] Commit inicial realizado
- [ ] Repositório remoto criado no GitHub
- [ ] Push da branch `main` para o GitHub
- [ ] Projeto importado na Vercel
- [ ] Variáveis de ambiente configuradas (se aplicável)
- [ ] Deploy realizado com sucesso
- [ ] URL pública testada e funcionando

---

## 6. Solução de problemas

### Build falha na Vercel

- Verifique os logs de build no dashboard da Vercel
- Confirme que todas as dependências estão em `package.json`
- Se usar pnpm, certifique-se de que a Vercel está configurada para usar pnpm (detecta automaticamente via `pnpm-lock.yaml`)

### Erro de variáveis de ambiente

- Adicione variáveis necessárias em Settings > Environment Variables na Vercel
- Use prefixo `NEXT_PUBLIC_` para variáveis que precisam ser expostas no client-side

### Assets/imagens não carregam

- Verifique `next.config.mjs` > `remotePatterns` para domínios externos
- Assets em `public/` são servidos automaticamente na raiz (ex.: `/assets/logo.svg`)

---

## 7. Próximos passos (pós-deploy)

- Configure domínio personalizado
- Ative Analytics e Speed Insights
- Configure branch protection rules no GitHub (exigir reviews, CI passa)
- Adicione badges no README (build status, deploy status)
- Configure webhooks para notificações (Discord, Slack)

---

**Dúvidas?**
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
