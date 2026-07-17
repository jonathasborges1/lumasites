# Estratégia de SEO Orgânico — Luma Sites

_Análise baseada no Google Search Console (3 meses) e no código-fonte do projeto (lumasites.com.br)._

## Diagnóstico

- **Site tem ~3 meses** (primeiro commit 21/04/2026). O "sandbox" do Google e a falta de autoridade acumulada explicam a posição média 61,4 (página 6+) mesmo com 613 impressões em 3 meses.
- **On-page já está bem encaminhado**: `sitemap.ts` cobre home, 5 páginas de serviço + 7 posts de blog, todas com JSON-LD (schema.org), `robots.ts` liberado, keywords definidas em `content/site.ts`.
- **Falta o que mais pesa para SEO local**: nenhuma menção a **Google Perfil da Empresa (Google Business Profile)** em código/conteúdo. Para buscas como "criação de sites em manaus" o Google prioriza o **local pack** (mapa com 3 negócios) — sem perfil verificado, a Luma Sites está fora dessa disputa antes mesmo de competir no orgânico.
- **Zero sinal de backlinks**: `content/portfolio.ts` lista vários clientes, mas só 1 (`luandaoliveira.com.br`) tem link apontando de volta.
- As consultas que já geram impressão ("criação de sites em manaus", 137 impressões) mostram que **o conteúdo certo já existe** — o problema é ranking/autoridade, não falta de página.

## Estratégia por prioridade

### Fase 1 — Crítico, esta semana (maior alavanca, menor esforço)
1. Criar/otimizar o **Google Perfil da Empresa** (categoria "Web designer" / "Agência de marketing digital", área de atuação Manaus, fotos, horário, link pro site, posts semanais). É o que mais rápido traz demandas via busca local — mais rápido que subir posição orgânica.
2. Pedir **avaliações (reviews)** de clientes já atendidos (Luanda Oliveira e outros do portfólio) no Google. Reviews são fator forte de ranking local e geram confiança imediata.
3. Garantir **NAP consistente** (nome, endereço/área, telefone) idêntico no site, no Google Perfil e em qualquer diretório.

### Fase 2 — Curto prazo (2-4 semanas)
4. Cadastrar em **diretórios locais/nacionais** relevantes (Google Maps, Bing Places, GuiaMais, Solutudo, listas de "agências de Manaus", associações comerciais do AM) — cada um é um backlink + sinal de local SEO.
5. Conseguir que **clientes do portfólio linkem de volta** para lumasites.com.br (rodapé "site criado por Luma Sites"). Hoje só 1 projeto tem link — é a forma mais barata de gerar backlinks reais.
6. Revisar **title/meta description** das páginas com impressão alta e CTR baixo (0,3%) — testar títulos mais diretos com preço/benefício ("a partir de R$497") para melhorar CTR mesmo em posição ruim, o que ajuda o Google a subir a página.

### Fase 3 — Médio prazo (1-2 meses)
7. Expandir o cluster de conteúdo: os posts atuais cobrem nichos (advogado, dentista, médico, psicólogo, personal trainer) — adicionar mais nichos de alta demanda em Manaus (contador, salão de beleza, pet shop, restaurante) e interligar via **links internos** entre blog → páginas de serviço.
8. Buscar **guest posts ou menções** em blogs/portais locais de Manaus (notícias de negócios, colunas de empreendedorismo) — backlink de domínio local com autoridade pesa muito mais que diretório genérico.
9. Ativar **redes sociais com link para o site** (Instagram já existe). Não é backlink direto (nofollow), mas gera tráfego de marca e sinais de engajamento que ajudam indiretamente.

### Fase 4 — Longo prazo / manutenção contínua
10. Monitorar Core Web Vitals e velocidade (fator de ranking, mas hoje provavelmente não é o gargalo comparado à falta de autoridade).
11. Criar cadência mensal de novo conteúdo de blog (long-tail: "quanto custa site para X em Manaus") para capturar cauda longa enquanto a autoridade do domínio cresce.
12. Reavaliar Search Console trimestralmente: acompanhar se a posição média está caindo (melhorando) nas queries-chave — com site novo, esperar 4-6 meses para movimento real em termos competitivos.

## Ponto mais importante

O gargalo não é conteúdo (já existe e é razoável) — é **ausência de Google Perfil da Empresa + zero backlinks**. Atacar isso primeiro, antes de escrever mais posts.
