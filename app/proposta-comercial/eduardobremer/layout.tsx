import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--eb-heading",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--eb-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Eduardo Bremer | Advocacia Criminal, Cível, Trabalhista e Previdenciária",
  description:
    "Prévia conceitual de proposta comercial para Dr. Eduardo Bremer, advogado OAB/ES 37.747 e OAB/BA 83.916, com atendimento em Mucuri/BA, Vitória/ES e online.",
  openGraph: {
    title: "Dr. Eduardo Bremer | Advocacia",
    description:
      "Prévia conceitual para uma presença digital jurídica clara, sóbria e orientada à conversão.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/eduardobremer/eduardo-bremer-advogado-04.jpg",
        width: 1200,
        height: 813,
        alt: "Dr. Eduardo Bremer, advogado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Eduardo Bremer | Advocacia",
    description:
      "Prévia conceitual para uma presença digital jurídica clara, sóbria e orientada à conversão.",
    images: ["/images/eduardobremer/eduardo-bremer-advogado-04.jpg"],
  },
};

export default function EduardoBremerLayout({
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
