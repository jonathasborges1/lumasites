import type { Metadata } from "next";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Benefits } from "@/sections/Benefits";
import { Services } from "@/sections/Services";
import { Process } from "@/sections/Process";
import { Differentials } from "@/sections/Differentials";
import { Testimonials } from "@/sections/Testimonials";
import { Portfolio } from "@/sections/Portfolio";
import { FAQ } from "@/sections/FAQ";
import { FinalCTA } from "@/sections/FinalCTA";
import { Footer } from "@/sections/Footer";
import { MascotBand } from "@/sections/MascotBand";
import { SectionTransition } from "@/components/SectionTransition";
import { site } from "@/content/site";
import { faq } from "@/content/faq";

export const metadata: Metadata = {
  alternates: { canonical: site.url },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${site.url}/#faq`,
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
      <Header />
      <main>
        <Hero />
        <SectionTransition />
        <Benefits />
        <SectionTransition flip />
        <MascotBand />
        <SectionTransition />
        <Services />
        <SectionTransition />
        <Process />
        <SectionTransition flip />
        <Differentials />
        <SectionTransition />
        <Portfolio />
        <SectionTransition flip />
        <Testimonials />
        <SectionTransition flip />
        <FAQ />
        <SectionTransition />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
