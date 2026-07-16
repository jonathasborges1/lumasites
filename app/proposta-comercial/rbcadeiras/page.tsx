"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Armchair,
  BadgeCheck,
  Building2,
  Car,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Cog,
  ExternalLink,
  Facebook,
  Gamepad2,
  Instagram,
  Layers,
  MapPin,
  Menu,
  MessageCircle,
  Camera,
  PiggyBank,
  Recycle,
  ShieldCheck,
  Sofa,
  Sparkles,
  Store,
  Timer,
  Wrench,
  X,
} from "lucide-react";

/* ─── Dados extraídos das fontes públicas ───
   Fonte 1: Google Maps — "RB Manutenção" (https://maps.app.goo.gl/5p58AiZpH9YKCvHC7)
   Fonte 2: Instagram — @rbcadeirasgiratorias ("RB MANUTENÇÃO EM CADEIRAS")
   Fotos e legendas extraídas do feed público do Instagram (assets em
   public/images/rbcadeiras/). Dados cadastrais públicos: CNPJ
   36.240.173/0001-24 (RB Consertos e Manutenção de Cadeiras Giratórias,
   ativa desde 04/02/2020)                                                 */

const WA_NUMBER = "559282583636";
const WA_DISPLAY = "+55 92 8258-3636";
const WA_TEXT = encodeURIComponent(
  "Olá! Vi o site da RB Manutenção em Cadeiras e quero um orçamento. 🪑",
);
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`;
const INSTAGRAM = "https://www.instagram.com/rbcadeirasgiratorias/";
const INSTAGRAM_HANDLE = "@rbcadeirasgiratorias";
const FACEBOOK = "https://www.facebook.com/profile.php?id=100054587268283"; // Página "RB Manutenções" (link da bio do Instagram)
const MAPS_LINK = "https://maps.app.goo.gl/5p58AiZpH9YKCvHC7";
const MAPS_EMBED =
  "https://www.google.com/maps?q=-3.0871747%2C-59.9767913%20(RB%20Manuten%C3%A7%C3%A3o%20em%20Cadeiras)&z=17&output=embed";
const ENDERECO = "Rua Cristo Rei, 27 — Coroado, Manaus/AM, CEP 69082-000";
const CNPJ = "36.240.173/0001-24";

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#galeria", label: "Trabalhos" },
  { href: "#empresas", label: "Para empresas" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

const heroBadges = [
  { icon: BadgeCheck, label: "+20 anos", text: "de experiência no segmento" },
  { icon: Armchair, label: "Todos os modelos", text: "de cadeiras giratórias" },
  { icon: Sofa, label: "Estofados e bancos", text: "residencial e automotivo" },
  { icon: Store, label: "Loja física", text: "no Coroado, em Manaus" },
];

const servicos = [
  {
    icon: Cog,
    title: "Troca de rodízios e pistão a gás",
    text: "Substituição de rodinhas gastas e do pistão que não sobe nem desce — a cadeira volta a regular a altura como nova.",
  },
  {
    icon: Wrench,
    title: "Conserto de base e mecanismos",
    text: "Reparo ou troca de base giratória, braços e mecanismos de regulagem de encosto e inclinação, em todos os modelos.",
  },
  {
    icon: Sofa,
    title: "Reestofamento completo",
    text: "Troca de espuma, tecido ou material sintético do assento e do encosto — sua cadeira ou estofado com aparência de novo.",
  },
  {
    icon: Sparkles,
    title: "Higienização de estofados",
    text: "Limpeza profunda que remove manchas, ácaros e odores de cadeiras e estofados, prolongando a vida útil das peças.",
  },
  {
    icon: Layers,
    title: "Reforma completa",
    text: "Revisão geral da cadeira: estrutura, estofado, mecanismos e acabamento em um único serviço, com orçamento fechado.",
  },
  {
    icon: Gamepad2,
    title: "Reforma de cadeira gamer com personalização",
    text: "Sua cadeira gamer reformada e personalizada com seu logo ou identidade — trabalho real publicado no Instagram da RB.",
    img: "/images/rbcadeiras/rb-reforma-gamer.jpg",
    alt: "Cadeira gamer reformada e personalizada pela RB",
  },
  {
    icon: Car,
    title: "Revestimento automotivo",
    text: "Bancos de carro revestidos em couro legítimo ou sintético automotivo de primeira linha, que não descasca.",
    img: "/images/rbcadeiras/rb-revestimento-automotivo.jpg",
    alt: "Bancos automotivos revestidos em couro preto e vermelho pela RB",
  },
  {
    icon: Store,
    title: "Venda de cadeiras para escritório",
    text: "Vários modelos à venda na loja do Coroado — secretária, presidente e gamer, incluindo opções impermeáveis.",
  },
];

const motivos = [
  {
    icon: PiggyBank,
    title: "Economia real",
    text: "Reformar costuma custar uma fração do preço de uma cadeira nova de mesma qualidade — no segmento, a economia chega a até 70%.",
  },
  {
    icon: Recycle,
    title: "Sustentabilidade",
    text: "Cada cadeira reformada é uma a menos no lixo. Reaproveitar estrutura e base reduz descarte e consumo de material novo.",
  },
  {
    icon: ShieldCheck,
    title: "Experiência comprovada",
    text: "Mais de 20 anos no segmento de cadeiras giratórias e estofados — conhecimento para atender todos os modelos.",
  },
  {
    icon: Timer,
    title: "Conforto de volta, rápido",
    text: "Diagnóstico direto pelo WhatsApp com foto da cadeira agiliza o orçamento e o prazo do serviço.",
  },
];

const processo = [
  {
    icon: Camera,
    step: "1",
    title: "Mande uma foto pelo WhatsApp",
    text: "Fotografe a cadeira (ou o defeito) e descreva o problema. Não precisa entender de peça — a RB identifica pela imagem.",
  },
  {
    icon: ClipboardList,
    step: "2",
    title: "Receba o orçamento",
    text: "Você recebe a avaliação com o serviço recomendado e o valor, sem compromisso.",
  },
  {
    icon: Wrench,
    step: "3",
    title: "Serviço executado",
    text: "Aprovou? A cadeira é reparada com as peças adequadas ao modelo — conserto pontual ou reforma completa.",
  },
  {
    icon: CheckCircle2,
    step: "4",
    title: "Cadeira pronta para anos de uso",
    text: "Você recebe a cadeira funcionando e confortável de novo, pronta para o dia a dia de casa ou do escritório.",
  },
];

/* Fotos e legendas reais do feed público do Instagram @rbcadeirasgiratorias */
const galeria = [
  {
    img: "/images/rbcadeiras/rb-reforma-gamer.jpg",
    w: 640,
    h: 1136,
    title: "Reforma de cadeira gamer com personalização",
    tag: "Reforma + personalização",
    alt: "Cadeira gamer preta reformada com logo personalizado bordado no encosto",
  },
  {
    img: "/images/rbcadeiras/rb-revestimento-automotivo.jpg",
    w: 1080,
    h: 1080,
    title: "Revestimento automotivo em couro legítimo ou sintético",
    tag: "Automotivo",
    alt: "Bancos de carro revestidos em couro preto com detalhes vermelhos",
  },
  {
    img: "/images/rbcadeiras/rb-presidente-verde.jpg",
    w: 1080,
    h: 1080,
    title: "Cadeira giratória impermeável, reestofada na RB",
    tag: "Reestofamento",
    alt: "Cadeira giratória com estofado verde recém-reformado",
  },
  {
    img: "/images/rbcadeiras/rb-gamer-couro.jpg",
    w: 1080,
    h: 1080,
    title: "Cadeira gamer em couro legítimo",
    tag: "Venda e reforma",
    alt: "Cadeira gamer preta em couro legítimo com apoio de pés",
  },
  {
    img: "/images/rbcadeiras/rb-gamer-tecido.jpg",
    w: 1080,
    h: 1080,
    title: "Cadeira gamer revisada e pronta para uso",
    tag: "Manutenção",
    alt: "Cadeira gamer preta em tecido com base de cinco patas revisada",
  },
  {
    img: "/images/rbcadeiras/rb-oficina-bases.jpg",
    w: 640,
    h: 1136,
    title: "Bastidores da oficina: bases e mecanismos preparados",
    tag: "Oficina",
    alt: "Diversas bases giratórias e mecanismos de cadeiras enfileirados na oficina da RB",
  },
];

const segmentosEmpresas = [
  "Escritórios e coworkings",
  "Clínicas e consultórios",
  "Escolas e cursos",
  "Órgãos públicos",
  "Igrejas e auditórios",
  "Comércios e recepções",
];

const faqs = [
  {
    q: "Onde fica a loja da RB Manutenção em Cadeiras?",
    a: "A loja física fica na Rua Cristo Rei, 27 — bairro Coroado, em Manaus/AM (CEP 69082-000). É fácil de encontrar no Google Maps.",
  },
  {
    q: "Quais tipos de cadeira vocês consertam?",
    a: "Todos os modelos de cadeiras giratórias — secretária, executiva, presidente, gamer — além de reforma e reestofamento de estofados em geral.",
  },
  {
    q: "Como peço um orçamento?",
    a: "Pelo WhatsApp: envie uma foto da cadeira e descreva o problema. A RB avalia pela imagem e retorna com o orçamento, sem compromisso.",
  },
  {
    q: "Vale a pena reformar em vez de comprar uma cadeira nova?",
    a: "Na maioria dos casos, sim. A reforma preserva a estrutura da cadeira e custa bem menos que uma nova de qualidade equivalente — além de evitar o descarte.",
  },
  {
    q: "Vocês atendem empresas?",
    a: "Sim. A RB atende demandas corporativas, como manutenção de lotes de cadeiras de escritórios, clínicas, escolas e órgãos públicos.",
  },
  {
    q: "Vocês também vendem cadeiras?",
    a: "Sim. Além da manutenção, a RB trabalha com comércio de cadeiras e equipamentos para escritório na loja física do Coroado — vários modelos à venda, incluindo gamer e presidente.",
  },
  {
    q: "Vocês fazem revestimento de bancos de carro?",
    a: "Sim. A RB reveste bancos automotivos em couro legítimo ou sintético automotivo de primeira linha, que não descasca. Peça seu orçamento pelo WhatsApp.",
  },
];

function WaIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2a9.9 9.9 0 0 0-8.57 14.86L2 22l5.28-1.38A9.9 9.9 0 1 0 12.04 2Zm0 18.06a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.8.82-3-.2-.3a8.13 8.13 0 1 1 6.88 3.8Zm4.46-6.08c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.69-.14-.24-.02-.37.1-.5.11-.11.25-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.42.06-.65.3-.22.24-.85.83-.85 2.03 0 1.2.87 2.36 1 2.52.12.16 1.72 2.62 4.16 3.68.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}


export default function RbCadeirasPreviewPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab" || !drawerRef.current) return;

      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      menuButtonRef.current?.focus();
    };
  }, [menuOpen]);

  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".rb-page");
    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const revealGroups = [
      ".rb-section .rb-kicker, .rb-section h2, .rb-section-sub",
      ".rb-card, .rb-motivo, .rb-steps li, .rb-galeria-item",
      ".rb-sobre-card, .rb-empresas-stat, .rb-faq-item, .rb-contato-card, .rb-contato-map",
    ];
    const elements = revealGroups.flatMap((selector) =>
      Array.from(page.querySelectorAll<HTMLElement>(selector)),
    );

    elements.forEach((element, index) => {
      element.classList.add("rb-reveal");
      element.style.setProperty("--rb-reveal-delay", `${(index % 4) * 70}ms`);
    });
    page.classList.add("rb-motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    );
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "RB Manutenção em Cadeiras",
    alternateName: "RB Consertos e Manutenção de Cadeiras Giratórias",
    description:
      "Conserto, reforma, reestofamento e venda de cadeiras giratórias e estofados em Manaus. Mais de 20 anos no segmento, com loja física no bairro Coroado.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Cristo Rei, 27",
      addressLocality: "Manaus",
      addressRegion: "AM",
      postalCode: "69082-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -3.0871747,
      longitude: -59.9767913,
    },
    hasMap: MAPS_LINK,
    sameAs: [INSTAGRAM, FACEBOOK],
    logo: "/images/rbcadeiras/rb-logo.jpg",
    image: [
      "/images/rbcadeiras/rb-hero-cadeira.jpg",
      "/images/rbcadeiras/rb-loja.jpg",
    ],
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
    <main className="rb-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <a className="rb-skip" href="#conteudo">
        Pular para o conteúdo
      </a>

      {/* ── Barra de prévia ── */}
      <div className="rb-preview-bar" role="note" aria-label="Aviso de prévia conceitual">
        <Link
          className="rb-preview-back"
          href="/proposta-comercial"
          aria-label="Voltar para propostas comerciais"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Voltar</span>
        </Link>
        <div className="rb-preview-line">
          <span className="rb-preview-dot" aria-hidden="true" />
          Prévia Conceitual
        </div>
        <span className="rb-preview-sub">
          Proposta elaborada pela{" "}
          <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
            LumaSites.com.br
          </a>
        </span>
        <a
          className="rb-preview-site"
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Instagram</span>
          <ExternalLink size={13} aria-hidden="true" />
        </a>
      </div>

      {/* ── Header ── */}
      <header className="rb-header">
        <div className="rb-wrap rb-nav">
          <a href="#inicio" className="rb-brand" aria-label="RB Manutenção em Cadeiras">
            <Image
              src="/images/rbcadeiras/rb-logo.jpg"
              alt="Logo da RB — Conserto de Cadeiras Giratórias"
              width={320}
              height={320}
              priority
              className="rb-brand-logo"
            />
            <span className="rb-brand-text">
              <strong>RB Manutenção</strong>
              <small>em Cadeiras · Manaus</small>
            </span>
          </a>

          <nav aria-label="Navegação principal" className="rb-desktop-nav">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="rb-nav-cta"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WaIcon size={16} />
            <span>Orçamento</span>
          </a>

          <button
            ref={menuButtonRef}
            className="rb-menu-button"
            type="button"
            aria-label="Abrir menu"
            aria-controls="rb-mobile-drawer"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </header>

      <button
        className={`rb-menu-overlay${menuOpen ? " is-open" : ""}`}
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      <aside
        ref={drawerRef}
        id="rb-mobile-drawer"
        className={`rb-mobile-drawer${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!menuOpen}
      >
        <div className="rb-drawer-head">
          <div className="rb-drawer-brand">
            <Image
              src="/images/rbcadeiras/rb-logo.jpg"
              alt=""
              aria-hidden="true"
              width={320}
              height={320}
            />
            <div>
              <span>Menu</span>
              <small>RB Manutenção em Cadeiras</small>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Navegação do menu">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span>{item.label}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          ))}
        </nav>
        <a
          className="rb-drawer-cta"
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          <WaIcon size={18} />
          <span>
            <strong>Pedir orçamento</strong>
            <small>Atendimento pelo WhatsApp</small>
          </span>
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </aside>

      <div id="conteudo">
        {/* ── Hero ── */}
        <section className="rb-hero" id="inicio">
          <div className="rb-wrap rb-hero-grid">
            <div className="rb-hero-copy">
              <p className="rb-eyebrow">
                <MapPin size={13} aria-hidden="true" /> Coroado · Manaus/AM
              </p>
              <h1>
                Sua cadeira giratória <em>como nova</em>, sem pagar o preço de uma
                nova
              </h1>
              <p className="rb-hero-sub">
                Conserto, reforma, reestofamento e venda de cadeiras giratórias e
                estofados. Mais de 20 anos de experiência no segmento e loja
                física em Manaus — mande uma foto e receba seu orçamento pelo
                WhatsApp.
              </p>
              <div className="rb-hero-ctas">
                <a
                  className="rb-btn rb-btn-wa"
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WaIcon size={18} />
                  Pedir orçamento agora
                </a>
                <a className="rb-btn rb-btn-ghost" href="#servicos">
                  Ver serviços
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
              <ul className="rb-hero-badges">
                {heroBadges.map((b) => (
                  <li key={b.label}>
                    <b.icon size={18} aria-hidden="true" />
                    <div>
                      <strong>{b.label}</strong>
                      <span>{b.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rb-hero-visual">
              <div className="rb-hero-ring" aria-hidden="true" />
              <span className="rb-hero-float is-experience">
                <BadgeCheck size={16} aria-hidden="true" /> +20 anos
              </span>
              <span className="rb-hero-float is-budget">
                <Camera size={16} aria-hidden="true" /> Orçamento por foto
              </span>
              <figure className="rb-hero-photo">
                <Image
                  src="/images/rbcadeiras/rb-hero-cadeira.jpg"
                  alt="Cadeira presidente preta com costura vermelha matelassê, reformada na loja da RB em Manaus"
                  width={640}
                  height={1136}
                  priority
                />
                <figcaption>
                  <Camera size={13} aria-hidden="true" />
                  Trabalho real — Instagram {INSTAGRAM_HANDLE}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ── Sobre ── */}
        <section className="rb-section" id="sobre">
          <div className="rb-wrap rb-sobre">
            <div>
              <p className="rb-kicker">Sobre a RB</p>
              <h2>Mais de duas décadas devolvendo conforto a Manaus</h2>
              <p>
                A <strong>RB Manutenção em Cadeiras</strong> atua há mais de 20
                anos no segmento de cadeiras giratórias e estofados, atendendo
                todos os modelos — da cadeira secretária do home office à
                presidente do escritório — com <strong>loja física</strong> no
                bairro Coroado, em Manaus.
              </p>
              <blockquote className="rb-quote">
                “Empresa com mais de 20 anos no segmento de cadeiras giratórias e
                estofados. 💺 Todos os modelos · 🏬 Loja física”
                <cite>
                  — Bio oficial da RB no Instagram{" "}
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                    {INSTAGRAM_HANDLE}
                  </a>
                </cite>
              </blockquote>
              <ul className="rb-check-list">
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  Empresa formalizada e ativa — CNPJ {CNPJ}
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  Manutenção, reforma e também venda de cadeiras para escritório
                </li>
                <li>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  Atendimento a residências e empresas em Manaus
                </li>
              </ul>
            </div>
            <div className="rb-sobre-card">
              <Image
                src="/images/rbcadeiras/rb-loja.jpg"
                alt="Interior da loja da RB em Manaus, com várias cadeiras giratórias à venda"
                width={640}
                height={1136}
                className="rb-sobre-foto"
              />
              <Store size={26} aria-hidden="true" />
              <h3>Visite a loja física</h3>
              <p>
                “Cadeira, vários modelos à venda aqui na loja RB — Manaus,
                Amazonas.”
              </p>
              <p>{ENDERECO}</p>
              <a
                className="rb-btn rb-btn-dark"
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={16} aria-hidden="true" />
                Ver rota no Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* ── Serviços ── */}
        <section className="rb-section rb-section-alt" id="servicos">
          <div className="rb-wrap">
            <p className="rb-kicker">Serviços</p>
            <h2>Tudo o que a sua cadeira precisa, em um só lugar</h2>
            <p className="rb-section-sub">
              Do rodízio gasto à reforma completa — todos os modelos de cadeiras
              giratórias e estofados.
            </p>
            <div className="rb-cards">
              {servicos.map((s) => (
                <article key={s.title} className={`rb-card${s.img ? " has-media" : ""}`}>
                  <div className="rb-card-copy">
                    <span className="rb-card-icon">
                      <s.icon size={22} aria-hidden="true" />
                    </span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                  {s.img ? (
                    <div className="rb-card-media">
                      <Image src={s.img} alt={s.alt} width={640} height={640} />
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
            <div className="rb-section-cta">
              <a
                className="rb-btn rb-btn-wa"
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WaIcon size={18} />
                Descrever meu problema no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── Por que reformar ── */}
        <section className="rb-section">
          <div className="rb-wrap">
            <p className="rb-kicker">Por que reformar?</p>
            <h2>Reformar quase sempre vence comprar de novo</h2>
            <div className="rb-motivos">
              {motivos.map((m) => (
                <div key={m.title} className="rb-motivo">
                  <m.icon size={22} aria-hidden="true" />
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Como funciona ── */}
        <section className="rb-section rb-section-dark" id="como-funciona">
          <div className="rb-wrap">
            <p className="rb-kicker rb-kicker-light">Como funciona</p>
            <h2>Do defeito ao conforto em 4 passos</h2>
            <ol className="rb-steps">
              {processo.map((p) => (
                <li key={p.step}>
                  <span className="rb-step-num" aria-hidden="true">
                    {p.step}
                  </span>
                  <p.icon size={22} aria-hidden="true" className="rb-step-icon" />
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ol>
            <div className="rb-section-cta">
              <a
                className="rb-btn rb-btn-wa"
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WaIcon size={18} />
                Começar pelo passo 1
              </a>
            </div>
          </div>
        </section>

        {/* ── Galeria antes/depois ── */}
        <section className="rb-section" id="galeria">
          <div className="rb-wrap">
            <p className="rb-kicker">Trabalhos reais</p>
            <h2>O trabalho fala por si</h2>
            <p className="rb-section-sub">
              Fotos reais de trabalhos e produtos publicados pela RB no
              Instagram {INSTAGRAM_HANDLE} — da oficina à entrega.
            </p>
            <div className="rb-galeria">
              {galeria.map((g) => (
                <figure key={g.title} className="rb-galeria-item">
                  <div className="rb-galeria-media">
                    <Image
                      src={g.img}
                      alt={g.alt}
                      width={g.w}
                      height={g.h}
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                    />
                  </div>
                  <figcaption>
                    <strong>{g.title}</strong>
                    <span>{g.tag}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <a
              className="rb-instagram-link"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} aria-hidden="true" />
              Ver trabalhos no Instagram {INSTAGRAM_HANDLE}
            </a>
          </div>
        </section>

        {/* ── Para empresas ── */}
        <section className="rb-section rb-section-alt" id="empresas">
          <div className="rb-wrap rb-empresas">
            <div>
              <p className="rb-kicker">Para empresas</p>
              <h2>Manutenção de cadeiras para o seu escritório inteiro</h2>
              <p>
                Cadeiras quebradas geram desconforto, afastamentos e uma imagem
                ruim para clientes. A RB atende demandas corporativas em Manaus:
                avaliação do lote, orçamento único e reforma padronizada — muito
                mais econômico do que renovar o mobiliário.
              </p>
              <ul className="rb-tags">
                {segmentosEmpresas.map((s) => (
                  <li key={s}>
                    <Building2 size={14} aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
              <a
                className="rb-btn rb-btn-wa"
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WaIcon size={17} />
                Solicitar proposta corporativa
              </a>
            </div>
            <div className="rb-empresas-stat" aria-hidden="true">
              <strong>até 70%</strong>
              <span>
                é a economia típica da reforma em relação à compra de cadeiras
                novas equivalentes
              </span>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="rb-section" id="duvidas">
          <div className="rb-wrap rb-faq-wrap">
            <p className="rb-kicker">Dúvidas frequentes</p>
            <h2>Perguntas que chegam todo dia no WhatsApp</h2>
            <div className="rb-faq">
              {faqs.map((f, i) => {
                const open = faqOpen === i;
                return (
                  <div key={f.q} className={`rb-faq-item${open ? " is-open" : ""}`}>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setFaqOpen(open ? null : i)}
                    >
                      <span>{f.q}</span>
                      <ChevronDown size={18} aria-hidden="true" />
                    </button>
                    <div className="rb-faq-answer" hidden={!open}>
                      <p>{f.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Contato ── */}
        <section className="rb-section rb-section-dark" id="contato">
          <div className="rb-wrap rb-contato">
            <div>
              <p className="rb-kicker rb-kicker-light">Contato</p>
              <h2>Fale com a RB e resolva hoje</h2>
              <p>
                O caminho mais rápido é o WhatsApp — mas você também encontra a
                RB na loja física do Coroado e no Instagram.
              </p>
              <div className="rb-contato-ctas">
                <a
                  className="rb-btn rb-btn-wa"
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WaIcon size={18} />
                  Chamar no WhatsApp
                </a>
                <a
                  className="rb-btn rb-btn-ghost-light"
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={17} aria-hidden="true" />
                  {INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>
            <address className="rb-contato-card">
              <h3>
                <Store size={18} aria-hidden="true" /> Loja física
              </h3>
              <p>{ENDERECO}</p>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                <Instagram size={15} aria-hidden="true" />
                Instagram {INSTAGRAM_HANDLE}
              </a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">
                <Facebook size={15} aria-hidden="true" />
                Facebook — RB Manutenções
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={15} aria-hidden="true" />
                WhatsApp {WA_DISPLAY}
              </a>
            </address>
            <div className="rb-contato-map">
              <div className="rb-contato-map-head">
                <div>
                  <h3>
                    <MapPin size={18} aria-hidden="true" /> Como chegar
                  </h3>
                  <p>{ENDERECO}</p>
                </div>
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
                  Abrir rota no Google Maps
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              </div>
              <iframe
                src={MAPS_EMBED}
                title="Localização da RB Manutenção em Cadeiras no Google Maps"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </div>

      {/* ── Footer ── */}
      <footer className="rb-footer">
        <div className="rb-wrap rb-footer-grid">
          <div>
            <p className="rb-footer-brand">
              <Image
                src="/images/rbcadeiras/rb-logo.jpg"
                alt=""
                aria-hidden="true"
                width={320}
                height={320}
                className="rb-footer-logo"
              />
              RB Manutenção em Cadeiras
            </p>
            <p>
              Conserto, reforma e venda de cadeiras giratórias, estofados e
              revestimento automotivo em Manaus — mais de 20 anos no segmento.
            </p>
            <p className="rb-footer-cnpj">CNPJ {CNPJ}</p>
          </div>
          <div>
            <h4>Endereço</h4>
            <p>{ENDERECO}</p>
          </div>
          <div>
            <h4>Redes e canais</h4>
            <div className="rb-footer-social">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da RB Manutenção em Cadeiras"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da RB Manutenções"
              >
                <Facebook size={16} aria-hidden="true" />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da RB Manutenção em Cadeiras"
              >
                <WaIcon size={16} />
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RB Manutenção em Cadeiras no Google Maps"
              >
                <MapPin size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="rb-wrap rb-footer-bottom">
          <p>
            Prévia conceitual desenvolvida pela{" "}
            <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
              Luma Sites
            </a>{" "}
            a partir do conteúdo público do{" "}
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
              Google Maps
            </a>{" "}
            e do{" "}
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              Instagram {INSTAGRAM_HANDLE}
            </a>
            . Marca, fotos e conteúdo pertencem à RB Manutenção em Cadeiras.
          </p>
        </div>
      </footer>

      <a
        className="rb-float-wa"
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a RB Manutenção em Cadeiras no WhatsApp"
      >
        <WaIcon size={26} />
      </a>

      <style jsx global>
        {css}
      </style>
    </main>
  );
}

/* ─── Estilos (mobile-first) ─── */

const css = `
  .rb-page {
    --rb-red: #d21f2b;
    --rb-red-deep: #9c1220;
    --rb-red-soft: #ff8087;
    --rb-dark: #1c1917;
    --rb-dark-2: #292420;
    --rb-ink: #2b2620;
    --rb-muted: #6f675c;
    --rb-paper: #faf7f2;
    --rb-sand: #f3ecdf;
    --rb-line: #e7ddcb;
    --rb-white: #ffffff;
    --rb-wa: #1fa855;
    --rb-radius: 18px;
    font-family: "Segoe UI", system-ui, -apple-system, Roboto, "Helvetica Neue", Arial, sans-serif;
    background: var(--rb-paper);
    color: var(--rb-ink);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    overflow-x: clip;
    padding-top: 52px;
  }
  .rb-page [id] { scroll-margin-top: 120px; }
  .rb-page *, .rb-page *::before, .rb-page *::after { box-sizing: border-box; }
  .rb-page img, .rb-page svg { max-width: 100%; }
  /* :where() zera a especificidade do reset para as classes de espaçamento
     (.rb-kicker, .rb-hero-sub, .rb-footer-brand…) valerem sobre ele */
  .rb-page :where(h1, h2, h3, h4, p, ul, ol, figure, blockquote) { margin: 0; }
  .rb-page :where(h1, h2, h3, h4) {
    font-family: inherit;
    font-variant: normal;
    text-transform: none;
  }
  .rb-page :where(ul, ol) { padding: 0; list-style: none; }
  .rb-page a { color: inherit; text-decoration: none; }
  .rb-page address { font-style: normal; }
  .rb-wrap { width: min(100% - 2.5rem, 72rem); margin-inline: auto; }

  .rb-skip {
    position: absolute; left: -9999px; top: 0; z-index: 200;
    background: var(--rb-dark); color: #fff;
    padding: 0.65rem 1rem; border-radius: 0 0 10px 0;
  }
  .rb-page .rb-skip { color: #fff; }
  .rb-skip:focus { left: 0; }

  /* Preview bar */
  .rb-preview-bar {
    position: fixed; inset: 0 0 auto; z-index: 72; height: 52px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto auto;
    align-content: center; align-items: center;
    column-gap: 0.7rem; row-gap: 1px;
    padding: 4px 12px;
    background: #0d0d0d; color: #cfc8bd;
    font-size: 0.72rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }
  .rb-preview-back {
    grid-column: 1; grid-row: 1 / span 2;
    display: inline-flex; align-items: center; gap: 0.3rem;
    font-weight: 600; color: #fff;
  }
  .rb-preview-line {
    grid-column: 2; grid-row: 1; justify-self: center;
    display: inline-flex; align-items: center; gap: 0.4rem;
    font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--rb-red-soft); white-space: nowrap;
  }
  .rb-preview-dot {
    width: 8px; height: 8px; border-radius: 999px;
    background: var(--rb-red);
    box-shadow: 0 0 0 3px rgba(210, 31, 43, 0.25);
    animation: rb-pulse 2.2s infinite;
  }
  @keyframes rb-pulse {
    0%, 100% { box-shadow: 0 0 0 3px rgba(210, 31, 43, 0.25); }
    50% { box-shadow: 0 0 0 6px rgba(210, 31, 43, 0.08); }
  }
  .rb-preview-sub { grid-column: 2; grid-row: 2; justify-self: center; white-space: nowrap; }
  .rb-preview-sub a { color: var(--rb-red-soft); font-weight: 600; }
  .rb-preview-site {
    grid-column: 3; grid-row: 1 / span 2;
    display: inline-flex; align-items: center; gap: 0.3rem;
    color: #fff; font-weight: 600;
  }
  .rb-page .rb-preview-back,
  .rb-page .rb-preview-site { color: #fff; }
  @media (prefers-reduced-motion: reduce) {
    .rb-preview-dot { animation: none; }
  }

  /* Header */
  .rb-header {
    position: sticky; top: 52px; z-index: 60;
    background: rgba(250, 247, 242, 0.92);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--rb-line);
  }
  .rb-nav { display: flex; align-items: center; gap: 0.8rem; min-height: 64px; }
  .rb-brand { display: inline-flex; align-items: center; gap: 0.6rem; margin-right: auto; }
  .rb-brand-logo {
    width: 42px; height: 42px; border-radius: 999px;
    object-fit: cover;
    border: 2px solid var(--rb-red);
    background: #fff;
  }
  .rb-brand-text { display: flex; flex-direction: column; line-height: 1.15; }
  .rb-brand-text strong { font-size: 0.95rem; }
  .rb-brand-text small { font-size: 0.7rem; color: var(--rb-muted); }
  .rb-desktop-nav { display: none; }
  .rb-nav-cta {
    display: none;
    align-items: center; gap: 0.4rem;
    background: var(--rb-wa); color: #fff;
    font-weight: 700; font-size: 0.85rem;
    padding: 0.6rem 1rem; border-radius: 999px;
  }
  .rb-page .rb-nav-cta { color: #102418; }
  .rb-menu-button {
    display: grid; place-items: center;
    width: 44px; height: 44px;
    border: 1px solid var(--rb-line); border-radius: 12px;
    background: #fff; color: var(--rb-ink); cursor: pointer;
  }

  .rb-menu-overlay {
    position: fixed; inset: 52px 0 0; z-index: 70;
    background: rgba(20, 16, 12, 0.58);
    backdrop-filter: blur(2px);
    border: 0; opacity: 0; pointer-events: none;
    transition: opacity 0.25s ease;
  }
  .rb-menu-overlay.is-open { opacity: 1; pointer-events: auto; }
  .rb-mobile-drawer {
    position: fixed; top: 52px; right: 0; bottom: 0; z-index: 71;
    width: min(22rem, calc(100vw - 2rem));
    background:
      radial-gradient(18rem 12rem at 100% 0%, rgba(210, 31, 43, 0.07), transparent 70%),
      #fff;
    display: flex; flex-direction: column;
    padding: 1rem 1.25rem max(1.25rem, env(safe-area-inset-bottom));
    transform: translateX(105%);
    transition: transform 0.28s ease;
    box-shadow: -18px 0 44px rgba(28, 25, 23, 0.22);
    overflow: hidden;
  }
  .rb-mobile-drawer.is-open { transform: translateX(0); }
  .rb-drawer-head {
    display: flex; align-items: center; justify-content: space-between;
    gap: 1rem;
    min-height: 58px;
    padding-bottom: 0.9rem;
    border-bottom: 1px solid var(--rb-line);
  }
  .rb-drawer-brand { display: flex; align-items: center; gap: 0.65rem; min-width: 0; }
  .rb-drawer-brand > img {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    border: 1px solid rgba(156, 18, 32, 0.28);
    border-radius: 999px;
    object-fit: cover;
  }
  .rb-drawer-head span {
    display: block;
    color: var(--rb-red-deep);
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .rb-drawer-head small {
    display: block;
    overflow: hidden;
    color: var(--rb-ink);
    font-size: 0.82rem;
    font-weight: 700;
    line-height: 1.25;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .rb-drawer-head button {
    display: grid; place-items: center;
    width: 44px; height: 44px; flex-shrink: 0;
    border: 1px solid var(--rb-line); border-radius: 10px;
    background: #fff; cursor: pointer; color: var(--rb-ink);
  }
  .rb-mobile-drawer nav {
    display: flex;
    flex-direction: column;
    padding-block: 0.55rem;
    overflow-y: auto;
    overscroll-behavior: contain;
  }
  .rb-mobile-drawer nav a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    min-height: 52px;
    padding: 0.7rem 0.25rem;
    font-weight: 700;
    border-bottom: 1px dashed var(--rb-line);
    transition: color 0.18s ease, padding 0.18s ease;
  }
  .rb-mobile-drawer nav a svg {
    flex-shrink: 0;
    color: var(--rb-red-deep);
    opacity: 0.55;
    transition: opacity 0.18s ease, transform 0.18s ease;
  }
  .rb-mobile-drawer nav a:hover,
  .rb-mobile-drawer nav a:focus-visible { color: var(--rb-red-deep); padding-left: 0.45rem; }
  .rb-mobile-drawer nav a:hover svg,
  .rb-mobile-drawer nav a:focus-visible svg { opacity: 1; transform: translateX(3px); }
  .rb-drawer-cta {
    margin-top: auto;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: 0.7rem;
    min-height: 66px;
    background: var(--rb-wa); color: #fff;
    font-weight: 700; padding: 0.75rem 1rem; border-radius: 16px;
    box-shadow: 0 12px 26px rgba(31, 168, 85, 0.24);
  }
  .rb-page .rb-drawer-cta { color: #102418; }
  .rb-drawer-cta > svg { flex-shrink: 0; }
  .rb-drawer-cta span { display: flex; flex-direction: column; min-width: 0; }
  .rb-drawer-cta strong { font-size: 0.92rem; line-height: 1.25; }
  .rb-drawer-cta small { font-size: 0.72rem; font-weight: 600; line-height: 1.35; opacity: 0.78; }

  /* Buttons */
  .rb-btn {
    display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
    font-weight: 700; font-size: 0.92rem;
    padding: 0.85rem 1.25rem; border-radius: 999px;
    min-height: 48px;
    transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  }
  .rb-btn:hover { transform: translateY(-1px); }
  .rb-btn-wa { background: var(--rb-wa); color: #102418; box-shadow: 0 10px 24px rgba(31, 168, 85, 0.28); }
  .rb-btn-dark { background: var(--rb-dark); color: #fff; }
  .rb-btn-ghost { background: transparent; color: var(--rb-ink); border: 1.5px solid var(--rb-line); }
  .rb-btn-ghost-light { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.35); }
  .rb-page .rb-btn-wa { color: #102418; }
  .rb-page .rb-btn-dark { color: #fff; }
  .rb-page .rb-btn-ghost-light { color: #fff; }

  /* Hero */
  .rb-hero {
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(50rem 30rem at 110% -10%, rgba(210, 31, 43, 0.16), transparent 60%),
      linear-gradient(180deg, #fdfaf4, var(--rb-paper));
    border-bottom: 1px solid var(--rb-line);
    padding-block: 2.6rem 2.8rem;
  }
  .rb-hero::after {
    content: "";
    position: absolute;
    width: 22rem;
    height: 22rem;
    left: -13rem;
    bottom: -15rem;
    border-radius: 999px;
    background: rgba(210, 31, 43, 0.08);
    filter: blur(2px);
    pointer-events: none;
  }
  .rb-hero-grid { position: relative; z-index: 1; display: grid; gap: 2rem; }
  .rb-hero-copy > * {
    animation: rb-hero-enter 0.62s cubic-bezier(.22,.8,.25,1) both;
  }
  .rb-hero-copy > *:nth-child(2) { animation-delay: 70ms; }
  .rb-hero-copy > *:nth-child(3) { animation-delay: 140ms; }
  .rb-hero-copy > *:nth-child(4) { animation-delay: 210ms; }
  .rb-hero-copy > *:nth-child(5) { animation-delay: 280ms; }
  @keyframes rb-hero-enter {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: none; }
  }
  .rb-eyebrow {
    display: inline-flex; align-items: center; gap: 0.35rem;
    font-size: 0.75rem; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: var(--rb-red-deep);
    background: rgba(210, 31, 43, 0.12);
    border: 1px solid rgba(210, 31, 43, 0.3);
    padding: 0.35rem 0.75rem; border-radius: 999px;
    margin-bottom: 1rem;
  }
  .rb-hero h1 {
    font-size: clamp(1.9rem, 6.4vw, 3rem);
    line-height: 1.14; letter-spacing: -0.02em;
    font-weight: 800; color: var(--rb-dark);
  }
  .rb-hero h1 em { font-style: normal; color: var(--rb-red-deep); }
  .rb-hero-sub { margin-top: 1rem; color: var(--rb-muted); max-width: 34rem; }
  .rb-hero-ctas { display: flex; flex-wrap: wrap; gap: 0.7rem; margin-top: 1.4rem; }
  .rb-hero-badges {
    margin-top: 1.8rem;
    display: grid; grid-template-columns: 1fr 1fr; gap: 0.7rem;
  }
  .rb-hero-badges li {
    display: flex; gap: 0.55rem; align-items: flex-start;
    background: #fff; border: 1px solid var(--rb-line);
    border-radius: 14px; padding: 0.7rem 0.8rem;
  }
  .rb-hero-badges svg { color: var(--rb-red-deep); flex-shrink: 0; margin-top: 2px; }
  .rb-hero-badges strong { display: block; font-size: 0.82rem; line-height: 1.25; }
  .rb-hero-badges span { font-size: 0.74rem; color: var(--rb-muted); line-height: 1.3; display: block; }
  .rb-hero-visual {
    position: relative;
    display: grid; place-items: center;
    padding: 1.4rem;
  }
  .rb-hero-ring {
    position: absolute; inset: auto;
    width: min(310px, 78%); aspect-ratio: 1;
    border-radius: 999px;
    background: radial-gradient(circle at 32% 28%, rgba(210, 31, 43, 0.22), rgba(210, 31, 43, 0.05) 62%, transparent 72%);
    border: 1px dashed rgba(156, 18, 32, 0.35);
    animation: rb-ring-orbit 18s linear infinite;
  }
  @keyframes rb-ring-orbit { to { transform: rotate(360deg); } }
  .rb-hero-photo {
    position: relative;
    width: min(300px, 74vw);
    border-radius: 22px;
    overflow: hidden;
    box-shadow: 0 26px 54px rgba(28, 25, 23, 0.3);
    border: 4px solid #fff;
    transform: rotate(-1.5deg);
    animation: rb-photo-float 6s ease-in-out infinite;
  }
  @keyframes rb-photo-float {
    0%, 100% { transform: rotate(-1.5deg) translateY(0); }
    50% { transform: rotate(-0.5deg) translateY(-8px); }
  }
  .rb-hero-float {
    position: absolute;
    z-index: 3;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.55rem 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.72);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.88);
    color: var(--rb-dark);
    box-shadow: 0 12px 28px rgba(28, 25, 23, 0.16);
    backdrop-filter: blur(10px);
    font-size: 0.75rem;
    font-weight: 800;
  }
  .rb-hero-float svg { color: var(--rb-red-deep); }
  .rb-hero-float.is-experience { display: none; top: 0.2rem; left: 0; }
  .rb-hero-float.is-budget { right: 0; bottom: 2.5rem; }
  .rb-hero-photo img {
    display: block;
    width: 100%; height: auto;
    aspect-ratio: 4 / 5;
    object-fit: cover;
  }
  .rb-hero-photo figcaption {
    position: absolute; left: 10px; right: 10px; bottom: 10px;
    display: inline-flex; align-items: center; justify-content: center; gap: 0.35rem;
    background: rgba(13, 13, 13, 0.78);
    color: #fff;
    font-size: 0.7rem; font-weight: 600;
    padding: 0.4rem 0.6rem;
    border-radius: 999px;
    backdrop-filter: blur(4px);
  }

  /* Sections */
  .rb-section { position: relative; overflow: hidden; padding-block: 3.2rem; }
  .rb-section > .rb-wrap { position: relative; z-index: 1; }
  .rb-section-alt {
    background:
      radial-gradient(32rem 18rem at 100% 0%, rgba(210, 31, 43, 0.06), transparent 70%),
      var(--rb-sand);
    border-block: 1px solid var(--rb-line);
    box-shadow: inset 0 24px 60px rgba(130, 95, 50, 0.035);
  }
  .rb-section-alt::before {
    content: "";
    position: absolute;
    top: -1px;
    left: 8%;
    right: 8%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(210, 31, 43, 0.5), transparent);
  }
  .rb-kicker {
    font-size: 0.74rem; font-weight: 800;
    letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--rb-red-deep); margin-bottom: 0.5rem;
  }
  .rb-kicker-light { color: var(--rb-red-soft); }
  .rb-section h2 {
    font-size: clamp(1.45rem, 4.6vw, 2.15rem);
    line-height: 1.2; letter-spacing: -0.015em;
    font-weight: 800; color: var(--rb-dark);
    max-width: 36rem;
  }
  .rb-section-sub { margin-top: 0.7rem; color: var(--rb-muted); max-width: 38rem; }
  .rb-section-cta { margin-top: 1.8rem; display: flex; justify-content: center; }

  /* Sobre */
  .rb-sobre { display: grid; gap: 1.8rem; }
  .rb-sobre > div > p { margin-top: 0.9rem; color: var(--rb-muted); }
  .rb-sobre p strong { color: var(--rb-ink); }
  .rb-quote {
    margin-top: 1.2rem;
    background: #fff; border-left: 4px solid var(--rb-red);
    border-radius: 0 14px 14px 0;
    padding: 1rem 1.1rem;
    font-style: italic; color: var(--rb-ink);
  }
  .rb-quote cite {
    display: block; margin-top: 0.5rem;
    font-size: 0.78rem; font-style: normal; color: var(--rb-muted);
  }
  .rb-quote cite a { color: var(--rb-red-deep); font-weight: 600; }
  .rb-check-list { margin-top: 1.2rem; display: grid; gap: 0.55rem; }
  .rb-check-list li { display: flex; gap: 0.5rem; align-items: flex-start; font-size: 0.92rem; }
  .rb-check-list svg { color: var(--rb-wa); flex-shrink: 0; margin-top: 3px; }
  .rb-sobre-card {
    background: var(--rb-dark); color: #f4efe7;
    border-radius: var(--rb-radius);
    padding: 1.6rem;
    display: flex; flex-direction: column; gap: 0.7rem;
    align-items: flex-start;
    height: fit-content;
  }
  .rb-sobre-card svg { color: var(--rb-red-soft); }
  .rb-sobre-foto {
    width: 100%; height: auto;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 0.4rem;
  }
  .rb-sobre-card h3 { font-size: 1.1rem; }
  .rb-page .rb-sobre-card p { color: #d8d1c7; font-size: 0.92rem; }
  .rb-sobre-card .rb-btn { background: var(--rb-red); color: #fff; margin-top: 0.4rem; }

  /* Cards de serviço */
  .rb-cards { margin-top: 1.8rem; display: grid; gap: 0.9rem; }
  .rb-card {
    position: relative;
    overflow: hidden;
    background: #fff; border: 1px solid var(--rb-line);
    border-radius: var(--rb-radius);
    padding: 0;
    box-shadow: 0 8px 24px rgba(63, 47, 30, 0.04);
    transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;
  }
  .rb-card:hover {
    transform: translateY(-5px);
    border-color: rgba(156, 18, 32, 0.28);
    box-shadow: 0 20px 38px rgba(28, 25, 23, 0.11);
  }
  .rb-card-copy { padding: 1.3rem; }
  .rb-card-icon {
    display: grid; place-items: center;
    width: 46px; height: 46px; border-radius: 13px;
    background: rgba(210, 31, 43, 0.14); color: var(--rb-red-deep);
    margin-bottom: 0.8rem;
  }
  .rb-card h3 { font-size: 1.02rem; margin-bottom: 0.4rem; }
  .rb-card p { font-size: 0.9rem; color: var(--rb-muted); }
  .rb-card.has-media { display: grid; grid-template-columns: minmax(0, 1fr) 108px; }
  .rb-card-media { position: relative; min-height: 220px; overflow: hidden; }
  .rb-card-media img {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  .rb-card.has-media:hover .rb-card-media img { transform: scale(1.06); }

  /* Motivos */
  .rb-motivos { margin-top: 1.8rem; display: grid; gap: 0.9rem; }
  .rb-motivo {
    border: 1px solid var(--rb-line); border-radius: var(--rb-radius);
    background: #fff; padding: 1.2rem;
  }
  .rb-motivo svg { color: var(--rb-red-deep); }
  .rb-motivo h3 { font-size: 1rem; margin-top: 0.55rem; }
  .rb-motivo p { font-size: 0.88rem; color: var(--rb-muted); margin-top: 0.3rem; }

  /* Como funciona */
  .rb-section-dark {
    background:
      radial-gradient(38rem 24rem at 105% -10%, rgba(210, 31, 43, 0.17), transparent 68%),
      radial-gradient(26rem 18rem at -5% 110%, rgba(210, 31, 43, 0.08), transparent 65%),
      var(--rb-dark);
    color: #f4efe7;
  }
  .rb-section-dark::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
    background-size: 34px 34px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,.7), transparent 75%);
    pointer-events: none;
  }
  .rb-section-dark h2 { color: #fff; }
  .rb-steps {
    position: relative;
    margin-top: 2rem;
    padding-left: 1.25rem;
    display: grid;
    gap: 0.9rem;
    counter-reset: rb-step;
  }
  .rb-steps::before {
    content: "";
    position: absolute;
    top: 1.5rem;
    bottom: 1.5rem;
    left: 5px;
    width: 2px;
    background: linear-gradient(var(--rb-red-soft), rgba(255,128,135,.08));
  }
  .rb-steps li {
    position: relative;
    background: var(--rb-dark-2);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: var(--rb-radius);
    padding: 1.3rem 1.2rem 1.2rem;
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.13);
  }
  .rb-steps li::before {
    content: "";
    position: absolute;
    top: 1.45rem;
    left: -1.55rem;
    width: 11px;
    height: 11px;
    border: 3px solid var(--rb-dark);
    border-radius: 999px;
    background: var(--rb-red-soft);
    box-shadow: 0 0 0 4px rgba(255, 128, 135, 0.16);
  }
  .rb-step-num {
    position: absolute; top: 1rem; right: 1.1rem;
    font-size: 2rem; font-weight: 800; line-height: 1;
    color: rgba(210, 31, 43, 0.28);
  }
  .rb-step-icon {
    box-sizing: content-box;
    padding: 0.65rem;
    border-radius: 13px;
    background: rgba(255, 128, 135, 0.1);
    color: var(--rb-red-soft);
  }
  .rb-steps h3 { font-size: 1rem; margin-top: 0.6rem; color: #fff; }
  .rb-steps p { font-size: 0.88rem; color: #cfc8bd; margin-top: 0.35rem; }

  /* Galeria */
  .rb-galeria { margin-top: 1.8rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.7rem; }
  .rb-galeria-item {
    position: relative;
    border: 1px solid var(--rb-line); border-radius: var(--rb-radius);
    overflow: hidden; background: var(--rb-dark);
    box-shadow: 0 12px 28px rgba(28, 25, 23, 0.08);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .rb-galeria-item:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(28, 25, 23, 0.15); }
  .rb-galeria-media {
    aspect-ratio: 4 / 5;
    overflow: hidden;
    background: var(--rb-sand);
  }
  .rb-galeria-media img {
    display: block;
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  .rb-galeria-item:hover .rb-galeria-media img { transform: scale(1.04); }
  .rb-galeria-item figcaption {
    position: absolute;
    inset: auto 0 0;
    padding: 2.7rem 0.75rem 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    color: #fff;
    background: linear-gradient(transparent, rgba(13, 13, 13, 0.92));
  }
  .rb-galeria-item strong { font-size: 0.8rem; line-height: 1.35; }
  .rb-galeria-item span { font-size: 0.66rem; color: var(--rb-red-soft); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700; }
  @media (min-width: 640px) {
    .rb-galeria-item figcaption { padding: 0.85rem 1rem; }
    .rb-galeria-item strong { font-size: 0.92rem; }
    .rb-galeria-item span { font-size: 0.76rem; }
  }
  .rb-instagram-link {
    margin-top: 1.6rem;
    display: inline-flex; align-items: center; gap: 0.5rem;
    font-weight: 700; color: var(--rb-red-deep);
    border-bottom: 2px solid rgba(156, 18, 32, 0.35);
    padding-bottom: 2px;
  }

  /* Empresas */
  .rb-empresas { display: grid; gap: 1.8rem; }
  .rb-empresas > div > p { margin-top: 0.9rem; color: var(--rb-muted); max-width: 36rem; }
  .rb-tags { margin-block: 1.2rem; display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .rb-tags li {
    display: inline-flex; align-items: center; gap: 0.35rem;
    background: #fff; border: 1px solid var(--rb-line);
    border-radius: 999px;
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem; font-weight: 600;
  }
  .rb-tags svg { color: var(--rb-red-deep); }
  .rb-empresas-stat {
    background: linear-gradient(150deg, var(--rb-red), var(--rb-red-deep));
    color: #fff;
    border-radius: var(--rb-radius);
    padding: 1.8rem 1.5rem;
    display: flex; flex-direction: column; gap: 0.4rem;
    justify-content: center;
    height: fit-content;
  }
  .rb-empresas-stat strong { font-size: clamp(2.4rem, 9vw, 3.4rem); line-height: 1; font-weight: 800; }
  .rb-empresas-stat span { font-size: 0.92rem; font-weight: 600; color: #fff; max-width: 22rem; }

  /* FAQ */
  .rb-faq { margin-top: 1.8rem; display: grid; gap: 0.7rem; }
  .rb-faq-item {
    background: #fff; border: 1px solid var(--rb-line);
    border-radius: 14px; overflow: hidden;
  }
  .rb-faq-item.is-open { border-color: rgba(156, 18, 32, 0.45); }
  .rb-faq-item button {
    width: 100%;
    display: flex; align-items: center; justify-content: space-between; gap: 0.8rem;
    text-align: left;
    background: none; border: 0; cursor: pointer;
    font: inherit; font-weight: 700; color: var(--rb-ink);
    padding: 1rem 1.1rem;
    min-height: 52px;
  }
  .rb-faq-item button svg { flex-shrink: 0; transition: transform 0.2s ease; color: var(--rb-red-deep); }
  .rb-faq-item.is-open button svg { transform: rotate(180deg); }
  .rb-faq-answer { padding: 0 1.1rem 1.1rem; }
  .rb-faq-answer p { font-size: 0.92rem; color: var(--rb-muted); }

  /* Contato */
  .rb-contato { display: grid; gap: 1.8rem; }
  .rb-contato > div > p { margin-top: 0.9rem; color: #cfc8bd; max-width: 32rem; }
  .rb-contato-ctas { display: flex; flex-wrap: wrap; gap: 0.7rem; margin-top: 1.4rem; }
  .rb-contato-card {
    background: var(--rb-dark-2);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: var(--rb-radius);
    padding: 1.5rem;
    display: flex; flex-direction: column; gap: 0.7rem;
    height: fit-content;
  }
  .rb-contato-card h3 { display: inline-flex; align-items: center; gap: 0.45rem; font-size: 1rem; color: #fff; }
  .rb-contato-card h3 svg { color: var(--rb-red-soft); }
  .rb-contato-card p { color: #cfc8bd; font-size: 0.92rem; }
  .rb-contato-card a {
    display: inline-flex; align-items: center; gap: 0.45rem;
    color: var(--rb-red-soft); font-weight: 600; font-size: 0.9rem;
    min-height: 32px;
  }
  .rb-contato-map {
    overflow: hidden;
    background: var(--rb-dark-2);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: var(--rb-radius);
  }
  .rb-contato-map-head {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.2rem;
  }
  .rb-contato-map-head h3 {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    color: #fff;
    font-size: 1rem;
  }
  .rb-contato-map-head h3 svg { color: var(--rb-red-soft); }
  .rb-contato-map-head p {
    margin-top: 0.3rem;
    color: #cfc8bd;
    font-size: 0.86rem;
  }
  .rb-contato-map-head a {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    min-height: 44px;
    width: fit-content;
    color: var(--rb-red-soft);
    font-size: 0.88rem;
    font-weight: 700;
  }
  .rb-contato-map iframe {
    display: block;
    width: 100%;
    height: 280px;
    border: 0;
    background: var(--rb-sand);
  }

  /* Footer */
  .rb-footer { background: #141110; color: #b8b0a4; }
  .rb-footer-grid {
    display: grid; gap: 1.6rem;
    padding-block: 2.6rem 1.6rem;
  }
  .rb-footer-brand {
    display: flex; align-items: center; gap: 0.65rem;
    color: #fff; font-weight: 800; margin-bottom: 1rem;
  }
  .rb-footer-logo {
    width: 34px; height: 34px; border-radius: 999px;
    object-fit: cover;
    background: #fff;
    border: 1px solid rgba(255, 255, 255, 0.25);
  }
  .rb-footer-grid p { font-size: 0.88rem; }
  .rb-footer-cnpj { margin-top: 0.75rem; font-size: 0.78rem; color: #aaa195; }
  .rb-footer-grid h4 {
    color: #fff; font-size: 0.8rem;
    text-transform: uppercase; letter-spacing: 0.12em;
    margin-bottom: 0.85rem;
  }
  .rb-footer-social { display: flex; gap: 0.6rem; }
  .rb-footer-social a {
    display: grid; place-items: center;
    width: 42px; height: 42px; border-radius: 12px;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #fff;
  }
  .rb-footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.09);
    padding-block: 1.2rem 4.6rem;
  }
  .rb-footer-bottom p { font-size: 0.76rem; line-height: 1.7; }
  .rb-footer-bottom a { color: var(--rb-red-soft); font-weight: 600; }

  /* WhatsApp flutuante */
  .rb-float-wa {
    position: fixed; right: 1rem; bottom: 1rem; z-index: 65;
    display: grid; place-items: center;
    width: 56px; height: 56px; border-radius: 999px;
    background: var(--rb-wa); color: #fff;
    box-shadow: 0 14px 30px rgba(31, 168, 85, 0.4);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    animation: rb-wa-pulse 2s ease-out infinite;
  }
  .rb-page .rb-float-wa { color: #102418; }
  .rb-float-wa:hover { transform: scale(1.06); }
  .rb-float-wa:active { transform: scale(0.94); }
  @keyframes rb-wa-pulse {
    0% {
      box-shadow: 0 14px 30px rgba(31, 168, 85, 0.4),
        0 0 0 0 rgba(37, 211, 102, 0.48);
    }
    70% {
      box-shadow: 0 14px 30px rgba(31, 168, 85, 0.4),
        0 0 0 16px rgba(37, 211, 102, 0);
    }
    100% {
      box-shadow: 0 14px 30px rgba(31, 168, 85, 0.4),
        0 0 0 0 rgba(37, 211, 102, 0);
    }
  }

  /* Movimento progressivo durante a rolagem */
  .rb-motion-ready .rb-reveal {
    opacity: 0;
    transform: translateY(24px);
    transition:
      opacity 0.58s cubic-bezier(.22,.8,.25,1),
      transform 0.58s cubic-bezier(.22,.8,.25,1),
      box-shadow 0.24s ease,
      border-color 0.24s ease;
    transition-delay: var(--rb-reveal-delay, 0ms);
  }
  .rb-motion-ready .rb-reveal.is-visible {
    opacity: 1;
    transform: none;
  }
  .rb-motion-ready .rb-card.rb-reveal.is-visible:hover,
  .rb-motion-ready .rb-galeria-item.rb-reveal.is-visible:hover {
    transform: translateY(-5px);
  }

  @media (prefers-reduced-motion: reduce) {
    .rb-float-wa,
    .rb-hero-copy > *,
    .rb-hero-ring,
    .rb-hero-photo { animation: none; }
    .rb-motion-ready .rb-reveal,
    .rb-motion-ready .rb-reveal.is-visible {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }

  /* ── Tablet+ ── */
  @media (min-width: 640px) {
    .rb-cards { grid-template-columns: 1fr 1fr; }
    .rb-motivos { grid-template-columns: 1fr 1fr; }
    .rb-steps { grid-template-columns: 1fr 1fr; }
    .rb-galeria { grid-template-columns: 1fr 1fr; }
    .rb-hero-badges { grid-template-columns: repeat(2, minmax(0, 1fr)); max-width: 34rem; }
  }

  /* ── Desktop ── */
  @media (min-width: 1024px) {
    .rb-desktop-nav { display: flex; gap: 1.25rem; font-size: 0.88rem; font-weight: 600; }
    .rb-desktop-nav a { transition: color 0.15s ease; }
    .rb-desktop-nav a:hover { color: var(--rb-red-deep); }
    .rb-nav-cta { display: inline-flex; }
    .rb-menu-button { display: none; }

    .rb-hero { padding-block: 4.2rem 4.4rem; }
    .rb-hero-grid { grid-template-columns: 1.15fr 0.85fr; align-items: center; gap: 3rem; }
    .rb-hero-badges { grid-template-columns: repeat(4, minmax(0, 1fr)); max-width: none; }
    .rb-hero-float.is-experience { display: inline-flex; top: 1.2rem; left: 0.5rem; }
    .rb-hero-float.is-budget { right: 0.2rem; bottom: 3.4rem; }

    .rb-section { padding-block: 4.4rem; }
    .rb-sobre { grid-template-columns: 1.3fr 0.7fr; gap: 3rem; align-items: start; }
    .rb-cards { grid-template-columns: repeat(4, minmax(0, 1fr)); grid-auto-flow: dense; }
    .rb-card:nth-child(1),
    .rb-card:nth-child(6),
    .rb-card:nth-child(7),
    .rb-card:nth-child(8) { grid-column: span 2; }
    .rb-card.has-media { grid-template-columns: minmax(0, 1fr) minmax(150px, 42%); }
    .rb-motivos { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .rb-steps {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      padding: 1.4rem 0 0;
    }
    .rb-steps::before {
      top: 1.15rem;
      bottom: auto;
      left: 7%;
      right: 7%;
      width: auto;
      height: 2px;
      background: linear-gradient(90deg, rgba(255,128,135,.1), var(--rb-red-soft), rgba(255,128,135,.1));
    }
    .rb-steps li::before {
      top: -1.55rem;
      left: 50%;
      transform: translateX(-50%);
    }
    .rb-galeria { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .rb-empresas { grid-template-columns: 1.25fr 0.75fr; gap: 3rem; align-items: center; }
    .rb-contato { grid-template-columns: 1.15fr 0.85fr; gap: 3rem; align-items: start; }
    .rb-contato-map { grid-column: 1 / -1; }
    .rb-contato-map-head { flex-direction: row; align-items: center; justify-content: space-between; }
    .rb-contato-map iframe { height: 360px; }
    .rb-footer-grid { grid-template-columns: 1.4fr 1fr 0.8fr; gap: 2.4rem; }
    .rb-footer-bottom { padding-bottom: 1.4rem; }
  }
`;
