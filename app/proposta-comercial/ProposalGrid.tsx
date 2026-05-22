"use client";

import { useMemo, useState } from "react";
import { ChevronRight, MapPin, Search, X, Zap } from "lucide-react";
import { LandingHeader } from "@/components/LandingHeader";
import { LandingFooter } from "@/components/LandingFooter";
import type { ProposalWithSlug } from "./types";

function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <Search
        size={17}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />
      <input
        type="text"
        placeholder="Buscar cliente, segmento ou cidade..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-14 w-full rounded-xl border border-white/[0.12] bg-white/[0.055] pl-11 pr-11 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all placeholder:text-slate-500 focus:border-cyan-400/[0.55] focus:bg-white/[0.075] focus:outline-none focus:ring-2 focus:ring-cyan-400/[0.10]"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Limpar busca"
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-white/[0.08] hover:text-white"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}

function ProposalCard({
  proposal: p,
  isLatest,
}: {
  proposal: ProposalWithSlug;
  isLatest: boolean;
}) {
  const dateLabel = new Date(p.createdAt + "T12:00:00").toLocaleDateString(
    "pt-BR",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
  );

  return (
    <a
      href={`/proposta-comercial/${p.slug}`}
      aria-label={`Abrir prévia conceitual de ${p.clientName}`}
      className="group relative flex min-h-[286px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_18px_70px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.24] hover:bg-white/[0.065] hover:shadow-[0_24px_90px_rgba(0,0,0,0.34)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 18% 0%, ${p.accentColor}2E 0%, transparent 34%)`,
        }}
      />
      <div
        className="relative h-[2px] w-full opacity-75 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: p.accentColor }}
      />

      <div className="relative flex flex-1 flex-col gap-5 p-5">
        <div className="flex flex-wrap items-center gap-1.5">
          <span
            className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]"
            style={{
              background: p.categoryColor + "22",
              color: p.categoryColor,
              border: `1px solid ${p.categoryColor}44`,
            }}
          >
            {p.category}
          </span>
          {isLatest && (
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-300">
              Mais recente
            </span>
          )}
        </div>

        <div>
          <h2
            className="mb-1.5 font-display text-[1.22rem] font-semibold leading-tight text-white transition-colors group-hover:text-cyan-50"
            style={{ letterSpacing: "0" }}
          >
            {p.clientName}
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-300/90">
            {p.tagline}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-2.5">
          <div className="flex items-start gap-2 text-sm leading-snug text-slate-400">
            <Zap size={15} className="mt-0.5 shrink-0 text-slate-500" />
            <span>{p.highlight}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={15} className="shrink-0 text-slate-500" />
            <span>{p.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.08] pt-3">
          <span className="text-xs tabular-nums text-slate-500">
            {dateLabel}
          </span>
          <span className="flex items-center gap-1 text-sm font-medium text-slate-400 transition-colors duration-200 group-hover:text-cyan-300">
            Ver proposta
            <ChevronRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </a>
  );
}

function EmptyState({ query }: { query: string }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
        <Search size={20} className="text-slate-500" />
      </div>
      <p className="mb-1 text-sm font-medium text-slate-400">
        Nenhum resultado para &ldquo;{query}&rdquo;
      </p>
      <p className="text-xs text-slate-600">Tente outro nome ou categoria</p>
    </div>
  );
}

export function ProposalGrid({ proposals }: { proposals: ProposalWithSlug[] }) {
  const [query, setQuery] = useState("");

  const latestSlug = proposals[0]?.slug ?? "";

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return proposals;
    return proposals.filter(
      (p) =>
        p.clientName.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q),
    );
  }, [proposals, query]);

  const countLabel =
    filtered.length === proposals.length
      ? `${proposals.length} proposta${proposals.length !== 1 ? "s" : ""}`
      : `${filtered.length} de ${proposals.length} proposta${
          proposals.length !== 1 ? "s" : ""
        }`;

  return (
    <>
      <LandingHeader />
      <main
        className="relative min-h-screen overflow-hidden"
        style={{ background: "var(--bg-midnight, #0a0e1a)" }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_50%_0%,rgba(79,200,255,0.16),transparent_52%)]" />

        <div className="relative border-b border-white/[0.07]">
          <div className="mx-auto max-w-6xl px-5 pb-9 pt-28 md:px-8 md:pt-32 lg:px-12">
            <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-display text-[10px] uppercase tracking-[0.22em] text-cyan-200">
              Área reservada
            </div>
            <h1
              className="mb-2 text-3xl font-bold text-white md:text-4xl"
              style={{ fontFamily: "var(--font-display, 'Cinzel', serif)" }}
            >
              Propostas Comerciais
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              Todos os projetos desenvolvidos pela equipe Luma Sites
            </p>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pb-2 pt-8 md:px-8 lg:px-12">
          <SearchBar value={query} onChange={setQuery} />
          <p className="mt-3 text-xs tabular-nums text-slate-500">
            {countLabel} encontrada{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.length === 0 ? (
              <EmptyState query={query} />
            ) : (
              filtered.map((p) => (
                <ProposalCard
                  key={p.slug}
                  proposal={p}
                  isLatest={p.slug === latestSlug}
                />
              ))
            )}
          </div>
        </div>
      </main>
      <LandingFooter />
    </>
  );
}
