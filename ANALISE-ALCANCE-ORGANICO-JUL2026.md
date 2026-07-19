# Análise: Baixo Alcance Orgânico e Falta de Clientes via Google

_Baseado no Google Search Console (últimos 3 meses, print de 19/07/2026): 2 cliques, 645 impressões, CTR 0,3%, posição média 61._

## Leitura do print

- As 10 principais consultas são **todas variações de "criação/desenvolvimento de sites em Manaus"** (145, 74, 60, 57, 48, 29, 23, 12, 10, 7 impressões) — ou seja, o Google já entende do que o site trata e está mostrando ele para a query certa.
- **Posição média 61** = página 6+ dos resultados. Nessa posição o CTR realista é ~0%, então os "2 cliques em 3 meses" não são um problema de título/description — é um problema de **ranking**. Ninguém rola até a página 6.
- Isso confirma o diagnóstico já registrado em [ESTRATEGIA-SEO-ORGANICO.md](ESTRATEGIA-SEO-ORGANICO.md): o site é novo (~3 meses), o conteúdo on-page já está correto, mas falta **autoridade** (backlinks, sinais de perfil, tempo de indexação). Ajustar meta tags não vai mover a agulha nessa fase — é o motivo do CTR ainda estar baixo apesar de qualquer melhoria de título já feita.

## O que está dentro do escopo do projeto (código) e ajuda de verdade

Coisas que dependem só de mexer neste repo, sem esperar terceiros:

### 1. Conteúdo de blog para long-tail (onde dá pra rankear rápido)
Termos genéricos como "criação de sites em Manaus" têm concorrência alta (agências grandes, diretórios). Termos de cauda longa têm muito menos concorrência e o site já tem 6 posts nesse padrão (`site-para-advogados-em-manaus`, `site-para-dentista-em-manaus`, etc.). Faltam nichos de alta demanda ainda não cobertos:
- contador / escritório de contabilidade em Manaus
- salão de beleza / barbearia em Manaus
- pet shop em Manaus
- restaurante / delivery em Manaus
- imobiliária / corretor de imóveis em Manaus

Cada post novo é uma chance de rankear em 2-4 semanas (long-tail sofre muito menos com o "sandbox" de site novo) e captura intenção de compra mais qualificada que "criação de sites" genérico.

### 2. Interlinking entre blog e páginas de serviço
Hoje o blog e as landing pages de serviço (`criar-site-em-manaus`, `landing-page-manaus`, `site-institucional-manaus`, `site-profissional-manaus`, `desenvolvimento-de-sites-manaus`) parecem existir em paralelo. Adicionar links internos contextuais (ex: post "site para dentista" linkando para `site-profissional-manaus`) distribui autoridade entre páginas e ajuda o Google a entender a hierarquia do site — sem custo, só edição de conteúdo.

### 3. Portfólio como prova social + backlink duplo
`content/portfolio.ts` já tem 6 clientes com link de volta. Cada novo projeto publicado que:
- linka lumasites.com.br no rodapé, e
- é adicionado ao portfólio com link de saída para o cliente

...gera um backlink real (peso de autoridade) e mostra ao Google que o negócio é ativo. Isso é o maior alavancador disponível no código hoje, porque depende de fechar clientes — só que fechar clientes depende de aparecer no Google, então esse ciclo é lento por natureza no início. Vale tratar como prioridade estrutural, não só "nice to have".

### 4. Schema.org mais rico
O `LocalBusiness` já está em `app/layout.tsx`. Vale conferir/adicionar:
- `Review`/`AggregateRating` assim que houver avaliações reais (não inventar dados — isso é penalizado)
- `FAQPage` schema na seção de FAQ (`content/faq.ts`) — se ainda não estiver marcado, isso pode gerar rich snippet no resultado de busca, que aumenta CTR mesmo em posições medianas
- `BreadcrumbList` nas páginas de blog/serviço

### 5. Performance / Core Web Vitals
Fator secundário frente à falta de autoridade, mas fácil de verificar sem custo: rodar Lighthouse/PageSpeed Insights nas páginas com mais impressão (home, `criar-site-em-manaus`) e corrigir regressões óbvias (imagens não otimizadas, JS bloqueante). Não vai tirar o site da página 6 sozinho, mas remove qualquer penalidade extra.

## O que está fora do escopo do código (mas é o que mais pesa agora)

Repetindo o que já está em [ESTRATEGIA-SEO-ORGANICO.md](ESTRATEGIA-SEO-ORGANICO.md), porque o print de hoje confirma que ainda é o gargalo:
- **Pedir reviews** dos clientes com site publicado no Google Perfil da Empresa — maior alavanca para aparecer no local pack, não depende de código.
- **Cadastro em diretórios locais** (Bing Places, GuiaMais, Solutudo) — backlinks fáceis de conseguir.
- **Tempo**: site com 3 meses, termos competitivos levam 4-6 meses para mostrar movimento real mesmo fazendo tudo certo.

## Prioridade recomendada (esforço x impacto, só dentro do código)

1. Escrever 2-3 posts de blog em nichos ainda não cobertos (contador, salão de beleza, pet shop) — maior chance de ranking rápido.
2. Adicionar interlinking blog ↔ páginas de serviço nos posts existentes e novos.
3. Adicionar `FAQPage` schema (rich snippet = mais CTR sem precisar subir de posição).
4. Continuar o hábito de: publicar projeto → linkar no rodapé → adicionar em `portfolio.ts` (já em andamento, manter disciplina).

Itens fora do código (reviews, diretórios) devem continuar sendo tratados em paralelo — são o que mais move a agulha no curto prazo, mesmo não sendo trabalho de repositório.
