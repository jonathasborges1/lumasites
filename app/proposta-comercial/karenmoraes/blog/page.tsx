import Link from "next/link";
import { listPublishedArticles } from "@/lib/karenmoraes/blog";
import { KM_COLORS, KM_FONT_BODY, KM_FONT_HEADING } from "@/lib/karenmoraes/theme";
import SiteHeader from "@/components/karenmoraes/SiteHeader";
import SiteFooter from "@/components/karenmoraes/SiteFooter";

export const metadata = {
  title: "Blog | Dra. Karen Moraes",
  description: "Artigos sobre Direito de Família e Sucessões da Dra. Karen Moraes.",
};

// Cache curto no lugar de gerar a página só no build — publicar/editar já
// invalida esse cache na hora (revalidatePath), então isso só cobre o pior caso.
export const revalidate = 60;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function BlogIndexPage() {
  const articles = await listPublishedArticles();

  return (
    <>
    <SiteHeader />
    <main style={{ background: KM_COLORS.rose, minHeight: "100vh", padding: "64px 24px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <h1 style={{ fontFamily: KM_FONT_HEADING, color: KM_COLORS.wineDark, fontSize: 40, marginBottom: 8 }}>
          Blog
        </h1>
        <p style={{ fontFamily: KM_FONT_BODY, color: KM_COLORS.muted, marginBottom: 40 }}>
          Artigos sobre Direito de Família e Sucessões.
        </p>

        {articles.length === 0 && (
          <p style={{ fontFamily: KM_FONT_BODY, color: KM_COLORS.muted }}>Nenhum artigo publicado ainda.</p>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/proposta-comercial/karenmoraes/blog/${article.slug}`}
              style={{
                display: "block",
                background: KM_COLORS.white,
                border: `1px solid ${KM_COLORS.border}`,
                borderRadius: 12,
                padding: 24,
                textDecoration: "none",
              }}
            >
              <span style={{ fontFamily: KM_FONT_BODY, fontSize: 13, color: KM_COLORS.gold, textTransform: "uppercase", letterSpacing: 1 }}>
                {formatDate(article.date)}
              </span>
              <h2 style={{ fontFamily: KM_FONT_HEADING, color: KM_COLORS.wineDark, fontSize: 24, margin: "8px 0" }}>
                {article.title}
              </h2>
              <p style={{ fontFamily: KM_FONT_BODY, color: KM_COLORS.text, margin: 0 }}>{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
    <SiteFooter />
    </>
  );
}
