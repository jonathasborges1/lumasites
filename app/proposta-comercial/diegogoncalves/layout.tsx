import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-diego-body",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-diego-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Proposta Comercial | Diego Gonçalves Advocacia Criminal — Luma Sites",
  description:
    "Diagnóstico, direção estratégica, conceito visual, escopo e investimento para o novo site do Dr. Diego Gonçalves — advocacia criminal especializada em Manaus/AM.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Proposta Comercial | Diego Gonçalves Advocacia Criminal",
    description:
      "Uma proposta da Luma Sites para elevar a presença digital do Dr. Diego Gonçalves ao nível de sua autoridade de 23 milhões de seguidores.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/diegogoncalves/diego-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Proposta comercial para o novo site de Diego Gonçalves Advocacia Criminal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proposta Comercial | Diego Gonçalves Advocacia Criminal",
    description: "Diagnóstico, conceito visual, escopo e investimento para o novo site.",
    images: ["/images/diegogoncalves/diego-hero.jpg"],
  },
};

export default function DiegoGoncalvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${poppins.variable} ${cormorant.variable}`}>
      {children}
    </div>
  );
}
