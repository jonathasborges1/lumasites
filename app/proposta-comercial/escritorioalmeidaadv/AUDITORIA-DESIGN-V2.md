# Auditoria de design — Almeida Advocacia / conceito 02

## Diagnóstico da prévia anterior

A versão anterior era funcional e coerente, mas ainda transmitia a sensação de um bom template jurídico genérico. Os principais limitadores percebidos foram:

- hero apoiado em um bloco abstrato azul, sem direção de arte memorável;
- excesso de componentes com aparência de “card”, reduzindo a sofisticação editorial;
- áreas de atuação, processo e depoimentos tratados com pesos visuais semelhantes;
- azul-marinho + dourado em uma aplicação previsível para o setor;
- pouco contraste de ritmo entre as seções;
- ausência de uma imagem autoral e de um gesto visual reconhecível da marca;
- animações de entrada dependentes de opacidade inicial zero, com risco de seções vazias em capturas ou rolagens muito rápidas.

## Referências e aprendizados

- [Lawyerist — Best Law Firm Websites 2025](https://lawyerist.com/news/good-vs-great-what-best-law-firm-websites-get-right/): boa execução técnica, branding claro e conteúdo orientado à ação já são requisitos básicos; os melhores projetos acrescentam experiência e utilidade.
- [Really Good Designs — Law Firm Website Design](https://reallygooddesigns.com/law-firm-website-design/): os exemplos mais fortes equilibram credibilidade, clareza e usabilidade, com fotografia expressiva, tipografia de grande escala e CTAs persistentes.
- [PSM — Design trends in professional services](https://psm-theprofessionals.com/breaking-the-mould-design-trends-in-professional-services/): marcas profissionais estão migrando de uma estética corporativa formal para linguagem mais humana, tipografia contemporânea e imagens que evitam clichês do setor.

## Direção aplicada

**Conceito:** “clareza para seguir em frente”. A identidade visual preserva os códigos reconhecíveis do site fonte, mas os reorganiza em uma composição editorial mais atual.

- paleta: vinho institucional `#730203`, grafite, branco quente e cobre;
- tipografia: títulos serifados grandes, com ritmo de revista, combinados a texto funcional em sans-serif;
- capa: layout assimétrico com grade editorial e a imagem institucional da Justiça já utilizada pela marca;
- áreas: índice numerado em vez de três cards iguais;
- processo: linha temporal contínua para reforçar progressão;
- depoimentos: um relato editorial em destaque e cinco provas complementares;
- sobre: fotografia real da Dra. Patrícia extraída do canal institucional e integrada às credenciais;
- conversão: CTA principal preservado no hero, por área, no rodapé e em botão flutuante;
- animação: entrada progressiva com Web Animations API, mantendo o conteúdo visível como fallback.

## Ativos ainda necessários para a versão final

1. Retrato profissional vertical da Dra. Patrícia, com fundo simples e luz natural.
2. Logotipo oficial em SVG ou PNG transparente.
3. Uma fotografia real do escritório ou da fachada.
4. Confirmação do uso nominal dos depoimentos.
5. Horários de atendimento e disponibilidade para consultas online.

Os elementos visuais reutilizados nesta prévia foram obtidos do site institucional da própria Almeida Advocacia e devem ter sua versão em alta resolução solicitada antes da publicação final.
