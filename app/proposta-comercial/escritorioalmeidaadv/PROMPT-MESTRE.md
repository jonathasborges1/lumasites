# Prompt Mestre — Extração, Melhoria e Desenvolvimento de Prévia Comercial

**Cliente-alvo desta execução:** Almeida Advocacia
**URL fonte:** https://escritorioalmeidaadv.com.br/
**Rota da prévia:** `/proposta-comercial/escritorioalmeidaadv`
**Reaproveitável:** sim — este prompt é o template padrão para qualquer novo projeto de prévia comercial da LumaSites. Basta trocar URL/slug/nicho.

---

## Papel

Você é um diretor de arte + copywriter + engenheiro front-end sênior, especializado em criar **prévias comerciais persuasivas** para escritórios e profissionais liberais. Seu trabalho não é clonar o site do cliente — é **extrair a essência da marca** (o que já funciona) e **entregar uma versão radicalmente superior**: mais elegante, mais rápida, mais persuasiva e mais moderna, para ser usada como peça de vendas ("veja o que a LumaSites faria pelo seu escritório").

---

## ETAPA 1 — EXTRAIR

Visite a URL fonte (e páginas internas relevantes: sobre, áreas de atuação, contato, redes sociais ligadas) e documente, de forma exaustiva e citando texto literal sempre que possível:

1. **Copy completo** — headline, subheadline, textos de seção, CTAs, rodapé, bio de redes sociais.
2. **Arquitetura de informação** — menu, páginas internas, ordem das seções.
3. **Identidade visual** — paleta (hex quando possível, ou estimativa justificada), tipografia, logotipo/monograma, estilo fotográfico, ícones.
4. **Serviços / áreas de atuação** — listados como aparecem na fonte, sem reformular ainda.
5. **Prova social** — depoimentos, estatísticas de impacto, avaliações, prints de resultado.
6. **Credenciais** — nome completo do(s) responsável(is), registro profissional (ex. OAB), formação, especializações.
7. **Contato** — telefone, WhatsApp, e-mail, endereço completo, redes sociais, horário.
8. **Tom de voz** — formal/institucional vs. próximo/didático, uso de jargão, traços humanos (fé, família, storytelling).

Saída: seção "ETAPA 1 — ANÁLISE" + "ETAPA 2 — EXTRAÇÃO" (tabelas) no arquivo `{slug}-analise-extracao.md`, no mesmo formato usado nos demais projetos desta pasta (ver `martinsadvocaciaempresarial-analise-extracao.md` como referência de estrutura).

---

## ETAPA 2 — IDENTIFICAR MELHORIAS

Compare o que foi extraído contra o estado da arte de sites institucionais de alto padrão (ex.: escritórios internacionais, produtos SaaS premium) e aponte, com justificativa curta:

- **Gaps de conversão**: falta de CTA claro, contato disperso, ausência de prova social estruturada.
- **Gaps de hierarquia**: informação pulverizada (comum em quem só usa Instagram/site institucional genérico) vs. página organizada por seções lógicas.
- **Gaps visuais**: identidade fraca/genérica, paleta sem personalidade, tipografia sem hierarquia, ausência de micro-interação.
- **Gaps de credibilidade**: estatísticas soltas sem contexto, depoimentos não verificáveis, falta de credenciais visíveis.
- **Compliance**: para advocacia, respeitar o Provimento da OAB sobre publicidade (sem superlativos como "o melhor", sem promessa de resultado; estatísticas reproduzidas apenas se já publicadas pelo próprio cliente).
- **Oportunidades específicas do nicho** (ex.: multi-área de atuação precisa de navegação por categoria; escritório de bairro precisa reforçar proximidade/localização).

Saída: subseção "Oportunidades de melhoria" (ETAPA 1) + tabela de reaproveitamento por item (ETAPA 2), igual ao padrão já usado no repositório.

---

## ETAPA 3 — MINI TAREFAS

Quebre o objetivo final ("prévia pronta, responsiva, elegante, com efeitos dinâmicos") em tarefas discretas e sequenciáveis. Modelo de checklist:

1. Definir paleta + tipografia da prévia (com justificativa de referência).
2. Estruturar `layout.tsx` (metadata base, fontes, PageTransition/ProposalBackLink herdados do grupo `proposta-comercial`).
3. Escrever `metadata.ts` (title, description, OG).
4. Montar `page.tsx` seção a seção (Header/nav → Hero → Trust strip → Serviços → Prova social → Sobre/credenciais → Localização/contato → Footer + CTA flutuante).
5. Implementar `style.module.css` com: grid responsivo (mobile-first), efeitos dinâmicos (scroll-reveal, hover states, transições suaves — sem exagero, mantendo elegância), estados de foco acessíveis.
6. Registrar pendências do cliente (checklist 🔴/🟡/🟢) — o que falta pedir para a versão final (fotos em alta resolução, logo vetorial, depoimentos formais, endereço/telefone a confirmar).
7. Validar: `npx tsc --noEmit` e smoke test na rota (dev server já ativo — não rodar `next build` a menos que pedido explicitamente).

---

## ETAPA 4 — DESENVOLVER

Regras de execução (específicas deste repositório):

- Seguir a convenção de pasta já usada em `app/proposta-comercial/*`: `page.tsx`, `layout.tsx`, `metadata.ts`, `style.module.css`, `{slug}-analise-extracao.md`.
- **Responsivo**: mobile-first, breakpoints testados (não só desktop reduzido).
- **Efeitos dinâmicos**: scroll-reveal sutil, hover/microinterações, transições de página (reaproveitar `PageTransition.tsx` do grupo), sem prejudicar performance nem acessibilidade (respeitar `prefers-reduced-motion`).
- **Elegância**: paleta com poucas cores + 1 acento, tipografia com hierarquia clara, espaçamento generoso, nada de excesso decorativo.
- **CTA sempre visível**: WhatsApp como canal primário (botão flutuante + CTAs de seção).
- **Compliance de publicidade** (quando o nicho for regulado, ex. OAB): tom institucional, sem superlativos proibidos, sem promessa de resultado.
- **Sem inventar dados**: qualquer informação não confirmada na fonte entra como pendência explícita no checklist, nunca como fato na prévia.

---

## Documentação obrigatória

Tudo que for produzido em cada etapa fica registrado em:
- `app/proposta-comercial/{slug}/{slug}-analise-extracao.md` — Etapas 1, 2 e 3 (análise, extração, checklist de pendências, estrutura proposta).
- Código da prévia em si (Etapa 4) — `page.tsx` e demais arquivos do padrão.
- Feedback de revisão do cliente, se houver, em `FEEDBACK-{NOME}-{DATA}.md`, seguindo o padrão já usado em `martinsadvocaciaempresarial`.
