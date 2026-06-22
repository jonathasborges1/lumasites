# Proposta Comercial - Dr. Juraci Nunes

> Fonte de verdade para desenvolvimento da página `/proposta-comercial/juracinunes`
> Data da extração: 2026-06-21
> Status: dados públicos coletados — pendente scraper do Instagram e confirmações do cliente

---

# Resumo Executivo

Dr. Juraci Nunes de Carvalho Júnior é advogado criminalista e eleitoral com atuação em Aracaju/SE. Eleito melhor advogado criminalista por 3 anos consecutivos (2022, 2023, 2024) pelo jornal Imprensa 24h. Advogado de casos de alto perfil (Fernandinho Beira-Mar) e presidente da ABRADAA (Associação Brasileira de Advogados e Advogadas). Possui identidade online estabelecida no site `juracinunescriminalista.com`, mas o site atual carece de sofisticação visual, autoridade de marca e cobertura da especialidade eleitoral.

**A oportunidade é clara:** o cliente tem credenciais excepcionais (prêmios, casos de alto perfil, liderança de associação) que o site atual subutiliza completamente.

---

# Fontes Utilizadas

| Fonte | URL | Status |
|---|---|---|
| Site oficial | https://juracinunescriminalista.com/ | Extraído via WebFetch |
| Instagram | https://www.instagram.com/advogadojuraci/ | Parcial (header apenas via WebFetch) |
| LinkedIn | https://br.linkedin.com/in/juraci-nunes-carvalho-778269203 | Bloqueado (HTTP 999) |
| Busca indexada | Google / JusBrasil / ConsultaSocio | Dados complementares coletados |
| Scraper Playwright | `scripts/scraper_juracinunes_browser.py` | A executar |

---

# Dados Identificados

## Dados Pessoais e Profissionais

| Campo | Informação | Confiança |
|---|---|---|
| Nome completo | Juraci Nunes de Carvalho Júnior | Alta (JusBrasil + ConsultaSocio) |
| Nome de marca | Dr. Juraci Nunes | Alta (site oficial) |
| OAB | OAB/SE — número a confirmar (ref. #836089804 encontrado em busca) | Média — confirmar com cliente |
| Especialidades | Direito Criminal + Direito Eleitoral | Alta (site + Instagram bio) |
| Localização | Aracaju, Sergipe (atendimento em todo o estado) | Alta |
| WhatsApp | (79) 9 9998-6028 | Alta (site oficial) |
| Instagram | @advogadojuraci | Alta (site oficial) |
| Site atual | juracinunescriminalista.com | Alta |
| Formação | Direito — universidade privada em Sergipe (2017) | Média (busca indexada) |

## Prêmios e Reconhecimentos

- **Melhor advogado criminalista de Sergipe** — 3 anos consecutivos: 2022, 2023, 2024 (jornal Imprensa 24h)
- O site atual menciona "4 anos consecutivos" — confirmar se 2025 também foi premiado

## Cargos e Liderança

- **Presidente da ABRADAA** — Associação Brasileira de Advogados e Advogadas (dado de alto valor para autoridade de marca)
- Advogado e consultor jurídico da COHIDRO (Companhia de Recursos Hídricos de Sergipe) entre 2018 e 2019
- Advogado da direção estadual do PMDB/SE em 2018

## Casos de Alto Perfil

- Advogado de **Fernandinho Beira-Mar** (Luiz Fernando Moraes da Costa) — caso de alta visibilidade nacional
- Mais de 100 casos envolvendo políticos ao longo da carreira (direito eleitoral)

---

# Análise do Site Atual

## O que o site atual faz bem

- Tom de urgência ("atendimento emergencial", "liberdade em horas") — eficaz para o público em crise
- CTAs claros e repetidos ("Falar com Especialista")
- Provas sociais básicas: 5.0 no Google, 200+ clientes, prêmio de melhor advogado
- 6 serviços bem definidos e explicados em linguagem acessível

## Problemas e oportunidades de melhoria

| Problema atual | Proposta de melhoria |
|---|---|
| Design visual básico/genérico | Identidade premium — direito criminal exige sobriedade, peso e autoridade |
| Ausência total da especialidade eleitoral | Seção dedicada ao direito eleitoral (Instagram bio já usa "Advogado Eleitoral") |
| Credencial ABRADAA não mencionada | Destaque de liderança setorial como prova de autoridade máxima |
| Caso Fernandinho Beira-Mar não explorado | Citação de "casos de repercussão nacional" (sem sensacionalismo) |
| Sem fotografia/vídeo profissional do Dr. Juraci | Seção "hero" com foto de alta qualidade, ambiente de escritório |
| Depoimentos genéricos (nomes como "Maria Souza", "José Pereira") | Depoimentos reais com rosto, nome e caso (se autorizado) |
| Sem timeline/trajetória do advogado | Seção "Sobre" com carreira, prêmios, trajetória |
| Sem blog/conteúdo educativo | Integração com conteúdo do Instagram |

---

# Identidade Visual (A Definir)

O site atual não possui identidade visual forte. O posicionamento "criminalista de excelência" pede uma estética:

## Direção Estética Sugerida

- **Tom geral:** Sóbrio, imponente, confiável — sem sensacionalismo
- **Paleta sugerida:** Preto profundo / Chumbo + Dourado / Off-white (padrão advocacia premium de alto impacto)
- **Tipografia:** Serifada elegante para títulos (autoridade), sans-serif limpa para corpo
- **Fotografia:** Retrato profissional do Dr. Juraci em ambiente de escritório formal
- **Ícones/símbolos:** Referências visuais à justiça — sem clichê (sem balança genérica)

## O que precisamos do cliente

- Foto profissional de alta resolução
- Logo (se existir) — caso contrário, monograma/logotipo a criar
- Depoimentos reais com autorização de uso
- Confirmação do número de prêmios (3 ou 4 anos)
- Número OAB confirmado
- Confirmação sobre uso do caso Fernandinho Beira-Mar como referência pública

---

# Mapeamento de Seções — Proposta de Site

```
1. Hero
   - Frase de impacto: urgência + autoridade
   - CTA primário: WhatsApp
   - Credenciais rápidas: prêmios + Google rating

2. Quem é o Dr. Juraci
   - Foto profissional
   - Trajetória resumida
   - ABRADAA, premiações, anos de experiência

3. Áreas de Atuação
   3a. Direito Criminal (6 serviços do site atual)
   3b. Direito Eleitoral (novo — explorar casos políticos)

4. Provas Sociais
   - Google 5.0 / 200+ clientes / X anos
   - Depoimentos reais (com foto)
   - Prêmio melhor advogado (logotipo do jornal se disponível)

5. Como funciona o atendimento
   - Online, sigiloso, ágil
   - Passo a passo simples (contato → avaliação → ação)

6. CTA Final
   - WhatsApp destacado
   - Disponibilidade / urgência

7. Footer
   - Dados OAB, redes sociais, política de privacidade
```

---

# Divergência Detectada: Criminal vs. Eleitoral

O **site atual** posiciona o Dr. Juraci exclusivamente como criminalista.
O **Instagram** (@advogadojuraci) apresenta o nome de exibição como "Juraci Nunes | **Advogado Eleitoral**".
As **buscas indexadas** confirmam dupla especialidade: criminal + eleitoral.

**Ação necessária:** confirmar com o cliente qual posicionamento principal ele deseja para o novo site — se unifica as duas especialidades ou mantém sites separados por nicho.

---

# Perguntas Pendentes para o Cliente

1. Confirmar número da OAB (referência encontrada: #836089804 — verificar se é correto)
2. O prêmio de melhor advogado foi por 3 ou 4 anos consecutivos? (site diz 4, buscas indexadas dizem 3)
3. Posicionamento principal: **criminalista**, **eleitoral** ou **dupla especialidade** no mesmo site?
4. Posso usar o caso Fernandinho Beira-Mar como referência de alto perfil no site?
5. Tem foto profissional de alta resolução disponível?
6. Tem logo/identidade visual existente?
7. Tem depoimentos reais (com nome e rosto) de clientes que autorizem publicação?
8. O atendimento é 100% online ou presencial também?
9. Algum destaque dos stories do Instagram para verificar conteúdo?
10. Qual o site ou plataforma de agendamento/contato preferida além do WhatsApp?

---

# Prontidão para Desenvolvimento

## Pode ser usado agora

- Textos das 6 áreas de atuação criminal (extraídos do site atual)
- Dados de contato: WhatsApp (79) 9 9998-6028, Instagram @advogadojuraci
- Prova social: 5.0 Google, 200+ clientes, 5+ anos, melhor advogado consecutivo
- Direção estética: dark premium com dourado (padrão advocacia criminal de autoridade)
- Estrutura de seções mapeada (ver acima)

## Bloqueia uma versão final

- Posicionamento definido (criminal / eleitoral / ambos)
- Logo / identidade visual (não encontrado em canais públicos)
- Depoimentos reais autorizados
- Número OAB confirmado
- Captions e imagens dos posts (modal de login bloqueou — rodar scraper com `--login`)

---

# DADOS EXTRAÍDOS — INSTAGRAM (Scraper Playwright + Brave — 2026-06-21)

> Fonte: `scripts/scraper_juracinunes_browser.py` via Playwright + Brave (perfil logado, sessão copiada)
> Última execução: 2026-06-21T15:55:47 — perfil e grid coletados com sessão autenticada

## Perfil

| Campo | Dado | Confiança | Observação |
|---|---|---|---|
| Username | @advogadojuraci | Alta | — |
| Nome de exibição | Juraci Nunes \| Advogado Eleitoral | Alta | — |
| Bio completa | Ver abaixo | Alta | Capturada com sessão logada |
| Seguidores | **362 mil** | Alta | Confirmado visualmente no screenshot |
| Seguindo | 7.411 | Alta | — |
| Total de posts | 6 | Alta | Confirmado visualmente |
| Destaques | **5** | Alta | 5 highlights ativos (sessão logada revelou mais que a anterior) |
| Foto de perfil | `scripts/output_juracinunes/profile_pic.jpg` | Alta | Baixada via CDN |

## Bio Completa (capturada com sessão logada)

> "Ensino advogados comuns a faturarem +R$100k nas eleições com assessoria jurídica
> Inscreva-se na Imersão Eleitoral 100k•..."

**Interpretação crítica:** o Instagram do Dr. Juraci não vende serviços jurídicos para clientes — ele vende **mentoria B2B para outros advogados** sobre como faturar em épocas eleitorais. Isso é um infoproduto/curso, não captação de réus ou candidatos. O posicionamento é completamente diferente do site criminal atual.

> **Alerta:** 362 mil seguidores com apenas 6 posts é anomalia. Provável crescimento via conteúdo viral eleitoral ou conta reativada/refundada. Confirmar histórico com o cliente.

## Análise Visual da Foto de Perfil

Dr. Juraci: terno escuro (navy), camisa branca, óculos de armação escura, expressão séria e direta, fundo cinza escuro neutro. Overlay dourado **"25/06"** (evento ou aniversário em 25 de junho). Alta qualidade de produção. Alinha perfeitamente com estética dark premium + dourado.

## Paleta de Cores — Foto de Perfil (ColorThief)

| Hex | Tom | Aplicação sugerida no site |
|---|---|---|
| `#3B3840` | Chumbo escuro | Fundo principal |
| `#BB9372` | Dourado/âmbar quente | Acento principal — CTAs, destaques |
| `#8B6F5E` | Marrom quente | Acento secundário |
| `#90909E` | Cinza azulado | Texto de apoio |
| `#928E86` | Cinza neutro | Bordas, separadores |

## Análise Visual do Grid (screenshot logado)

Posts identificados visualmente no grid (da esquerda para direita, cima para baixo):

| # | Tipo | Conteúdo identificado |
|---|---|---|
| 1 | Reel | **"JURACI NUNES MAKING OF"** — produção profissional de vídeo, Dr. Juraci em terno com texto em destaque |
| 2 | Post | Foto de Dr. Juraci ao lado de carro escuro premium — lifestyle/sucesso |
| 3 | Post | **Logo ABRADAA** + Nota de Solidariedade sobre incêndio na sede da OAB Federal em Brasília, assinado por "Juraci Nunes de Carvalho Júnior, **Presidente ABRADAA**" |
| 4 | Post | Dr. Juraci ao lado de outro homem em ternos azuis — aparenta ser encontro com liderança da OAB Nacional (Beto Simonetti) |
| 5 | Reel | Dr. Juraci em escritório/estúdio, falando para câmera — conteúdo educacional/autoridade |
| 6 | Post | Dr. Juraci em ambiente de escritório com branding @advogadojuraci |

**Leitura do grid:** o Instagram é 100% focado em posicionamento de autoridade no campo eleitoral e na venda da "Imersão Eleitoral 100k". Não há nenhum post sobre direito criminal. A audiência é de **outros advogados**, não de clientes com problemas jurídicos.

## Análise Individual dos Posts (screenshots capturados — 2026-06-21)

### Post 1 — Reel "Making Of / Eleições Milionárias"
- **URL:** https://www.instagram.com/advogadojuraci/reel/DTiwW5iktfU/
- **Screenshot:** `scripts/output_juracinunes/screenshots/post_01.png`
- **Conteúdo:** Sessão de fotos em estúdio profissional (4K 60FPS). Dr. Juraci sentado em cadeira, terno escuro, iluminação de estúdio ao fundo. Collab com @luuisbritto (produtor de conteúdo).
- **Caption:** *"REC de hoje | Sessão de Fotos para o Curso **Eleições Milionárias**."*
- **Engajamento:** 83 curtidas, 10 comentários | Janeiro 2025
- **Insight-chave:** Nome do produto digital confirmado — **"Eleições Milionárias"** (pode ser diferente da "Imersão Eleitoral 100k" da bio — confirmar se são o mesmo produto ou dois).

### Post 2 — Reel lifestyle premium
- **URL:** https://www.instagram.com/advogadojuraci/reel/C-03ZpFvcsQ/
- **Screenshot:** `scripts/output_juracinunes/screenshots/post_02.png`
- **Conteúdo:** Dr. Juraci caminhando em área externa tropical, terno bege/caramelo, palmeiras ao fundo. Visual de sucesso e liberdade. Caption: "Link na Bio".
- **Engajamento:** 79 curtidas, 7 comentários | Agosto 2024

### Post 3 — Nota de Solidariedade ABRADAA
- **URL:** https://www.instagram.com/advogadojuraci/p/C9--rINvhrU/
- **Screenshot:** `scripts/output_juracinunes/screenshots/post_03.png`
- **Conteúdo:** Logo ABRADAA + nota formal sobre incêndio na sede do CFOAB (Brasília, 28/07/2024).
- **Texto assinado:** *"Juraci Nunes de Carvalho Júnior, **Presidente ABRADAA**"* — confirmação documental do cargo.
- **Engajamento:** Baixo (post institucional)

### Post 4 — Encontro com liderança da OAB Nacional
- **URL:** https://www.instagram.com/advogadojuraci/p/C6y7CilLaQB/
- **Screenshot:** `scripts/output_juracinunes/screenshots/post_04.png`
- **Conteúdo:** Dr. Juraci e outro homem em ternos azuis, segurando documento em evento formal. Caption menciona "Presidente da Associação Brasileira de Direito Eleitoral" e "confiança".
- **Engajamento:** 27 curtidas, 8 comentários | Novembro 2024
- **Insight:** Relação direta com cúpula da OAB — prova de rede de influência nacional.

### Post 5 — Reel talking head (maior engajamento)
- **URL:** https://www.instagram.com/advogadojuraci/reel/C3cMQtIAy_m/
- **Screenshot:** `scripts/output_juracinunes/screenshots/post_05.png`
- **Conteúdo:** Dr. Juraci em terno escuro, sentado à mesa, falando diretamente para câmera. Branding "@advogadojuraci" visível. Escritório/estúdio.
- **Engajamento:** **92 curtidas, 10 comentários** — post com maior engajamento | Fevereiro 2024
- **Insight:** Formato de autoridade direta funciona melhor com o público dele.

### Post 6 — Escritório / inauguração
- **URL:** https://www.instagram.com/advogadojuraci/p/CrcajkBNt1_/
- **Screenshot:** `scripts/output_juracinunes/screenshots/post_06.png`
- **Conteúdo:** Dr. Juraci em terno azul royal, sentado à mesa de escritório com documentos. Caption sugere inauguração de espaço.
- **Engajamento:** 61 curtidas, 8 comentários

---

## Identidade Visual Real — Revisada após Posts

| Elemento | Observado |
|---|---|
| Paleta de ternos | **Azul royal/marinho** (3 posts), bege/caramelo (1), preto/grafite (2) |
| Ambiente | Escritório formal, estúdio profissional, externo tropical |
| Qualidade de produção | Alta — 4K, iluminação profissional, collab com produtor |
| Tom visual | Lifestyle premium + autoridade institucional |

> **Revisão da paleta sugerida:** o cliente usa predominantemente **azul marinho** — não preto. A direção mais autêntica é **azul marinho escuro + dourado**, não preto + dourado. Isso diferencia da advocacia criminal genérica e alinha com o visual real do Dr. Juraci.

---

## Nome do produto digital confirmado

- **"Eleições Milionárias"** — curso/mentoria (caption post 1, janeiro 2025)
- **"Imersão Eleitoral 100k"** — produto citado na bio atual
- Confirmar com cliente se são o mesmo produto com nomes diferentes ou dois produtos distintos.

## Screenshots coletados

- `scripts/output_juracinunes/screenshots/profile_top.png`
- `scripts/output_juracinunes/screenshots/profile_grid.png`
- `scripts/output_juracinunes/screenshots/post_01.png` — Eleições Milionárias / making of
- `scripts/output_juracinunes/screenshots/post_02.png` — Lifestyle tropical
- `scripts/output_juracinunes/screenshots/post_03.png` — Nota ABRADAA
- `scripts/output_juracinunes/screenshots/post_04.png` — Encontro OAB Nacional
- `scripts/output_juracinunes/screenshots/post_05.png` — Reel talking head (maior engajamento)
- `scripts/output_juracinunes/screenshots/post_06.png` — Escritório
- `scripts/output_juracinunes/profile_pic.jpg`