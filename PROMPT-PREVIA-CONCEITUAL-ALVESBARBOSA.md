# Prompt Otimizado — Prévia Conceitual: Alves Barbosa Advogados

Prompt pronto para uso na criação da prévia conceitual do escritório **Alves Barbosa Advogados**, seguindo o padrão das prévias anteriores do projeto LumaSites.

---

## Prompt

```text
Nova prévia conceitual para Alves Barbosa Advogados.
Fonte oficial: http://alvesbarbosa.adv.br/

1. EXTRAÇÃO — acesse a fonte oficial e capture:
   - Textuais: nome/razão social, áreas de atuação, descrição do escritório,
     equipe/sócios (com OAB, se houver), diferenciais, depoimentos, telefone,
     WhatsApp, e-mail, endereço, horários e redes sociais.
   - Visuais: logo, paleta de cores, tipografia e estilo geral; baixe logo e
     imagens aproveitáveis para public/images/alvesbarbosa/.
   - Regra: use somente dados reais encontrados na fonte. Se algo não existir
     (ex.: WhatsApp, OAB), use placeholder claramente marcado — nunca invente.

2. PROPOSTA — não replique o site atual; crie uma versão conceitual melhorada
   (design moderno, copy persuasiva, CTAs para WhatsApp), preservando a
   identidade visual e os dados reais extraídos. Registre as melhorias em
   alvesbarbosa-analise-melhorias.md (comparativo: site atual vs. proposta).

3. PADRÃO — siga a estrutura das prévias anteriores em app/proposta-comercial/
   (referências do mesmo nicho: campioni e antonioaguiar):
   - Pasta app/proposta-comercial/alvesbarbosa/ com page.tsx, layout.tsx
     (metadata, canonical, OG image) e metadata.ts.
   - Registrar a prévia na listagem de propostas.

4. VALIDAÇÃO — não rode next build; valide com tsc e dev server, e confirme a
   rota /proposta-comercial/alvesbarbosa renderizando sem erros.
```

---

## O que mudou em relação ao prompt original

| Antes | Depois | Por quê |
|---|---|---|
| "extrair tudo que a fonte possui" | Lista concreta de itens textuais e visuais | "Tudo" deixa o modelo decidir o que importa; enumerar (OAB, WhatsApp, endereço, depoimentos...) garante que nada essencial fique de fora e que as imagens vão para `public/images/<slug>/`. |
| — (ausente) | Regra anti-invenção com placeholders | O maior risco nesse tipo de tarefa é o modelo inventar telefone, OAB ou depoimento. Placeholder explícito elimina isso. |
| "desenvolver uma nova proposta" | Redesign conceitual definido (não cópia) | Deixa claro que é uma versão melhorada preservando identidade e dados reais, com o `.md` de análise que as prévias já incluem. |
| "seguir o padrao das previas anteriores" | Estrutura nomeada: pasta, arquivos e referências do nicho | Qualquer sessão nova reproduz o padrão (`page.tsx`, `layout.tsx`, `metadata.ts`, `<slug>-analise-melhorias.md`) sem precisar redescobri-lo. `campioni` e `antonioaguiar` são referências do mesmo nicho (advocacia). |
| — (ausente) | Etapa de validação: `tsc` + dev server | Conforme preferência do projeto: não rodar `next build` sem pedido explícito. |

---

## Template reutilizável (para futuras prévias)

Substitua `{CLIENTE}`, `{URL}`, `{SLUG}` e `{REFERENCIAS}`:

```text
Nova prévia conceitual para {CLIENTE}.
Fonte oficial: {URL}

1. EXTRAÇÃO — acesse a fonte oficial e capture:
   - Textuais: nome/razão social, serviços/áreas de atuação, descrição,
     equipe, diferenciais, depoimentos, telefone, WhatsApp, e-mail,
     endereço, horários e redes sociais.
   - Visuais: logo, paleta de cores, tipografia e estilo geral; baixe logo e
     imagens aproveitáveis para public/images/{SLUG}/.
   - Regra: use somente dados reais encontrados na fonte. Se algo não
     existir, use placeholder claramente marcado — nunca invente.

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

## Observação

O site fonte usa `http://` (sem SSL). Se o fetch falhar, tentar `https://alvesbarbosa.adv.br/` ou o cache do Google como fallback.
