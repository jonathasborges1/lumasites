# Alves Barbosa Advogados — Análise do site original e melhorias aplicadas na prévia

**Fontes:** https://alvesbarbosa.adv.br/ · https://alvesbarbosa.adv.br/pessoafisica/ · https://alvesbarbosa.adv.br/pessoajuridica/
**Prévia:**
- `/proposta-comercial/alvesbarbosa` (hub)
- `/proposta-comercial/alvesbarbosa/pessoa-fisica`
- `/proposta-comercial/alvesbarbosa/pessoa-juridica`
**Data:** 2026-07-16 (v2 — estrutura em três páginas, dados reais)

## Por que a reconstrução

A primeira versão desta prévia foi construída apenas com o que estava disponível na homepage do site oficial, sem contato verificado. O cliente pediu para espelhar mais de perto a estrutura real do site, que hoje tem duas páginas dedicadas por público — `/pessoafisica/` e `/pessoajuridica/` — cada uma com um hero de vídeo de fundo em autoplay. Esta versão reconstrói a prévia em três páginas equivalentes e substitui os dados de contato de exemplo por dados reais confirmados na fonte.

## O que o site original tem de bom

- **Estrutura em hub + duas páginas por público**: a home funciona como porta de entrada, com "PESSOA FÍSICA" e "PESSOA JURÍDICA" como destinos principais de navegação. Reproduzido com uma seção de escolha de perfil na home e um seletor de audiência no cabeçalho de todas as páginas.
- **Hero de vídeo em autoplay**: cada página de público abre com um vídeo de fundo em loop, com um overlay escuro translúcido para legibilidade do texto — a característica visual que motivou esta reconstrução. Implementado com HTML5 `<video>` + imagem de fallback (`poster`).
- **Identidade de marca**: agora usamos `logo-full.png` (700×126, mais nítido) como logomarca principal em cabeçalho, rodapé e metadados, mantendo `alvesbarbosa-logo.png` apenas para compatibilidade retroativa.
- **Região de atuação bem definida**: Barueri, Alphaville, Santana de Parnaíba, Tamboré e Carapicuíba — mantida em todas as seções relevantes.
- **Presença em redes sociais**: LinkedIn, Instagram e Facebook reais, preservados no rodapé e na seção de contato de todas as páginas.

## Pontos de melhoria identificados e aplicados

### Conversão
1. **CTA de WhatsApp acima da dobra** em todas as três páginas, com o número real do escritório.
2. **Botão flutuante de WhatsApp** persistente em toda a navegação.
3. **CTA contextual por área de atuação** — cada bloco de área (Pessoa Física) e cada card de área (Pessoa Jurídica) tem um link de WhatsApp com mensagem pré-preenchida específica daquele tema.
4. **Navegação cruzada entre as três páginas**: cabeçalho com seletor "Início / Pessoa Física / Pessoa Jurídica", drawer mobile com os mesmos links, e blocos de contato ao final de cada página de público apontando para a outra.
5. **Formulário que monta a mensagem do WhatsApp automaticamente** na home — sem backend, sem captura passiva de dados.

### Vídeo de fundo — performance e acessibilidade
6. `<video autoPlay muted loop playsInline preload="none">` com imagem `poster` (`ab03.jpg`) como fallback estático.
7. O vídeo só recebe `src` e começa a carregar/tocar quando o hero entra na viewport, via `IntersectionObserver` — nunca bloqueia o carregamento inicial da página.
8. `prefers-reduced-motion: reduce` desativa o vídeo por completo (o elemento `<video>` nem é renderizado): usuários que pedem menos movimento veem apenas a imagem estática.
9. Vídeos mantidos também em mobile (arquivos de 7MB e 15MB), mas sempre atrás de `preload="none"` + gate por `IntersectionObserver`, para não competir com o carregamento inicial da página.

### Copy e conteúdo real
10. **Equipe real**: 2 sócios (Marco Aurélio Alves Barbosa, Guilherme Rodrigues Barbosa) e 3 consultoras (Marlene Munhóes dos Santos, Lucci Faccioli, Patricia Munhoz Mazza), com formação e especialização de cada um, extraídos do site oficial.
11. **Missão, Visão e Valores** — texto verbatim do site oficial, em seção dedicada da home.
12. **"Sobre nosso Escritório"** — parágrafo institucional completo, verbatim, incluindo razão social completa e o recorte de atuação nacional, consultiva e contenciosa.
13. **Áreas de atuação por público**: Pessoa Física detalha Direito Trabalhista (25 itens), Direito Contratual (9 itens), Família e Sucessões (13 itens) e Direito do Consumidor (8 itens); Pessoa Jurídica detalha Administrativo, Cível, Empresarial, Trabalhista e Entretenimento — todos com texto de introdução extraído verbatim do site oficial.
14. **FAQ específico por página**, cobrindo as dúvidas mais prováveis de cada público.

### Técnica e SEO
15. **Três `layout.tsx` com metadados próprios** (title, description, canonical, Open Graph, Twitter) para hub, Pessoa Física e Pessoa Jurídica — sem `metadata.ts` nas subpastas, preservando o mecanismo de descoberta automática da grade de propostas, que só lê `alvesbarbosa/metadata.ts`.
16. **SEO estruturado** — schema.org `LegalService` (home) e `FAQPage` (nas três páginas), headings semânticos.
17. **Acessibilidade** — skip link, navegação por teclado, `aria-expanded` no FAQ e no menu, foco visível, `prefers-reduced-motion` respeitado (inclusive no vídeo), alvos de toque ≥ 44px.
18. **Código compartilhado** entre as três páginas via `shared.tsx` (componentes: cabeçalho com drawer mobile, rodapé, hero de vídeo, FAQ, listas de contato) e `shared-css.ts` (CSS base comum), evitando divergência entre páginas e reduzindo duplicação.

### Conformidade
19. **Disclaimer alinhado ao Código de Ética da OAB** no rodapé de todas as páginas.
20. **Nenhum dado de contato inventado.**

## Contatos usados (agora reais e verificados)

- **WhatsApp / telefone:** (11) 4247.6351 → `wa.me/5511942476351` (número real, confirmado no widget de WhatsApp Business embutido no próprio site oficial).
- **E-mail:** contato@alvesbarbosa.adv.br
- **LinkedIn:** https://www.linkedin.com/company/alvesbarbosaadvogados
- **Instagram:** https://www.instagram.com/alvesbarbosaadvogados/
- **Facebook:** https://www.facebook.com/alvesbarbosaadvogados
- **Áreas de atendimento:** Barueri, Alphaville, Santana de Parnaíba, Tamboré e Carapicuíba (Grande São Paulo/SP), com atuação em todo o território nacional.
- **Razão social:** Alves Barbosa Sociedade de Advogados, sediado em Alphaville.

**Ainda omitido por não existir na fonte** (não inventado):
- Endereço completo / CEP — checado na home e nas duas subpáginas, não há nenhum endereço publicado em lugar nenhum do site oficial. A prévia mantém apenas "atendimento em ... — endereço sob consulta", sem mapa.
- Números de registro na OAB dos sócios e consultoras — não publicados em nenhuma página do site oficial.
- Depoimentos de clientes.
