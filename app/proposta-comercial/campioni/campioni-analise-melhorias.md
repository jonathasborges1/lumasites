# Campioni Advogados — Análise do site original e melhorias aplicadas na prévia

**Fonte:** https://www.campioniadvogados.com/ (Wix)
**Prévia:** `/proposta-comercial/campioni`
**Data:** 2026-07-13

## O que o site original tem de bom (e foi preservado)

- **Nicho ultra-específico**: advocacia trabalhista para profissionais da saúde CLT — posicionamento raro e forte. Mantido como eixo central da prévia.
- **Identidade visual**: selo circular preto/prata com balança ("Desde 2007 — Direito Trabalhista e Previdenciário"). Reaproveitado no header, seção "Quem somos" e footer; a paleta preto/grafite/prata da prévia deriva diretamente do selo.
- **Imagens**: fotos originais do site reaproveitadas e otimizadas (médico em plantão noturno, equipe de saúde, reunião jurídica, assinatura de contrato) — convertidas para WebP em `public/images/campioni/`.
- **Conteúdo dos serviços**: as 7 áreas de atuação do original foram mantidas, incluindo o diferencial de saúde indígena (destacado com card em evidência).
- **Verde do CTA**: o verde rgb(63,118,82) presente no original foi mantido como cor de destaque do card de saúde indígena e dos checks.

## Pontos de melhoria identificados e aplicados

### Conversão
1. **WhatsApp direto em vez de redirect** — o original usa uma página `/redirect-whatsapp`; a prévia usa deep-link `wa.me` com mensagem pré-preenchida (menos um clique, menos abandono).
2. **CTA acima da dobra em todos os breakpoints** — botão WhatsApp + botão secundário "Ver áreas de atuação" logo no hero.
3. **Botão WhatsApp flutuante** persistente em toda a página.
4. **Formulário sem backend que converte** — o form do original (nome + WhatsApp) depende de captura passiva; na prévia, o form monta a mensagem e abre o WhatsApp do escritório na hora (lead quente, zero fricção, zero custo de infraestrutura).
5. **CTA contextual em cada card de serviço** ("Analisar meu caso") — o visitante converte no momento em que se reconhece no problema.
6. **Urgência ética** — aviso do prazo prescricional (5 anos / 2 anos após a saída), que é informação verdadeira e motiva ação imediata.

### Copy e persuasão
7. **Headline emocional com identificação** — "Você cuida de vidas nos plantões. Nós cuidamos dos seus direitos." em vez do genérico título institucional.
8. **Nova seção "Para quem é"** — médicos, enfermeiros, técnicos, agentes comunitários, saúde indígena: o visitante se reconhece em 3 segundos.
9. **Nova seção educativa "Seus direitos"** — lista dos erros de pagamento mais comuns (insalubridade em grau menor, 12x36 sem reflexos, adicional noturno sem prorrogação etc.), transformando dor difusa em problema nomeado.
10. **Nova seção "Como funciona"** (4 passos) — reduz a ansiedade de quem nunca contratou advogado.
11. **FAQ com 7 perguntas reais do nicho** — inclui objeções centrais: "posso processar ainda empregado?", "quanto custa?", "qual o prazo?".
12. **Prova de autoridade honesta** — "Desde 2007" (extraído do selo oficial) usado como âncora de confiança; nenhum número, depoimento ou nome de advogado foi inventado.

### Técnica e SEO
13. **Performance** — página estática Next.js com imagens WebP otimizadas, sem o peso do Wix (o original carrega ~770 KB só de HTML).
14. **SEO estruturado** — schema.org `LegalService` + `FAQPage` (elegível a rich results), metadados Open Graph/Twitter, headings semânticos.
15. **Acessibilidade** — skip link, navegação por teclado, `aria-expanded` no FAQ e menu, contraste AA, `prefers-reduced-motion`.
16. **Mobile-first real** — menu hambúrguer, CTAs em largura total, grids fluidos (1 → 2 → 3/4 colunas), alvos de toque ≥ 44px.

### Conformidade
17. **Disclaimer alinhado ao Código de Ética da OAB** no footer (caráter informativo, sem promessa de resultado, sem linguagem mercantilista agressiva).

## Contatos usados (extraídos do site original)

- WhatsApp: +55 11 91619-2852 (obtido do redirect oficial)
- Endereço: R. Gustavo de Godoi, 13 — Penha de França, São Paulo/SP, CEP 03630-020
- Atendimento: 100% online (WhatsApp e videochamada)
