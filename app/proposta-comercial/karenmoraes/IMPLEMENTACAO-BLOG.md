# Blog da Dra. Karen Moraes — o que foi implementado

Blog público + área de admin com login e CRUD de artigos, sem backend
persistente e sem banco de dados — os artigos são arquivos `.md` no
próprio repositório GitHub. Este documento serve como referência para
entender o que existe hoje e como replicar a mesma estrutura para
outro cliente.

## Rotas que existem hoje

**Público** (qualquer visitante):
- `/proposta-comercial/karenmoraes/blog` — listagem dos artigos.
- `/proposta-comercial/karenmoraes/blog/[slug]` — página do artigo.

**Admin** (só quem tem a senha):
- `/proposta-comercial/karenmoraes/admin/login` — login por senha
  (redireciona sozinho para o painel se já houver sessão válida).
- `/proposta-comercial/karenmoraes/admin` — lista, cria, edita e
  exclui artigos. Aceita `?new=true` (abre direto em "novo artigo") e
  `?edit=slug` (abre direto editando aquele artigo).
- `/proposta-comercial/karenmoraes/preview/[slug]` — prévia de um
  rascunho antes de publicar (ver seção própria abaixo).

**API** (funções serverless que a interface de admin chama):
- `POST /api/karenmoraes/admin/login` e `POST /api/karenmoraes/admin/logout`
- `GET/POST /api/karenmoraes/blog` — listar e criar artigo
- `PUT/DELETE /api/karenmoraes/blog/[slug]` — editar/sincronizar e excluir
- `POST /api/karenmoraes/blog/preview` — converte Google Doc ou `.docx`
  para markdown antes de publicar (usado pela prévia e pela tela de criação)

## Como o conteúdo entra no sistema

A cliente escolhe uma de duas origens ao criar um artigo:

- **Google Doc**: cola o link de um documento compartilhado como
  "qualquer pessoa com o link pode visualizar"; o sistema busca via
  `export?format=md` do próprio Google Docs.
- **Upload de `.docx`**: arrasta e solta (ou seleciona) o arquivo numa
  área de drop (`FileDropZone`); a conversão para markdown roda
  automaticamente assim que o arquivo é solto, sem precisar clicar em
  nada — usa `mammoth` (docx → HTML) seguido de `turndown` (HTML → md).

Em ambos os casos: se título e resumo forem deixados em branco, o
sistema deriva os dois automaticamente a partir do conteúdo
(`lib/karenmoraes/extract.ts`) — primeira linha vira título, primeiro
parágrafo vira resumo. O slug é gerado a partir do título com um
limite de tamanho (SEO — URLs longas demais são cortadas em uma
palavra inteira, nunca no meio).

## Prévia antes de publicar (duas camadas)

1. **Prévia ao vivo, dentro do formulário**: a tela de criar/editar
   artigo usa um grid de 2 colunas — formulário à esquerda, prévia à
   direita (usando o mesmo componente `ArticleView` da página pública),
   atualizando a cada tecla digitada, sem chamar nenhuma API.
2. **Prévia em nova aba, com a aparência real de publicação**: o botão
   "Pré-visualizar em nova aba" salva um rascunho no `localStorage` do
   navegador (título, conteúdo, capa, origem) sob uma chave baseada no
   próprio slug, e abre `/preview/[slug]` numa aba nova — essa página
   usa o mesmo `SiteHeader`/`SiteFooter`/`ArticleView` da publicação
   real, então o que se vê ali é exatamente o que vai para o ar. A
   prévia expira sozinha em 30 minutos e só funciona no navegador que a
   gerou (o conteúdo nunca sai do `localStorage`, não é público).
3. Antes de publicar de fato, um **modal de confirmação** resume
   título e avisa que a ação vai para o ar em instantes — reduz risco
   de publicar por engano.

## Como a publicação fica pública (sem esperar deploy)

1. Ao confirmar, o artigo vira um arquivo `.md` gravado no repositório
   GitHub via API do GitHub (chamadas HTTP com um token, sem precisar
   de Git instalado no servidor).
2. As páginas públicas usam **ISR** (`export const revalidate = 60`) e
   leem o conteúdo direto da API do GitHub (com fallback automático
   para os arquivos do último deploy, caso o GitHub esteja fora do ar
   ou sem credenciais configuradas).
3. Assim que o commit é confirmado, as rotas de escrita chamam
   `revalidatePath()` para a listagem e para o artigo — isso invalida o
   cache na hora, então o artigo fica visível em segundos, **sem
   esperar o próximo deploy completo da Vercel** (que continua
   acontecendo em segundo plano a cada commit, mas deixa de ser o que
   trava a publicação — ver análise completa no histórico do projeto
   se precisar reconstituir o raciocínio).
4. A área de admin lê a lista sempre direto do GitHub, sem cache — é a
   fonte de verdade em tempo real para quem está gerenciando o conteúdo.
5. Um indicador no painel ("Publicando... geralmente aparece em poucos
   segundos") confirma quando a página pública já responde, verificando
   a própria URL do artigo a cada ~2 segundos por até ~40 segundos.

## Login e proteção de rotas

- Senha comparada com um hash bcrypt guardado em variável de ambiente;
  sessão é um JWT (`jose`) num cookie `httpOnly`/`secure`.
- `middleware.ts` (raiz do projeto) protege `/admin/*`, `/preview/*` e
  as rotas de API de escrita — bloqueia quem não tem sessão válida.
- Quem já está logado e tenta abrir a tela de login é redirecionado
  direto pro painel (evita pedir senha de novo sem necessidade).
- Campo de senha tem botão de mostrar/ocultar (ícone de olho).

## Navegação do admin

- **Sidebar esquerda** (`AdminSidebar`), retrátil/expansível (estado
  salvo em `localStorage`), com "Artigos" e "Novo artigo". O item ativo
  reflete a URL real (`?new=true`, `?edit=slug` ou nenhum).
- **Logout** fica no cabeçalho, canto superior direito (`AdminLogoutButton`).
- Cada card de artigo na lista tem **Ver artigo** (abre a página
  pública em nova aba), **Editar** e **Excluir**.
- Um link discreto "Área restrita" (ícone de cadeado) fica na barra
  fina do topo do site público e do blog — leva ao login sem poluir o
  menu principal de navegação.

## Onde cada coisa fica no código

| O quê | Onde |
|---|---|
| Lógica (auth, GitHub, conversão, slug, extração) | `lib/karenmoraes/` |
| Componentes compartilhados (header, footer, prévia, sidebar, dropzone, spinner) | `components/karenmoraes/` |
| Artigos publicados (retaguarda local) | `content/karenmoraes/blog/*.md` |
| Imagens de capa | `public/proposta-comercial/karenmoraes/blog/covers/` |
| Páginas e rotas de API | `app/proposta-comercial/karenmoraes/...` e `app/api/karenmoraes/...` |
| Proteção do admin/preview | `middleware.ts` (raiz do projeto) |

## Por que os prefixos "karenmoraes" em tudo

Este repositório (`lumasites`) é compartilhado — hospeda o site da
agência e pode conter propostas de outros clientes. O prefixo evita que
rotas, variáveis de ambiente e pastas de um cliente colidam com as de
outro enquanto tudo mora no mesmo repositório.

## Variáveis de ambiente necessárias

```
KARENMORAES_GITHUB_OWNER=<conta/organização dona do repo>
KARENMORAES_GITHUB_REPO=<nome do repositório>
KARENMORAES_GITHUB_BRANCH=main
KARENMORAES_GITHUB_TOKEN=<fine-grained PAT, permissão Contents: Read and write>
KARENMORAES_ADMIN_PASSWORD_HASH=<hash bcrypt da senha, com "$" escapado como "\$" no .env>
KARENMORAES_SESSION_SECRET=<string aleatória>
```

## Como replicar para outro cliente

A migração é praticamente copiar e remover prefixos — a arquitetura não
muda:

1. **Mover as pastas**: tudo que hoje vive em
   `app/proposta-comercial/karenmoraes/` vira a raiz do novo projeto
   (`app/`); `app/api/karenmoraes/` vira `app/api/`;
   `content/karenmoraes/blog/` vira `content/blog/`;
   `public/proposta-comercial/karenmoraes/blog/covers/` vira
   `public/blog/covers/`.
2. **Atualizar os caminhos que citam o prefixo**: as constantes em
   `lib/karenmoraes/config.ts` (`KM_ADMIN_BASE_PATH`, `KM_CONTENT_DIR`,
   `KM_COVERS_PUBLIC_DIR`, `KM_COVERS_URL_PREFIX`) passam a apontar para
   os caminhos sem prefixo; as chamadas para `/api/karenmoraes/...` nas
   páginas de admin/prévia e os `revalidatePath(...)` nas rotas de
   escrita passam a usar `/api/...` e `/blog/...` sem prefixo.
3. **Simplificar o `middleware.ts`**: o `matcher` deixa de precisar do
   prefixo `proposta-comercial/karenmoraes` (fica só `/admin/:path*`,
   `/preview/:path*` e `/api/admin|blog/:path*`), já que o repositório
   passa a ser exclusivo desse cliente.
4. **Renomear as variáveis de ambiente** (opcional, mas recomendado
   para clareza): `KARENMORAES_GITHUB_TOKEN` → `GITHUB_TOKEN`, etc. —
   e gerar um token do GitHub novo, já restrito ao repositório isolado.
5. **Trocar a identidade visual**: `lib/karenmoraes/theme.ts` tem as
   cores/fontes; `components/karenmoraes/SiteHeader.tsx` e
   `SiteFooter.tsx` têm o nome, tagline e dados de contato hardcoded —
   são os únicos lugares que precisam de ajuste visual manual.
6. Nenhuma lógica de negócio muda: autenticação, conversão de Google
   Doc/`.docx`, CRUD via GitHub API, ISR/`revalidatePath` e a UX do
   admin (sidebar, drop zone, prévia, modal de confirmação) continuam
   exatamente iguais.
