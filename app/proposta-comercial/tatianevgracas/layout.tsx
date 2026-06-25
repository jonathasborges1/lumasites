import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-tv-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-tv-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Proposta Comercial | Dra. Tatiane Vasconcelos — Luma Sites",
  description:
    "Diagnóstico, direção estratégica, conceito visual, escopo e investimento para o novo site institucional da Dra. Tatiane Vasconcelos das Graças.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Proposta Comercial | Dra. Tatiane Vasconcelos das Graças",
    description:
      "Uma proposta da Luma Sites para fortalecer a presença digital da Dra. Tatiane Vasconcelos — Advocacia Previdenciária e Trabalhista.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function TatianeVGracasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${playfair.variable}`}>
      {children}
    </div>
  );
}
