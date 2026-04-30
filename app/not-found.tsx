import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "O endereço que você tentou acessar não existe no site da Luma Sites.",
  alternates: { canonical: `${site.url}/404` },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 text-center bg-midnight text-ink-primary">
      <p className="font-display text-6xl md:text-8xl font-bold text-glow-aqua tracking-widest">
        404
      </p>
      <h1 className="mt-4 text-xl md:text-2xl font-display uppercase tracking-[0.2em]">
        Página não encontrada
      </h1>
      <p className="mt-3 text-sm text-ink-secondary max-w-sm leading-relaxed">
        O endereço que você tentou acessar não existe. Verifique o link ou volte para o início.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 font-display text-xs uppercase tracking-[0.2em] border border-glow-aqua text-glow-aqua hover:bg-glow-cyan/10 transition-colors"
        >
          Voltar para o início
        </Link>
        <Link
          href="/blog"
          className="px-6 py-3 font-display text-xs uppercase tracking-[0.2em] text-ink-secondary hover:text-glow-aqua transition-colors"
        >
          Ver o Blog
        </Link>
      </div>
    </main>
  );
}
