import { Cormorant_Garamond, Raleway } from "next/font/google";
import type { Metadata } from "next";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--ts-heading",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--ts-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Thais Souza | Cirurgiã Plástica — Visconde do Rio Branco, MG",
  description:
    "Dra. Thais Souza é cirurgiã plástica membro da SBCP, com formação pela UFMG. Especializada em lipoabdominoplastia, lipoescultura, mamoplastia e mastopexia em Visconde do Rio Branco, MG.",
  keywords:
    "cirurgiã plástica Visconde do Rio Branco, cirurgia plástica Zona da Mata MG, lipoabdominoplastia MG, lipoescultura, mamoplastia de aumento, mastopexia, SBCP, Dra Thais Souza",
  openGraph: {
    title: "Dra. Thais Souza | Cirurgiã Plástica — Membro SBCP",
    description:
      "Cirurgia plástica de alto padrão em Visconde do Rio Branco, MG. Membro da SBCP, formação UFMG. Lipoabdominoplastia, mamoplastia, mastopexia e mais.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/thaissasouza/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dra. Thais Souza — Cirurgiã Plástica em Visconde do Rio Branco, MG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Thais Souza | Cirurgiã Plástica — Membro SBCP",
    description:
      "Cirurgia plástica de alto padrão em Visconde do Rio Branco, MG. Membro da SBCP, formação UFMG.",
    images: ["/images/thaissasouza/og-image.jpg"],
  },
};

export default function ThaisSouzaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${cormorant.variable} ${raleway.variable}`}>
      <style>{`[aria-label="Criar meu site com a Luma Sites"]{display:none!important}`}</style>
      {children}
    </div>
  );
}
