"use client";

import {
  Award,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock,
  FileText,
  Facebook,
  GraduationCap,
  Heart,
  Instagram,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  X,
  ArrowDown,
  ArrowRight,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";
import styles from "./style.module.css";

const WHATSAPP_NUMBER = "5511966607915";
const WHATSAPP_MESSAGE = "Olá! Gostaria de falar com a Almeida Advocacia.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
const INSTAGRAM_URL = "https://www.instagram.com/almeidaescritorioadvocacia/";
const FACEBOOK_URL = "https://www.facebook.com/escritorioalmeidaadv";
const EMAIL = "patriciaadvsmpta@gmail.com";
const PHONE_PRIMARY = "(11) 96660-7915";
const PHONE_LANDLINE = "(11) 3564-5535";
const ADDRESS = "Rua Coronel Manoel Feliciano de Souza, 111, Vila Jacuí, São Paulo/SP";

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Almeida Advocacia",
  url: "https://lumasites.com.br/proposta-comercial/escritorioalmeidaadv",
  areaServed: {
    "@type": "City",
    name: "São Paulo",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Coronel Manoel Feliciano de Souza, 111",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "08060-060",
    addressCountry: "BR",
  },
  founder: {
    "@type": "Person",
    name: "Patrícia Oliveira Almeida",
    jobTitle: "Advogada",
  },
  identifier: {
    "@type": "PropertyValue",
    name: "OAB/SP",
    value: "387.824",
  },
  knowsAbout: [
    "Direito de Família",
    "Divórcio consensual e litigioso",
    "Inventário e partilha de bens",
    "Direito do Trabalho",
    "Direito do Consumidor",
    "Direito Previdenciário",
    "Aposentadoria e benefícios do INSS",
  ],
};

const nav = [
  ["Áreas", "#areas"],
  ["Como Funciona", "#como-funciona"],
  ["Depoimentos", "#depoimentos"],
  ["Sobre", "#sobre"],
  ["Sócias", "#equipe"],
  ["Contato", "#contato"],
] as const;

const areas = [
  {
    icon: Heart,
    eyebrow: "Direito de Família",
    title: "Cuidado jurídico nos momentos mais sensíveis da família",
    tags: [
      "Inventário e partilha",
      "Herança",
      "Separação",
      "Divórcio consensual e litigioso",
      "União estável",
      "Pensão alimentícia",
      "Guarda de filhos",
      "Reconhecimento de paternidade",
      "Doações",
      "Venda de bens de família",
      "Interdição",
      "Alienação parental",
    ],
  },
  {
    icon: Briefcase,
    eyebrow: "Direito do Trabalho",
    title: "Defesa técnica dos seus direitos na relação de trabalho",
    tags: [
      "Vínculo empregatício",
      "Férias",
      "Horas extras e jornada",
      "Verbas rescisórias e FGTS",
      "Assédio moral",
      "Equiparação salarial",
      "Licença-maternidade",
      "Afastamento médico",
      "Acordos coletivos",
      "Benefícios",
      "Trabalho temporário",
      "Profissional autônomo",
      "Comissões e bônus",
    ],
  },
  {
    icon: Landmark,
    eyebrow: "Direito Previdenciário",
    title: "Orientação para garantir o benefício que é seu por direito",
    tags: [
      "Aposentadoria por invalidez",
      "Aposentadoria por tempo de contribuição",
      "Aposentadoria por idade",
      "Aposentadoria especial",
      "Auxílio-doença",
      "Auxílio-reclusão",
      "Pensão por morte",
      "Benefício assistencial (BPC/LOAS)",
    ],
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Entre em contato",
    text: "Você explica sua situação pelo WhatsApp, telefone ou e-mail, com total sigilo.",
  },
  {
    icon: ClipboardCheck,
    title: "Avaliação e análise",
    text: "A Dra. Patrícia realiza uma análise detalhada, define a estratégia específica e explica os caminhos possíveis em linguagem simples.",
  },
  {
    icon: FileText,
    title: "Aplicação e acompanhamento",
    text: "As medidas são conduzidas com acompanhamento próximo nas etapas postulatória, instrutória e recursal, quando aplicáveis.",
  },
  {
    icon: CheckCircle2,
    title: "Execução",
    text: "Comunicação ágil com o cliente e condução rápida e eficiente até a conclusão do caso.",
  },
];

const trustItems = [
  {
    icon: Zap,
    label: "Agilidade",
    text: "e segurança jurídica, do primeiro contato ao encaminhamento do caso",
  },
  {
    icon: Clock,
    label: "Encurtamento",
    text: "dos prazos e otimização do tempo, com acompanhamento ativo",
  },
  {
    icon: CheckCircle2,
    label: "Resolução",
    text: "dos problemas e garantia dos direitos, com foco em solução",
  },
  {
    icon: Award,
    label: "Profissionalismo",
    text: "qualidade, ética e transparência em cada atendimento",
  },
];

const testimonials = [
  {
    name: "Daiani Oliveira",
    text: "Ótimo escritório, a doutora Patrícia é uma profissional de alta performance, super recomendo!",
  },
  {
    name: "Luiz Carlos",
    text: "Um caso para resolver de 5 anos, para vender a nossa casa que era herança de família — a Dra. Patrícia de Almeida, num diálogo, resolveu em 15 dias.",
  },
  {
    name: "Wil Gomes",
    text: "Atendimento excelente e atencioso, ótimo profissionalismo e muito bom o custo-benefício.",
  },
  {
    name: "Bruna Barile",
    text: "Dra. Patrícia, ótima profissional, serviços de excelência, super recomendo.",
  },
  {
    name: "Tais Bernardo",
    text: "Profissional excelente, percebo toda a dedicação dela com o trabalho. Indico, pela ética e profissionalismo!",
  },
  {
    name: "Quiteria Santana",
    text: "Ótimo atendimento e eficácia no serviço.",
  },
];

const team = [
  {
    name: "Dra. Patrícia Oliveira Almeida",
    oab: "OAB/SP 387.824",
    photo: "/images/escritorioalmeidaadv/patricia-almeida-socia-editorial-v2.webp",
    role: "Sócia-fundadora",
    detail: "Família, Consumidor, Trabalho e Previdenciário",
  },
  {
    name: "Dra. Suellen Chaves de Santana",
    oab: "OAB/SP 361.916",
    photo: "/images/escritorioalmeidaadv/suellen-santana-socia-editorial-v2.webp",
    role: "Sócia",
    detail: "Atuação jurídica integrada ao escritório",
  },
] as const;

function ScaleMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M24 4V38" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M9 14H39" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M9 14L4 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 14L14 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M4 26A6 6 0 0 0 14 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M39 14L34 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M39 14L44 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M34 26A6 6 0 0 0 44 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 41H34"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26A9.89 9.89 0 0 1 12.06 2c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.89 9.89M20.47 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 0 0-3.47-8.41" />
    </svg>
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className={`${styles.brand} ${light ? styles.brandLight : ""}`}>
      <Image
        src="/images/escritorioalmeidaadv/almeida-logo-original.png"
        alt="Almeida Advocacia"
        width={262}
        height={67}
        className={styles.brandLogo}
        priority
      />
    </div>
  );
}

export default function AlmeidaAdvocaciaPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [whatsappOnDark, setWhatsappOnDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("rodape");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const floatingButton = document.getElementById("whatsapp-flutuante");
    const darkSections = [document.getElementById("como-funciona")].filter(
      (section): section is HTMLElement => section !== null,
    );
    if (!floatingButton || darkSections.length === 0) return;

    let animationFrame = 0;

    const updateContrast = () => {
      animationFrame = 0;
      const buttonRect = floatingButton.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;

      setWhatsappOnDark(
        darkSections.some((section) => {
          const sectionRect = section.getBoundingClientRect();
          return (
            buttonCenterX >= sectionRect.left &&
            buttonCenterX <= sectionRect.right &&
            buttonCenterY >= sectionRect.top &&
            buttonCenterY <= sectionRect.bottom
          );
        }),
      );
    };

    const scheduleContrastUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateContrast);
    };

    updateContrast();
    window.addEventListener("scroll", scheduleContrastUpdate, { passive: true });
    window.addEventListener("resize", scheduleContrastUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleContrastUpdate);
      window.removeEventListener("resize", scheduleContrastUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <main className={styles.page} id="inicio">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <div className={styles.previewBar}>
        <span className={styles.previewDot} />
        <span>Prévia conceitual</span>
        <span className={styles.previewDivider} />
        <span className={styles.previewDetail}>Conteúdo e imagens sujeitos à aprovação</span>
        <span className={styles.previewDivider} />
        <a
          className={styles.previewLink}
          href="https://escritorioalmeidaadv.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver site atual ↗
        </a>
      </div>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.headerInner}>
          <a href="#inicio" aria-label="Voltar ao início">
            <Brand />
          </a>

          <nav className={styles.desktopNav} aria-label="Navegação principal">
            {nav.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <a className={styles.headerCta} href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Falar com a advogada
            <WhatsAppIcon size={16} />
          </a>

          <button
            className={styles.menuButton}
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ""}`}>
          {nav.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
              <ChevronRight size={16} />
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            Falar com a advogada
            <WhatsAppIcon size={16} />
          </a>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroAmbient} aria-hidden="true" />
        <div className={styles.heroEdition} aria-hidden="true">
          <span>Almeida Advocacia</span>
          <span>São Paulo · 2026</span>
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span />
            Advocacia próxima · São Miguel Paulista, SP
          </p>
          <h1 id="hero-title">
            Clareza jurídica
            <span> para seguir em frente.</span>
          </h1>
          <p className={styles.heroLead}>
            Atendimento próximo e técnico, presencial ou à distância, para quem
            precisa resolver questões de família, trabalho ou aposentadoria com
            clareza sobre cada passo do processo.
          </p>

          <div className={styles.credentialSpotlight} aria-label="Credenciais profissionais da Dra. Patrícia Oliveira Almeida">
            <ShieldCheck size={25} aria-hidden="true" />
            <div>
              <span>Registro profissional</span>
              <strong>OAB/SP 387.824</strong>
            </div>
            <div>
              <span>Atuação</span>
              <strong>Família, Trabalho e Previdenciário</strong>
            </div>
          </div>

          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Falar com a advogada
              <ArrowRight size={17} />
            </a>
            <a className={styles.textButton} href="#areas">
              Conhecer as áreas de atuação
              <ArrowDown size={15} />
            </a>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div
            className={styles.heroPanel}
            role="img"
            aria-label="Imagem institucional da Justiça em tons de vinho e bronze"
          >
            <div className={styles.heroPanelIndex} aria-hidden="true">A / 01</div>
            <div className={styles.heroPanelCaption}>
              <span>Equilíbrio</span>
              <span>Proteção</span>
              <span>Clareza</span>
            </div>
          </div>
          <div className={styles.heroSeal}>
            <ShieldCheck size={18} />
            <span>
              Atuação desde 2017
              <strong>na Zona Leste de São Paulo</strong>
            </span>
          </div>
        </div>

        <div className={styles.scrollCue} aria-hidden="true">
          <span>Role para descobrir</span>
          <ArrowDown size={14} />
        </div>
      </section>

      <section className={styles.trustStrip} aria-label="Diferenciais do escritório">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label}>
              <Icon />
              <span>
                {item.label}
                <strong>{item.text}</strong>
              </span>
            </div>
          );
        })}
      </section>

      <section className={styles.approach} id="areas">
        <Reveal>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrowDark}>Áreas de atuação</p>
            <h2>Uma advocacia próxima para os momentos que mais importam.</h2>
            <p className={styles.approachLead}>
              Três frentes de atuação estruturadas para atender às necessidades mais
              comuns de quem procura orientação jurídica na Zona Leste de São Paulo.
            </p>
          </div>
        </Reveal>

        <div className={styles.areasGrid}>
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.eyebrow} delay={i * 90}>
                <article className={styles.areaCard}>
                  <span className={styles.areaNumber}>0{i + 1}</span>
                  <div className={styles.areaTop}>
                    <Icon size={22} aria-hidden="true" />
                    <p>{area.eyebrow}</p>
                  </div>
                  <h3>{area.title}</h3>
                  <div className={styles.cardLine} />
                  <ul className={styles.areaTags}>
                    {area.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a className={styles.areaAction} href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    Conversar sobre esta área <ArrowRight size={16} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className={styles.steps} id="como-funciona">
        <Reveal>
          <div className={styles.resultsHeading}>
            <p className={styles.eyebrowLight}>Como funciona</p>
            <h2>Um processo claro, do primeiro contato até a solução.</h2>
          </div>
        </Reveal>

        <div className={styles.stepsGrid}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={i * 90}>
                <article className={styles.stepCard}>
                  <span className={styles.stepNumber}>0{i + 1}</span>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className={styles.testimonials} id="depoimentos">
        <Reveal>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrowDark}>Depoimentos</p>
            <h2>Quem já foi atendido conta como foi.</h2>
            <p className={styles.approachLead}>
              Relatos espontâneos que traduzem o que mais importa: escuta, presença
              e orientação clara em momentos decisivos.
            </p>
          </div>
        </Reveal>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 90}>
              <article className={styles.testimonialCard}>
                <span className={styles.quoteMarkSmall}>&ldquo;</span>
                <p>{t.text}</p>
                <strong>{t.name}</strong>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.about} id="sobre">
        <div className={styles.aboutVisual}>
          <div className={styles.aboutQuote}>
            <span className={styles.quoteMark}>&ldquo;</span>
            <p>
              Preservação da ética, confiança, seriedade e excelência em cada caso
              que passa pelas mãos do escritório.
            </p>
          </div>
          <div className={styles.aboutMonogram} aria-hidden="true">
            <ScaleMark size={56} />
          </div>
        </div>

        <div className={styles.aboutCopy}>
          <p className={styles.eyebrowDark}>Sobre o escritório</p>
          <h2>Dra. Patrícia Oliveira Almeida</h2>
          <p className={styles.aboutLead}>
            Advocacia construída para acompanhar de perto quem mais precisa.
          </p>
          <p>
            Advogada e proprietária da Almeida Advocacia, a Dra. Patrícia atua desde
            2017 em São Miguel Paulista, na Zona Leste de São Paulo. Possui experiência
            em contencioso trabalhista e cível, com atuação em Direito de Família,
            do Consumidor e Previdenciário, atendendo pessoas físicas e jurídicas.
          </p>
          <p>
            O atendimento é conduzido com sigilo absoluto, de forma presencial ou à
            distância, no contencioso ou consultivo, sempre com explicações claras
            sobre cada etapa. Quando possível, o escritório busca a conciliação e a
            mediação como caminhos para a resolução de conflitos.
          </p>

          <div className={styles.formationGrid} aria-label="Registros profissionais e formação">
            <article>
              <Scale size={20} aria-hidden="true" />
              <span>Registro profissional</span>
              <strong>OAB/SP 387.824</strong>
              <small>Família, consumidor, trabalho e previdenciário</small>
            </article>
            <article>
              <GraduationCap size={20} aria-hidden="true" />
              <span>Formação</span>
              <strong>Universidade Cruzeiro do Sul</strong>
              <small>Graduação em Direito</small>
            </article>
            <article>
              <Landmark size={20} aria-hidden="true" />
              <span>Especialização</span>
              <strong>Direito Previdenciário</strong>
              <small>Pós-graduação</small>
            </article>
          </div>

          <p className={styles.signature}>
            &ldquo;Atuamos com sigilo absoluto. Presencial ou à distância.&rdquo;
          </p>
        </div>
      </section>

      <section className={styles.team} id="equipe">
        <Reveal>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrowDark}>Sócias</p>
            <h2>Duas trajetórias. Um compromisso em comum.</h2>
            <p className={styles.approachLead}>
              Atendimento conduzido com proximidade, responsabilidade técnica e
              visão integrada para cada situação jurídica.
            </p>
          </div>
        </Reveal>

        <div className={styles.teamGrid}>
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 90}>
              <article className={styles.teamCard}>
                <div className={styles.teamPhoto}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={1536}
                    height={1024}
                    sizes="(max-width: 580px) calc(100vw - 36px), (max-width: 860px) calc(100vw - 48px), 680px"
                    quality={90}
                  />
                  <span className={styles.teamIndex}>0{i + 1}</span>
                </div>
                <div className={styles.teamInfo}>
                  <span className={styles.teamRole}>{member.role}</span>
                  <h3>{member.name}</h3>
                  <p>{member.oab}</p>
                  <span className={styles.teamDetail}>{member.detail}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.location} id="localizacao">
        <div className={styles.locationCopy}>
          <p className={styles.eyebrowDark}>Onde atendemos</p>
          <h2>Em Vila Jacuí, São Miguel Paulista, e à distância para todo o Brasil.</h2>
          <p>
            Atendimento presencial no escritório em Vila Jacuí, São Miguel Paulista,
            com possibilidade de consultas e acompanhamento processual à distância
            para quem não pode comparecer pessoalmente.
          </p>
          <div className={styles.locationBadges}>
            <span>
              <MapPin size={16} /> Vila Jacuí, SP · presencial
            </span>
            <span>
              <ShieldCheck size={16} /> Atendimento à distância · mediante agendamento
            </span>
          </div>
        </div>
        <div className={styles.mapFrame}>
          <iframe
            title="Localização: Vila Jacuí, São Miguel Paulista, SP"
            src="https://www.google.com/maps?q=Rua+Coronel+Manoel+Feliciano+de+Souza,+111,+Vila+Jacu%C3%AD,+S%C3%A3o+Paulo,+SP&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className={styles.mapNote}>{ADDRESS}, CEP 08060-060</p>
        </div>
      </section>

      <section className={styles.finalCta} id="contato">
        <div className={styles.finalOrnament} aria-hidden="true">
          <ScaleMark size={72} />
        </div>
        <div className={styles.finalContent}>
          <p className={styles.eyebrowLight}>Fale com a Dra. Patrícia</p>
          <h2>O primeiro passo é entender o que a lei diz sobre o seu caso.</h2>
          <p>
            Envie sua dúvida pelo WhatsApp e entenda, com sigilo e sem compromisso,
            quais caminhos jurídicos estão ao seu alcance.
          </p>
          <a className={styles.finalButton} href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={18} />
            Falar pelo WhatsApp
          </a>
        </div>

        <div className={styles.contactCard}>
          <span>Atendimento</span>
          <strong>Vila Jacuí, SP</strong>
          <p>
            {ADDRESS}
            <br />
            CEP 08060-060
          </p>
          <div className={styles.contactLine} />
          <a href={`tel:+5511966607915`}>
            <Phone size={16} />
            {PHONE_PRIMARY}
          </a>
          <a href={`tel:+551135645535`}>
            <Phone size={16} />
            {PHONE_LANDLINE}
          </a>
          <a href={`mailto:${EMAIL}`}>
            <Mail size={16} />
            {EMAIL}
          </a>
        </div>
      </section>

      <footer className={styles.footer} id="rodape">
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <Brand light />
            <p>
              Advocacia em Direito de Família, Consumidor, Trabalho e Previdenciário
              em São Miguel Paulista, atendimento presencial ou à distância.
            </p>
          </div>

          <div className={styles.footerCredentials}>
            <span className={styles.footerEyebrow}>Registro profissional</span>
            <div className={styles.footerCredentialRow}>
              <ShieldCheck size={17} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <small>Advogada responsável</small>
                <strong>Dra. Patrícia Oliveira Almeida</strong>
              </div>
            </div>
            <div className={styles.footerCredentialRow}>
              <ShieldCheck size={17} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <small>Inscrição</small>
                <strong>OAB/SP 387.824</strong>
              </div>
            </div>
          </div>

          <div className={styles.footerContact}>
            <span className={styles.footerEyebrow}>Fale com o escritório</span>
            <a className={styles.footerWhatsapp} href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={18} />
              Enviar mensagem
            </a>
            <a className={styles.footerInstagram} href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <Instagram size={15} strokeWidth={1.6} />
              @almeidaescritorioadvocacia
            </a>
            <a className={styles.footerInstagram} href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              <Facebook size={15} strokeWidth={1.6} />
              @escritorioalmeidaadv
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2026 Almeida Advocacia</span>
          <nav aria-label="Navegação do rodapé">
            {nav.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
          <div>
            <span>Site desenvolvido por</span>
            <a href="https://lumasites.com.br" target="_blank" rel="noreferrer">
              Luma Sites
            </a>
          </div>
        </div>
      </footer>

      <a
        id="whatsapp-flutuante"
        className={`${styles.floatingWhatsapp} ${
          whatsappOnDark ? styles.floatingWhatsappOnDark : ""
        } ${footerVisible ? styles.floatingWhatsappHidden : ""}`}
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Almeida Advocacia pelo WhatsApp"
      >
        <WhatsAppIcon size={24} />
      </a>
    </main>
  );
}
