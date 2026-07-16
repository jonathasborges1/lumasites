# RB Manutenção em Cadeiras — Análise das fontes e melhorias aplicadas na prévia

**Fonte 1:** Google Maps — "RB Manutenção" (https://maps.app.goo.gl/5p58AiZpH9YKCvHC7)
**Fonte 2:** Instagram — @rbcadeirasgiratorias (https://www.instagram.com/rbcadeirasgiratorias/)
**Prévia:** `/proposta-comercial/rbcadeiras`
**Data:** 2026-07-15

## Varredura realizada

### Fonte 1 — Google Maps

| Dado | Valor extraído |
|---|---|
| Nome da ficha | RB Manutenção |
| Endereço | Rua Cristo Rei, 27 — Coroado, Manaus/AM, CEP 69082-000 |
| Coordenadas | -3.0871747, -59.9767913 |
| Telefone / horários / avaliações | Não expostos publicamente via web (o Maps é uma SPA que exige sessão do Google; nenhum agregador indexou esses campos) |

### Fonte 2 — Instagram (@rbcadeirasgiratorias)

*(Extração completa em 2026-07-15 via API pública `web_profile_info` do
Instagram, executada do IP local — bio, foto de perfil em HD e os 12 posts
mais recentes com imagens e legendas.)*

| Dado | Valor extraído |
|---|---|
| Nome do perfil | RB MANUTENÇÃO EM CADEIRAS |
| Bio | "Empresa com mais de 20 anos no segmento de cadeiras giratórias e estofados. 💺Todos os modelos 🏬Loja física" |
| Seguidores / seguindo / posts | 606 / 762 / 121 |
| Link da bio | Facebook "RB Manutenções" (facebook.com/profile.php?id=100054587268283) |
| Endereço no perfil comercial | "av cristo rei n27", Manaus (bate com a fonte 1; Maps/CNPJ registram "Rua") |
| Foto de perfil | Logo real: monograma **RB vermelho e preto** + cadeira, texto "Conserto de Cadeiras Giratórias" |

**Legendas dos posts recentes revelaram serviços que nenhuma outra fonte citava:**

- "Revestimento em cubos sintético automotivo de primeira linha que não descasca é só aqui na RB"
- "RB revestimento automotivo em couro legítimo ou sintético faça seu orçamento"
- "REFORMA DA CADEIRA GAME COM PERSONALIZAÇÃO" (com logo do cliente aplicado)
- "Cadeira vários modelos à venda aqui na loja RB Manaus Amazonas"
- "Cadeira modelo Gamer de verdade revestimento em couro legítimo à venda na RB"
- "Cadeira giratória modelo Presidente impermeável anti unha de gato à venda na RB"
- (Também vendem consumíveis de oficina: cilindro de gás CO2 para solda MIG)

**Assets baixados para `public/images/rbcadeiras/`** (posts pessoais do feed
foram descartados; só material do negócio):

| Arquivo | Origem/uso |
|---|---|
| `rb-logo.jpg` | Foto de perfil (logo) → header, rodapé |
| `rb-hero-cadeira.jpg` | Cadeira presidente preta/vermelha na loja → hero |
| `rb-loja.jpg` | Interior da loja com cadeiras à venda → card "Visite a loja" |
| `rb-reforma-gamer.jpg` | Reforma gamer personalizada ("DEPOIS") → galeria |
| `rb-revestimento-automotivo.jpg` | Bancos automotivos em couro → galeria |
| `rb-gamer-couro.jpg` / `rb-gamer-tecido.jpg` | Cadeiras gamer → galeria |
| `rb-presidente-verde.jpg` | Cadeira reestofada verde → galeria |
| `rb-oficina-bases.jpg` | Bastidores: bases/mecanismos na oficina → galeria |

### Dados cadastrais públicos (complemento via CNPJ)

- Nome fantasia: **RB Consertos e Manutenção de Cadeiras Giratórias**
- CNPJ **36.240.173/0001-24**, ativa, aberta em **04/02/2020** (MEI)
- CNAE principal: comércio varejista de equipamentos para escritório
- CNAEs secundários: **reparação de artigos do mobiliário** e fabricação de artigos de carpintaria
- Endereço confirma o do Maps: Rua Cristo Rei, 27 — Coroado, Manaus/AM

**Todo o conteúdo público das duas fontes está contido na prévia**: nome, bio
(citada literalmente na seção Sobre), endereço com link do Maps, handle e link
do Instagram, e os dados cadastrais que sustentam as afirmações (CNPJ no rodapé).

### Referências externas consultadas (concorrentes do segmento)

- Renmix (SP, desde 1972): argumento "economize até 70% reformando", verticais
  corporativas, CTA de WhatsApp recorrente, garantia e ergonomia (NR-17).
- JK Cadeiras, Mecmol, MJ Oficina de Cadeiras, Gyn Cadeiras: cardápio de
  serviços padrão do segmento — rodízios, pistão a gás, base, braços,
  mecanismos, reestofamento (espuma/tecido), higienização e reforma completa.

## O que as fontes têm de bom (e foi preservado)

- **"+20 anos no segmento"** — é o maior ativo de confiança da marca; virou
  badge do hero, título do Sobre e citação literal da bio.
- **"Todos os modelos" e "estofados"** — amplitude do serviço mantida em
  destaque (badges e serviços).
- **Loja física** — raro no segmento informal; virou card próprio com rota no
  Google Maps (fonte 1) e âncora de credibilidade.
- **Localização no Coroado** — usada para SEO local ("conserto de cadeiras
  giratórias em Manaus") e schema.org com geolocalização exata do Maps.

## Limitações das fontes → como a prévia tratou

1. **Sem site e sem telefone público** → o WhatsApp da prévia usa número
   ilustrativo (`5500000000000`), com aviso explícito no rodapé. Substituir
   quando a cliente informar o oficial.
2. ~~Fotos do Instagram inacessíveis~~ → **resolvido**: a extração via API
   pública trouxe logo, foto da loja e 6 fotos de trabalhos reais; a galeria e
   o hero agora usam exclusivamente material do próprio Instagram da RB, com
   legendas baseadas nas originais.
3. **Sem avaliações públicas extraíveis no Maps** → nenhum depoimento foi
   inventado. A prova social da prévia é factual: anos de experiência, loja
   física, fotos reais, CNPJ ativo e link direto para o Instagram.
4. **Horário de funcionamento não público** → não foi inventado; o contato
   direciona para WhatsApp e loja física.

## Problemas/oportunidades identificados → melhorias aplicadas

### Presença digital
1. **A empresa não tem site** — toda a presença é a ficha do Maps + Instagram
   com ~489 seguidores → a prévia cria a primeira página que junta tudo:
   endereço, Instagram, WhatsApp e serviços em uma única URL compartilhável.
2. **Ficha do Maps genérica ("RB Manutenção")** não diz *o que* é mantido →
   título, headline e SEO da prévia deixam o nicho explícito: "conserto de
   cadeiras giratórias em Manaus".
3. **Sem SEO estruturado** → schema.org `LocalBusiness` (com geolocalização da
   fonte 1 e `sameAs` para o Instagram) + `FAQPage`, metadados Open
   Graph/Twitter, headings semânticos e canonical.

### Conversão
4. **Instagram exige que o cliente "cave" informações** → jornada única de
   conversão: promessa → prova → serviços → processo em 4 passos → FAQ →
   contato, com CTA de WhatsApp persistente (botão flutuante + CTAs por seção).
5. **Orçamento sem fricção** → fluxo "mande uma foto da cadeira pelo WhatsApp"
   com mensagem pré-preenchida — padrão vencedor entre os concorrentes
   pesquisados, zero backend.
6. **Argumento econômico do segmento** ("reformar custa até 70% menos que
   comprar nova") → seção "Por que reformar?" + destaque numérico na seção
   corporativa.
7. **Mercado B2B invisível nas fontes** (CNAE de varejo de equipamentos de
   escritório indica vocação corporativa) → seção "Para empresas" com
   segmentos-alvo e CTA de proposta corporativa.

### Design e mobile
8. **Mobile-first real**: 1 coluna → 2 (tablet) → 3/4 (desktop), alvos de toque
   ≥ 44px, menu drawer acessível (`aria-expanded`, fechamento por Esc/overlay),
   skip link, `prefers-reduced-motion`.
9. **Identidade visual extraída do logo real** (foto de perfil do Instagram):
   vermelho `#d21f2b` + preto/grafite, com variante clara `#ff8087` para
   contraste AA sobre fundos escuros. O logo aparece no header e no rodapé.
10. **Recursos visuais 100% do cliente**: hero com foto real de trabalho
    (cadeira presidente preta/vermelha, que ecoa as cores do logo), card da
    loja com foto do interior, e galeria "Trabalhos reais" com 6 fotos do feed
    — nada de banco de imagens.
11. **Serviços descobertos nas legendas** viraram cards e conteúdo: reforma de
    cadeira gamer com personalização e revestimento automotivo em couro
    legítimo/sintético — ampliam o mercado da página (gamers e frotas/carros).
12. **Facebook "RB Manutenções"** (link da bio) adicionado ao contato, rodapé e
    `sameAs` do schema.org.

## Revisão visual (2026-07-15, screenshots mobile 390px + desktop 1366px)

- Galeria passou de 1 para **2 colunas no mobile** (estilo feed) e 3 no desktop
  — corta pela metade o scroll da seção.
- Removido link "Abrir no Google Maps" duplicado no contato (o bloco "Como
  chegar" com mapa incorporado já cobre a função).
- FAQ ganhou a pergunta sobre **revestimento de bancos de carro** (serviço das
  legendas que não tinha resposta na seção).
- CTA corporativo padronizado em **verde WhatsApp** (antes era escuro, único
  destoante do padrão "WhatsApp = verde").
- Texto do badge do hero encurtado ("residencial e automotivo") para não
  desalinhar o grid 2×2 no mobile.
- Corrigido vazamento da fonte display (Cinzel/small-caps) do site Luma nos
  headings da prévia — reset `font-family: inherit` nos h1–h4.
- **Correção estrutural de espaçamento**: o reset `.rb-page p/ul/ol { margin: 0 }`
  tinha especificidade maior que as classes de espaçamento (`.rb-footer-brand`,
  `.rb-kicker`, `.rb-hero-sub`, `.rb-steps`…), anulando todas as margens
  projetadas — sintoma visível: logo do rodapé colado no texto. Reset reescrito
  com `:where()` (especificidade zero), reativando os espaçamentos da página
  inteira; margens do rodapé também ampliadas (marca 1rem, títulos 0.85rem).

## Próximos passos com a cliente

- Receber o **WhatsApp oficial** para substituir o número placeholder.
- **Validar o uso das fotos** já integradas (todas do feed público da própria
  RB) e, se quiser, enviar versões em alta resolução.
- Confirmar **horário de funcionamento** e serviços exatos (a lista atual segue
  as legendas do Instagram + padrão do segmento).
- Confirmar o endereço oficial: Instagram diz "**Av.** Cristo Rei, 27",
  Maps/CNPJ dizem "**Rua** Cristo Rei, 27" (a prévia segue o Maps).
- Definir se depoimentos do Maps podem ser transcritos (exigem acesso à ficha).
