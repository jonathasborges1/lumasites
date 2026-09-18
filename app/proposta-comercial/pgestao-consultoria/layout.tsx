import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prévia conceitual | P Gestão & Consultoria",
  description: "Uma proposta de página de vendas para as planilhas financeiras da P Gestão & Consultoria.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Prévia conceitual | P Gestão & Consultoria",
    description: "Planilhas financeiras para organizar seus números e decidir com mais clareza.",
    url: "https://lumasites.com.br/proposta-comercial/pgestao-consultoria",
    siteName: "P Gestão & Consultoria — prévia conceitual",
    type: "website",
    locale: "pt_BR",
    images: [{
      url: "/pgestao-consultoria/og-image.png",
      width: 1200,
      height: 630,
      alt: "Prévia conceitual da página de planilhas financeiras da P Gestão & Consultoria",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prévia conceitual | P Gestão & Consultoria",
    description: "Planilhas financeiras para organizar seus números e decidir com mais clareza.",
    images: ["/pgestao-consultoria/og-image.png"],
  },
};

export default function PGestaoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        html, body {
          overflow-x: clip !important;
        }
        .proposal-back-link,
        [aria-label="Criar meu site com a Luma Sites"] {
          display: none !important;
        }
      `}</style>
      {children}
    </>
  );
}
