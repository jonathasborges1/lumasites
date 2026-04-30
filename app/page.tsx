import type { Metadata } from "next";
import { site } from "@/content/site";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Benefits } from "@/sections/Benefits";
import { Services } from "@/sections/Services";
import { Process } from "@/sections/Process";
import { Differentials } from "@/sections/Differentials";
import { Testimonials } from "@/sections/Testimonials";
import { FAQ } from "@/sections/FAQ";
import { FinalCTA } from "@/sections/FinalCTA";
import { Footer } from "@/sections/Footer";
import { MascotBand } from "@/sections/MascotBand";
import { SectionTransition } from "@/components/SectionTransition";

export const metadata: Metadata = {
  alternates: { canonical: site.url },
};

export default function HomePage() {
  return (
    <>
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
