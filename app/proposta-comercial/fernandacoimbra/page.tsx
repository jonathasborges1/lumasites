"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BookOpenText,
  Briefcase,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  ExternalLink,
  FileCheck2,
  Hospital,
  Landmark,
  Link2,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Pill,
  Printer,
  Route,
  Scale,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  type LucideIcon,
  X,
} from "lucide-react";
import {
  audiencePaths,
  editorialTopics,
  faqs,
  fernandaCoimbra,
  preparationLists,
  processSteps,
  whatsappUrl,
} from "./fernandacoimbra.data";
import styles from "./fernandacoimbra.module.css";

const navItems = [
  { href: "#atuacao", label: "Atuação" },
  { href: "#processo", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
] as const;

const serviceIcons = {
  shieldAlert: ShieldAlert,
  hospital: Hospital,
  pill: Pill,
  stethoscope: Stethoscope,
  scale: Scale,
  fileCheck: FileCheck2,
  briefcase: Briefcase,
  lockKeyhole: LockKeyhole,
} satisfies Record<string, LucideIcon>;

function Brand() {
  return (
    <a className={styles.brand} href="#inicio" aria-label="Fernanda Coimbra — início">
      <span className={styles.brandMark} aria-hidden="true">
        FC
      </span>
      <span>
        <strong>Fernanda Coimbra</strong>
        <small>Direito Médico e da Saúde</small>
      </span>
    </a>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26A9.89 9.89 0 0 1 12.05 2a9.82 9.82 0 0 1 6.99 2.9 9.83 9.83 0 0 1 2.89 7c0 5.45-4.44 9.89-9.88 9.89M20.47 3.39A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 0 0-3.47-8.51" />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <header className={`${styles.sectionHeading} ${light ? styles.light : ""}`}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <div>{text}</div> : null}
    </header>
  );
}

type EditorialSeamTone =
  | "paperToNavy"
  | "navyToWhite"
  | "whiteToWarm"
  | "warmToPaper"
  | "paperToWhite"
  | "whiteToNavy";

function EditorialSeam({
  tone,
  icon: Icon,
}: {
  tone: EditorialSeamTone;
  icon: LucideIcon;
}) {
  const toneClass = {
    paperToNavy: styles.paperToNavy,
    navyToWhite: styles.navyToWhite,
    whiteToWarm: styles.whiteToWarm,
    warmToPaper: styles.warmToPaper,
    paperToWhite: styles.paperToWhite,
    whiteToNavy: styles.whiteToNavy,
  }[tone];

  return (
    <div className={`${styles.editorialSeam} ${toneClass}`} aria-hidden="true">
      <span className={styles.seamMedallion}>
        <Icon size={17} strokeWidth={1.7} />
      </span>
    </div>
  );
}

export default function FernandaCoimbraPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAudience, setActiveAudience] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canShare, setCanShare] = useState(false);
  const [copiedFaq, setCopiedFaq] = useState<number | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tabPrefix = useId();

  useEffect(() => {
    setCanShare(typeof navigator !== "undefined" && typeof navigator.share === "function");
  }, []);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setScrollProgress(max > 0 ? Math.min(100, (scrollTop / max) * 100) : 0);
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((element): element is Element => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const selectAudienceWithKeyboard = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    let nextIndex = currentIndex;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % audiencePaths.length;
    if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + audiencePaths.length) % audiencePaths.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = audiencePaths.length - 1;

    setActiveAudience(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: `${fernandaCoimbra.name} | Direito Médico e da Saúde`,
        text: "Clareza jurídica para pacientes, familiares, profissionais e instituições de saúde.",
        url: window.location.href,
      });
    } catch {
      // usuário cancelou o compartilhamento
    }
  };

  const handleCopyFaqLink = async (index: number) => {
    const url = `${window.location.origin}${window.location.pathname}#duvida-${index + 1}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedFaq(index);
      window.setTimeout(() => setCopiedFaq((current) => (current === index ? null : current)), 1800);
    } catch {
      // clipboard indisponível
    }
  };

  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: fernandaCoimbra.name,
    alternateName: fernandaCoimbra.legalName,
    url: fernandaCoimbra.sourceUrl,
    image: fernandaCoimbra.portrait,
    telephone: `+${fernandaCoimbra.phoneE164}`,
    email: fernandaCoimbra.email,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Minas Gerais",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Contagem",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    knowsAbout: [
      "Direito Médico",
      "Direito da Saúde",
      "Planos de saúde",
      "Defesa de profissionais da saúde",
      "Consultoria preventiva em saúde",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className={styles.page}>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        type="application/ld+json"
      />

      <a className={styles.skipLink} href="#inicio">
        Pular para o conteúdo
      </a>

      <div className={styles.progressTrack} aria-hidden="true">
        <div className={styles.progressFill} style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className={styles.previewBar}>
        <span className={styles.previewDot} aria-hidden="true" />
        <strong>Prévia conceitual</strong>
        <span className={styles.previewDetail}>
          Conteúdo e direção visual sujeitos à validação da cliente.
        </span>
        <a
          aria-label="Ver versão original do site de Fernanda Coimbra (abre em nova aba)"
          className={styles.originalSite}
          href={fernandaCoimbra.sourceUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Versão original</span>
          <ExternalLink aria-hidden="true" size={12} />
        </a>
      </div>

      <header className={styles.siteHeader}>
        <div className={styles.headerInner}>
          <Brand />
          <nav className={styles.desktopNav} aria-label="Navegação principal">
            {navItems.map((item) => (
              <a
                aria-current={activeSection === item.href ? "true" : undefined}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className={styles.headerCta}
            href={whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Entrar em contato
          </a>
          <button
            aria-controls="fc-mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className={styles.menuButton}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        id="fc-mobile-navigation"
      >
        <nav aria-label="Navegação móvel">
          {navItems.map((item, index) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          ))}
          <a
            className={styles.mobileContact}
            href={whatsappUrl}
            onClick={() => setMenuOpen(false)}
            rel="noopener noreferrer"
            target="_blank"
          >
            <WhatsAppIcon />
            Entrar em contato
          </a>
        </nav>
      </div>

      <section className={styles.hero} id="inicio">
        <div className={styles.heroRule} aria-hidden="true" />
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{fernandaCoimbra.oab}</p>
              <h1>
                Clareza jurídica quando a saúde exige <em>decisões.</em>
              </h1>
              <p className={styles.heroText}>
                Direito Médico e da Saúde para orientar pacientes, familiares,
                profissionais e instituições diante de relações cada vez mais complexas.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="#atuacao">
                  Encontre sua jornada
                  <ArrowDown aria-hidden="true" size={18} />
                </a>
                <a className={styles.textButton} href={whatsappUrl} rel="noopener noreferrer" target="_blank">
                  Falar com a advogada
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
              </div>
              <div className={styles.heroCredentials}>
                <span>
                  <Scale aria-hidden="true" size={17} />
                  Advocacia especializada
                </span>
                <span>
                  <Landmark aria-hidden="true" size={17} />
                  {fernandaCoimbra.commissionShort}
                </span>
                <span>
                  <MapPin aria-hidden="true" size={17} />
                  {fernandaCoimbra.location}
                </span>
              </div>
            </div>

            <div className={styles.heroPortrait}>
              <div className={styles.portraitFrame}>
                <Image
                  alt={fernandaCoimbra.name}
                  fill
                  priority
                  sizes="(max-width: 800px) 88vw, 42vw"
                  src={fernandaCoimbra.portrait}
                />
              </div>
              <div className={styles.portraitCaption}>
                <span>Direito, saúde e responsabilidade</span>
                <strong>Informação para decidir com segurança</strong>
              </div>
              <span className={styles.portraitNumber} aria-hidden="true">
                {fernandaCoimbra.oab}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statement} aria-label="Princípio de atuação">
        <div className={styles.wrap}>
          <span aria-hidden="true">“</span>
          <p>
            Questões de saúde envolvem pessoas, documentos e decisões sensíveis. A
            orientação jurídica começa pela compreensão responsável de cada contexto.
          </p>
        </div>
      </section>

      <section
        className={styles.audienceSection}
        data-audience={audiencePaths[activeAudience].id}
        id="atuacao"
      >
        <div className={styles.wrap}>
          <SectionHeading
            eyebrow="Duas jornadas, uma atuação especializada"
            title="Por onde você começa?"
            text="Escolha o contexto mais próximo da sua necessidade para conhecer os temas relacionados à atuação."
          />

          <div className={styles.audienceTabs} role="tablist" aria-label="Públicos atendidos">
            {audiencePaths.map((path, index) => (
              <button
                aria-controls={`${tabPrefix}-panel-${index}`}
                aria-selected={activeAudience === index}
                className={activeAudience === index ? styles.activeTab : ""}
                id={`${tabPrefix}-tab-${index}`}
                key={path.id}
                onClick={() => setActiveAudience(index)}
                onKeyDown={(event) => selectAudienceWithKeyboard(event, index)}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                role="tab"
                tabIndex={activeAudience === index ? 0 : -1}
                type="button"
              >
                <span>{path.number}</span>
                {path.label}
              </button>
            ))}
          </div>

          {audiencePaths.map((path, index) => (
            <div
              aria-labelledby={`${tabPrefix}-tab-${index}`}
              className={`${styles.audiencePanel} ${
                activeAudience === index ? styles.activePanel : ""
              }`}
              hidden={activeAudience !== index}
              id={`${tabPrefix}-panel-${index}`}
              key={path.id}
              role="tabpanel"
              tabIndex={0}
            >
              <div className={styles.panelIntro}>
                <p>{path.label}</p>
                <h3>{path.title}</h3>
                <div>{path.text}</div>
                <a href={whatsappUrl} rel="noopener noreferrer" target="_blank">
                  Obter informações
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
              </div>
              <div className={styles.serviceGrid}>
                {path.services.map((service, serviceIndex) => {
                  const ServiceIcon = serviceIcons[service.icon];

                  return (
                    <article key={service.title}>
                      <div className={styles.serviceCardHeader}>
                        <span className={styles.serviceIcon}>
                          <ServiceIcon aria-hidden="true" size={24} strokeWidth={1.6} />
                        </span>
                        <span className={styles.serviceNumber}>
                          {String(serviceIndex + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h4>{service.title}</h4>
                      <p>{service.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}

          <noscript>
            <p>
              Esta prévia usa JavaScript para alternar as jornadas. Entre em contato pelo
              telefone {fernandaCoimbra.phoneDisplay}.
            </p>
          </noscript>
        </div>
      </section>

      <EditorialSeam icon={Route} tone="paperToNavy" />

      <section className={styles.processSection} id="processo">
        <div className={styles.wrap}>
          <SectionHeading
            eyebrow="Do relato à orientação"
            title="Como o atendimento começa"
            text="Uma sequência clara ajuda a organizar informações sem antecipar conclusões ou prometer resultados."
            light
          />
          <ol className={styles.processGrid}>
            {processSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <EditorialSeam icon={FileCheck2} tone="navyToWhite" />

      <section className={styles.preparationSection}>
        <div className={styles.wrap}>
          <div className={styles.preparationGrid}>
            <div className={styles.preparationIntro}>
              <FileCheck2 aria-hidden="true" size={28} />
              <p>Antes do primeiro contato</p>
              <h2>Organize o que já está disponível.</h2>
              <div>
                Não é preciso ter todos os documentos para buscar informações. Esta lista é
                apenas um ponto de partida e pode variar conforme a situação.
              </div>
              <button
                className={styles.printButton}
                onClick={() => window.print()}
                type="button"
              >
                <Printer aria-hidden="true" size={16} />
                Imprimir lista
              </button>
            </div>
            <div className={styles.checklists}>
              {preparationLists.map((list) => (
                <article key={list.title}>
                  <h3>{list.title}</h3>
                  <ul>
                    {list.items.map((item) => (
                      <li key={item}>
                        <Check aria-hidden="true" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EditorialSeam icon={Scale} tone="whiteToWarm" />

      <section className={styles.aboutSection} id="sobre">
        <div className={styles.wrap}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutPortrait}>
              <Image
                alt={`${fernandaCoimbra.name}, advogada`}
                fill
                sizes="(max-width: 800px) 90vw, 39vw"
                src={fernandaCoimbra.portrait}
              />
              <span aria-hidden="true">FC</span>
            </div>
            <div className={styles.aboutCopy}>
              <p className={styles.eyebrow}>Atuação e responsabilidade institucional</p>
              <h2>Direito e saúde exigem linguagem clara, técnica e humana.</h2>
              <p>
                {fernandaCoimbra.name} atua em Direito Médico e da Saúde, orientando
                pacientes, familiares, profissionais e instituições em questões consultivas
                e contenciosas.
              </p>
              <p>
                Sua atuação institucional inclui a presidência da Comissão de Direito Médico
                e da Saúde da 83ª Subseção da OAB/MG em Contagem, no triênio 2025–2027.
              </p>
              <dl className={styles.credentials}>
                <div>
                  <dt>Inscrição profissional</dt>
                  <dd>{fernandaCoimbra.oab}</dd>
                </div>
                <div>
                  <dt>Atuação institucional</dt>
                  <dd>{fernandaCoimbra.commission}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <EditorialSeam icon={BookOpenText} tone="warmToPaper" />

      <section className={styles.contentSection} id="conteudo">
        <div className={styles.wrap}>
          <SectionHeading
            eyebrow="Informação jurídica em saúde"
            title="Conteúdo para compreender antes de decidir."
            text="Temas informativos que podem orientar a organização das primeiras dúvidas, sem substituir uma análise individual."
          />
          <div className={styles.editorialGrid}>
            {editorialTopics.map((topic) => (
              <article key={topic.index}>
                <span>{topic.index}</span>
                <div>
                  <p>Leitura orientativa</p>
                  <h3>{topic.title}</h3>
                  <div>{topic.text}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <EditorialSeam icon={CircleHelp} tone="paperToWhite" />

      <section className={styles.faqSection} id="duvidas">
        <div className={styles.wrap}>
          <div className={styles.faqGrid}>
            <SectionHeading
              eyebrow="Dúvidas iniciais"
              title="Informação também é uma forma de cuidado."
              text="Respostas gerais para ajudar a preparar o contato. Cada situação continua dependendo de avaliação própria."
            />
            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <details id={`duvida-${index + 1}`} key={faq.question}>
                  <summary>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {faq.question}
                    <ChevronDown aria-hidden="true" className={styles.faqChevron} size={20} />
                    <button
                      aria-label="Copiar link desta pergunta"
                      className={styles.copyLinkButton}
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        handleCopyFaqLink(index);
                      }}
                      type="button"
                    >
                      {copiedFaq === index ? (
                        <CheckCircle2 aria-hidden="true" size={14} />
                      ) : (
                        <Link2 aria-hidden="true" size={14} />
                      )}
                    </button>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
            <span aria-live="polite" className={styles.visuallyHidden}>
              {copiedFaq !== null ? "Link da pergunta copiado para a área de transferência." : ""}
            </span>
          </div>
        </div>
      </section>

      <EditorialSeam icon={MessageCircle} tone="whiteToNavy" />

      <section className={styles.contactSection} id="contato">
        <div className={styles.wrap}>
          <div className={styles.contactGrid}>
            <div>
              <p className={styles.eyebrow}>Contato profissional</p>
              <h2>Comece pelo contexto. Os próximos passos vêm depois.</h2>
              <p className={styles.contactText}>
                Se você busca informações sobre uma questão de Direito Médico ou da Saúde,
                utilize um dos canais abaixo. Evite enviar documentos sensíveis antes de
                receber orientação.
              </p>
              <a
                className={styles.contactButton}
                href={whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <WhatsAppIcon />
                Entrar em contato pelo WhatsApp
              </a>
            </div>
            <address className={styles.contactCard}>
              <div>
                <MessageCircle aria-hidden="true" size={20} />
                <span>
                  <small>WhatsApp</small>
                  <a href={whatsappUrl} rel="noopener noreferrer" target="_blank">
                    {fernandaCoimbra.phoneDisplay}
                  </a>
                </span>
              </div>
              <div>
                <Mail aria-hidden="true" size={20} />
                <span>
                  <small>E-mail</small>
                  <a href={`mailto:${fernandaCoimbra.email}`}>
                    {fernandaCoimbra.email}
                  </a>
                </span>
              </div>
              <div>
                <MapPin aria-hidden="true" size={20} />
                <span>
                  <small>Localização</small>
                  {fernandaCoimbra.location}
                </span>
              </div>
              <div>
                <ShieldCheck aria-hidden="true" size={20} />
                <span>
                  <small>Identificação profissional</small>
                  {fernandaCoimbra.oab}
                </span>
              </div>
            </address>
          </div>
          <div className={styles.contactMap}>
            <iframe
              title={`Mapa de localização — ${fernandaCoimbra.location}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(fernandaCoimbra.location)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className={styles.mapCaption}>
              <span>{fernandaCoimbra.location}</span>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  fernandaCoimbra.location,
                )}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Navigation aria-hidden="true" size={14} />
                Ver rota no Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.footerMain}>
            <div className={styles.footerIdentity}>
              <Brand />
              <p>Clareza jurídica quando a saúde exige decisões.</p>
              <span>{fernandaCoimbra.oab}</span>
            </div>

            <nav className={styles.footerNav} aria-label="Navegação do rodapé">
              <h2>Navegação</h2>
              <div>
                {navItems.map((item) => (
                  <a href={item.href} key={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            <address className={styles.footerContact}>
              <h2>Contato profissional</h2>
              <a href={whatsappUrl} rel="noopener noreferrer" target="_blank">
                <MessageCircle aria-hidden="true" size={16} />
                <span>
                  <small>WhatsApp</small>
                  {fernandaCoimbra.phoneDisplay}
                </span>
              </a>
              <a href={`mailto:${fernandaCoimbra.email}`}>
                <Mail aria-hidden="true" size={16} />
                <span>
                  <small>E-mail</small>
                  {fernandaCoimbra.email}
                </span>
              </a>
              <div>
                <MapPin aria-hidden="true" size={16} />
                <span>
                  <small>Localização</small>
                  {fernandaCoimbra.location}
                </span>
              </div>
            </address>
          </div>

          <div className={styles.footerLegal}>
            <section>
              <h2>Informação jurídica responsável</h2>
              <p>
                Conteúdo de caráter exclusivamente informativo. A apresentação não contém
                promessa de resultado e o contato, por si só, não constitui relação
                advogado-cliente.
              </p>
            </section>
            <section>
              <h2>Sobre esta prévia</h2>
              <p>
                Proposta conceitual elaborada a partir de informações públicas, sujeita à
                revisão e aprovação antes de qualquer publicação.
              </p>
            </section>
          </div>

          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} {fernandaCoimbra.name}. Proposta visual.
            </p>
            <a href="#inicio">
              Voltar ao topo
              <ArrowUp aria-hidden="true" size={15} />
            </a>
          </div>
        </div>
      </footer>

      {canShare ? (
        <button
          aria-label="Compartilhar esta página"
          className={styles.floatingShare}
          onClick={handleShare}
          type="button"
        >
          <Share2 aria-hidden="true" size={19} />
        </button>
      ) : null}

      <a
        aria-label="Entrar em contato com Fernanda Coimbra pelo WhatsApp"
        className={styles.floatingWhatsApp}
        href={whatsappUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <WhatsAppIcon size={24} />
      </a>
    </main>
  );
}
