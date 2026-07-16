"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Briefcase,
  CheckCircle2,
  Compass,
  Eye,
  Landmark,
  MessagesSquare,
  Scale,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import {
  ABOUT_PARAGRAPH,
  ContactList,
  FAQItem,
  FloatingWhatsApp,
  IMG,
  MISSAO,
  PreviewBar,
  REGIONS,
  SectionDivider,
  SiteFooter,
  SiteHeader,
  SocialLinks,
  TEAM,
  VALORES,
  VISAO,
  WA,
  WaIcon,
  useRevealOnScroll,
  waLink,
} from "./shared";
import { baseCss } from "./shared-css";

const sectionNav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#missao", label: "Missão e Valores" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

const faqs = [
  {
    q: "O escritório atende pessoa física e também empresas?",
    a: "Sim. Atendemos pessoas físicas em contratos, família e sucessões, direito trabalhista e direito do consumidor, e também empresas, com assessoria jurídica completa nas áreas cível, empresarial, trabalhista, administrativa e de entretenimento. Veja as páginas dedicadas Pessoa Física e Pessoa Jurídica para o detalhe de cada atuação.",
  },
  {
    q: "Onde fica o escritório?",
    a: "O escritório é sediado em Alphaville e atua em todo o território nacional. O atendimento cobre Barueri, Alphaville, Santana de Parnaíba, Tamboré e Carapicuíba, na Grande São Paulo — endereço sob consulta.",
  },
  {
    q: "Como faço o primeiro contato?",
    a: "O canal mais rápido é o WhatsApp: " + "(11) 4247.6351" + ". Você também pode escrever para contato@alvesbarbosa.adv.br ou preencher o formulário desta página.",
  },
  {
    q: "Quais são as áreas de atuação do escritório?",
    a: "Atuação consultiva e contenciosa nas áreas trabalhista, civil, tributária, administrativa, comercial, bancária, consumidor, condominial, imobiliária, ambiental, entretenimento, família e sucessões — tanto para pessoas físicas quanto para pessoas jurídicas, em todo o território nacional.",
  },
  {
    q: "Quem compõe a equipe do escritório?",
    a: "A equipe é formada por dois sócios — Marco Aurélio Alves Barbosa e Guilherme Rodrigues Barbosa — e três consultoras: Marlene Munhóes dos Santos, Lucci Faccioli e Patricia Munhoz Mazza. Veja formação e especialização de cada um na seção Equipe.",
  },
  {
    q: "Quanto custa uma primeira conversa?",
    a: "Cada caso é avaliado individualmente. Entre em contato para explicar sua situação e receber uma orientação sobre os próximos passos e os honorários envolvidos.",
  },
];

function ContactForm() {
  const [nome, setNome] = useState("");
  const [situacao, setSituacao] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = `Olá! Meu nome é ${nome.trim() || "—"} e gostaria de falar com um advogado. Minha situação: ${
      situacao.trim() || "prefiro explicar na conversa."
    }`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="ab-form" onSubmit={handleSubmit}>
      <label htmlFor="ab-nome">
        Seu nome
        <input
          id="ab-nome"
          type="text"
          name="nome"
          autoComplete="name"
          placeholder="Como podemos te chamar?"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          required
        />
      </label>
      <label htmlFor="ab-situacao">
        Conte rapidamente sua situação <small>(opcional)</small>
        <textarea
          id="ab-situacao"
          name="situacao"
          rows={3}
          placeholder="Ex.: preciso revisar um contrato antes de assinar…"
          value={situacao}
          onChange={(event) => setSituacao(event.target.value)}
        />
      </label>
      <button type="submit" className="ab-button ab-button-wa">
        <WaIcon /> Enviar pelo WhatsApp
      </button>
      <p className="ab-form-note">Você será direcionado(a) ao WhatsApp com a mensagem pronta. Sem cadastro, sem spam.</p>
    </form>
  );
}

export default function AlvesBarbosaPage() {
  useRevealOnScroll();

  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Alves Barbosa Sociedade de Advogados",
    url: "http://alvesbarbosa.adv.br/",
    image: IMG.logo,
    areaServed: REGIONS.map((city) => `${city}, SP`),
    sameAs: [
      "https://www.linkedin.com/company/alvesbarbosaadvogados",
      "https://www.instagram.com/alvesbarbosaadvogados/",
      "https://www.facebook.com/alvesbarbosaadvogados",
    ],
    serviceType: [
      "Direito Trabalhista",
      "Direito Contratual",
      "Família e Sucessões",
      "Direito do Consumidor",
      "Direito Administrativo",
      "Direito Cível",
      "Direito Empresarial",
      "Direito do Entretenimento",
    ],
  };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <a className="ab-skip" href="#conteudo">
        Pular para o conteúdo
      </a>

      <PreviewBar />
      <SiteHeader active="home" sectionNav={sectionNav} />

      <section id="inicio" className="ab-hero" aria-labelledby="hero-title">
        <div className="ab-wrap ab-hero-grid" id="conteudo">
          <div className="ab-hero-copy">
            <p className="ab-kicker">Alves Barbosa Sociedade de Advogados</p>
            <h1 id="hero-title">
              Assessoria jurídica completa, <span>para pessoas e para empresas.</span>
            </h1>
            <p className="ab-hero-lead">
              Sediado em Alphaville, o escritório atua em todo o território nacional, nas divisões
              não contenciosa e contenciosa, para pessoas físicas e pessoas jurídicas. Escolha seu
              perfil abaixo para ver a atuação dedicada a você.
            </p>
            <div className="ab-actions">
              <a className="ab-button ab-button-wa" href={WA} target="_blank" rel="noopener noreferrer">
                <WaIcon /> Falar com advogado
              </a>
              <a className="ab-button ab-button-outline" href="#sobre">
                Conhecer o escritório <ArrowRight size={17} />
              </a>
            </div>
            <p className="ab-hero-service">WhatsApp (11) 4247.6351 · contato@alvesbarbosa.adv.br</p>
          </div>

          <div className="ab-hero-media">
            <div className="ab-emblem-frame">
              <div className="ab-emblem-glow" aria-hidden="true" />
              <div className="ab-emblem-icon" aria-hidden="true">
                <Scale size={54} strokeWidth={1.3} />
              </div>
              <p className="ab-emblem-title">Alves Barbosa Sociedade de Advogados</p>
              <div className="ab-emblem-stats">
                <div>
                  <strong>2</strong>
                  <span>Perfis atendidos: PF e PJ</span>
                </div>
                <div>
                  <strong>5</strong>
                  <span>Sócios e consultoras na equipe</span>
                </div>
                <div>
                  <strong>12+</strong>
                  <span>Áreas de atuação, do cível ao entretenimento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="audiencia" className="ab-audience" aria-labelledby="audiencia-title">
        <div className="ab-wrap">
          <div className="ab-section-head">
            <p className="ab-kicker">Para quem é</p>
            <h2 id="audiencia-title">Escolha seu perfil de atendimento</h2>
            <p>O escritório mantém páginas dedicadas para cada público, com as áreas de atuação relevantes para o seu caso.</p>
          </div>
          <div className="ab-audience-grid">
            <Link href="/proposta-comercial/alvesbarbosa/pessoa-fisica" className="ab-audience-card">
              <Users size={26} strokeWidth={1.7} aria-hidden="true" />
              <h3>Pessoa Física</h3>
              <p>Direito Trabalhista, Contratual, Família e Sucessões, e Direito do Consumidor.</p>
              <span>
                Ver atuação para você <ArrowRight size={16} />
              </span>
            </Link>
            <Link href="/proposta-comercial/alvesbarbosa/pessoa-juridica" className="ab-audience-card">
              <Briefcase size={26} strokeWidth={1.7} aria-hidden="true" />
              <h3>Pessoa Jurídica</h3>
              <p>Administrativo, Cível, Empresarial, Trabalhista e Entretenimento — consultivo e contencioso.</p>
              <span>
                Ver atuação para sua empresa <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section id="sobre" className="ab-section ab-section-soft ab-about" aria-labelledby="sobre-title">
        <SectionDivider icon={Landmark} />
        <div className="ab-wrap ab-about-grid">
          <div className="ab-about-visual">
            <div className="ab-about-panel">
              <Image src={IMG.office} alt="Equipe do escritório Alves Barbosa Sociedade de Advogados" width={480} height={360} className="ab-about-photo" />
            </div>
          </div>
          <div className="ab-about-copy">
            <p className="ab-kicker">Sobre nosso Escritório</p>
            <h2 id="sobre-title">Alves Barbosa Sociedade de Advogados</h2>
            <p>{ABOUT_PARAGRAPH}</p>
            <ul className="ab-check-list">
              <li>
                <CheckCircle2 size={18} /> Atuação nacional, nas divisões não contenciosa e contenciosa.
              </li>
              <li>
                <CheckCircle2 size={18} /> Atendimento a Pessoa Física e Pessoa Jurídica.
              </li>
              <li>
                <CheckCircle2 size={18} /> Profissionais de alto nível técnico em cada área.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="missao" className="ab-section ab-mvv" aria-labelledby="mvv-title">
        <SectionDivider icon={Compass} />
        <div className="ab-wrap">
          <div className="ab-section-head">
            <p className="ab-kicker">O que nos guia</p>
            <h2 id="mvv-title">Missão, Visão e Valores</h2>
          </div>
          <div className="ab-mvv-grid">
            <div className="ab-mvv-card">
              <Target size={24} strokeWidth={1.7} aria-hidden="true" />
              <h3>Missão</h3>
              <p>{MISSAO}</p>
            </div>
            <div className="ab-mvv-card">
              <Eye size={24} strokeWidth={1.7} aria-hidden="true" />
              <h3>Visão</h3>
              <p>{VISAO}</p>
            </div>
            <div className="ab-mvv-card ab-mvv-values">
              <Sparkles size={24} strokeWidth={1.7} aria-hidden="true" />
              <h3>Valores</h3>
              <ul>
                {VALORES.map((value) => (
                  <li key={value}>
                    <CheckCircle2 size={16} aria-hidden="true" /> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="equipe" className="ab-section ab-section-soft ab-team" aria-labelledby="equipe-title">
        <SectionDivider icon={Award} />
        <div className="ab-wrap">
          <div className="ab-section-head">
            <p className="ab-kicker">Quem cuida do seu caso</p>
            <h2 id="equipe-title">Nossa equipe</h2>
            <p>Sócios e consultoras com formação e especialização nas áreas em que o escritório atua.</p>
          </div>
          <div className="ab-team-grid">
            {TEAM.map((member) => (
              <article className="ab-team-card" key={member.name}>
                <div className="ab-team-avatar" aria-hidden="true">
                  {member.name
                    .split(" ")
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h3>{member.name}</h3>
                <span className="ab-team-role">{member.role}</span>
                <p>{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="duvidas" className="ab-section" aria-labelledby="faq-title">
        <SectionDivider icon={MessagesSquare} />
        <div className="ab-wrap ab-faq-grid">
          <div>
            <p className="ab-kicker">Perguntas frequentes</p>
            <h2 id="faq-title">Dúvidas comuns sobre o atendimento</h2>
            <p>Respostas diretas para as perguntas que mais recebemos.</p>
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
            <h2 id="contato-title">Converse com quem entende do seu caso</h2>
            <p>
              Conte sua situação pelo WhatsApp, por e-mail ou deixe seus dados ao lado: montamos a
              mensagem para você.
            </p>
            <a className="ab-button ab-button-wa" href={WA} target="_blank" rel="noopener noreferrer">
              <WaIcon /> Chamar no WhatsApp
            </a>
            <ContactList />
            <SocialLinks />
          </div>
          <div className="ab-final-form">
            <h3>Prefere que a gente comece?</h3>
            <ContactForm />
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
  .ab-hero {
    position: relative;
    padding: 178px 0 64px;
    background:
      radial-gradient(760px 440px at 88% 4%, rgba(79,116,171,.16), transparent 62%),
      linear-gradient(168deg, #0a1526 0%, var(--navy) 45%, #1a3255 100%);
    color: white;
    overflow: hidden;
  }
  .ab-hero .ab-wrap { position: relative; z-index: 1; }
  .ab-hero-grid { display: grid; gap: 38px; }
  .ab-hero .ab-kicker { color: var(--gold-light); }
  .ab-hero h1 { margin: 0 0 16px; font-size: clamp(2rem, 5.4vw, 3.2rem); }
  .ab-hero h1 span {
    color: var(--blue-pale);
    display: block;
    background: linear-gradient(115deg, #f4f6f9 0%, #aec3e2 34%, #e9ecf1 52%, #7fa1cf 78%, #c9dcf3 100%);
    -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
  }
  .ab-hero-lead { margin: 0 0 26px; max-width: 580px; color: rgba(255,255,255,.84); font-size: 1.06rem; }

  .ab-hero-media { position: relative; max-width: 480px; }
  .ab-emblem-frame {
    position: relative;
    z-index: 1;
    padding: 34px 28px;
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,.18);
    background: linear-gradient(165deg, rgba(255,255,255,.08), rgba(255,255,255,.02));
    box-shadow: 0 24px 60px rgba(0,0,0,.5);
    text-align: center;
    overflow: hidden;
  }
  .ab-emblem-glow {
    position: absolute;
    top: -60px; right: -60px;
    width: 220px; height: 220px;
    border-radius: 999px;
    background: radial-gradient(circle, rgba(201,169,120,.28), transparent 70%);
    pointer-events: none;
  }
  .ab-emblem-icon {
    position: relative;
    width: 84px; height: 84px;
    margin: 0 auto 18px;
    display: flex; align-items: center; justify-content: center;
    border-radius: 999px;
    border: 1px solid rgba(201,169,120,.42);
    color: var(--gold-light);
    background: rgba(255,255,255,.05);
  }
  .ab-emblem-title {
    position: relative;
    margin: 0 0 26px;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.15rem;
    color: white;
  }
  .ab-emblem-stats { position: relative; display: grid; gap: 14px; text-align: left; }
  .ab-emblem-stats div {
    display: flex; align-items: baseline; gap: 12px;
    padding: 12px 14px;
    border-left: 2px solid var(--gold-light);
    background: rgba(255,255,255,.04);
    border-radius: 6px;
  }
  .ab-emblem-stats strong { font-family: Georgia, serif; font-size: 1.3rem; color: var(--gold-light); }
  .ab-emblem-stats span { color: rgba(255,255,255,.78); font-size: .86rem; }

  .ab-audience { padding: 72px 0 0; }
  .ab-audience-grid { display: grid; gap: 18px; }
  .ab-audience-card {
    display: flex; flex-direction: column; align-items: flex-start; gap: 10px;
    padding: 30px 26px;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: var(--paper);
    transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
  }
  .ab-audience-card:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(15,29,51,.1); border-color: var(--blue-soft); }
  .ab-audience-card svg { color: var(--blue); }
  .ab-audience-card h3 { margin: 4px 0 0; font-size: 1.2rem; color: var(--navy); }
  .ab-audience-card p { margin: 0; color: var(--muted); font-size: .94rem; }
  .ab-audience-card span { margin-top: 8px; display: inline-flex; align-items: center; gap: 6px; color: var(--blue); font-weight: 800; font-size: .9rem; }
  .ab-audience-card:hover span { gap: 10px; }

  .ab-about-grid { display: grid; gap: 40px; align-items: center; }
  .ab-about-visual { display: flex; justify-content: center; }
  .ab-about-panel {
    position: relative;
    width: 100%; max-width: 420px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 22px 50px rgba(15,29,51,.22);
  }
  .ab-about-photo { width: 100%; height: auto; }
  .ab-about-copy .ab-kicker { color: var(--blue); }
  .ab-about-copy h2 { margin: 0 0 18px; font-size: clamp(1.6rem, 3vw, 2.1rem); color: var(--navy); }
  .ab-about-copy p { margin: 0 0 22px; color: var(--muted); font-size: .96rem; line-height: 1.75; }

  .ab-mvv-grid { display: grid; gap: 18px; }
  .ab-mvv-card {
    padding: 28px 24px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: var(--white);
  }
  .ab-mvv-card svg { color: var(--blue); }
  .ab-mvv-card h3 { margin: 14px 0 10px; color: var(--navy); font-size: 1.05rem; }
  .ab-mvv-card p { margin: 0; color: var(--muted); font-size: .92rem; line-height: 1.65; }
  .ab-mvv-values ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 9px; }
  .ab-mvv-values li { display: flex; align-items: flex-start; gap: 8px; color: var(--ink); font-size: .9rem; }
  .ab-mvv-values li svg { color: var(--blue); flex: none; margin-top: 2px; }

  .ab-team-grid { display: grid; gap: 18px; }
  .ab-team-card {
    padding: 26px 22px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: var(--white);
  }
  .ab-team-avatar {
    width: 52px; height: 52px;
    display: inline-flex; align-items: center; justify-content: center;
    border-radius: 999px;
    background: var(--navy);
    color: var(--gold-light);
    font-family: Georgia, serif; font-weight: 700; font-size: 1.1rem;
    margin-bottom: 14px;
  }
  .ab-team-card h3 { margin: 0 0 4px; font-size: 1rem; color: var(--navy); }
  .ab-team-role {
    display: inline-block; margin-bottom: 10px;
    color: var(--blue); font-size: .74rem; font-weight: 800; letter-spacing: .06em; text-transform: uppercase;
  }
  .ab-team-card p { margin: 0; color: var(--muted); font-size: .86rem; line-height: 1.6; }

  @media (min-width: 640px) {
    .ab-audience-grid { grid-template-columns: repeat(2, 1fr); }
    .ab-mvv-grid { grid-template-columns: repeat(3, 1fr); }
    .ab-team-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (min-width: 860px) {
    .ab-hero-grid { grid-template-columns: 1.05fr 0.85fr; }
    .ab-about-grid { grid-template-columns: 0.85fr 1.15fr; }
  }
  @media (min-width: 1024px) {
    .ab-team-grid { grid-template-columns: repeat(3, 1fr); }
  }
`;
