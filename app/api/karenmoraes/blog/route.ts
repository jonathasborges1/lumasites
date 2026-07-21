import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import {
  ArticleFrontmatter,
  getArticleAdmin,
  listArticlesAdmin,
  listPublishedArticles,
  saveArticleAdmin,
  saveCoverImage,
  slugify,
} from "@/lib/karenmoraes/blog";
import { deriveTitleAndExcerpt } from "@/lib/karenmoraes/extract";

export async function GET() {
  try {
    const articles = await listArticlesAdmin();
    return NextResponse.json({ articles });
  } catch {
    // GitHub ainda não configurado (comum em dev local) — cai para os artigos já
    // commitados no próprio deploy, só para a listagem não travar com erro. Criar,
    // editar, sincronizar e excluir continuam exigindo o GitHub normalmente.
    return NextResponse.json({ articles: await listPublishedArticles() });
  }
}

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const rawTitle = form.get("title");
  const rawExcerpt = form.get("excerpt");
  const content = form.get("content");
  const source = form.get("source");
  const googleDocUrl = form.get("googleDocUrl");
  const cover = form.get("cover");

  if (typeof content !== "string" || !content) {
    return NextResponse.json({ error: "O conteúdo do artigo está vazio" }, { status: 400 });
  }
  if (source !== "gdoc" && source !== "docx") {
    return NextResponse.json({ error: "Origem inválida" }, { status: 400 });
  }

  const derived = deriveTitleAndExcerpt(content);
  const title = typeof rawTitle === "string" && rawTitle.trim() ? rawTitle.trim() : derived.title;
  const excerpt = typeof rawExcerpt === "string" && rawExcerpt.trim() ? rawExcerpt.trim() : derived.excerpt;

  if (!title) {
    return NextResponse.json(
      { error: "Não foi possível identificar um título no arquivo. Informe um título manualmente." },
      { status: 400 }
    );
  }

  try {
    const slug = slugify(title);
    if (await getArticleAdmin(slug)) {
      return NextResponse.json({ error: `Já existe um artigo com o slug "${slug}"` }, { status: 409 });
    }

    const frontmatter: ArticleFrontmatter = {
      title,
      slug,
      date: new Date().toISOString(),
      excerpt,
      source: source === "gdoc" ? { type: "gdoc", url: String(googleDocUrl ?? "") } : { type: "docx" },
    };
    if (cover instanceof File) {
      frontmatter.cover = await saveCoverImage(slug, cover);
    }

    await saveArticleAdmin(frontmatter, content);
    // Publicar não espera o próximo deploy nem o cache de 60s: invalida a
    // listagem e a página do artigo na hora, então a próxima visita já busca
    // a versão nova direto no GitHub.
    revalidatePath("/proposta-comercial/karenmoraes/blog");
    revalidatePath(`/proposta-comercial/karenmoraes/blog/${slug}`);
    return NextResponse.json({ article: { ...frontmatter, content } }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
