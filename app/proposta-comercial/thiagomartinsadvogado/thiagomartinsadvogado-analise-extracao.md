# Thiago Martins Advocacia — Análise, Extração e Decisões de Design

Fonte: https://www.instagram.com/thiagomartinsadvogado/
WhatsApp fornecido: (31) 98869-9505

## Etapa 1 — Análise

**O que foi possível confirmar** (via busca — o Instagram bloqueia scraping direto por WebFetch):
- Nome: Thiago Augusto Martins.
- Perfil: advogado e empreendedor.
- Métricas do Instagram: ~8.857 seguidores, 922 seguindo, 276 publicações.
- Bio: comprometido em resolver problemas jurídicos com **clareza, ética e estratégia**, com atuação nacional no Brasil.

**O que foi confirmado em uma segunda extração dos metadados públicos e do feed:**
- Atuação concentrada em Direito do Trabalho, dedicada à defesa dos direitos dos trabalhadores.
- Atendimento on-line em todo o Brasil e presencial em Belo Horizonte — MG.
- E-mail: `contato@thiagomartins.adv.br`.
- Identidade visual oficial em preto, dourado e tons quentes, com monograma/balança.
- Retratos profissionais, peça institucional da marca e imagem de Justiça disponíveis no feed.

**O que ainda não foi possível confirmar:**
- Depoimentos de clientes.
- Anos de experiência, número de casos/processos.
- Endereço completo do atendimento presencial.

**Pontos fortes da fonte:** posicionamento claro em 3 palavras (clareza, ética, estratégia), presença estabelecida (quase 9 mil seguidores), foco em atuação nacional — bom para um serviço 100% digital.

**Oportunidades de melhoria em relação ao Instagram:** Instagram não permite jornada de conversão estruturada (sem seções de atuação, sem FAQ, sem CTA persistente). A prévia resolve isso com navegação por âncoras, WhatsApp flutuante e uma seção de perguntas frequentes que reduz fricção antes do primeiro contato.

## Etapa 2 — Extração e decisões assumidas

Como grande parte do conteúdo visual/textual não pôde ser extraído do Instagram, as decisões abaixo foram feitas com base no bio confirmado e em boas práticas de mercado — **todas precisam ser validadas com o cliente antes de qualquer publicação real**:

| Elemento | Decisão tomada | Base |
|---|---|---|
| Pilares de marca | Clareza / Ética / Estratégia (seção "Sobre" com abas rotativas) | Texto literal do bio do Instagram |
| Áreas de atuação (6 cards) | Verbas rescisórias, horas extras, reconhecimento de vínculo, acidente de trabalho, assédio e demissão/estabilidade | Derivadas do posicionamento trabalhista confirmado no conteúdo fixado |
| Localização / mapa | Belo Horizonte — MG, sem inventar endereço específico | O feed confirma atendimento presencial na cidade e on-line no Brasil |
| Identidade visual | Logotipo institucional, foto do profissional e imagem de Justiça extraídos do feed | Assets oficiais salvos localmente, sem hotlink |
| Paleta de cores | Preto profundo (`#090806`) + dourado (`#D8B57D`/`#A77A43`) sobre papel quente (`#F7F3EB`) | Paleta extraída das peças institucionais |
| Contato | Apenas WhatsApp + Instagram (sem telefone fixo/e-mail fabricado) | Únicos canais confirmados |
| Números de credibilidade | "100% atendimento digital", "8.800+ pessoas no Instagram", "Brasil" (abrangência) — **sem** "X anos de experiência" ou "X processos conduzidos" | Evita alegações não verificáveis, alinhado ao Provimento 205/2021 da OAB (publicidade da advocacia) |

## Etapa 3 — Desenvolvimento

Implementado em `app/proposta-comercial/thiagomartinsadvogado/`, seguindo o padrão de código já usado em `bbadvogados/` (mesma vertical, advocacia): header fixo com scroll state, preview bar + barra de progresso, menu mobile, seção "Sobre" com abas rotativas (Missão/Visão/Valores → adaptado para Clareza/Ética/Estratégia), grid de áreas de atuação, bloco de citação, stepper "como trabalho", seção de atendimento com mapa do Google (Brasil inteiro, por não haver endereço confirmado), FAQ em acordeão, contato e footer completos, botão de WhatsApp flutuante com pulso, animações de entrada via `IntersectionObserver` (`data-reveal`), gradientes em todas as seções de fundo (nenhuma cor chapada), `prefers-reduced-motion` respeitado.

### Checklist do que falta para publicar de verdade

- [x] Posicionamento principal confirmado como Direito do Trabalho.
- [x] Fotos oficiais do Thiago aplicadas ao hero e à seção "Sobre".
- [x] Atendimento on-line nacional e presencial em Belo Horizonte confirmado.
- [ ] Obter o endereço completo caso o cliente queira exibir a localização exata.
- [ ] Validar número de WhatsApp e horário de atendimento.
- [ ] Coletar depoimentos de clientes, se existirem, para uma futura seção de prova social.
- [ ] Confirmar registro na OAB (número) para exibir credencial — atualmente omitido por falta de dado.
- [ ] Revisar todo o copy com o cliente à luz do Provimento 205/2021 da OAB antes de publicar.
