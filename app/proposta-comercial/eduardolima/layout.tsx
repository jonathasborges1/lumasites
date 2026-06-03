import { Cormorant_Garamond, Montserrat } from "next/font/google";
import type { Metadata } from "next";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--el-heading",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--el-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eduardo Lima | Advogado — Consultoria Jurídica e Advocacia",
  description:
    "Advogado em Juiz de Fora e Lima Duarte/MG. Atendimento em Direito Trabalhista, Cível, Família, Previdenciário (BPC, Auxílio Acidente, Salário Maternidade), Penal e Advocacia Extrajudicial. OAB/MG 246.863.",
  keywords:
    "advogado Juiz de Fora, advogado Lima Duarte, advogado trabalhista Juiz de Fora, advogado cível Juiz de Fora, advogado família Juiz de Fora, advogado previdenciário, BPC advogado, advogado penal Juiz de Fora, consultoria jurídica Juiz de Fora, Eduardo Lima advogado OAB/MG 246.863",
  openGraph: {
    title: "Eduardo Lima | Advogado — Consultoria Jurídica e Advocacia",
    description:
      "Advogado em Juiz de Fora/MG. Trabalhista, Cível, Família, Previdenciário, Penal e Extrajudicial. OAB/MG 246.863.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/eduardolima/eduardo-lima-advogado-juiz-de-fora-hero.jpeg",
        width: 853,
        height: 1280,
        alt: "Eduardo Lima — Advogado em Juiz de Fora/MG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Lima | Advogado — Consultoria Jurídica e Advocacia",
    description:
      "Advogado em Juiz de Fora/MG. Trabalhista, Cível, Família, Previdenciário, Penal e Extrajudicial. OAB/MG 246.863.",
    images: ["/images/eduardolima/eduardo-lima-advogado-juiz-de-fora-hero.jpeg"],
  },
};

export default function EduardoLimaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${cormorant.variable} ${montserrat.variable}`}>
      <style>{`[aria-label="Criar meu site com a Luma Sites"]{display:none!important}`}</style>
      {children}
    </div>
  );
}
