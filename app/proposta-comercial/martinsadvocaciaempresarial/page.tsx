"use client";

import {
  ArrowDown,
  ArrowRight,
  Banknote,
  Building2,
  ChevronRight,
  FileText,
  Gavel,
  Handshake,
  Instagram,
  Landmark,
  Lock,
  MapPin,
  Menu,
  Scale,
  ShieldCheck,
  TrendingDown,
  Wheat,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./style.module.css";

const INSTAGRAM_URL = "https://www.instagram.com/martins.advocaciaempresarial/";
const WHATSAPP_NUMBER = "5562994054264";
const WHATSAPP_MESSAGE =
  "Olá! Gostaria de falar com o escritório Martins Advocacia Empresarial.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Martins Advocacia Empresarial",
  url: "https://lumasites.com.br/proposta-comercial/martinsadvocaciaempresarial",
  areaServed: {
    "@type": "City",
    name: "Posse",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Posse",
    addressRegion: "GO",
    addressCountry: "BR",
  },
  founder: {
    "@type": "Person",
    name: "Paulo Martins",
    jobTitle: "Advogado",
  },
  identifier: {
    "@type": "PropertyValue",
    name: "OAB/GO",
    value: "46.315",
  },
  knowsAbout: [
    "Revisão de contratos bancários empresariais",
    "Renegociação de dívidas empresariais",
    "Proteção patrimonial de empresas",
    "Direito do agronegócio",
  ],
};

const nav = [
  ["Serviços", "#servicos"],
  ["Resultados", "#resultados"],
  ["Sobre", "#sobre"],
  ["Contato", "#contato"],
];

const services = [
  {
    number: "01",
    icon: Banknote,
    eyebrow: "Dívida bancária",
    title: "Revisão de contratos e redução de juros abusivos",
    text: "Análise técnica de capital de giro, PRONAMPE, conta garantida e financiamentos — identificando cobranças indevidas e oportunidades reais de negociação com o banco.",
  },
  {
    number: "02",
    icon: TrendingDown,
    eyebrow: "Renegociação",
    title: "Reestruturação do passivo empresarial",
    text: "Quando a primeira proposta do banco não é a única opção: renegociação estratégica para reduzir parcelas que não cabem mais no caixa da empresa.",
  },
  {
    number: "03",
    icon: Lock,
    eyebrow: "Bloqueios indevidos",
    title: "Desbloqueio de contas e bens penhorados",
    text: "Atuação em medidas judiciais que travam o caixa da empresa indevidamente, com foco em liberar a operação o quanto antes.",
  },
  {
    number: "04",
    icon: Building2,
    eyebrow: "Patrimônio empresarial",
    title: "Regularização patrimonial de CNPJ",
    text: "Due diligence documental e cartorária antes e depois da aquisição de empresas, evitando surpresas como usucapião e disputas sobre o acervo patrimonial.",
  },
  {
    number: "05",
    icon: Wheat,
    eyebrow: "Agronegócio",
    title: "Dívida e crédito rural",
    text: "Prorrogação e renegociação de dívidas de produtores rurais amparadas por lei, sem necessidade de garantia adicional.",
  },
  {
    number: "06",
    icon: Gavel,
    eyebrow: "Contencioso estratégico",
    title: "Atuação judicial fundamentada",
    text: "Cada medida é baseada em jurisprudência e decisões técnicas — não em promessas, mas em fundamentação jurídica sólida.",
  },
];

function ColumnsMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 12L24 5L40 12"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="6" y1="12" x2="42" y2="12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="12" y1="17" x2="12" y2="36" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="24" y1="17" x2="24" y2="36" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="36" y1="17" x2="36" y2="36" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="6" y1="41" x2="42" y2="41" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

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
      <span className={styles.brandMark}>
        <ColumnsMark size={34} />
      </span>
      <div className={styles.brandText}>
        <strong>Martins</strong>
        <span className={styles.brandSurname}>Advocacia Empresarial</span>
        <span className={styles.brandCredentials}>OAB/GO 46.315</span>
      </div>
    </div>
  );
}

export default function MartinsAdvocaciaPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
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
            <Brand />
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
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            Falar com o escritório
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
            Falar com o escritório
            <WhatsAppIcon size={16} />
          </a>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroAmbient} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>
            <span />
            Advocacia empresarial em Posse, GO
          </p>
          <h1 id="hero-title">
            Sua empresa não precisa enfrentar
            <em> o banco sozinha.</em>
          </h1>
          <p className={styles.heroLead}>
            Revisão de contratos, redução de juros abusivos e proteção do
            patrimônio da sua empresa — com fundamentação jurídica sólida, não
            com promessas.
          </p>

          <div
            className={styles.credentialSpotlight}
            aria-label="Credenciais profissionais do Dr. Paulo Martins"
          >
            <ShieldCheck size={25} aria-hidden="true" />
            <div>
              <span>Registro profissional</span>
              <strong>OAB/GO 46.315</strong>
            </div>
            <div>
              <span>Atuação</span>
              <strong>Direito empresarial e bancário</strong>
            </div>
          </div>

          <div className={styles.heroActions}>
            <a
              className={styles.primaryButton}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Falar com o escritório
              <ArrowRight size={17} />
            </a>
            <a className={styles.textButton} href="#servicos">
              Conhecer as áreas de atuação
              <ArrowDown size={15} />
            </a>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroPanel}>
            <Image
              src="/images/martinsadvocaciaempresarial/paulo-martins-about.png"
              alt="Dr. Paulo Martins, advogado responsável pela Martins Advocacia Empresarial, trabalhando no escritório"
              fill
              priority
              sizes="(min-width: 960px) 44vw, 90vw"
              quality={90}
            />
          </div>
          <div className={styles.heroSeal}>
            <ShieldCheck size={18} />
            <span>
              Fundamentado em
              <strong>jurisprudência e dados reais</strong>
            </span>
          </div>
          <p className={styles.conceptNote}>
            Foto real do escritório — cliente pode enviar versão em alta
            resolução
          </p>
        </div>

        <div className={styles.scrollCue} aria-hidden="true">
          <span>Role para descobrir</span>
          <ArrowDown size={14} />
        </div>
      </section>

      <section className={styles.trustStrip} aria-label="Diferenciais do escritório">
        <div>
          <FileText />
          <span>
            Revisão técnica
            <strong>de contratos bancários</strong>
          </span>
        </div>
        <div>
          <TrendingDown />
          <span>
            Redução de
            <strong>juros abusivos</strong>
          </span>
        </div>
        <div>
          <ShieldCheck />
          <span>
            Proteção
            <strong>do patrimônio empresarial</strong>
          </span>
        </div>
        <div>
          <Handshake />
          <span>
            Atendimento
            <strong>presencial e online</strong>
          </span>
        </div>
      </section>

      <section className={styles.approach} id="servicos">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrowDark}>Áreas de atuação</p>
          <h2>Soluções jurídicas para cada momento do seu negócio.</h2>
          <p className={styles.approachLead}>
            No mundo empresarial, cada decisão conta e cada detalhe importa.
            Enfrentar desafios jurídicos pode ser complexo — você não precisa
            fazer isso sozinho.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.number}>
                <div className={styles.cardTop}>
                  <span>{item.number}</span>
                  <Icon size={20} />
                </div>
                <p>{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <div className={styles.cardLine} />
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.results} id="resultados">
        <div className={styles.resultsHeading}>
          <p className={styles.eyebrowLight}>Resultados divulgados pelo escritório</p>
          <h2>Números que sustentam a atuação técnica.</h2>
        </div>

        <div className={styles.resultsGrid}>
          <article>
            <Landmark size={26} aria-hidden="true" />
            <strong>+ R$ 1 milhão</strong>
            <span>em redução de dívidas bancárias empresariais</span>
          </article>
          <article>
            <ShieldCheck size={26} aria-hidden="true" />
            <strong>+ R$ 1 bilhão</strong>
            <span>em patrimônio protegido de clientes</span>
          </article>
          <article>
            <Scale size={26} aria-hidden="true" />
            <strong>OAB/GO 46.315</strong>
            <span>atuação registrada e fundamentada</span>
          </article>
        </div>
        <p className={styles.resultsNote}>
          Números divulgados publicamente pelo escritório em seu perfil
          profissional — a serem documentados e referenciados na versão final,
          em conformidade com as normas de publicidade da OAB.
        </p>
      </section>

      <section className={styles.about} id="sobre">
        <div className={styles.aboutVisual}>
          <div className={styles.aboutQuote}>
            <span className={styles.quoteMark}>&ldquo;</span>
            <p>
              Disciplina para fazer o que precisa ser feito, coragem para
              ajustar o que não deu certo, tranquilidade para pensar sempre no
              próximo passo — e, acima de tudo, confiança em Deus.
            </p>
          </div>
          <div className={styles.aboutMonogram} aria-hidden="true">
            <ColumnsMark size={56} />
          </div>
          <p className={styles.aboutPhotoNote}>
            Foto real do escritório — cliente pode enviar versão em alta
            resolução
          </p>
        </div>

        <div className={styles.aboutCopy}>
          <p className={styles.eyebrowDark}>Sobre o escritório</p>
          <h2>Dr. Paulo Martins</h2>
          <p className={styles.aboutLead}>
            Advocacia empresarial construída para proteger quem constrói
            negócios.
          </p>
          <p>
            À frente da Martins Advocacia Empresarial, o Dr. Paulo Martins
            construiu um escritório voltado a um problema concreto e pouco
            resolvido: empresários que pagam mais do que deveriam aos bancos
            porque nunca questionaram um contrato.
          </p>
          <p>
            Com sede em Posse, Goiás, o escritório atua na revisão técnica de
            contratos bancários, na negociação de dívidas empresariais e na
            proteção patrimonial de empresas — incluindo produtores rurais da
            região, que enfrentam desafios próprios de crédito e dívida rural.
          </p>

          <div
            className={styles.formationGrid}
            aria-label="Registros profissionais e atuação"
          >
            <article>
              <Scale size={20} aria-hidden="true" />
              <span>Registro profissional</span>
              <strong>OAB/GO 46.315</strong>
              <small>Advocacia empresarial e bancária</small>
            </article>
            <article>
              <Building2 size={20} aria-hidden="true" />
              <span>Sede</span>
              <strong>Posse, Goiás</strong>
              <small>Atendimento presencial e online</small>
            </article>
            <article>
              <Wheat size={20} aria-hidden="true" />
              <span>Atuação estendida</span>
              <strong>Agronegócio</strong>
              <small>Crédito e dívida rural</small>
            </article>
          </div>

          <p className={styles.signature}>
            &ldquo;Contrato bancário não é sentença.&rdquo;
          </p>
        </div>
      </section>

      <section className={styles.location} id="localizacao">
        <div className={styles.locationCopy}>
          <p className={styles.eyebrowDark}>Onde atendemos</p>
          <h2>Presencial em Posse-GO, e online para todo o Brasil.</h2>
          <p>
            Atendimento presencial no escritório em Posse, Goiás, com
            possibilidade de consultas e acompanhamento processual à
            distância para clientes de outras regiões.
          </p>
          <div className={styles.locationBadges}>
            <span>
              <MapPin size={16} /> Posse, GO — presencial
            </span>
            <span>
              <Handshake size={16} /> Todo o Brasil — online
            </span>
          </div>
        </div>
        <div className={styles.mapFrame}>
          <iframe
            title="Localização aproximada — Posse, Goiás"
            src="https://www.google.com/maps?q=Posse,+Goi%C3%A1s&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className={styles.mapNote}>
            Localização aproximada — endereço exato a confirmar com o
            escritório.
          </p>
        </div>
      </section>

      <section className={styles.finalCta} id="contato">
        <div className={styles.finalOrnament} aria-hidden="true">
          <ColumnsMark size={72} />
        </div>
        <div className={styles.finalContent}>
          <p className={styles.eyebrowLight}>Proteja seu negócio</p>
          <h2>O primeiro passo é entender o que o seu contrato realmente diz.</h2>
          <p>
            Fale com o escritório e descubra se há espaço para renegociar sua
            dívida ou proteger o patrimônio da sua empresa.
          </p>
          <a
            className={styles.finalButton}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={18} />
            Falar pelo WhatsApp
          </a>
        </div>

        <div className={styles.contactCard}>
          <span>Atendimento</span>
          <strong>Posse, GO</strong>
          <p>
            Atendimento presencial e online
            <br />
            para empresários e produtores rurais
          </p>
          <div className={styles.contactLine} />
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Instagram size={16} />
            @martins.advocaciaempresarial
          </a>
        </div>
      </section>

      <footer className={styles.footer} id="rodape">
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <Brand light />
            <p>Advocacia empresarial e bancária em Posse, Goiás.</p>
          </div>

          <div className={styles.footerCredentials}>
            <span className={styles.footerEyebrow}>Registro profissional</span>
            <div className={styles.footerCredentialRow}>
              <ShieldCheck size={17} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <small>Advogado responsável</small>
                <strong>Dr. Paulo Martins</strong>
              </div>
            </div>
            <div className={styles.footerCredentialRow}>
              <ShieldCheck size={17} strokeWidth={1.6} aria-hidden="true" />
              <div>
                <small>Inscrição</small>
                <strong>OAB/GO 46.315</strong>
              </div>
            </div>
          </div>

          <div className={styles.footerContact}>
            <span className={styles.footerEyebrow}>Fale com o escritório</span>
            <a
              className={styles.footerWhatsapp}
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={18} />
              Enviar mensagem
            </a>
            <a
              className={styles.footerInstagram}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={15} strokeWidth={1.6} />
              @martins.advocaciaempresarial
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© 2026 Martins Advocacia Empresarial</span>
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
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com o escritório pelo WhatsApp"
      >
        <WhatsAppIcon size={24} />
      </a>
    </main>
  );
}
