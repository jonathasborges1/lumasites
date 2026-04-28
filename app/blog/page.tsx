import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { site } from "@/content/site";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

export const metadata: Metadata = {
  title: `Blog | ${site.name}`,
  description:
    "Artigos práticos sobre criação de sites, presença digital e marketing para pequenos negócios em Manaus e no Amazonas.",
  alternates: { canonical: `${site.url}/blog` },
  openGraph: {
    title: `Blog | ${site.name}`,
    description:
      "Artigos práticos sobre criação de sites, presença digital e marketing para pequenos negócios em Manaus e no Amazonas.",
    url: `${site.url}/blog`,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
  },
};

const posts = [
  {
    slug: "como-aparecer-no-google-em-manaus",
    title: "Seu cliente está no Google. A pergunta é: ele encontra você?",
    description:
      "O que o Google considera para mostrar negócios locais, por que tantos negócios em Manaus ficam invisíveis nas buscas e um checklist prático para mudar isso hoje.",
    publishedAt: "2026-04-28",
    publishedLabel: "28 de abril de 2026",
    updatedAt: null,
    updatedLabel: null,
    readTime: "7 min",
    tags: ["Google", "SEO Local", "Manaus"],
  },
  {
    slug: "site-para-advogados-em-manaus",
    title: "Site para Advogados em Manaus: como gerar confiança e mais consultas",
    description:
      "Um guia prático para advogados e escritórios de Manaus entenderem estrutura, SEO local, comunicação sóbria e o que avaliar antes de contratar um site jurídico.",
    publishedAt: "2026-04-23",
    publishedLabel: "23 de abril de 2026",
    updatedAt: "2026-04-26",
    updatedLabel: "26 de abril de 2026",
    readTime: "9 min",
    tags: ["Advocacia", "SEO Local", "Manaus"],
  },
  {
    slug: "criacao-de-sites-em-manaus",
    title: "Criação de Sites em Manaus: guia completo para pequenos negócios",
    description:
      "Tudo que você precisa saber antes de contratar um site em Manaus: tipos de site, preços, o que perguntar e como escolher a agência certa para o seu negócio.",
    publishedAt: "2026-04-23",
    publishedLabel: "23 de abril de 2026",
    updatedAt: null,
    updatedLabel: null,
    readTime: "8 min",
    tags: ["Sites", "Manaus", "Negócios Locais"],
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-midnight pt-32 pb-24">
        <section className="container mx-auto mb-16 px-5 md:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/8 bg-surface/60 px-4 py-1.5">
              <BookOpen size={14} className="text-glow-aqua" />
              <span className="font-display text-xs uppercase tracking-[0.3em] text-ink-primary/80">
                Blog
              </span>
            </div>

            <h1 className="mb-4 font-display text-4xl uppercase leading-tight text-ink-primary md:text-5xl">
              Presença digital{" "}
              <span className="text-glow-aqua">que funciona</span>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-ink-secondary md:text-xl">
              Artigos práticos sobre criação de sites, presença online e crescimento digital para
              pequenos negócios em <span className="text-ink-primary">Manaus</span>.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-5 md:px-8 lg:px-12 xl:px-20">
          <div className="grid max-w-4xl gap-6 md:gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-surface/40 transition-all duration-300 hover:border-white/16 hover:bg-surface/70"
              >
                <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-glow-aqua/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="p-6 md:p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-glow-aqua/30 px-2.5 py-0.5 font-display text-[10px] uppercase tracking-[0.25em] text-glow-aqua"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-xs text-ink-muted">
                      Publicado em {post.publishedLabel}
                    </span>
                    {post.updatedLabel && (
                      <span className="text-xs text-ink-muted">
                        Atualizado em {post.updatedLabel}
                      </span>
                    )}
                    <span className="text-xs text-ink-muted">· {post.readTime} de leitura</span>
                  </div>

                  <h2 className="mb-3 font-display text-xl leading-snug text-ink-primary transition-colors duration-300 group-hover:text-glow-aqua md:text-2xl">
                    {post.title}
                  </h2>

                  <p className="mb-6 leading-relaxed text-ink-secondary">{post.description}</p>

                  <span
                    className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.2em] text-glow-aqua transition-colors duration-200 group-hover:text-ink-primary"
                  >
                    Ler artigo
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
