# Luma Sites — Manaus

Site de captura (one-page) para vender serviços de criação de sites simples em Manaus - AM. Construído em Next.js 15 + TypeScript + Tailwind, aplicando o **design system Luma** (dark / bioluminescente / cyan glow) extraído da pasta `base/imagens`.

Foco: **converter visitantes em conversas no WhatsApp**.

---

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript (strict)
- Tailwind CSS 3.4
- lucide-react (ícones)
- Google Fonts via `next/font` (Cinzel + Inter)

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

Build de produção:

```bash
npm run build
npm run start
```

---

## Estrutura

```
v5/
├─ app/                  # App Router (layout, page, sitemap, robots, globals.css)
├─ components/           # reutilizáveis (GlowButton, TornCard, Fireflies, Icon, Header…)
├─ sections/             # blocos da página (Hero, Benefits, Services, Process…)
├─ content/              # TODOS os textos e dados editáveis
│  ├─ site.ts            # nome, WhatsApp, SEO, etc.
│  ├─ services.ts        # serviços vendidos
│  ├─ benefits.ts
│  ├─ process.ts
│  ├─ differentials.ts
│  ├─ testimonials.ts
│  └─ faq.ts
├─ utils/
│  └─ whatsapp.ts        # gerador de links pré-preenchidos
├─ base/                 # ⚠️ material de referência (imagens originais, ps1, html)
└─ design-system.md      # documentação do design system Luma
```

## Como editar o conteúdo

Tudo que é texto está em `content/`. **Você não precisa tocar no JSX**.

- **Trocar o número do WhatsApp**: `content/site.ts` → `whatsapp.number` (formato `5592XXXXXXXXX`, sem `+`).
- **Alterar preços, serviços**: `content/services.ts`.
- **Alterar FAQ**: `content/faq.ts`.
- **Alterar metadados SEO**: `content/site.ts` → `seo`.

## WhatsApp inteligente

O botão flutuante é fixo e monta a mensagem automaticamente:

1. Se o usuário clicar em **"Selecionar"** em um ou mais serviços → a mensagem inclui o nome dos serviços escolhidos.
2. Sem seleção → envia a mensagem padrão (`site.whatsapp.defaultMessage`).
3. Cada card de serviço também tem um botão direto de WhatsApp com mensagem tailored para aquele serviço específico.

Implementação em [utils/whatsapp.ts](utils/whatsapp.ts) + [components/SelectionContext.tsx](components/SelectionContext.tsx) + [components/WhatsAppFloating.tsx](components/WhatsAppFloating.tsx).

## SEO local

- `robots.ts` e `sitemap.ts` gerados automaticamente.
- `schema.org/LocalBusiness` injetado em `app/layout.tsx` (nome, cidade, faixa de preço, telefone).
- Keywords focadas em Manaus-AM em `content/site.ts`.

## Design System

Paleta, tipografia, componentes e animações documentados em [design-system.md](design-system.md).

Tokens principais (em `tailwind.config.ts`):

- `bg-midnight` · `bg-deep-blue` · `bg-surface`
- `glow-cyan` · `glow-aqua` · `accent-amber` · `accent-magenta`
- `shadow-glow-sm` · `shadow-glow-md` · `shadow-glow-lg`
- `animate-pulse-glow` · `animate-float` · `animate-fade-up`

---

## Antes de publicar

- [ ] Trocar `site.whatsapp.number` pelo número real.
- [ ] Trocar `site.url` pelo domínio definitivo.
- [ ] Trocar `site.email`.
- [ ] Substituir depoimentos simulados por reais (se houver).
- [ ] Criar e subir um `og-image.png` em `/public` para OpenGraph.
- [ ] Verificar em celular real (iOS e Android).
- [ ] Configurar Google Search Console + Analytics.

---

# 1. Inicializa o repositório git

git init

# 2. Cria um .gitignore para Next.js (evita commitar node_modules, .next, etc.)

curl -o .gitignore https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore

# 3. Adiciona todos os arquivos

git add .

# 4. Cria o primeiro commit

git commit -m "feat: site Luma Sites — Next.js 15 com design system Luma"

# 5. Define o branch como main e aponta para o repositório remoto

git branch -M main
git remote add origin https://github.com/jonathasborges1/lumasites.git

# 6. Sobe para o GitHub

git push -u origin main
