import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import type { Metadata } from "next";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--gb-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--gb-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gisele Bicalho | Psicóloga Clínica — Psicoterapia Online",
  description:
    "Psicoterapia online com Gisele Bicalho, psicóloga clínica. TCC para adultos que desejam compreender emoções, vínculos e padrões de comportamento. CRP 04/31637.",
  keywords:
    "psicóloga online, psicoterapia online, terapia cognitivo-comportamental, TCC online, ansiedade online, psicóloga ansiedade, terapia online maturidade emocional, psicóloga Nova Serrana MG, Gisele Bicalho psicóloga",
  openGraph: {
    title: "Gisele Bicalho | Psicóloga Clínica — Psicoterapia Online",
    description:
      "Psicoterapia online com TCC para adultos. Um espaço de cuidado para compreender emoções, vínculos e padrões de comportamento. CRP 04/31637.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/giselebicalho/gisele-hero-ai.png",
        width: 1080,
        height: 1080,
        alt: "Gisele Bicalho - Psicoterapia online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gisele Bicalho | Psicóloga Clínica — Psicoterapia Online",
    description:
      "Psicoterapia online com TCC para adultos. Um espaço de cuidado para compreender emoções, vínculos e padrões de comportamento. CRP 04/31637.",
    images: ["/images/giselebicalho/gisele-hero-ai.png"],
  },
};

export default function GiseleBicalhoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${cormorant.variable} ${dmSans.variable}`}>
      <style>{`[aria-label="Criar meu site com a Luma Sites"]{display:none!important}`}</style>
      {children}
    </div>
  );
}
