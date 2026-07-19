# Auditoria de SEO e aquisição orgânica — Luma Sites

_Análise feita em 19/07/2026 com base no print do Google Search Console (20/04 a 17/07/2026), no repositório e em uma verificação da versão publicada de `lumasites.com.br`._

## Resumo executivo

O site ainda não tem volume de tráfego suficiente para gerar clientes de forma previsível. Foram **645 impressões, 2 cliques, CTR de 0,3% e posição média 61** em três meses. Com apenas dois acessos vindos da busca, receber zero clientes é estatisticamente normal: mesmo uma página que convertesse 5% dos visitantes produziria, em média, somente 0,1 lead nesse volume.

O problema principal não é “falta de botão” nem apenas a meta description. A posição média 61 significa que o site aparece, em geral, longe da primeira página. O Google já associou o domínio ao assunto correto, mas ainda não encontrou motivos suficientes para colocá-lo acima de concorrentes mais fortes.

Dentro deste projeto, as maiores oportunidades são:

1. **Concentrar relevância**, reduzindo a disputa entre páginas quase iguais sobre criação/desenvolvimento/site profissional em Manaus.
2. **Tirar da indexação as prévias comerciais**, que hoje podem transformar o domínio em um conjunto grande de páginas de terceiros e diluir seu foco.
3. **Trocar afirmações genéricas por evidências reais**: cases, clientes verificáveis, processo, responsável, resultados e avaliações reais.
4. **Transformar o portfólio em páginas de estudo de caso**, não apenas em uma galeria de imagens.
5. **Produzir conteúdo original baseado na experiência da Luma**, em vez de aumentar rapidamente a quantidade de artigos muito semelhantes por profissão.
6. **Medir o funil completo**, pois hoje há evento de clique no WhatsApp, mas ainda não há uma leitura clara de impressão → visita orgânica → clique → conversa → proposta → venda.
7. Em paralelo ao código, **fortalecer o Perfil da Empresa no Google e conquistar avaliações legítimas**. Para buscas locais, isso tende a ter mais impacto no curto prazo do que adicionar mais schema ou mais palavras-chave.

O objetivo dos próximos 90 dias não deve ser “publicar o máximo possível”. Deve ser tornar o domínio menor, mais coerente, comprovável e útil.

## O que os dados do Search Console realmente dizem

### 1. O Google entendeu o tema e a localização

As dez consultas visíveis no print são:

| Consulta | Impressões | Cliques |
|---|---:|---:|
| criação de sites em manaus | 145 | 0 |
| criação de site manaus | 74 | 0 |
| criação de site em manaus | 60 | 0 |
| criação de sites manaus | 57 | 0 |
| criacao de sites manaus | 48 | 0 |
| site profissional manaus | 29 | 0 |
| criar sites em manaus | 23 | 0 |
| desenvolvimento de sites em manaus | 12 | 0 |
| desenvolvimento de sites manaus | 10 | 0 |
| sites em manaus | 7 | 0 |

Essas consultas somam **465 impressões, cerca de 72% de todas as impressões** do período. Portanto, o Google já relaciona a Luma ao serviço certo e a Manaus. Não precisamos repetir ainda mais a mesma palavra-chave; precisamos aumentar a qualidade e a autoridade do melhor resultado para essa intenção.

### 2. O CTR baixo é consequência principalmente da posição

CTR de 0,3% é ruim, mas não deve ser analisado isoladamente. Na posição média 61, quase ninguém vê o resultado em uma navegação normal. Alterar titles pode ajudar, mas só se torna uma alavanca relevante quando páginas começarem a aparecer, de forma consistente, no top 20 ou top 10.

Prioridade correta:

1. melhorar indexação, foco, relevância e autoridade;
2. chegar a posições em que o resultado seja realmente visto;
3. então testar title e description usando consultas e páginas com muitas impressões.

### 3. O print não permite saber qual URL está competindo em cada consulta

O relatório está na dimensão **Consultas**, não em **Páginas**. Antes de redirecionar URLs, é obrigatório exportar do Search Console, para os últimos três meses:

- consultas com cliques, impressões, CTR e posição;
- páginas com as mesmas métricas;
- cruzamento consulta × página;
- dispositivos;
- países;
- indexação de páginas e motivos de exclusão.

O cruzamento consulta × página mostrará se `/`, `/criar-site-em-manaus`, `/desenvolvimento-de-sites-manaus` e `/site-profissional-manaus` alternam para as mesmas buscas. A auditoria do código mostra forte risco de canibalização, mas os redirecionamentos finais devem usar esse dado para preservar a URL que o Google já considera mais forte.

## Diagnóstico do projeto

### P0 — Muitas páginas comerciais respondem à mesma intenção

Existem cinco páginas comerciais:

- `/criar-site-em-manaus`
- `/desenvolvimento-de-sites-manaus`
- `/site-profissional-manaus`
- `/site-institucional-manaus`
- `/landing-page-manaus`

As três primeiras são especialmente próximas. Repetem a mesma estrutura, benefícios, processo, depoimentos, público e CTA; a diferença principal é a variação do termo no título. Isso divide links internos e sinais comportamentais entre várias URLs e dificulta escolher qual página deve ranquear para “criação de sites em Manaus”.

Além da canibalização, páginas substancialmente semelhantes criadas para consultas parecidas podem se aproximar do que o Google chama de **abuso de doorways**. A política cita explicitamente páginas semelhantes criadas para consultas específicas e que funcionam como estágio intermediário até o mesmo destino. Ver: [Políticas de spam da Pesquisa Google](https://developers.google.com/search/docs/essentials/spam-policies?hl=pt-br#abuso-de-doorways).

#### Recomendação

- Definir **uma única página pilar** para “criação de sites em Manaus”. A home é a candidata natural, mas a escolha final deve considerar o relatório consulta × página.
- Manter somente páginas com produtos e intenção realmente diferentes:
  - landing page em Manaus;
  - site institucional em Manaus;
  - eventualmente cardápio digital ou portfólio profissional, caso sejam ofertas reais e tenham conteúdo/cases próprios.
- Fundir o conteúdo útil das páginas redundantes na página pilar e aplicar redirecionamento `301` das URLs aposentadas.
- Atualizar links internos, canonical e sitemap após a consolidação.
- Não usar canonical como substituto permanente de uma arquitetura confusa; para páginas realmente substituídas, usar `301`.

Uma arquitetura possível:

```text
/
├── /servicos/landing-page-manaus
├── /servicos/site-institucional-manaus
├── /portfolio
│   └── /portfolio/{case-real}
├── /precos-criacao-de-sites
├── /sobre
└── /blog/{conteudo-util}
```

Não é necessário mudar todos os caminhos imediatamente. A ideia principal é que cada URL tenha uma função, público e resposta diferentes.

### P0 — 28 prévias comerciais podem ser indexadas

O projeto contém 35 diretórios dentro de `app/proposta-comercial`. Apenas sete têm uma regra explícita `robots.index: false`; **28 herdam a configuração indexável** do layout pai. A página `/proposta-comercial` também cria um `ItemList` com links para as prévias, facilitando que mecanismos de busca descubram essas URLs.

Isso é perigoso por quatro motivos:

- o domínio da Luma passa a hospedar muitas páginas cujo assunto principal é o negócio do prospect, não criação de sites;
- há prévias, propostas e dados de terceiros que talvez não devam aparecer publicamente no Google;
- o Google gasta atenção rastreando conteúdo que não é uma página comercial da Luma;
- algumas prévias podem concorrer com os sites oficiais dos próprios clientes ou prospects.

#### Recomendação

- Aplicar `noindex, nofollow, noimageindex` a **todas as prévias privadas ou conceituais**.
- Se uma prévia não precisa ser pública, protegê-la por autenticação ou removê-la da produção. `noindex` não é controle de acesso.
- Remover prévias privadas do `ItemList` e da grade pública.
- Manter `/proposta-comercial` indexável somente se ele for um portfólio real. O nome público e a URL deveriam ser `/portfolio` ou `/cases`; fazer `301` da URL antiga se houver mudança.
- Criar páginas de case separadas e indexáveis apenas para projetos autorizados, publicados e enriquecidos com conteúdo original.

### P0 — Prova social e promessas precisam ser comprováveis

O código exibe:

- “+30 sites entregues em Manaus”;
- “clientes reais de Manaus que hoje recebem contato todo dia pela internet”;
- depoimentos de Maria Ribeiro, João Carvalho e Ana Paula Souza;
- afirmações como “resposta em até 1 hora”, “agenda limitada” e entrega em poucos dias.

Os nomes dos depoimentos não correspondem aos seis projetos do portfólio visível. Isso não prova que sejam fictícios, mas a divergência exige validação. Confiança é decisiva tanto para conversão quanto para a percepção de experiência e reputação do site.

#### Recomendação

- Se os depoimentos forem reais, incluir autorização, foto/logo quando permitido, nome do negócio e link para o projeto ou avaliação pública.
- Se não puderem ser comprovados, removê-los imediatamente e usar cases reais.
- Confirmar documentalmente o “+30”. Caso a contagem inclua prévias não contratadas, substituir pelo número de projetos realmente entregues.
- Usar “agenda limitada” apenas quando for verdade. O mês é calculado no build e pode ficar desatualizado até o próximo deploy.
- Unificar promessas de prazo: a home fala em 3–7 dias, enquanto uma página menciona 10–20 dias para projetos institucionais.
- Criar uma página `/sobre` com responsável, foto, experiência, cidade, forma de atendimento, CNPJ quando aplicável e canais oficiais.
- Adicionar política de privacidade, termos comerciais básicos e informações claras de domínio/hospedagem/suporte.

Essas alterações não são “encher texto para SEO”. Elas removem objeções reais de quem está prestes a chamar no WhatsApp.

### P1 — O portfólio precisa provar capacidade, não apenas mostrar miniaturas

`content/portfolio.ts` lista seis trabalhos publicados, o que é um ativo valioso. Porém uma imagem, categoria e link externo dizem pouco ao Google e ao comprador sobre o trabalho executado.

Para cada projeto autorizado, criar um case com:

- contexto do cliente e problema inicial;
- objetivo do site;
- escopo entregue;
- decisões de arquitetura, conteúdo e design;
- imagens reais antes/depois, quando houver;
- resultado técnico medido;
- resultado comercial real, sem inventar causalidade;
- depoimento verificável;
- link para o site no ar;
- data e responsável pelo projeto.

Exemplos de evidência útil: redução de tempo de carregamento, melhora em Lighthouse, início de impressões no Search Console, quantidade de contatos atribuídos ao site ou relato do cliente. Se não houver autorização para divulgar números, explicar o trabalho sem números.

No site do cliente, o backlink deve ser uma atribuição de marca natural, como “Site por Luma Sites”, com consentimento. Evitar distribuir em massa âncoras exatas como “criação de sites em Manaus”, pois isso parece manipulação e não agrega ao visitante.

### P1 — O blog tem volume, mas pouco conteúdo de experiência própria

Há sete artigos, cinco deles no formato “site para [profissão] em Manaus”. Eles são longos e bem estruturados, mas usam um molde parecido e várias afirmações amplas sobre cada mercado. Criar rapidamente versões para contador, pet shop, restaurante, salão e outros nichos tende a aumentar quantidade sem aumentar autoridade.

O Google recomenda conteúdo feito para pessoas, com informação original, experiência em primeira mão e valor superior ao que já aparece nos resultados. Ver: [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

#### Conteúdos prioritários

1. **Cases reais** dos seis projetos publicados.
2. **Quanto custa criar um site em Manaus**, com faixas reais, o que está incluído, custos recorrentes e exemplos de escopo — o artigo existente deve virar a referência mais completa do domínio.
3. **Landing page ou site institucional: qual escolher?**, com exemplos e critérios práticos.
4. **Checklist para contratar criação de site**, incluindo domínio no nome do cliente, hospedagem, propriedade do código, suporte, LGPD e SEO.
5. **Análise original de sites de negócios de Manaus**, usando uma metodologia clara e dados coletados pela própria Luma, sem expor ou atacar empresas.
6. **Bastidores técnicos de um projeto**, mostrando como imagens, conteúdo, acessibilidade e velocidade foram tratados.

Antes de criar um novo artigo por profissão, exigir pelo menos um destes diferenciais:

- cliente real naquele nicho;
- pesquisa própria;
- entrevista com profissional;
- checklist específico validado;
- dados ou exemplos que não poderiam ser trocados de profissão com localizar/substituir.

Os artigos existentes devem receber autor identificado, fontes para afirmações legais/profissionais, data de revisão e links contextuais para o serviço adequado. Links internos ajudam descoberta e entendimento quando usam âncoras naturais e descritivas: [boas práticas de links do Google](https://developers.google.com/search/docs/crawling-indexing/links-crawlable?hl=pt-br).

### P1 — Perfil da Empresa e reputação local

O código já declara `LocalBusiness`, telefone, Manaus e um link do Maps. Isso não substitui um Perfil da Empresa completo e ativo.

Segundo o próprio Google, resultados locais se baseiam principalmente em **relevância, distância e destaque**; informações completas, avaliações, respostas e links para o negócio podem ajudar. Ver: [como melhorar a classificação local no Google](https://support.google.com/business/answer/7091?hl=pt-BR).

Ações fora do repositório, mas essenciais ao resultado:

- confirmar categoria principal e categorias secundárias coerentes;
- cadastrar serviços reais e área de atendimento;
- manter telefone, nome e demais dados iguais no perfil e no site;
- publicar fotos reais do responsável, processo e projetos;
- pedir avaliação a cada cliente entregue, usando o link oficial do Google;
- responder individualmente às avaliações;
- não oferecer desconto, brinde ou vantagem em troca de review — isso viola a política do Google;
- buscar menções locais legítimas: clientes, fornecedores, associações e imprensa, sem comprar pacotes de backlinks.

Não tratar “postar toda semana no Perfil” ou cadastro em dezenas de diretórios como fórmula de ranking. A prioridade é informação correta, reviews reais, reputação e menções relevantes.

### P1 — Medição de conversão incompleta

O repositório registra o evento `whatsapp_click` com página e serviço. É um bom começo, mas clique não é cliente.

Implementar um painel mensal com este funil:

```text
impressões orgânicas
→ cliques orgânicos
→ sessões nas páginas comerciais
→ cliques no WhatsApp/telefone/e-mail
→ conversas iniciadas
→ propostas enviadas
→ contratos fechados
→ receita orgânica
```

No projeto:

- registrar posição do CTA (`hero`, `portfolio`, `preco`, `faq`, `flutuante`, `footer`);
- medir também telefone, e-mail e formulário, se existirem;
- manter a página de origem e o serviço no texto inicial do WhatsApp;
- garantir que analytics só carregue conforme a política de privacidade aplicável;
- confrontar semanalmente eventos com conversas e vendas reais em uma planilha/CRM.

Sem esse fechamento, é possível aumentar cliques e continuar sem saber quais páginas geram receita.

### P2 — Snippet, title e dados estruturados

Os titles locais já usam as consultas principais. Há, porém, repetição de marca: com o template global, uma página cujo title já contém “Luma Sites” pode renderizar algo como `... | Luma Sites | Luma Sites`. O resultado publicado de `/desenvolvimento-de-sites-manaus` apresentou essa duplicação em uma das verificações.

Ajustes:

- remover a marca dos titles definidos nas páginas e deixar o template global adicioná-la uma vez;
- manter title curto, distinto e fiel ao conteúdo;
- escrever descriptions específicas com oferta e evidência, sem repetir palavras-chave;
- só testar variações depois que a página tiver impressões suficientes em posições úteis;
- garantir que o H1, title e conteúdo principal descrevam a mesma intenção.

O Google recomenda titles descritivos, concisos e sem boilerplate repetido: [boas práticas para title links](https://developers.google.com/search/docs/appearance/title-link?hl=pt-br). A description pode influenciar o snippet e o clique, mas não é promessa de texto exibido nem atalho de ranking: [controle de snippets](https://developers.google.com/search/docs/appearance/snippet?hl=pt-br).

Observações importantes:

- `keywords` em `Metadata` não ajuda: o Google ignora completamente a meta tag keywords. [Documentação oficial](https://developers.google.com/search/docs/crawling-indexing/special-tags?hl=pt-br#unsupported-meta-tags-and-attributes).
- `FAQPage` já está implementado na home e nos artigos; não é uma nova oportunidade prioritária. Desde 2023, rich results de FAQ aparecem regularmente apenas para sites governamentais e de saúde reconhecidos. [Mudança nos rich results de FAQ](https://developers.google.com/search/blog/2023/08/howto-faq-changes).
- Breadcrumb e schema já existem em várias páginas. Mais schema não compensará conteúdo repetido ou falta de reputação.
- O `LocalBusiness` atual não traz endereço físico completo. Não inventar endereço ou coordenadas. Se a Luma for negócio de área de serviço sem local aberto ao público, representar isso honestamente e validar a marcação no Rich Results Test.

### P2 — Performance e experiência

A home publicada entrega aproximadamente **270 KB de HTML**, antes dos demais recursos, e usa várias animações, efeitos visuais e componentes client-side. O contador renderiza inicialmente `0`, e existe um overlay global de carregamento com pelo menos 200 ms. O conteúdo é renderizado no HTML, então não há evidência de bloqueio de indexação, mas há risco de custo desnecessário no celular e de primeira impressão confusa.

Ações:

- medir home e página pilar no PageSpeed Insights mobile e no relatório de Core Web Vitals;
- priorizar LCP, INP e CLS reais, não apenas a nota geral;
- renderizar o valor final dos contadores no HTML e animar visualmente sem substituir o significado por zero;
- remover o loading screen inicial se ele não estiver escondendo uma espera real;
- reduzir animações e JavaScript no primeiro viewport;
- conferir dimensões, formato e prioridade das imagens do hero;
- testar em aparelho intermediário e conexão 4G, não apenas desktop local.

Core Web Vitals ajudam a experiência e fazem parte dos sinais usados pelo Google, mas uma nota perfeita não substitui conteúdo relevante: [entenda a experiência na página](https://developers.google.com/search/docs/appearance/page-experience?hl=pt-br).

Durante esta auditoria, `npm run build` não pôde ser concluído porque o processo recebeu `EPERM` ao acessar `.next/trace`, provavelmente com a pasta `.next` em uso pelo servidor de desenvolvimento. Isso não demonstra defeito no código, mas o build deve ser repetido com o processo local parado antes de publicar alterações.

### P2 — Sitemap e manutenção

O sitemap publicado contém 15 URLs comerciais/editoriais e datas manuais. `priority` e `changefreq` não produzem o efeito esperado: o Google os ignora. Já `lastmod` só é usado quando é consistente e verificavelmente correto. Ver: [documentação de sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=pt-br).

Recomendação:

- manter no sitemap apenas URLs canônicas que devem aparecer no Google;
- derivar `lastmod` da atualização real do conteúdo, não de uma data decorativa;
- remover `priority` e `changeFrequency` para simplificar;
- após consolidações, reenviar o sitemap e solicitar indexação somente das páginas principais;
- conferir no Search Console se as páginas antigas foram reconhecidas como redirecionadas.

## Plano de execução em 90 dias

### Semana 1 — Higiene e confiança

- Exportar consultas, páginas, consulta × página, dispositivos e indexação do Search Console.
- Aplicar `noindex` a todas as prévias conceituais e proteger as que forem confidenciais.
- Validar ou remover depoimentos, “+30 projetos”, resultados e urgência.
- Corrigir titles com marca duplicada.
- Repetir o build com `.next` liberado.
- Criar uma planilha de leads com origem e resultado comercial.

**Critério de conclusão:** nenhuma prévia privada indexável; nenhuma afirmação pública sem evidência; baseline de aquisição registrado.

### Semanas 2–3 — Arquitetura

- Usar o cruzamento consulta × página para escolher a URL pilar.
- Fundir páginas sinônimas e criar redirecionamentos 301.
- Separar claramente landing page e site institucional por intenção/produto.
- Atualizar navegação, footer, sitemap, canonical e links internos.
- Transformar `/proposta-comercial` em portfólio público ou redirecionar para `/portfolio`.

**Critério de conclusão:** uma única URL principal por intenção de busca.

### Semanas 3–6 — Evidência comercial

- Criar página `/sobre`.
- Publicar de três a seis cases reais e autorizados.
- Substituir depoimentos genéricos por reviews verificáveis.
- Revisar a página de preços com escopo e custos transparentes.
- Melhorar CTAs com contexto: “Receber diagnóstico do meu site” é mais específico do que repetir “falar agora”.

**Critério de conclusão:** o visitante consegue identificar quem entrega, o que já foi entregue, quanto custa aproximadamente e por que confiar.

### Semanas 5–10 — Conteúdo original e autoridade

- Atualizar o guia de preços para ser a melhor referência local do domínio.
- Publicar um case aprofundado a cada duas semanas.
- Produzir um conteúdo comparativo ou pesquisa própria por mês.
- Revisar os artigos por profissão; consolidar ou retirar os que não oferecem valor específico.
- Pedir reviews reais de forma contínua após cada entrega.
- Buscar de duas a quatro menções locais/editoriais legítimas, sem comprar links.

**Critério de conclusão:** cada conteúdo novo contém experiência, dados ou exemplos próprios.

### Semanas 8–12 — Otimização por dados

- Comparar 28 dias com os 28 dias anteriores e também com o mesmo período disponível.
- Avaliar consultas por página, nunca apenas a média do domínio.
- Melhorar title/description somente das URLs com muitas impressões e posição aproximada de 5 a 20.
- Analisar quais CTAs geram conversas e propostas.
- Corrigir gargalos mobile apontados por dados de campo ou PageSpeed.

## Indicadores de acompanhamento

Não definir “mais visitas” como único sucesso. Acompanhar mensalmente:

| Etapa | Indicador | Meta inicial |
|---|---|---|
| Cobertura | URLs comerciais válidas indexadas | 100% das canônicas, 0 prévias privadas |
| Foco | URLs disputando a mesma consulta principal | 1 URL predominante |
| Visibilidade | Impressões e posição das consultas comerciais | tendência mensal positiva |
| Descoberta | consultas no top 20 e top 10 | crescimento consistente |
| Clique | CTR por consulta e página | avaliar por faixa de posição |
| Conversão | clique no WhatsApp por landing page | criar baseline antes de fixar meta |
| Vendas | propostas e contratos vindos do orgânico | rastreamento obrigatório |
| Local | visualizações, ações e avaliações no Perfil | evolução mensal, apenas reviews reais |
| Autoridade | novos domínios relevantes mencionando a Luma | qualidade acima de quantidade |

Como primeiro marco operacional, faz sentido buscar **100 visitas orgânicas qualificadas por mês** antes de esperar um fluxo previsível de leads. Isso não é promessa de prazo nem de venda; é um patamar mais útil para medir conversão do que os dois cliques atuais.

## O que não priorizar agora

- Criar dezenas de artigos trocando apenas profissão ou bairro.
- Adicionar mais variações da mesma página comercial.
- Repetir a palavra-chave em todos os títulos, headings e links.
- Investir tempo em `meta keywords`.
- Adicionar mais schemas esperando ganho direto de posição.
- Comprar backlinks ou pacotes de diretórios.
- Pedir avaliações com incentivo.
- Obsessão por nota 100 no Lighthouse antes de corrigir arquitetura, confiança e conteúdo.
- Alterar titles toda semana com apenas 645 impressões totais.

## Decisão recomendada

A Luma não precisa parecer maior; precisa parecer **mais comprovável e mais específica**.

A melhor sequência é:

1. limpar a indexação das prévias;
2. escolher uma página pilar e consolidar sinônimos;
3. substituir prova social genérica por clientes e resultados verificáveis;
4. transformar projetos reais em cases indexáveis;
5. fortalecer Perfil da Empresa, avaliações e menções locais;
6. publicar conteúdo original ligado à experiência da equipe;
7. medir até a venda, não apenas até o clique.

Esse caminho ataca os três gargalos observados: **baixa posição**, **confiança insuficiente** e **ausência de volume para converter**. Mais conteúdo só deve entrar quando tornar o domínio mais útil e mais confiável — nunca apenas maior.
