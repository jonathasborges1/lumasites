# Análise — Prévia Conceitual: Rodrigues e Castro Advocacia

**Rota alvo:** `/proposta-comercial/rodriguesecastroadvocacia`
**Data:** 2026-06-20
**Fonte:** Projeto `advocacia-rodrigues-castro` (Next.js + Tailwind)

---

## 1. O QUE TEMOS

### Identidade do Escritório
- **Nome:** Rodrigues e Castro Advocacia
- **E-mail confirmado:** julianasouzarodrigues.adv@gmail.com
- **WhatsApp (Anne):** +55 92 98230-1415
- **WhatsApp (Juliana):** +55 92 98171-6233
- **Cidade confirmada:** Manaus/AM
- **Modalidades de atendimento:** online e presencial
- **Atendimento presencial:** somente após confirmação pelo WhatsApp
- **Endereço de atendimento:** Rua Luis Lopes, nº 32, Parque 10 de Novembro, Manaus/AM — CEP 69055-755

### Paleta de Cores (identidade atualizada)
| Token | Valor | Uso |
|---|---|---|
| Azul institucional | `#132B45` | Navbar, hero, CTA e rodapé |
| Cinza principal | `#626262` | Textos e informações secundárias |
| Cinza claro | `#D2D2D2` | Bordas, divisores e fundos auxiliares |
| Fundo principal | `#FFFFFF` | Seções principais |
| Fundo alternativo | `#F5F6F7` | Seções e cards alternados |

### Tipografia
- **Headlines:** Argue
- **Textos e interface:** Geometria
- Os arquivos licenciados `.woff2` ainda precisam ser fornecidos.
- Enquanto isso, a prévia utiliza Cormorant Garamond e Montserrat como equivalentes temporários.

### Advogadas da Equipe

#### Anne Castro
- **OAB:** OAB/AM-11421
- **Áreas:** Cível, Trabalhista e Consumidor
- **Pós-graduação:** Direito Processual Civil
- **Experiência:** 9 anos (conforme código)
- **Missão:** "Buscar a melhor solução jurídica para cada caso concreto, de maneira transparente, célere e eficaz."
- **Foto disponível:** `/equipe/anne-castro.png` ✅
- **Background letra:** `/backgrounds/background-letra-a-anne-castro.png` ✅

#### Juliana Rodrigues
- **OAB:** OAB/AM-10547
- **Áreas:** Trabalhista, Cível e Consumidor
- **Pós-graduação:** Direito Processual Civil (hardcoded igual à Anne — confirmar)
- **Experiência:** 9 anos (conforme código)
- **Missão:** "Oferecer um serviço jurídico de excelência, pautado pela ética, eficiência e transparência."
- **Foto disponível:** `/equipe/juliana-rodrigues.png` ✅
- **Background letra:** `/backgrounds/background-letra-j-juliana-rodrigues.png` ✅

### Áreas de Atuação

| Área | Itens | Ícone |
|---|---|---|
| Direito Civil | Indenização por dano moral e material · Ações de cobrança · Locação de imóveis · Negativa de procedimentos por planos de saúde | `/icons/direito-civil.png` ✅ |
| Direito do Trabalho | Verbas trabalhistas · Vínculo empregatício · Verbas rescisórias indevidas · Rescisão indireta · Desvio/acúmulo de funções · Acidente de trabalho · Assédio moral e dispensa irregular · Doença laboral · Horas extras · Reversão de justa causa | `/icons/direito-trabalho.png` ✅ |
| Direito do Consumidor | Cobranças indevidas e negativação de crédito · Cancelamento e suspensão indevida de serviços · Vícios e defeitos em produtos e serviços · Práticas abusivas por fornecedores · Ressarcimento por danos ao consumidor · Anulação de multa por irregularidades em energia e água · Desvio de produto em entregas por aplicativo · Venda casada · Overbooking · Atraso de voo | `/icons/direito-consumidor.png` ✅ |

### Assets de Imagem Disponíveis
```
/logotipo.png                              → Logo do escritório
/equipe/anne-castro.png                    → Foto Anne Castro
/equipe/juliana-rodrigues.png              → Foto Juliana Rodrigues
/backgrounds/hero-bg.png                   → Fundo do Hero
/backgrounds/justice-background.png        → Fundo da seção Atuação
/backgrounds/justice-scale.png             → Fundo da seção Quem Somos
/backgrounds/background-equipe-juliana-rodrigues.png → Fundo decorativo equipe
/backgrounds/background-letra-a-anne-castro.png      → Letra A (card Anne)
/backgrounds/background-letra-j-juliana-rodrigues.png → Letra J (card Juliana)
/icons/direito-civil.png
/icons/direito-trabalho.png
/icons/direito-consumidor.png
```

### Seções do Site Atual
1. **Hero** — Tela cheia com `hero-bg.png` + 2 botões (Sobre Escritório / Entre em Contato)
2. **Quem Somos** — Texto institucional sobre o escritório
3. **Atuação** — Grid 3 colunas com as 3 áreas
4. **Equipe** — Cards das duas advogadas (foto, OAB, áreas, missão)
5. **Contato** — Números de WhatsApp + email
6. **Navbar** — Logo + links de navegação (com menu hamburguer mobile)
7. **Footer** — Copyright simples

---

## 2. O QUE FALTA / LACUNAS IDENTIFICADAS

### 🔴 Crítico (bloqueia o desenvolvimento)

| # | Item | Observação |
|---|---|---|
| 1 | **Headline/tagline do Hero** | O hero atual não tem título nem frase institucional — só dois botões. Precisa de uma headline forte. Exemplo: "Seus direitos defendidos com excelência." |
| 2 | **Itens reais do Direito do Consumidor** | O código tem os itens do Trabalhista copiados no lugar. A cliente precisa fornecer quais serviços de Direito do Consumidor ela oferece. |
| 3 | **Cidade de atuação** | ✅ Confirmada: Manaus/AM. |

### 🟡 Importante (enriquece a prévia)

| # | Item | Observação |
|---|---|---|
| 4 | **Frase institucional / slogan** | Algo para o hero ou rodapé. Ex: "Transparência, dedicação e resultado." |
| 5 | **Formação acadêmica de cada advogada** | Graduação em qual faculdade? Pós em qual instituição? |
| 6 | **Pós-graduação da Juliana** | No código está a mesma info da Anne ("Pós-graduada em direito processual civil") — confirmar se é igual ou diferente. |
| 7 | **Anos de experiência corretos** | O código mostra "9 anos" para ambas — confirmar se isso está correto para as duas. |
| 8 | **Redes sociais** | Ainda não confirmadas; não exibir links provisórios. |
| 9 | **Site atual** | Existe algum site/link atual que possa ser exibido no preview bar da prévia? |
| 10 | **Horário de atendimento** | Para exibir na seção de contato. |

### 🟢 Opcional (fortalece a credibilidade)

| # | Item | Observação |
|---|---|---|
| 11 | **Depoimentos de clientes** | 2 a 3 depoimentos reais para uma seção de prova social. |
| 12 | **Números/estatísticas** | Ex: "X casos atendidos", "X anos de atuação", "X clientes satisfeitos". |
| 13 | **Foto de perfil profissional adicional** | Foto das advogadas em ambiente de escritório (além das circulares já existentes). |
| 14 | **OG Image** | Imagem 1200×630px para compartilhamento em redes sociais. |
| 15 | **Endereço físico** | ✅ Rua Luis Lopes, nº 32, Parque 10 de Novembro, Manaus/AM — atendimento presencial somente após confirmação pelo WhatsApp. |

---

## 3. PERGUNTAS PARA A CLIENTE

Lista das perguntas a enviar para a cliente em ordem de prioridade:

```
1. ✅ Cidade confirmada: Manaus/AM.

2. Vocês têm um site atual? Se sim, qual o endereço?

3. Qual a headline/frase principal que vocês gostariam no início do site?
   (ex: "Seus direitos em boas mãos" ou "Advocacia com propósito e resultado")

4. Quais são os serviços de Direito do Consumidor que vocês oferecem?
   (os itens no site atual estão incorretos — copiados do Trabalhista)

5. Sobre a formação de cada advogada:
   - Em qual faculdade cada uma se graduou?
   - A pós-graduação em Direito Processual Civil é de ambas?
   - Há outras especializações?

6. Os "9 anos de experiência" estão corretos para as duas advogadas?

7. Vocês têm Instagram, LinkedIn ou outras redes sociais oficiais do escritório?

8. Qual a disponibilidade de horários para atendimento presencial?

9. Vocês têm depoimentos de clientes que possam ser usados no site?

10. Vocês têm algum número como "X casos atendidos" ou "X clientes
    atendidos" que gostariam de destacar?
```

---

## 4. ESTRUTURA PROPOSTA PARA A PRÉVIA (lumasites)

### Arquivos a criar
```
lumasites/app/proposta-comercial/rodriguesecastroadvocacia/
├── page.tsx          → Página principal (single-file, padrão da plataforma)
├── layout.tsx        → Fontes (Montserrat + Playfair Display ou similar)
└── metadata.ts       → SEO + ProposalMeta
```

### Assets a copiar para lumasites
```
lumasites/public/images/rodriguesecastroadvocacia/
├── logo.png                  ← /logotipo.png
├── anne-castro.png           ← /equipe/anne-castro.png
├── juliana-rodrigues.png     ← /equipe/juliana-rodrigues.png
├── hero-bg.png               ← /backgrounds/hero-bg.png
├── justice-scale.png         ← /backgrounds/justice-scale.png
├── icon-civil.png            ← /icons/direito-civil.png
├── icon-trabalho.png         ← /icons/direito-trabalho.png
└── icon-consumidor.png       ← /icons/direito-consumidor.png
```

### Seções planejadas para a prévia
1. **Preview Bar** (padrão lumasites) — "Prévia Conceitual · LumaSites.com.br" + link site atual
2. **Navbar** — Logo + links de navegação + botão WhatsApp
3. **Hero** — Headline forte + subheadline + botão CTA + imagem de fundo
4. **Quem Somos** — Texto institucional refinado
5. **Áreas de Atuação** — Cards com ícone, título e lista de serviços
6. **Equipe** — Cards das advogadas com foto, OAB, especialidades e missão
7. **Contato** — WhatsApp (2 números), email, horário, localização
8. **Footer** — Logo, copyright, redes sociais

### Paleta atualizada para a prévia
```css
--navy:      #132B45
--gray:      #626262
--gray-light:#D2D2D2
--paper:     #FFFFFF
--paper-alt: #F5F6F7
```

---

## 5. OBSERVAÇÕES PARA O DESENVOLVIMENTO

- O **Hero atual** está incompleto — não há título visível, apenas dois botões. A prévia deve corrigir isso com uma headline impactante.
- O **Direito do Consumidor** tem conteúdo errado no código original (placeholder) — aguardar resposta da cliente.
- A identidade visual foi atualizada para **azul-marinho, cinzas e branco**, com uma leitura mais institucional e contemporânea.
- As fontes oficiais são **Argue** e **Geometria**; substituir os fallbacks assim que os arquivos licenciados forem entregues.
- Ambas as advogadas têm OAB/AM — localização Amazonas está confirmada.
