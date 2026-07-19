import { readdirSync } from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import type { ProposalMeta, ProposalWithSlug } from "./types";
import { ProposalGrid } from "./ProposalGrid";
import { site } from "@/content/site";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  title: "Portfólio de Sites Profissionais | Agência de Sites em Manaus",
  description:
    "Sites criados pela Luma Sites para advocacia, segurança veicular, imobiliário, beleza e marketing — em Manaus e em todo o Brasil. Veja os projetos e os bastidores de cada um.",
  alternates: {
    canonical: `${site.url}/proposta-comercial`,
  },
  openGraph: {
    type: "website",
    url: "/proposta-comercial",
    title: "Portfólio de Sites Profissionais | Luma Sites — Manaus",
    description:
      "Estratégia, design e desenvolvimento para apresentar o seu negócio com a qualidade que ele merece.",
    images: [
      {
        url: "/og-proposta-comercial.jpg",
        width: 1200,
        height: 630,
        alt: "Luma Sites — Presença digital que inspira confiança",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio de Sites Profissionais | Luma Sites — Manaus",
    description:
      "Estratégia, design e desenvolvimento para apresentar o seu negócio com a qualidade que ele merece.",
    images: ["/og-proposta-comercial.jpg"],
  },
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

const caseStudies = [
  {
    client: "GeraSeg — Rastreamento Veicular",
    sector: "Segurança veicular",
    challenge:
      "Empresa de rastreamento, monitoramento de frotas e videomonitoramento que precisava de uma presença digital à altura da seriedade do serviço — segurança se vende com confiança, não com improviso.",
    approach:
      "Direção visual sóbria em tons escuros, arquitetura de conteúdo por serviço (rastreamento, frotas, videomonitoramento) e caminho direto para contato comercial via WhatsApp em todas as seções.",
  },
  {
    client: "Rodrigues e Castro Advocacia",
    sector: "Jurídico — Manaus/AM",
    challenge:
      "Escritório de advocacia cível, trabalhista e do consumidor em Manaus que precisava transmitir credibilidade dentro das normas de publicidade da OAB, sem linguagem comercial agressiva.",
    approach:
      "Comunicação institucional sóbria, páginas por área de atuação para as buscas locais, identificação completa com OAB e política de privacidade — estrutura pensada para converter a pesquisa pelo nome em contato.",
  },
  {
    client: "Bristol Reserva Inglesa",
    sector: "Imobiliário — Ponta Negra, Manaus/AM",
    challenge:
      "Pré-venda de empreendimento imobiliário premium na Ponta Negra com plantas de 97m² a 253m², exigindo apresentação visual à altura do padrão do produto.",
    approach:
      "Proposta visual premium com direção de arte própria, apresentação de plantas e coberturas duplex e narrativa de página única focada em despertar o interesse do comprador de alto padrão.",
  },
  {
    client: "Future Ads Digital",
    sector: "Marketing digital — Manaus/AM",
    challenge:
      "Produtora audiovisual e assessoria de performance com mais de R$ 2 milhões em verba gerenciada, precisando de um site que comprovasse autoridade para fechar contratos maiores.",
    approach:
      "Estrutura orientada a prova: números de retenção e verba em destaque, showreel audiovisual e jornada de contato pensada para decisores de marketing.",
  },
];

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
      <ProposalGrid proposals={proposals}>
        {/* ── Bastidores dos projetos (conteúdo indexável) ── */}
        <section className="relative mx-auto max-w-6xl px-5 pb-20 md:px-8 lg:px-12">
          <div className="border-t border-white/[0.07] pt-14">
            <div className="mb-3 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 font-display text-[10px] uppercase tracking-[0.22em] text-cyan-200">
              Bastidores
            </div>
            <h2
              className="mb-3 text-2xl font-bold text-white md:text-3xl"
              style={{ fontFamily: "var(--font-display, 'Cinzel', serif)" }}
            >
              Como cada projeto foi pensado
            </h2>
            <p className="mb-10 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base">
              A Luma Sites é uma agência de criação de sites com base em Manaus que atende
              negócios locais e clientes em todo o Brasil. Cada projeto parte do mesmo
              princípio: entender o desafio do negócio antes de desenhar qualquer tela. Estes
              são alguns bastidores de projetos do portfólio.
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              {caseStudies.map((cs) => (
                <article
                  key={cs.client}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6"
                >
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                    {cs.sector}
                  </p>
                  <h3 className="mb-4 text-lg font-semibold text-white">{cs.client}</h3>
                  <p className="mb-2 text-sm leading-relaxed text-slate-400">
                    <strong className="font-medium text-slate-300">Desafio:</strong>{" "}
                    {cs.challenge}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-400">
                    <strong className="font-medium text-slate-300">Abordagem:</strong>{" "}
                    {cs.approach}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8">
              <h2
                className="mb-3 text-xl font-bold text-white md:text-2xl"
                style={{ fontFamily: "var(--font-display, 'Cinzel', serif)" }}
              >
                Quer um projeto assim para o seu negócio?
              </h2>
              <p className="mb-5 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base">
                Trabalhamos com sites institucionais, landing pages e projetos com SEO local
                para quem quer ser encontrado no Google em Manaus. Conheça os formatos e
                valores ou fale direto com a gente pelo WhatsApp.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <Link
                  href="/"
                  className="font-medium text-cyan-300 transition-colors hover:text-white"
                >
                  Criar site em Manaus →
                </Link>
                <Link
                  href="/blog/quanto-custa-um-site-em-manaus"
                  className="font-medium text-cyan-300 transition-colors hover:text-white"
                >
                  Quanto custa um site? →
                </Link>
                <Link
                  href="/landing-page-manaus"
                  className="font-medium text-cyan-300 transition-colors hover:text-white"
                >
                  Landing page em Manaus →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ProposalGrid>
    </>
  );
}
