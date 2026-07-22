import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { KM_CONTENT_DIR, KM_COVERS_PUBLIC_DIR, KM_COVERS_URL_PREFIX, KM_PUBLIC_REVALIDATE_SECONDS } from "./config";
import { deleteFile, getFile, listDir, putBinaryFile, putFile } from "./github";
import type { Article, ArticleFrontmatter } from "./types";

export type { Article, ArticleFrontmatter, ArticleSource } from "./types";
export { slugify } from "./slug";

export async function saveCoverImage(slug: string, file: File): Promise<string> {
  const extension = file.name.split(".").pop() ?? "jpg";
  const coverPath = `${KM_COVERS_PUBLIC_DIR}/${slug}.${extension}`;
  const base64 = Buffer.from(await file.arrayBuffer()).toString("base64");
  await putBinaryFile(coverPath, base64, `blog(karenmoraes): capa de "${slug}"`);
  return `${KM_COVERS_URL_PREFIX}/${slug}.${extension}`;
}

function parseArticle(raw: string): Article {
  const { data, content } = matter(raw);
  return { ...(data as ArticleFrontmatter), content: content.trim() };
}

function serializeArticle(frontmatter: ArticleFrontmatter, content: string): string {
  return matter.stringify(content, frontmatter);
}

function filePath(slug: string) {
  return `${KM_CONTENT_DIR}/${slug}.md`;
}

/** Leitura via arquivos do próprio deploy — usada só como retaguarda, caso a
 * API do GitHub esteja fora do ar ou ainda não configurada.
 *
 * O caminho abaixo precisa ser um literal (não a constante `KM_CONTENT_DIR`
 * importada de outro módulo): o rastreador de arquivos do Next.js
 * (@vercel/nft) só resolve `path.join(process.cwd(), "...")` de forma precisa
 * quando consegue ver o texto literal na própria chamada. Com uma variável
 * importada, ele não consegue provar o caminho em tempo de build e cai no
 * modo conservador — varrendo o projeto inteiro (incluindo `.git`) para
 * dentro do pacote da função serverless. */
function listPublishedArticlesFromDisk(): Article[] {
  const dir = path.join(process.cwd(), "content/karenmoraes/blog");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => parseArticle(fs.readFileSync(path.join(dir, name), "utf-8")))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

function getPublishedArticleFromDisk(slug: string): Article | null {
  const file = path.join(process.cwd(), "content/karenmoraes/blog", `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  return parseArticle(fs.readFileSync(file, "utf-8"));
}

/** Leitura pública do blog: busca no GitHub com cache curto (revalidação por
 * tempo), e o próprio commit de publicar/editar já invalida esse cache na hora
 * (revalidatePath) — por isso o artigo aparece em segundos, sem esperar deploy.
 * Se a API do GitHub falhar, cai para os arquivos do último deploy. */
export async function listPublishedArticles(): Promise<Article[]> {
  try {
    const files = await listDir(KM_CONTENT_DIR, KM_PUBLIC_REVALIDATE_SECONDS);
    const articles = await Promise.all(
      files.filter((f) => f.name.endsWith(".md")).map((f) => getFile(f.path, KM_PUBLIC_REVALIDATE_SECONDS))
    );
    return articles
      .filter((f): f is NonNullable<typeof f> => f !== null)
      .map((f) => parseArticle(f.content))
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch {
    return listPublishedArticlesFromDisk();
  }
}

export async function getPublishedArticle(slug: string): Promise<Article | null> {
  try {
    const file = await getFile(filePath(slug), KM_PUBLIC_REVALIDATE_SECONDS);
    return file ? parseArticle(file.content) : null;
  } catch {
    return getPublishedArticleFromDisk(slug);
  }
}

/** Leitura/escrita via API do GitHub, usada pela área de admin (fonte de verdade em tempo real). */
export async function listArticlesAdmin(): Promise<Article[]> {
  const files = await listDir(KM_CONTENT_DIR);
  const articles = await Promise.all(
    files.filter((f) => f.name.endsWith(".md")).map((f) => getFile(f.path))
  );
  return articles
    .filter((f): f is NonNullable<typeof f> => f !== null)
    .map((f) => parseArticle(f.content))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getArticleAdmin(slug: string): Promise<{ article: Article; sha: string } | null> {
  const file = await getFile(filePath(slug));
  if (!file) return null;
  return { article: parseArticle(file.content), sha: file.sha };
}

export async function saveArticleAdmin(frontmatter: ArticleFrontmatter, content: string) {
  const existing = await getFile(filePath(frontmatter.slug));
  await putFile(
    filePath(frontmatter.slug),
    serializeArticle(frontmatter, content),
    existing ? `blog(karenmoraes): atualiza "${frontmatter.title}"` : `blog(karenmoraes): cria "${frontmatter.title}"`,
    existing?.sha
  );
}

export async function deleteArticleAdmin(slug: string) {
  const existing = await getFile(filePath(slug));
  if (!existing) return;
  const article = parseArticle(existing.content);
  if (article.cover) await deleteCoverImage(article.cover);
  await deleteFile(filePath(slug), existing.sha, `blog(karenmoraes): remove "${slug}"`);
}

async function deleteCoverImage(coverUrl: string) {
  const coverPath = `public${coverUrl}`;
  const existing = await getFile(coverPath);
  if (existing) await deleteFile(coverPath, existing.sha, `blog(karenmoraes): remove capa "${coverPath}"`);
}
