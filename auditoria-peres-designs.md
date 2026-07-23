# Auditoria de UI/UX — Peres Designs

**Fase 1 — versão revisada**  
**Site auditado:** https://peresdesigns.com.br/  
**Data da coleta:** 22 de julho de 2026  
**Escopo:** experiência pública em desktop (1440 × 1000) e mobile (390 × 844), HTML, CSS, JavaScript, headers, `robots.txt` e `sitemap.xml`.

> Esta versão substitui a auditoria anterior. A diferença decisiva é que o site foi renderizado em navegador real, percorrido em desktop e mobile e confrontado com o código entregue. Achados visuais são observações; stack e medidas vêm da inspeção; tempos são uma amostra local, não um teste de laboratório.

## 1. Resumo executivo

A Peres Designs é um estúdio autoral de **design gráfico, branding/identidade visual, social media design e landing pages**, liderado por Kethelyn Peres em Maringá (PR), com atendimento remoto. Não atua em arquitetura ou interiores.

O site atual tem uma direção visual delicada, imagens reais de bom nível e uma arquitetura simples de entender. Ele já apresenta quatro projetos, um carrossel de peças para redes sociais, quatro pacotes com preços, bio, contato e FAQ. Os principais entraves não são falta de conteúdo ou desatualização estética absoluta, mas falhas na jornada comercial:

1. os quatro cards de projeto dizem “Ver projeto”, porém todos levam a `#`;
2. a primeira dobra não possui CTA comercial nem proposta de valor orientada ao cliente;
3. textos e controles importantes usam contraste abaixo de WCAG AA;
4. o portfólio mostra capas, mas não demonstra desafio, processo ou resultado;
5. preços do HTML estruturado divergem dos preços visíveis;
6. a página móvel chega a aproximadamente 10.137 px e concentra 3.308 px só em serviços, sem atalhos ou comparação rápida;
7. a experiência depende de imagens remotas do Google e transfere cerca de 3,5–4,2 MB numa passagem completa.

## 2. Evidências visuais

Capturas completas (desktop 1.440 × 6.994 px, mobile 390 × 10.137 px) e os dados
estruturados da inspeção (seções, medidas, fontes computadas, links, imagens,
cores, requests e navegação) foram gerados por `scripts/audit-peres-designs.mjs`
durante esta auditoria e não foram versionados no repositório — rode o script
novamente para reproduzi-los, se necessário.

As capturas são documentação da auditoria, não assets autorizados para reaproveitamento na proposta.

## 3. Inventário navegável completo

O site é uma **single-page application**. O sitemap lista apenas a home, duplicada com e sem barra final; não foram encontradas páginas internas indexáveis de serviço, projeto ou blog.

| Ordem | Destino | Conteúdo | Situação |
|---|---|---|---|
| 1 | `#hero` / logo `#` | Hero | Funciona como início |
| 2 | `#galeria` | Galeria de portfólio | Âncora funciona; cards internos não abrem cases |
| 3 | `#designs-rede-social` | Carrossel de social media | Âncora e link do Instagram funcionam |
| 4 | `#ofertas` | Quatro pacotes/serviços | CTAs contextuais para WhatsApp funcionam |
| 5 | `#sobre` | Sobre Kethelyn Peres | Âncora funciona |
| 6 | `#contato` | Instagram e WhatsApp | Ambos funcionam |
| 7 | `#faq` | Nove perguntas frequentes | Accordion funciona |
| 8 | footer | Contato, redes e recursos | Redes funcionam; “Behance/Canva/Adobe Color” são links genéricos das plataformas |

Rotas não encontradas: `/sobre`, `/portfolio`, `/projetos`, `/servicos`, `/contato`, `/blog` ou páginas de case. Portanto, toda a descoberta e conversão dependem de uma única URL.

## 4. Sistema visual observado

### 4.1 Paleta exata

| Papel observado | Cor | Uso atual | Contraste relevante |
|---|---:|---|---:|
| Preto | `#000000` | Títulos, corpo, footer | 21:1 sobre branco |
| Branco | `#FFFFFF` | Fundo principal, texto sobre imagem/botões | — |
| Off-white | `#FAFAFA` | Fundo do hero | — |
| Cinza | `#969696` | Navegação, labels e textos auxiliares | **2,96:1** sobre branco — falha AA para texto normal |
| Azul pastel | `#82B2BE` | Detalhes e hover de controles | **2,32:1** com branco — falha AA |
| Rosa pastel | `#CC99C2` | Detalhes decorativos | Baixo contraste para texto/controle branco |
| Malva | `#AA839C` | CTAs alternados | **3,26:1** com branco — falha AA para texto normal |
| Terracota | `#C35631` | CTAs alternados, labels do footer | **4,47:1** com branco — fica ligeiramente abaixo de 4,5:1 |
| Cinza de borda | `#E5E7EB` | Cards, divisores | Elemento estrutural de baixo peso visual |

A base preto/branco é sólida; os problemas surgem quando os pastéis são usados como texto, ícone ou fundo de botão com texto branco.

### 4.2 Tipografia

- **Display:** Cormorant Garamond 300/400 e itálico 300. Aparece no H1 (96/96 px desktop; 48/48 px mobile) e no nome da profissional (48 px desktop; 36 px mobile).
- **Interface e corpo:** Montserrat 300/400. É a fonte dominante, inclusive em vários títulos.
- **Hierarquia medida:** H2 principais em 36/40 px desktop e 30/36–37,5 px mobile; títulos de serviço em 30/36 px desktop e 24/33 px mobile; cards e corpo usam predominantemente 12–16 px.
- **Leitura crítica:** o peso 300, combinado com cinza claro e textos pequenos, reduz legibilidade. A Cormorant tem potencial editorial, mas aparece em poucos pontos; a maior parte da página mantém uma voz tipográfica neutra e uniforme.

### 4.3 Grid, espaçamento e breakpoints

- Breakpoints encontrados no CSS: **640, 768, 1024 e 1280 px**.
- Desktop: seções principais usam 96 px nas laterais e 64 px no eixo vertical; área útil típica de 1.248 px.
- Mobile: 24 px laterais e 32 px verticais; conteúdo útil de 342 px.
- Galeria: 2 colunas no desktop, uma coluna no mobile; imagens renderizadas a 604 × 340 px em desktop.
- Serviços: 4 colunas no desktop, uma coluna no mobile; a igualdade visual dos cards facilita comparação horizontal no desktop, mas gera uma sequência muito longa no telefone.
- Sobre: composição 50/50 em desktop; imagem acima do texto no mobile.
- Contato: dois cards lado a lado no desktop e empilhados no mobile.
- Não foi detectado overflow horizontal em 390 px.

### 4.4 Imagens e tratamento

- Hero com fotografia em tela cheia, overlay escuro e tipografia centralizada. A atmosfera é elegante, mas a imagem é genérica de contexto de trabalho e não mostra imediatamente a especialidade ou um projeto emblemático.
- Quatro capas de identidade visual em proporção visual aproximada de 16:9, `object-fit: cover`, cantos arredondados e overlay no hover.
- Carrossel de social media com peças verticais 714 × 892, duplicadas no DOM para loop contínuo. Todas recebem o mesmo texto alternativo genérico (“Posts para Instagram de Psicologas”), perdendo contexto individual.
- Retrato/foto na seção sobre, com composição geométrica em rosa claro.
- As imagens vêm de URLs extensas do `lh3.googleusercontent.com`; não há pipeline próprio aparente de formatos responsivos.
- Na passagem completa medida, imagens responderam pela maior parte dos **~3,5–4,2 MB** transferidos. Os maiores arquivos individuais ficaram entre ~360 e 466 KB.

## 5. Auditoria por seção

### 5.1 Header e navegação

**Estrutura.** Header fixo branco, 64 px no desktop e 50 px no mobile. Marca à esquerda; seis âncoras em caixa alta à direita. No mobile, menu hambúrguer.

**Interação.** Transição de 300 ms, links em cinza e foco visível configurado no botão de menu. O header permanece acessível durante o scroll.

**Problemas concretos.** A fonte da navegação é pequena e clara; `#969696` sobre branco falha AA. Não há CTA “Solicitar orçamento” no header. “Ofertas” descreve pior o conteúdo do que “Serviços”. Não há estado ativo de seção/wayfinding. O link da marca usa `#`, não `#hero` ou `/`, o que é semanticamente impreciso.

### 5.2 Hero

**Estrutura.** Fotografia full viewport, overlay, eyebrow “Portfólio”, H1 “Peres Design”, descriptor “Design gráfico, identidade visual & designs para redes sociais”, ícones Instagram/Behance e indicação “Scroll”.

**Copy e tom.** Minimalista, autoral e visual. Identifica a categoria, mas não articula benefício, público, localização ou diferencial.

**Interação.** Links sociais e indicador de scroll; não há CTA primário.

**Problemas concretos.** A primeira dobra funciona como capa de portfólio, não como página comercial. O visitante precisa rolar para descobrir serviços e contato. O H1 nomeia a marca, mas não responde rapidamente “o que ganho” ou “por que escolher”. Os ícones isolados dependem de reconhecimento e são alvos visuais discretos.

### 5.3 Galeria de portfólio

**Estrutura.** Label “Projetos”, H2 “Identidades que contam histórias” e grid 2 × 2 com imagem, categoria e nome.

**Projetos exibidos.** Giselle Moraes Confeitaria; Lev Cream | Delicias Gourmet; Claus Cabelereiro; Paulo Rodrigo | Visagista.

**Interação.** No hover, overlay e “Ver projeto →”.

**Problema crítico.** Os quatro links têm `href="#"`. A interface promete aprofundamento e volta ao topo sem entregar informação. Não há objetivo, processo, sistema visual, peças adicionais, depoimento nem resultado. É a maior quebra de expectativa do site.

### 5.4 Designs para redes sociais

**Estrutura.** Label/link `@PERESDESIGNS`, H2 e faixa horizontal contínua de imagens verticais, com setas de navegação.

**Interação.** Swiper com loop/autoplay, hover com overlay e controles anterior/próximo.

**Problemas concretos.** Movimento automático compete por atenção e não foi encontrada uma ação de pausa explícita junto ao componente. O mesmo alt text é repetido em todas as peças. A categoria fica limitada a “posts para Instagram de psicólogas”, sem nome de cliente, contexto ou variação de objetivo. No mobile, a faixa sugere conteúdo parcialmente cortado sem explicar sua navegabilidade.

### 5.5 Serviços/ofertas

**Estrutura.** Introdução centralizada e quatro cards: Designs para Redes Sociais (R$ 80,00), Alinhamento Visual (R$ 490,90), Identidade Visual (R$ 990,90) e Landing Page (R$ 599,90). Cada card contém descrição, lista, preço e CTA contextual de WhatsApp.

**Ponto forte.** O usuário sabe o que recebe, vê preço inicial e chega ao WhatsApp com mensagem relacionada ao pacote.

**Problemas concretos.** Quatro cards de densidade semelhante tornam a decisão cansativa. Selos “Novo” aparecem duplicados no DOM/leitura. No mobile, a seção ocupa 3.308 px. CTAs brancos sobre malva falham AA (3,26:1); sobre terracota ficam em 4,47:1, no limite inferior. Não há orientação “ideal para”, comparação resumida ou esclarecimento sobre entregáveis variáveis. O pacote Landing Page amplia o posicionamento para web, mas hero, bio e metadados não o integram consistentemente.

### 5.6 Sobre

**Estrutura.** Imagem geométrica/retrato e bloco de bio com eyebrow, nome serifado, lista de disciplinas, dois parágrafos e citação.

**Copy e tom.** Próximo, feminino e estratégico: “transformar a essência”, “comunicam, conectam e ficam na memória”, “presença, personalidade e propósito”.

**Problemas concretos.** O texto afirma “resultados reais”, mas não apresenta números verificáveis, depoimentos ou resultados de projeto. A meta/OG fala em mais de 80 projetos, porém essa prova não aparece no corpo. Há repetição semântica entre parágrafos e citação.

### 5.7 Contato

**Estrutura.** H2 “Vamos criar algo juntas?”, texto curto e dois cards: Instagram e WhatsApp.

**Interação.** Cards clicáveis com hover; WhatsApp abre sem mensagem contextual nesta seção.

**Problemas concretos.** Não há formulário ou coleta de briefing; os únicos caminhos retiram a pessoa do site. O título pressupõe público feminino (“juntas”), enquanto a página não declara formalmente que atende apenas mulheres e o portfólio inclui clientes masculinos. Isso pode ser intencional, mas precisa ser validado.

### 5.8 FAQ

**Estrutura.** Nove accordions: serviços, público, prazo, processo, logo isolado, social media, alterações, parcelamento e atendimento remoto.

**Interação.** Botões semânticos, `aria-expanded`, hover e abertura individual.

**Problemas concretos.** A seção vem depois do contato, interrompendo a conclusão comercial. O título em 30 px, caixa alta e tracking muito aberto ocupa duas linhas no mobile. O processo existe apenas dentro de uma resposta; merece representação visual própria porque é argumento de confiança.

### 5.9 Footer

**Estrutura.** Fundo preto, descrição, recursos, contato, localização, redes e copyright.

**Problemas concretos.** “Ferramentas & recursos” leva para páginas genéricas do Behance, Canva e Adobe Color; para um potencial cliente, esses links têm baixo valor e podem desviar a saída. O Behance do footer nessa lista aponta para `behance.net/`, enquanto o ícone social aponta corretamente para o perfil. Textos em cinza sobre preto precisam de revisão de contraste e tamanho.

## 6. Conteúdo e consistência

### Mensagens centrais reais

- “Identidades que contam histórias.”
- “O que posso fazer por você.”
- “Mais do que design, meu trabalho é transformar ideias em identidades que fazem marcas serem vistas e lembradas com presença, personalidade e propósito.”
- “Vamos criar algo juntas?”

### Canais reais

- WhatsApp: `+55 (44) 99732-4658`
- E-mail: `peres.designss@gmail.com`
- Instagram visível: `instagram.com/peresdesigns`
- Behance visível: `behance.net/peresdesigns`
- Localização: Maringá, PR — Brasil

### Inconsistências encontradas

- JSON-LD: Identidade Visual **R$ 699,90**; interface: **R$ 990,90**.
- JSON-LD: Redes Sociais **R$ 69,90**; interface: **R$ 80,00**.
- `priceRange` estruturado termina em R$ 699,90, abaixo do maior preço visível.
- Meta `rel="me"` usa `/peresdesign/`; links visíveis usam `/peresdesigns`.
- Metadados e schema destacam branding/social media, enquanto a interface agora também vende Landing Page.
- Meta social afirma “mais de 80 projetos entregues”, mas a página não sustenta visualmente essa prova.
- “Cabelereiro” aparece sem o segundo “i”; “moodbard” aparece em vez de “moodboard”; “Psicologas” aparece sem acento no alt text.

## 7. Stack e implementação provável

| Camada | Evidência | Conclusão |
|---|---|---|
| Front-end | `div#root`, bundle único `index-*.js`, marcadores React no bundle | React SPA |
| Build | assets com hash e módulo ES | Vite ou pipeline equivalente; padrões do bundle são compatíveis com Vite |
| CSS | classes como `md:px-12`, `lg:px-24`, `text-3xl`, breakpoints 640/768/1024/1280 | Tailwind CSS compilado |
| Movimento | referências `framer` no bundle | Framer Motion |
| Carrossel | classes e código Swiper | Swiper.js |
| Ícones | Font Awesome 6.7.2 por CDN, dois webfonts (~277 KB combinados) | Font Awesome |
| Hosting | headers `Server: Vercel`, `X-Vercel-Cache: HIT` | Vercel |
| Conteúdo/imagens | URLs `lh3.googleusercontent.com/rd-d/...` | imagens hospedadas/servidas por infraestrutura Google |
| SEO | HTML contém JSON-LD de WebSite, ProfessionalService, Person e FAQ | SEO configurado manualmente no documento base |

Não há sinais de WordPress, Wix ou Webflow.

## 8. Performance e responsividade percebidas

### Medição observacional

| Perfil | DOMContentLoaded | `load` | Requests após percorrer página | Bytes declarados pelos responses |
|---|---:|---:|---:|---:|
| Desktop 1440 px | ~1,0 s | ~2,85 s | 29 | ~4,17 MB |
| Mobile 390 px | ~0,61 s | ~2,34 s | 26 | ~3,52 MB |

Os números variam com cache e rede e não substituem Lighthouse/WebPageTest. Ainda assim, revelam o peso relativo: 17–20 imagens, quatro fontes e dependências externas. O carregamento visual acima da dobra é aceitável em conexão rápida; a página completa é pesada para mobile.

### Responsividade

- Não há overflow horizontal em 390 px.
- Cards e seções refluem corretamente para uma coluna.
- A hierarquia geral se mantém.
- O custo é uma página móvel muito longa (10.137 px), agravada pelos quatro cards extensos e pela bio.
- Labels de 10–12 px, Montserrat 300 e cinza claro ficam frágeis em telas pequenas.

## 9. Problemas priorizados

### P0 — bloqueiam a promessa principal ou criam informação incorreta

1. **Cards de portfólio sem destino:** todos os “Ver projeto” apontam para `#`.
2. **Preço divergente em dados estruturados:** Google pode receber R$ 699,90/R$ 69,90 enquanto a página mostra R$ 990,90/R$ 80,00.

### P1 — afetam conversão e acessibilidade

3. **Hero sem CTA e sem benefício orientado ao cliente.**
4. **Contraste insuficiente:** `#969696`, `#82B2BE` e `#AA839C` são usados em contextos que não atingem AA; `#C35631` com branco fica em 4,47:1.
5. **Portfólio sem narrativa ou prova:** há boas capas, mas nenhum case demonstra raciocínio e resultado.
6. **Prova social declarada apenas em metadata:** “80+ projetos” não aparece com fonte/contexto no corpo.
7. **Carrossel automático sem pausa explícita e alt texts repetidos.**
8. **Jornada móvel longa e pouco escaneável:** 3.308 px só para os serviços.

### P2 — reduzem clareza, consistência ou eficiência

9. **Nomenclatura inconsistente:** “Ofertas” vs. serviços; landing page entra nos pacotes, mas não no posicionamento principal.
10. **Links de baixo valor/errados no footer:** Behance genérico e ferramentas externas.
11. **Microcopy e ortografia:** “moodbard”, “cabelereiro”, “Psicologas”; possível desalinhamento de “juntas” com o público real.
12. **Arquitetura de uma URL só:** nenhum serviço ou case tem URL compartilhável/indexável.
13. **Peso de imagens e Font Awesome:** ~3,5–4,2 MB na passagem completa e ~277 KB só em webfonts de ícones.
14. **Hierarquia tipográfica contida:** Cormorant aparece pouco; Montserrat 300 domina e enfraquece diferenciação/editorialidade.

## 10. O que deve ser preservado

- Fotografias e peças reais do portfólio, mediante autorização de uso.
- Tom autoral, próximo e estratégico da copy.
- Cormorant Garamond como memória visual da marca, se validada com a cliente.
- Estrutura clara de serviços com preço inicial.
- CTAs contextuais de WhatsApp por pacote.
- FAQ real, atendimento remoto e localização.
- Base predominantemente neutra, que deixa o trabalho aparecer.

## 11. Critérios para a nova proposta

Sem antecipar a Fase 3, a próxima direção deve ser julgada por cinco resultados verificáveis:

1. cada projeto destacado abre uma história real ou é explicitamente marcado como indisponível;
2. existe CTA primário visível na primeira dobra e persistente na navegação;
3. texto e controles atingem WCAG AA, com foco visível e respeito a `prefers-reduced-motion`;
4. serviços podem ser comparados rapidamente no mobile;
5. nenhuma afirmação, número, depoimento ou imagem é inventado — “80+” só entra após validação da cliente.

