import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thiago Oliveira | Personal Trainer — Treino, Assessoria Online e Corporativo",
  description:
    "Personal trainer em Igarassu/PE com foco em treino individual, assessoria online, avaliacao fisica e solucoes corporativas. CREF 010493-G/PE.",
  keywords:
    "personal trainer igarassu, assessoria online treino, avaliacao fisica, ginastica laboral, treino funcional corporativo, thiago oliveira personal",
  openGraph: {
    title: "Thiago Oliveira | Personal Trainer em Igarassu",
    description:
      "Treino com direção e evolução acompanhada. Aulas presenciais, assessoria online e soluções corporativas em Igarassu/PE.",
    locale: "pt_BR",
    type: "website",
    url: "/proposta-comercial/thiagooliveira",
    images: [
      {
        url: "/images/thiagooliveira/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Thiago Oliveira Personal Trainer em Igarassu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Oliveira | Personal Trainer em Igarassu",
    description:
      "Treino com direção e evolução acompanhada. Aulas presenciais, assessoria online e soluções corporativas.",
    images: ["/images/thiagooliveira/og-image.jpg"],
  },
  robots: { index: false, follow: false },
};

export default function ThiagoOliveiraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
