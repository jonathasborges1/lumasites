# Prompt Otimizado — Prévia Conceitual: Peres Designs

Prompt pronto para uso na criação da prévia conceitual do estúdio **Peres Designs**, seguindo o padrão das prévias anteriores do projeto LumaSites, com uma etapa extra de benchmark competitivo (necessária aqui porque o pedido é elevar o patamar de UI/UX ao estado da arte do nicho, não apenas modernizar).

---

## Prompt

```text
Nova prévia conceitual para Peres Designs (design/arquitetura/interiores —
confirmar nicho exato ao acessar o site).
Fonte oficial: https://peresdesigns.com.br/

0. PRÉ-REQUISITO — se a fonte oficial não estiver acessível, tente variações
   (https/http, com/sem www) e o cache do Google. Se ainda assim não abrir,
   PARE e me avise antes de desenvolver qualquer coisa — não prossiga sem
   dados reais da fonte.

1. AUDITORIA — acesse a fonte oficial e mapeie todas as páginas/seções
   navegáveis. Documente e registre em peresdesigns-auditoria.md:
   - Textuais: nome/razão social, serviços, descrição do negócio, equipe,
     diferenciais, depoimentos, telefone, WhatsApp, e-mail, endereço,
     horários e redes sociais.
   - Visuais: logo, paleta de cores exata, tipografia (famílias/pesos/
     hierarquia), grid e espaçamentos, estilo de imagens/ilustrações;
     baixe logo e imagens aproveitáveis para public/images/peresdesigns/.
   - Estrutura de cada página (hero, cards, footer, navegação, CTAs,
     microinterações) e como o site foi provavelmente construído (stack
     aparente via inspeção de código-fonte).
   - Liste problemas concretos de UI/UX (não genéricos): ex. contraste
     insuficiente, hierarquia visual fraca, CTA pouco visível, grid quebrado
     no mobile, inconsistência tipográfica etc.
   - Regra: use somente dados reais encontrados na fonte. Se algo não
     existir, use placeholder claramente marcado — nunca invente dados de
     contato, diferenciais ou depoimentos.

2. BENCHMARK — pesquise 5-8 referências de estúdios de design/arquitetura/
   interiores reconhecidos por excelência em UI/UX (priorizar cases
   premiados em Awwwards, CSS Design Awards, FWA do mesmo segmento).
   Extraia padrões recorrentes de: composição de hero, tipografia
   editorial, paleta minimalista, apresentação de portfólio/cases,
   microinterações e navegação. Consolide em peresdesigns-benchmark.md
   os 6-10 princípios que a Peres Designs não aplica hoje, conectados aos
   problemas listados na Fase 1.

3. PROPOSTA — não replique o site atual; crie uma versão conceitual
   elevada ao estado da arte identificado no benchmark (hierarquia visual
   clara, tipografia com personalidade, whitespace, microinterações
   sutis), preservando a identidade visual e os dados reais extraídos.
   Registre as melhorias em peresdesigns-analise-melhorias.md
   (comparativo: site atual vs. proposta, referenciando os achados das
   Fases 1 e 2).

4. PADRÃO — siga a estrutura das prévias anteriores em app/proposta-comercial/
   (localizar as referências mais próximas do nicho — design/arquitetura/
   interiores — entre as pastas existentes; se nenhuma for próxima o
   suficiente, usar as referências de maior qualidade visual do diretório):
   - Pasta app/proposta-comercial/peresdesigns/ com page.tsx, layout.tsx
     (metadata, canonical, OG image) e metadata.ts.
   - Registrar a prévia na listagem de propostas.

5. VALIDAÇÃO — não rode next build; valide com tsc e dev server, e confirme
   a rota /proposta-comercial/peresdesigns renderizando sem erros. Teste
   responsividade (mobile/tablet/desktop) e contraste mínimo AA.

IMPORTANTE: pare após concluir as Fases 1 e 2 (peresdesigns-auditoria.md e
peresdesigns-benchmark.md) e aguarde minha aprovação antes de iniciar a
Fase 3 (implementação da prévia).
```

---

## O que mudou em relação ao prompt original

| Antes | Depois | Por quê |
|---|---|---|
| "extrair todo conteúdo visual e textual" | Lista concreta de itens + `.md` de auditoria dedicado | Enumerar (paleta exata, tipografia, grid, problemas de UI/UX) garante achados auditáveis em vez de impressão genérica. |
| "investigar sites concorrentes" | Etapa de benchmark com critério de seleção (Awwwards/CSS Design Awards do nicho) e `.md` próprio | Sem esse filtro o modelo tende a comparar com concorrentes locais medianos, não com o estado da arte pedido. |
| "como deixar mais bonito e elegante" | Critérios objetivos: hierarquia, tipografia, whitespace, microinterações — conectados aos problemas da auditoria | "Bonito e elegante" é subjetivo; a conexão auditoria → benchmark → proposta torna cada decisão de design rastreável. |
| "iniciar o desenvolvimento" direto | Checkpoint obrigatório de aprovação entre Fase 2 e Fase 3 | Evita que a implementação comece antes de você validar o diagnóstico e as referências escolhidas. |
| — (ausente) | Regra anti-invenção com placeholders | Maior risco nesse tipo de tarefa é o modelo inventar contato, diferencial ou depoimento. |
| — (ausente) | Etapa de validação: `tsc` + dev server, responsividade e contraste AA | Conforme preferência já registrada do projeto: não rodar `next build` sem pedido explícito. |

---

## Checklist antes de enviar

- [x] Cliente: Peres Designs
- [x] URL: https://peresdesigns.com.br/ (acessível)
- [x] Slug: `peresdesigns`
- [ ] Nicho: confirmar ao acessar o site (assumido design/arquitetura/interiores)
- [ ] Referências do nicho: nenhuma pasta óbvia identificada em app/proposta-comercial/ — o próprio desenvolvimento deve localizar a mais próxima
