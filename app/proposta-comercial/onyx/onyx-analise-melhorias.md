# Autoescola Onyx — Análise do site original e melhorias aplicadas na prévia

**Fonte:** https://www.aeonyx.com.br (Wix)
**Prévia:** `/proposta-comercial/onyx`
**Data:** 2026-07-15

## Varredura realizada (todas as páginas do sitemap)

| Página | URL original | Conteúdo |
|---|---|---|
| Home | `/` | Banner + formulário de pré-matrícula |
| Estrutura | `/estrutura` | "Descubra a autoescola que combina com você" + 3 diferenciais + foto da frota |
| Sobre nós | `/sobrenos` | História (fundada em 27/11/2007), curso teórico exclusivo, #VemPraOnyx |
| Serviços | `/servicos` | Lista dos 5 serviços prestados |
| Primeira habilitação | `/cópia-serviços` | Aulas teóricas/práticas, proposta de valor |
| Adição de categoria | `/cópia-serviços-1` | Categorias A e B + diferenciais |
| Categorias profissionais | `/cópia-primeira-habilitação` | Requisitos C, D, E + documentação |
| Reciclagem | `/cópia-serviços-2` | Benefícios, 45h-aula, certificado nacional |
| Equipe | `/equipe` | 15 profissionais com foto + recrutamento |
| Contato | `/contato` | "Fale Conosco" + formulário |
| Links úteis | `/links` | 6 links (Detran, Poupatempo, CTB…) |
| Landing page | `/landingpage` | Preços B/AB, depoimentos, requisitos |
| Unidade Suzano | `/cópia-unidade-mogi` | Texto institucional da unidade Suzano |
| Pré-matrícula | `/cópia-sobre-nós` | Duplicata da home |

**Todo o conteúdo textual e visual dessas páginas está contido na prévia** (textos, preços, depoimentos, equipe completa com fotos, unidades, links úteis, formulário de pré-matrícula com os mesmos campos). Assets originais baixados do CDN Wix para `public/images/onyx/` (logo, frota, banners de serviço e 15 fotos da equipe).

## O que o original tem de bom (e foi preservado)

- **Identidade laranja + preto** do logo — vira o sistema de cores inteiro da prévia.
- **Tom de voz leve e acolhedor** com emojis e a hashtag **#VemPraOnyx** — mantidos.
- **Preços transparentes com "tudo incluso"** (só existiam na landing page avulsa) — promovidos a seção principal.
- **Equipe com nomes, fotos e cargos** — humaniza; mantida integralmente (15 membros, ordem nome↔foto conferida no HTML original).
- **Fotos reais da frota** (carros, caminhão, ônibus, carreta) — prova visual do diferencial "todas as categorias".
- **Links úteis** — utilidade real para o aluno; mantidos os 6.

## Problemas encontrados no original → melhorias aplicadas

### Estrutura e SEO
1. **URLs quebradas de duplicação do Wix** (`/cópia-serviços-2`, `/cópia-primeira-habilitação` — a página de "Categorias profissionais" mora numa URL chamada "primeira-habilitação") → prévia em página única com âncoras semânticas (`#servicos`, `#precos`, `#equipe`…); num site final, slugs limpos (`/primeira-habilitacao`, `/reciclagem`).
2. **Conteúdo fragmentado em 14 páginas rasas** com textos curtos e navegação confusa (menu "Reciclagem" separado do submenu "Serviços") → jornada única de conversão: promessa → prova → serviço → preço → depoimento → pré-matrícula.
3. **Sem SEO estruturado** → schema.org `DrivingSchool` + `FAQPage`, metadados Open Graph/Twitter, headings semânticos, canonical.
4. **Título da home era só "Autoescola | Autoescola Onyx | Autoescola Arujá…"** (keyword stuffing) → título e descrição orientados a busca local real ("habilitação em Arujá e Suzano, Alto Tietê").

### Conversão
5. **Link do WhatsApp de Arujá quebrado no original** (`phone=551192150-5361` — o hífen invalida o parâmetro em vários clientes) → deep-links `wa.me` corretos com mensagem pré-preenchida.
6. **Preços escondidos** numa landing page fora do menu → seção de preços em destaque, com âncora no hero ("Ver preços e condições").
7. **Formulário Wix de pré-matrícula com 6 campos e sem feedback** → mesmo formulário (mesmos campos do original, incluindo a opção Mogi das Cruzes), mas que monta a mensagem e abre o WhatsApp da unidade escolhida: lead quente, zero backend.
8. **Depoimentos enterrados na landing page** → seção própria com as 3 avaliações reais (Renata, Ester e Paloma).
9. **CTA flutuante de WhatsApp** persistente + CTAs contextuais em cada serviço ("Fazer meu cadastro" na reciclagem, "Quero ser profissional" nas categorias C/D/E).
10. **FAQ novo** montado só com informações verificadas no próprio site (requisitos, 45h da reciclagem, parcelamento, requisitos C/D/E, unidades) — elegível a rich results.

### Design e mobile
11. **Banner do hero original é um gradiente sem mensagem** → hero com headline real do negócio ("Primeira habilitação... dos seus sonhos!", texto da landing page oficial) + foto da frota ao pôr do sol + 4 provas rápidas (desde 2007, frota completa, curso teórico exclusivo, Alto Tietê).
12. **Site Wix pesado e sem mobile-first** → página estática Next.js, CSS mobile-first (1 coluna → 2 → 3/5), menu drawer acessível, alvos de toque ≥ 44px, imagens `next/image`.
13. **Acessibilidade** → skip link, focus trap no menu, `aria-expanded`, contraste AA, `prefers-reduced-motion`.

### Consistência de informação
14. **O site diverge sobre as unidades**: a landing fala em "3 unidades", o rodapé lista 2 (Arujá e Suzano), a equipe tem cargos "Mogi" e o formulário oferece Mogi das Cruzes → prévia padroniza: 2 unidades completas (endereço/CNPJ/tel/redes) + nota explícita de atendimento a Mogi das Cruzes via pré-matrícula. Nenhum endereço foi inventado.

## Dados de contato usados (extraídos do original)

- WhatsApp Arujá: +55 11 92150-5361 (corrigido do link quebrado) · WhatsApp Suzano: +55 11 2891-3017
- Tel. Arujá: 11 4652.2951 · Tel. Suzano: 11 2891.3017
- Email: contato@aeonyx.com.br
- Arujá: Rua Major Benjamin Franco, 367 — Jd Vitória, CEP 07400-165 · CNPJ 09.253.587/0001-15
- Suzano: R. Dona Augusta Ap. de Carvalho Moraes, 109 — Jd Sta Helena, CEP 08674-220 · CNPJ 27.820.308/0001-30
- Redes: facebook.com/autoescolaonyx · facebook.com/autoescolaonyxsuzano · @autoescola_onyx · @autoescola_onyx_suzano
