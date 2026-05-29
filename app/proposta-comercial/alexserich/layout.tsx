import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alex Serich | Método Núcleo® — Consultoria Fitness Premium",
  description:
    "O sistema de 4 pilares que corrige compensações, elimina dores e entrega o físico que você sempre quis em 8 semanas.",
  keywords:
    "personal trainer manaus, método núcleo, consultoria fitness, alex serich, treino personalizado, correção postural, academia ar fit",
  openGraph: {
    title: "Alex Serich | Método Núcleo® — Consultoria Fitness Premium",
    description:
      "O sistema de 4 pilares que corrige compensações, elimina dores e entrega o físico que você sempre quis em 8 semanas.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/alexserich/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Serich - Método Núcleo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Serich | Método Núcleo® — Consultoria Fitness Premium",
    description:
      "O sistema de 4 pilares que corrige compensações, elimina dores e entrega o físico que você sempre quis em 8 semanas.",
    images: ["/images/alexserich/og-image.jpg"],
  },
  robots: { index: false, follow: false },
};

export default function AlexSerichLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
