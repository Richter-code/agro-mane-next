# 🚀 Guia Completo: GitHub + Vercel Deploy

## Status atual do projeto

✅ **Git configurado**
- Branch: `main`
- Commits: 3 commits prontos
- Arquivos: README.md, DEPLOY.md, vercel.json, .env.example
- Remote: Ainda não configurado (você vai criar agora)

---

## PASSO 1: Criar Repositório no GitHub

### Opção A: Via Site (Recomendado - mais rápido)

1. **Acesse**: https://github.com/new

2. **Preencha os dados**:
   - **Repository name**: `agro-mane-next`
   - **Description**: `Agro Mané — Next.js + Tailwind + TypeScript (versão profissional)`
   - **Visibility**: Escolha Public ou Private
   - ⚠️ **NÃO marque** "Add a README file"
   - ⚠️ **NÃO marque** "Add .gitignore"
   - ⚠️ **NÃO marque** "Choose a license"

3. **Clique em** "Create repository"

4. **Copie a URL do repositório** que aparece na página:
   - SSH: `git@github.com:SEU_USUARIO/agro-mane-next.git`
   - HTTPS: `https://github.com/SEU_USUARIO/agro-mane-next.git`

5. **No terminal, execute** (substitua `<URL>` pela URL copiada):

```bash
cd ~/Downloads/agro-mane-next

# Adicionar remoto
git remote add origin <URL>

# Verificar
git remote -v

# Push
git push -u origin main
```

**Exemplo completo (HTTPS)**:
```bash
cd ~/Downloads/agro-mane-next
git remote add origin https://github.com/seu-usuario/agro-mane-next.git
git push -u origin main
```

**Exemplo completo (SSH)**:
```bash
cd ~/Downloads/agro-mane-next
git remote add origin git@github.com:seu-usuario/agro-mane-next.git
git push -u origin main
```

6. **Valide no navegador**:
   - Acesse: `https://github.com/SEU_USUARIO/agro-mane-next`
   - Confirme que aparecem: README.md, DEPLOY.md, vercel.json, etc.

---

## PASSO 2: Deploy na Vercel

### Opção A: Via Dashboard (Recomendado para primeira vez)

1. **Acesse**: https://vercel.com

2. **Login/Cadastro**:
   - Se não tiver conta, crie com o GitHub (mais fácil)
   - Autorize a Vercel a acessar seus repositórios

3. **Importar Projeto**:
   - Clique em **"Add New..."** → **"Project"**
   - Ou acesse direto: https://vercel.com/new
   - Selecione **"Import Git Repository"**
   - Escolha **`agro-mane-next`** da lista

4. **Configurar Build**:
   - **Project Name**: `agro-mane-next` (ou personalize)
   - **Framework Preset**: `Next.js` (auto-detectado)
   - **Root Directory**: `.` (deixe em branco ou `.`)
   - **Build Command**: `pnpm build` *(ou `npm run build` se não usar pnpm)*
   - **Output Directory**: `.next` (padrão)
   - **Install Command**: `pnpm install` *(ou `npm install`)*

   ⚠️ **Nota sobre pnpm**: A Vercel detecta automaticamente se você usa pnpm pelo arquivo `pnpm-lock.yaml`. Se não tiver esse arquivo, use `npm` nos comandos.

5. **Variáveis de Ambiente** (se necessário):
   - Clique em **"Environment Variables"**
   - Adicione as variáveis do arquivo `.env.example` se precisar
   - Exemplo:
     - `NEXT_PUBLIC_API_URL`: `https://api.example.com`
     - `API_SECRET_KEY`: `seu-segredo-aqui`
   - ⚠️ Nunca commite `.env` ou `.env.local` no Git!

6. **Deploy**:
   - Clique em **"Deploy"**
   - Aguarde o build (leva 1-3 minutos)
   - ✅ Você receberá uma URL pública: `https://agro-mane-next.vercel.app`

---

### Opção B: Via CLI (Avançado)

1. **Instalar Vercel CLI**:
```bash
npm install -g vercel
# ou
pnpm add -g vercel
```

2. **Login**:
```bash
vercel login
```

3. **Deploy (produção)**:
```bash
cd ~/Downloads/agro-mane-next
vercel --prod
```

4. **Siga as perguntas interativas**:
   - Set up and deploy?: `Y`
   - Which scope?: Escolha seu time/usuário
   - Link to existing project?: `N` (primeira vez)
   - What's your project's name?: `agro-mane-next`
   - In which directory is your code located?: `./`
   - Want to override settings?: `N` (usa vercel.json)

5. **Aguarde o deploy** e copie a URL gerada

---

## PASSO 3: Validação

### Checklist pós-deploy:

- [ ] Repositório criado no GitHub: `https://github.com/SEU_USUARIO/agro-mane-next`
- [ ] README.md visível no GitHub
- [ ] DEPLOY.md visível no GitHub
- [ ] vercel.json presente no repositório
- [ ] Deploy realizado na Vercel
- [ ] URL pública funcionando: `https://agro-mane-next.vercel.app`
- [ ] Páginas carregam corretamente (/, /produtos, /servicos, etc.)
- [ ] Componentes renderizando (Categories com 4 cards)

### Testar a URL:

```bash
# Testar home
curl -I https://agro-mane-next.vercel.app/

# Deve retornar: HTTP/2 200
```

---

## PASSO 4: Configurações Pós-Deploy (Opcional)

### 1. Domínio Personalizado

**Na Vercel**:
1. Acesse seu projeto → **Settings** → **Domains**
2. Adicione: `www.agromane.com.br` ou `agromane.com.br`
3. Configure DNS conforme instruções (adicione registros A/CNAME no seu provedor)

### 2. Analytics e Performance

**Ativar Vercel Analytics**:
1. Projeto → **Analytics** → **Enable**
2. Rastreia Core Web Vitals automaticamente
3. Zero configuração necessária

**Ativar Speed Insights**:
1. Projeto → **Speed Insights** → **Enable**
2. Mostra métricas de performance em tempo real

### 3. Deploy Automático (CI/CD)

✅ **Já configurado automaticamente!**

- **Push em `main`**: Deploy em produção
- **Push em outra branch**: Deploy de preview com URL única
- **Pull Request**: Deploy de preview automático

**Exemplo**:
```bash
# Criar feature branch
git checkout -b feature/nova-funcionalidade

# Fazer alterações e commit
git add .
git commit -m "feat: adicionar nova funcionalidade"

# Push (cria deploy de preview automático)
git push origin feature/nova-funcionalidade
```

### 4. Variáveis de Ambiente

**Adicionar/Editar na Vercel**:
1. Projeto → **Settings** → **Environment Variables**
2. Clique **"Add Variable"**
3. Escolha ambiente:
   - **Production**: Apenas produção
   - **Preview**: Apenas previews (branches)
   - **Development**: Apenas local

**Exemplo**:
```
Name: NEXT_PUBLIC_API_URL
Value: https://api.agromane.com.br
Environments: Production, Preview
```

### 5. Proteção de Branch (GitHub)

1. Repositório → **Settings** → **Branches**
2. Clique **"Add branch protection rule"**
3. Branch name pattern: `main`
4. Marque:
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass (Vercel build)

---

## Solução de Problemas

### Build falha na Vercel

**Erro**: `pnpm: command not found`
- **Solução**: Trocar Build/Install Command para `npm`

**Erro**: `Module not found: Can't resolve...`
- **Solução**: Verificar `package.json` → todas as deps instaladas?

**Erro**: `Type error` (TypeScript)
- **Solução**: Rodar `npm run build` localmente e corrigir erros

### Página 404 na Vercel

- **Solução**: Verificar estrutura de pastas `src/app/(site)/`
- Certifique-se que `page.tsx` existe em cada rota

### Variáveis de ambiente não funcionam

- **Client-side**: Use prefixo `NEXT_PUBLIC_`
- **Server-side**: Não use prefixo (mas não estarão disponíveis no browser)

---

## Resumo dos Comandos

```bash
# 1. Criar repo no GitHub (manual) e conectar
cd ~/Downloads/agro-mane-next
git remote add origin https://github.com/SEU_USUARIO/agro-mane-next.git
git push -u origin main

# 2. Deploy via CLI (opcional)
vercel --prod

# 3. Validar
curl -I https://agro-mane-next.vercel.app/
```

---

## URLs Importantes

- **GitHub**: `https://github.com/SEU_USUARIO/agro-mane-next`
- **Vercel Dashboard**: `https://vercel.com/dashboard`
- **Vercel Deploy**: `https://agro-mane-next.vercel.app`
- **Docs Next.js**: https://nextjs.org/docs
- **Docs Vercel**: https://vercel.com/docs

---

## Próximos Passos (depois do deploy)

1. ✅ Testar todas as páginas na URL de produção
2. ✅ Configurar domínio personalizado (se tiver)
3. ✅ Ativar Analytics e Speed Insights
4. ✅ Configurar proteção de branch no GitHub
5. ✅ Adicionar badges no README (build status, deploy status)
6. ✅ Configurar webhooks para notificações (Discord/Slack)
7. ✅ Implementar monitoramento de erros (Sentry, LogRocket)

---

**Dúvidas?** Consulte o [DEPLOY.md](./DEPLOY.md) para mais detalhes ou a documentação oficial da Vercel.
