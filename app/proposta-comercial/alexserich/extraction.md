# Alex Serich — Extração de Design System & Conteúdo
**Fonte principal:** https://alexserich.com.br/  
**Referência secundária:** https://www.instagram.com/alex_sserich  
**Data de extração:** 2026-05-27  
**Rota destino:** lumasites.com.br/proposta-comercial/alexserich

---

## 1. IDENTIDADE DE MARCA

| Campo | Valor |
|---|---|
| Nome | Alex Serich |
| Marca registrada | Método Núcleo® |
| Nicho | Personal Trainer · Consultoria Fitness Premium |
| Posicionamento | "Não sou influencer. Sou profissional com resultados reais." |
| Instagram | @alex_sserich |
| Símbolo Instagram | ⚜️ Consultoria Premium ⚜️ |
| CTA principal | https://form.respondi.app/9xY2CbDM |
| Localização | Academia A.R. Fit (sócio-proprietário) |
| Desenvolvedor atual | @ogustavo.correia (Instagram) |

---

## 2. COPY COMPLETO

### Hero
- **Headline:** "Destrave Seu Corpo em 8 Semanas com o Método Núcleo"
- **Subheadline:** "O sistema de 4 pilares que corrige compensações, elimina dores e entrega o físico que você sempre quis"
- **CTA:** "QUERO CONHECER O MÉTODO"

### Seção Problema
- **Título:** "Você treina, mas não vê Resultado?"
- **6 dores identificadas:**
  1. Treinos sem evolução visível
  2. Dores durante ou após exercícios
  3. Treinos genéricos que não respeitam seu corpo
  4. Execução incorreta dos movimentos
  5. Falta de definição muscular
  6. Desistência por falta de progresso

### Proposta de Valor
- "90% das pessoas que treinam fazem isso de forma completamente errada"
- "O problema não é você. É o método."
- Baseado em ciência e 10+ anos de experiência

### 4 Pilares do Método Núcleo®
1. **Avaliação Inteligente** — diagnóstico individualizado
2. **Correção & Consciência Corporal** — movimento eficiente e seguro
3. **Força Estruturada** — progressão técnica e muscular
4. **Estética, Performance e Longevidade** — resultado sustentável

### Benefícios em 8 semanas
- Corpo definido
- Treino sem dores
- Técnica impecável
- Evolução constante
- Consciência corporal
- Confiança

### Acompanhamento Oferecido
- Avaliação inicial
- Protocolo individualizado
- Feedback semanal
- Guia alimentar com nutricionista

### Sobre Alex Serich
- Formação: Educação Física (Anhanguera Unopar)
- Top 2 Sardinha Classic 2021
- Top 2 Muscle Contest Mercosul 2023
- Sócio-proprietário Academia A.R. Fit
- "Não sou influencer. Sou profissional com resultados reais."

### FAQ
| Pergunta | Resposta |
|---|---|
| Em quanto tempo começo a ver resultados? | Variável conforme dedicação; muitos percebem avanços nas primeiras etapas |
| Funciona para quem está começando do zero? | Sim, estruturado para iniciantes de forma clara e aplicável |
| Vou ter suporte durante o processo? | Sim, com acompanhamento contínuo para ajustes e orientação |

### CTAs presentes na página
- "QUERO CONHECER O MÉTODO" → https://form.respondi.app/9xY2CbDM (aparece 3x)
- "QUERO FALAR COM ALEX" → https://form.respondi.app/9xY2CbDM

---

## 3. DESIGN SYSTEM

### Paleta de Cores (inferida)
| Token | Descrição | Valor Estimado |
|---|---|---|
| `--color-bg` | Fundo principal | `#0A0A0A` (preto profundo) |
| `--color-surface` | Superfícies/cards | `#111111` |
| `--color-text-primary` | Texto principal | `#FFFFFF` |
| `--color-text-muted` | Texto secundário | `#A0A0A0` |
| `--color-accent` | Destaque/CTA | A confirmar (possivelmente dourado ou vermelho quente) |
| `--color-border` | Divisórias | `rgba(255,255,255,0.08)` |

> ⚠️ Cores exatas de CTA e accent precisam ser confirmadas via DevTools na URL original.  
> O símbolo ⚜️ no Instagram sugere identidade **dourada/premium**.

### Tipografia (inferida)
| Uso | Família | Estilo | Peso |
|---|---|---|---|
| Títulos hero | Sans-serif moderna | UPPERCASE | 700–900 |
| Subtítulos | Sans-serif | Normal | 400–500 |
| Corpo | Sans-serif | Normal | 300–400 |
| CTAs | Sans-serif | UPPERCASE, letter-spacing | 600–700 |

> ⚠️ Fontes específicas (Google Fonts ou custom) a confirmar via DevTools.

### Personalidade Visual
- **Estilo:** Dark premium · Bold · Authoritative
- **Mood:** Força, disciplina, resultados concretos — anti-fluff
- **Referência estética:** Entre Nike Training e consultoria de alto desempenho
- **Não é:** Colorido, lúdico ou clínico
- **É:** Sombrio, contrastado, confiante, minimalista-bold

### Elementos de UI
- Botões: uppercase, provavelmente sem border-radius excessivo (estilo reto ou levemente arredondado)
- Separadores: linhas horizontais finas
- Espaçamento: generoso, muita respiração entre seções
- Imagens: fotos reais em alta qualidade (sem ilustrações)

---

## 4. ASSETS — URLs PARA DOWNLOAD

### Imagens do Site
| Nome sugerido | URL completa |
|---|---|
| Logo/Vector | https://alexserich.com.br/wp-content/uploads/2026/03/Vector.png |
| Foto principal Alex | https://alexserich.com.br/wp-content/uploads/2026/03/ALEX.webp |
| Transformação 01 | https://alexserich.com.br/wp-content/uploads/2026/03/01.webp |
| Transformação 02 | https://alexserich.com.br/wp-content/uploads/2026/03/02.webp |
| Transformação 04 | https://alexserich.com.br/wp-content/uploads/2026/03/04-1.webp |
| Transformação 05 | https://alexserich.com.br/wp-content/uploads/2026/03/05.webp |
| Depoimentos | https://alexserich.com.br/wp-content/uploads/2026/03/DEP.webp |

> ⚠️ Verificar se há imagens adicionais inspecionando o HTML completo via DevTools (seções de transformação podem ter mais que 5 imagens).

---

## 5. ESTRUTURA DE SEÇÕES DA PÁGINA ORIGINAL

```
1. Hero          — Headline + foto Alex + CTA principal
2. Ticker        — Carousel repetindo "MÉTODO NÚCLEO" (elemento de marca)
3. Problema      — "Você treina mas não vê resultado?" — 6 dores
4. Solução       — "O problema não é você. É o método." + proposta de valor
5. Credibilidade — Foto Alex + copy de autoridade
6. 4 Pilares     — Cards dos pilares do Método Núcleo®
7. Benefícios    — O que acontece em 8 semanas
8. Acompanhamento— Como funciona (4 etapas)
9. Transformações— Galeria de antes/depois
10. Sobre Alex   — Bio + conquistas
11. FAQ          — 3 perguntas frequentes
12. Footer       — Copyright + crédito desenvolvedor
```

---

## 6. NOTAS PARA A PROPOSTA LUMASITES

### Conceito de Layout Diferenciado
As propostas anteriores utilizam estruturas como:
- Cards em grid (karenmoraes, markha)
- Scroll vertical com seções alternadas (andrelopes, charlenedamasceno)
- Fundo escuro com gradiente lateral (marianamonteiro)

**Para Alex Serich, proposta de abordagem:**
- Layout inspirado em **revistas de performance/esporte** — uso de tipografia grande e impactante (editorial style)
- **Divisão de tela** — hero com split layout (texto esquerda | imagem direita com overlap)
- **Efeito de profundidade** — parallax sutil em camadas de texto
- **Grid assimétrico** — quebra os padrões de centralização usados nas outras propostas
- **Tipografia como elemento gráfico** — números grandes (8 semanas, 4 pilares, 10+ anos) como decoração tipográfica
- **Barra lateral de navegação** — menu lateral fixo minimalista (diferente do scroll linear atual)
- **Micro-animações de entrada** — elementos que revelam conforme o scroll (diferente dos outros)

### Tokens de Design Propostos
```css
--as-black: #080808;
--as-white: #F5F5F5;
--as-gold: #C9A84C;      /* dourado premium — referência ao ⚜️ do Instagram */
--as-gray-dark: #1A1A1A;
--as-gray-mid: #2E2E2E;
--as-gray-light: #888888;
--as-accent: #C9A84C;
--as-font-display: 'Bebas Neue' ou 'Anton' (títulos impactantes);
--as-font-body: 'Inter' ou 'DM Sans' (leitura limpa);
```

### Categoria e Metadados
```ts
clientName: "Alex Serich Personal"
tagline: "Método Núcleo® · Consultoria Fitness Premium"
category: "Fitness"
categoryColor: "#C9A84C"  // dourado
highlight: "Top 2 Muscle Contest · Método Núcleo® · A.R. Fit"
location: "Manaus - AM" // a confirmar
accentColor: "#080808"
```

---

## 7. ITENS A CONFIRMAR / PRÓXIMOS PASSOS

- [ ] Confirmar paleta exata de cores via DevTools na URL original
- [ ] Confirmar família tipográfica exata (inspecionar `font-family` no CSS)
- [ ] Confirmar cor exata dos botões CTA
- [ ] Baixar todos os assets listados na seção 4
- [ ] Verificar se há mais imagens de transformação não capturadas
- [ ] Confirmar localização de Alex Serich (Manaus-AM?)
- [ ] Verificar se há vídeo ou animações na página original
- [ ] Coletar prints do Instagram @alex_sserich para referência visual adicional
- [ ] Definir se a proposta incluirá precificação de pacotes Lumasites
