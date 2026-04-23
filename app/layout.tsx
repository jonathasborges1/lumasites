import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import { Cinzel, Inter } from "next/font/google";
import { site } from "@/content/site";
import { SelectionProvider } from "@/components/SelectionContext";
import { GlobalLoadingOverlay } from "@/components/GlobalLoadingOverlay";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

const display = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  title: {
    default: site.seo.title,
    template: `%s | ${site.name}`,
  },
  description: site.seo.description,
  keywords: site.seo.keywords,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luma Sites — Criação de Sites em Manaus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0A0E1A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">
        <SelectionProvider>
          <Suspense fallback={null}>
            <GlobalLoadingOverlay />
          </Suspense>
          <ScrollProgress />
          <CursorGlow />
          {children}
          <WhatsAppFloating />
        </SelectionProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": `${site.url}/#business`,
              name: site.name,
              description: site.seo.description,
              url: site.url,
              telephone: `+${site.whatsapp.number}`,
              email: site.email,
              logo: {
                "@type": "ImageObject",
                url: `${site.url}/favicon.svg`,
              },
              image: `${site.url}/og-image.jpg`,
              areaServed: {
                "@type": "City",
                name: site.city,
                containedInPlace: {
                  "@type": "State",
                  name: "Amazonas",
                },
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: site.city,
                addressRegion: site.state,
                addressCountry: "BR",
              },
              priceRange: "R$ 497 - R$ 2.000",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços de criação de sites",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Site Institucional",
                      description: "Site profissional de 1 a 4 páginas para sua empresa em Manaus",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Landing Page",
                      description: "Página de conversão focada em captação de clientes",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Site com Blog",
                      description: "Site com área de conteúdo e SEO local",
                    },
                  },
                ],
              },
              sameAs: [
                `https://wa.me/${site.whatsapp.number}`,
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
