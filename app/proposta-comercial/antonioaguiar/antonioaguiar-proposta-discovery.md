# Proposta Comercial - Antonio Aguiar

> Fonte de verdade para desenvolvimento da pagina `/proposta-comercial/antonioaguiar`
> Data da extracao: 2026-06-16
> Ultima atualizacao: 2026-06-17 (respostas do cliente via WhatsApp)
> Status: dados principais confirmados — pendente apenas modalidade de atendimento por localidade e arquivo nativo do manual de marca

---

# Resumo Executivo

Antonio Aguiar (nome completo de registro, conforme manual de marca: **Antonio Odenilton Aguiar da Silva**) e advogado, OAB 6589, com escritorios/enderecos de atendimento no Acre, Amazonas e Santa Catarina. Ja existe identidade visual profissional pronta (manual de marca + cartao de visita), em tom premium escuro com dourado, o que da uma base solida para a proposta sem depender de extracao adicional de Instagram.

O Instagram oficial informado pelo cliente e [@antonioaguiar.adv](https://www.instagram.com/antonioaguiar.adv/). O fetch publico direto (sem browser) nao trouxe dados, mas uma segunda tentativa via scraper com browser real (Playwright) conseguiu acessar o perfil antes do muro de login aparecer, e extraiu bio, contadores e 12 imagens reais de posts. Os posts revelam claramente o nicho de atuacao: **direito bancario e defesa de produtores rurais/agronegocio contra bancos** (revisao de contrato bancario, desbloqueio de conta, negativacao indevida, busca e apreensao de veiculo, suspensao de CNH por divida).

---

# Fontes Utilizadas

## Fonte principal solicitada

- Instagram: [@antonioaguiar.adv](https://www.instagram.com/antonioaguiar.adv/)

## Fontes complementares (anexos enviados pelo cliente)

- `MANUAL DA LOGO - ANTONIO ODENILTON AGUIAR DA SILVA_compressed.pdf` - manual de marca completo (conceito do logo, paleta, tipografia, aplicacoes).
- `CARTÃO DE VISITA -LUCIANO MONTARGIL ROCHA.pdf` - cartao de visita com dados de contato, enderecos e OAB.

## Limite da extracao

- O fetch publico simples (sem browser) so retornou o titulo da pagina, sem bio/contadores/feed.
- O scraper com Playwright (`scripts/scraper_antonioaguiar_browser.py`) conseguiu carregar o perfil e capturar bio, seguidores, seguindo, destaques e 12 imagens de posts antes do Instagram exibir o modal de "Cadastre-se para ver mais". Por isso, **captions completas e hashtags nao foram coletadas** (o modal de login bloqueou a abertura dos posts individuais) - o texto de cada post foi lido diretamente das artes/cards do feed (texto embutido na imagem), nao da legenda real do Instagram.
- Buscas indexadas no Google nao retornaram dados desse perfil especifico (resultados eram de outros perfis com nomes parecidos: @drantonioaguiar, @aguiaradvoficial, @antoniogalvao.adv).
- Antes da publicacao final, recomenda-se validar com o cliente: legendas completas dos posts (para SEO/copy), quais das 35 publicacoes podem ser usadas no site, e se ha mais conteudo nos destaques (20 destaques identificados, nao abertos).

---

# Dados Confirmados (Cartao de Visita)

| Campo | Informacao |
| --- | --- |
| Nome de marca | Antonio Aguiar - Advogado |
| Nome completo (manual de marca) | Antonio Odenilton Aguiar da Silva |
| OAB | OAB 6589 — AC (Acre) |
| E-mail | antonioaguiaradv10@gmail.com |
| WhatsApp/Telefone | (48) 98846-4514 |
| Endereco 1 | Rua Silvio Antônio Araújo de Oliveira, QD 207, n.208, Portal da Amazônia, CEP: 69915-720, Rio Branco - AC |
| Endereco 2 | Br. 317, Km 04, n. 7.250, Bairro Platô do Piquiá, CEP: 69850-000, Boca do Acre - AM |
| Endereco 3 | Servidão Corujas do Sul, n.126, apt. 203, Bairro Campeche, CEP: 88063-082, Florianópolis - SC |

---

# Identidade Visual Confirmada (Manual de Marca)

## Conceito do logo

O logo e formado por tres elementos simbolicos, segundo o proprio manual:

- **Letra "A"** de Antonio Aguiar
- **Arvore** - representa sustentabilidade
- **Escudo** - representa formalidade

O resultado e um monograma "A" estilizado dentro de um escudo, com uma arvore/ramificacao integrada ao traco, em estilo line-art dourado sobre fundo escuro.

## Paleta de cores

O manual apresenta tres swatches de cor com codigos hexadecimais, porem a digitalizacao/OCR do PDF nao permitiu ler os codigos com 100% de certeza. Os tons visiveis sao:

| Papel | Tom observado | Hex (conforme PDF, a confirmar) |
| --- | --- | --- |
| Cor 1 | Branco/off-white | Codigo nao legivel com confianca no PDF |
| Cor 2 | Dourado/dourado-acastanhado | Codigo nao legivel com confianca no PDF |
| Cor 3 | Branco/cinza claro | Codigo nao legivel com confianca no PDF |

Recomendacao: solicitar ao cliente o arquivo de manual de marca em PDF/AI nativo (nao compactado) para extrair os hex exatos antes de finalizar o design system.

## Tipografia

O manual mostra duas famílias tipográficas de exemplo (alfabeto completo em caixa alta/baixa e numeros):

| Uso | Fonte indicada no manual | Observacao |
| --- | --- | --- |
| Titulos/destaque | Nome da fonte com leve distorcao de OCR no PDF (aparenta ser uma fonte serifada/script de elegancia) | Confirmar nome exato da fonte com o cliente/designer |
| Corpo/apoio | Montserrat SemiBold | Leitura confirmada com clareza no PDF |

## Aplicacoes mostradas no manual

- Logo principal em dourado sobre fundo verde-escuro/preto, com o nome "ANTONIO AGUIAR" e subtitulo "ADVOGADO".
- Versoes do logo sobre fundo branco, fundo dourado/areia e fundo escuro (para uso em diferentes contextos).
- Mockups de aplicacao: cartao de visita, papelaria/laptop, totem/identidade externa com iluminacao noturna, e ambiente de escritorio (parede com logo atras da mesa).
- Cartao de visita fisico em preto com logo e texto dourado, reforcando o mesmo padrao do PDF de cartao de visita.
- Credito do material: Lucas Oliveira - Designer Grafico (autor do manual de marca).

## Cartao de visita (segundo PDF anexado)

- Frente: fundo preto, logo em escudo dourado centralizado, nome "ANTONIO AGUIAR" em serifada branca espacada, subtitulo "ADVOGADO" em dourado.
- Verso: logo + nome + "OAB 6589", lista de contatos (WhatsApp, e-mail, 3 enderecos) e QR code dourado/preto no canto.

---

# Dados Publicos Identificados (Instagram)

Dados extraidos diretamente do perfil via scraper Playwright em 2026-06-16 (ver secao "Dados Extraidos" no fim deste documento e `scripts/output_antonioaguiar/`).

| Campo | Dado encontrado | Nivel de confianca |
| --- | --- | --- |
| Instagram | @antonioaguiar.adv | Alto |
| Nome de exibicao / bio | "Antonio Aguiar \| Advogado" | Alto |
| Posts | 35 | Alto (confirmado visualmente na screenshot do perfil) |
| Seguidores | 1.041 | Alto |
| Seguindo | 2.824 | Alto |
| Destaques (stories salvos) | 20 | Alto (contagem), conteudo nao aberto |
| Foto de perfil | Retrato profissional, terno escuro, ambiente com poltrona de couro | Alto |

## Posicionamento e nicho identificado nos posts

Os 12 posts amostrados (cards e reels do feed) mostram um padrao consistente de **direito bancario/financeiro com foco em produtores rurais e pessoas com dividas bancarias**, com frases de impacto sobrepostas as fotos profissionais do advogado. Frases identificadas diretamente nas artes do feed:

- "Decisões importantes exigem segurança, estratégia e respaldo jurídico."
- "Conta bloqueada não é medida de segurança. É paralisação."
- "Tomar o veículo não quita a dívida." - "Muita gente acredita que, quando o banco leva o veículo, o problema acaba ali. Não acaba."
- "Perder o prazo não encerra o problema."
- "Dinheiro em conta não significa dinheiro disponível." - "Muitos produtores vendem, recebem... e quando vão usar o valor, o banco simplesmente segura."
- "O problema do contrato bancário não é a parcela."
- "Perder a CNH pode parar sua operação."
- "Nome sujo trava mais que dívida." - "Muitos produtores até conseguem negociar. O problema é que, mesmo assim, o banco mantém o nome negativado."
- Posts mais informais/humor de bastidor: "Quando estou resolvendo uma coisa urgente e lembro de outra.", "Quando o cliente chega contando nos mínimos detalhes."

Areas de atuacao indicadas com alta confianca por esse padrao (a confirmar formalmente com o cliente):

- Direito bancario (revisao de contratos bancarios, parcelas, juros)
- Desbloqueio/liberacao de conta bancaria
- Negativacao indevida (SPC/Serasa) e limpeza de nome
- Busca e apreensao de veiculo / financiamento
- Suspensao de CNH ligada a divida ou penhora
- Publico-alvo recorrente: **produtores rurais/agronegocio** com problemas bancarios

## Identidade visual confirmada nos posts (alem do manual de marca)

- O escritorio tem parede verde-petroleo escura com o logo dourado (escudo + "A") aplicado em relevo/iluminado, com o nome "ANTONIO AGUIAR ADVOGADO" em letras prateadas/brancas ao lado — visivel em 3 dos 12 posts (selfies/reels no escritorio).
- Os cards de carrossel usam fundo escuro (preto/cinza-chumbo) com tipografia serifada branca para frases de impacto e dourado para destaque, confirmando a paleta preto + dourado do manual de marca.
- Um card usa fundo claro com textura preta angular e detalhes dourados (alto contraste), variando o padrao mas mantendo preto/dourado.
- Mobiliario recorrente: poltrona de couro marrom envelhecido, estante de madeira com livros e planta - cenario fixo de bastidor/escritorio.

---

# Perguntas Pendentes para o Cliente

1. ~~Qual o nome que deve aparecer no site/proposta: **Antonio Aguiar**, **Dr. Antonio Aguiar** ou **Antonio Odenilton Aguiar da Silva**?~~ **Confirmado em 2026-06-17:** usar **Antonio Aguiar** (sem "Dr.", sem nome completo).
2. ~~Qual a UF de registro da OAB 6589?~~ **Confirmado em 2026-06-17:** OAB 6589 — **AC (Acre)**.
3. ~~Quais sao as areas de atuacao juridica?~~ **Confirmado em 2026-06-17:** **direito bancario** — revisao de contrato bancario, desbloqueio de conta, negativacao indevida, busca e apreensao de veiculo, suspensao de CNH por divida. Cliente confirmou atuar exclusivamente no ramo bancario.
4. ~~Qual e o endereco/cidade principal?~~ **Confirmado em 2026-06-17:** endereco principal e **Rio Branco/AC**. Boca do Acre/AM e Florianopolis/SC sao escritorios secundarios.
5. O atendimento e presencial, online ou hibrido em cada uma das tres localidades?
6. Pode enviar o arquivo nativo (PDF nao compactado, AI ou Figma) do manual de marca, para extrair os codigos de cor e o nome exato da fonte de titulo com precisao?
7. A bio atual do Instagram foi confirmada como "Antonio Aguiar | Advogado" (curta). Existe uma bio mais completa ou texto de apresentacao que o cliente queira usar no site?
8. ~~Pode informar seguidores e posts do Instagram?~~ Confirmado via scraper: **35 posts, 1.041 seguidores, 2.824 seguindo, 20 destaques**.
9. ~~O WhatsApp do cartao, (48) 98846-4514, e o numero que deve ser usado nos CTAs do site?~~ **Confirmado em 2026-06-17:** sim, numero confirmado — **+55 48 98846-4514**.
10. Confirma que o publico-alvo principal e produtor rural/agronegocio com problemas bancarios, ou o escritorio atende publico geral tambem?

---

# Prontidao para Desenvolvimento

## Pode ser usado agora

- Identidade visual (conceito de logo, motivos simbolicos, aplicacoes) extraida do manual de marca.
- Dados de contato e enderecos extraidos do cartao de visita.
- Direcao estetica: fundo escuro/preto e verde-petroleo com dourado, tipografia serifada para titulo e Montserrat para corpo.
- Posicionamento e nicho (direito bancario/agronegocio) com forte evidencia do proprio Instagram.
- Acervo selecionado do feed preservado no projeto: `post_01.jpg`, `post_05.jpg` e `post_08.jpg` em `scripts/output_antonioaguiar/images/`; `post_02.jpg`, `post_03.jpg` e `post_04.jpg` organizados em `public/images/antonioaguiar/`; além de 2 screenshots em `scripts/output_antonioaguiar/screenshots/`.
- Numeros reais do Instagram (35 posts, 1.041 seguidores, 2.824 seguindo, 20 destaques) para eventual prova social.

## Bloqueia uma versao final

- Codigos de cor exatos e nome da fonte de titulo (legibilidade limitada no PDF compactado do manual de marca).
- Atendimento presencial, online ou hibrido por localidade (informacao nao coletada ainda).

---

# DADOS EXTRAÍDOS — ANÁLISE VISUAL E DE PERFIL (BROWSER)

> Gerado em 16/06/2026 11:10 via Playwright (Chromium)
> Fonte: Instagram `@antonioaguiar.adv`

## PERFIL INSTAGRAM

- **Username:** @antonioaguiar.adv
- **Nome completo:** antonioaguiar.adv
- **Bio:** Antonio Aguiar | Advogado
- **Seguidores:** 1.041
- **Seguindo:** 2.824
- **Total de posts:** 35 (confirmado visualmente na screenshot `profile_top.png`; a extracao automatica via regex falhou e capturou "m" por engano)
- **Destaques:** 20
- **Link externo:** https://about.meta.com/

## SCREENSHOTS CAPTURADOS

- `scripts/output_antonioaguiar/screenshots/profile_top.png`
- `scripts/output_antonioaguiar/screenshots/profile_grid.png`

## CORES — FOTO DE PERFIL

- `#222426` — cinza neutro
- `#C0A097` — vermelho/rosa
- `#655B5A` — cinza neutro
- `#888996` — cinza neutro
- `#8C9498` — cinza neutro

## PALETA EXTRAÍDA DOS POSTS

| Hex | Frequência | Categoria |
|---|---|---|
| `#C0A097` | 2x | vermelho/rosa |
| `#888996` | 2x | cinza neutro |
| `#8C9498` | 2x | cinza neutro |
| `#222426` | 1x | cinza neutro |
| `#655B5A` | 1x | cinza neutro |
| `#4A4E48` | 1x | cinza neutro |
| `#D6C8A8` | 1x | cor mista |
| `#9FAEA5` | 1x | cinza neutro |
| `#97A1A6` | 1x | cinza neutro |
| `#394744` | 1x | cinza neutro |
| `#C9C4BD` | 1x | cinza neutro |
| `#92B0B1` | 1x | cor mista |
| `#84A2A5` | 1x | cor mista |
| `#DCCFC4` | 1x | cinza neutro |

### Cores por Categoria

- **Vermelho/rosa:** `#C0A097`
- **Cinza neutro:** `#888996`, `#8C9498`, `#222426`
- **Cor mista:** `#D6C8A8`, `#92B0B1`, `#84A2A5`

## RECOMENDAÇÃO DE DESIGN

Com base nas cores dominantes extraídas do perfil:

- `#C0A097` — vermelho/rosa (aparece 2x nos posts)
- `#D6C8A8` — cor mista (aparece 1x nos posts)
- `#92B0B1` — cor mista (aparece 1x nos posts)
- `#84A2A5` — cor mista (aparece 1x nos posts)

> **Para o designer:** Compare esta paleta real com o design system proposto.
> Ajuste ou valide as escolhas de cor com base no manual de marca ja existente.
