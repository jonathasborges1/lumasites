"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Building2,
  Check,
  Clock,
  ExternalLink,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Plus,
  Video,
  X,
} from "lucide-react";
import styles from "./style.module.css";

export const base = "/proposta-comercial/amandamonteiro";
export const assets = "/amandamonteiro";

const whatsappNumber = "5592992214912";
export const waPaciente = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Olá! Vim pelo site e gostaria de informações sobre o atendimento."
)}`;
export const waEmpresa = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Olá! Vim pelo site e gostaria de uma proposta para minha empresa."
)}`;
export const instagramUrl = "https://instagram.com/amandamonteiro.psico";
export const email = "psicoamandamonteiro@gmail.com";
export const endereco =
  "Harmony Saúde Integral, Torre Soho, Britânia Park Offices, Ponta Negra, Manaus/AM";
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  "Harmony Saúde Integral, Torre Soho, Ponta Negra, Manaus"
)}&z=15&hl=pt-BR&output=embed`;

export const mapsRouteUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  "Harmony Saúde Integral, Torre Soho, Ponta Negra, Manaus"
)}`;

export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.79a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26A9.89 9.89 0 0 1 12.06 2c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.89 9.89M20.47 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 0 0-3.47-8.41" />
    </svg>
  );
}

/** Monograma AM com o semi-arco e os dois pontos (aproximação do símbolo do manual). */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 104" aria-hidden="true" fill="none">
      <path
        d="M16 66 A46 46 0 0 1 100 30"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="14" cy="70" r="3.6" fill="currentColor" />
      <circle cx="106" cy="33" r="2.2" fill="currentColor" />
      <text
        x="60"
        y="86"
        textAnchor="middle"
        fontFamily="var(--font-am-display), serif"
        fontSize="58"
        fontWeight="500"
        fill="currentColor"
      >
        AM
      </text>
    </svg>
  );
}

/** Semi-arco isolado, usado como moldura e divisor. */
export function Arc({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" aria-hidden="true" fill="none" preserveAspectRatio="xMidYMid meet">
      <path d="M40 330 A180 180 0 1 1 350 110" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="332" r="10" fill="currentColor" />
      <circle cx="356" cy="118" r="6" fill="currentColor" />
    </svg>
  );
}

export function useReveal() {
  useEffect(() => {
    const root = document.getElementById("inicio");
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-am-reveal]"));
    root?.setAttribute("data-motion-ready", "true");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => el.setAttribute("data-revealed", "true"));
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
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export function PreviewBar() {
  return (
    <div className={styles.previewBar} role="note" aria-label="Aviso de prévia conceitual">
      <Link className={styles.previewBack} href="/proposta-comercial" aria-label="Voltar para propostas comerciais">
        <ArrowLeft size={16} aria-hidden="true" />
        <span>Voltar</span>
      </Link>
      <div className={styles.previewLine}>
        <span className={styles.previewDot} aria-hidden="true" />
        Prévia Conceitual
      </div>
      <span className={styles.previewSub}>
        Proposta elaborada pela{" "}
        <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
          LumaSites.com.br
        </a>
      </span>
    </div>
  );
}

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.topBarInner}>
        <div className={styles.topBarInfo}>
          <a href={waPaciente} target="_blank" rel="noreferrer">WhatsApp (92) 99221-4912</a>
          <a href={`mailto:${email}`} className={styles.hideMobile}>{email}</a>
          <span className={styles.hideMobile}>Ponta Negra, Manaus · Atendimento online para todo o Brasil e exterior</span>
        </div>
        <a href={instagramUrl} target="_blank" rel="noreferrer" className={styles.topBarInsta}>
          <Instagram size={14} /> @amandamonteiro.psico
        </a>
      </div>
    </div>
  );
}

export type NavItem = { href: string; label: string };

export type Audience = "pacientes" | "empresas";

function AudienceSwitch({ current, className = "" }: { current: Audience; className?: string }) {
  const items: { id: Audience; label: string; href: string; Icon: typeof Building2 }[] = [
    { id: "pacientes", label: "Pacientes", href: base, Icon: Heart },
    { id: "empresas", label: "Empresas", href: `${base}/empresas`, Icon: Building2 },
  ];
  return (
    <nav className={`${styles.audience} ${className}`} aria-label="Escolha o seu perfil: cada opção abre uma página diferente">
      {items.map(({ id, label, href, Icon }) => {
        const active = id === current;
        return (
          <a
            key={id}
            href={href}
            className={active ? styles.audienceActive : undefined}
            aria-current={active ? "page" : undefined}
            title={active ? `Você está na página para ${label.toLowerCase()}` : `Ir para a página para ${label.toLowerCase()}`}
          >
            <Icon size={14} aria-hidden="true" />
            {label}
            {!active && <ArrowRight size={13} aria-hidden="true" />}
          </a>
        );
      })}
    </nav>
  );
}

export function SiteHeader({
  nav,
  ctaHref,
  ctaLabel = "Agendar conversa",
  homeHref,
  audience = "pacientes",
}: {
  nav: NavItem[];
  ctaHref: string;
  ctaLabel?: string;
  homeHref: string;
  audience?: Audience;
}) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const touchStartX = useRef<number | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ids = nav.map((item) => item.href).filter((href) => href.startsWith("#")).map((href) => href.slice(1));
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    if (!elements.length) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveId(entry.target.id)),
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [nav]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
      if (e.key !== "Tab" || !drawerRef.current) return;
      const focusable = Array.from(drawerRef.current.querySelectorAll<HTMLElement>('a, button:not([tabindex="-1"])'));
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
      buttonRef.current?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href={homeHref} className={styles.logo} aria-label="Amanda Monteiro Psicologia, início">
            <Monogram className={styles.logoMark} />
            <span className={styles.logoText}>
              Amanda Monteiro
              <small>{audience === "empresas" ? "Psicologia · Empresas" : "Psicologia"}</small>
            </span>
          </a>
          <nav className={styles.nav} aria-label="Navegação principal">
            {nav.map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <AudienceSwitch current={audience} className={styles.audienceHeader} />
          <a className={styles.headerCta} href={ctaHref} target="_blank" rel="noreferrer">
            {ctaLabel}
          </a>
          <button
            ref={buttonRef}
            type="button"
            className={styles.menuToggle}
            aria-label="Abrir menu de navegação"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <div
        ref={drawerRef}
        id="menu-mobile"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navegação"
        aria-hidden={!open}
        inert={!open}
      >
        <button type="button" className={styles.drawerScrim} aria-label="Fechar menu" tabIndex={-1} onClick={() => setOpen(false)} />
        <div
          className={styles.drawerPanel}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current !== null && e.changedTouches[0].clientX - touchStartX.current > 70) setOpen(false);
            touchStartX.current = null;
          }}
        >
          <Monogram className={styles.drawerWatermark} />
          <div className={styles.drawerTop}>
            <a href={homeHref} className={styles.logo} onClick={() => setOpen(false)} aria-label="Amanda Monteiro Psicologia, início">
              <Monogram className={styles.logoMark} />
              <span className={styles.logoText}>
                Amanda Monteiro
                <small>{audience === "empresas" ? "Psicologia · Empresas" : "Psicologia"}</small>
              </span>
            </a>
            <button ref={closeRef} type="button" className={styles.drawerClose} aria-label="Fechar menu" onClick={() => setOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className={styles.drawerBody}>
            <div className={styles.drawerGroup}>
              <span className={styles.drawerLabel}>Escolha a página</span>
              <AudienceSwitch current={audience} className={styles.audienceDrawer} />
            </div>

            <div className={styles.drawerGroup}>
              <span className={styles.drawerLabel}>Nesta página</span>
              <nav className={styles.drawerLinks} aria-label="Seções desta página (mobile)">
                {nav.map((item, i) => {
                  const active = item.href === `#${activeId}`;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      style={{ "--i": i } as React.CSSProperties}
                      aria-current={active ? "location" : undefined}
                      onClick={() => setOpen(false)}
                    >
                      <span className={styles.drawerNum}>{String(i + 1).padStart(2, "0")}</span>
                      <span>{item.label}</span>
                      <ArrowRight size={16} className={styles.drawerArrow} aria-hidden="true" />
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>

          <div className={styles.drawerFoot}>
            <div className={styles.drawerChips}>
              <a href={waPaciente} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon size={18} />
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={`mailto:${email}`} aria-label="E-mail">
                <Mail size={18} />
              </a>
            </div>
            <a className={styles.btnPrimary} href={ctaHref} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
              {ctaLabel}
            </a>
            <p className={styles.drawerCrp}>Psicóloga · CRP 20/14136</p>
          </div>
        </div>
      </div>
    </>
  );
}

export function SectionHead({
  kicker,
  title,
  sub,
  light = false,
  center = true,
}: {
  kicker?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${styles.sectionHead} ${center ? styles.center : ""} ${light ? styles.onDark : ""}`} data-am-reveal>
      {kicker && <span className={styles.kicker}>{kicker}</span>}
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className={styles.faq} data-am-reveal>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ""}`}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <Plus size={20} aria-hidden="true" />
              </button>
            </h3>
            <div id={`faq-${i}`} role="region" className={styles.faqPanel}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function FloatingWhatsApp({ href, label = "Agendar conversa" }: { href: string; label?: string }) {
  return (
    <a className={styles.floatWa} href={href} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp">
      <WhatsAppIcon size={24} />
      <span>{label}</span>
    </a>
  );
}

const privacyHref = `${base}/politica-de-privacidade`;

export function ContactSection({ mode }: { mode: "paciente" | "empresa" }) {
  const [waUrl, setWaUrl] = useState<string | null>(null);
  const isEmpresa = mode === "empresa";

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const lines = [
      isEmpresa
        ? "Olá! Vim pelo site e gostaria de uma proposta para minha empresa."
        : "Olá! Vim pelo site e gostaria de agendar uma conversa.",
      "",
      `*Nome:* ${get("nome")}`,
      isEmpresa && get("empresa") && `*Empresa:* ${get("empresa")}`,
      isEmpresa && get("cargo") && `*Cargo:* ${get("cargo")}`,
      `*E-mail:* ${get("email")}`,
      `*WhatsApp:* ${get("whatsapp")}`,
      !isEmpresa && get("perfil") && `*Sou:* ${get("perfil")}`,
      isEmpresa && get("colaboradores") && `*Nº de colaboradores:* ${get("colaboradores")}`,
      isEmpresa && get("servico") && `*Serviço de interesse:* ${get("servico")}`,
      get("mensagem") && `*Mensagem:* ${get("mensagem")}`,
    ].filter((line): line is string => line !== false);
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
    setWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const waHref = isEmpresa ? waEmpresa : waPaciente;

  return (
    <section className={styles.contactSection} id="contato" aria-label="Contato">
      <div className={styles.footerInner}>
        <div className={styles.contactGrid}>
          <div className={styles.contactIntro} data-am-reveal>
            <span className={styles.kicker}>{isEmpresa ? "Proposta" : "Contato"}</span>
            <h2>{isEmpresa ? "Vamos conversar sobre a sua organização" : "Vamos conversar"}</h2>
            <p>
              {isEmpresa
                ? "Conte um pouco sobre a sua organização e eu preparo uma proposta de acordo com a sua realidade."
                : "Escolha o canal que for mais confortável para você. Uma mensagem já é um começo."}
            </p>
            <ul className={styles.channels}>
              <li>
                <a href={waHref} target="_blank" rel="noreferrer">
                  <WhatsAppIcon size={22} />
                  <span>
                    <small>WhatsApp</small>
                    (92) 99221-4912
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`}>
                  <Mail size={22} strokeWidth={1.5} />
                  <span>
                    <small>E-mail</small>
                    {email}
                  </span>
                </a>
              </li>
              <li>
                <a href={instagramUrl} target="_blank" rel="noreferrer">
                  <Instagram size={22} strokeWidth={1.5} />
                  <span>
                    <small>Instagram</small>
                    @amandamonteiro.psico
                  </span>
                </a>
              </li>
            </ul>
            <p className={styles.contactMeta}>
              <Clock size={16} aria-hidden="true" /> Segunda a sábado, das 8h às 19h · Online para todo o Brasil e exterior
            </p>
          </div>

          <div className={styles.formCard} data-am-reveal>
            <h3>{isEmpresa ? "Solicitar proposta" : "Fale comigo"}</h3>
            {waUrl ? (
              <div className={styles.formDone} role="status" aria-live="polite">
                <WhatsAppIcon size={26} />
                <strong>Quase lá! Falta só enviar no WhatsApp</strong>
                <p>
                  Abrimos o WhatsApp com a sua mensagem pronta. Basta tocar em enviar para ela chegar até a Amanda e a
                  equipe responder com os horários.
                </p>
                <div className={styles.formDoneActions}>
                  <a className={styles.btnPrimary} href={waUrl} target="_blank" rel="noreferrer">
                    Abrir WhatsApp novamente
                  </a>
                  <button type="button" className={styles.btnGhost} onClick={() => setWaUrl(null)}>
                    Editar mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form className={styles.form} onSubmit={onSubmit}>
                {!isEmpresa && (
                  <p className={styles.formIntro}>Deixe seus dados e nossa equipe entra em contato.</p>
                )}
                <p className={styles.formHow}>
                  <WhatsAppIcon size={15} /> Ao enviar, o WhatsApp abre com a sua mensagem pronta. É só confirmar o envio por lá.
                </p>
                <label>
                  Nome
                  <input name="nome" type="text" required autoComplete="name" />
                </label>
                {isEmpresa && (
                  <div className={styles.formRow}>
                    <label>
                      Empresa
                      <input name="empresa" type="text" required />
                    </label>
                    <label>
                      Cargo
                      <input name="cargo" type="text" />
                    </label>
                  </div>
                )}
                <div className={styles.formRow}>
                  <label>
                    E-mail
                    <input name="email" type="email" required autoComplete="email" />
                  </label>
                  <label>
                    WhatsApp
                    <input name="whatsapp" type="tel" required autoComplete="tel" />
                  </label>
                </div>
                {isEmpresa ? (
                  <div className={styles.formRow}>
                    <label>
                      Nº aproximado de colaboradores
                      <input name="colaboradores" type="number" min={1} inputMode="numeric" />
                    </label>
                    <label>
                      Serviço de interesse
                      <select name="servico" defaultValue="">
                        <option value="" disabled>Selecione</option>
                        <option>Avaliação NR-1</option>
                        <option>Plantão</option>
                        <option>Palestra</option>
                        <option>Treinamento</option>
                        <option>Roda de conversa</option>
                      </select>
                    </label>
                  </div>
                ) : (
                  <label>
                    Sou
                    <select name="perfil" defaultValue="Paciente">
                      <option>Paciente</option>
                      <option>Empresa</option>
                    </select>
                  </label>
                )}
                <label>
                  Mensagem {isEmpresa ? "" : "(opcional)"}
                  <textarea name="mensagem" rows={3} />
                </label>
                {!isEmpresa && (
                  <small className={styles.formNote}>
                    Não é necessário descrever sua situação aqui. Conversamos com calma e sigilo no primeiro contato.
                  </small>
                )}
                <label className={styles.check}>
                  <input type="checkbox" required />
                  <span>
                    Li e concordo com a <a href={privacyHref}>Política de Privacidade</a>.
                  </span>
                </label>
                <button type="submit" className={styles.btnPrimary}>
                  <WhatsAppIcon size={16} /> {isEmpresa ? "Solicitar proposta pelo WhatsApp" : "Enviar pelo WhatsApp"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LocationSection() {
  return (
    <section className={styles.locationSection} id="localizacao" aria-label="Localização">
      <div className={styles.footerInner}>
        <div className={styles.locationGrid}>
          <div className={styles.locationInfo} data-am-reveal>
            <span className={styles.kicker}>Onde atendo</span>
            <h2>Ponta Negra, Manaus</h2>
            <p>Atendimento presencial no Harmony Saúde Integral e online para organizações de todo o Brasil.</p>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} />
                <span>
                  <small>Presencial</small>
                  <a href={mapsRouteUrl} target="_blank" rel="noreferrer">{endereco}</a>
                </span>
              </li>
              <li>
                <Video size={18} />
                <span>
                  <small>Online</small>
                  Todo o Brasil e brasileiras no exterior
                </span>
              </li>
              <li>
                <Clock size={18} />
                <span>
                  <small>Horário</small>
                  Segunda a sábado, das 8h às 19h
                </span>
              </li>
            </ul>
            <div className={styles.careCard}>
              <strong>Atendimento a organizações</strong>
              <ul>
                {["Empresas, escolas, condomínios e instituições", "RH, gestores e equipes de SST", "Proposta de acordo com a sua realidade"].map((item) => (
                  <li key={item}>
                    <Check size={15} aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a className={styles.btnOutline} href={mapsRouteUrl} target="_blank" rel="noreferrer">
              Como chegar <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>
          <div className={styles.locationMap} data-am-reveal>
            <iframe
              title="Mapa: Harmony Saúde Integral, Torre Soho, Ponta Negra, Manaus"
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter({ mode = "paciente", anchorPrefix = "" }: { mode?: "paciente" | "empresa"; anchorPrefix?: string }) {
  const links =
    mode === "empresa"
      ? [
          { href: `${anchorPrefix}#nr1`, label: "NR-1" },
          { href: `${anchorPrefix}#servicos`, label: "Serviços" },
          { href: `${anchorPrefix}#avaliacao`, label: "Como funciona" },
          { href: `${anchorPrefix}#duvidas`, label: "Dúvidas" },
          { href: `${anchorPrefix}#contato`, label: "Contato" },
        ]
      : [
          { href: `${anchorPrefix}#sobre`, label: "Sobre" },
          { href: `${anchorPrefix}#temas`, label: "Temas" },
          { href: `${anchorPrefix}#como-funciona`, label: "Como funciona" },
          { href: `${anchorPrefix}#duvidas`, label: "Dúvidas" },
          { href: `${anchorPrefix}#contato`, label: "Contato" },
        ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p className={styles.careNotice}>
          <Phone size={16} aria-hidden="true" />
          <span>
            Este site não oferece atendimento de urgência. Em situação de crise, ligue para o{" "}
            <a href="tel:188">CVV (188)</a>, disponível 24 horas, ou procure o serviço de emergência mais próximo (
            <a href="tel:192">SAMU 192</a>).
          </span>
        </p>

        <div className={styles.footerMain}>
          <div className={styles.footerIdentity}>
            <Monogram className={styles.footerMark} />
            <div>
              <strong>Amanda Monteiro</strong>
              <span className={styles.footerCrp}>Psicóloga · CRP 20/14136</span>
              <p>“Ciência para orientar, conforto para acolher e presença para caminhar junto.”</p>
            </div>
          </div>

          <nav className={styles.footerNav} aria-label="Seções desta página">
            <span className={styles.footerHeading}>Nesta página</span>
            {links.map((link) => (
              <a key={link.label} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <nav className={styles.footerNav} aria-label="Outras páginas e links externos">
            <span className={styles.footerHeading}>Outras páginas</span>
            <a href={mode === "empresa" ? base : `${base}/empresas`}>
              {mode === "empresa" ? "Para pacientes" : "Para empresas"} <ArrowRight size={14} aria-hidden="true" />
            </a>
            <a href={privacyHref}>
              Política de Privacidade <ArrowRight size={14} aria-hidden="true" />
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              Instagram <ExternalLink size={14} aria-hidden="true" />
            </a>
          </nav>
        </div>

        <div className={styles.footerCredit}>
          <p>
            Conteúdo informativo, sem promessa de resultado, conforme o Código de Ética Profissional e as normas do CFP.
            Textos, fotos e dados em definição com a cliente antes da publicação comercial.
          </p>
          <div className={styles.footerCreditRow}>
            <span>
              © 2026 Amanda Monteiro Psicologia · Prévia conceitual criada pela{" "}
              <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">Luma Sites</a> ·
              Informações sujeitas à confirmação
            </span>
            <a href="#inicio" className={styles.toTop}>
              Voltar ao início <ArrowUp size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
