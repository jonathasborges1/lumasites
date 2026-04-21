---
name: Luma Design System
description: Design system extraído do projeto Behance "Luma — Song of the Fireflies" (platformer game), base visual do site v5
version: 1.0
source: base/imagens (23 imagens)
---

# Design System — Luma: Song of the Fireflies

Platformer 2D mágico/etéreo, estética "dark fantasy bioluminescente" inspirada em *Ori and the Blind Forest* e *Hollow Knight*. Clima místico, sereno e melancólico, com forte contraste entre escuridão e luz neon.

---

## 1. Conceito Visual

| Atributo | Valor |
|---|---|
| Mood | Místico, etéreo, melancólico, mágico |
| Ambientação | Floresta encantada noturna, biomas bioluminescentes |
| Contraste | Fundos muito escuros vs. elementos neon brilhantes |
| Textura | Bordas rasgadas (torn paper), pinceladas, grão orgânico |
| Iluminação | Glow/halo em todos os elementos focais; partículas flutuantes |

---

## 2. Paleta de Cores

### Cores base (fundos)

| Token | Hex | Uso |
|---|---|---|
| `--bg-midnight` | `#0A0E1A` | Fundo principal (preto azulado profundo) |
| `--bg-deep-blue` | `#0D1628` | Fundo secundário de seções escuras |
| `--bg-cream` | `#F5EFE4` | Fundo claro contrastante (seções de "sketch") |
| `--surface-dark` | `#0F1A2E` | Cards e containers escuros |

### Cores de destaque (glow / neon)

| Token | Hex | Uso |
|---|---|---|
| `--glow-cyan` | `#4FC8FF` | Glow primário — títulos, UI ativa, seleção |
| `--glow-blue` | `#2E9BD6` | Variante média do cyan |
| `--glow-aqua` | `#7FE5FF` | Variante clara (highlights/brilho) |
| `--accent-amber` | `#FFB74D` | Lanternas, fogo quente, dano, alertas |
| `--accent-gold` | `#FFD54F` | Números de dano, itens valiosos |
| `--accent-magenta` | `#C26BFF` | Ataques mágicos, skill points, variante roxa |
| `--accent-green` | `#7DE68B` | Vida/natureza, bioluminescência das folhas |
| `--danger-red` | `#E53935` | Barras de HP de inimigos, dano crítico |

### Neutros de texto

| Token | Hex | Uso |
|---|---|---|
| `--text-primary` | `#EAF2FF` | Texto principal sobre fundo escuro |
| `--text-secondary` | `#B8C5D9` | Texto secundário / descrições |
| `--text-muted` | `#6C7A94` | Labels desabilitados / placeholders |

### Gradientes característicos

```css
--gradient-glow-cyan: radial-gradient(circle, #4FC8FF 0%, rgba(79,200,255,0) 70%);
--gradient-bg-scene: linear-gradient(180deg, #0A0E1A 0%, #0D2440 50%, #0A1628 100%);
--gradient-hero-light: radial-gradient(ellipse at center, #4FC8FF 0%, #1A3A5C 40%, #0A0E1A 100%);
```

---

## 3. Tipografia

Estética **handwritten / caligráfica** com small caps, lembrando manuscritos élficos e RPGs clássicos.

### Famílias recomendadas

| Papel | Fonte (ou similar) | Fallback |
|---|---|---|
| Display / Títulos | **Kingthings Calligraphica** / *Mason Serif* / *IM FELL English SC* | serif |
| Subtítulos | **Cinzel** ou **Trajan Pro** (small caps) | serif |
| Corpo | **Cormorant SC** / **IM Fell English SC** (small caps) | serif |
| UI / Numerais | **Cinzel Decorative** ou mesmo display em peso menor | serif |

### Escala tipográfica

| Token | Tamanho | Uso |
|---|---|---|
| `--fs-display` | `72–96px` | Hero "LUMA" |
| `--fs-h1` | `48–56px` | Títulos de seção ("ENEMIES AND CHARACTERS") |
| `--fs-h2` | `32–40px` | Subtítulos ("Interface Design", "Ability Tree") |
| `--fs-h3` | `22–26px` | Nome de personagem/card |
| `--fs-body` | `16–18px` | Corpo de texto |
| `--fs-caption` | `12–14px` | Legendas e labels de UI |

### Características

- **Small Caps** em títulos e corpo (CSS: `font-variant: small-caps`).
- **Primeira letra maiúscula levemente maior** (drop cap ou decorativa).
- **Tracking amplo** (`letter-spacing: 0.02–0.05em`) para sensação clássica.
- **Títulos com glow neon** via `text-shadow`:

```css
.title-glow {
  color: #F5EFE4;
  text-shadow:
    0 0 6px  #4FC8FF,
    0 0 14px #4FC8FF,
    0 0 28px rgba(79,200,255,0.5);
}
```

---

## 4. Componentes de UI

### 4.1 Botão de Tecla (keybind circular)

Círculo com borda neon e glow externo, tecla em texto no centro (ex.: `Q`, `E`, `ESC`, `F`).

```
┌─ Anatomia ─────────────────────────────┐
│  ⦿  glow externo (blur 12–20px cyan)   │
│  ○  ring 2px cyan #4FC8FF              │
│  ·  fundo #0A0E1A translúcido          │
│  T  letra small-caps branca            │
│     + label adjacente (BACK, LEARN...) │
└────────────────────────────────────────┘
```

```css
.key-btn {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: rgba(10,14,26,.6);
  border: 2px solid #4FC8FF;
  box-shadow: 0 0 12px #4FC8FF, inset 0 0 6px rgba(79,200,255,.4);
  color: #EAF2FF;
  font-variant: small-caps;
}
```

### 4.2 Card com borda rasgada (torn edge)

Usado em diálogos, tutoriais e cards de personagem. Bordas irregulares + glow sutil.

- Fundo: `#0A0E1A` com opacidade 85–95%.
- Borda: **máscara SVG com borda irregular** (não `border-radius` liso).
- Outer glow: `0 0 24px rgba(79,200,255,.35)`.
- Título no topo, divisor fino cyan, conteúdo abaixo.

### 4.3 Menu de abas (Settings)

- Abas horizontais centralizadas: `GAME · CONTROLS · GRAPHICS · AUDIO · CREDITS`.
- Aba ativa: texto cyan glow + **linha/sublinhado curto cyan**.
- Inativas: small-caps branco sem glow.
- Laterais: key-btns (`Q` à esquerda, `E` à direita) para navegar.

### 4.4 Linhas de opção

Cada linha do menu:

```
Label (direita)  ◄  valor central  ►
─────────────────────────────────────
```

- Separador: linha fina `rgba(255,255,255,.08)`.
- Setas `◄ ►` são glifos claros, clicáveis.
- Slider: trilha fina branca + thumb retangular pequena.

### 4.5 HUD de jogo

Elementos sempre translúcidos para não ocupar foco:

- **Top-esquerda**: portrait circular (Luma) + barra de HP branca + barra de XP/mana.
- **Top-direita**: ícones de moeda/recurso + contador (`◐ 12 · ◑ 7`).
- **Bottom-esquerda**: 3 skill slots circulares com tecla (`Q`, `Z`, `E`).
- **Bottom-direita**: ícone especial (`R`) + contador de uso.
- **Boss HP**: barra inferior centralizada com nome ("Nock'Tiris") e barra vermelha segmentada.
- **Números de dano flutuantes**: small-caps amarelo/branco com leve sombra.

### 4.6 Skill Tree

- Nós circulares conectados por linhas finas.
- Estado **bloqueado**: cinza opaco, ring fino.
- Estado **disponível**: ring claro, glow sutil.
- Estado **ativo**: glow cyan forte + ícone iluminado.
- Estado **especial (seleção)**: glow laranja/âmbar.
- Centro da árvore: esfera de luz pulsante com partículas.
- Abaixo: seletor de árvore (`FLOW · LIGHT · DREAM`).

### 4.7 Diálogo (textbox)

- Texto centralizado no bottom, sem card visível (ou card muito sutil).
- Palavras-chave em **cyan bright** (nome de personagem, alvos).
- Abaixo, key-btn `F` + "NEXT".

### 4.8 Separadores temáticos

Silhuetas de montanhas/árvores rasgadas separando blocos de conteúdo. Usar **SVG path irregular** como divisor entre seções de cor contrastante (creme ↔ midnight).

---

## 5. Iconografia

- **Forma**: circular, outlined, simbólica (runas, elementos, criaturas).
- **Estilo**: glifos brancos simplificados dentro de circle com glow.
- **Temas**: folha, chama, gota, relâmpago, sol, olho, estrela, mão.
- **Estados**: sempre comunicados via cor do ring (cinza→cyan→âmbar→magenta).

---

## 6. Efeitos & Animações

| Efeito | Aplicação |
|---|---|
| **Glow pulsante** | Orbes, botões ativos, esferas de luz (2–3s loop) |
| **Partículas flutuantes** | Vaga-lumes amarelos/cyan subindo lentamente no fundo |
| **Shimmer no glow** | Títulos display "respiram" (opacity 0.85 ↔ 1) |
| **Parallax** | Camadas de floresta/biomas com profundidade |
| **Fade + scale** | Entrada de cards e diálogos (0.95 → 1, 0 → 1 opacity) |
| **Trailing light** | Ataques e movimentos deixam rastro bright |

Timing: usar *easing orgânico* (`cubic-bezier(.22,.61,.36,1)`) — nada mecânico.

---

## 7. Layout & Grid

- **Max-width do conteúdo**: `1200–1400px`.
- **Seções full-bleed** com imagem/cena ocupando 100% da largura.
- **Separação entre blocos**: silhueta rasgada ou fade gradual (não linhas retas).
- **Centralização**: a maioria dos títulos e legendas é **center-aligned**.
- **Ritmo vertical**: blocos alternam fundo escuro ↔ creme para pausa visual.

---

## 8. Do / Don't

**Do**

- Usar glow cyan como fio condutor da identidade.
- Manter tipografia caligráfica em small-caps para clima de RPG.
- Preservar o contraste dramático claro/escuro.
- Colocar partículas e luz ambiente em cenas estáticas.
- Usar bordas irregulares (torn/brush) em vez de retângulos perfeitos.

**Don't**

- Não usar cores saturadas primárias puras (evitar `#FF0000`, `#0000FF` crus).
- Não usar fontes sans-serif neutras (Helvetica, Arial) — quebra o mood.
- Não usar cantos arredondados modernos (`border-radius: 8px`) em cards narrativos.
- Não usar sombras duras ou flat design — tudo tem luz e atmosfera.
- Não ocupar todo o espaço com UI — **a cena vem primeiro**.

---

## 9. Tokens CSS (snippet pronto)

```css
:root {
  /* cores */
  --bg-midnight: #0A0E1A;
  --bg-deep-blue: #0D1628;
  --bg-cream: #F5EFE4;
  --surface-dark: #0F1A2E;

  --glow-cyan: #4FC8FF;
  --glow-blue: #2E9BD6;
  --glow-aqua: #7FE5FF;
  --accent-amber: #FFB74D;
  --accent-gold: #FFD54F;
  --accent-magenta: #C26BFF;
  --accent-green: #7DE68B;
  --danger-red: #E53935;

  --text-primary: #EAF2FF;
  --text-secondary: #B8C5D9;
  --text-muted: #6C7A94;

  /* tipografia */
  --font-display: "Kingthings Calligraphica", "IM Fell English SC", serif;
  --font-body: "IM Fell English SC", "Cormorant SC", serif;

  /* efeitos */
  --glow-sm: 0 0 8px  var(--glow-cyan);
  --glow-md: 0 0 16px var(--glow-cyan);
  --glow-lg: 0 0 32px var(--glow-cyan), 0 0 64px rgba(79,200,255,.35);

  --ease-organic: cubic-bezier(.22,.61,.36,1);
}

body {
  background: var(--bg-midnight);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-variant: small-caps;
  letter-spacing: 0.03em;
}

h1, h2, .title {
  font-family: var(--font-display);
  color: var(--text-primary);
  text-shadow: var(--glow-md);
}
```

---

## 10. Referências

- Fonte original: Behance — *Luma: Platformer Game Design* (gallery 241562213).
- Inspiração estética: Ori and the Blind Forest, Hollow Knight, Gris.
- 23 imagens analisadas em `base/imagens/` (screenshots de gameplay, menus, sketches e arte conceitual).
