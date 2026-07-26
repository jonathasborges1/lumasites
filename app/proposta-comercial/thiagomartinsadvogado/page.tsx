"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown, ArrowLeft, ArrowUpRight, BriefcaseBusiness, ChevronDown, Compass, Eye,
  FileSignature, Gavel, HandCoins, HelpCircle, Instagram, MapPin, MessagesSquare, Menu,
  Route, Scale, ShieldCheck, Sparkles, Target, X,
} from "lucide-react";
import styles from "./thiagomartinsadvogado.module.css";

const INSTAGRAM = "https://www.instagram.com/thiagomartinsadvogado/";
const SOURCE = INSTAGRAM;
const WHATSAPP = `https://wa.me/5531988699505?text=${encodeURIComponent(
  "Olá! Vim pelo Instagram e gostaria de agendar uma consulta.",
)}`;

const nav = [
  ["Sobre", "#manifesto"],
  ["Atuação", "#atuacao"],
  ["Como trabalho", "#metodo"],
  ["Atendimento", "#atendimento"],
  ["Contato", "#contato"],
];

const practices = [
  ["Verbas rescisórias", "Análise de saldo de salário, aviso-prévio, férias, 13º, FGTS e demais direitos no encerramento do contrato.", FileSignature],
  ["Horas extras", "Apuração de jornadas, intervalos, banco de horas e reflexos das horas trabalhadas além do limite legal.", BriefcaseBusiness],
  ["Reconhecimento de vínculo", "Avaliação de relações de trabalho sem registro e busca pelos direitos decorrentes do vínculo empregatício.", Scale],
  ["Acidente de trabalho", "Orientação em casos de acidente, doença ocupacional, afastamento e estabilidade provisória.", ShieldCheck],
  ["Assédio no trabalho", "Atuação técnica em situações de assédio moral, sexual, discriminação e ambiente de trabalho abusivo.", MessagesSquare],
  ["Demissão e estabilidade", "Análise de dispensa sem justa causa, justa causa, rescisão indireta e garantias de emprego.", HandCoins],
] as const;

const faqs = [
  ["O atendimento é somente online?", "Não. O escritório atende on-line em todo o Brasil e também presencialmente em Belo Horizonte, Minas Gerais."],
  ["Preciso morar em Belo Horizonte?", "Não. O atendimento digital permite analisar e acompanhar casos trabalhistas de clientes em todo o Brasil."],
  ["Como funciona o primeiro contato?", "Você envia sua dúvida pelo WhatsApp, com total sigilo. A partir daí é feita uma análise inicial para indicar os próximos passos."],
  ["Quais documentos preciso enviar?", "Depende do caso. No primeiro contato já é possível orientar exatamente o que é necessário para dar andamento à análise."],
] as const;

const aboutPanels = [
  { label: "Clareza", title: "Clareza", text: "Cada etapa do processo é explicada em linguagem direta, sem juridiquês — você entende exatamente onde está e para onde vai.", icon: Eye },
  { label: "Ética", title: "Ética", text: "Atuação pautada pelas normas da OAB, com transparência sobre riscos, prazos e possibilidades reais de cada caso.", icon: ShieldCheck },
  { label: "Estratégia", title: "Estratégia", text: "Cada orientação considera a realidade da relação de trabalho, as provas disponíveis e o caminho mais seguro para defender seus direitos.", icon: Target },
] as const;
const ABOUT_ROTATION_MS = 6000;

function WhatsAppIcon({ size = 18 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88M20.47 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.31-1.65a11.88 11.88 0 0 0 5.68 1.45c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.23-6.16-3.47-8.41" />
    </svg>
  );
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / 1100, 1);
          setCount(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);
  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

function SectionNumber({ number, label }: { number: string; label: string }) {
  return (
    <div className={styles.sectionNumber} data-reveal>
      <span>{number}</span>
      <span>{label}</span>
    </div>
  );
}

function SectionDivider({ icon: Icon }: { icon: React.ComponentType<{ size?: number; strokeWidth?: number }> }) {
  return (
    <div className={styles.sectionDivider} aria-hidden="true" data-reveal>
      <span className={styles.sectionDividerLine} />
      <span className={styles.sectionDividerIcon}>
        <Icon size={17} strokeWidth={1.5} />
      </span>
      <span className={styles.sectionDividerLine} />
    </div>
  );
}

export default function ThiagoMartinsAdvogadoPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [aboutTab, setAboutTab] = useState(0);
  const [aboutCardHovered, setAboutCardHovered] = useState(false);
  const [aboutCycle, setAboutCycle] = useState(0);
  const aboutRotationRemaining = useRef(ABOUT_ROTATION_MS);
  const resetAboutRotation = useRef(false);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 24);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const readyTimer = window.setTimeout(() => setReady(true), 120);
    const reveal = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" },
    );
    reveal.forEach((el) => observer.observe(el));
    const fallback = window.setTimeout(() => reveal.forEach((el) => el.setAttribute("data-visible", "true")), 1800);
    return () => {
      clearTimeout(readyTimer);
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (aboutCardHovered) return;
    const duration = aboutRotationRemaining.current;
    const startedAt = performance.now();
    let completed = false;
    const rotation = window.setTimeout(() => {
      completed = true;
      aboutRotationRemaining.current = ABOUT_ROTATION_MS;
      setAboutTab((current) => (current + 1) % aboutPanels.length);
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

  const selectAboutTab = (index: number) => {
    aboutRotationRemaining.current = ABOUT_ROTATION_MS;
    resetAboutRotation.current = true;
    setAboutTab(index);
    setAboutCycle((current) => current + 1);
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Thiago Martins Advogados",
    url: SOURCE,
    areaServed: "BR",
    knowsAbout: practices.map((p) => p[0]),
  };

  return (
    <div className={`${styles.site} ${ready ? styles.ready : ""}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <a className={styles.skipLink} href="#conteudo">
        Pular para o conteúdo
      </a>

      <div className={styles.preview} role="note" aria-label="Aviso de prévia conceitual">
        <Link className={styles.previewBack} href="/proposta-comercial" aria-label="Voltar para propostas comerciais">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Voltar</span>
        </Link>
        <div className={styles.previewLine}>
          <span className={styles.previewDot} aria-hidden="true" /> Prévia Conceitual
        </div>
        <span className={styles.previewSub}>
          Proposta elaborada pela{" "}
          <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
            LumaSites.com.br
          </a>
        </span>
        <a className={styles.previewSource} href={SOURCE} target="_blank" rel="noopener noreferrer">
          <span>Instagram</span>
          <ArrowUpRight size={13} />
        </a>
      </div>
      <div className={styles.progress} style={{ transform: `scaleX(${progress / 100})` }} />

      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <a className={styles.brand} href="#topo" aria-label="Thiago Martins Advocacia — início">
          <span className={styles.brandMark} aria-hidden="true">
            <Image src="/thiagomartinsadvogado/logo-mark-v2.png" alt="" width={296} height={411} priority />
          </span>
          <span>
            <strong>Thiago Martins</strong>
            <small>Advogados</small>
          </span>
        </a>
        <nav className={styles.desktopNav} aria-label="Navegação principal">
          {nav.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className={styles.headerCta} href={WHATSAPP} target="_blank" rel="noreferrer">
          Fale comigo <ArrowUpRight size={15} />
        </a>
        <button
          className={styles.menuButton}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`} aria-hidden={!menuOpen}>
        <span className={styles.mobileMenuLabel}>Navegação</span>
        {nav.map(([label, href], i) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            <span>0{i + 1}</span>
            {label}
            <ArrowUpRight />
          </a>
        ))}
        <a className={styles.mobileWhatsapp} href={WHATSAPP} target="_blank" rel="noreferrer">
          <WhatsAppIcon /> Agendar consulta
        </a>
      </div>

      <main id="conteudo">
        <section className={styles.hero} id="topo">
          <div className={styles.heroField} />
          <div className={styles.heroGrid} aria-hidden="true" />
          <div className={styles.heroOrb} aria-hidden="true" />
          <div className={styles.heroPortrait} aria-hidden="true">
            <Image
              src="/thiagomartinsadvogado/feed-06.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 800px) 100vw, 48vw"
            />
          </div>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span>Direito do Trabalho</span>
              <span>On-line em todo o Brasil</span>
            </div>
            <h1>
              Seus direitos<br />merecem <em>defesa.</em>
            </h1>
            <p className={styles.heroSub}>
              Advocacia trabalhista dedicada à defesa dos trabalhadores, com clareza, estratégia e ética —
              atendimento on-line em todo o Brasil e presencial em Belo Horizonte.
            </p>
            <div className={styles.heroActions}>
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> Agende uma consulta
              </a>
              <a href="#manifesto">
                Conheça a atuação <ArrowDown className={styles.bounceArrow} size={16} />
              </a>
            </div>
          </div>
        </section>

        <section className={styles.credentials} aria-label="Credenciais">
          <div>
            <strong>
              Trabalhista
            </strong>
            <span>atuação centrada nos direitos dos trabalhadores</span>
          </div>
          <div>
            <strong>
              <Counter value={8800} suffix="+" />
            </strong>
            <span>pessoas acompanham o conteúdo jurídico no Instagram</span>
          </div>
          <div>
            <strong>Brasil</strong>
            <span>atendimento on-line em todo o país</span>
          </div>
          <div>
            <strong>3 pilares</strong>
            <span>clareza, ética e estratégia</span>
          </div>
        </section>

        <section className={styles.manifesto} id="manifesto">
          <SectionNumber number="01" label="Sobre" />
          <div className={styles.aboutComposition}>
            <div className={styles.aboutIntro} data-reveal>
              <span className={styles.aboutKicker}>
                <Scale /> Como atuo
              </span>
              <h2>
                Direito com<br /><em>propósito.</em>
              </h2>
              <p>
                O trabalho faz parte da sua história — e seus direitos precisam ser tratados com seriedade.
                A atuação combina escuta próxima, linguagem clara e estratégia para buscar uma solução segura
                em cada caso trabalhista.
              </p>
              <a href="#atuacao">
                Conheça as áreas de atuação <ArrowUpRight />
              </a>
            </div>
            <div className={styles.aboutFeature} data-reveal>
              <figure className={styles.aboutPortrait}>
                <Image
                  src="/thiagomartinsadvogado/intro-02.jpg"
                  alt="Dr. Thiago Augusto Martins em seu escritório"
                  fill
                  sizes="(max-width: 800px) 100vw, 28vw"
                />
                <figcaption>Thiago Augusto Martins · Advogado e empreendedor</figcaption>
              </figure>
              <div
                className={`${styles.aboutPanel} ${aboutCardHovered ? styles.aboutPanelPaused : ""}`}
                onMouseEnter={() => setAboutCardHovered(true)}
                onMouseLeave={() => setAboutCardHovered(false)}
              >
                <div className={styles.aboutPanelIcon} aria-hidden="true">
                  {aboutPanels.map((panel, index) => {
                    const Icon = panel.icon;
                    return <Icon key={panel.label} className={aboutTab === index ? styles.aboutPanelIconActive : ""} />;
                  })}
                </div>
                <span className={styles.aboutPanelOverline}>O que orienta cada atendimento</span>
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
                <div className={styles.aboutTabs} role="tablist" aria-label="Clareza, ética e estratégia">
                  {aboutPanels.map((panel, index) => (
                    <button
                      key={`${panel.label}-${aboutTab === index ? aboutCycle : 0}`}
                      type="button"
                      role="tab"
                      aria-selected={aboutTab === index}
                      className={aboutTab === index ? styles.aboutTabActive : ""}
                      onClick={() => selectAboutTab(index)}
                    >
                      <span>0{index + 1}</span>
                      {panel.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutProof} data-reveal>
            <p>
              Antes de propor respostas, o objetivo é <strong>entender a sua história e a relação de trabalho</strong>{" "}
              para construir uma resposta jurídica sólida.
            </p>
            <div>
              <span>
                <strong>Clareza</strong> linguagem direta, sem juridiquês
              </span>
              <span>
                <strong>Ética</strong> transparência em cada etapa
              </span>
              <span>
                <strong>Estratégia</strong> visão técnica aplicada à defesa dos seus direitos
              </span>
            </div>
          </div>
        </section>

        <SectionDivider icon={Compass} />

        <section className={styles.practices} id="atuacao">
          <SectionNumber number="02" label="Áreas de atuação" />
          <div className={styles.practicesHeader} data-reveal>
            <h2>
              Defesa trabalhista<br /><em>ao seu lado.</em>
            </h2>
            <p>Atuação focada nos principais conflitos da relação de trabalho, sempre a partir da realidade de cada pessoa.</p>
          </div>
          <div className={styles.areaGrid}>
            {practices.map(([title, copy, Icon], i) => (
              <article className={styles.areaCard} key={title} tabIndex={0} data-reveal data-delay={String((i % 3) + 1)}>
                <div className={styles.areaCardTop}>
                  <span className={styles.areaCardIndex}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.areaCardIcon}>
                    <Icon size={19} strokeWidth={1.6} />
                  </span>
                </div>
                <div className={styles.areaCardBody}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionDivider icon={Gavel} />

        <section className={styles.quote} aria-label="Compromisso">
          <div className={styles.quoteTexture} />
          <span data-reveal>Nosso compromisso</span>
          <blockquote data-reveal>
            "Cada causa é única.<br /><em>Cada história importa.</em>"
          </blockquote>
          <p data-reveal>E cada detalhe faz a diferença no resultado.</p>
        </section>

        <SectionDivider icon={Route} />

        <section className={styles.journey} id="metodo">
          <div className={styles.journeyIntro} data-reveal>
            <span>Como trabalho</span>
            <h2>Método que dá direção.</h2>
            <p>Quatro etapas, uma condução só: do primeiro contato ao acompanhamento contínuo do seu caso.</p>
          </div>
          <div className={styles.journeyStepper}>
            <div className={styles.journeyTrack} aria-hidden="true">
              <span className={styles.journeyTrackFill} data-reveal />
            </div>
            {[
              { n: "01", t: "Primeiro contato", c: "Você explica sua situação pelo WhatsApp, com total sigilo." },
              { n: "02", t: "Diagnóstico", c: "Análise clara dos riscos, direitos e possibilidades do seu caso." },
              { n: "03", t: "Estratégia", c: "Apresento os caminhos possíveis, prazos e custos, sem promessas irreais." },
              { n: "04", t: "Acompanhamento", c: "Atualizações constantes até a resolução — você nunca fica no escuro." },
            ].map(({ n, t, c }, i) => (
              <div className={styles.journeyStep} key={n} data-reveal data-delay={String(i + 1)}>
                <div className={styles.journeyNumWrap}>
                  <span className={styles.journeyNum}>{n}</span>
                </div>
                <h3>{t}</h3>
                <p>{c}</p>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider icon={MapPin} />

        <section className={styles.presence} id="atendimento">
          <SectionNumber number="03" label="Atendimento" />
          <div className={styles.presenceGrid}>
            <div className={styles.presenceCopy} data-reveal>
              <h2>
                Onde você estiver,<br /><em>eu chego até você.</em>
              </h2>
              <p>
                Atendimento on-line em todo o Brasil e presencial em Belo Horizonte, com a mesma escuta,
                transparência e condução técnica em cada etapa.
              </p>
              <div className={styles.presenceList}>
                <div>
                  <ShieldCheck size={16} /> Sigilo e segurança em cada etapa da consulta digital
                </div>
                <div>
                  <Sparkles size={16} /> Sem deslocamento — reuniões por videochamada ou WhatsApp
                </div>
                <div>
                  <Scale size={16} /> Atendimento presencial disponível em Belo Horizonte — MG
                </div>
              </div>
            </div>
            <div className={styles.mapWrap} data-reveal>
              <div className={styles.mapLabel}>
                <MapPin size={14} /> Atendimento presencial em Belo Horizonte — MG
              </div>
              <iframe
                title="Atendimento presencial em Belo Horizonte, Minas Gerais"
                className={styles.mapFrame}
                src="https://maps.google.com/maps?q=Belo%20Horizonte%2C%20MG&output=embed&z=11"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <SectionDivider icon={HelpCircle} />

        <section className={styles.faq}>
          <div className={styles.faqIntro} data-reveal>
            <span>Informação que aproxima</span>
            <h2>Perguntas frequentes.</h2>
            <p>Respostas essenciais antes do primeiro contato.</p>
          </div>
          <div className={styles.faqList}>
            {faqs.map(([q, a], i) => (
              <article className={openFaq === i ? styles.faqOpen : ""} key={q}>
                <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                  <span>0{i + 1}</span>
                  {q}
                  <ChevronDown />
                </button>
                <div>
                  <p>{a}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <SectionDivider icon={WhatsAppIcon} />

        <section className={styles.contact} id="contato">
          <div className={styles.contactTop} data-reveal>
            <span>Fale diretamente comigo</span>
            <h2>
              Cada decisão começa<br />com uma <em>conversa.</em>
            </h2>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={22} />
              Agendar uma consulta
              <ArrowUpRight />
            </a>
          </div>
          <div className={styles.contactBottom}>
            <div data-reveal>
              <small>WhatsApp</small>
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> (31) 98869-9505
              </a>
            </div>
            <div data-reveal>
              <small>E-mail</small>
              <a href="mailto:contato@thiagomartins.adv.br">contato@thiagomartins.adv.br</a>
            </div>
            <div className={styles.socials} data-reveal>
              <small>Acompanhe</small>
              <span>
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram">
                  <Instagram />
                </a>
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrandCol}>
            <div className={styles.footerBrand}>
              <Image
                className={styles.footerLogoFull}
                src="/thiagomartinsadvogado/logo-thiago-martins-v2.png"
                alt="Thiago Martins Advogados"
                width={1209}
                height={699}
              />
            </div>
            <p>Defesa dos direitos dos trabalhadores com clareza, ética e estratégia, em qualquer lugar do Brasil.</p>
            <div className={styles.footerSocials}>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={15} />
              </a>
            </div>
          </div>
          <nav className={styles.footerCol} aria-label="Navegação do rodapé">
            <h4>Navegação</h4>
            {nav.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className={styles.footerCol}>
            <h4>Áreas de atuação</h4>
            {practices.map(([title]) => (
              <a key={title} href="#atuacao">
                {title}
              </a>
            ))}
          </div>
          <div className={styles.footerCol}>
            <h4>Contato</h4>
            <a href="mailto:contato@thiagomartins.adv.br">contato@thiagomartins.adv.br</a>
            <a className={styles.footerWa} href={WHATSAPP} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={14} /> Agendar consulta
            </a>
          </div>
        </div>
        <hr className={styles.footerRule} />
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} Thiago Martins Advogados</span>
          <div className={styles.footerBottomLinks}>
            <a href={SOURCE} target="_blank" rel="noreferrer">
              Instagram <ArrowUpRight size={11} />
            </a>
            <a href="#topo">
              Voltar ao topo <ArrowUpRight size={11} />
            </a>
            <span>Prévia conceitual por Luma Sites</span>
          </div>
        </div>
      </footer>
      <a className={styles.whatsappFloat} href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp">
        <WhatsAppIcon size={25} />
      </a>
    </div>
  );
}
