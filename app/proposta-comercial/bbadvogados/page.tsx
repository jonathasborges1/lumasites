"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown, ArrowLeft, ArrowUpRight, BriefcaseBusiness, Building2, ChevronDown, Compass, Eye, Facebook,
  HeartHandshake, HelpCircle, Instagram, Landmark, Linkedin, Mail, MapPin, Menu, Phone,
  Quote as QuoteIcon, Route, Scale, ShieldCheck, Sparkles, Target, Users, Wheat, X,
} from "lucide-react";
import styles from "./bbadvogados.module.css";
import { brazilStates, officeStateIds } from "./brazil-map-data";

const PHONE = "(51) 3751-3928";
const EMAIL = "atendimento@bbadvogados.net";
const SOURCE = "https://bbadvogados.net/";
const BRANDBOOK = "/docs/bbadvogados/brandbook-comparativo.html";
const ABOUT_ROTATION_MS = 6000;
const WHATSAPP = `https://wa.me/555137513928?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta com o Bergamaschi & Bergamaschi Advogados Associados.")}`;
const images = {
  logo: "/images/bbadvogados/logo.png", team: "/images/bbadvogados/equipe.jpg",
  quemSomos: "/images/bbadvogados/quemsomos-hero.jpg",
  felipe: "/images/bbadvogados/felipe-bergamaschi-color.jpg", vanessa: "/images/bbadvogados/vanessa-urdangarin-color.jpg",
  jaqueli: "/images/bbadvogados/jaqueli-gasperini-color.jpg", augusto: "/images/bbadvogados/augusto-kummer-color.jpg",
};
const nav = [["Manifesto", "#manifesto"], ["Atuação", "#atuacao"], ["Sócios", "#socios"], ["Presença", "#presenca"], ["Contato", "#contato"]];
const practices = [
  ["Direito do Agronegócio", "Estratégia jurídica para produtores, propriedades rurais e negócios que movimentam o campo.", Wheat, "/images/bbadvogados/areas/agronegocio.jpg"],
  ["Direito Empresarial", "Decisões societárias, contratos e prevenção de riscos com visão de negócio.", BriefcaseBusiness, "/images/bbadvogados/areas/empresarial.jpg"],
  ["Tributário Estratégico", "Defesa, planejamento e oportunidades tributárias orientadas por análise técnica.", Landmark, "/images/bbadvogados/areas/tributario.jpg"],
  ["Risco Trabalhista", "Prevenção de passivos e condução estratégica das relações de trabalho.", ShieldCheck, "/images/bbadvogados/areas/trabalhista.jpg"],
  ["Direito Previdenciário", "Aposentadorias, pensões e benefícios conduzidos com clareza e segurança.", HeartHandshake, "/images/bbadvogados/areas/previdenciario.jpg"],
  ["Construção Civil", "Apoio jurídico da estruturação do empreendimento à resolução de conflitos.", Building2, "/images/bbadvogados/areas/construcao-civil.jpg"],
  ["Servidores Públicos", "Defesa de direitos funcionais, previdenciários e administrativos.", Scale, "/images/bbadvogados/areas/servidores-publicos.jpg"],
  ["Família & Sucessões", "Soluções sensíveis e objetivas para patrimônio, família e continuidade.", Users, "/images/bbadvogados/areas/familia-sucessoes.jpg"],
] as const;
const partners = [
  ["Felipe Bergamaschi", "Sócio", "OAB/RS 68.101", "ES 37.843 · GO 62.683 · MT 35.200/A · SP 524.478", images.felipe],
  ["Vanessa Urdangarin Bergamaschi", "Sócia", "OAB/RS 73.040", "MG 242.952 · RJ 265.846 · PR 132.542", images.vanessa],
  ["Jaqueli Gasperini", "Sócia", "OAB/RS 109.786", "BA 74.288", images.jaqueli],
  ["Augusto Kummer", "Sócio", "OAB/RS 109.916", "DF 81.724", images.augusto],
];
const offices = [
  ["01", "Porto Alegre", "RS", 245, 410],
  ["02", "Encantado", "RS", 222, 396],
  ["03", "Ilópolis", "RS", 217, 401],
  ["04", "Ribeirão Preto", "SP", 275, 308],
  ["05", "Goiânia", "GO", 270, 275],
  ["06", "Florianópolis", "SC", 283, 392],
] as const;
const faqs = [
  ["O escritório atende em todo o Brasil?", "Sim. A presença física em seis cidades é combinada com uma estrutura de atendimento nacional, permitindo conduzir demandas em diferentes regiões do país."],
  ["Como funciona o primeiro atendimento?", "Você apresenta a demanda e os documentos iniciais. A equipe identifica a área responsável, analisa o contexto e orienta com clareza sobre os caminhos possíveis."],
  ["O atendimento é para pessoas e empresas?", "Sim. A atuação contempla pessoas físicas, famílias, produtores rurais, servidores públicos e empresas de diferentes portes."],
  ["Quais documentos devo enviar?", "A relação depende da área e do caso. No primeiro contato, a equipe informa exatamente o que é necessário para tornar a análise mais objetiva."],
];
const aboutPanels = [
  {
    label: "Missão",
    title: "Nossa Missão",
    text: "Transformar o Direito em um instrumento de prosperidade e resultado, oferecendo soluções jurídicas de excelência que geram valor real para nossos clientes e colaboradores.",
    icon: Target,
  },
  {
    label: "Visão",
    title: "Nossa Visão",
    text: "Ser o escritório jurídico de referência nacional em ações estratégicas de larga escala, consolidando uma cultura de alta performance, inovação e impacto positivo.",
    icon: Eye,
  },
  {
    label: "Valores",
    title: "Nossos Valores",
    text: "Garra, postura de dono e estado da ação, crescimento, propósito e espiritualidade orientam cada decisão e fortalecem a nossa trajetória.",
    icon: Sparkles,
  },
];

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88M20.47 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.31-1.65a11.88 11.88 0 0 0 5.68 1.45c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.23-6.16-3.47-8.41"/></svg>;
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const element = ref.current; if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / 1100, 1);
        setCount(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick); observer.disconnect();
    }, { threshold: .4 });
    observer.observe(element); return () => observer.disconnect();
  }, [value]);
  return <span ref={ref}>{count.toLocaleString("pt-BR")}{suffix}</span>;
}

export default function BBAdvogadosPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [aboutTab, setAboutTab] = useState(0);
  const [aboutCardHovered, setAboutCardHovered] = useState(false);
  const [hoveredOffice, setHoveredOffice] = useState<number | null>(null);
  const [aboutCycle, setAboutCycle] = useState(0);
  const [activeArea, setActiveArea] = useState(0);
  const [areaPaused, setAreaPaused] = useState(false);
  const [areaVisible, setAreaVisible] = useState(false);
  const areaGridRef = useRef<HTMLDivElement>(null);
  const aboutRotationRemaining = useRef(ABOUT_ROTATION_MS);
  const resetAboutRotation = useRef(false);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const update = () => {
      setScrolled(window.scrollY > 24);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
      if (!reduceMotion && heroImageRef.current) {
        const shift = Math.min(window.scrollY * 0.12, 90);
        heroImageRef.current.style.transform = `translateY(${shift}px) scale(1.08)`;
        if (heroGridRef.current) heroGridRef.current.style.transform = `translateY(${shift * 0.4}px)`;
      }
    };
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    const readyTimer = window.setTimeout(() => setReady(true), 120);
    const reveal = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.setAttribute("data-visible", "true"); observer.unobserve(entry.target); }
    }), { threshold: .08, rootMargin: "0px 0px -5% 0px" });
    reveal.forEach(el => observer.observe(el));
    const fallback = window.setTimeout(() => reveal.forEach(el => el.setAttribute("data-visible", "true")), 1800);
    return () => { clearTimeout(readyTimer); clearTimeout(fallback); observer.disconnect(); };
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);
  useEffect(() => {
    if (aboutCardHovered) return;
    const duration = aboutRotationRemaining.current;
    const startedAt = performance.now();
    let completed = false;
    const rotation = window.setTimeout(() => {
      completed = true;
      aboutRotationRemaining.current = ABOUT_ROTATION_MS;
      setAboutTab(current => (current + 1) % aboutPanels.length);
    }, duration);
    return () => {
      window.clearTimeout(rotation);
      if (resetAboutRotation.current) {
        resetAboutRotation.current = false;
        return;
      }
      if (!completed) {
        aboutRotationRemaining.current = Math.max(0, duration - (performance.now() - startedAt));
      }
    };
  }, [aboutTab, aboutCardHovered, aboutCycle]);

  useEffect(() => {
    const el = areaGridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAreaVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || areaPaused || !areaVisible) return;
    const id = window.setInterval(() => {
      setActiveArea(current => (current + 1) % practices.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, [areaPaused, areaVisible]);

  const handleCardTilt = (e: React.MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    card.style.setProperty("--tiltX", `${(py - 0.5) * -10}deg`);
    card.style.setProperty("--tiltY", `${(px - 0.5) * 10}deg`);
  };
  const resetCardTilt = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--tiltX", "0deg");
    e.currentTarget.style.setProperty("--tiltY", "0deg");
  };

  const selectAboutTab = (index: number) => {
    aboutRotationRemaining.current = ABOUT_ROTATION_MS;
    resetAboutRotation.current = true;
    setAboutTab(index);
    setAboutCycle(current => current + 1);
  };

  const schema = { "@context": "https://schema.org", "@type": "LegalService", name: "Bergamaschi & Bergamaschi Advogados Associados", url: SOURCE, telephone: "+555137513928", email: EMAIL, areaServed: "BR", knowsAbout: practices.map(p => p[0]) };

  return <div className={`${styles.site} ${ready ? styles.ready : ""}`}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <a className={styles.skipLink} href="#conteudo">Pular para o conteúdo</a>
    <div className={styles.preview} role="note" aria-label="Aviso de prévia conceitual">
      <Link className={styles.previewBack} href="/proposta-comercial" aria-label="Voltar para propostas comerciais"><ArrowLeft size={16} aria-hidden="true"/><span>Voltar</span></Link>
      <div className={styles.previewLine}><span className={styles.previewDot} aria-hidden="true"/> Prévia Conceitual</div>
      <span className={styles.previewSub}>Proposta elaborada pela <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">LumaSites.com.br</a></span>
      <a className={styles.previewBrandbook} href={BRANDBOOK} target="_blank" rel="noopener noreferrer"><span>Brandbook</span><Eye size={13} aria-hidden="true"/></a>
      <a className={styles.previewSource} href={SOURCE} target="_blank" rel="noopener noreferrer"><span>Site atual</span><ArrowUpRight size={13}/></a>
    </div>
    <div className={styles.progress} style={{ transform: `scaleX(${progress / 100})` }} />

    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <a className={styles.brand} href="#topo" aria-label="Bergamaschi e Bergamaschi — início">
        <Image src={images.logo} width={46} height={46} alt="" priority />
        <span><strong>Bergamaschi & Bergamaschi</strong><small>Advogados Associados</small></span>
      </a>
      <nav className={styles.desktopNav} aria-label="Navegação principal">
        {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className={styles.headerCta} href={WHATSAPP} target="_blank" rel="noreferrer">Fale conosco <ArrowUpRight size={15}/></a>
      <button className={styles.menuButton} type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>
    <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`} aria-hidden={!menuOpen}>
      <span className={styles.mobileMenuLabel}>Navegação</span>
      {nav.map(([label, href], i) => <a key={href} href={href} onClick={() => setMenuOpen(false)}><span>0{i + 1}</span>{label}<ArrowUpRight/></a>)}
      <a className={styles.mobileWhatsapp} href={WHATSAPP} target="_blank" rel="noreferrer"><WhatsAppIcon/> Agendar consulta</a>
    </div>

    <main id="conteudo">
      <section className={styles.hero} id="topo">
        <div className={styles.heroImage} ref={heroImageRef}><Image src={images.team} alt="Sócios do Bergamaschi & Bergamaschi Advogados Associados" fill priority sizes="100vw" quality={90}/></div>
        <div className={styles.heroVeil}/><div className={styles.heroGrid} aria-hidden="true" ref={heroGridRef}/>
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}><span>Leitura estratégica</span><span>Condução próxima</span></div>
          <h1>Direito que move<br/><em>resultados.</em></h1>
          <div className={styles.heroBottom}>
            <p>Estratégia para decisões complexas.<br/>Presença para conduzir cada passo.</p>
            <div className={styles.heroActions}>
              <a href={WHATSAPP} target="_blank" rel="noreferrer"><WhatsAppIcon/> Agende uma consulta</a>
              <a href="#manifesto">Conheça o escritório <ArrowDown className={styles.bounceArrow} size={16}/></a>
            </div>
          </div>
        </div>
        <div className={styles.heroSide}><span>Visão ampla</span><small>para decisões que constroem o futuro</small></div>
      </section>

      <section className={styles.credentials} aria-label="Credenciais do escritório">
        <div><strong><Counter value={20} suffix="+"/></strong><span>anos de história</span></div>
        <div><strong><Counter value={20} suffix=" mil+"/></strong><span>processos conduzidos</span></div>
        <div><strong><Counter value={6}/></strong><span>cidades com escritório</span></div>
        <div><strong>Brasil</strong><span>atendimento nacional</span></div>
      </section>

      <section className={styles.manifesto} id="manifesto">
        <SectionNumber number="01" label="Manifesto"/>
        <div className={styles.aboutComposition}>
          <div className={styles.aboutIntro} data-reveal>
            <span className={styles.aboutKicker}><Scale/> Nossa essência</span>
            <h2>Excelência Jurídica<br/>Com <em>Propósito</em></h2>
            <p>O Bergamaschi & Bergamaschi combina repertório multidisciplinar, leitura de negócio e acompanhamento próximo para transformar desafios complexos em caminhos seguros.</p>
            <a href="#atuacao">Conheça nossas especialidades <ArrowUpRight/></a>
          </div>
          <div className={styles.aboutFeature} data-reveal>
            <div
              className={`${styles.aboutPanel} ${aboutCardHovered ? styles.aboutPanelPaused : ""}`}
              onMouseEnter={() => setAboutCardHovered(true)}
              onMouseLeave={() => setAboutCardHovered(false)}
            >
              <div className={styles.aboutPanelIcon} aria-hidden="true">
                {aboutPanels.map((panel, index) => {
                  const Icon = panel.icon;
                  return <Icon key={panel.label} className={aboutTab === index ? styles.aboutPanelIconActive : ""}/>;
                })}
              </div>
              <span className={styles.aboutPanelOverline}>O que orienta nossa atuação</span>
              <div className={styles.aboutPanelStage} aria-live="polite" aria-atomic="true">
                {aboutPanels.map((panel, index) => (
                  <div
                    className={`${styles.aboutPanelContent} ${aboutTab === index ? styles.aboutPanelContentActive : ""}`}
                    aria-hidden={aboutTab !== index}
                    key={panel.label}
                  >
                    <h3>{panel.title}</h3>
                    <p>{panel.text}</p>
                  </div>
                ))}
              </div>
              <div className={styles.aboutTabs} role="tablist" aria-label="Missão, visão e valores">
                {aboutPanels.map((panel, index) => (
                  <button
                    key={`${panel.label}-${aboutTab === index ? aboutCycle : 0}`}
                    type="button"
                    role="tab"
                    aria-selected={aboutTab === index}
                    className={aboutTab === index ? styles.aboutTabActive : ""}
                    onClick={() => selectAboutTab(index)}
                  >
                    <span>0{index + 1}</span>{panel.label}
                  </button>
                ))}
              </div>
            </div>
            <figure className={styles.aboutPhoto}>
              <Image src={images.quemSomos} alt="Sócios do Bergamaschi & Bergamaschi Advogados Associados" fill loading="eager" sizes="(max-width: 800px) 92vw, 45vw" quality={90}/>
              <figcaption><strong>Liderança</strong><span>próxima em cada estratégia</span></figcaption>
            </figure>
          </div>
        </div>
        <div className={styles.aboutProof} data-reveal>
          <p>Antes de propor respostas, buscamos <strong>compreender todo o contexto</strong> para construir uma resposta jurídica sólida.</p>
          <div>
            <span><strong>Estratégia</strong> visão além do processo</span>
            <span><strong>Precisão</strong> rigor em cada decisão</span>
            <span><strong>Proximidade</strong> comunicação presente</span>
            <span><strong>Evolução</strong> soluções em movimento</span>
          </div>
        </div>
      </section>

      <SectionDivider icon={Compass} />

      <section className={styles.practices} id="atuacao">
        <SectionNumber number="02" label="Áreas de atuação"/>
        <div className={styles.practicesHeader} data-reveal><h2>Expertise que<br/><em>atravessa setores.</em></h2><p>Oito áreas integradas para enxergar relações, antecipar riscos e construir respostas sob diferentes perspectivas.</p></div>
        <div className={styles.areaGrid} ref={areaGridRef}>
          {practices.map(([title, copy, Icon, img], i) => (
            <article
              className={`${styles.areaCard}${areaVisible && i === activeArea ? ` ${styles.areaCardActive}` : ""}`}
              key={title}
              tabIndex={0}
              data-reveal
              data-delay={String((i % 4) + 1)}
              onMouseMove={handleCardTilt}
              onMouseEnter={() => { setActiveArea(i); setAreaPaused(true); }}
              onMouseLeave={(e) => { resetCardTilt(e); setAreaPaused(false); }}
              onFocus={() => { setActiveArea(i); setAreaPaused(true); }}
              onBlur={() => setAreaPaused(false)}
            >
              <div className={styles.areaCardMedia}>
                <Image src={img} alt="" aria-hidden="true" fill sizes="(max-width: 700px) 50vw, (max-width: 1050px) 33vw, 25vw" quality={75}/>
              </div>
              <div className={styles.areaCardTop}>
                <span className={styles.areaCardIndex}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.areaCardIcon}><Icon size={19} strokeWidth={1.6}/></span>
              </div>
              <div className={styles.areaCardBody}>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span className={styles.areaCardCta}>Conheça <ArrowUpRight size={13}/></span>
              </div>
              {areaVisible && i === activeArea && <span className={styles.areaCardProgress} key={`progress-${activeArea}`} aria-hidden="true" />}
            </article>
          ))}
        </div>
      </section>

      <SectionDivider icon={QuoteIcon} />

      <section className={styles.quote} aria-label="Compromisso">
        <div className={styles.quoteTexture}/><span data-reveal>Nosso compromisso</span>
        <blockquote data-reveal>“Excelência técnica<br/>como <em>hábito.</em>”</blockquote>
        <p data-reveal>Rigor no método. Objetividade nas decisões. Consistência ao longo da jornada.</p>
      </section>

      <SectionDivider icon={Users} />

      <section className={styles.partners} id="socios">
        <SectionNumber number="03" label="Sócios"/>
        <div className={styles.partnersHeader} data-reveal><h2>Especialistas que<br/><em>assumem a responsabilidade.</em></h2><p>Experiências complementares reunidas para analisar cada demanda por múltiplos ângulos.</p></div>
        <div className={styles.partnerGrid}>{partners.map(([name,role,oab,regs,image],i) => <article key={name} className={styles.partnerCard} tabIndex={0} data-reveal>
          <div className={styles.partnerPhoto}><Image src={image} alt={name} fill loading="eager" sizes="(max-width: 640px) 100vw, 25vw"/><span>0{i+1}</span></div>
          <div className={styles.partnerInfo}><small>{role}</small><h3>{name}</h3><p>{oab}</p><span>{regs}</span></div>
        </article>)}</div>
      </section>

      <SectionDivider icon={Route} />

      <section className={styles.journey}>
        <div className={styles.journeyIntro} data-reveal>
          <span>Como trabalhamos</span>
          <h2>Método que dá direção.</h2>
          <p>Quatro etapas, uma condução só: da primeira mensagem ao acompanhamento contínuo do seu caso.</p>
        </div>
        <div className={styles.journeyStepper}>
          <div className={styles.journeyTrack} aria-hidden="true"><span className={styles.journeyTrackFill} data-reveal /></div>
          {[
            { n: "01", t: "Primeiro contato", c: "Você compartilha a demanda e os documentos iniciais." },
            { n: "02", t: "Análise estratégica", c: "A equipe identifica riscos, direitos e caminhos possíveis." },
            { n: "03", t: "Caminho definido", c: "Cenários, custos e próximos passos são apresentados com objetividade." },
            { n: "04", t: "Acompanhamento", c: "Condução próxima e atualizações ao longo de toda a jornada." },
          ].map(({ n, t, c }, i) => (
            <div className={styles.journeyStep} key={n} data-reveal data-delay={String(i + 1)}>
              <div className={styles.journeyNumWrap}><span className={styles.journeyNum}>{n}</span></div>
              <h3>{t}</h3>
              <p>{c}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider icon={MapPin} />

      <section className={styles.presence} id="presenca">
        <div className={styles.presenceGrid}>
          <div className={styles.presenceLeft}>
            <div className={styles.presenceCopy} data-reveal><SectionNumber number="04" label="Onde estamos"/><h2>Conexão regional.<br/><em>Alcance sem fronteiras.</em></h2><p>Bases em regiões estratégicas aproximam nossa equipe das diferentes realidades de clientes e negócios.</p></div>
            <div className={styles.mapWrap} aria-hidden="true" data-reveal>
              <svg viewBox="0 0 450 460">
                {brazilStates.map(s => (
                  <path key={s.id} d={s.d} className={officeStateIds.includes(s.id) ? styles.mapStateActive : styles.mapState} />
                ))}
                {offices.map(([n, city, , x, y], i) => (
                  <g
                    key={city}
                    className={`${styles.mapPin}${hoveredOffice === i ? ` ${styles.mapPinActive}` : ""}`}
                    onMouseEnter={() => setHoveredOffice(i)}
                    onMouseLeave={() => setHoveredOffice(null)}
                  >
                    <circle className={styles.mapPinRing} cx={x} cy={y} r="5"/>
                    <circle className={styles.mapPinCore} cx={x} cy={y} r="3.2"/>
                    <text className={styles.mapPinLabel} x={x} y={y - 11} textAnchor="middle">{city}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
          <div className={styles.officeList}>{offices.map(([n,city,state], i) => (
            <div
              key={city}
              data-reveal
              className={hoveredOffice === i ? styles.officeActive : ""}
              onMouseEnter={() => setHoveredOffice(i)}
              onMouseLeave={() => setHoveredOffice(null)}
            ><span>{n}</span><strong>{city}</strong><small>{state}</small><MapPin/></div>
          ))}</div>
        </div>
      </section>

      <SectionDivider icon={HelpCircle} />

      <section className={styles.faq}>
        <div className={styles.faqIntro} data-reveal><span>Informação que aproxima</span><h2>Perguntas frequentes.</h2><p>Respostas essenciais antes do primeiro contato.</p></div>
        <div className={styles.faqList}>{faqs.map(([q,a],i) => <article className={openFaq === i ? styles.faqOpen : ""} key={q}>
          <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>0{i+1}</span>{q}<ChevronDown/></button><div><p>{a}</p></div>
        </article>)}</div>
      </section>

      <SectionDivider icon={Mail} />

      <section className={styles.contact} id="contato">
        <div className={styles.contactTop} data-reveal><span>Fale com nossa equipe</span><h2>Cada decisão começa<br/>com uma <em>conversa.</em></h2><a href={WHATSAPP} target="_blank" rel="noreferrer"><WhatsAppIcon size={22}/>Agendar uma consulta<ArrowUpRight/></a></div>
        <div className={styles.contactBottom}>
          <div data-reveal><small>Telefone e WhatsApp</small><a href="tel:+555137513928"><Phone/> {PHONE}</a></div>
          <div data-reveal><small>E-mail</small><a href={`mailto:${EMAIL}`}><Mail/> {EMAIL}</a></div>
          <div className={styles.socials} data-reveal><small>Acompanhe</small><span>
            <a href="https://www.instagram.com/bergamaschiadv" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a>
            <a href="https://www.facebook.com/BergamaschiAdvogados" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook/></a>
            <a href="https://www.linkedin.com/company/bergamaschi-advogados-associados/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
          </span></div>
        </div>
      </section>
    </main>

    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerBrandCol}>
          <div className={styles.footerBrand}><Image src={images.logo} width={54} height={54} alt=""/><div><strong>Bergamaschi & Bergamaschi</strong><span>Advogados Associados</span></div></div>
          <p>Direito conduzido com método, responsabilidade e visão de futuro.</p>
          <div className={styles.footerSocials}>
            <a href="https://www.instagram.com/bergamaschiadv" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={15}/></a>
            <a href="https://www.facebook.com/BergamaschiAdvogados" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={15}/></a>
            <a href="https://www.linkedin.com/company/bergamaschi-advogados-associados/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15}/></a>
          </div>
        </div>
        <nav className={styles.footerCol} aria-label="Navegação do rodapé">
          <h4>Navegação</h4>
          {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className={styles.footerCol}>
          <h4>Áreas de atuação</h4>
          {practices.map(([title]) => <a key={title} href="#atuacao">{title}</a>)}
        </div>
        <div className={styles.footerCol}>
          <h4>Escritórios</h4>
          {offices.map(([, city, state]) => <span key={city} className={styles.footerOffice}><MapPin size={12}/> {city}/{state}</span>)}
        </div>
        <div className={styles.footerCol}>
          <h4>Contato</h4>
          <a href="tel:+555137513928"><Phone size={13}/> {PHONE}</a>
          <a href={`mailto:${EMAIL}`}><Mail size={13}/> {EMAIL}</a>
          <a className={styles.footerWa} href={WHATSAPP} target="_blank" rel="noreferrer"><WhatsAppIcon size={14}/> Agendar consulta</a>
        </div>
      </div>
      <hr className={styles.footerRule}/>
      <div className={styles.footerBottom}>
        <span>© {new Date().getFullYear()} Bergamaschi & Bergamaschi Advogados Associados</span>
        <div className={styles.footerBottomLinks}>
          <a href={SOURCE} target="_blank" rel="noreferrer">Site atual <ArrowUpRight size={11}/></a>
          <a href="#topo">Voltar ao topo <ArrowUpRight size={11}/></a>
          <span>Prévia conceitual por Luma Sites</span>
        </div>
      </div>
    </footer>
    <a className={styles.whatsappFloat} href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><WhatsAppIcon size={25}/></a>
  </div>;
}

function SectionNumber({ number, label }: { number: string; label: string }) {
  return <div className={styles.sectionNumber} data-reveal><span>{number}</span><span>{label}</span></div>;
}

function SectionDivider({ icon: Icon }: { icon: React.ComponentType<{ size?: number; strokeWidth?: number }> }) {
  return (
    <div className={styles.sectionDivider} aria-hidden="true" data-reveal>
      <span className={styles.sectionDividerLine} />
      <span className={styles.sectionDividerIcon}><Icon size={17} strokeWidth={1.5} /></span>
      <span className={styles.sectionDividerLine} />
    </div>
  );
}
