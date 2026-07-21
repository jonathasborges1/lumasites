import { Playfair_Display, Inter } from "next/font/google";
import type { Metadata } from "next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--km-font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--km-font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Proposta | Dra. Karen Moraes — Família & Sucessões",
  description:
    "Proposta comercial do site institucional da Dra. Karen Moraes, advogada especialista em Direito de Família e Sucessões em Barra do Garças – MT.",
};

export default function KarenLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${playfair.variable} ${inter.variable}`} style={{ isolation: "isolate", colorScheme: "light" }}>
      {children}
    </div>
  );
}
