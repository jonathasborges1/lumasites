# Estratégia de SEO Orgânico — Luma Sites

_Análise baseada no Google Search Console (3 meses) e no código-fonte do projeto (lumasites.com.br)._
_Atualizado após implementação parcial da Fase 1._

## Diagnóstico

- **Site tem ~3 meses** (primeiro commit 21/04/2026). O "sandbox" do Google e a falta de autoridade acumulada explicam a posição média 61,4 (página 6+) mesmo com 613 impressões em 3 meses.
- **On-page já está bem encaminhado**: `sitemap.ts` cobre home, 5 páginas de serviço + 7 posts de blog, todas com JSON-LD (schema.org), `robots.ts` liberado, keywords definidas em `content/site.ts`.
- **Google Perfil da Empresa (GBP) já existe e está vinculado tecnicamente ao site** — perfil criado e verificado, `sameAs` e `hasMap` do schema `LocalBusiness` (`app/layout.tsx`) apontam para o link do perfil. Falta otimização de conteúdo dentro do próprio perfil (reviews, categoria, posts) — ver Fase 1.
- **Backlinks reais de clientes**: 5 projetos publicados linkam de volta para lumasites.com.br no rodapé ("Desenvolvido por Luma Sites") e estão listados em `content/portfolio.ts`: André Lopes Hair Stylist, J&R Concretos (Alciellen), Dr. Eduardo Bremer, GeraSeg, Rodrigues e Castro Advocacia. Um projeto (Rosineide Borges — psicóloga, também com backlink confirmado) ainda não está no portfólio por falta de imagem/asset local.
- As consultas que já geram impressão ("criação de sites em manaus", 137 impressões) mostram que **o conteúdo certo já existe** — o problema é ranking/autoridade, não falta de página.

## Estratégia por prioridade

### Fase 1 — Crítico (maior alavanca, menor esforço)
1. ~~Criar o Google Perfil da Empresa~~ **✅ Feito** — perfil criado, verificado e tecnicamente vinculado ao site via schema `LocalBusiness` (`sameAs` + `hasMap`).
2. **Pedir avaliações (reviews)** dos 5 clientes com site publicado (André Lopes, J&R Concretos, Dr. Eduardo Bremer, GeraSeg, Rodrigues e Castro) no perfil do Google. **Pendente** — é o próximo fator de maior impacto para o local pack.
3. **Garantir NAP consistente** (nome, endereço/área, telefone) idêntico no site, no Google Perfil e em qualquer diretório. **Pendente de verificação.**
4. **Otimizar o conteúdo do próprio perfil**: categoria principal bem escolhida (ex. "Web designer"), fotos recentes, posts semanais — no print do GBP aparecia "Força do perfil" incompleta. **Pendente.**

### Fase 2 — Curto prazo (2-4 semanas)
5. Cadastrar em **diretórios locais/nacionais** relevantes (Bing Places, GuiaMais, Solutudo, listas de "agências de Manaus", associações comerciais do AM) — cada um é um backlink + sinal de local SEO. **Pendente.**
6. ~~Conseguir que clientes do portfólio linkem de volta~~ **✅ Feito** — 5 projetos publicados confirmados com link no rodapé e adicionados a `content/portfolio.ts` (removida a Luanda Oliveira, projeto não publicado oficialmente). Falta apenas adicionar Rosineide Borges quando houver imagem disponível.
7. Revisar **title/meta description** das páginas com impressão alta e CTR baixo (0,3%) — testar títulos mais diretos com preço/benefício ("a partir de R$497"). **Pendente.**

### Fase 3 — Médio prazo (1-2 meses)
8. Expandir o cluster de conteúdo: os posts atuais cobrem nichos (advogado, dentista, médico, psicólogo, personal trainer) — adicionar mais nichos de alta demanda em Manaus (contador, salão de beleza, pet shop, restaurante) e interligar via **links internos** entre blog → páginas de serviço.
9. Buscar **guest posts ou menções** em blogs/portais locais de Manaus — backlink de domínio local com autoridade pesa mais que diretório genérico.
10. Ativar **redes sociais com link para o site** (Instagram já existe) — reforça tráfego de marca e sinais de engajamento.

### Fase 4 — Longo prazo / manutenção contínua
11. Monitorar Core Web Vitals e velocidade (fator de ranking secundário frente à falta de autoridade).
12. Criar cadência mensal de novo conteúdo de blog (long-tail: "quanto custa site para X em Manaus").
13. Reavaliar Search Console trimestralmente: acompanhar se a posição média está melhorando nas queries-chave — com site novo, esperar 4-6 meses para movimento real em termos competitivos.

## Ponto mais importante agora

A base técnica da Fase 1 está pronta (perfil criado + vinculado + backlinks reais de 5 clientes). O gargalo atual é **ativação do perfil do Google** (reviews, categoria, posts) — isso pesa mais para aparecer no local pack do que qualquer ajuste de código neste momento.
