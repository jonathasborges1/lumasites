# Peres Design — comparativo da prévia conceitual

**Fase 3 concluída em:** 22 de julho de 2026  
**Rota local:** `http://localhost:3001/proposta-comercial/peresdesigns`  
**Bases aprovadas:** [auditoria-peres-designs.md](auditoria-peres-designs.md) e [benchmark-estado-da-arte.md](benchmark-estado-da-arte.md)

## Resultado

A prévia foi refeita sob o conceito **“Marca com presença”**: uma experiência editorial, autoral e orientada ao trabalho real. A interface preserva o tom delicado e estratégico da Peres Design, mas passa a tratar portfólio, serviços e processo como argumentos de confiança e conversão.

Após autorização explícita do responsável pelo projeto, a prévia passou a usar assets da fonte oficial: imagem do hero, quatro capas de projeto, seis peças de social media e o retrato de Kethelyn Peres. Os arquivos foram armazenados localmente para evitar dependência das URLs remotas do site original.

## Antes e depois

| Tema | Site atual | Prévia conceitual | Problema resolvido |
|---|---|---|---|
| Primeira dobra | Nome da marca, lista de disciplinas e links sociais | Proposta de valor “Ideias ganham forma. Marcas ganham presença.” + CTAs para projetos e WhatsApp | Hero passa a orientar benefício e ação |
| Navegação | Âncoras pequenas em cinza; “Ofertas”; sem CTA | Projetos, Serviços, Processo, Sobre e FAQ + CTA “Solicitar orçamento” | Nomes previsíveis, contraste e conversão |
| Portfólio | Quatro cards com “Ver projeto” apontando para `#` | Seletor acessível com quatro projetos reais e painel de conteúdo | Nenhum link vazio; interação entrega resposta |
| Cases | Apenas capa, categoria e nome | Estrutura preparada para contexto, processo, sistema visual e aplicações | Explicita a profundidade necessária sem inventar conteúdo |
| Assets | Imagens reais remotas do Google | Assets autorizados armazenados localmente e integrados ao layout | Preserva autenticidade e reduz dependência externa |
| Serviços | Quatro cards longos; 3.308 px no mobile | Cards por necessidade, resumo, preço e entregáveis recolhíveis | Melhora comparação e reduz densidade inicial |
| Serviço principal | Todos os cards têm peso semelhante | Identidade Visual recebe contraste editorial, sem selo promocional | Hierarquia mais clara |
| Processo | Escondido em uma resposta do FAQ | Seção própria em quatro etapas | Torna método e previsibilidade visíveis |
| Sobre | Bio longa e visual suave | Retrato real da Kethelyn, bio preservada e citação destacada | Mais conexão humana sem inventar prova social |
| Contato | Instagram/WhatsApp apenas após longa rolagem | CTA no header, hero, serviços, conclusão e botão flutuante | Contato disponível em toda a jornada |
| Prova social | “80+ projetos” somente na metadata | Número removido até validação formal | Evita alegação não confirmada |
| Acessibilidade visual | Cinzas/pastéis entre 2,32:1 e 4,47:1 | Texto funcional entre 6,56:1 e 15,81:1 | Contraste AA superado nos pares principais |
| Movimento | Carrossel automático sem pausa explícita | Transições curtas, funcionais e desativadas por `prefers-reduced-motion` | Menos distração e mais controle |
| Mobile | Página correta, porém extensa e pouco escaneável | Layout dedicado, menu funcional, serviços recolhíveis, CTAs em largura total | Melhor leitura e interação em 390 px |
| Links | Cards vazios e Behance genérico no footer | Nenhum `href` vazio ou `#`; redes apontam para perfis corretos | Corrige quebras de expectativa |

## Direção visual implementada

### Paleta

- Papel: `#F4F0E8`
- Papel profundo: `#E9E2D7`
- Carvão: `#171713`
- Texto secundário: `#504B44`
- Malva funcional: `#704B62`
- Malva escuro: `#573849`
- Branco quente: `#FFFDF8`

Contrastes medidos:

- `#704B62` / `#FFFDF8`: **7,19:1**
- `#504B44` / `#F4F0E8`: **7,60:1**
- `#171713` / `#F4F0E8`: **15,81:1**
- `#573849` / `#FFFDF8`: **9,99:1**
- WhatsApp `#176B3A` / branco: **6,56:1**

### Tipografia

- Cormorant Garamond preservada como display e memória da marca.
- Montserrat preservada na interface, agora somente nos pesos 400, 500 e 600.
- Headline fluida de 54–108 px no desktop e 52–74 px no mobile.
- Corpo principal de 15–19 px, sem uso estrutural de peso 300.

### Grid

- Container máximo de 1.400 px.
- Hero assimétrico: tese editorial + composição gráfica.
- Projetos em navegação lateral no desktop e lista vertical no mobile.
- Serviços 2 × 2 no desktop e uma coluna no mobile.
- Processo em duas colunas com heading sticky no desktop.
- Sobre em composição 40/60, refluindo para uma coluna em tablet/mobile.
- Breakpoints dedicados em 1.100, 820 e 620 px.

## Conteúdo preservado

- Nome e atuação de Kethelyn Peres.
- Localização em Maringá e atendimento online/nacional.
- Quatro nomes reais do portfólio atual.
- Quatro serviços, descrições, entregáveis e preços publicados.
- Prazo médio de 20–30 dias úteis.
- Etapas reais do processo.
- Bio, posicionamento e citação institucional.
- FAQ, WhatsApp, e-mail, Instagram e Behance.

Não foram adicionados depoimentos, métricas, resultados comerciais ou serviços inexistentes.

## Acessibilidade e interação

- Foco visível de 3 px em links, botões, tabs e summaries.
- Menu móvel com `aria-expanded`, `aria-controls` e rótulos alternados.
- Projetos implementados com `tablist`, `tab` e `tabpanel`.
- Accordions de serviço e FAQ com elementos nativos `details/summary`.
- Ícones decorativos ocultos da árvore acessível.
- CTAs com alvos mínimos próximos ou superiores a 44 px.
- Respeito a `prefers-reduced-motion`.
- Nenhum conteúdo essencial depende exclusivamente de hover.
- Nenhum overflow horizontal nos três viewports testados.

## Validação realizada

### TypeScript

```text
npx tsc --noEmit
Resultado: concluído sem erros.
```

### Servidor de desenvolvimento

```text
npm run dev
Rota: /proposta-comercial/peresdesigns
HTTP: 200
```

O servidor já estava ativo na porta 3001 durante a validação. Não foi executado build de produção.

### Viewports e interações

| Viewport | Documento | Overflow X | Console | Interações verificadas |
|---|---:|---|---|---|
| Desktop 1440 × 1000 | 1440 × 8612 | Não | Sem erros | Tabs e detalhes de serviço |
| Tablet 768 × 1024 | 768 × 9493 | Não | Sem erros | Tabs e detalhes de serviço |
| Mobile 390 × 844 | 390 × 11390 | Não | Sem erros | Menu, tabs e detalhes de serviço |

Capturas por viewport e o relatório automatizado foram gerados por
`scripts/verify-peres-preview.mjs` durante esta validação e não foram
versionados no repositório — rode o script novamente para reproduzi-los, se
necessário.

## Pendências para produção

1. Receber arquivos-fonte em maior resolução caso existam versões melhores que as publicadas.
2. Produzir conteúdo confirmado para 1–2 cases: contexto, processo, sistema e resultado.
3. Confirmar preços antes da publicação e sincronizar JSON-LD.
4. Decidir se “mais de 80 projetos” pode ser publicado com contexto verificável.
5. Confirmar se Landing Page é serviço central ou secundário no posicionamento.
6. Fazer auditoria Lighthouse/WebPageTest com os assets finais.
7. Só então avaliar rotas de produção como `/projetos/[slug]` e páginas de serviço.
