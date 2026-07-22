import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { fetchGoogleDocAsMarkdown } from "@/lib/karenmoraes/googleDocs";
import { convertDocxToMarkdown } from "@/lib/karenmoraes/docx";
import { deleteArticleAdmin, getArticleAdmin, saveArticleAdmin, saveCoverImage } from "@/lib/karenmoraes/blog";
import { assertUploadSize } from "@/lib/karenmoraes/config";

export async function PUT(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    const existing = await getArticleAdmin(slug);
    if (!existing) return NextResponse.json({ error: "Artigo não encontrado" }, { status: 404 });

    const form = await request.formData();
    const title = form.get("title");
    const excerpt = form.get("excerpt");
    const content = form.get("content");
    const cover = form.get("cover");
    const docxFile = form.get("docxFile");
    const resync = form.get("resync") === "true";

    const { article } = existing;
    let updatedContent = article.content;

    if (resync && article.source.type === "gdoc") {
      updatedContent = await fetchGoogleDocAsMarkdown(article.source.url);
    } else if (docxFile instanceof File && article.source.type === "docx") {
      assertUploadSize(docxFile);
      updatedContent = await convertDocxToMarkdown(Buffer.from(await docxFile.arrayBuffer()));
    } else if (typeof content === "string" && content) {
      updatedContent = content;
    }

    if (cover instanceof File) assertUploadSize(cover);

    const frontmatter = {
      ...article,
      title: typeof title === "string" && title ? title : article.title,
      excerpt: typeof excerpt === "string" && excerpt ? excerpt : article.excerpt,
      cover: cover instanceof File ? await saveCoverImage(article.slug, cover) : article.cover,
    };
    delete (frontmatter as { content?: string }).content;

    await saveArticleAdmin(frontmatter, updatedContent);
    revalidatePath("/proposta-comercial/karenmoraes/blog");
    revalidatePath(`/proposta-comercial/karenmoraes/blog/${slug}`);
    return NextResponse.json({ article: { ...frontmatter, content: updatedContent } });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 422 });
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    await deleteArticleAdmin(slug);
    revalidatePath("/proposta-comercial/karenmoraes/blog");
    revalidatePath(`/proposta-comercial/karenmoraes/blog/${slug}`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
