import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { site } from "@/content/site";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

export const metadata: Metadata = {
  title: `Blog sobre Sites Profissionais em Manaus | ${site.name}`,
  description:
    "Artigos práticos sobre criação de sites, presença digital e marketing para pequenos negócios em Manaus e no Amazonas.",
  alternates: { canonical: `${site.url}/blog` },
  openGraph: {
    title: `Blog sobre Sites Profissionais em Manaus | ${site.name}`,
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
    slug: "site-para-dentista-em-manaus",
    title: "Site para Dentista em Manaus: presença profissional para ser encontrado no Google",
    description:
      "Como dentistas e clínicas odontológicas em Manaus podem fortalecer a presença digital, aparecer nas buscas locais e gerar agendamentos qualificados com um site profissional.",
    publishedAt: "2026-05-13",
    publishedLabel: "13 de maio de 2026",
    updatedAt: null,
    updatedLabel: null,
    readTime: "10 min",
    tags: ["Odontologia", "SEO Local", "Manaus"],
    thumbnail: {
      src: "/blog/site-para-dentista-em-manaus.png",
      alt: "Dentista em consultório em Manaus com notebook mostrando presença profissional no Google",
      headline: "Site para Dentista em Manaus",
      subheadline: "Credibilidade, SEO local e mais pacientes pelo Google",
      hideTextOverlay: true,
    },
  },
  {
    slug: "site-para-medico-em-manaus",
    title: "Site para Médico em Manaus: presença profissional para ser encontrado no Google",
    description:
      "Como médicos e especialistas em Manaus podem fortalecer a presença digital, aparecer nas buscas locais e gerar agendamentos qualificados com um site profissional.",
    publishedAt: "2026-05-12",
    publishedLabel: "12 de maio de 2026",
    updatedAt: null,
    updatedLabel: null,
    readTime: "10 min",
    tags: ["Medicina", "SEO Local", "Manaus"],
    thumbnail: {
      src: "/blog/site-para-medico-em-manaus.png",
      alt: "Médico em consultório em Manaus com notebook mostrando presença profissional no Google",
      headline: "Site para Médico em Manaus",
      subheadline: "Credibilidade, SEO local e mais pacientes pelo Google",
      hideTextOverlay: true,
    },
  },
  {
    slug: "site-para-psicologo-em-manaus",
    title: "Site para Psicólogo em Manaus: como aparecer no Google com credibilidade",
    description:
      "Um guia para psicólogos e psicólogas de Manaus entenderem como um site profissional ajuda na presença digital, SEO local e geração de contatos qualificados.",
    publishedAt: "2026-05-09",
    publishedLabel: "9 de maio de 2026",
    updatedAt: null,
    updatedLabel: null,
    readTime: "11 min",
    tags: ["Psicologia", "SEO Local", "Manaus"],
    thumbnail: {
      src: "/blog/site-para-psicologo-em-manaus.png",
      alt: "Psicóloga em Manaus usando notebook para fortalecer presença profissional no Google",
      headline: "Site para Psicólogo em Manaus",
      subheadline: "Credibilidade, SEO local e mais contatos pelo Google",
      hideTextOverlay: true,
    },
  },
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
    thumbnail: {
      src: "/blog/cliente-no-google-manaus.png",
      alt: "Painel de busca local no Google para negócios em Manaus",
      headline: "Seu Cliente Está no Google",
      subheadline: "SEO local para ser encontrado em Manaus",
      hideTextOverlay: true,
    },
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
    thumbnail: {
      src: "/blog/site-para-advogados-em-manaus.png",
      alt: "Notebook exibindo site profissional para advogado em Manaus",
      headline: "Site para Advogados em Manaus",
      subheadline: "Credibilidade, sobriedade e contatos qualificados",
    },
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
    thumbnail: {
      src: "/blog/criacao-de-sites-em-manaus.png",
      alt: "Workspace moderno com telas de site profissional e SEO local em Manaus",
      headline: "Criação de Sites em Manaus",
      subheadline: "Projetos rápidos, profissionais e prontos para o Google",
      hideTextOverlay: true,
    },
  },
];

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = posts;

  return (
    <>
      <Header />

      <main className="min-h-screen bg-midnight pt-32 pb-24">
        <section className="container mx-auto mb-14 px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
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

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink-secondary md:text-xl">
              Artigos práticos sobre criação de sites, presença online e crescimento digital para
              pequenos negócios em <span className="text-ink-primary">Manaus</span>.
            </p>
          </div>
        </section>

        {/* ── FEATURED POST ── */}
        <section className="container mx-auto mb-12 px-5 md:px-8 lg:px-12 xl:px-20">
          <div className="mb-5 flex items-center gap-3">
            <Sparkles size={14} className="text-accent-amber" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-accent-amber">
              Em destaque
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-accent-amber/40 to-transparent" />
          </div>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group relative grid overflow-hidden rounded-2xl border border-white/10 bg-surface/40 transition-all duration-300 hover:border-glow-aqua/30 hover:bg-surface/60 lg:grid-cols-[1.15fr_1fr]"
          >
            <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-glow-aqua/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative aspect-[7/4] overflow-hidden border-b border-white/8 lg:border-b-0 lg:border-r">
              <Image
                src={featuredPost.thumbnail.src}
                alt={featuredPost.thumbnail.alt}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                priority
              />
            </div>

            <div className="flex flex-col justify-center p-6 md:p-10">
              <div className="mb-4 flex flex-wrap gap-2">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-glow-aqua/30 px-2.5 py-0.5 font-display text-[10px] uppercase tracking-[0.2em] text-glow-aqua"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h2 className="mb-4 font-display text-2xl leading-snug text-ink-primary transition-colors duration-300 group-hover:text-glow-aqua md:text-3xl">
                {featuredPost.title}
              </h2>

              <p className="mb-6 text-base leading-relaxed text-ink-secondary md:text-lg">
                {featuredPost.description}
              </p>

              <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-muted">
                <span>Publicado em {featuredPost.publishedLabel}</span>
                {featuredPost.updatedLabel && (
                  <span>· Atualizado em {featuredPost.updatedLabel}</span>
                )}
                <span>· {featuredPost.readTime} de leitura</span>
              </div>

              <span className="inline-flex items-center gap-2 font-display text-sm uppercase tracking-[0.2em] text-glow-aqua transition-colors duration-200 group-hover:text-ink-primary">
                Ler artigo completo
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </section>

        {/* ── DEMAIS POSTS ── */}
        <section className="container mx-auto px-5 md:px-8 lg:px-12 xl:px-20">
          <div className="mb-5 flex items-center gap-3">
            <span className="font-display text-xs uppercase tracking-[0.3em] text-ink-muted">
              Mais artigos
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative flex min-h-[460px] flex-col overflow-hidden rounded-xl border border-white/8 bg-surface/40 transition-all duration-300 hover:border-white/16 hover:bg-surface/70"
              >
                <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-glow-aqua/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {post.thumbnail ? (
                  <div className="relative h-56 overflow-hidden border-b border-white/8 sm:h-60">
                    <Image
                      src={post.thumbnail.src}
                      alt={post.thumbnail.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className={`object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
                        post.thumbnail.hideTextOverlay ? "object-top" : ""
                      }`}
                    />
                    {!post.thumbnail.hideTextOverlay && (
                      <>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-midnight/92 via-midnight/55 to-midnight/5" />
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <p className="mb-2 font-display text-[10px] uppercase tracking-[0.28em] text-accent-amber">
                            Guia local
                          </p>
                          <p className="max-w-xs font-display text-lg uppercase leading-tight text-ink-primary">
                            {post.thumbnail.headline}
                          </p>
                          <p className="mt-2 max-w-[15rem] text-xs leading-relaxed text-ink-secondary">
                            {post.thumbnail.subheadline}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="border-b border-white/8 bg-deep-blue/30 p-5">
                    <p className="font-display text-xs uppercase tracking-[0.28em] text-ink-muted">
                      Artigo
                    </p>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-glow-aqua/30 px-2.5 py-0.5 font-display text-[10px] uppercase tracking-[0.2em] text-glow-aqua"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="mb-3 font-display text-lg leading-snug text-ink-primary transition-colors duration-300 group-hover:text-glow-aqua md:text-xl">
                    {post.title}
                  </h2>

                  <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-ink-secondary">
                    {post.description}
                  </p>

                  <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-muted">
                    <span>{post.publishedLabel}</span>
                    <span>· {post.readTime}</span>
                  </div>

                  <span className="mt-auto inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.2em] text-glow-aqua transition-colors duration-200 group-hover:text-ink-primary">
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
