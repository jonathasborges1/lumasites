import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { site } from "@/content/site";

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
    slug: "criacao-de-sites-em-manaus",
    title: "Criação de Sites em Manaus: Guia Completo para Pequenos Negócios",
    description:
      "Tudo que você precisa saber antes de contratar um site em Manaus: tipos de site, preços, o que perguntar e como escolher a agência certa para o seu negócio.",
    date: "2026-04-23",
    dateLabel: "23 de abril de 2026",
    readTime: "8 min",
    tags: ["Sites", "Manaus", "Negócios Locais"],
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-midnight pt-32 pb-24">
        {/* Cabeçalho da página */}
        <section className="container mx-auto px-5 md:px-8 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-white/8 bg-surface/60 px-4 py-1.5">
              <BookOpen size={14} className="text-glow-aqua" />
              <span className="font-display text-xs uppercase tracking-[0.3em] text-ink-primary/80">
                Blog
              </span>
            </div>

            <h1 className="font-display uppercase text-4xl md:text-5xl text-ink-primary leading-tight mb-4">
              Presença digital{" "}
              <span className="text-glow-aqua">que funciona</span>
            </h1>

            <p className="text-ink-secondary text-lg md:text-xl leading-relaxed max-w-2xl">
              Artigos práticos sobre criação de sites, presença online e
              crescimento digital para pequenos negócios em{" "}
              <span className="text-ink-primary">Manaus</span>.
            </p>
          </div>
        </section>

        {/* Lista de artigos */}
        <section className="container mx-auto px-5 md:px-8">
          <div className="grid gap-6 md:gap-8 max-w-4xl">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group relative rounded-2xl border border-white/8 bg-surface/40 hover:bg-surface/70 hover:border-white/16 transition-all duration-300 overflow-hidden"
              >
                {/* linha decorativa no topo */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-glow-aqua/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-6 md:p-8">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-display text-[10px] uppercase tracking-[0.25em] text-glow-aqua border border-glow-aqua/30 rounded-full px-2.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-ink-muted text-xs">
                      {post.dateLabel}
                    </span>
                    <span className="text-ink-muted text-xs">
                      · {post.readTime} de leitura
                    </span>
                  </div>

                  {/* Título */}
                  <h2 className="font-display text-xl md:text-2xl text-ink-primary mb-3 leading-snug group-hover:text-glow-aqua transition-colors duration-300">
                    {post.title}
                  </h2>

                  {/* Resumo */}
                  <p className="text-ink-secondary leading-relaxed mb-6">
                    {post.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.2em] text-glow-aqua hover:text-ink-primary transition-colors duration-200"
                  >
                    Ler artigo
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
