# 🚀 Configuração PNPM - Agro Mané Next.js

Este projeto usa **PNPM** como gerenciador de pacotes padrão para garantir instalações mais rápidas, economia de espaço em disco e melhor gerenciamento de dependências.

## 📦 Pré-requisitos

Certifique-se de ter o Node.js instalado (versão 18+ recomendada):

```bash
node --version  # v18.0.0 ou superior
```

## 🔧 Instalação do PNPM

### Via Corepack (recomendado - já vem com Node.js 16.13+)

```bash
corepack enable
corepack prepare pnpm@9.0.0 --activate
```

### Via npm (alternativa)

```bash
npm install -g pnpm
```

### Verificar instalação

```bash
pnpm --version  # deve mostrar 9.0.0 ou superior
```

## 🚀 Instalação do Projeto

1. **Clone o repositório** (se ainda não clonou):

```bash
git clone https://github.com/Richter-code/agro-mane-next.git
cd agro-mane-next
```

2. **Instale as dependências**:

```bash
pnpm install
```

Isso irá:
- Instalar todas as dependências listadas em `package.json`
- Gerar/atualizar o `pnpm-lock.yaml`
- Criar a pasta `node_modules` com links simbólicos eficientes

## 🎯 Scripts Disponíveis

### Desenvolvimento

```bash
pnpm dev
# ou
pnpm run dev
```

Inicia o servidor de desenvolvimento na porta **3001**.
Abra [http://localhost:3001](http://localhost:3001) no navegador.

### Build de Produção

```bash
pnpm build
```

Cria uma build otimizada para produção.

### Iniciar Produção

```bash
pnpm start
```

Inicia o servidor em modo produção (após executar `pnpm build`).

### Linting

```bash
pnpm lint          # Verifica problemas de código
pnpm lint:fix      # Corrige problemas automaticamente
```

### Formatação

```bash
pnpm format        # Formata código com Prettier
```

### Testes

```bash
pnpm test          # Executa testes
pnpm test:watch    # Executa testes em modo watch
```

### Verificação de Tipos

```bash
pnpm type-check    # Verifica tipos TypeScript sem build
```

### Limpeza

```bash
pnpm clean         # Remove cache e arquivos de build
```

## 📝 Estrutura de Comandos PNPM

| npm | yarn | pnpm |
|-----|------|------|
| `npm install` | `yarn` | `pnpm install` |
| `npm install <pkg>` | `yarn add <pkg>` | `pnpm add <pkg>` |
| `npm uninstall <pkg>` | `yarn remove <pkg>` | `pnpm remove <pkg>` |
| `npm run <script>` | `yarn <script>` | `pnpm <script>` ou `pnpm run <script>` |
| `npm update` | `yarn upgrade` | `pnpm update` |

## 🔍 Verificações Importantes

### O projeto está configurado para PNPM?

```bash
# Deve existir:
ls -la pnpm-lock.yaml  # ✓ Lockfile do PNPM

# NÃO deve existir:
ls -la package-lock.json  # ✗ npm
ls -la yarn.lock          # ✗ yarn
```

### Verificar configuração no package.json

```json
{
  "packageManager": "pnpm@9.0.0"
}
```

## 🐛 Solução de Problemas

### Erro: "command not found: pnpm"

Execute a instalação do PNPM via Corepack ou npm (veja seção de instalação).

### Erro: conflitos de dependências

```bash
pnpm install --force
```

### Limpar cache do PNPM

```bash
pnpm store prune
```

### Reinstalar tudo do zero

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## 🎨 Tailwind CSS e PostCSS

O projeto já vem configurado com:
- ✅ Tailwind CSS 3.4.14
- ✅ PostCSS 8.4.47
- ✅ Autoprefixer 10.4.20

Configurações em:
- `tailwind.config.ts` - Configuração do Tailwind
- `postcss.config.js` - Configuração do PostCSS

## 📚 Mais Informações

- [Documentação oficial do PNPM](https://pnpm.io/)
- [Next.js com PNPM](https://nextjs.org/docs/getting-started/installation#using-pnpm)
- [Comparação de gerenciadores](https://pnpm.io/benchmarks)

## ✅ Checklist de Migração Concluída

- [x] Removido `package-lock.json`
- [x] Adicionado `packageManager` no `package.json`
- [x] `.gitignore` atualizado para ignorar lockfiles do npm/yarn
- [x] Scripts do `package.json` ajustados
- [x] Dependências reinstaladas com PNPM
- [x] Projeto testado e funcionando com `pnpm dev`
- [x] Tailwind CSS e PostCSS configurados

---

**Projeto atualizado e pronto para uso com PNPM!** 🎉
