"use client";

import { useMemo, useState } from "react";
import { ArrowUpDown, ChevronRight, MapPin, Search, X, Zap } from "lucide-react";
import { LandingHeader } from "@/components/LandingHeader";
import { LandingFooter } from "@/components/LandingFooter";
import type { ProposalWithSlug } from "./types";

/* ─── helpers ─────────────────────────────────────────────── */
function normalize(s: string) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

type SortMode = "date" | "az" | "za";

/* ─── SearchBar ────────────────────────────────────────────── */
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
        placeholder="Buscar cliente, serviço, cidade..."
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

/* ─── CategoryFilters ──────────────────────────────────────── */
function CategoryFilters({
  categories,
  active,
  total,
  onSelect,
}: {
  categories: { name: string; color: string; count: number }[];
  active: string | null;
  total: number;
  onSelect: (cat: string | null) => void;
}) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Filtrar por categoria"
    >
      {/* "Todos" pill */}
      <button
        type="button"
        onClick={() => onSelect(null)}
        className={[
          "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all",
          active === null
            ? "border-cyan-400/40 bg-cyan-400/15 text-cyan-300"
            : "border-white/[0.10] bg-white/[0.04] text-slate-400 hover:border-white/[0.20] hover:text-white",
        ].join(" ")}
      >
        Todos
        <span
          className={[
            "rounded-full px-1.5 py-0.5 text-[10px] tabular-nums",
            active === null
              ? "bg-cyan-400/20 text-cyan-200"
              : "bg-white/[0.06] text-slate-500",
          ].join(" ")}
        >
          {total}
        </span>
      </button>

      {/* Category pills */}
      {categories.map((cat) => {
        const isActive = active === cat.name;
        return (
          <button
            key={cat.name}
            type="button"
            onClick={() => onSelect(isActive ? null : cat.name)}
            className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all"
            style={
              isActive
                ? {
                    background: cat.color + "22",
                    color: cat.color,
                    borderColor: cat.color + "55",
                    boxShadow: `0 0 0 1px ${cat.color}18`,
                  }
                : {
                    background: "rgba(255,255,255,0.04)",
                    color: "#94a3b8",
                    borderColor: "rgba(255,255,255,0.10)",
                  }
            }
          >
            {cat.name}
            <span
              className="rounded-full px-1.5 py-0.5 text-[10px] tabular-nums"
              style={
                isActive
                  ? { background: cat.color + "22", color: cat.color }
                  : { background: "rgba(255,255,255,0.06)", color: "#64748b" }
              }
            >
              {cat.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ─── SortSelect ───────────────────────────────────────────── */
function SortSelect({
  value,
  onChange,
}: {
  value: SortMode;
  onChange: (v: SortMode) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-1.5 text-xs text-slate-500 transition-colors hover:text-slate-300">
      <ArrowUpDown size={13} />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortMode)}
        className="cursor-pointer appearance-none bg-transparent font-semibold text-inherit focus:outline-none"
        aria-label="Ordenar projetos"
      >
        <option value="date" className="bg-slate-900 text-white">
          Mais recentes
        </option>
        <option value="az" className="bg-slate-900 text-white">
          A → Z
        </option>
        <option value="za" className="bg-slate-900 text-white">
          Z → A
        </option>
      </select>
    </label>
  );
}

/* ─── ProposalCard ─────────────────────────────────────────── */
function ProposalCard({
  proposal: p,
  isLatest,
}: {
  proposal: ProposalWithSlug;
  isLatest: boolean;
}) {
  const dateLabel = new Date(p.createdAt + "T12:00:00").toLocaleDateString(
    "pt-BR",
    { day: "2-digit", month: "short", year: "numeric" },
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
            Ver projeto
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

/* ─── EmptyState ───────────────────────────────────────────── */
function EmptyState({
  query,
  activeCategory,
  onClear,
}: {
  query: string;
  activeCategory: string | null;
  onClear: () => void;
}) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/5">
        <Search size={20} className="text-slate-500" />
      </div>
      <p className="mb-1 text-sm font-medium text-slate-400">
        Nenhuma projeto encontrada
        {query && (
          <>
            {" "}
            para &ldquo;{query}&rdquo;
          </>
        )}
        {activeCategory && (
          <>
            {" "}
            na categoria{" "}
            <strong className="text-white">{activeCategory}</strong>
          </>
        )}
      </p>
      <p className="mb-4 text-xs text-slate-600">
        Tente outro termo ou remova os filtros ativos
      </p>
      <button
        type="button"
        onClick={onClear}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-white/[0.05] px-4 py-2 text-xs font-semibold text-slate-400 transition-colors hover:border-white/[0.22] hover:text-white"
      >
        <X size={12} /> Limpar filtros
      </button>
    </div>
  );
}

/* ─── ProposalGrid ─────────────────────────────────────────── */
export function ProposalGrid({ proposals }: { proposals: ProposalWithSlug[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortMode, setSortMode] = useState<SortMode>("date");

  /* latestSlug always from the original server-sorted list */
  const latestSlug = proposals[0]?.slug ?? "";

  /* derive unique categories with counts (always against full list) */
  const categories = useMemo(() => {
    const map = new Map<string, { color: string; count: number }>();
    for (const p of proposals) {
      const existing = map.get(p.category);
      if (existing) {
        existing.count++;
      } else {
        map.set(p.category, { color: p.categoryColor, count: 1 });
      }
    }
    return Array.from(map.entries())
      .map(([name, data]) => ({ name, ...data }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "pt-BR"));
  }, [proposals]);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());

    let result = proposals.filter((p) => {
      const matchesSearch =
        !q ||
        normalize(p.clientName).includes(q) ||
        normalize(p.tagline).includes(q) ||
        normalize(p.category).includes(q) ||
        normalize(p.location).includes(q) ||
        normalize(p.highlight).includes(q);

      const matchesCategory =
        !activeCategory ||
        normalize(p.category) === normalize(activeCategory);

      return matchesSearch && matchesCategory;
    });

    if (sortMode === "az")
      result = [...result].sort((a, b) =>
        a.clientName.localeCompare(b.clientName, "pt-BR"),
      );
    if (sortMode === "za")
      result = [...result].sort((a, b) =>
        b.clientName.localeCompare(a.clientName, "pt-BR"),
      );

    return result;
  }, [proposals, query, activeCategory, sortMode]);

  const hasActiveFilter = query.trim() !== "" || activeCategory !== null;

  const countLabel =
    filtered.length === proposals.length
      ? `${proposals.length} projeto${proposals.length !== 1 ? "s" : ""}`
      : `${filtered.length} de ${proposals.length} projeto${proposals.length !== 1 ? "s" : ""}`;

  function clearAll() {
    setQuery("");
    setActiveCategory(null);
  }

  return (
    <>
      <LandingHeader />
      <main
        className="relative min-h-screen overflow-hidden"
        style={{ background: "var(--bg-midnight, #0a0e1a)" }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_50%_0%,rgba(79,200,255,0.16),transparent_52%)]" />

        {/* ── header ── */}
        <div className="relative border-b border-white/[0.07]">
          <div className="mx-auto max-w-6xl px-5 pb-9 pt-28 md:px-8 md:pt-32 lg:px-12">
            <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-display text-[10px] uppercase tracking-[0.22em] text-cyan-200">
              Portfólio
            </div>
            <h1
              className="mb-2 text-3xl font-bold text-white md:text-4xl"
              style={{ fontFamily: "var(--font-display, 'Cinzel', serif)" }}
            >
              Sites Criados pela Luma Sites
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              Exemplos reais de sites entregues para advogados, personal trainers, corretores e outros profissionais em todo o Brasil.
            </p>
          </div>
        </div>

        {/* ── filters ── */}
        <div className="relative mx-auto max-w-6xl px-5 pt-8 md:px-8 lg:px-12">
          <SearchBar value={query} onChange={setQuery} />

          <div className="mt-4">
            <CategoryFilters
              categories={categories}
              active={activeCategory}
              total={proposals.length}
              onSelect={setActiveCategory}
            />
          </div>

          <div className="mt-4 flex items-center justify-between pb-2">
            <div className="flex items-center gap-3">
              <p className="text-xs tabular-nums text-slate-500">
                {countLabel} encontrada{filtered.length !== 1 ? "s" : ""}
              </p>
              {hasActiveFilter && (
                <button
                  type="button"
                  onClick={clearAll}
                  className="inline-flex items-center gap-1 text-xs text-slate-500 transition-colors hover:text-slate-300"
                >
                  <X size={11} /> Limpar filtros
                </button>
              )}
            </div>
            <SortSelect value={sortMode} onChange={setSortMode} />
          </div>
        </div>

        {/* ── grid ── */}
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.length === 0 ? (
              <EmptyState
                query={query}
                activeCategory={activeCategory}
                onClear={clearAll}
              />
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
