import { Poppins } from "next/font/google";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--fad-font",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Proposta | Future Ads Digital — Produção Audiovisual & Performance",
  description:
    "Proposta comercial da Future Ads Digital. Produção audiovisual estratégica, criativos de alta conversão e campanhas de tráfego pago para marcas que querem crescer.",
  robots: { index: false, follow: false },
};

export default function FutureAdsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={poppins.variable} style={{ isolation: "isolate" }}>
      {children}
    </div>
  );
}
