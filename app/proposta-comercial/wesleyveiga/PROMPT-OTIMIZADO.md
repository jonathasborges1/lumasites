# Prompt otimizado — Prévia conceitual Wesley Veiga (Advocacia)

> Versão otimizada de `PROMPT-TEMPLATE-V0.txt`, adaptada para o cliente Wesley Veiga.

## Prompt final

```
Cliente: Wesley Veiga (advogado — direito bancário, agrário e assessoria empresarial)
Fonte de verdade: https://wesleyveiga.adv.br/
Destino: app/proposta-comercial/wesleyveiga/

Execute em duas fases.

FASE 1 — Análise e extração
1. Acesse a fonte e extraia literalmente: headline/hero, biografia do
   advogado, áreas de atuação, diferenciais, depoimentos, dados de contato
   (WhatsApp, endereço, redes sociais), CTAs, paleta de cores e estilo
   fotográfico/visual usado.
2. Identifique o que já funciona na fonte (não descarte o que é bom) e o que
   pode ser elevado: hierarquia de informação, clareza da promessa,
   navegação, prova social, estrutura de conversão.
3. Pesquise 2-3 referências externas atuais (tendências de sites de
   advocacia/agronegócio premium em 2026) para embasar decisões de design e
   copy — cite as referências usadas.
4. Não invente dados de contato, números, depoimentos ou credenciais que não
   estejam na fonte. Marque como pendência qualquer informação que precise
   de confirmação do cliente.

FASE 2 — Direção conceitual (saída em .md)
Gere um arquivo `wesleyveiga-previa-conceitual.md` com:
1. Leitura estratégica (o que a fonte comunica e a oportunidade de
   posicionamento).
2. Tabela de dados extraídos e confirmados.
3. Oportunidade de valor: o que já existe de bom / o que a prévia eleva /
   tese da proposta.
4. Conceito criativo: nome do conceito, ideia central, frase guia,
   tonalidade.
5. Direção visual: paleta (com hex sugerido), estilo fotográfico,
   tipografia, padrões de UI.
6. Estrutura de seções da prévia (hero, sobre, áreas de atuação, prova
   social, como funciona, FAQ, CTA final) com copy sugerida para cada uma.
7. Padrão obrigatório de header e footer da prévia:
   - Barra fixa superior "Prévia Conceitual" (estilo `ProposalBanner`
     usado nas prévias anteriores, ex.: markha), identificando que é uma
     proposta de redesign da LumaSites.com.br.
   - Header de navegação sticky abaixo da barra, com logo/nome, âncoras
     das seções e CTA de WhatsApp.
   - Footer com colunas de links (áreas de atuação, escritório, contato),
     redes sociais e barra inferior com aviso "Proposta conceitual
     elaborada por LumaSites.com.br".
8. Diferenciais a destacar.
9. Pendências que dependem de validação do cliente (fotos em alta
   resolução, autorização de depoimentos, dados de contato oficiais etc.).
10. Recomendação de direção de design (1-2 caminhos possíveis + qual
    recomendo e por quê).

Ao final, pergunte se aprovo a direção conceitual para seguir com a
implementação em Next.js (page.tsx).
```

## O que mudou em relação ao prompt original

- Adicionou **fonte única de verdade explícita** e **proibição de invenção
  de dados** (contato, depoimentos, credenciais) — a fonte só pode ser
  extraída ou marcada como pendência, nunca inferida.
- Trocou "análise inicial" genérica por uma **lista concreta de campos a
  extrair** (hero, bio, áreas de atuação, contato, paleta, estilo visual),
  o que reduz ambiguidade e retrabalho.
- Formalizou o **padrão de header/footer** em vez de deixar implícito
  "seguir prévias anteriores" — descreve explicitamente `ProposalBanner`,
  header sticky com CTA de WhatsApp e footer com colunas + aviso de autoria,
  que é o padrão real usado em `markha`, `luminavita` e demais prévias.
- Especificou o **caminho de destino** (`app/proposta-comercial/wesleyveiga/`)
  e o **nome do arquivo de saída**, alinhado à convenção já usada no
  projeto (`<cliente>-previa-conceitual.md`).
- Adicionou passo de **referências externas com citação obrigatória**, para
  que a agregação de valor seja rastreável e não apenas uma alegação.
- Separou o prompt em **duas fases nomeadas** (Análise → Direção
  conceitual), o que facilita revisar/aprovar a análise antes de avançar
  para copy e design, e deixa claro que a saída final é o `.md`.
- Manteve o pedido de aprovação ao final, mas amarrado ao entregável certo
  (a direção conceitual, não a implementação em si).
