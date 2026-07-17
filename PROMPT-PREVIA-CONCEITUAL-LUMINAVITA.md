# Prompt Otimizado — Prévia Conceitual: Lumina Vita Finance

Prompt pronto para uso na criação da prévia conceitual da **Lumina Vita Finance**
("Mentoria Simples Assim"), seguindo o padrão das prévias anteriores do
projeto LumaSites. Estruturado em **duas fases** — análise e, só depois de
aprovação, implementação — conforme solicitado.

> **Observação sobre a fonte:** `luminavitafinance.manus.space` é uma SPA
> renderizada via JS (Manus Space). Fetch simples só retorna o `<title>`
> ("Mentoria Simples Assim | Lumina Vita Finance"). A extração real exige
> abrir a página em navegador/ferramenta com renderização JS — sinalizar
> isso logo na Fase 1 se o conteúdo não vier completo.

---

## Prompt

```text
Nova prévia conceitual para Lumina Vita Finance (mentoria/educação financeira).
Fonte oficial: https://luminavitafinance.manus.space

Trabalhe em DUAS FASES. Não inicie a Fase 2 sem minha aprovação explícita ao
final da Fase 1.

──────────────────────────────
FASE 1 — ANÁLISE (não implementar ainda)
──────────────────────────────

0. PRÉ-REQUISITO — a fonte é uma SPA renderizada via JS; um fetch simples
   pode retornar só o título. Use uma ferramenta com renderização JS
   (navegador/headless) para acessar o conteúdo real. Se, mesmo assim, o
   conteúdo vier incompleto, PARE e me avise antes de prosseguir — não
   invente dados para preencher lacunas.

1. EXTRAÇÃO — acesse a fonte oficial e capture:
   - Textuais: nome/marca, proposta de valor, oferta (mentoria/curso/
     consultoria), estrutura/módulos do programa, público-alvo, preço ou
     condições (se públicos), diferenciais, depoimentos, prova social
     (números, resultados, mídia em que apareceu), bio do mentor/equipe,
     CTAs usados, telefone, WhatsApp, e-mail, endereço e redes sociais.
   - Visuais: logo, paleta de cores, tipografia, estilo de imagens/ícones,
     estrutura de seções (hero, oferta, prova social, sobre, FAQ, CTA final);
     baixe logo e imagens aproveitáveis para public/images/luminavita/.
   - Regra: use somente dados reais encontrados na fonte. Se algo não
     existir (ex.: WhatsApp, preço, depoimentos), use placeholder
     claramente marcado — nunca invente.

2. DIAGNÓSTICO — avalie a fonte atual e identifique pontos de melhoria
   (clareza da oferta, hierarquia visual, prova social, CTAs, confiança/
   credibilidade — relevante em nicho financeiro, velocidade percebida,
   copy). Liste o que funciona e deve ser preservado vs. o que é fraco e
   deve ser repensado.

3. REFERÊNCIAS EXTERNAS — pesquise 2-3 referências de mercado (páginas de
   mentoria financeira, infoprodutos ou fintechs bem avaliadas) para embasar
   decisões de design e copy. Cite o que foi observado e por que se aplica
   aqui (ex.: padrões de prova social, uso de números/resultados, selos de
   confiança/segurança).

4. PROPOSTA — não replique o site atual; desenhe uma versão conceitual
   melhorada (hierarquia mais clara, copy mais persuasiva e orientada a
   confiança, prova social em destaque, CTAs para WhatsApp), preservando a
   identidade visual e os dados reais extraídos. Pense em diretivas
   adicionais pertinentes ao nicho financeiro, como:
   - Elementos de credibilidade/segurança (não fazer promessas de retorno
     garantido — linguagem em conformidade, já que é conteúdo financeiro).
   - Prova social quantificada (nº de alunos/mentorados, resultados, se
     existirem na fonte).
   - Estrutura de oferta clara (o que está incluso, para quem é/não é).
   - FAQ para objeções comuns de quem hesita em investir em mentoria.
   - CTA principal único e repetido (evitar poluição de múltiplos CTAs
     concorrentes).

5. ENTREGÁVEL DA FASE 1 — gere um único arquivo
   luminavita-analise-melhorias.md com:
   - Resumo da fonte (o que foi extraído).
   - Diagnóstico (pontos fortes/fracos).
   - Referências externas usadas e o insight de cada uma.
   - Proposta de melhorias (comparativo: site atual vs. proposta) com as
     diretivas específicas do nicho.
   - Estrutura de seções planejada para a prévia.

Ao final da Fase 1, pare e pergunte se aprovo a proposta antes de seguir
para a implementação.

──────────────────────────────
FASE 2 — IMPLEMENTAÇÃO (somente após aprovação)
──────────────────────────────

6. PADRÃO — siga a estrutura das prévias anteriores em app/proposta-comercial/
   (localize as referências mais próximas do nicho — mentoria/consultoria/
   infoproduto — por conta própria caso não haja nenhuma em finanças):
   - Pasta app/proposta-comercial/luminavita/ com page.tsx, layout.tsx
     (metadata, canonical, OG image) e metadata.ts.
   - Reutilizar o mesmo padrão de header e footer das prévias anteriores.
   - Registrar a prévia na listagem de propostas.

7. VALIDAÇÃO — não rode next build; valide com tsc e dev server, e confirme
   a rota /proposta-comercial/luminavita renderizando sem erros.
```

---

## O que mudou em relação ao pedido original

| Antes | Depois | Por quê |
|---|---|---|
| Uma lista de instruções soltas, sem ordem de execução | Duas fases explícitas (análise → aprovação → implementação) | Você pediu para ser consultado antes de implementar; sem fases isso vira uma instrução perdida no meio do prompt e o modelo tende a implementar direto. |
| "extraia recursos textuais e visuais" | Lista concreta por tipo de negócio (oferta, módulos, prova social, credibilidade) | O nicho é mentoria financeira, não um negócio local genérico — os itens relevantes (prova social, credenciais, estrutura de oferta) são diferentes de uma advocacia ou clínica. |
| "verifique o que pode ser melhorado" | Etapa de diagnóstico formal com entregável (`luminavita-analise-melhorias.md`) | Transforma uma instrução vaga em um artefato revisável antes de você aprovar. |
| "busque referências externas" | Pedido de 2-3 referências nomeadas com justificativa de uso | Sem escopo, "buscar referências" pode virar pesquisa infinita ou genérica; pedir 2-3 com insight aplicado mantém o foco. |
| "pense em mais diretivas" | Diretivas específicas do nicho financeiro sugeridas (compliance de linguagem, prova social quantificada, FAQ de objeção) | Nicho financeiro tem riscos específicos (promessa de retorno, credibilidade) que vale endereçar explicitamente em vez de deixar em aberto. |
| — (ausente) | Nota sobre a fonte ser SPA renderizada via JS | `manus.space` normalmente não expõe conteúdo em fetch simples; sinalizar isso evita que a Fase 1 comece com dados incompletos sem perceber. |
| — (ausente) | Reforço explícito do padrão de header/footer | Você mencionou isso mas sem apontar onde está definido; a instrução aponta para reuso direto das prévias existentes. |
| — (ausente) | Etapa de validação: tsc + dev server, sem next build | Preferência já registrada no projeto para prévias conceituais. |

---

Aprova esse prompt para eu seguir com a Fase 1 (análise, sem implementar nada ainda)?
