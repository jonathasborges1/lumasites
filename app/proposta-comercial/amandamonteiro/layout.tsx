import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-am-display",
  display: "swap",
});

const body = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-am-body",
  display: "swap",
});

const OG_IMAGE_URL = "https://lumasites.com.br/amandamonteiro/og-amanda-monteiro.jpg";
const PAGE_URL = "https://lumasites.com.br/proposta-comercial/amandamonteiro";

export const metadata: Metadata = {
  title: "Amanda Monteiro | Psicóloga em Manaus · Saúde Mental da Mulher",
  description:
    "Amanda Monteiro, Psicóloga (CRP 20/14136). Psicoterapia em TCC para mulheres adultas, online e presencial em Ponta Negra, Manaus, e avaliação de riscos psicossociais (NR-1) para empresas.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Amanda Monteiro | Psicóloga · Saúde Mental da Mulher",
    description:
      "Quando a cabeça não desliga, o cansaço vira rotina. Psicoterapia para mulheres adultas, online e presencial.",
    type: "website",
    locale: "pt_BR",
    url: PAGE_URL,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Prévia conceitual de Amanda Monteiro, Psicóloga",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanda Monteiro | Psicóloga · Saúde Mental da Mulher",
    description:
      "Ciência para orientar, conforto para acolher e presença para caminhar junto.",
    images: [OG_IMAGE_URL],
  },
  robots: { index: false, follow: false },
};

export default function AmandaMonteiroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
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
