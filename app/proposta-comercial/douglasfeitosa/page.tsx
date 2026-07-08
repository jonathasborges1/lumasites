"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileSearch,
  Gavel,
  HeartHandshake,
  Home,
  Instagram,
  Landmark,
  Menu,
  MessageCircle,
  Scale,
  ShieldCheck,
  UserRoundCheck,
  UsersRound,
  X,
} from "lucide-react";

const WA = `https://wa.me/5582991705675?text=${encodeURIComponent(
  "Olá, Dr. Douglas Feitosa! Gostaria de orientação jurídica sobre o meu caso.",
)}`;
const INSTAGRAM = "https://www.instagram.com/douglasfeitosa.adv/";

const IMG = {
  logo: "/images/douglasfeitosa/douglas-feitosa-logo.png",
  hero: "/images/douglasfeitosa/douglas-feitosa-capa2.png",
  heroWide: "/images/douglasfeitosa/douglas-feitosa-capa1.png",
  portrait: "/images/douglasfeitosa/douglas-feitosa-retrato.jpg",
};

const nav = [
  { href: "#atuacao", label: "Atuação" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

const previdenciario = [
  {
    icon: Landmark,
    title: "Aposentadorias",
    text: "Análise de aposentadoria por idade, tempo de contribuição e incapacidade permanente.",
  },
  {
    icon: ShieldCheck,
    title: "BPC/LOAS",
    text: "Orientação para idosos e pessoas com deficiência de baixa renda que precisam do benefício assistencial.",
  },
  {
    icon: FileSearch,
    title: "Revisão de benefícios",
    text: "Avaliação de benefícios já concedidos pelo INSS ou regime próprio para identificar caminhos possíveis.",
  },
  {
    icon: HeartHandshake,
    title: "Auxílios e pensões",
    text: "Auxílio-doença, auxílio-acidente, pensão por morte e salário-maternidade, conforme o caso.",
  },
];

const familia = [
  {
    icon: Home,
    title: "Inventário",
    text: "Condução de inventário judicial ou extrajudicial com orientação sobre documentos e etapas.",
  },
  {
    icon: UsersRound,
    title: "Guarda e família",
    text: "Guarda, visitação, reconhecimento de paternidade e demais demandas familiares.",
  },
  {
    icon: Scale,
    title: "União estável",
    text: "Reconhecimento em cartório ou pela via judicial, de acordo com a realidade da família.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Partilha de bens",
    text: "Orientação em separação, divórcio, acordos e mediação de conflitos patrimoniais.",
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Primeiro contato",
    text: "Você envia uma mensagem pelo WhatsApp e explica brevemente sua situação.",
  },
  {
    icon: FileSearch,
    title: "Análise inicial",
    text: "O caso é avaliado com base nas informações e documentos disponíveis.",
  },
  {
    icon: ClipboardCheck,
    title: "Estratégia e proposta",
    text: "São apresentados os caminhos jurídicos possíveis e a proposta de honorários.",
  },
  {
    icon: CalendarCheck,
    title: "Acompanhamento",
    text: "O caso segue com orientação, atualizações e reuniões quando necessário.",
  },
];

const faqs = [
  {
    q: "O atendimento pode ser feito totalmente online?",
    a: "Sim. O atendimento é feito pelo WhatsApp e por reuniões online quando necessário, permitindo a análise de casos em todo o Brasil.",
  },
  {
    q: "Quais documentos preciso enviar para analisar minha aposentadoria?",
    a: "Depende do caso, mas normalmente são solicitados documentos pessoais, carteira de trabalho, CNIS, comprovantes de contribuição e documentos médicos quando houver incapacidade.",
  },
  {
    q: "Quem pode solicitar BPC/LOAS?",
    a: "Idosos e pessoas com deficiência em situação de baixa renda podem ter direito ao benefício, desde que preencham os requisitos legais e apresentem a documentação adequada.",
  },
  {
    q: "É possível revisar um benefício já concedido?",
    a: "Pode ser possível, mas a revisão exige análise individual do histórico contributivo, da carta de concessão e dos documentos que fundamentaram o benefício.",
  },
  {
    q: "O que fazer se o INSS negar meu benefício?",
    a: "A negativa deve ser analisada para entender o motivo. Em alguns casos, cabe recurso administrativo; em outros, pode ser indicada uma medida judicial.",
  },
  {
    q: "Inventário pode ser feito de forma extrajudicial?",
    a: "Sim, quando os requisitos legais forem atendidos. A viabilidade depende da situação dos herdeiros, da existência de consenso e da documentação dos bens.",
  },
];

function WaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}

function AreaCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Landmark;
  title: string;
  text: string;
}) {
  return (
    <article className="df-area-card">
      <div className="df-icon" aria-hidden="true">
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={WA} target="_blank" rel="noopener noreferrer">
        Conversar sobre este caso <ArrowRight size={15} />
      </a>
    </article>
  );
}

function FAQItem({
  q,
  a,
  index,
}: {
  q: string;
  a: string;
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);
  const id = `faq-${index}`;

  return (
    <div className="df-faq-item">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{q}</span>
        <ChevronDown size={20} aria-hidden="true" />
      </button>
      <div id={id} hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function DouglasFeitosaPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Douglas Feitosa Advocacia",
    url: "https://advogadodouglasfeitosa.com.br/",
    image: IMG.portrait,
    areaServed: "Brasil",
    telephone: "+55 82 99170-5675",
    sameAs: [INSTAGRAM],
    serviceType: [
      "Direito Previdenciário",
      "Direito Civil",
      "Direito de Família",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main className="df-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <a className="df-skip" href="#conteudo">
        Pular para o conteúdo
      </a>

      <div className="df-preview-bar" role="note" aria-label="Aviso de proposta">
        <Link
          className="df-preview-back"
          href="/proposta-comercial"
          aria-label="Voltar para propostas comerciais"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Voltar</span>
        </Link>
        <div className="df-preview-line">
          <span className="df-preview-dot" aria-hidden="true" />
          Prévia Conceitual
        </div>
        <span className="df-preview-sub">
          Proposta elaborada pela{" "}
          <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
            LumaSites.com.br
          </a>
        </span>
      </div>

      <header className="df-header">
        <div className="df-wrap df-nav">
          <a href="#inicio" className="df-brand" aria-label="Douglas Feitosa Advocacia">
            <Image
              src={IMG.logo}
              alt="Douglas Feitosa Advocacia"
              width={1510}
              height={852}
              priority
            />
            <span>
              Douglas Feitosa
              <small>Advocacia</small>
            </span>
          </a>

          <nav aria-label="Navegação principal" className="df-desktop-nav">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="df-nav-cta" href={WA} target="_blank" rel="noopener noreferrer">
            <WaIcon /> WhatsApp
          </a>

          <button
            className="df-menu-button"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <nav
          className={`df-mobile-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Navegação mobile"
        >
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </nav>
      </header>

      <section id="inicio" className="df-hero" aria-labelledby="hero-title">
        <div className="df-wrap df-hero-grid" id="conteudo">
          <div className="df-hero-copy">
            <Image
              className="df-hero-logo-mark"
              src={IMG.logo}
              alt="Douglas Feitosa Advogado"
              width={1510}
              height={852}
              priority
            />
            <p className="df-kicker">Atendimento jurídico online em todo o Brasil</p>
            <h1 id="hero-title">
              Seu <span>advogado digital</span>, com foco em aposentadorias e ações cíveis.
            </h1>
            <p className="df-hero-lead">
              Garantindo seus direitos à aposentadoria, benefícios como BPC/LOAS
              entre outros, além de ações cíveis, como inventários, divórcio e
              direito de família. Toque no botão e fale com um advogado capacitado.
            </p>
            <div className="df-actions">
              <a className="df-button df-button-wa" href={WA} target="_blank" rel="noopener noreferrer">
                <WaIcon /> Entre em contato agora mesmo
              </a>
              <a className="df-button df-button-outline" href="#atuacao">
                Ver áreas de atuação <ArrowRight size={17} />
              </a>
            </div>
            <p className="df-hero-service">Atendimento online em todo o Brasil.</p>
            <div className="df-trust-strip" aria-label="Diferenciais rápidos">
              <span>
                <BadgeCheck size={17} /> Análise individual
              </span>
              <span>
                <ShieldCheck size={17} /> Sigilo profissional
              </span>
              <span>
                <UserRoundCheck size={17} /> Atendimento direto
              </span>
            </div>
          </div>

          <div className="df-hero-media" aria-label="Retrato de Douglas Feitosa">
            <div className="df-photo-frame">
              <Image
                src={IMG.heroWide}
                alt="Douglas Feitosa, advogado"
                width={1600}
                height={750}
                priority
                sizes="(max-width: 768px) 86vw, 620px"
              />
            </div>
            <div className="df-mobile-hero-photo">
              <Image
                src={IMG.heroWide}
                alt="Douglas Feitosa em imagem institucional"
                width={1600}
                height={750}
                priority
                sizes="100vw"
              />
            </div>
            <div className="df-hero-note">
              <span>Direito Previdenciário</span>
              <strong>BPC/LOAS, aposentadorias e benefícios do INSS</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="df-confidence" aria-label="Resumo de confianca">
        <div className="df-wrap df-confidence-grid">
          <div>
            <strong>Atendimento online</strong>
            <span>Envio de documentos e orientações pelo WhatsApp.</span>
          </div>
          <div>
            <strong>Linguagem simples</strong>
            <span>Explicação objetiva sobre requisitos, riscos e próximos passos.</span>
          </div>
          <div>
            <strong>Foco previdenciário</strong>
            <span>Aposentadorias, revisões, auxílios, pensões e BPC/LOAS.</span>
          </div>
          <div>
            <strong>Demandas familiares</strong>
            <span>Inventário, guarda, partilha e reconhecimento de união estável.</span>
          </div>
        </div>
      </section>

      <section id="atuacao" className="df-section" aria-labelledby="atuacao-title">
        <div className="df-wrap">
          <div className="df-section-head">
            <p className="df-kicker">Áreas de atuação</p>
            <h2 id="atuacao-title">Em quais casos podemos ajudar</h2>
            <p>
              Cada demanda pede um olhar próprio. A nova prévia organiza os
              serviços por contexto, facilita a leitura e conduz o visitante
              para uma conversa qualificada no WhatsApp.
            </p>
          </div>

          <div className="df-area-group">
            <div className="df-area-heading">
              <Gavel size={24} />
              <div>
                <h3>Direito Previdenciário</h3>
                <p>Benefícios do INSS, aposentadorias, revisões e auxílios.</p>
              </div>
            </div>
            <div className="df-area-grid">
              {previdenciario.map((item) => (
                <AreaCard key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div className="df-area-group">
            <div className="df-area-heading">
              <Scale size={24} />
              <div>
                <h3>Direito Cível e de Família</h3>
                <p>Demandas familiares, patrimoniais e conflitos cíveis.</p>
              </div>
            </div>
            <div className="df-area-grid">
              {familia.map((item) => (
                <AreaCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="df-section df-section-soft" aria-labelledby="process-title">
        <div className="df-wrap">
          <div className="df-section-head">
            <p className="df-kicker">Como funciona</p>
            <h2 id="process-title">Atendimento simples, claro e acompanhado</h2>
            <p>
              Do primeiro contato até a condução do caso, o visitante entende o
              que acontece em cada etapa e se sente mais seguro para iniciar a
              conversa.
            </p>
          </div>

          <div className="df-steps">
            {steps.map((step, index) => (
              <article className="df-step" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div className="df-icon" aria-hidden="true">
                  <step.icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="df-section df-about" aria-labelledby="sobre-title">
        <div className="df-wrap df-about-grid">
          <div className="df-about-image">
            <Image
              src={IMG.portrait}
              alt="Douglas Feitosa em foto profissional"
              width={853}
              height={1280}
              sizes="(max-width: 768px) 100vw, 430px"
            />
          </div>
          <div className="df-about-copy">
            <p className="df-kicker">Sobre o advogado</p>
            <h2 id="sobre-title">Douglas Feitosa</h2>
            <p>
              Advogado formado pela Faculdade Raimundo Marinho, em Penedo-AL, e
              pós-graduando em Direito e Prática Previdenciária. Atua em
              demandas relacionadas a aposentadorias, BPC/LOAS, auxílio-doença,
              auxílio-acidente, salário-maternidade, pensão por morte e revisões
              de benefícios.
            </p>
            <p>
              Além da atuação previdenciária, também atende áreas cíveis,
              familiares e trabalhistas, incluindo inventários, guarda,
              partilha de bens, reconhecimento de união estável e
              reconhecimento de paternidade.
            </p>
            <ul className="df-check-list">
              <li>
                <CheckCircle2 size={18} /> Atendimento online em todo o Brasil.
              </li>
              <li>
                <CheckCircle2 size={18} /> Explicação clara sobre documentos e prazos.
              </li>
              <li>
                <CheckCircle2 size={18} /> Análise individual antes da estratégia.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="df-section df-differentials" aria-labelledby="diff-title">
        <div className="df-wrap df-diff-grid">
          <div>
            <p className="df-kicker">Diferenciais</p>
            <h2 id="diff-title">Uma experiência mais confiável desde a primeira dobra</h2>
          </div>
          <div className="df-diff-list">
            {[
              "Textos juridicamente mais seguros, sem promessa de resultado.",
              "Serviços agrupados por área para leitura rápida no celular.",
              "CTAs menos repetitivos e mais orientados a conversa.",
              "Prova de autoridade com formação, foco de atuação e processo.",
              "SEO técnico com título, descrição, semântica e FAQ estruturado.",
            ].map((item) => (
              <div key={item}>
                <CheckCircle2 size={19} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="duvidas" className="df-section df-section-soft" aria-labelledby="faq-title">
        <div className="df-wrap df-faq-grid">
          <div>
            <p className="df-kicker">Perguntas frequentes</p>
            <h2 id="faq-title">Dúvidas que ajudam o visitante a decidir</h2>
            <p>
              O FAQ aproveita perguntas reais da fonte oficial e amplia a
              cobertura para BPC/LOAS, revisões, negativas do INSS e inventário.
            </p>
          </div>
          <div className="df-faq-list">
            {faqs.map((item, index) => (
              <FAQItem key={item.q} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="df-final" aria-labelledby="contato-title">
        <div className="df-wrap df-final-grid">
          <div>
            <p className="df-kicker">Contato</p>
            <h2 id="contato-title">Precisa de orientação sobre aposentadoria, benefício ou demanda familiar?</h2>
            <p>
              Envie uma mensagem e explique seu caso. O atendimento é feito
              online, com orientação clara sobre documentos e próximos passos.
            </p>
          </div>
          <div className="df-final-actions">
            <a className="df-button df-button-wa" href={WA} target="_blank" rel="noopener noreferrer">
              <WaIcon /> Iniciar atendimento
            </a>
            <a className="df-social" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <Instagram size={18} /> @douglasfeitosa.adv
            </a>
            <span>(82) 99170-5675</span>
          </div>
        </div>
      </section>

      <footer className="df-footer">
        <div className="df-wrap df-footer-grid">
          <div className="df-footer-brand">
            <Image src={IMG.logo} alt="Douglas Feitosa Advocacia" width={1510} height={852} />
            <p>
              As informações deste site possuem caráter informativo e não
              substituem uma consulta jurídica individualizada.
            </p>
          </div>
          <div className="df-footer-links" aria-label="Áreas de atuação">
            <span>Direito Previdenciário</span>
            <span>Direito Cível e de Família</span>
            <span>Atendimento online em todo o Brasil</span>
          </div>
          <p className="df-footer-credit">
            <span>Site criado por</span>
            <Link href="/" aria-label="Luma Sites">
              Luma Sites
            </Link>
          </p>
        </div>
      </footer>

      <a className="df-floating-wa" href={WA} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
        <WaIcon size={21} />
      </a>

      <style jsx global>{css}</style>
    </main>
  );
}

const css = `
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .df-page, .df-page * { box-sizing: border-box; }
  .df-page {
    --navy: #10183f;
    --navy-2: #071225;
    --blue: #191f6b;
    --paper: #f7f5ef;
    --white: #ffffff;
    --ink: #182033;
    --muted: #5c6577;
    --line: #d9dde8;
    --gold: #b99a5b;
    --gold-dark: #8f7135;
    --wa: #25c366;
    min-height: 100vh;
    overflow-x: clip;
    background: var(--paper);
    color: var(--ink);
    font-family: Inter, Manrope, Poppins, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  .df-page img { display: block; max-width: 100%; }
  .df-page a { color: inherit; text-decoration: none; }
  .df-page button { font: inherit; cursor: pointer; }
  .df-page :focus-visible {
    outline: 3px solid color-mix(in srgb, var(--gold) 70%, white);
    outline-offset: 4px;
    border-radius: 6px;
  }
  .df-wrap {
    width: min(1160px, calc(100% - 40px));
    margin: 0 auto;
  }
  .df-skip {
    position: fixed;
    z-index: 999;
    top: 8px;
    left: 8px;
    transform: translateY(-140%);
    background: var(--gold);
    color: var(--navy-2);
    padding: 10px 14px;
    font-weight: 800;
    border-radius: 6px;
  }
  .df-skip:focus { transform: translateY(0); }
  .df-preview-bar {
    position: fixed;
    z-index: 80;
    inset: 0 0 auto;
    min-height: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    padding: 7px 20px;
    background: var(--navy-2);
    color: rgba(255,255,255,.72);
    border-bottom: 1px solid rgba(255,255,255,.12);
    text-align: center;
  }
  .df-preview-back {
    position: absolute;
    left: 12px;
    top: 50%;
    min-width: 36px;
    min-height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 0 10px;
    border-radius: 6px;
    color: rgba(255,255,255,.62);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
    transform: translateY(-50%);
  }
  .df-preview-back:hover {
    background: rgba(255,255,255,.08);
    color: white;
  }
  .df-preview-line {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: white;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .13em;
    text-transform: uppercase;
  }
  .df-preview-sub {
    color: rgba(255,255,255,.48);
    font-size: 11px;
    line-height: 1.25;
  }
  .df-preview-sub a {
    color: var(--gold);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .df-preview-sub a:hover { color: white; }
  .df-preview-dot {
    width: 7px;
    height: 7px;
    display: inline-block;
    flex: none;
    border-radius: 999px;
    background: var(--gold);
    box-shadow: 0 0 0 0 rgba(185,154,91,.72);
    animation: df-dot-pulse 1.7s ease-out infinite;
  }
  .df-header {
    position: fixed;
    z-index: 70;
    inset: 52px 0 auto;
    background: rgba(7,18,37,.55);
    border-bottom: 1px solid rgba(255,255,255,.12);
    -webkit-backdrop-filter: blur(16px) saturate(1.4);
    backdrop-filter: blur(16px) saturate(1.4);
  }
  .df-nav {
    height: 78px;
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .df-brand {
    display: inline-flex;
    align-items: center;
    width: 284px;
    height: 58px;
    flex: none;
    gap: 12px;
  }
  .df-brand img {
    width: 72px;
    height: 52px;
    object-fit: contain;
    object-position: left center;
  }
  .df-brand span {
    display: grid;
    gap: 2px;
    color: white;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0;
  }
  .df-brand small {
    color: var(--gold);
    font-family: Inter, Manrope, Poppins, system-ui, sans-serif;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: .22em;
    text-transform: uppercase;
  }
  .df-desktop-nav {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .df-desktop-nav a {
    color: rgba(255,255,255,.72);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: .09em;
    text-transform: uppercase;
  }
  .df-desktop-nav a:hover { color: white; }
  .df-nav-cta {
    min-height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 0 16px;
    border-radius: 6px;
    background: var(--wa);
    color: white;
    font-size: 13px;
    font-weight: 900;
    box-shadow: 0 12px 28px rgba(37,195,102,.22);
  }
  .df-menu-button {
    display: none;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255,255,255,.18);
    background: rgba(255,255,255,.08);
    color: white;
    border-radius: 6px;
  }
  .df-mobile-nav {
    display: none;
    border-top: 1px solid rgba(255,255,255,.1);
    background: rgba(7,18,37,.65);
    padding: 0 20px 18px;
  }
  .df-mobile-nav a {
    display: block;
    padding: 14px 0;
    border-bottom: 1px solid rgba(255,255,255,.1);
    color: white;
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .08em;
  }
  .df-hero {
    position: relative;
    min-height: calc(100svh - 52px);
    padding: 150px 0 54px;
    overflow: hidden;
    background: var(--navy-2);
    color: white;
  }
  .df-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(7,18,37,.98) 0%, rgba(7,18,37,.92) 36%, rgba(7,18,37,.55) 58%, rgba(7,18,37,.08) 100%),
      linear-gradient(180deg, rgba(7,18,37,.18) 0%, rgba(7,18,37,.55) 100%);
    z-index: 1;
    pointer-events: none;
  }
  .df-hero::after {
    content: "";
    position: absolute;
    inset: 96px 0 -22px;
    background-image: url("/images/douglasfeitosa/douglas-feitosa-capa1.png");
    background-size: cover;
    background-position: right top;
    background-repeat: no-repeat;
    z-index: 0;
  }
  .df-hero-grid {
    position: relative;
    z-index: 2;
    display: block;
  }
  .df-hero-grid > *,
  .df-about-grid > *,
  .df-diff-grid > *,
  .df-faq-grid > *,
  .df-final-grid > * {
    min-width: 0;
  }
  .df-kicker {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin: 0 0 18px;
    color: var(--gold);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: .2em;
    text-transform: uppercase;
  }
  .df-kicker::before {
    content: "";
    width: 32px;
    height: 1px;
    background: var(--gold);
  }
  .df-hero h1,
  .df-section h2,
  .df-final h2 {
    margin: 0;
    color: var(--navy-2);
    font-family: Georgia, "Times New Roman", serif;
    font-weight: 700;
    letter-spacing: 0;
  }
  .df-hero h1 {
    max-width: 760px;
    color: white;
    font-size: clamp(38px, 3.6vw, 50px);
    line-height: 1.03;
    overflow-wrap: break-word;
    hyphens: manual;
  }
  .df-hero h1 span {
    color: var(--gold);
  }
  .df-hero-logo-mark {
    width: min(320px, 38vw);
    height: auto;
    margin: 0 0 22px;
    object-fit: contain;
    object-position: left center;
  }
  .df-hero-lead {
    max-width: 700px;
    margin: 22px 0 0;
    color: rgba(255,255,255,.95);
    font-size: 18px;
    font-weight: 700;
    line-height: 1.38;
  }
  .df-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 32px;
  }
  .df-button {
    min-height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 20px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: .08em;
    text-transform: uppercase;
    text-align: center;
    white-space: normal;
  }
  .df-button-wa {
    background: var(--wa);
    color: white;
    box-shadow: 0 16px 30px rgba(37,195,102,.25);
  }
  .df-hero .df-button-wa {
    min-width: 402px;
    min-height: 68px;
    border-radius: 22px;
    font-size: 17px;
    letter-spacing: 0;
    text-transform: none;
  }
  .df-button-outline {
    border: 1px solid rgba(16,24,63,.25);
    background: rgba(255,255,255,.55);
    color: var(--navy);
  }
  .df-hero .df-button-outline {
    display: none;
  }
  .df-button:hover { transform: translateY(-2px); }
  .df-hero-service {
    margin: 34px 0 0;
    color: white;
    font-size: 20px;
    font-weight: 800;
    line-height: 1.35;
  }
  .df-trust-strip {
    display: none;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 34px;
  }
  .df-trust-strip span {
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0 12px;
    border: 1px solid rgba(16,24,63,.12);
    background: rgba(255,255,255,.66);
    color: var(--navy);
    border-radius: 6px;
    font-size: 12px;
    font-weight: 800;
  }
  .df-hero-media {
    display: none;
  }
  .df-photo-frame {
    position: relative;
    width: 100%;
    min-height: 430px;
    aspect-ratio: auto;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid rgba(16,24,63,.14);
    background: var(--navy);
    box-shadow: 0 28px 80px rgba(7,18,37,.23);
  }
  .df-photo-frame::before {
    content: "";
    position: absolute;
    z-index: 2;
    inset: 14px;
    border: 1px solid rgba(255,255,255,.38);
    border-radius: 5px;
    pointer-events: none;
  }
  .df-photo-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 72% center;
  }
  .df-mobile-hero-photo {
    display: none;
  }
  .df-hero-note {
    position: absolute;
    right: 64px;
    bottom: 24px;
    width: min(260px, 68vw);
    padding: 18px;
    border-radius: 8px;
    background: var(--navy-2);
    color: white;
    box-shadow: 0 20px 40px rgba(7,18,37,.24);
  }
  .df-hero-note span {
    color: var(--gold);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: .14em;
    text-transform: uppercase;
  }
  .df-hero-note strong {
    display: block;
    margin-top: 8px;
    font-size: 15px;
    line-height: 1.4;
  }
  .df-confidence {
    background: var(--navy);
    color: white;
    padding: 26px 0;
  }
  .df-confidence-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }
  .df-confidence-grid div {
    padding: 16px 22px;
    border-left: 1px solid rgba(255,255,255,.14);
  }
  .df-confidence-grid div:last-child { border-right: 1px solid rgba(255,255,255,.14); }
  .df-confidence strong,
  .df-confidence span {
    display: block;
  }
  .df-confidence strong {
    font-size: 14px;
    color: white;
  }
  .df-confidence span {
    margin-top: 6px;
    color: rgba(255,255,255,.68);
    font-size: 13px;
    line-height: 1.55;
  }
  .df-section {
    padding: 88px 0;
    background: white;
  }
  .df-section-soft {
    background: var(--paper);
  }
  .df-section-head {
    max-width: 760px;
    margin-bottom: 36px;
  }
  .df-section h2,
  .df-final h2 {
    font-size: clamp(34px, 4.5vw, 58px);
    line-height: 1.04;
  }
  .df-section-head > p:not(.df-kicker),
  .df-faq-grid > div > p,
  .df-final p,
  .df-about-copy p {
    color: var(--muted);
    font-size: 16px;
    line-height: 1.78;
  }
  .df-area-group + .df-area-group { margin-top: 34px; }
  .df-area-heading {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--line);
    color: var(--navy);
  }
  .df-area-heading h3 {
    margin: 0;
    font-size: 22px;
    color: var(--navy-2);
  }
  .df-area-heading p {
    margin: 4px 0 0;
    color: var(--muted);
  }
  .df-area-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  .df-area-card {
    min-height: 270px;
    display: flex;
    flex-direction: column;
    padding: 24px;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: white;
  }
  .df-icon {
    width: 46px;
    height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: rgba(185,154,91,.12);
    color: var(--gold-dark);
    flex: none;
  }
  .df-area-card h3,
  .df-step h3 {
    margin: 18px 0 10px;
    color: var(--navy-2);
    font-size: 19px;
    line-height: 1.2;
  }
  .df-area-card p,
  .df-step p {
    margin: 0;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.65;
  }
  .df-area-card a {
    margin-top: auto;
    padding-top: 18px;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: var(--blue);
    font-size: 13px;
    font-weight: 900;
  }
  .df-steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  .df-step {
    position: relative;
    min-height: 245px;
    padding: 24px;
    border: 1px solid rgba(16,24,63,.12);
    border-radius: 8px;
    background: rgba(255,255,255,.74);
  }
  .df-step > span {
    position: absolute;
    right: 20px;
    top: 18px;
    color: rgba(16,24,63,.16);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 42px;
    font-weight: 700;
  }
  .df-about {
    background: var(--navy-2);
    color: white;
  }
  .df-about-grid {
    display: grid;
    grid-template-columns: minmax(280px, 420px) minmax(0, 1fr);
    gap: 58px;
    align-items: center;
  }
  .df-about-image {
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,.16);
    aspect-ratio: 4 / 5;
  }
  .df-about-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
  .df-about h2,
  .df-about h3 {
    color: white;
  }
  .df-about-copy h2 {
    margin: 0 0 18px;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(36px, 5vw, 62px);
    letter-spacing: 0;
  }
  .df-about-copy p {
    color: rgba(255,255,255,.72);
  }
  .df-check-list {
    display: grid;
    gap: 12px;
    padding: 0;
    margin: 26px 0 0;
    list-style: none;
  }
  .df-check-list li {
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(255,255,255,.9);
  }
  .df-check-list svg { color: var(--gold); flex: none; }
  .df-differentials {
    background: white;
  }
  .df-diff-grid {
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 48px;
    align-items: start;
  }
  .df-diff-list {
    display: grid;
    gap: 12px;
  }
  .df-diff-list div {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 18px;
    border-left: 3px solid var(--gold);
    background: var(--paper);
    color: var(--ink);
    border-radius: 0 8px 8px 0;
  }
  .df-diff-list svg {
    color: var(--gold-dark);
    flex: none;
  }
  .df-faq-grid {
    display: grid;
    grid-template-columns: .78fr 1.22fr;
    gap: 48px;
    align-items: start;
  }
  .df-faq-grid h2 { margin-bottom: 18px; }
  .df-faq-list {
    display: grid;
    gap: 10px;
  }
  .df-faq-item {
    border: 1px solid rgba(16,24,63,.12);
    border-radius: 8px;
    background: white;
    overflow: hidden;
  }
  .df-faq-item button {
    width: 100%;
    min-height: 62px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 18px;
    border: 0;
    background: transparent;
    color: var(--navy);
    text-align: left;
    font-weight: 900;
  }
  .df-faq-item button svg {
    flex: none;
    transition: transform .2s ease;
  }
  .df-faq-item button[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }
  .df-faq-item div {
    padding: 0 18px 18px;
  }
  .df-faq-item p {
    margin: 0;
    color: var(--muted);
    line-height: 1.7;
  }
  .df-final {
    padding: 84px 0;
    background: var(--navy);
    color: white;
  }
  .df-final-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(280px, 360px);
    gap: 48px;
    align-items: center;
  }
  .df-final h2 {
    color: white;
    max-width: 800px;
  }
  .df-final p {
    max-width: 650px;
    color: rgba(255,255,255,.72);
  }
  .df-final-actions {
    display: grid;
    gap: 14px;
  }
  .df-social,
  .df-final-actions span {
    min-height: 48px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 16px;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 6px;
    color: white;
    font-weight: 800;
  }
  .df-footer {
    padding: 38px 0;
    background: var(--navy-2);
    color: rgba(255,255,255,.7);
    border-top: 1px solid rgba(255,255,255,.1);
  }
  .df-footer-grid {
    display: grid;
    grid-template-columns: minmax(280px, 520px) minmax(220px, 300px) minmax(180px, 240px);
    gap: 48px;
    align-items: start;
    justify-content: space-between;
  }
  .df-footer-brand,
  .df-footer-links,
  .df-footer-credit {
    min-height: 128px;
  }
  .df-footer-brand {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .df-footer img {
    width: 170px;
    height: auto;
    margin-left: -8px;
    filter: brightness(0) invert(1);
  }
  .df-footer-brand p {
    max-width: 460px;
    margin: 14px 0 0;
    font-size: 13px;
    line-height: 1.6;
  }
  .df-footer-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding-left: 30px;
    border-left: 1px solid rgba(255,255,255,.12);
    font-size: 13px;
    line-height: 1.35;
    color: rgba(255,255,255,.82);
  }
  .df-footer-credit {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
    margin: 0;
    padding-left: 30px;
    border-left: 1px solid rgba(255,255,255,.12);
    font-size: 13px;
    line-height: 1.4;
    text-align: right;
    white-space: nowrap;
  }
  .df-footer a {
    color: var(--gold);
    font-weight: 900;
  }
  .df-floating-wa {
    position: fixed;
    right: 18px;
    bottom: 18px;
    z-index: 85;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background: var(--wa);
    color: white;
    border: 2px solid rgba(255,255,255,.92);
    box-shadow: 0 18px 42px rgba(37,195,102,.32), 0 0 0 6px rgba(255,255,255,.18);
    animation: df-wa-pulse 2.2s ease-out infinite;
  }
  .df-floating-wa:hover {
    transform: translateY(-2px);
    animation-play-state: paused;
  }
  @keyframes df-dot-pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(185,154,91,.72);
    }
    70% {
      box-shadow: 0 0 0 9px rgba(185,154,91,0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(185,154,91,0);
    }
  }
  @keyframes df-wa-pulse {
    0% {
      box-shadow: 0 18px 42px rgba(37,195,102,.32), 0 0 0 0 rgba(255,255,255,.72);
    }
    70% {
      box-shadow: 0 18px 42px rgba(37,195,102,.32), 0 0 0 18px rgba(255,255,255,0);
    }
    100% {
      box-shadow: 0 18px 42px rgba(37,195,102,.32), 0 0 0 0 rgba(255,255,255,0);
    }
  }

  @media (max-width: 1040px) {
    .df-desktop-nav { display: none; }
    .df-menu-button { display: inline-flex; margin-left: auto; }
    .df-nav-cta { display: none; }
    .df-mobile-nav.is-open { display: block; }
    .df-hero-grid,
    .df-about-grid,
    .df-diff-grid,
    .df-faq-grid,
    .df-final-grid {
      grid-template-columns: 1fr;
    }
    .df-hero-media { min-height: auto; }
    .df-hero-media { margin-right: 0; }
    .df-hero-note { right: 18px; bottom: 28px; }
    .df-confidence-grid,
    .df-area-grid,
    .df-steps {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 700px) {
    .df-wrap { width: min(100% - 28px, 1160px); }
    .df-preview-bar {
      min-height: 52px;
      padding: 8px 56px;
    }
    .df-preview-back {
      width: 40px;
      min-width: 40px;
      padding: 0;
    }
    .df-preview-back span {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      white-space: nowrap;
    }
    .df-preview-line {
      font-size: 10px;
      letter-spacing: .12em;
    }
    .df-preview-sub {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 10px;
    }
    .df-header {
      inset: 52px 0 auto;
      background: rgba(7,18,37,.85);
    }
    .df-mobile-nav { background: rgba(7,18,37,.88); }
    .df-nav { height: 66px; }
    .df-brand { width: auto; min-width: 0; height: 48px; gap: 9px; }
    .df-brand img { width: 44px; height: 40px; }
    .df-brand span { font-size: 16px; }
    .df-brand small { font-size: 9px; letter-spacing: .18em; }
    .df-menu-button {
      width: 42px;
      height: 42px;
      border-color: rgba(255,255,255,.16);
      background: rgba(255,255,255,.06);
      box-shadow: none;
    }
    .df-hero {
      padding: 146px 0 46px;
      background:
        linear-gradient(180deg, #f9f8f3 0%, #ffffff 54%, #eef2f7 100%);
    }
    .df-hero::before {
      background:
        linear-gradient(90deg, rgba(16,24,63,.06) 1px, transparent 1px),
        linear-gradient(0deg, rgba(16,24,63,.05) 1px, transparent 1px);
      background-size: 88px 88px;
      z-index: 0;
    }
    .df-hero::after {
      display: none;
    }
    .df-hero-grid { gap: 34px; }
    .df-kicker {
      width: 100%;
      align-items: flex-start;
      gap: 9px;
      margin-bottom: 14px;
      font-size: 10px;
      line-height: 1.45;
      letter-spacing: .18em;
      white-space: normal;
    }
    .df-kicker::before {
      width: 24px;
      margin-top: .65em;
    }
    .df-hero .df-kicker {
      color: var(--gold-dark);
    }
    .df-hero .df-kicker::before {
      background: var(--gold-dark);
    }
    .df-hero-lead {
      color: rgba(24,32,51,.92);
    }
    .df-hero h1 {
      color: var(--navy-2);
      font-size: clamp(34px, 10vw, 44px);
      max-width: 100%;
      line-height: 1.03;
      hyphens: manual;
    }
    .df-hero h1 span {
      color: var(--navy-2);
    }
    .df-hero-logo-mark {
      display: none;
    }
    .df-hero-lead,
    .df-section-head > p:not(.df-kicker),
    .df-faq-grid > div > p,
    .df-final p,
    .df-about-copy p {
      font-size: 15px;
    }
    .df-actions,
    .df-button {
      width: 100%;
    }
    .df-hero .df-button-outline {
      display: inline-flex;
    }
    .df-hero .df-button-wa {
      min-width: 0;
      min-height: 52px;
      border-radius: 6px;
      font-size: 12px;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    .df-hero-service {
      display: none;
    }
    .df-button {
      min-height: 52px;
      padding: 0 16px;
      font-size: 12px;
    }
    .df-trust-strip {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin-top: 26px;
    }
    .df-trust-strip span {
      width: 100%;
      min-height: 44px;
      background: rgba(255,255,255,.82);
    }
    .df-hero-media {
      display: grid;
      gap: 0;
      place-items: stretch;
    }
    .df-photo-frame {
      display: none;
    }
    .df-mobile-hero-photo {
      position: relative;
      display: block;
      width: 100vw;
      height: 380px;
      margin-left: calc(50% - 50vw);
      overflow: hidden;
      background: var(--navy-2);
      box-shadow: 0 24px 64px rgba(7,18,37,.18);
    }
    .df-mobile-hero-photo::after {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      background:
        linear-gradient(180deg, rgba(7,18,37,.08) 0%, rgba(7,18,37,.12) 58%, rgba(7,18,37,.82) 100%),
        linear-gradient(90deg, rgba(7,18,37,.86) 0%, rgba(7,18,37,.42) 34%, rgba(7,18,37,.06) 72%);
    }
    .df-mobile-hero-photo img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 92% center;
    }
    .df-hero-note {
      position: relative;
      right: auto;
      bottom: auto;
      margin: -72px auto 0;
      width: min(100% - 28px, 360px);
      max-width: 360px;
      padding: 18px;
      z-index: 4;
      text-align: left;
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 8px;
      box-shadow: 0 18px 42px rgba(7,18,37,.22);
      backdrop-filter: blur(10px);
    }
    .df-hero-note span {
      font-size: 10px;
    }
    .df-hero-note strong {
      font-size: 14px;
    }
    .df-confidence-grid,
    .df-area-grid,
    .df-steps {
      grid-template-columns: 1fr;
    }
    .df-confidence-grid div,
    .df-confidence-grid div:last-child {
      border-right: 0;
      border-left: 0;
      border-top: 1px solid rgba(255,255,255,.12);
    }
    .df-section { padding: 64px 0; }
    .df-area-card,
    .df-step { min-height: auto; }
    .df-about-grid { gap: 34px; }
    .df-footer-grid {
      grid-template-columns: 1fr;
      gap: 24px;
      align-items: start;
    }
    .df-footer-brand,
    .df-footer-links,
    .df-footer-credit {
      min-height: 0;
    }
    .df-footer-links,
    .df-footer-credit {
      width: 100%;
      justify-content: flex-start;
      padding-left: 0;
      padding-top: 20px;
      border-left: 0;
      border-top: 1px solid rgba(255,255,255,.12);
      text-align: left;
      white-space: normal;
    }
    .df-footer-credit {
      align-items: flex-start;
    }
    .df-floating-wa {
      right: 14px;
      bottom: 14px;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .df-preview-dot,
    .df-floating-wa {
      animation: none;
    }
  }
`;
