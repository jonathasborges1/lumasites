import { notFound } from "next/navigation";
import { getPublishedArticle } from "@/lib/karenmoraes/blog";
import { KM_COLORS } from "@/lib/karenmoraes/theme";
import ArticleView from "@/components/karenmoraes/ArticleView";
import SiteHeader from "@/components/karenmoraes/SiteHeader";
import SiteFooter from "@/components/karenmoraes/SiteFooter";

// Cache curto no lugar de gerar a página só no build — publicar/editar já
// invalida esse cache na hora (revalidatePath), então isso só cobre o pior caso.
export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getPublishedArticle(slug);
  if (!article) return {};
  return { title: `${article.title} | Blog Dra. Karen Moraes`, description: article.excerpt };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getPublishedArticle(slug);
  if (!article) notFound();

  return (
    <>
    <SiteHeader />
    <main style={{ background: KM_COLORS.rose, minHeight: "100vh", padding: "64px 24px" }}>
      <ArticleView title={article.title} date={article.date} cover={article.cover} content={article.content} />
    </main>
    <SiteFooter />
    </>
  );
}
