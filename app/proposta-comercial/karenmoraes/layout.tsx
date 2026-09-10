import { Bodoni_Moda, Outfit } from "next/font/google";
import type { Metadata } from "next";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--km-font-heading",
  display: "swap",
});

const outfit = Outfit({
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
    <div className={`${bodoniModa.variable} ${outfit.variable}`} style={{ isolation: "isolate", colorScheme: "light" }}>
      {children}
    </div>
  );
}
