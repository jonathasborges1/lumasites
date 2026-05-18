import { ProposalBanner } from "./components/ProposalBanner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { AboutMarkha } from "./components/AboutMarkha";
import { Solutions } from "./components/Solutions";
import { Health } from "./components/Health";
import { Consortium } from "./components/Consortium";
import { Testimonials } from "./components/Testimonials";
import { Newsletter } from "./components/Newsletter";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppMarkha } from "./components/WhatsAppMarkha";
import { WaveDivider } from "./components/WaveDivider";
import { Reveal } from "./components/Reveal";

export default function MarkhaProposalPage() {
  return (
    <>
      <ProposalBanner />
      <Header />
      <main>
        {/* Hero: dark navy — TrustBar: #162070 (seamless via Hero's bottom fade) */}
        <Hero />
        <TrustBar />

        {/* dark #162070 → white */}
        <WaveDivider from="#162070" to="#ffffff" />
        <Reveal><AboutMarkha /></Reveal>
        <Reveal><Solutions /></Reveal>
        <Reveal><Health /></Reveal>

        {/* white → dark #0D1550 */}
        <WaveDivider from="#ffffff" to="#0D1550" />
        <Consortium />

        {/* dark #0D1550 → light #F8F9FC */}
        <WaveDivider from="#0D1550" to="#F8F9FC" />
        <Reveal><Testimonials /></Reveal>
        <Reveal><Newsletter /></Reveal>
        <Reveal><Contact /></Reveal>

        {/* light #FAFBFF → dark #0D1550 (into Footer) */}
        <WaveDivider from="#FAFBFF" to="#0D1550" />
      </main>
      <Footer />
      <WhatsAppMarkha />
    </>
  );
}
