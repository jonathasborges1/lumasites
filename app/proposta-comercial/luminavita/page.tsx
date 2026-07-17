"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  Briefcase,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Compass,
  ExternalLink,
  FileClock,
  Gem,
  HelpCircle,
  Menu,
  MessagesSquare,
  PlayCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";
import { pageCss } from "./css";

/**
 * Dados extraídos de https://luminavitafinance.manus.space — ver
 * luminavita-analise-melhorias.md para a origem de cada trecho. Único canal
 * de contato real da fonte é o link de aplicação abaixo; não há
 * WhatsApp/telefone/e-mail/endereço divulgados publicamente.
 */

const OFFICIAL = "https://luminavitafinance.manus.space";
const APPLY_LINK = "https://forms.office.com/r/wng2siuuQs";

const nav = [
  { href: "#diagnostico", label: "Diagnóstico" },
  { href: "#metodo", label: "Método" },
  { href: "#jornada", label: "Jornada" },
  { href: "#resultados", label: "Resultados" },
  { href: "#duvidas", label: "Dúvidas" },
];

const sintomas = [
  { icon: BarChart3, text: "O faturamento cresce, mas a margem de lucro não acompanha a mesma proporção." },
  { icon: FileClock, text: "Você tem a sensação constante de retrabalho e ineficiência na operação." },
  { icon: ShieldCheck, text: "A falta de previsibilidade financeira gera ansiedade e insegurança na tomada de decisão." },
  { icon: Users, text: "Você está exausto de decidir tudo sozinho e carregar a empresa nas costas." },
];

const pilares = [
  { title: "Clareza Financeira", text: "Domine DRE, margem, rentabilidade e fluxo de caixa estratégico." },
  { title: "Estrutura de Processos", text: "Elimine o retrabalho e a dependência exclusiva da sua presença." },
  { title: "Gestão Estratégica", text: "Tome decisões baseadas em dados, rituais de gestão e frameworks." },
  { title: "Crescimento Sustentável", text: "Prepare a estrutura para escalar com segurança e previsibilidade." },
  { title: "Liderança e Alta Performance", text: "Conduza a empresa com firmeza, clareza mental e menos ansiedade." },
];

const metodo = [
  { letter: "S", title: "Situação Real", text: "Diagnóstico sem distorção" },
  { letter: "I", title: "Indicadores", text: "Clareza numérica" },
  { letter: "M", title: "Modelagem", text: "Processos estruturados" },
  { letter: "P", title: "Planejamento", text: "Estratégia definida" },
  { letter: "L", title: "Liderança", text: "Gestor fortalecido" },
  { letter: "E", title: "Execução", text: "Consistência na ação" },
  { letter: "S", title: "Sustentação", text: "Crescimento contínuo" },
];

const publico = [
  {
    icon: Briefcase,
    title: "Empresários e sócios",
    text: "De empresas com faturamento acima de R$ 5 milhões/ano.",
  },
  {
    icon: Gem,
    title: "Empresários técnicos",
    text: "Médicos, engenheiros, arquitetos e industriais que faturam bem, mas precisam evoluir a gestão.",
  },
  {
    icon: Users,
    title: "Executivos e diretores",
    text: "Responsáveis por áreas de gestão que buscam profissionalização.",
  },
];

const fases = [
  {
    action: "Destravar",
    title: "Clareza e Diagnóstico",
    text: "Você passa a enxergar a realidade do negócio sem distorções. Entendimento real dos números, identificação de gargalos e organização inicial da gestão.",
    quote: "Agora eu entendi o que está acontecendo.",
  },
  {
    action: "Organizar",
    title: "Estrutura",
    text: "Saída do improviso para um modelo estruturado. Definição de indicadores, organização financeira e mapeamento de processos.",
    quote: "Agora eu tenho controle.",
  },
  {
    action: "Decidir melhor",
    title: "Gestão Estratégica",
    text: "Sai da operação reativa para decisões conscientes. Rituais de gestão, frameworks de decisão e visão de médio e longo prazo.",
    quote: "Agora eu sei como decidir.",
  },
  {
    action: "Escalar com segurança",
    title: "Crescimento Sustentável",
    text: "Previsibilidade, estrutura para crescimento e redução do caos operacional.",
    quote: "Agora minha empresa cresce sem me esmagar.",
  },
  {
    action: "Manter e evoluir",
    title: "Liderança e Sustentação",
    text: "Gestão da própria energia, clareza mental e consolidação da autonomia como líder.",
    quote: "Agora eu lidero de verdade.",
  },
];

const resultados = [
  "Ler e interpretar seus números com segurança.",
  "Tomar decisões com base em dados, não emoção.",
  "Estruturar processos que não dependem de você.",
  "Conduzir o crescimento com previsibilidade.",
  "Liderar sua empresa sem carregar tudo sozinho.",
  "Ter clareza para conduzir o negócio com menos ansiedade e mais controle.",
];

const formato = [
  {
    icon: CalendarClock,
    title: "Encontros Estratégicos Quinzenais",
    text: "Sessões ao vivo focadas em diagnóstico, direcionamento e resolução de gargalos reais da sua operação.",
  },
  {
    icon: PlayCircle,
    title: "Materiais gravados",
    text: "Desde a leitura prática de uma DRE até técnicas de gestão de energia e clareza mental do líder.",
  },
  {
    icon: Clock3,
    title: "Suporte entre sessões",
    text: "Suporte direto entre as sessões com respostas em até 24 horas úteis. O processo continua em movimento.",
  },
  {
    icon: MessagesSquare,
    title: "Troca estratégica",
    text: "Com outros empresários que possuem operações relevantes e enfrentam desafios do mesmo calibre.",
  },
];

const faqs = [
  {
    q: "Para quem é a Mentoria Simples Assim?",
    a: "Para empresários e sócios de empresas com faturamento acima de R$ 5 milhões/ano, líderes comprometidos com a evolução real do negócio, empresários técnicos e executivos ou diretores que buscam profissionalização da gestão.",
  },
  {
    q: "O que está incluso na mentoria?",
    a: "Encontros estratégicos quinzenais, materiais gravados (da leitura prática de uma DRE a técnicas de gestão de energia e clareza mental do líder) e suporte direto entre as sessões, com resposta em até 24 horas úteis.",
  },
  {
    q: "Como funciona o processo para participar?",
    a: "A entrada acontece exclusivamente por aplicação. O formulário oficial reúne as informações necessárias para avaliar o alinhamento entre o momento do negócio e a proposta da mentoria.",
  },
  {
    q: "A mentoria segue um método ou é conteúdo solto?",
    a: "Sim. O Método SIMPLES organiza a evolução em sete fundamentos e uma jornada de cinco fases: destravar, organizar, decidir melhor, escalar com segurança e manter a evolução.",
  },
];

function SectionDivider({ icon: Icon }: { icon: typeof Compass }) {
  return (
    <div className="lv-divider" aria-hidden="true">
      <span>
        <Icon size={17} strokeWidth={1.6} />
      </span>
    </div>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const id = `lv-faq-${index}`;

  return (
    <div className="lv-faq-item">
      <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen((v) => !v)}>
        <span>{q}</span>
        <ChevronDown size={20} aria-hidden="true" />
      </button>
      <div id={id} className={`lv-faq-answer${open ? " is-open" : ""}`}>
        <div>
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const previousActive = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const desktopMedia = window.matchMedia("(min-width: 1080px)");

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnDesktop = () => {
      if (desktopMedia.matches) setMenuOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    desktopMedia.addEventListener("change", closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktopMedia.removeEventListener("change", closeOnDesktop);
      if (previousActive && document.contains(previousActive)) previousActive.focus();
    };
  }, [menuOpen]);

  return (
    <>
      <header className="lv-header">
        <div className="lv-wrap lv-nav">
          <a href="#inicio" className="lv-brand" aria-label="Lumina Vita Finance — início">
            <strong>
              Lumina Vita <em>Finance</em>
            </strong>
            <span>Mentoria Simples Assim</span>
          </a>

          <nav aria-label="Navegação principal" className="lv-desktop-nav">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="lv-nav-cta" href={APPLY_LINK} target="_blank" rel="noopener noreferrer">
            Quero Aplicar <ArrowRight size={15} aria-hidden="true" />
          </a>

          <button
            ref={menuButtonRef}
            className="lv-menu-button"
            type="button"
            aria-label="Abrir menu"
            aria-controls="lv-mobile-drawer"
            aria-expanded={menuOpen}
            aria-haspopup="dialog"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </header>

      <button
        className={`lv-menu-overlay${menuOpen ? " is-open" : ""}`}
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      <aside
        ref={drawerRef}
        id="lv-mobile-drawer"
        className={`lv-mobile-drawer${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!menuOpen}
      >
        <div className="lv-drawer-head">
          <div>
            <span>Menu</span>
            <small>Lumina Vita Finance</small>
          </div>
          <button ref={closeButtonRef} type="button" aria-label="Fechar menu" onClick={() => setMenuOpen(false)}>
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <nav className="lv-drawer-nav" aria-label="Navegação mobile">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span>{item.label}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          ))}
          <a
            className="lv-drawer-cta"
            href={APPLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Quero Aplicar Para a Mentoria
          </a>
        </nav>
      </aside>
    </>
  );
}

export default function LuminaVitaPage() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".lv-page");
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".lv-page > section:not(.lv-hero)"));

    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    page.classList.add("lv-motion-ready");
    sections.forEach((section) => section.classList.add("lv-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      page.classList.remove("lv-motion-ready");
      sections.forEach((section) => section.classList.remove("lv-reveal", "is-visible"));
    };
  }, []);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mentoria financeira e de gestão empresarial",
    name: "Mentoria Simples Assim — Lumina Vita Finance",
    provider: {
      "@type": "Organization",
      name: "Lumina Vita Finance",
      url: OFFICIAL,
    },
    description:
      "Mentoria premium para empresários e CEOs que buscam clareza financeira, estrutura de processos e gestão estratégica.",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Empresários e executivos de empresas com faturamento acima de R$ 5 milhões/ano",
    },
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
    <main className="lv-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <a className="lv-skip" href="#conteudo">
        Pular para o conteúdo
      </a>

      <div className="lv-preview-bar" role="note" aria-label="Aviso de prévia conceitual">
        <Link className="lv-preview-back" href="/proposta-comercial" aria-label="Voltar para propostas comerciais">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Voltar</span>
        </Link>
        <div className="lv-preview-line">
          <span className="lv-preview-dot" aria-hidden="true" />
          Prévia Conceitual
        </div>
        <span className="lv-preview-sub">
          Proposta elaborada pela{" "}
          <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
            LumaSites.com.br
          </a>
        </span>
        <a className="lv-preview-site" href={OFFICIAL} target="_blank" rel="noopener noreferrer">
          <span>Site oficial</span>
          <ExternalLink size={13} aria-hidden="true" />
        </a>
      </div>

      <SiteHeader />

      {/* ── Hero ── */}
      <section className="lv-hero" id="inicio">
        <div className="lv-hero-bg" aria-hidden="true">
          <Image
            src="/images/luminavita/hero-bg.webp"
            alt=""
            fill
            sizes="100vw"
            priority
            className="lv-hero-bg-img"
          />
          <div className="lv-hero-bg-overlay" />
        </div>
        <div className="lv-wrap lv-hero-inner" id="conteudo">
          <p className="lv-kicker">Para empresas que faturam acima de R$ 5M ao ano</p>
          <h1>
            O crescimento da sua empresa não precisa custar <em>a sua paz</em>.
          </h1>
          <p className="lv-hero-lead">
            A gestão baseada em feeling funcionou até aqui, mas não vai sustentar o seu próximo nível. Descubra como
            estruturar processos, entender seus números com clareza absoluta e tomar decisões com a segurança de um
            verdadeiro CEO.
          </p>
          <div className="lv-hero-ctas">
            <a className="lv-button lv-button-primary" href={APPLY_LINK} target="_blank" rel="noopener noreferrer">
              Quero Aplicar Para a Mentoria <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="lv-button lv-button-outline" href="#metodo">
              Ver como funciona
            </a>
          </div>
          <div className="lv-badge-row">
            <span className="lv-badge">
              <CalendarClock size={15} aria-hidden="true" /> Encontros quinzenais
            </span>
            <span className="lv-badge">
              <Clock3 size={15} aria-hidden="true" /> Suporte em até 24h úteis
            </span>
            <span className="lv-badge">
              <ShieldCheck size={15} aria-hidden="true" /> Vagas limitadas — processo seletivo
            </span>
          </div>
        </div>
      </section>

      {/* ── Reconhecimento ── */}
      <section className="lv-section lv-recognition" id="diagnostico" aria-labelledby="diagnostico-title">
        <div className="lv-wrap lv-editorial-wrap">
          <p className="lv-kicker">Reconhecimento</p>
          <h2 id="diagnostico-title">A conta do crescimento desordenado sempre chega.</h2>
          <div className="lv-editorial-copy">
            <p>Você construiu um negócio sólido. O faturamento entra, a equipe trabalha e a operação não para. Mas, nos bastidores, a realidade é outra.</p>
            <p>O crescimento trouxe complexidade. O que antes você controlava de perto agora parece um emaranhado de processos soltos e números confusos.</p>
          </div>
          <div className="lv-symptoms lv-stagger">
            {sintomas.map(({ icon: Icon, text }) => (
              <div className="lv-symptom" key={text}>
                <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                <p>{text}</p>
              </div>
            ))}
          </div>
          <p className="lv-editorial-close">Se você se reconhece neste cenário, o problema não é o seu modelo de negócio. É a ausência de uma gestão estruturada.</p>
          <blockquote className="lv-statement">“Crescer sem estrutura não é crescer. É acumular risco.”</blockquote>
        </div>
      </section>

      {/* ── Mudança de perspectiva ── */}
      <section className="lv-section lv-section-soft lv-perspective" id="perspectiva" aria-labelledby="perspectiva-title">
        <SectionDivider icon={Compass} />
        <div className="lv-wrap lv-perspective-grid">
          <div>
            <p className="lv-kicker">Mudança de perspectiva</p>
            <h2 id="perspectiva-title">Finanças não é um departamento de suporte. <em>É o centro nervoso da sua estratégia.</em></h2>
          </div>
          <div className="lv-editorial-copy">
            <p>A maioria dos empresários enxerga o financeiro apenas como a área que paga contas e emite notas. Esse é o erro que custa a escala segura do seu negócio.</p>
            <p>Quando você transforma o financeiro na inteligência estratégica da empresa, para de reagir a problemas e passa a antecipar cenários.</p>
          </div>
        </div>
      </section>

      {/* ── Solução e pilares ── */}
      <section className="lv-section" id="solucao" aria-labelledby="solucao-title">
        <SectionDivider icon={Target} />
        <div className="lv-wrap">
          <div className="lv-section-head lv-solution-head">
            <p className="lv-kicker">A solução</p>
            <h2 id="solucao-title">Mentoria <em>Simples Assim</em></h2>
            <p>Uma jornada de estruturação estratégica para empresários e gestores que precisam evoluir a gestão para sustentar o crescimento. Aqui, o foco é clareza, estrutura e execução.</p>
          </div>
          <p className="lv-subheading">Os 5 pilares da evolução</p>
          <div className="lv-pillars-grid lv-stagger">
            {pilares.map((item, index) => (
              <article className="lv-pillar" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Método SIMPLES ── */}
      <section className="lv-section lv-section-soft lv-method" id="metodo" aria-labelledby="metodo-title">
        <div className="lv-wrap">
          <div className="lv-section-head">
            <p className="lv-kicker">O método</p>
            <h2 id="metodo-title">Método <em>SIMPLES</em></h2>
            <p>Uma estrutura proprietária que transforma a complexidade da gestão em etapas claras e aplicáveis. Cada letra representa um fundamento da evolução como gestor.</p>
          </div>
          <div className="lv-method-grid lv-stagger">
            {metodo.map((item) => (
              <article className="lv-method-item" key={`${item.letter}-${item.title}`}>
                <strong>{item.letter}</strong>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jornada ── */}
      <section className="lv-section lv-journey lv-section-visual" id="jornada" aria-labelledby="jornada-title">
        <div className="lv-section-visual-bg" aria-hidden="true">
          <Image
            src="/images/luminavita/journey-visual.webp"
            alt=""
            fill
            sizes="100vw"
            className="lv-section-visual-bg-img"
          />
          <div className="lv-section-visual-bg-overlay" />
        </div>
        <div className="lv-wrap">
          <div className="lv-section-head">
            <p className="lv-kicker">A jornada</p>
            <h2 id="jornada-title">Do caos operacional à gestão estratégica.</h2>
            <p>Você não aprende tudo de uma vez. Evolui na ordem certa, respeitando o tempo de maturidade da empresa e do gestor.</p>
          </div>
          <div className="lv-journey-list lv-stagger">
            {fases.map((fase, index) => (
              <article className="lv-journey-item" key={fase.title}>
                <div className="lv-journey-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="lv-journey-content">
                  <small>{fase.action}</small>
                  <h3>{fase.title}</h3>
                  <p>{fase.text}</p>
                  <blockquote>“{fase.quote}”</blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Estrutura ── */}
      <section className="lv-section lv-section-soft" id="formato" aria-labelledby="formato-title">
        <div className="lv-wrap">
          <div className="lv-section-head">
            <p className="lv-kicker">Estrutura</p>
            <h2 id="formato-title">Uma estrutura desenhada para resultados concretos.</h2>
            <p>A transformação não acontece por acúmulo de informação, mas por aplicação direcionada.</p>
          </div>
          <div className="lv-format-grid lv-stagger">
            {formato.map(({ icon: Icon, title, text }) => (
              <article className="lv-format-item" key={title}>
                <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Resultados ── */}
      <section className="lv-section" id="resultados" aria-labelledby="resultados-title">
        <div className="lv-wrap lv-results-layout">
          <div className="lv-section-head">
            <p className="lv-kicker">Transformação</p>
            <h2 id="resultados-title">O que você será capaz de fazer ao final da mentoria.</h2>
            <p>Mais do que organizar a empresa, você se torna um gestor capaz de conduzir o negócio com a segurança de quem domina os próprios números.</p>
          </div>
          <div className="lv-results-grid lv-stagger">
            {resultados.map((item) => (
              <div className="lv-result-item" key={item}>
                <CheckCircle2 size={19} aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Posicionamento ── */}
      <section className="lv-section lv-section-soft" id="publico" aria-labelledby="publico-title">
        <div className="lv-wrap">
          <div className="lv-section-head">
            <p className="lv-kicker">Posicionamento</p>
            <h2 id="publico-title">Esta mentoria não é para todos. E isso é intencional.</h2>
          </div>
          <div className="lv-audience-grid lv-stagger">
            {publico.map(({ icon: Icon, title, text }) => (
              <article className="lv-audience-card" key={title}>
                <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="lv-audience-not">
            <strong>Não é para:</strong>
            <span>startups em fase inicial, microempresas ou MEIs, profissionais buscando fórmulas mágicas e quem não está disposto a confrontar a realidade dos próprios números.</span>
          </div>
        </div>
      </section>

      {/* ── Sobre a fundadora ── */}
      <section className="lv-section" id="fundadora" aria-labelledby="fundadora-title">
        <SectionDivider icon={Award} />
        <div className="lv-wrap lv-founder-grid">
          <figure className="lv-founder-photo">
            <Image
              src="/images/luminavita/fundadora.png"
              alt="Fundadora da Lumina Vita Finance"
              width={1056}
              height={1408}
            />
          </figure>
          <div className="lv-founder-copy">
            <p className="lv-kicker">Sobre a mentora</p>
            <h2 id="fundadora-title">Fundadora — Lumina Vita Finance</h2>
            <p className="lv-founder-intro">Minha trajetória foi forjada na prática, lidando com empresas em rápido crescimento, estruturas desorganizadas e decisões sob extrema pressão.</p>
            <div className="lv-quote-block">
              <Quote className="lv-quote-mark" size={56} aria-hidden="true" />
              <blockquote>
                "Minha abordagem combina rigor técnico com presença firme. Eu não suavizo o que precisa ser ajustado,
                mas conduzo com a clareza necessária para que você avance sem sobrecarga."
              </blockquote>
            </div>
            <p className="lv-founder-intro">Meu objetivo não é tomar as decisões por você, mas oferecer a estrutura mental e técnica para que decida com a segurança de um CFO experiente.</p>
            <div className="lv-founder-traits">
              <span><strong>Estilo</strong>Técnica, direta e estratégica</span>
              <span><strong>Foco</strong>Evolução real, não teoria</span>
              <span><strong>Condução</strong>Estruturada e baseada em dados</span>
              <span><strong>Compromisso</strong>Com a sua autonomia</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="lv-section lv-section-soft" id="duvidas" aria-labelledby="faq-title">
        <SectionDivider icon={HelpCircle} />
        <div className="lv-wrap lv-faq-grid">
          <div>
            <p className="lv-kicker">Perguntas frequentes</p>
            <h2 id="faq-title">Dúvidas comuns sobre a mentoria</h2>
            <p>Respostas diretas para quem está avaliando aplicar.</p>
          </div>
          <div className="lv-faq-list lv-stagger">
            {faqs.map((item, index) => (
              <FAQItem key={item.q} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="lv-final" id="aplicar" aria-labelledby="final-title">
        <div className="lv-final-bg" aria-hidden="true">
          <Image src="/images/luminavita/cta-bg.webp" alt="" fill sizes="100vw" className="lv-final-bg-img" />
          <div className="lv-final-bg-overlay" />
        </div>
        <div className="lv-wrap lv-final-inner">
          <p className="lv-kicker">O próximo passo para a profissionalização da sua gestão</p>
          <h2 id="final-title">Pronto para trocar o improviso por clareza?</h2>
          <p>
            A entrada acontece exclusivamente por aplicação para garantir o alinhamento entre o momento do negócio e
            o nível das discussões do grupo.
          </p>
          <a className="lv-button lv-button-primary" href={APPLY_LINK} target="_blank" rel="noopener noreferrer">
            Quero Aplicar Para a Mentoria <ArrowRight size={16} aria-hidden="true" />
          </a>
          <p className="lv-final-note">Você será direcionado(a) ao formulário oficial de aplicação.</p>
        </div>
      </section>

      <footer className="lv-footer">
        <div className="lv-wrap lv-footer-grid">
          <div className="lv-footer-top">
            <div className="lv-footer-brand">
              <strong>
                Lumina Vita <em>Finance</em>
              </strong>
              <span>Mentoria premium para empresários e CEOs que buscam clareza financeira, estrutura de processos e gestão estratégica.</span>
            </div>
            <div className="lv-footer-links" aria-label="Navegação">
              <strong>Navegação</strong>
              {nav.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
            <div className="lv-footer-links" aria-label="Contato">
              <strong>Contato</strong>
              <a href={APPLY_LINK} target="_blank" rel="noopener noreferrer">
                Aplicar para a mentoria
              </a>
              <span>Atendimento apenas via processo seletivo</span>
            </div>
          </div>

          <div className="lv-footer-legal">
            <p>
              Esta mentoria é um serviço de consultoria e educação em gestão financeira e estratégica. Não constitui
              consultoria de investimentos nem promessa de resultado financeiro específico.
            </p>
          </div>

          <p className="lv-footer-credit">
            <span>© {new Date().getFullYear()} Lumina Vita Finance · todos os direitos reservados · Prévia conceitual criada por</span>
            <Link href="/" aria-label="Luma Sites">
              Luma Sites
            </Link>
          </p>
        </div>
      </footer>

      <a
        className="lv-floating-apply"
        href={APPLY_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Quero aplicar para a mentoria"
      >
        <Sparkles size={18} aria-hidden="true" />
        <span>Quero Aplicar</span>
      </a>

      <style jsx global>{pageCss}</style>
    </main>
  );
}
