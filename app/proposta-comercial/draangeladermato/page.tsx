"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ChevronRight,
  Instagram,
  Menu,
  Microscope,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./style.module.css";

const WHATSAPP = "5592928902505";
const MESSAGE =
  "Olá! Gostaria de agendar uma consulta com a Dra. Angela Carolina Nascimento.";
const whatsapp = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MESSAGE)}`;

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dra. Angela Carolina Nascimento",
  url: "https://lumasites.com.br/proposta-comercial/draangeladermato",
  image:
    "https://lumasites.com.br/images/draangeladermato/dra-angela-hero-conceitual.png",
  jobTitle: "Médica dermatologista",
  identifier: [
    {
      "@type": "PropertyValue",
      name: "CRM-AM",
      value: "14020",
    },
    {
      "@type": "PropertyValue",
      name: "RQE em Dermatologia",
      value: "6467",
    },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidade José do Rosário Vellano (UNIFENAS)",
  },
  knowsAbout: [
    "Dermatologia clínica",
    "Dermatologia cirúrgica",
    "Dermatologia estética",
  ],
  areaServed: {
    "@type": "City",
    name: "Manaus",
  },
};

const nav = [
  ["Atendimento", "#atendimento"],
  ["Quando procurar", "#quando-procurar"],
  ["Sobre", "#sobre"],
  ["Contato", "#contato"],
];

const careGroups = [
  {
    number: "01",
    eyebrow: "Pele",
    title: "Alterações da pele",
    text: "Acne, melasma, rosácea, dermatites, alergias, psoríase, vitiligo, urticária, micoses, herpes e coceira persistente.",
  },
  {
    number: "02",
    eyebrow: "Cabelos & unhas",
    title: "Queda de cabelo e problemas nas unhas",
    text: "Queda de cabelo, calvície, caspa, dermatite seborreica, doenças do couro cabeludo, micoses e outras alterações das unhas.",
  },
  {
    number: "03",
    eyebrow: "Prevenção",
    title: "Pintas, sinais e câncer de pele",
    text: "Avaliação de pintas e sinais, prevenção do câncer de pele e acompanhamento de lesões que mudaram de forma, cor ou tamanho.",
  },
  {
    number: "04",
    eyebrow: "Cirurgias",
    title: "Procedimentos dermatológicos",
    text: "Avaliação de verrugas, cistos, caroços, furúnculos e outras lesões com indicação de pequenas cirurgias da pele.",
  },
];

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26A9.89 9.89 0 0 1 12.06 2c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.89 9.89M20.47 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 0 0-3.47-8.41" />
    </svg>
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className={`${styles.brand} ${light ? styles.brandLight : ""}`}>
      <Image
        className={styles.brandLogo}
        src="/images/draangeladermato/dra-angela-monogram.png"
        alt="Monograma AC"
        width={841}
        height={741}
        priority
      />
      <div className={styles.brandText}>
        <span className={styles.brandHonorific}>Dra.</span>
        <strong>Angela Carolina</strong>
        <span className={styles.brandSurname}>Nascimento</span>
        <span className={styles.brandCredentials}>CRM AM 14020 · RQE 6467</span>
        <span className={styles.brandAreas}>
          Dermatologista · Clínica · Cirúrgica · Estética
        </span>
      </div>
    </div>
  );
}

function HeaderBrand({ compact }: { compact: boolean }) {
  return (
    <div className={`${styles.brand} ${styles.brandInline} ${compact ? styles.brandCompact : ""}`}>
      <Image
        className={styles.brandLogo}
        src="/images/draangeladermato/dra-angela-monogram.png"
        alt="Monograma AC"
        width={841}
        height={741}
        priority
      />
      <div className={styles.brandText}>
        <span className={styles.brandName}>
          {!compact && <span className={styles.brandHonorific}>Dra. </span>}
          Angela Carolina Nascimento
        </span>
        <span className={styles.brandMeta}>
          <span>CRM-AM 14020</span>
          <span className={styles.brandDot} aria-hidden="true" />
          <span>RQE 6467</span>
          <span className={styles.brandDot} aria-hidden="true" />
          <span>Dermatologista</span>
        </span>
      </div>
    </div>
  );
}

export default function DraAngelaPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

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

  return (
    <main className={styles.page} id="inicio">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <div className={styles.previewBar}>
        <span className={styles.previewDot} />
        <span>Prévia conceitual</span>
        <span className={styles.previewDivider} />
        <span className={styles.previewDetail}>
          Conteúdo e imagens sujeitos à aprovação
        </span>
      </div>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.headerInner}>
          <a href="#inicio" aria-label="Voltar ao início">
            <HeaderBrand compact={scrolled} />
          </a>

          <nav className={styles.desktopNav} aria-label="Navegação principal">
            {nav.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <a
            className={styles.headerCta}
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Agendar consulta
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
          <a href={whatsapp} target="_blank" rel="noreferrer">
            Agendar consulta
            <WhatsAppIcon size={16} />
          </a>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroAmbient} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span />
            Dermatologia clínica em Manaus
          </p>
          <h1 id="hero-title">
            Sua pele merece um cuidado guiado pela ciência
            <em> e conduzido com responsabilidade.</em>
          </h1>
          <p className={styles.heroLead}>
            Atendimento realizado por médica com formação completa para um
            diagnóstico preciso, tratamento individualizado e acompanhamento
            baseado nas melhores evidências científicas.
          </p>

          <div
            className={styles.credentialSpotlight}
            aria-label="Credenciais profissionais da Dra. Angela Carolina Nascimento"
          >
            <ShieldCheck size={25} aria-hidden="true" />
            <div>
              <span>Registro médico</span>
              <strong>CRM-AM 14020</strong>
            </div>
            <div>
              <span>Especialista em Dermatologia</span>
              <strong>RQE 6467</strong>
            </div>
          </div>
          <p className={styles.credentialNote}>
            RQE é o Registro de Qualificação de Especialista em Dermatologia.
          </p>

          <div className={styles.heroActions}>
            <a
              className={styles.primaryButton}
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Agendar uma consulta
              <ArrowRight size={17} />
            </a>
            <a className={styles.textButton} href="#atendimento">
              Conhecer o atendimento
              <ArrowDown size={15} />
            </a>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroFrame}>
            <Image
              src="/images/draangeladermato/dra-angela-hero-conceitual.png"
              alt="Retrato conceitual da Dra. Angela Carolina Nascimento em ambiente clínico"
              fill
              priority
              sizes="(min-width: 960px) 48vw, 100vw"
              quality={90}
            />
          </div>
          <p className={styles.conceptNote}>Imagem conceitual para direção de arte</p>
        </div>

        <div className={styles.scrollCue} aria-hidden="true">
          <span>Role para descobrir</span>
          <ArrowDown size={14} />
        </div>
      </section>

      <section className={styles.trustStrip} aria-label="Diferenciais do atendimento">
        <div>
          <Stethoscope />
          <span>
            Atendimento
            <strong>adulto e infantil</strong>
          </span>
        </div>
        <div>
          <ScanSearch />
          <span>
            Avaliação
            <strong>cuidadosa e completa</strong>
          </span>
        </div>
        <div>
          <Microscope />
          <span>
            Condutas baseadas
            <strong>em evidências científicas</strong>
          </span>
        </div>
        <div>
          <ShieldCheck />
          <span>
            Decisões com
            <strong>ética e transparência</strong>
          </span>
        </div>
      </section>

      <section className={styles.approach} id="atendimento">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrowDark}>Por que escolher meu atendimento?</p>
          <h2>O diagnóstico começa antes do primeiro tratamento.</h2>
        </div>

        <div className={styles.approachContent}>
          <p className={styles.approachLead}>
            Uma investigação cuidadosa é o primeiro passo para um tratamento
            eficaz. Aqui, cada paciente é ouvido com atenção, porque compreender
            sua história também faz parte do diagnóstico.
          </p>
          <p>
            Cada indicação é fundamentada em evidências científicas e feita com
            responsabilidade, respeitando as necessidades de adultos e crianças.
            O cuidado não segue fórmulas prontas: ele é construído a partir de
            uma avaliação completa e de objetivos possíveis para cada pessoa.
          </p>
        </div>

        <div className={styles.principles}>
          <article>
            <span>01</span>
            <ScanSearch size={23} />
            <h3>Escuta que investiga</h3>
            <p>Sua história, seus sintomas e sua rotina orientam uma avaliação mais precisa.</p>
          </article>
          <article>
            <span>02</span>
            <Microscope size={23} />
            <h3>Ciência que orienta</h3>
            <p>Tratamentos atualizados e fundamentados nas melhores evidências disponíveis.</p>
          </article>
          <article>
            <span>03</span>
            <ShieldCheck size={23} />
            <h3>Responsabilidade que acompanha</h3>
            <p>Um plano individualizado, transparente e acompanhado ao longo do tratamento.</p>
          </article>
        </div>
      </section>

      <section className={styles.conditions} id="quando-procurar">
        <div className={styles.conditionsHeading}>
          <div>
            <p className={styles.eyebrowLight}>Quando procurar um dermatologista?</p>
            <h2>Para cuidar da saúde da pele em todas as fases da vida.</h2>
          </div>
          <p>
            A dermatologia vai além do que é visível. Alterações na pele, nos
            cabelos e nas unhas podem sinalizar condições que merecem avaliação
            especializada.
          </p>
        </div>

        <div className={styles.conditionsGrid}>
          {careGroups.map((item) => (
            <article key={item.number}>
              <div className={styles.cardTop}>
                <span>{item.number}</span>
                <ArrowRight size={18} />
              </div>
              <p>{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <div className={styles.cardLine} />
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.evaluationBand}>
          <Sparkles size={23} />
          <div>
            <strong>Avaliação dermatológica completa</strong>
            <span>
              Pele, cabelos e unhas de adultos e crianças, com o cuidado que
              cada fase da vida pede.
            </span>
          </div>
          <a href={whatsapp} target="_blank" rel="noreferrer">
            Conversar com a equipe
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className={styles.about} id="sobre">
        <div className={styles.aboutVisual}>
          <div className={styles.aboutQuote}>
            <span className={styles.quoteMark}>“</span>
            <p>
              Mais do que tratar doenças da pele, meu propósito é cuidar de
              pessoas.
            </p>
          </div>
          <div className={styles.aboutMonogram} aria-hidden="true">
            AC
          </div>
        </div>

        <div className={styles.aboutCopy}>
          <p className={styles.eyebrowDark}>Sobre a médica</p>
          <h2>Dra. Angela Carolina Nascimento</h2>
          <p className={styles.aboutLead}>
            Acredito que cuidar da pele começa pelo diagnóstico correto.
          </p>
          <p>
            Antes de qualquer tratamento, existe uma pessoa para ser ouvida, uma
            pele para ser examinada com atenção e decisões que devem ser guiadas
            pela ciência. Foi essa convicção que me levou a escolher a
            Dermatologia e orienta cada atendimento que realizo.
          </p>
          <p>
            Sou médica formada pela Universidade José do Rosário Vellano
            (UNIFENAS) desde 2009 e especialista em Dermatologia pelo Hospital
            Central do Exército.
          </p>
          <p>
            Como Capitã Médica do Exército Brasileiro, fui transferida para
            Manaus em 2025. Foi aqui que me senti acolhida e confiante para
            concretizar um antigo sonho: abrir meu consultório e oferecer um
            atendimento pautado na ética, no respeito e na medicina baseada em
            evidências.
          </p>

          <div
            className={styles.formationGrid}
            aria-label="Formação e registros profissionais"
          >
            <article>
              <Stethoscope size={20} aria-hidden="true" />
              <span>Formação médica</span>
              <strong>Medicina — UNIFENAS</strong>
              <small>Graduação concluída em 2009</small>
            </article>
            <article>
              <Microscope size={20} aria-hidden="true" />
              <span>Especialização</span>
              <strong>Dermatologia — HCE</strong>
              <small>Residência/Especialização em Dermatologia</small>
            </article>
            <article>
              <ShieldCheck size={20} aria-hidden="true" />
              <span>Registros profissionais</span>
              <strong>CRM-AM 14020</strong>
              <small>RQE 6467 · Dermatologia</small>
            </article>
          </div>

          <p className={styles.signature}>
            “O sucesso do tratamento começa com a confiança em quem cuida de você.”
          </p>
        </div>
      </section>

      <section className={styles.finalCta} id="contato">
        <div className={styles.finalOrnament} aria-hidden="true">
          AC
        </div>
        <div className={styles.finalContent}>
          <p className={styles.eyebrowLight}>Sua saúde merece atenção</p>
          <h2>Um cuidado preciso começa com uma avaliação cuidadosa.</h2>
          <p>
            Agende sua consulta e dê o primeiro passo para compreender as
            necessidades da sua pele, dos seus cabelos ou das suas unhas.
          </p>
          <a
            className={styles.finalButton}
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={18} />
            Agendar pelo WhatsApp
          </a>
        </div>

        <div className={styles.contactCard}>
          <span>Atendimento em Manaus</span>
          <strong>Ed. The Office</strong>
          <p>
            Av. Mário Ypiranga, 315
            <br />
            5º andar, sala 521 · Adrianópolis
          </p>
          <div className={styles.contactLine} />
          <a
            href="https://www.instagram.com/angelac.dermato/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={16} />
            @angelac.dermato
          </a>
        </div>
      </section>

      <footer className={styles.footer} id="rodape">
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <Brand light />
            <p>Dermatologia clínica, cirúrgica e estética em Manaus.</p>
          </div>

          <div className={styles.footerCredentials}>
            <span className={styles.footerEyebrow}>Credenciais profissionais</span>
            <div className={styles.footerCredentialRow}>
              <ShieldCheck size={17} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <small>Registro médico</small>
                <strong>CRM-AM 14020</strong>
              </div>
            </div>
            <div className={styles.footerCredentialRow}>
              <ShieldCheck size={17} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <small>Especialista em Dermatologia</small>
                <strong>RQE 6467</strong>
              </div>
            </div>
          </div>

          <div className={styles.footerContact}>
            <span className={styles.footerEyebrow}>Agende sua avaliação</span>
            <a
              className={styles.footerWhatsapp}
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={18} />
              Agendar consulta
            </a>
            <a
              className={styles.footerInstagram}
              href="https://www.instagram.com/angelac.dermato/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={15} strokeWidth={1.6} />
              @angelac.dermato
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2026 Dra. Angela Carolina Nascimento</span>
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
        className={`${styles.floatingWhatsapp} ${
          footerVisible ? styles.floatingWhatsappHidden : ""
        }`}
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar consulta pelo WhatsApp"
      >
        <WhatsAppIcon size={24} />
      </a>
    </main>
  );
}
