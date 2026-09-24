import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lm-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lm-body",
  display: "swap",
});

const OG_IMAGE_URL = "https://lumasites.com.br/psicologaluanamello/og-luana-mello-v2.jpg";

export const metadata: Metadata = {
  title: "Luana Mello | Psicologia do Trabalho, Psicanálise e RH",
  description:
    "Luana Mello — Psicóloga Clínica e do Trabalho (CRP 07/43831). Psicanálise, consultoria em RH e gestão de pessoas para profissionais e empresas em todo o Brasil.",
  alternates: {
    canonical: "https://lumasites.com.br/proposta-comercial/psicologaluanamello",
  },
  openGraph: {
    title: "Luana Mello | Psicologia do Trabalho, Psicanálise e RH",
    description:
      "Da clínica ao corporativo: psicanálise, saúde mental no trabalho e consultoria em gestão de pessoas.",
    type: "website",
    locale: "pt_BR",
    url: "https://lumasites.com.br/proposta-comercial/psicologaluanamello",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Prévia conceitual de Luana Mello — Psicóloga Clínica e do Trabalho",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luana Mello | Psicologia do Trabalho, Psicanálise e RH",
    description:
      "Da clínica ao corporativo: psicanálise, saúde mental no trabalho e consultoria em gestão de pessoas.",
    images: [OG_IMAGE_URL],
  },
  robots: { index: false, follow: false },
};

export default function PsicologaLuanaMelloLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        [aria-hidden="true"][class*="fixed top-0 inset-x-0"],
        [aria-hidden="true"][class*="pointer-events-none fixed top-0 left-0"] {
          display: none !important;
        }
      `}</style>
      <div className={`${display.variable} ${body.variable}`}>{children}</div>
    </>
  );
}
