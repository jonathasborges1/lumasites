import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Finca | Restaurante Colombiano e Peruano — Prévia Conceitual",
  description:
    "Prévia conceitual de landing page para o La Finca: restaurante colombiano e peruano em Manaus com ceviche mixto, lomo saltado, música ao vivo e pista de dança no bairro Dom Pedro.",
  openGraph: {
    title: "La Finca | Restaurante Colombiano e Peruano — Prévia Conceitual",
    description:
      "Landing page gastronômica vibrante, orientada a reservas pelo WhatsApp, para a maior casa latina de Manaus.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "La Finca | Restaurante Colombiano e Peruano — Prévia Conceitual",
    description:
      "Landing page gastronômica vibrante, orientada a reservas pelo WhatsApp, para a maior casa latina de Manaus.",
  },
};

export default function LaFincaLayout({
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
