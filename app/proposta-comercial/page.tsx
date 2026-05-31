import { readdirSync } from "fs";
import path from "path";
import type { Metadata } from "next";
import type { ProposalMeta, ProposalWithSlug } from "./types";
import { ProposalGrid } from "./ProposalGrid";

export const metadata: Metadata = {
  title: "Portfólio de Sites | Luma Sites",
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
  return <ProposalGrid proposals={proposals} />;
}
