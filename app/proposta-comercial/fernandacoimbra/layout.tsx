import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { fernandaCoimbra } from "./fernandacoimbra.data";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--fc-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--fc-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${fernandaCoimbra.name} | Direito Médico e da Saúde`,
  description:
    "Atuação em Direito Médico e da Saúde para pacientes, familiares, profissionais e instituições. Atendimento em Contagem e Minas Gerais.",
  keywords: [
    "advogada direito médico Contagem",
    "advogada direito da saúde MG",
    "plano de saúde Contagem",
    "defesa profissional da saúde",
    "consultoria jurídica para clínicas",
    "Fernanda Coimbra advogada",
  ],
  alternates: {
    canonical: "/proposta-comercial/fernandacoimbra",
  },
  openGraph: {
    title: `${fernandaCoimbra.name} | Direito Médico e da Saúde`,
    description:
      "Clareza jurídica para pacientes, familiares, profissionais e instituições de saúde.",
    locale: "pt_BR",
    type: "website",
    url: "/proposta-comercial/fernandacoimbra",
    images: [
      {
        url: fernandaCoimbra.portrait,
        width: 864,
        height: 1184,
        alt: fernandaCoimbra.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${fernandaCoimbra.name} | Direito Médico e da Saúde`,
    description:
      "Clareza jurídica para pacientes, familiares, profissionais e instituições de saúde.",
    images: [fernandaCoimbra.portrait],
  },
};

export default function FernandaCoimbraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${heading.variable} ${body.variable}`}>
      <style>{`
        [aria-label="Criar meu site com a Luma Sites"],
        [aria-label="Falar com a Luma Sites pelo WhatsApp"] {
          display: none !important;
        }
      `}</style>
      {children}
    </div>
  );
}
