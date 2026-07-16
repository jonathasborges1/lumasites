# Prompt Genérico — Nova Prévia Conceitual (Template)

Template padrão para solicitar uma nova prévia conceitual no projeto LumaSites.

## Como usar

1. Preencha os campos obrigatórios abaixo **antes** de enviar o prompt:
   - `{CLIENTE}` — nome do cliente/negócio (ex.: `Alves Barbosa Advogados`)
   - `{URL}` — fonte oficial (site, Instagram ou Google Meu Negócio)
   - `{SLUG}` — identificador da pasta/rota, minúsculo e sem espaços (ex.: `alvesbarbosa`)
   - `{NICHO}` — segmento do negócio (ex.: `advocacia`, `restaurante`, `autoescola`)
2. `{REFERENCIAS}` é opcional: prévias existentes do mesmo nicho em
   `app/proposta-comercial/` (ex.: `campioni`, `antonioaguiar` para advocacia).
   Se não souber, remova o trecho — o desenvolvimento deve localizar as
   referências mais próximas do nicho por conta própria.
3. Copie o prompt preenchido e envie para iniciar o desenvolvimento.

> **Importante:** o desenvolvimento NÃO deve iniciar sem a fonte oficial
> (`{URL}`) definida. Sem fonte, não há dados reais para extração.

---

## Prompt

```text
Nova prévia conceitual para {CLIENTE} ({NICHO}).
Fonte oficial: {URL}

0. PRÉ-REQUISITO — se a fonte oficial não estiver acessível, tente variações
   (https/http, com/sem www) e o cache do Google. Se ainda assim não abrir,
   PARE e me avise antes de desenvolver qualquer coisa — não prossiga sem
   dados reais da fonte.

1. EXTRAÇÃO — acesse a fonte oficial e capture:
   - Textuais: nome/razão social, serviços/áreas de atuação, descrição do
     negócio, equipe, registros profissionais (OAB, CRM, CRECI etc., se
     houver), diferenciais, depoimentos, telefone, WhatsApp, e-mail,
     endereço, horários e redes sociais.
   - Visuais: logo, paleta de cores, tipografia e estilo geral; baixe logo e
     imagens aproveitáveis para public/images/{SLUG}/.
   - Regra: use somente dados reais encontrados na fonte. Se algo não
     existir, use placeholder claramente marcado — nunca invente dados de
     contato, registros profissionais ou depoimentos.

2. PROPOSTA — não replique o site atual; crie uma versão conceitual melhorada
   (design moderno, copy persuasiva, CTAs para WhatsApp), preservando a
   identidade visual e os dados reais extraídos. Registre as melhorias em
   {SLUG}-analise-melhorias.md (comparativo: site atual vs. proposta).

3. PADRÃO — siga a estrutura das prévias anteriores em app/proposta-comercial/
   (referências do mesmo nicho: {REFERENCIAS}):
   - Pasta app/proposta-comercial/{SLUG}/ com page.tsx, layout.tsx
     (metadata, canonical, OG image) e metadata.ts.
   - Registrar a prévia na listagem de propostas.

4. VALIDAÇÃO — não rode next build; valide com tsc e dev server, e confirme a
   rota /proposta-comercial/{SLUG} renderizando sem erros.
```

---

## Checklist antes de enviar

- [ ] `{CLIENTE}` preenchido
- [ ] `{URL}` preenchida e acessível (abrir no navegador para confirmar)
- [ ] `{SLUG}` definido (minúsculo, sem espaços ou acentos)
- [ ] `{NICHO}` preenchido
- [ ] `{REFERENCIAS}` preenchidas ou trecho removido

## Exemplo preenchido

Ver [PROMPT-PREVIA-CONCEITUAL-ALVESBARBOSA.md](PROMPT-PREVIA-CONCEITUAL-ALVESBARBOSA.md).
