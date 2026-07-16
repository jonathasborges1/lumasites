"use client";

import {
  ArrowRight,
  Building2,
  Clapperboard,
  Gavel,
  Landmark,
  MessagesSquare,
  Scale,
} from "lucide-react";
import {
  ContactList,
  FAQItem,
  FloatingWhatsApp,
  IMG,
  PreviewBar,
  SectionDivider,
  SiteFooter,
  SiteHeader,
  SocialLinks,
  VideoHero,
  WA,
  WaIcon,
  useRevealOnScroll,
  waLink,
} from "../shared";
import { baseCss } from "../shared-css";

const sectionNav = [
  { href: "#areas", label: "Áreas de atuação" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

const areas = [
  {
    icon: Landmark,
    title: "Administrativo",
    text: "Na área administrativa, a atuação resume-se a acompanhar, impugnar licitações, interpondo recursos ou mandados de segurança.",
  },
  {
    icon: Scale,
    title: "Cível",
    text: "Na área cível o objetivo do escritório é dar suporte a empresas de médio porte, condomínios e pessoas físicas sobre os mais variados problemas de seu interesse, tais como responsabilidade civil, direito imobiliário, cobranças, direito sucessório, direito de família, direito do consumidor e direito contratual e das obrigações em geral.",
  },
  {
    icon: Building2,
    title: "Empresarial",
    text: "Na área empresarial, é destacada a atuação na recuperação judicial de créditos e na elaboração e análise de contratos mercantis, falência, recuperação judicial, execuções, bem como a administração de débitos bancários.",
  },
  {
    icon: Gavel,
    title: "Trabalhista",
    text: "Na área trabalhista o objetivo é evitar reclamações trabalhistas através de um bom atendimento preventivo e minimização de custos quando o procedimento judicial é inevitável, através de defesas bem fundamentadas e, quando inevitáveis, acordos vantajosos.",
  },
  {
    icon: Clapperboard,
    title: "Entretenimento",
    text: "Na área do entretenimento, dar suporte aos vários eventos culturais e esportivos, a todas as empresas produtoras de eventos, leis de incentivos culturais e esportivos, direito de imagem, licenciamentos, direitos autorais, alvarás para uso do espaço público, para entrada e permanência de menores, para trabalho de menores, ECAD, enfim, a gestão jurídica, cultural e do entretenimento.",
  },
];

const faqs = [
  {
    q: "Que tipo de empresa vocês atendem?",
    a: "Atendemos empresas de todo porte que precisam de assessoria jurídica completa, atuando em todo o território nacional, nas divisões não contenciosa e contenciosa.",
  },
  {
    q: "O que é a 'advocacia do dia a dia' que vocês oferecem?",
    a: "É o suporte jurídico preventivo para os problemas cotidianos de qualquer empresa — com consumidores, funcionários, fisco, parceiros e fornecedores — resolvendo de forma direta e eficiente antes que se tornem passivos maiores.",
  },
  {
    q: "Vocês atuam em recuperação judicial e falência?",
    a: "Sim, na área empresarial atuamos na recuperação judicial de créditos, elaboração e análise de contratos mercantis, falência, recuperação judicial e execuções, além da administração de débitos bancários.",
  },
  {
    q: "Fazem acompanhamento de licitações?",
    a: "Sim, na área administrativa acompanhamos e impugnamos licitações, interpondo recursos ou mandados de segurança quando necessário.",
  },
  {
    q: "Atendem empresas do setor de eventos e entretenimento?",
    a: "Sim, damos suporte jurídico a eventos culturais e esportivos, empresas produtoras, leis de incentivo, direito de imagem, licenciamentos, direitos autorais e ECAD.",
  },
];

export default function PessoaJuridicaPage() {
  useRevealOnScroll();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <main className="ab-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <a className="ab-skip" href="#conteudo">
        Pular para o conteúdo
      </a>

      <PreviewBar />
      <SiteHeader active="pj" sectionNav={sectionNav} />

      <VideoHero
        videoSrc="/videos/alvesbarbosa/pessoa-juridica-bg.mp4"
        poster={IMG.office}
        kicker="Pessoa Jurídica · Consultoria Jurídica"
        title={
          <>
            Advocacia do dia a dia, <span className="ab-hero-accent">soluções em direito para sua empresa.</span>
          </>
        }
        lead="Assessoria jurídica completa para todo tipo de empresa, atuando em todo o território nacional, nas divisões não contenciosa e contenciosa."
      >
        <div id="conteudo" className="ab-actions">
          <a className="ab-button ab-button-wa" href={WA} target="_blank" rel="noopener noreferrer">
            <WaIcon /> Falar sobre a minha empresa
          </a>
          <a className="ab-button ab-button-outline" href="#areas">
            Ver áreas de atuação <ArrowRight size={17} />
          </a>
        </div>
        <div className="ab-trust-strip" aria-label="Diferenciais rápidos">
          <span>
            <Building2 size={17} /> Todo porte de empresa
          </span>
          <span>
            <Scale size={17} /> Consultivo e contencioso
          </span>
        </div>
      </VideoHero>

      <section id="areas" className="ab-section" aria-labelledby="areas-title">
        <SectionDivider icon={Building2} />
        <div className="ab-wrap">
          <div className="ab-section-head">
            <p className="ab-kicker">Áreas de atuação</p>
            <h2 id="areas-title">Assessoria jurídica empresarial completa</h2>
            <p>Suporte jurídico contínuo para as decisões e desafios do dia a dia da sua empresa.</p>
          </div>

          <div className="ab-card-grid">
            {areas.map((area) => (
              <article className="ab-card" key={area.title}>
                <div className="ab-icon" aria-hidden="true">
                  <area.icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{area.title}</h3>
                <p className="ab-card-full-text">{area.text}</p>
                <a href={waLink(`Olá! Preciso de assessoria jurídica na área ${area.title}.`)} target="_blank" rel="noopener noreferrer">
                  Falar sobre {area.title} <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="duvidas" className="ab-section ab-section-soft" aria-labelledby="faq-title">
        <SectionDivider icon={MessagesSquare} />
        <div className="ab-wrap ab-faq-grid">
          <div>
            <p className="ab-kicker">Perguntas frequentes</p>
            <h2 id="faq-title">Dúvidas comuns</h2>
            <p>Respostas diretas para empresas que buscam assessoria jurídica contínua.</p>
          </div>
          <div className="ab-faq-list">
            {faqs.map((item, index) => (
              <FAQItem key={item.q} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="ab-final" aria-labelledby="contato-title">
        <div className="ab-wrap ab-final-grid">
          <div>
            <p className="ab-kicker">Contato</p>
            <h2 id="contato-title">Converse com quem entende do seu negócio</h2>
            <p>Conte a situação da sua empresa pelo WhatsApp: a análise é individual e a orientação é transparente desde a primeira conversa.</p>
            <a className="ab-button ab-button-wa" href={WA} target="_blank" rel="noopener noreferrer">
              <WaIcon /> Chamar no WhatsApp
            </a>
            <ContactList />
            <SocialLinks />
          </div>
          <div className="ab-final-form">
            <h3>Pessoa Física?</h3>
            <p className="ab-final-form-note">Se você procura orientação jurídica pessoal, veja a página dedicada com trabalhista, contratos, família e consumidor.</p>
            <a className="ab-button ab-button-outline ab-button-block" href="/proposta-comercial/alvesbarbosa/pessoa-fisica">
              Ver Pessoa Física <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />

      <style jsx global>{`${baseCss}${css}`}</style>
    </main>
  );
}

const css = `
  .ab-hero-accent { display: block; color: var(--gold-light); }
  .ab-card-full-text { flex: 1; }
  .ab-final-form-note { color: rgba(255,255,255,.66); font-size: .86rem; margin: 0 0 16px; }
`;
