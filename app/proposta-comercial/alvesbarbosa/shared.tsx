"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Scale,
  X,
} from "lucide-react";

/**
 * Shared constants, data and building-block components for the three
 * Alves Barbosa Sociedade de Advogados preview pages:
 *   /proposta-comercial/alvesbarbosa               (hub)
 *   /proposta-comercial/alvesbarbosa/pessoa-fisica
 *   /proposta-comercial/alvesbarbosa/pessoa-juridica
 *
 * Contact data below is REAL, extracted directly from the official site's
 * own WhatsApp Business widget configuration and public pages — no
 * placeholders. Street address is genuinely absent from the source and is
 * intentionally omitted rather than invented.
 */

export const WA_NUMBER = "5511942476351";
export const WA_PHONE_DISPLAY = "(11) 4247.6351";
export const EMAIL = "contato@alvesbarbosa.adv.br";
export const OFFICIAL = "http://alvesbarbosa.adv.br/";

export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT_MESSAGE = "Olá! Vim pelo site e gostaria de uma orientação jurídica.";
export const WA = waLink(WA_DEFAULT_MESSAGE);

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/company/alvesbarbosaadvogados",
  instagram: "https://www.instagram.com/alvesbarbosaadvogados/",
  facebook: "https://www.facebook.com/alvesbarbosaadvogados",
};

export const IMG = {
  logo: "/images/alvesbarbosa/logo-full.png",
  logoWhite: "/images/alvesbarbosa/logo-white.png",
  logoSmall: "/images/alvesbarbosa/alvesbarbosa-logo.png",
  office: "/images/alvesbarbosa/ab03.jpg",
  team: "/images/alvesbarbosa/team.png",
  family: "/images/alvesbarbosa/family.png",
  headhunting: "/images/alvesbarbosa/headhunting.png",
  shoppingCart: "/images/alvesbarbosa/shopping-cart.png",
  startup: "/images/alvesbarbosa/startup.png",
  civilRight: "/images/alvesbarbosa/civil-right.png",
};

export const REGIONS = ["Barueri", "Alphaville", "Santana de Parnaíba", "Tamboré", "Carapicuíba"];

export const ABOUT_PARAGRAPH =
  "O escritório ALVES BARBOSA SOCIEDADE DE ADVOGADOS, sediado em Alphaville, nasceu para dar assessoria jurídica completa para todo tipo de empresa e tem por objetivo obter soluções jurídicas, atuando em todo território nacional, nas divisões não contenciosa e contenciosa, para pessoas jurídicas e pessoas físicas. O objetivo principal é ajudar as empresas a resolverem aqueles problemas diários, com consumidores, funcionários, fisco, parceiros, fornecedores, enfim, a advocacia do dia-a-dia de qualquer empresa. O foco é voltado inteiramente para resolver de forma direta e eficiente os vários problemas do cliente, por isso contamos profissionais de alto nível técnico para resolver, rápida e efetivamente, os assuntos inerentes à atividade que se propõe, atuando de forma consultiva e contenciosa nas áreas trabalhista, civil, tributária, administrativa, comercial, bancária, consumidor, condominial, imobiliária, ambiental, entretenimento, família e sucessões.";

export const MISSAO =
  "Harmonizar as relações com nossos clientes com determinação e confiança, exteriorizando assim, a realização de um atendimento jurídico de excelência.";
export const VISAO =
  "Ser um escritório de consultoria jurídica que respeita e busca a constante satisfação dos clientes e superação em seus trabalhos realizados.";
export const VALORES = [
  "Ética",
  "Compromisso com os clientes",
  "Ousadia nas ações propostas",
  "Respeito ao meio ambiente",
  "Perseverança",
];

export const TEAM = [
  {
    name: "Marco Aurélio Alves Barbosa",
    role: "Sócio",
    bio: "Formado na Faculdade de Direito da Universidade Mackenzie em 1989. Especialista em Direito Empresarial pela Universidade Mackenzie em 1995, Especialização em Direito Bancário pela FGV Law em 2005, Pós Graduação em Direito Processual Civil no Centro de Extensão Universitário em 1992, Especialização em Direito Imobiliário pela FMU em 2001, Pós Graduação em Direito do Trabalho e Processual do Trabalho pela Escola Paulista de Direito em 2010.",
  },
  {
    name: "Guilherme Rodrigues Barbosa",
    role: "Sócio",
    bio: "Formado na Faculdade de Direito da FMU em 2016. Pós Graduação em Direito Empresarial na Escola Paulista de Direito. Pós Graduação em Direito e Processo do Trabalho na PUC.",
  },
  {
    name: "Marlene Munhóes dos Santos",
    role: "Consultora",
    bio: "Formada na Faculdade de Direito de São Bernardo do Campo em 1970. Atua na área civil e processual civil do contencioso desde 1972, possui diversos cursos de atualização na área do direito civil.",
  },
  {
    name: "Lucci Faccioli",
    role: "Consultora",
    bio: "Especialista em direito previdenciário.",
  },
  {
    name: "Patricia Munhoz Mazza",
    role: "Consultora",
    bio: "Formado na Faculdade de Direito de Guarulhos em 1995. Especialista em Direito do Trabalho.",
  },
];

export type AudienceKey = "home" | "pf" | "pj";

export const AUDIENCE_LINKS: { key: AudienceKey; href: string; label: string; short: string }[] = [
  { key: "home", href: "/proposta-comercial/alvesbarbosa", label: "Início", short: "Início" },
  { key: "pf", href: "/proposta-comercial/alvesbarbosa/pessoa-fisica", label: "Pessoa Física", short: "P. Física" },
  { key: "pj", href: "/proposta-comercial/alvesbarbosa/pessoa-juridica", label: "Pessoa Jurídica", short: "P. Jurídica" },
];

export function WaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}

export function SectionDivider({ icon: Icon = Scale }: { icon?: typeof Scale }) {
  return (
    <div className="ab-divider" aria-hidden="true">
      <span>
        <Icon size={17} strokeWidth={1.7} />
      </span>
    </div>
  );
}

/** Reveal-on-scroll + reduced-motion setup, shared by every page's root effect. */
export function useRevealOnScroll() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".ab-page");
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".ab-page > section:not(.ab-hero)"));

    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    page.classList.add("ab-motion-ready");
    sections.forEach((section) => section.classList.add("ab-reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      page.classList.remove("ab-motion-ready");
      sections.forEach((section) => section.classList.remove("ab-reveal", "is-visible"));
    };
  }, []);
}

export function PreviewBar() {
  return (
    <div className="ab-preview-bar" role="note" aria-label="Aviso de proposta">
      <Link className="ab-preview-back" href="/proposta-comercial" aria-label="Voltar para propostas comerciais">
        <ArrowLeft size={16} aria-hidden="true" />
        <span>Voltar</span>
      </Link>
      <div className="ab-preview-line">
        <span className="ab-preview-dot" aria-hidden="true" />
        Prévia Conceitual
      </div>
      <span className="ab-preview-sub">
        Proposta elaborada pela{" "}
        <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
          LumaSites.com.br
        </a>
      </span>
      <a className="ab-preview-site" href={OFFICIAL} target="_blank" rel="noopener noreferrer">
        <span>Site oficial</span>
        <ExternalLink size={13} aria-hidden="true" />
      </a>
    </div>
  );
}

export function SiteHeader({
  active,
  sectionNav,
}: {
  active: AudienceKey;
  /** in-page anchor links specific to the current page, e.g. "#atuacao" */
  sectionNav: { href: string; label: string }[];
}) {
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
      <header className="ab-header">
        <div className="ab-wrap ab-nav">
          <Link href="/proposta-comercial/alvesbarbosa" className="ab-brand" aria-label="Alves Barbosa Advogados — início">
            <span className="ab-brand-mark">
              <Image src={IMG.logo} alt="" width={700} height={126} priority />
            </span>
          </Link>

          <nav aria-label="Navegação principal" className="ab-desktop-nav">
            {sectionNav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <span className="ab-nav-sep" aria-hidden="true" />
            {AUDIENCE_LINKS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`ab-audience-link${active === item.key ? " is-active" : ""}`}
                aria-current={active === item.key ? "page" : undefined}
              >
                {item.short}
              </Link>
            ))}
          </nav>

          <a className="ab-nav-cta" href={WA} target="_blank" rel="noopener noreferrer">
            <WaIcon /> Falar com advogado
          </a>

          <button
            ref={menuButtonRef}
            className="ab-menu-button"
            type="button"
            aria-label="Abrir menu"
            aria-controls="ab-mobile-drawer"
            aria-expanded={menuOpen}
            aria-haspopup="dialog"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </header>

      <button
        className={`ab-menu-overlay${menuOpen ? " is-open" : ""}`}
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      <aside
        ref={drawerRef}
        id="ab-mobile-drawer"
        className={`ab-mobile-drawer${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!menuOpen}
      >
        <div className="ab-drawer-head">
          <div>
            <span>Menu</span>
            <small>Alves Barbosa Advogados</small>
          </div>
          <button ref={closeButtonRef} type="button" aria-label="Fechar menu" onClick={() => setMenuOpen(false)}>
            <X size={21} aria-hidden="true" />
          </button>
        </div>

        <nav className="ab-drawer-nav" aria-label="Navegação mobile">
          {sectionNav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span>{item.label}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          ))}
          <p className="ab-drawer-caption">Escolha seu perfil</p>
          {AUDIENCE_LINKS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={active === item.key ? "is-active" : ""}
              aria-current={active === item.key ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              <span>{item.label}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          ))}
          <a className="ab-drawer-cta" href={WA} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
            <WaIcon /> Falar com advogado
          </a>
        </nav>
      </aside>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="ab-footer">
      <div className="ab-wrap ab-footer-grid">
        <div className="ab-footer-top">
          <div className="ab-footer-brand">
            <Image src={IMG.logo} alt="Alves Barbosa Sociedade de Advogados" width={700} height={126} />
            <div>
              <strong>Alves Barbosa Sociedade de Advogados</strong>
              <span>Assessoria jurídica completa para pessoas físicas e empresas</span>
            </div>
          </div>
          <div className="ab-footer-links" aria-label="Navegação">
            <strong>Navegação</strong>
            {AUDIENCE_LINKS.map((item) => (
              <Link key={item.key} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="ab-footer-links" aria-label="Contato">
            <strong>Contato</strong>
            <a href={WA} target="_blank" rel="noopener noreferrer">
              WhatsApp {WA_PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span>Barueri, Alphaville, Santana de Parnaíba, Tamboré e Carapicuíba</span>
          </div>
          <div className="ab-footer-links" aria-label="Redes sociais">
            <strong>Redes sociais</strong>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>

        <div className="ab-footer-legal" aria-labelledby="avisos-legais-title">
          <h2 id="avisos-legais-title">Avisos legais</h2>
          <div className="ab-footer-legal-grid">
            <p>As informações deste site têm caráter informativo e não substituem a análise individual do caso por advogado.</p>
            <p>
              Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais.
              Somos uma sociedade de advocacia, que oferece serviços jurídicos, privativos de advogados, de acordo com a
              legislação vigente e o Código de Ética e Disciplina da OAB do Brasil.
            </p>
          </div>
        </div>

        <p className="ab-footer-credit">
          <span>
            © {new Date().getFullYear()} Alves Barbosa Sociedade de Advogados · todos os direitos reservados · Prévia
            conceitual criada por
          </span>
          <Link href="/" aria-label="Luma Sites">
            Luma Sites
          </Link>
        </p>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a className="ab-floating-wa" href={WA} target="_blank" rel="noopener noreferrer" aria-label="Falar com advogado no WhatsApp">
      <WaIcon size={21} />
    </a>
  );
}

export function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const id = `faq-${index}`;

  return (
    <div className="ab-faq-item">
      <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen((v) => !v)}>
        <span>{q}</span>
        <ChevronDown size={20} aria-hidden="true" />
      </button>
      <div id={id} className={`ab-faq-answer${open ? " is-open" : ""}`}>
        <div>
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Full-bleed autoplay background-video hero, mirroring the real
 * alvesbarbosa.adv.br /pessoafisica/ and /pessoajuridica/ pages.
 *
 * Performance / accessibility rules (non-negotiable):
 * - `preload="none"` on the <video>, and it only receives a `src` (and thus
 *   starts loading/playing) once the hero has scrolled into view, via
 *   IntersectionObserver — it never blocks first paint.
 * - `prefers-reduced-motion: reduce` disables the video entirely; only the
 *   static `poster` image is shown, no motion at all.
 */
export function VideoHero({
  videoSrc,
  poster,
  kicker,
  title,
  lead,
  children,
}: {
  videoSrc: string;
  poster: string;
  kicker: string;
  title: React.ReactNode;
  lead: string;
  children?: React.ReactNode;
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const handleChange = () => setReducedMotion(media.matches);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const node = heroRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldPlay(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  useEffect(() => {
    if (!shouldPlay || reducedMotion) return;
    const video = videoRef.current;
    if (!video) return;
    // Only now does the browser fetch the media — `preload="none"` above
    // prevents any network activity before this point.
    video.src = videoSrc;
    video.load();
    video.play().catch(() => {
      /* autoplay can be blocked by the browser; poster remains visible */
    });
  }, [shouldPlay, reducedMotion, videoSrc]);

  return (
    <div ref={heroRef} className="ab-video-hero">
      <div className="ab-video-hero-media" aria-hidden="true">
        {!reducedMotion && (
          <video
            ref={videoRef}
            className="ab-video-hero-video"
            muted
            loop
            playsInline
            autoPlay
            preload="none"
            poster={poster}
          />
        )}
        <img className="ab-video-hero-poster" src={poster} alt="" style={reducedMotion ? undefined : { opacity: shouldPlay ? 0 : 1 }} />
        <div className="ab-video-hero-overlay" />
      </div>

      <div className="ab-wrap ab-video-hero-content">
        <p className="ab-kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="ab-video-hero-lead">{lead}</p>
        {children}
      </div>
    </div>
  );
}

export function ContactList() {
  return (
    <ul className="ab-contact-list">
      <li>
        <WaIcon size={18} />
        <span>
          WhatsApp {WA_PHONE_DISPLAY} — atendimento inicial rápido, sem formalidade.
        </span>
      </li>
      <li>
        <Mail size={18} aria-hidden="true" />
        <span>{EMAIL}</span>
      </li>
      <li>
        <MapPin size={18} aria-hidden="true" />
        <span>Atendimento em Barueri, Alphaville, Santana de Parnaíba, Tamboré e Carapicuíba — endereço sob consulta.</span>
      </li>
    </ul>
  );
}

export function SocialLinks() {
  return (
    <div className="ab-social" aria-label="Redes sociais">
      <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Linkedin size={18} aria-hidden="true" />
      </a>
      <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Instagram size={18} aria-hidden="true" />
      </a>
      <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <Facebook size={18} aria-hidden="true" />
      </a>
    </div>
  );
}
