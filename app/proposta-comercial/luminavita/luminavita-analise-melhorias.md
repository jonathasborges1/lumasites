# Lumina Vita Finance — Análise da fonte e melhorias aplicadas na prévia

**Fonte:** https://luminavitafinance.manus.space ("Mentoria Simples Assim | Lumina Vita Finance")
**Prévia:** `/proposta-comercial/luminavita`
**Data:** 2026-07-17
**Status:** Fase 1 (análise) e Fase 2 (implementação) concluídas.

## Atualização — bug de contraste nos botões (2026-07-17)

Os botões dourados (CTA principal, nav, drawer, botão flutuante) às vezes
renderizavam com texto claro/branco em vez do navy escuro definido no CSS,
mesmo a cor estando correta na declaração. Causa raiz: a regra global
`.lv-page a { color: inherit; }` tem a mesma especificidade CSS (1 classe +
1 elemento) que os seletores de um único classe dos botões
(`.lv-button-primary`, `.lv-nav-cta`, `.lv-drawer-cta`, `.lv-floating-apply`,
`.lv-preview-back`, `.lv-preview-site`) — em empate de especificidade o
`color: inherit` podia vencer dependendo do contexto, fazendo o texto herdar
a cor clara do fundo ao redor. Corrigido qualificando os seletores desses
botões com o elemento (`a.lv-button-primary` etc.), sem alterar nenhuma cor
— apenas garantindo que a cor navy já definida realmente seja aplicada.

## Atualização — refinamento visual (2026-07-17)

Pesquisa de tendências 2026 para landing pages premium/dark fintech (Stripe,
Mercury e afins) confirmou que a direção navy + dourado + serifada já
adotada está alinhada ao mercado. Aplicados 4 refinamentos baseados nisso:
1. **Animação em cascata**: cards dos grids (sintomas, pilares, método,
   jornada, formato, resultados, público, FAQ) agora entram com
   `transition-delay` escalonado por `nth-child`, em vez de todos juntos.
2. **Divisores de seção**: reintroduzido um divisor fino dourado com ícone
   nas transições narrativas principais (Perspectiva, Solução, Fundadora,
   FAQ), quebrando o efeito de blocos empilhados sem esse respiro.
3. **Seção da fundadora mais editorial**: aspas decorativas grandes atrás da
   citação e glow dourado mais assumido na moldura da foto.
4. **Limpeza de CSS morto**: removidas classes sem uso no JSX atual
   (`lv-diagnostico-*`, `lv-phase-*`, `lv-testimonial-*`, `lv-founder-role`,
   `lv-founder-tone`, `lv-results-closing`), sobras de versões anteriores da
   página.

## Atualização — Fase 2 (implementação)

- **Metodologia (revisada em navegador):** a fonte atual apresenta o Método
  SIMPLES com 7 fundamentos, 5 pilares de evolução e uma jornada completa em
  5 fases. A prévia foi atualizada para refletir essa estrutura integralmente:
  Destravar, Organizar, Decidir melhor, Escalar com segurança e Manter e evoluir.
- **CTA/contato:** conforme decisão aprovada, a prévia usa **apenas** o link
  real de aplicação (`forms.office.com/r/wng2siuuQs`) como CTA — nenhum
  WhatsApp foi adicionado ou inventado.
- **Imagens (revisado):** a primeira versão usava `hero.png`, o screenshot
  Open Graph oficial da fonte — mas essa imagem tem o headline e o botão CTA
  do site original "queimados" nela, o que causava duplicação visual ao
  colocar nosso próprio texto por cima. Corrigido: nova varredura do bundle JS
  encontrou os assets de fundo reais usados via CSS `background-image`
  (limpos, sem texto): `hero-bg.webp` (sala de reunião à noite, usada no
  hero), `journey-visual.webp` (visual abstrato dourado/navy de dados, usada
  na seção Metodologia) e `cta-bg.webp` (clarão dourado, usada na CTA final).
  Todas com overlay escuro (gradiente) por cima para legibilidade, no mesmo
  espírito da fonte original. `hero.png` foi removido. `fundadora.png` (foto
  real da fundadora) mantida.
- **Depoimentos:** as 5 frases reais foram mantidas exatamente como estão na
  fonte, atribuídas de forma honesta como "Mentorado(a) da Lumina Vita
  Finance" (a fonte não identifica nome/empresa).
- **Nome pessoal da fundadora:** continua não divulgado na fonte — a prévia
  usa apenas "Fundadora — Lumina Vita Finance", como no original.

## Atualização — revisão de conteúdo e correções de bugs (2026-07-17)

Ao revisar a prévia com o pedido "como melhorar com base na fonte original",
uma primeira checagem apontou vários trechos (bio da fundadora, citação
"Crescer sem estrutura não é crescer...", lista completa de "não é para",
traços da fundadora) como possivelmente inventados. **Essa checagem estava
errada** — o método de busca usado (regex `-oE` combinado com `-i` sobre o
bundle minificado) tinha um bug de encoding com caracteres acentuados que
gerava falsos negativos. Uma nova varredura com `LC_ALL=C grep -oa` confirmou
que **todo esse conteúdo é real**, extraído do bundle da fonte — inclusive
trechos mais longos que não tinham sido capturados na Fase 1 original (bio
completa da fundadora, frase "Startups em fase inicial de ideação.",
"Profissionais buscando atalhos, fórmulas mágicas ou terceirização de
responsabilidades.", entre outros). Nenhuma correção de conteúdo foi
necessária.

Bugs reais encontrados e corrigidos nessa revisão:
- O CTA do hero ("Ver como funciona") apontava para `#metodologia`, um id que
  não existe mais na página atual — corrigido para `#metodo`.
- As seções "Mudança de perspectiva" e "Solução e pilares" não tinham `id`,
  impedindo deep-link — adicionados `id="perspectiva"` e `id="solucao"`.
- `journey-visual.webp` estava baixado em `public/images/luminavita/` mas
  não era usado em lugar nenhum — agora usado como fundo (baixa opacidade +
  overlay) da seção Jornada.
- `.lv-final-bg` e `.lv-section-visual-bg` estavam com `display:none` no CSS,
  desligando os fundos de imagem da CTA final e da seção com fundo visual —
  reativados com o mesmo tratamento usado no hero (imagem + overlay em
  gradiente escuro).

## Nota técnica sobre a extração

A fonte é uma **SPA React pura** (hospedada em `manus.space`), sem SSR: o HTML
servido contém só `<head>` (title, meta description, Open Graph) e um bundle
JS de ~460KB — nenhum conteúdo de texto no HTML inicial. Fetch simples
(inclusive ferramentas de IA) só enxerga o `<title>`.

Para extrair o conteúdo real, foi necessário: baixar o bundle JS
(`assets/index-*.js`) e o CSS (`assets/index-*.css`) via `curl` e extrair as
strings literais de texto e as variáveis de cor/fonte de dentro deles, e
inspecionar visualmente a imagem de Open Graph (screenshot real do hero) e a
foto da fundadora referenciada no bundle. Isso permitiu reconstruir o
conteúdo com alta confiança, mas **não é garantia de cobertura total** — o
bundle pode conter texto gerado dinamicamente (ex.: perguntas do formulário
externo) que não aparece como string literal. Recomendo revisão humana rápida
da fonte num navegador antes da Fase 2, se possível.

## Conteúdo extraído

### Identidade
- Nome: **Lumina Vita Finance** · Produto: **"Mentoria Simples Assim"**
- Meta description oficial: *"Mentoria premium para empresários e CEOs que
  buscam clareza financeira, estrutura de processos e gestão estratégica.
  Transforme o caos em inteligência de negócio."*
- Fundadora: sem nome pessoal exposto no conteúdo capturado — aparece só como
  **"Fundadora — Lumina Vita Finance"**, com foto (retrato profissional de
  estúdio) e uma citação de posicionamento: *"Minha abordagem combina rigor
  técnico com presença firme. Eu não suavizo o que precisa ser ajustado, mas
  conduzo com a clareza necessária para que você avance sem sobrecarga."*
  Tom de voz: **"Técnica, direta e estratégica."**

### Identidade visual
- **Paleta:** fundo azul-marinho muito escuro (`oklch(10% .02 250)`) + dourado/âmbar
  como cor primária de destaque (`oklch(75% .12 80)`) — combinação clássica de
  "executivo premium" (confiança + exclusividade).
- **Tipografia:** títulos em serifada **Cormorant Garamond** (itálico em
  palavras-chave), corpo em sans-serif **Outfit**.
- **Fotografia:** hero com foto de sala de reunião executiva à noite (skyline
  ao fundo); foto da fundadora em estúdio, fundo azul-marinho, blazer preto,
  joias douradas — reforça a paleta da marca.

### Hero
- Eyebrow (dourado, caixa alta): "PARA EMPRESAS QUE FATURAM ACIMA R$ 5M AO ANO"
- Headline: "O crescimento da sua empresa não precisa custar a **sua paz**."
- Subheadline: "A gestão baseada em feeling funcionou até aqui, mas não vai
  sustentar o seu próximo nível. Descubra como estruturar processos, entender
  seus números com clareza absoluta e tomar decisões com a segurança de um
  verdadeiro CEO."
- CTA único: **"Quero Aplicar Para a Mentoria"** → link externo para
  Microsoft Forms (processo seletivo, não é compra direta).

### Dor / diagnóstico
- "A maioria dos empresários enxerga o financeiro apenas como a área que
  paga contas e emite notas. Esse é o erro que custa a escala segura do seu
  negócio."
- "O financeiro da sua empresa deveria ser o seu maior aliado estratégico."
- "Do caos operacional à gestão estratégica."

### Para quem é / não é
- **É para:** empresários e sócios com faturamento acima de R$ 5 milhões/ano;
  empresários técnicos (médicos, engenheiros, arquitetos, industriais) que
  faturam bem mas precisam evoluir a gestão; executivos/diretores de gestão
  buscando profissionalização.
- **Não é para:** startups em fase inicial, microempresas ou MEIs,
  profissionais buscando atalhos/fórmulas mágicas e quem não está disposto a
  confrontar a realidade dos próprios números.
- "Esta mentoria não é para todos." · "Vagas limitadas. Processo seletivo
  para garantir o nível do grupo."

### Metodologia
- Framework proprietário **Método SIMPLES**, estruturado em 7 fundamentos:
  Situação Real, Indicadores, Modelagem, Planejamento, Liderança, Execução e
  Sustentação.
- A jornada possui 5 fases: Clareza e Diagnóstico, Estrutura, Gestão
  Estratégica, Crescimento Sustentável e Liderança e Sustentação.
- Formato: **"Encontros Estratégicos Quinzenais"**, materiais gravados
  ("desde a leitura prática de uma DRE até técnicas de gestão de energia e
  clareza mental do líder"), suporte direto entre sessões com resposta em
  até 24h úteis.

### O que o cliente será capaz de fazer
- Entender DRE, margem, rentabilidade e fluxo de caixa estratégico.
- Mapear e padronizar processos, reduzindo dependência da presença do dono.
- Sair da decisão por "feeling" para decisões baseadas em dados/rituais de
  gestão.
- Desenvolver autoliderança para conduzir a empresa com menos ansiedade.

### Depoimentos
Frases curtas, em primeira pessoa, **sem nome, empresa ou foto atribuídos**:
"Agora eu entendi o que está acontecendo." · "Agora eu lidero de verdade." ·
"Agora eu sei como decidir." · "Agora eu tenho controle." · "Agora minha
empresa cresce sem me esmagar."

### O que NÃO existe na fonte (não inventar)
- Telefone, WhatsApp, e-mail, endereço e redes sociais — nenhum encontrado.
- Preço/investimento — não divulgado (modelo de aplicação/seleção).
- Nome pessoal da fundadora, nomes/empresas dos depoimentos, números de prova
  social (quantos mentorados, resultado médio) — nenhum divulgado.
- Único canal de contato real: o **link do Microsoft Forms**
  (`forms.office.com/r/wng2siuuQs`).

## O que o original tem de bom (preservar)

- **Copy de posicionamento muito forte e consistente** (dor → exclusividade →
  transformação) — não precisa ser reescrita, só melhor estruturada.
- **Paleta navy + dourado com tipografia serifada** — comunica "premium
  financeiro" de forma coerente; deve virar o sistema de cores da prévia.
- **Modelo de "processo seletivo"** em vez de compra direta — reforça
  exclusividade; deve ser preservado como é (não trocar por "comprar agora").
- **Segmentação explícita de quem é/não é o público** — reduz lead
  desqualificado; ótimo padrão a manter.

## Problemas encontrados → melhorias propostas

1. **SPA sem SSR, zero conteúdo indexável por buscadores** → prévia em
   Next.js com conteúdo real no HTML, `schema.org` (`Service`/`Organization`),
   metadados Open Graph/Twitter completos, canonical.
2. **Página em scroll único sem navegação âncora perceptível** → header com
   menu de âncoras (Início, Diagnóstico, Metodologia, Resultados, Depoimentos,
   Sobre, Aplicar) para orientar quem chega e quer avaliar rápido se é o
   público certo.
3. **Depoimentos sem nenhuma atribuição** (nem nome fictício-anônimo tipo
   "Empresário do setor X") → manter as frases reais tal como estão (não
   inventar nome/empresa), mas dar contexto visual mínimo e honesto (ex.:
   "Mentorados da Lumina Vita Finance") em vez de citação solta sem
   nenhuma moldura.
4. **Nenhuma prova social quantificada** (nº de mentorados, tempo de mercado,
   faturamento total gerido) → não inventar números; abrir espaço reservado
   no layout com nota "a confirmar com o cliente" para preencher se houver
   dado real disponível.
5. **Metodologia detalhada na revisão manual** → apresentar o Método SIMPLES
   e as 5 fases como o principal mecanismo proprietário da oferta, mantendo
   os nomes e descrições encontrados na fonte.
6. **CTA único depende 100% de um formulário externo** (Microsoft Forms,
   fora do domínio, sem preview do que será perguntado) → manter como CTA
   principal (é o mecanismo real do negócio), mas adicionar um FAQ que
   explique o processo seletivo (o que esperar, prazo de resposta) para
   reduzir a fricção de sair do site sem saber o que vem a seguir.
7. **Nenhum canal alternativo de contato** → não inventar WhatsApp/e-mail;
   registrar como decisão em aberto (ver seção abaixo) em vez de assumir o
   padrão de CTA para WhatsApp usado nas prévias anteriores.
8. **Acessibilidade/mobile não verificáveis a partir do bundle** → aplicar o
   padrão já usado nas prévias (mobile-first, contraste AA, foco visível,
   `prefers-reduced-motion`) por default.

## Referências externas usadas (padrões de mercado, não casos específicos)

Como o nicho é mentoria B2B premium para CEOs/empresários de alto
faturamento, os padrões de design/copy mais relevantes observados em páginas
desse tipo de oferta (sem citar marcas específicas, para não atribuir
afirmações não verificadas a terceiros):

- **CTA de "aplicação/seleção" em vez de "comprar agora"** é o padrão
  dominante em mentorias de ticket alto — reforça exclusividade e qualifica
  lead. A fonte já usa isso corretamente; a prévia deve manter, só reduzir a
  fricção informativa ao redor dele (FAQ, expectativa de retorno).
- **Segmentação explícita de "para quem é / não é"** é um padrão consolidado
  em ofertas de alto ticket, pois reduz objeção de preço ao filtrar antes.
- **Estética dark + dourado/serifada** é usada com frequência em advisory e
  wealth management para comunicar solidez e exclusividade — reforça (não
  contradiz) a identidade já extraída da fonte.
- **Prova social quantificada** (nº de clientes, resultado médio, anos de
  mercado) é o elemento mais recorrente em páginas de alta conversão desse
  segmento e é justamente o que falta na fonte — maior oportunidade de
  melhoria identificada.

## Diretivas adicionais sugeridas (nicho financeiro)

- **Linguagem em conformidade**: não usar termos como "garantia de retorno",
  "dobre seu faturamento" — a fonte já evita isso; a prévia deve manter esse
  cuidado (mentoria de gestão, não promessa de resultado financeiro).
- **CTA único e repetido**: um único CTA ("Quero Aplicar Para a Mentoria")
  repetido nos pontos de decisão, sem CTAs concorrentes.
- **FAQ de objeção**: "Como funciona o processo seletivo?", "Quanto tempo
  até eu ser contatado?", "A mentoria é online ou presencial?", "O que
  acontece se eu não for aprovado?" — só com respostas genéricas plausíveis
  e claramente placeholder onde a fonte não informa.
- **Selo de exclusividade visível** ("vagas limitadas", "processo seletivo")
  já presente na fonte — replicar como elemento de design (badge/etiqueta),
  não só texto corrido.

## Decisão em aberto para sua aprovação

O padrão das prévias anteriores usa **CTA para WhatsApp**, mas esta fonte
**não tem WhatsApp/telefone/e-mail** — o único canal real é o link do
Microsoft Forms. Proponho manter **só o link do Forms** como CTA (fiel à
fonte, sem inventar contato), e não adicionar um WhatsApp placeholder. Se
você tiver um WhatsApp real da Lumina Vita Finance para usar como canal
alternativo, me envie antes da Fase 2 e eu incluo.

## Estrutura de seções planejada para a prévia

1. Header (logo/nome + menu de âncoras + CTA "Quero Aplicar")
2. Hero (eyebrow + headline + subheadline + CTA + imagem premium)
3. Reconhecimento e mudança de perspectiva
4. Solução e os 5 pilares da evolução
5. Método SIMPLES
6. Jornada completa em 5 fases
7. Estrutura prática da mentoria
8. Transformações esperadas
9. Para quem é / não é
10. Sobre a fundadora (foto + bio + atributos)
11. FAQ de objeção
12. CTA final + Footer (padrão das prévias anteriores)

## Assets visuais identificados para reuso

- Foto de hero (sala de reunião executiva à noite) — via screenshot Open
  Graph da fonte; verificar se há versão em maior resolução/sem crop 630px
  antes de usar em produção, ou substituir por imagem de banco de imagens
  equivalente se a licença da original for incerta.
- Foto da fundadora (retrato de estúdio) — real, extraída da fonte.
- Nenhum logo separado identificado (marca aparece só como texto
  tipografado "Lumina Vita Finance").
