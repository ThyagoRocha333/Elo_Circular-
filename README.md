# EloCircular - MVP Oficial

Plataforma web e app do coletor para gestao circular de lixo eletronico.

O projeto usa dados simulados para demonstracao, entao funciona sem Firebase, Google Maps ou Gemini nesta versao.

## Stack

- Next.js 14
- React 18
- TypeScript
- CSS puro com design system proprio
- API Routes simuladas

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse:

```txt
http://localhost:3000
```

## Scripts

```bash
npm run dev      # servidor local de desenvolvimento
npm run lint     # validacao ESLint
npm run build    # build de producao
npm run start    # roda o build localmente
npm run check    # lint + build
```

## Rotas principais

| Rota | Funcao |
| --- | --- |
| `/` | Landing do EloCircular |
| `/plataforma` | Dashboard web |
| `/solicitar-coleta` | Fluxo de solicitacao de coleta |
| `/acompanhar` | Acompanhamento da coleta |
| `/historico` | Historico de documentos |
| `/impacto` | Painel de impacto |
| `/pontos` | Pontos de coleta |
| `/coletor` | App operacional do coletor |
| `/triagem` | Tela de triagem responsavel |
| `/declaracao/CO-2025-05-21-0007` | Declaracao digital |

## APIs simuladas

| API | Funcao |
| --- | --- |
| `/api/health` | Saude do sistema |
| `/api/coletas` | Lista e cria coletas simuladas |
| `/api/rotas` | Retorna rota com calculos operacionais |
| `/api/impacto` | Retorna indicadores de impacto |

## Deploy na Vercel

1. Suba este projeto para um repositorio no GitHub.
2. Acesse https://vercel.com.
3. Clique em `Add New Project`.
4. Importe o repositorio do GitHub.
5. Confirme o framework como `Next.js`.
6. Use os comandos padrao:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: deixe vazio/padrao
7. Clique em `Deploy`.

## Observacoes

- `node_modules`, `.next`, `.vercel`, logs e arquivos `.env*.local` nao devem ser enviados ao GitHub.
- As variaveis em `.env.example` sao placeholders para futuras integracoes.
- A V1 e demonstrativa, com dados mockados e arquitetura pronta para evoluir para integracoes reais.
