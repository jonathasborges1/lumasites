import { readdirSync } from "fs";
import path from "path";
import type { Metadata } from "next";
import type { ProposalMeta, ProposalWithSlug } from "./types";
import { ProposalGrid } from "./ProposalGrid";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Portfólio de Sites | Luma Sites",
  description:
    "Veja exemplos reais de sites criados pela Luma Sites para advogados, personal trainers, corretores e outros profissionais. Criação de sites em Manaus e todo o Brasil.",
};

async function loadProposals(): Promise<ProposalWithSlug[]> {
  const baseDir = path.join(process.cwd(), "app", "proposta-comercial");

  let slugs: string[] = [];
  try {
    slugs = readdirSync(baseDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
  } catch {
    return [];
  }

  const proposals: ProposalWithSlug[] = [];

  for (const slug of slugs) {
    try {
      // webpack bundles all ./*/metadata files; fs gives us which slugs exist at runtime
      const mod = (await import(`./${slug}/metadata`)) as { default: ProposalMeta };
      proposals.push({ ...mod.default, slug });
    } catch {
      // folder has no metadata.ts — skip silently
    }
  }

  return proposals.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export default async function ProposalsIndexPage() {
  const proposals = await loadProposals();

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfólio de Sites — Luma Sites",
    description:
      "Sites criados pela Luma Sites para clientes em todo o Brasil.",
    url: `${site.url}/proposta-comercial`,
    numberOfItems: proposals.length,
    itemListElement: proposals.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.clientName,
      description: p.tagline,
      url: `${site.url}/proposta-comercial/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
      <ProposalGrid proposals={proposals} />
    </>
  );
}
