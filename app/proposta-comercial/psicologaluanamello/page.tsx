"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Check,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  Menu,
  Monitor,
  Navigation,
  Sparkles,
  X,
} from "lucide-react";
import styles from "./style.module.css";

const assets = "/psicologaluanamello";

const whatsappBase = "5551998001511";
const waWorker = `https://wa.me/${whatsappBase}?text=${encodeURIComponent(
  "Olá, Luana! Vim pela sua prévia de site e gostaria de marcar uma primeira conversa."
)}`;
const waEmployer = `https://wa.me/${whatsappBase}?text=${encodeURIComponent(
  "Olá, Luana! Vim pela sua prévia de site e gostaria de falar sobre a minha empresa."
)}`;
const instagramPessoal = "https://instagram.com/psi.luanamello";
const instagramElasRh = "https://instagram.com/elas.rh";

// Preencher com o endereço comercial confirmado para habilitar a rota presencial.
const presencialAddress = "";
const mapsQuery = presencialAddress || "Brasil";
const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=4&hl=pt-BR&output=embed`;
const mapsRouteUrl = presencialAddress
  ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(presencialAddress)}`
  : "";

const navLinks = [
  { id: "sobre", label: "Sobre" },
  { id: "pilares", label: "Atuação" },
  { id: "caminhos", label: "Para você / Empresa" },
  { id: "processo", label: "Como funciona" },
  { id: "duvidas", label: "Dúvidas" },
];

const navIds = navLinks.map((link) => link.id);

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const pillars = [
  {
    icon: Briefcase,
    number: "01",
    title: "Psicologia do Trabalho",
    text: "Saúde mental no ambiente organizacional, desenvolvimento de lideranças e cultura organizacional — a frente que ocupa o centro da atuação da Luana hoje.",
    image: `${assets}/pillar-work-clean-v2.jpg`,
    alt: "Cérebro acolhido por duas mãos, representando saúde mental e trabalho",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Psicanálise",
    text: "Atendimento clínico individual, presencial ou online, para compreender seus processos subjetivos e os impactos do trabalho e da vida na sua saúde emocional.",
    image: `${assets}/pillar-psychoanalysis-clean-v2.jpg`,
    alt: "Retrato em sépia de Sigmund Freud, referência histórica da Psicanálise",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "Consultoria para Empresas",
    text: "Diagnóstico organizacional, recrutamento e seleção, treinamentos e projetos contínuos de RH para equipes que precisam de uma parceira estratégica em gestão de pessoas.",
    image: `${assets}/pillar-corporate-clean-v2.jpg`,
    alt: "Entrada de um ambiente corporativo em tons dourados",
  },
];

const reflectionCards = [
  { file: "card-01.jpg", alt: "Cartão \"01 — Reflexão: a imagem refletida\" sobre como você se sente ao final do expediente" },
  { file: "card-02.jpg", alt: "Cartão \"02 — Permanência: o trabalho que fica\" sobre desconectar a mente do trabalho" },
  { file: "card-03.jpg", alt: "Cartão \"03 — Limites: onde você começa\" sobre respeitar o espaço fora do trabalho" },
  { file: "card-04.jpg", alt: "Cartão \"04 — Possibilidade: a vida que continua\" sobre psicoterapia e saúde no trabalho" },
];

const workerItems = [
  "Atendimento psicológico individual fundamentado em Psicanálise",
  "Sessões semanais, presenciais ou online",
  "Espaço para compreender os impactos do trabalho e da vida na sua saúde emocional",
];

const employerItems = [
  "Diagnóstico organizacional e desenvolvimento de lideranças",
  "Recrutamento e seleção estruturado",
  "Treinamentos, palestras e mediação de conflitos",
  "Acompanhamento contínuo como parceira estratégica de RH",
];

const processSteps = [
  {
    number: "01",
    title: "Primeira conversa",
    text: "Entendimento inicial da sua necessidade — atendimento individual ou apoio para a sua empresa.",
  },
  {
    number: "02",
    title: "Entendimento do contexto",
    text: "Alinhamento sobre o momento, os objetivos e o formato de acompanhamento mais adequado.",
  },
  {
    number: "03",
    title: "Plano de acompanhamento",
    text: "Sessões de psicanálise ou projeto de consultoria em RH, conforme o caminho escolhido.",
  },
];

const employerCredentials = [
  {
    number: "01",
    eyebrow: "Acesso total",
    title: "O peso invisível do comando",
    text: "Enquanto a estrutura exige certezas, o líder absorve a incerteza de todo o sistema.",
    emphasis: "A exaustão não vem do volume. Vem da solidão das decisões críticas.",
    footer: "Emitido por ninguém — válido todos os dias",
    image: `${assets}/credential-command-v2.jpg`,
    alt: "Credencial sobre o peso invisível do comando e a solidão das decisões críticas",
  },
  {
    number: "02",
    eyebrow: "Sinal clínico",
    title: "O que parece maturidade",
    text: "Decidir mais rápido e sentir menos não é evolução. É anestesia de quem absorve demais.",
    emphasis: "Endurecer não é experiência. É distanciamento por esgotamento.",
    footer: "Confundido com progresso — todos os dias",
    image: `${assets}/credential-maturity-v2.jpg`,
    alt: "Credencial sobre maturidade, experiência e esgotamento no trabalho",
  },
  {
    number: "03",
    eyebrow: "Avaliação externa",
    title: "Quem avalia a si se absolve",
    text: "Ninguém relata ao gestor o que o próprio gestor representa. Medir exige quem esteja fora.",
    emphasis: "Isso não é falha de escuta. É limite de quem está dentro do quadro.",
    footer: "Assinado por quem é avaliado",
    image: `${assets}/credential-perspective-v2.jpg`,
    alt: "Credencial sobre a importância de uma avaliação externa para lideranças",
  },
  {
    number: "04",
    eyebrow: "Acompanhamento ativo",
    title: "O que falta não é resistir",
    text: "A incerteza que você absorve não se dissolve sozinha. O tratamento é parte do trabalho.",
    emphasis: "Procurar ajuda não é perder autoridade. É recuperar o julgamento que ela exige.",
    footer: "Primeira credencial com emissor",
    image: `${assets}/credential-support-v2.jpg`,
    alt: "Credencial sobre acompanhamento ativo e apoio para quem lidera",
  },
];

const questions = [
  {
    question: "Como funciona o atendimento psicológico individual?",
    answer:
      "O acompanhamento é fundamentado na Psicanálise e acontece em sessões semanais. O espaço é voltado à compreensão dos processos subjetivos, das relações e dos impactos que o trabalho e a vida exercem sobre a saúde emocional.",
  },
  {
    question: "O atendimento pode ser online ou presencial?",
    answer:
      "O atendimento online está disponível para todo o Brasil. Para a modalidade presencial, entre em contato para consultar a disponibilidade e o local de atendimento.",
  },
  {
    question: "O que faz uma psicóloga organizacional e do trabalho?",
    answer:
      "A Psicologia Organizacional e do Trabalho estuda a relação entre as pessoas e o trabalho. Minha atuação envolve desenvolvimento de lideranças, saúde mental no ambiente organizacional, gestão de pessoas, recrutamento e seleção, cultura organizacional, treinamentos e consultorias voltadas para equipes e empresas.",
  },
  {
    question: "Como funciona a consultoria para empresas?",
    answer:
      "Cada projeto é desenvolvido de acordo com a realidade da organização. O trabalho pode incluir diagnóstico organizacional, desenvolvimento de lideranças, recrutamento e seleção, treinamentos, mediação de conflitos, implantação de processos de RH, ações de saúde mental e programas de desenvolvimento humano.",
  },
  {
    question: "Como funciona o processo de recrutamento e seleção?",
    answer:
      "Realizamos um processo estruturado, que pode incluir alinhamento de perfil, divulgação da vaga, triagem de currículos, entrevistas, aplicação de instrumentos permitidos pela legislação e apresentação dos candidatos mais aderentes à vaga.",
  },
  {
    question: "Você realiza palestras e treinamentos?",
    answer:
      "Sim. Desenvolvo palestras, workshops e treinamentos personalizados sobre liderança, comunicação, saúde mental no trabalho, desenvolvimento de equipes, cultura organizacional, feedback, gestão de conflitos e outros temas relacionados à Psicologia do Trabalho.",
  },
  {
    question: "É possível contratar um projeto contínuo de RH para minha empresa?",
    answer:
      "Sim. Além de projetos pontuais, também desenvolvo acompanhamentos contínuos, atuando como parceira estratégica na gestão de pessoas e no desenvolvimento organizacional.",
  },
  {
    question: "Você também realiza atendimentos clínicos?",
    answer:
      "Sim. Além da atuação nas organizações, realizo atendimentos psicológicos individuais, fundamentados na Psicanálise, para pessoas que desejam compreender seus processos subjetivos, suas relações e os impactos que o trabalho e a vida exercem sobre sua saúde emocional.",
  },
];

const contactLinks = [
  {
    icon: MessageCircle,
    label: "Conversar pelo WhatsApp",
    detail: "Conte brevemente o que você está buscando",
    href: waWorker,
  },
  {
    icon: Instagram,
    label: "Psicologia e trabalho",
    detail: "@psi.luanamello",
    href: instagramPessoal,
  },
  {
    icon: Briefcase,
    label: "Consultoria em RH",
    detail: "@elas.rh",
    href: instagramElasRh,
  },
];

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26A9.89 9.89 0 0 1 12.06 2c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.89 9.89M20.47 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 0 0-3.47-8.41" />
    </svg>
  );
}

export default function PsicologaLuanaMelloPreview() {
  const active = useActiveSection(navIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuCloseRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const locationButtonRef = useRef<HTMLButtonElement>(null);
  const locationModalRef = useRef<HTMLDivElement>(null);
  const locationModalCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const root = document.getElementById("inicio");
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-lm-reveal]"));
    root?.setAttribute("data-motion-ready", "true");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.setAttribute("data-revealed", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-revealed", "true");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const footer = document.getElementById("rodape");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    menuCloseRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
      if (e.key !== "Tab" || !menuRef.current) return;
      const focusable = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>("a, button")
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      menuButtonRef.current?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!locationModalOpen) return;
    locationModalCloseRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLocationModalOpen(false);
      if (e.key !== "Tab" || !locationModalRef.current) return;
      const focusable = Array.from(
        locationModalRef.current.querySelectorAll<HTMLElement>("a, button, iframe")
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      locationButtonRef.current?.focus({ preventScroll: true });
    };
  }, [locationModalOpen]);

  return (
    <main id="inicio" className={styles.site}>
      <div className={styles.previewBar}>
        <span>
          <span className={styles.previewDot} /> PRÉVIA CONCEITUAL
        </span>
        <span>Conteúdo com base no site atual · Fotos e dados finais a confirmar</span>
      </div>

      <header className={styles.header}>
        <div className={styles.container}>
          <a href="#inicio" className={styles.logo} aria-label="Luana Mello, início">
            <Image
              src={`${assets}/logo-lm-transparente.png`}
              alt=""
              width={80}
              height={80}
              className={styles.logoMark}
              priority
            />
            <span className={styles.logoText}>
              Luana Mello
              <small>Psicóloga Clínica e do Trabalho</small>
            </span>
          </a>
          <nav aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={active === link.id ? styles.navActive : undefined}
                aria-current={active === link.id ? "location" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a className={styles.headerCta} href={waWorker} target="_blank" rel="noreferrer">
            Marcar conversa <ArrowUpRight size={15} />
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className={styles.menuToggle}
            aria-label="Abrir menu de navegação"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <div
        ref={menuRef}
        id="menu-mobile"
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navegação"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className={styles.mobileNavTop}>
          <span className={styles.kicker}>NAVEGAÇÃO</span>
          <button
            ref={menuCloseRef}
            type="button"
            className={styles.mobileNavClose}
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <nav aria-label="Navegação principal (mobile)">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? styles.mobileNavLinkActive : undefined}
              aria-current={active === link.id ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className={styles.primaryButton}
          href={waWorker}
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Quero iniciar meu acompanhamento <ArrowUpRight size={15} />
        </a>
      </div>

      <section className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}>
              <span /> PSICOLOGIA DO TRABALHO · PSICANÁLISE · RH
            </div>
            <h1>
              Da clínica ao corporativo,
              <br />
              <em>o seu bem-estar</em> como pilar do seu sucesso profissional.
            </h1>
            <p>
              Atendimento psicanalítico individual e consultoria em Psicologia do
              Trabalho e gestão de pessoas para empresas que querem cuidar de quem
              faz o negócio acontecer.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href={waWorker} target="_blank" rel="noreferrer">
                Quero iniciar meu acompanhamento <ArrowRight size={18} />
              </a>
              <a className={styles.textButton} href={waEmployer} target="_blank" rel="noreferrer">
                Quero apoio para minha empresa <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroHalo} aria-hidden="true" />
            <div className={styles.heroPhotoFrame}>
              <div className={styles.heroPhoto}>
                <Image
                  src={`${assets}/luana-hero-clean-v2.jpg`}
                  alt="Luana Mello, psicóloga clínica e do trabalho"
                  fill
                  sizes="(max-width: 900px) 90vw, 460px"
                  style={{ objectFit: "cover", objectPosition: "50% 50%" }}
                  priority
                />
              </div>
              <div className={styles.heroCaption}>
                <span>Luana Mello</span>
                <small>CRP 07/43831</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={`${styles.chapterDivider} ${styles.chapterDividerSoft}`} aria-label="Capítulo 1: Conheça a Luana">
        <div className={styles.container}>
          <span>01</span><strong>Conheça a Luana</strong><i aria-hidden="true" />
        </div>
      </div>

      <section className={styles.about} id="sobre" data-lm-reveal>
        <div className={`${styles.container} ${styles.aboutGrid}`}>
          <div className={styles.aboutPortrait}>
            <Image
              src={`${assets}/luana-about-clean-v2.jpg`}
              alt="Luana Mello, psicóloga clínica e do trabalho"
              fill
              sizes="(max-width: 780px) 90vw, 430px"
              style={{ objectFit: "cover", objectPosition: "50% 50%" }}
            />
          </div>
          <div className={styles.aboutCopy}>
            <span className={styles.kicker}>SOBRE LUANA MELLO</span>
            <h2>
              Escuta clínica e visão organizacional para cuidar de <em>pessoas e relações de trabalho.</em>
            </h2>
            <p>
              Psicóloga Clínica e do Trabalho, Luana une a profundidade da Psicanálise à compreensão dos desafios vividos por profissionais, lideranças e empresas.
            </p>
            <blockquote>
              “Hoje o meu trabalho se faz, de fato, na Psicologia do Trabalho — <em>é aquilo que eu amo.</em>”
            </blockquote>
            <div className={styles.trustGrid} aria-label="Credenciais e modalidades de atendimento">
              <div><BadgeCheck aria-hidden="true" /><span><strong>CRP 07/43831</strong>Registro profissional</span></div>
              <div><GraduationCap aria-hidden="true" /><span><strong>Psicanálise</strong>Pós-graduação</span></div>
              <div><Globe2 aria-hidden="true" /><span><strong>Todo o Brasil</strong>Atendimento online</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.chapterDivider} aria-label="Capítulo 2: Formas de cuidado">
        <div className={styles.container}>
          <span>02</span><strong>Formas de cuidado</strong><i aria-hidden="true" />
        </div>
      </div>

      <section className={styles.pillars} id="pilares">
        <div className={styles.container}>
          <div className={styles.sectionHeading} data-lm-reveal>
            <span className={styles.kicker}>ÁREAS DE ATUAÇÃO</span>
            <h2>
              Três frentes, <em>um mesmo cuidado</em> com as pessoas.
            </h2>
          </div>
          <div className={styles.pillarGrid}>
            {pillars.map((pillar) => (
              <article className={styles.pillar} key={pillar.number} data-lm-reveal>
                <div className={styles.pillarImage}>
                  <Image src={pillar.image} alt={pillar.alt} fill sizes="(max-width: 720px) 90vw, 360px" style={{ objectFit: "contain" }} />
                </div>
                <div className={styles.pillarMeta} aria-hidden="true">
                  <span className={styles.pillarNumber}>{pillar.number}</span>
                  <pillar.icon size={20} className={styles.pillarIcon} />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.paths} id="caminhos">
        <div className={styles.container}>
          <div className={styles.sectionHeading} data-lm-reveal>
            <span className={styles.kicker}>COMO POSSO TE AJUDAR</span>
            <h2>
              Escolha o caminho que faz sentido <em>para o seu momento.</em>
            </h2>
          </div>
          <div className={styles.pathGrid}>
            <article className={styles.path} data-lm-reveal>
              <span className={styles.kicker}>PARA VOCÊ</span>
              <h3>Acompanhamento individual</h3>
              <ul>
                {workerItems.map((item) => (
                  <li key={item}>
                    <Check size={16} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className={styles.reflectionIntro}>
                <span>O ESPELHO</span>
                <strong>O que o trabalho reflete sobre você?</strong>
                <small>Saúde mental no trabalho</small>
              </div>
              <div className={styles.reflectionGrid}>
                {reflectionCards.map((card) => (
                  <div className={styles.reflectionThumb} key={card.file}>
                    <Image
                      src={`${assets}/${card.file}`}
                      alt={card.alt}
                      fill
                      sizes="140px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
              <a className={styles.inlineLink} href={waWorker} target="_blank" rel="noreferrer">
                Quero iniciar meu acompanhamento <ArrowUpRight size={18} />
              </a>
            </article>
            <article className={`${styles.path} ${styles.pathAccent}`} data-lm-reveal>
              <div className={styles.pathBanner}>
                <Image
                  src={`${assets}/lobby.jpg`}
                  alt="Recepção corporativa em tons dourados, representando o ambiente das empresas atendidas"
                  fill
                  sizes="(max-width: 780px) 90vw, 460px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span className={styles.kicker}>PARA SUA EMPRESA</span>
              <h3>Consultoria em RH e gestão de pessoas</h3>
              <ul>
                {employerItems.map((item) => (
                  <li key={item}>
                    <Check size={16} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a className={styles.inlineLink} href={waEmployer} target="_blank" rel="noreferrer">
                Quero apoio para minha empresa <ArrowUpRight size={18} />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.psychoanalysis} id="psicanalise">
        <div className={`${styles.container} ${styles.psychoGrid}`} data-lm-reveal>
          <div className={styles.psychoPrompt}>
            <span className={styles.kicker}>ESPECIALISTA EM PSICANÁLISE</span>
            <h2>Como você se constitui <em>como sujeito?</em></h2>
            <p>
              E como a sua história, seus desejos, seus conflitos e as repetições da sua vida
              aparecem no presente?
            </p>
            <a className={styles.inlineLink} href={waWorker} target="_blank" rel="noreferrer">
              Conversar sobre o acompanhamento <ArrowUpRight size={18} />
            </a>
          </div>
          <dl className={styles.psychoFacts} aria-label="Informações sobre o atendimento psicanalítico">
            <div><dt>Formação</dt><dd>Pós-graduação em Psicanálise</dd></div>
            <div><dt>Atendimento</dt><dd>Presencial e online</dd></div>
            <div><dt>Frequência</dt><dd>Sessões semanais</dd></div>
          </dl>
        </div>
      </section>

      <section className={styles.credentials} aria-labelledby="credenciais-title">
        <div className={styles.credentialsGlow} aria-hidden="true" />
        <div className={styles.container}>
          <div className={`${styles.chapterDivider} ${styles.chapterDividerDark}`} aria-label="Capítulo 3: Para quem lidera">
            <div>
              <span>03</span><strong>Para quem lidera</strong><i aria-hidden="true" />
            </div>
          </div>
          <div className={styles.credentialsHeading} data-lm-reveal>
            <div>
              <span className={styles.kicker}>PARA QUEM LIDERA</span>
              <h2 id="credenciais-title">
                Nem todo peso da liderança <em>precisa ser carregado sozinho.</em>
              </h2>
            </div>
            <p>
              Uma leitura mais profunda sobre decisões, maturidade, perspectiva e acompanhamento no ambiente de trabalho.
            </p>
          </div>
          <div className={styles.dragHint} aria-hidden="true">
            MOVIMENTO CONTÍNUO <ArrowRight size={15} />
          </div>
          <div className={styles.credentialsTrack} aria-label="Reflexões para lideranças em movimento horizontal contínuo">
            <div className={styles.credentialsRail}>
              {[false, true].map((duplicate) => (
                <div
                  className={styles.credentialSet}
                  key={duplicate ? "duplicate" : "original"}
                  aria-hidden={duplicate || undefined}
                >
                  {employerCredentials.map((credential) => (
                    <figure className={styles.credentialCard} key={`${duplicate ? "copy" : "card"}-${credential.number}`}>
                      <div className={styles.credentialImage}>
                        <Image
                          src={credential.image}
                          alt={duplicate ? "" : credential.alt}
                          fill
                          sizes="(max-width: 700px) 74vw, 290px"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <figcaption>
                        <span>{credential.number}</span>
                        {credential.title}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.credentialDetails}>
            {employerCredentials.map((credential) => (
              <article key={`detail-${credential.number}`} data-lm-reveal>
                <header>
                  <span>{credential.number}</span>
                  <small>{credential.eyebrow}</small>
                </header>
                <h3>{credential.title}</h3>
                <p>{credential.text}</p>
                <strong>{credential.emphasis}</strong>
                <small>{credential.footer}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.reach} id="alcance">
        <div className={styles.chapterDivider} aria-label="Capítulo 4: Atendimento e empresas">
          <div className={styles.container}>
            <span>04</span><strong>Atendimento e empresas</strong><i aria-hidden="true" />
          </div>
        </div>
        <div className={`${styles.container} ${styles.reachGrid}`} data-lm-reveal>
          <div className={styles.reachContent}>
            <span className={styles.kicker}>ATENDIMENTO EM TODO O BRASIL</span>
            <h2>Soluções em saúde e performance corporativa, <em>onde sua empresa estiver.</em></h2>
            <p>
              Uma abordagem que une a visão organizacional à profundidade da Psicanálise,
              com atendimento presencial ou online estruturado para tratar a raiz dos problemas
              da equipe com a precisão que o negócio exige.
            </p>
            <div className={styles.reachServices} aria-label="Soluções corporativas">
              <span><Globe2 aria-hidden="true" />Diagnóstico de clima</span>
              <span><Briefcase aria-hidden="true" />Recrutamento estratégico</span>
              <span><HeartHandshake aria-hidden="true" />Mediação de conflitos</span>
              <span><BadgeCheck aria-hidden="true" />Gestão da saúde mental no trabalho</span>
            </div>
            <a className={styles.primaryButton} href={waEmployer} target="_blank" rel="noreferrer">
              Falar sobre a minha empresa <ArrowUpRight size={18} />
            </a>
          </div>
          <div className={styles.coveragePanel}>
            <button
              ref={locationButtonRef}
              type="button"
              className={styles.mapStage}
              onClick={() => setLocationModalOpen(true)}
              aria-haspopup="dialog"
              aria-controls="location-modal"
            >
              <span className={styles.mapKicker}>PRESENCIAL + ONLINE</span>
              <Image
                src={`${assets}/brazil-map-outline.png`}
                alt="Mapa do Brasil representando a cobertura nacional do atendimento online"
                fill
                sizes="(max-width: 860px) 90vw, 520px"
                style={{ objectFit: "contain" }}
              />
              <span className={`${styles.mapPulse} ${styles.mapPulseNorth}`} aria-hidden="true" />
              <span className={`${styles.mapPulse} ${styles.mapPulseCenter}`} aria-hidden="true" />
              <span className={`${styles.mapPulse} ${styles.mapPulseSouth}`} aria-hidden="true" />
              <span className={styles.mapAction}><MapPin size={16} /> Ver locais de atendimento</span>
            </button>
            <div className={styles.coverageModes}>
              <div><Monitor aria-hidden="true" /><span><strong>Online</strong><small>Atendimento em todo o Brasil</small></span></div>
              <div><MapPin aria-hidden="true" /><span><strong>Presencial</strong><small>Endereço sob confirmação</small></span></div>
            </div>
          </div>
        </div>
      </section>

      {locationModalOpen && (
        <div
          className={styles.locationBackdrop}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setLocationModalOpen(false);
          }}
        >
          <div
            ref={locationModalRef}
            id="location-modal"
            className={styles.locationModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="location-modal-title"
          >
            <div className={styles.locationModalHeader}>
              <div>
                <span className={styles.kicker}>ONDE ATENDE</span>
                <h2 id="location-modal-title">Presencial ou online, <em>você escolhe.</em></h2>
              </div>
              <button
                ref={locationModalCloseRef}
                type="button"
                aria-label="Fechar mapa"
                onClick={() => setLocationModalOpen(false)}
              >
                <X size={22} />
              </button>
            </div>
            <div className={styles.locationModalGrid}>
              <div className={styles.googleMapFrame}>
                <iframe
                  title="Mapa da cobertura de atendimento"
                  src={mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className={styles.locationModalInfo}>
                <div className={styles.locationOption}>
                  <Monitor aria-hidden="true" />
                  <div><span>ATENDIMENTO ONLINE</span><strong>Disponível em todo o Brasil</strong><p>Consultas semanais com a mesma privacidade e continuidade do atendimento presencial.</p></div>
                </div>
                <div className={styles.locationOption}>
                  <MapPin aria-hidden="true" />
                  <div><span>ATENDIMENTO PRESENCIAL</span><strong>{presencialAddress || "Local em confirmação"}</strong><p>O site atual ainda não publica o endereço. Confirme o local antes de se deslocar.</p></div>
                </div>
                <div className={styles.locationActions}>
                  {mapsRouteUrl ? (
                    <a href={mapsRouteUrl} target="_blank" rel="noreferrer">
                      <Navigation size={17} /> Traçar rota no Google Maps
                    </a>
                  ) : (
                    <button type="button" disabled title="Disponível após a confirmação do endereço">
                      <Navigation size={17} /> Rota aguardando endereço
                    </button>
                  )}
                  <a href={waWorker} target="_blank" rel="noreferrer">
                    <MessageCircle size={17} /> Confirmar local pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className={styles.process} id="processo">
        <div className={styles.container}>
          <div className={styles.sectionHeading} data-lm-reveal>
            <span className={styles.kicker}>COMO FUNCIONA</span>
            <h2>
              Um processo simples, <em>do primeiro contato ao acompanhamento.</em>
            </h2>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((step) => (
              <div className={styles.processStep} key={step.number} data-lm-reveal>
                <span className={styles.processNumber}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faq} id="duvidas">
        <div className={styles.chapterDivider} aria-label="Capítulo 5: Próximos passos">
          <div className={styles.container}>
            <span>05</span><strong>Próximos passos</strong><i aria-hidden="true" />
          </div>
        </div>
        <div className={`${styles.container} ${styles.faqGrid}`} data-lm-reveal>
          <div>
            <span className={styles.kicker}>ANTES DE COMEÇAR</span>
            <h2>
              Dúvidas que merecem <em>respostas claras.</em>
            </h2>
            <p>
              Reuni aqui o que mais escuto de quem nunca procurou um psicólogo organizacional.
              Se a sua pergunta não estiver na lista, é só me chamar.
            </p>
          </div>
          <div className={styles.faqItems}>
            {questions.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <span>+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div className={`${styles.container} ${styles.contactGrid}`} data-lm-reveal>
          <div>
            <span className={styles.kicker}>VAMOS CONVERSAR</span>
            <h2>
              O primeiro passo pode ser <em>uma simples conversa.</em>
            </h2>
            <p>
              Atendimento online em todo o Brasil e modalidade presencial sob consulta.
              Escreva pelo WhatsApp e conte um pouco sobre o que você está buscando.
            </p>
            <div className={styles.socialIntro}>
              <strong>Onde a conversa começa.</strong>
              <span>Conteúdo sobre saúde mental no trabalho — para quem trabalha e para quem lidera.</span>
            </div>
            <ol className={styles.contactSteps} aria-label="O que acontece depois do contato">
              <li><span>1</span>Você envia uma breve mensagem sobre sua necessidade.</li>
              <li><span>2</span>Luana conversa com você para compreender o contexto.</li>
              <li><span>3</span>Juntos, vocês definem o caminho mais adequado.</li>
            </ol>
            <div className={styles.contactActions}>
              <a className={styles.primaryButton} href={waWorker} target="_blank" rel="noreferrer">
                Falar no WhatsApp <MessageCircle size={18} />
              </a>
            </div>
          </div>
          <div className={styles.contactVisual}>
            <div className={styles.contactPortrait}>
                <Image
                  src={`${assets}/luana-contact-clean-v2.jpg`}
                  alt="Retrato profissional de Luana Mello"
                  fill
                  sizes="(max-width: 860px) 90vw, 440px"
                  style={{ objectFit: "cover", objectPosition: "50% 50%" }}
                />
            </div>
            <div className={styles.contactLinks}>
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  <link.icon aria-hidden="true" />
                  <span><strong>{link.label}</strong><small>{link.detail}</small></span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer} id="rodape">
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <div className={styles.footerIdentity}>
              <a href="#inicio" className={styles.logo} aria-label="Luana Mello, voltar ao início">
                <Image
                  src={`${assets}/logo-lm-transparente.png`}
                  alt=""
                  width={80}
                  height={80}
                  className={styles.logoMark}
                />
                <span className={styles.logoText}>
                  Luana Mello
                  <small>CRP 07/43831</small>
                </span>
              </a>
              <p>Psicologia do Trabalho, Psicanálise e consultoria em RH com profundidade, estratégia e cuidado.</p>
            </div>
            <nav className={styles.footerNav} aria-label="Atalhos do rodapé">
              <span className={styles.footerHeading}>Navegação</span>
              <a href="#sobre">Sobre Luana</a>
              <a href="#pilares">Áreas de atuação</a>
              <a href="#caminhos">Para você / Empresa</a>
              <a href="#processo">Como funciona</a>
              <a href="#duvidas">Dúvidas frequentes</a>
            </nav>
            <nav className={styles.footerNav} aria-label="Modalidades de atendimento">
              <span className={styles.footerHeading}>Atendimento</span>
              <a href="#psicanalise">Psicanálise individual</a>
              <a href="#caminhos">Psicologia do Trabalho</a>
              <a href="#alcance">Consultoria para empresas</a>
              <a href="#alcance">Online em todo o Brasil</a>
              <a href="#alcance">Presencial sob consulta</a>
            </nav>
            <div className={styles.footerContact}>
              <span className={styles.footerHeading}>Canais</span>
              <a className={styles.footerWhatsapp} href={waWorker} target="_blank" rel="noreferrer">
                WhatsApp <ArrowUpRight size={16} />
              </a>
              <a className={styles.footerSocial} href={instagramPessoal} target="_blank" rel="noreferrer">
                @psi.luanamello <ArrowUpRight size={16} />
              </a>
              <a className={styles.footerSocial} href={instagramElasRh} target="_blank" rel="noreferrer">
                @elas.rh <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className={styles.footerTrust} aria-label="Credenciais e formatos de atendimento">
            <span><BadgeCheck aria-hidden="true" /><strong>CRP 07/43831</strong>Registro profissional</span>
            <span><GraduationCap aria-hidden="true" /><strong>Psicanálise</strong>Pós-graduação</span>
            <span><Globe2 aria-hidden="true" /><strong>Todo o Brasil</strong>Atendimento online</span>
            <span><MapPin aria-hidden="true" /><strong>Presencial</strong>Local sob consulta</span>
          </div>
          <div className={styles.footerLegal}>
            Conteúdo informativo, sem promessa de resultado clínico, conforme o
            Código de Ética Profissional e a Resolução CFP nº 11/2018 sobre
            publicidade. Fotos, e-mail e cidade de atendimento presencial em
            definição com a cliente antes da publicação comercial.
          </div>
          <div className={styles.footerBottom}>
            <span>
              © {new Date().getFullYear()} Luana Mello · Prévia conceitual ·
              Informações sujeitas à confirmação
            </span>
            <a href="#inicio">
              Voltar ao início <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </footer>

      <a
        className={`${styles.floatingWhatsapp} ${footerVisible ? styles.floatingWhatsappHidden : ""}`}
        href={waWorker}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Luana Mello pelo WhatsApp"
      >
        <WhatsAppIcon size={24} />
      </a>
    </main>
  );
}
