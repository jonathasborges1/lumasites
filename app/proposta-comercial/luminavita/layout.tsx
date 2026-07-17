import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumina Vita Finance — Prévia Conceitual | Mentoria Simples Assim",
  description:
    "Prévia conceitual de landing page para a Lumina Vita Finance: mentoria premium para empresários e CEOs que buscam clareza financeira, estrutura de processos e gestão estratégica.",
  alternates: {
    canonical: "/proposta-comercial/luminavita",
  },
  openGraph: {
    title: "Lumina Vita Finance — Prévia Conceitual",
    description:
      "Landing page conceitual para a Lumina Vita Finance — Método SIMPLES, jornada em 5 fases e aplicação para empresários acima de R$ 5M/ano.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/luminavita/og-luminavita.png",
        width: 1200,
        height: 630,
        alt: "Lumina Vita Finance — O crescimento da sua empresa não precisa custar a sua paz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Vita Finance — Prévia Conceitual",
    description: "Mentoria premium de clareza financeira e gestão estratégica para empresários e CEOs.",
    images: ["/images/luminavita/og-luminavita.png"],
  },
};

export default function LuminaVitaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <style>{`
        [aria-label="Criar meu site com a Luma Sites"],
        .proposal-back-link {
          display:none!important;
        }
      `}</style>
      {children}
    </div>
  );
}
