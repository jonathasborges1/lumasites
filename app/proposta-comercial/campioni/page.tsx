"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  AlarmClock,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  ExternalLink,
  FileSearch,
  FileWarning,
  Globe,
  HeartPulse,
  Landmark,
  MapPin,
  Menu,
  MessageCircle,
  MessagesSquare,
  Moon,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  Timer,
  Users,
  X,
} from "lucide-react";

const WA_NUMBER = "5511916192852";
const WA = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Olá! Vim pelo site e gostaria de falar com um advogado sobre meus direitos trabalhistas.",
)}`;
const ADDRESS = "R. Gustavo de Godoi, 13 — Penha de França, São Paulo/SP, CEP 03630-020";
const MAPS = "https://www.google.com/maps/search/?api=1&query=R.+Gustavo+de+Godoi+13+Penha+de+Franca+Sao+Paulo+SP";
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "R. Gustavo de Godoi, 13 - Penha de França, São Paulo - SP",
)}&output=embed&hl=pt-BR&z=16`;
const OFFICIAL = "https://www.campioniadvogados.com/";

const IMG = {
  logo: "/images/campioni/campioni-logo.png",
  plantao: "/images/campioni/campioni-medico-plantao-noturno.webp",
  reuniao: "/images/campioni/campioni-reuniao-juridica-balanca.webp",
  contrato: "/images/campioni/campioni-assinatura-contrato.webp",
};

const nav = [
  { href: "#atuacao", label: "Atuação" },
  { href: "#direitos", label: "Direitos" },
  { href: "#como-funciona", label: "Etapas" },
  { href: "#sobre", label: "Sobre" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

const publicos = [
  { icon: Stethoscope, label: "Médicos(as)" },
  { icon: HeartPulse, label: "Enfermeiros(as)" },
  { icon: Activity, label: "Técnicos(as) de enfermagem" },
  { icon: Users, label: "Agentes comunitários de saúde" },
  { icon: Globe, label: "Trabalhadores da saúde indígena" },
  { icon: BadgeCheck, label: "Demais profissionais CLT da saúde" },
];

const areas = [
  {
    icon: Timer,
    title: "Horas extras e escalas de plantão",
    text: "Análise de escalas 12x36, trocas de plantão, jornadas prorrogadas e banco de horas irregular para verificar valores devidos.",
    items: ["Escala 12x36", "Banco de horas irregular", "Intervalos suprimidos", "Adicional noturno"],
  },
  {
    icon: ShieldAlert,
    title: "Insalubridade e periculosidade",
    text: "Avaliação do enquadramento legal e do grau de exposição a agentes biológicos, químicos e radiação no ambiente de trabalho.",
    items: ["Agentes biológicos", "Grau de exposição", "Base de cálculo correta", "Reflexos nas demais verbas"],
  },
  {
    icon: FileWarning,
    title: "Rescisão indireta",
    text: "Atuação em casos de atraso de salário, descumprimento de obrigações e condições que tornam insustentável a permanência no emprego.",
    items: ["Atraso de salários", "FGTS não depositado", "Assédio e sobrecarga", "Verbas rescisórias integrais"],
  },
  {
    icon: ShieldCheck,
    title: "Falta de EPI e segurança do trabalho",
    text: "Situações envolvendo ausência ou fornecimento inadequado de equipamentos de proteção individual e falhas de segurança.",
    items: ["EPI ausente ou vencido", "Normas de segurança (NRs)", "Responsabilidade do empregador"],
  },
  {
    icon: HeartPulse,
    title: "Doença ocupacional e acidente de trabalho",
    text: "Análise do nexo entre a atividade exercida e o adoecimento, com busca das reparações e estabilidades previstas em lei.",
    items: ["Nexo ocupacional", "Estabilidade acidentária", "Indenizações", "Burnout e adoecimento mental"],
  },
  {
    icon: AlarmClock,
    title: "Sobreaviso e prontidão",
    text: "Casos em que o profissional permanece à disposição do empregador fora do expediente, sem receber corretamente por isso.",
    items: ["Horas de sobreaviso", "Plantão à distância", "Escalas de prontidão"],
  },
  {
    icon: Globe,
    title: "Saúde indígena (DSEI e conveniadas)",
    text: "Atuação dedicada às demandas específicas de quem trabalha em áreas e distritos sanitários especiais indígenas.",
    items: ["Adicionais de área remota", "Escalas diferenciadas", "Deslocamento e alojamento", "Verbas específicas"],
    highlight: true,
  },
];

const direitos = [
  "Adicional de insalubridade calculado por fora ou em grau menor que o devido",
  "Horas extras da escala 12x36 pagas sem os reflexos corretos",
  "Intervalo de descanso suprimido durante o plantão sem compensação",
  "Adicional noturno sem a prorrogação após as 5h da manhã",
  "Sobreaviso à disposição do hospital sem nenhum pagamento",
  "EPI em falta, vencido ou inadequado para o risco da função",
];

const steps = [
  {
    icon: MessageCircle,
    title: "Você chama no WhatsApp",
    text: "Conta a sua situação com as suas palavras, sem juridiquês. O atendimento é 100% online, de qualquer lugar do Brasil.",
  },
  {
    icon: FileSearch,
    title: "Análise individual do caso",
    text: "Avaliamos seus holerites, escalas e contrato para identificar o que deixou de ser pago corretamente.",
  },
  {
    icon: ClipboardCheck,
    title: "Parecer claro e objetivo",
    text: "Você recebe uma orientação direta: o que é viável, quais os riscos e quais os próximos passos possíveis.",
  },
  {
    icon: Landmark,
    title: "Acompanhamento até o fim",
    text: "Se decidir agir, cuidamos de todo o processo e mantemos você informado(a) em cada etapa.",
  },
];

const faqs = [
  {
    q: "Ainda estou empregado(a). Posso processar o hospital?",
    a: "Sim. O direito de reclamar verbas não pagas não depende de demissão. Cada situação, porém, pede estratégia: analisamos seu caso individualmente e explicamos os caminhos possíveis — inclusive medidas que podem ser tomadas ainda durante o contrato.",
  },
  {
    q: "Trabalho em escala 12x36. Tenho direito a horas extras?",
    a: "A escala 12x36 é válida quando prevista em acordo ou convenção coletiva, mas na prática é comum haver plantões dobrados, trocas não compensadas, intervalos suprimidos e prorrogação do adicional noturno não paga. É exatamente esse tipo de análise que fazemos nos seus holerites e escalas.",
  },
  {
    q: "Qual o prazo para entrar com uma ação trabalhista?",
    a: "Em regra, você pode cobrar os últimos 5 anos do contrato, desde que a ação seja proposta em até 2 anos após a saída do emprego. Por isso, quanto antes o caso for analisado, menos direitos se perdem pelo caminho.",
  },
  {
    q: "O atendimento é só em São Paulo?",
    a: "Não. O atendimento é 100% online, por WhatsApp e videochamada, para profissionais da saúde de todo o Brasil — incluindo quem atua em áreas remotas e na saúde indígena.",
  },
  {
    q: "Quanto custa a análise do meu caso?",
    a: "A primeira conversa serve para entender a sua situação. Os honorários são apresentados com transparência antes de qualquer contratação, e em muitos casos trabalhamos com percentual sobre o êxito — você só paga se ganhar.",
  },
  {
    q: "Quais documentos preciso ter em mãos?",
    a: "O ideal é reunir holerites, escalas de plantão, contrato de trabalho e carteira de trabalho (física ou digital). Mas não se preocupe: se você não tiver tudo, orientamos como obter cada documento.",
  },
  {
    q: "Trabalho na saúde indígena. Vocês atendem meu caso?",
    a: "Sim. Temos atuação dedicada às demandas de quem trabalha em DSEIs e instituições conveniadas: adicionais de área remota, escalas diferenciadas, deslocamento, alojamento e demais verbas específicas dessa realidade.",
  },
];

function WaIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}

function SectionDivider({ icon: Icon = Scale }: { icon?: typeof Scale }) {
  return (
    <div className="cp-divider" aria-hidden="true">
      <span>
        <Icon size={17} strokeWidth={1.7} />
      </span>
    </div>
  );
}

function AreaCard({
  icon: Icon,
  title,
  text,
  items,
  highlight,
}: {
  icon: typeof Timer;
  title: string;
  text: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <article className={`cp-card${highlight ? " cp-card-featured" : ""}`}>
      <div className="cp-icon" aria-hidden="true">
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <CheckCircle2 size={15} aria-hidden="true" /> {item}
          </li>
        ))}
      </ul>
      <a href={WA} target="_blank" rel="noopener noreferrer">
        Analisar meu caso <ArrowRight size={15} />
      </a>
    </article>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const id = `faq-${index}`;

  return (
    <div className="cp-faq-item">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{q}</span>
        <ChevronDown size={20} aria-hidden="true" />
      </button>
      <div id={id} className={`cp-faq-answer${open ? " is-open" : ""}`}>
        <div>
          <p>{a}</p>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [nome, setNome] = useState("");
  const [situacao, setSituacao] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = `Olá! Meu nome é ${nome.trim() || "—"} e gostaria de falar com um advogado. Minha situação: ${
      situacao.trim() || "prefiro explicar na conversa."
    }`;
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <form className="cp-form" onSubmit={handleSubmit}>
      <label htmlFor="cp-nome">
        Seu nome
        <input
          id="cp-nome"
          type="text"
          name="nome"
          autoComplete="name"
          placeholder="Como podemos te chamar?"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          required
        />
      </label>
      <label htmlFor="cp-situacao">
        Conte rapidamente sua situação <small>(opcional)</small>
        <textarea
          id="cp-situacao"
          name="situacao"
          rows={3}
          placeholder="Ex.: trabalho em escala 12x36 e acho que a insalubridade está errada…"
          value={situacao}
          onChange={(event) => setSituacao(event.target.value)}
        />
      </label>
      <button type="submit" className="cp-button cp-button-wa">
        <WaIcon /> Enviar pelo WhatsApp
      </button>
      <p className="cp-form-note">
        Você será direcionado(a) ao WhatsApp com a mensagem pronta. Sem cadastro, sem spam.
      </p>
    </form>
  );
}

export default function CampioniPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".cp-page");
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".cp-page > section:not(.cp-hero)"),
    );

    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    page.classList.add("cp-motion-ready");
    sections.forEach((section) => section.classList.add("cp-reveal"));

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
      page.classList.remove("cp-motion-ready");
      sections.forEach((section) => section.classList.remove("cp-reveal", "is-visible"));
    };
  }, []);

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
        drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
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

  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Campioni Advogados — Advocacia Trabalhista para Profissionais da Saúde",
    url: OFFICIAL,
    image: IMG.logo,
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Gustavo de Godoi, 13",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "03630-020",
      addressCountry: "BR",
    },
    foundingDate: "2007",
    hasMap: MAPS,
    areaServed: "Brasil",
    serviceType: [
      "Direito do Trabalho",
      "Direito Previdenciário",
      "Advocacia para profissionais da saúde",
      "Insalubridade e periculosidade",
      "Horas extras e escalas de plantão",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main className="cp-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <a className="cp-skip" href="#conteudo">
        Pular para o conteúdo
      </a>

      <div className="cp-preview-bar" role="note" aria-label="Aviso de proposta">
        <Link
          className="cp-preview-back"
          href="/proposta-comercial"
          aria-label="Voltar para propostas comerciais"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Voltar</span>
        </Link>
        <div className="cp-preview-line">
          <span className="cp-preview-dot" aria-hidden="true" />
          Prévia Conceitual
        </div>
        <span className="cp-preview-sub">
          Proposta elaborada pela{" "}
          <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
            LumaSites.com.br
          </a>
        </span>
        <a
          className="cp-preview-site"
          href={OFFICIAL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Site oficial</span>
          <ExternalLink size={13} aria-hidden="true" />
        </a>
      </div>

      <header className="cp-header">
        <div className="cp-wrap cp-nav">
          <a href="#inicio" className="cp-brand" aria-label="Campioni Advogados">
            <span className="cp-brand-mark">
              <Image
                src={IMG.logo}
                alt=""
                width={479}
                height={478}
                priority
              />
            </span>
            <span className="cp-brand-name">
              Campioni Advogados
              <small>Trabalhista e Previdenciário · Desde 2007</small>
            </span>
          </a>

          <nav aria-label="Navegação principal" className="cp-desktop-nav">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="cp-nav-cta" href={WA} target="_blank" rel="noopener noreferrer">
            <WaIcon /> Falar no WhatsApp
          </a>

          <button
            ref={menuButtonRef}
            className="cp-menu-button"
            type="button"
            aria-label="Abrir menu"
            aria-controls="cp-mobile-drawer"
            aria-expanded={menuOpen}
            aria-haspopup="dialog"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>
      </header>

      <button
        className={`cp-menu-overlay${menuOpen ? " is-open" : ""}`}
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      <aside
        ref={drawerRef}
        id="cp-mobile-drawer"
        className={`cp-mobile-drawer${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!menuOpen}
      >
        <div className="cp-drawer-head">
          <div>
            <span>Menu</span>
            <small>Campioni Advogados</small>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={21} aria-hidden="true" />
          </button>
        </div>

        <nav className="cp-drawer-nav" aria-label="Navegação mobile">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span>{item.label}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          ))}
          <a
            className="cp-drawer-cta"
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <WaIcon /> Falar no WhatsApp
          </a>
        </nav>
      </aside>

      <section id="inicio" className="cp-hero" aria-labelledby="hero-title">
        <div className="cp-wrap cp-hero-grid" id="conteudo">
          <div className="cp-hero-copy">
            <p className="cp-kicker">
              Advocacia trabalhista para profissionais da saúde · Desde 2007
            </p>
            <h1 id="hero-title">
              Você cuida de vidas nos plantões. <span>Nós cuidamos dos seus direitos.</span>
            </h1>
            <p className="cp-hero-lead">
              Escala 12x36, insalubridade, adicional noturno, sobreaviso e verbas que
              deixam de ser pagas corretamente: analisamos seus holerites e escalas
              com atenção individual. Atendimento 100% online para todo o Brasil.
            </p>
            <div className="cp-actions">
              <a className="cp-button cp-button-wa" href={WA} target="_blank" rel="noopener noreferrer">
                <WaIcon /> Falar com advogado
              </a>
              <a className="cp-button cp-button-outline" href="#atuacao">
                Ver áreas de atuação <ArrowRight size={17} />
              </a>
            </div>
            <p className="cp-hero-service">
              Análise individual do seu caso · WhatsApp e videochamada
            </p>
            <div className="cp-trust-strip" aria-label="Diferenciais rápidos">
              <span>
                <BadgeCheck size={17} /> Desde 2007
              </span>
              <span>
                <Stethoscope size={17} /> Foco em quem trabalha na saúde
              </span>
              <span>
                <MessagesSquare size={17} /> Linguagem clara, sem juridiquês
              </span>
            </div>
          </div>

          <div className="cp-hero-media">
            <div className="cp-photo-frame">
              <Image
                src={IMG.plantao}
                alt="Profissional de saúde ao telefone durante plantão noturno no hospital"
                width={1600}
                height={1066}
                priority
                sizes="(max-width: 768px) 86vw, 520px"
              />
            </div>
            <div className="cp-hero-note">
              <Moon size={18} aria-hidden="true" />
              <div>
                <span>Plantão noturno, 12x36, sobreaviso</span>
                <strong>Quem vive essa rotina tem direitos específicos — e eles têm prazo.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cp-confidence" aria-label="Resumo de confiança">
        <div className="cp-wrap cp-confidence-grid">
          <div>
            <strong>Desde 2007</strong>
            <span>Quase duas décadas de atuação em Direito Trabalhista e Previdenciário.</span>
          </div>
          <div>
            <strong>Especialização real</strong>
            <span>Atuação focada nas demandas de quem trabalha na saúde — inclusive saúde indígena.</span>
          </div>
          <div>
            <strong>100% online</strong>
            <span>WhatsApp e videochamada para qualquer cidade do Brasil, no seu horário.</span>
          </div>
          <div>
            <strong>Análise responsável</strong>
            <span>Cada caso é avaliado individualmente, com orientação objetiva e transparente.</span>
          </div>
        </div>
      </section>

      <section className="cp-publico" aria-labelledby="publico-title">
        <SectionDivider icon={Stethoscope} />
        <div className="cp-wrap">
          <div className="cp-section-head">
            <p className="cp-kicker">Para quem é</p>
            <h2 id="publico-title">Feito para quem veste jaleco, farda ou uniforme da saúde</h2>
            <p>
              Se você trabalha (ou trabalhou) com carteira assinada em hospital, clínica,
              laboratório, home care, DSEI ou instituição conveniada, este atendimento é para você.
            </p>
          </div>
          <ul className="cp-publico-grid">
            {publicos.map((item) => (
              <li key={item.label}>
                <item.icon size={20} strokeWidth={1.8} aria-hidden="true" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="atuacao" className="cp-section cp-section-soft" aria-labelledby="atuacao-title">
        <SectionDivider />
        <div className="cp-wrap">
          <div className="cp-section-head">
            <p className="cp-kicker">áreas de atuação</p>
            <h2 id="atuacao-title">Em qual dessas situações você se encontra?</h2>
            <p>
              Cada demanda tem regras e provas próprias. Encontre a sua abaixo e chame no
              WhatsApp para uma análise individual do seu caso.
            </p>
          </div>

          <div className="cp-card-grid">
            {areas.map((item) => (
              <AreaCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id="direitos" className="cp-band" aria-labelledby="direitos-title">
        <div className="cp-wrap cp-band-grid">
          <div className="cp-band-copy">
            <p className="cp-kicker">Seus direitos</p>
            <h2 id="direitos-title">
              Seus direitos não terminam quando o plantão acaba.
            </h2>
            <p>
              No dia a dia da saúde, algumas verbas são pagas errado com tanta frequência
              que muita gente acha que é “assim mesmo”. Não é. Veja os casos mais comuns:
            </p>
            <ul className="cp-band-list">
              {direitos.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={17} aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
            <a className="cp-button cp-button-wa" href={WA} target="_blank" rel="noopener noreferrer">
              <WaIcon /> Verificar meus holerites
            </a>
            <p className="cp-band-deadline">
              <Clock3 size={15} aria-hidden="true" /> Atenção ao prazo: em regra, é possível
              cobrar os últimos 5 anos — e até 2 anos após sair do emprego.
            </p>
          </div>
          <div className="cp-band-media">
            <Image
              src={IMG.contrato}
              alt="Profissionais analisando e assinando um contrato com orientação jurídica"
              width={1600}
              height={1066}
              sizes="(max-width: 768px) 86vw, 460px"
            />
          </div>
        </div>
      </section>

      <section id="como-funciona" className="cp-section" aria-labelledby="process-title">
        <SectionDivider icon={ClipboardCheck} />
        <div className="cp-wrap">
          <div className="cp-section-head">
            <p className="cp-kicker">Como funciona</p>
            <h2 id="process-title">Do primeiro contato à conclusão, sem mistério</h2>
            <p>
              Você entende o que está acontecendo em cada etapa — com linguagem clara
              e orientação objetiva, do jeito que o atendimento deveria ser.
            </p>
          </div>

          <div className="cp-steps">
            {steps.map((step, index) => (
              <article className="cp-step" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div className="cp-icon" aria-hidden="true">
                  <step.icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="cp-section cp-section-soft cp-about" aria-labelledby="sobre-title">
        <SectionDivider icon={Landmark} />
        <div className="cp-wrap cp-about-grid">
          <div className="cp-about-image">
            <Image
              src={IMG.reuniao}
              alt="Reunião jurídica com balança da justiça e documentos sobre a mesa"
              width={1200}
              height={1714}
              sizes="(max-width: 768px) 86vw, 420px"
            />
            <div className="cp-about-badge">
              <Image
                src={IMG.logo}
                alt="Selo Campioni Advogados — desde 2007"
                width={479}
                height={478}
              />
            </div>
          </div>
          <div className="cp-about-copy">
            <p className="cp-kicker">Quem somos</p>
            <h2 id="sobre-title">
              Campioni Advogados
              <em>Direito Trabalhista e Previdenciário · Desde 2007</em>
            </h2>
            <p>
              Somos um escritório com atuação focada em Direito do Trabalho, dedicado à
              orientação e defesa de profissionais da saúde contratados pelo regime CLT.
              Conhecemos a rotina de plantões, escalas e riscos da profissão — e é essa
              vivência que orienta cada análise.
            </p>
            <p>
              O atendimento é individual, transparente e humanizado: você fala direto com
              quem entende do seu caso, recebe orientação com linguagem clara e acompanha
              cada etapa do processo.
            </p>
            <div className="cp-stats" aria-label="Números do escritório">
              <div>
                <strong>2007</strong>
                <span>atuando desde então</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>online, em todo o Brasil</span>
              </div>
              <div>
                <strong>Saúde</strong>
                <span>foco exclusivo no setor</span>
              </div>
            </div>
            <ul className="cp-check-list">
              <li>
                <CheckCircle2 size={18} /> Atuação focada em profissionais da saúde.
              </li>
              <li>
                <CheckCircle2 size={18} /> Análise individual e responsável de cada caso.
              </li>
              <li>
                <CheckCircle2 size={18} /> Linguagem clara e orientação objetiva.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="duvidas" className="cp-section" aria-labelledby="faq-title">
        <SectionDivider icon={MessagesSquare} />
        <div className="cp-wrap cp-faq-grid">
          <div>
            <p className="cp-kicker">Perguntas frequentes</p>
            <h2 id="faq-title">Dúvidas comuns de quem trabalha na saúde</h2>
            <p>
              Respostas diretas para as perguntas que mais recebemos sobre plantões,
              adicionais, prazos e como funciona o atendimento.
            </p>
          </div>
          <div className="cp-faq-list">
            {faqs.map((item, index) => (
              <FAQItem key={item.q} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="cp-final" aria-labelledby="contato-title">
        <div className="cp-wrap cp-final-grid">
          <div>
            <p className="cp-kicker">Contato</p>
            <h2 id="contato-title">Converse com quem entende os direitos de quem cuida</h2>
            <p>
              Conte sua situação pelo WhatsApp ou deixe seus dados ao lado: montamos a
              mensagem para você. A análise do seu caso é individual e a orientação é
              transparente desde a primeira conversa.
            </p>
            <a className="cp-button cp-button-wa" href={WA} target="_blank" rel="noopener noreferrer">
              <WaIcon /> Chamar no WhatsApp
            </a>
            <ul className="cp-contact-list">
              <li>
                <MapPin size={18} aria-hidden="true" />
                <a href={MAPS} target="_blank" rel="noopener noreferrer">
                  {ADDRESS}
                </a>
              </li>
              <li>
                <Globe size={18} aria-hidden="true" />
                <span>Atendimento 100% online · WhatsApp e videochamada para todo o Brasil</span>
              </li>
              <li>
                <Clock3 size={18} aria-hidden="true" />
                <span>Respostas com agilidade em horário comercial</span>
              </li>
            </ul>
          </div>
          <div className="cp-final-form">
            <h3>Prefere que a gente comece?</h3>
            <ContactForm />
          </div>

          <div className="cp-map">
            <iframe
              src={MAPS_EMBED}
              title="Mapa com a localização do escritório: R. Gustavo de Godoi, 13, Penha de França, São Paulo"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              className="cp-map-link"
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={16} aria-hidden="true" /> Ver rotas no Google Maps
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="cp-footer">
        <div className="cp-wrap cp-footer-grid">
          <div className="cp-footer-top">
            <div className="cp-footer-brand">
              <Image
                src={IMG.logo}
                alt="Campioni Advogados — Direito Trabalhista e Previdenciário, desde 2007"
                width={479}
                height={478}
              />
              <div>
                <strong>Campioni Advogados</strong>
                <span>Direito Trabalhista e Previdenciário · Desde 2007</span>
              </div>
            </div>
            <div className="cp-footer-links" aria-label="áreas de atuação">
              <strong>Atuação e atendimento</strong>
              <span>Direito Trabalhista para profissionais da saúde</span>
              <span>Insalubridade, escalas 12x36 e sobreaviso</span>
              <span>Atendimento online para todo o Brasil</span>
            </div>
          </div>

          <div className="cp-footer-legal" aria-labelledby="avisos-legais-title">
            <h2 id="avisos-legais-title">Avisos legais</h2>
            <div className="cp-footer-legal-grid">
              <p>
                As informações deste site têm caráter informativo e não substituem a análise
                individual do caso por advogado.
              </p>
              <p>
                Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece
                serviços públicos oficiais. Somos um escritório de advocacia, que oferece
                serviços jurídicos, privativos de advogados, de acordo com a legislação vigente
                e o Código de Ética e Disciplina da OAB do Brasil.
              </p>
            </div>
          </div>

          <p className="cp-footer-credit">
            <span>Campioni Advogados · todos os direitos reservados · Prévia conceitual criada por</span>
            <Link href="/" aria-label="Luma Sites">
              Luma Sites
            </Link>
          </p>
        </div>
      </footer>

      <a
        className="cp-floating-wa"
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com advogado no WhatsApp"
      >
        <WaIcon size={21} />
      </a>

      <style jsx global>{css}</style>
    </main>
  );
}

const css = `
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .cp-page, .cp-page * { box-sizing: border-box; }
  .cp-page {
    --black: #101114;
    --graphite: #17181c;
    --steel: #22242a;
    --silver: #c3c9d2;
    --silver-soft: #9aa1ab;
    --silver-dark: #6b7280;
    --paper: #f4f5f7;
    --white: #ffffff;
    --ink: #1a1c20;
    --muted: #4b5158;
    --line: #e0e3e8;
    --green: #3f7652;
    --wa: #25c366;
    min-height: 100vh;
    overflow-x: clip;
    background: var(--white);
    color: var(--ink);
    font-family: var(--font-body, Inter), Inter, system-ui, -apple-system, "Segoe UI", sans-serif;
    font-size: 17px;
    line-height: 1.6;
  }
  .cp-page h1, .cp-page h2 {
    font-family: Georgia, "Times New Roman", serif;
    font-weight: 700;
    letter-spacing: -0.008em;
    line-height: 1.16;
  }
  .cp-page h3 {
    font-family: var(--font-body, Inter), Inter, system-ui, sans-serif;
    font-weight: 800;
    letter-spacing: -0.015em;
    line-height: 1.2;
  }
  .cp-page ::selection {
    background: var(--silver);
    color: var(--black);
  }
  .cp-page section[id] { scroll-margin-top: 140px; }
  .cp-page img { display: block; max-width: 100%; }
  .cp-page a { color: inherit; text-decoration: none; }
  .cp-page button { font: inherit; cursor: pointer; }
  .cp-page :focus-visible {
    outline: 3px solid color-mix(in srgb, var(--silver) 80%, white);
    outline-offset: 4px;
    border-radius: 6px;
  }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .cp-page *, .cp-page *::before, .cp-page *::after {
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
  }
  .cp-wrap {
    width: min(1160px, calc(100% - 40px));
    margin: 0 auto;
  }
  .cp-skip {
    position: fixed;
    z-index: 999;
    top: 8px;
    left: 8px;
    transform: translateY(-140%);
    background: var(--silver);
    color: var(--black);
    padding: 10px 14px;
    font-weight: 800;
    border-radius: 6px;
  }
  .cp-skip:focus { transform: translateY(0); }

  .cp-preview-bar {
    position: fixed;
    z-index: 80;
    inset: 0 0 auto;
    min-height: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    padding: 7px 20px;
    background: #060709;
    color: rgba(255,255,255,.72);
    border-bottom: 1px solid rgba(255,255,255,.12);
    text-align: center;
  }
  .cp-preview-back {
    position: absolute;
    left: 12px;
    top: 50%;
    min-width: 36px;
    min-height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 0 10px;
    border-radius: 6px;
    color: rgba(255,255,255,.62);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
    transform: translateY(-50%);
  }
  .cp-preview-back:hover {
    background: rgba(255,255,255,.08);
    color: white;
  }
  .cp-preview-site {
    position: absolute;
    right: 12px;
    top: 50%;
    min-height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 0 10px;
    border: 1px solid rgba(195,201,210,.4);
    border-radius: 6px;
    color: var(--silver);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
    white-space: nowrap;
    transform: translateY(-50%);
  }
  .cp-preview-site:hover {
    background: rgba(195,201,210,.14);
    color: white;
  }
  .cp-preview-line {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: white;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .13em;
    text-transform: uppercase;
  }
  .cp-preview-sub {
    color: rgba(255,255,255,.48);
    font-size: 11px;
    line-height: 1.25;
  }
  .cp-preview-sub a {
    color: var(--silver);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .cp-preview-sub a:hover { color: white; }
  .cp-preview-dot {
    width: 7px;
    height: 7px;
    display: inline-block;
    flex: none;
    border-radius: 999px;
    background: var(--silver);
    box-shadow: 0 0 0 0 rgba(195,201,210,.72);
    animation: cp-dot-pulse 1.7s ease-out infinite;
  }
  @keyframes cp-dot-pulse {
    0% { box-shadow: 0 0 0 0 rgba(195,201,210,.6); }
    100% { box-shadow: 0 0 0 11px rgba(195,201,210,0); }
  }

  .cp-header {
    position: fixed;
    z-index: 70;
    inset: 52px 0 auto;
    background: rgba(16,17,20,.72);
    border-bottom: 1px solid rgba(255,255,255,.1);
    -webkit-backdrop-filter: blur(16px) saturate(1.3);
    backdrop-filter: blur(16px) saturate(1.3);
  }
  .cp-nav {
    height: 74px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .cp-brand {
    display: inline-flex;
    align-items: center;
    gap: 11px;
    flex: none;
    min-height: 48px;
  }
  .cp-brand-mark {
    width: 44px;
    height: 44px;
    flex: none;
    border-radius: 999px;
    overflow: hidden;
    border: 1px solid rgba(195,201,210,.4);
    background: white;
  }
  .cp-brand-mark img { width: 100%; height: 100%; object-fit: cover; }
  .cp-brand-name {
    display: grid;
    gap: 3px;
    color: white;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: .02em;
    line-height: 1;
  }
  .cp-brand-name small {
    color: var(--silver-soft);
    font-size: 9.5px;
    font-weight: 800;
    letter-spacing: .18em;
    text-transform: uppercase;
  }
  .cp-desktop-nav {
    margin-left: auto;
    display: none;
    align-items: center;
    gap: 18px;
  }
  .cp-desktop-nav a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    color: rgba(255,255,255,.72);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .cp-desktop-nav a:hover { color: var(--silver); }
  .cp-nav-cta {
    display: none;
    min-height: 44px;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 0 16px;
    border-radius: 8px;
    background: var(--wa);
    color: white;
    font-size: 13px;
    font-weight: 900;
    flex: none;
    white-space: nowrap;
  }
  .cp-nav-cta:hover { background: #1fae57; }
  .cp-menu-button {
    margin-left: auto;
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 12px;
    background: rgba(255,255,255,.07);
    color: white;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.06);
    transition: border-color .18s ease, background .18s ease, transform .18s ease;
  }
  .cp-menu-button:hover {
    border-color: rgba(255,255,255,.32);
    background: rgba(255,255,255,.11);
  }
  .cp-menu-button:active { transform: scale(.96); }
  .cp-menu-button:focus-visible,
  .cp-drawer-head button:focus-visible,
  .cp-drawer-nav a:focus-visible {
    outline: 2px solid var(--silver);
    outline-offset: 3px;
  }

  .cp-menu-overlay {
    position: fixed;
    z-index: 200;
    inset: 0;
    border: 0;
    background: rgba(2,3,5,.66);
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity .22s ease, visibility 0s linear .22s;
  }
  .cp-menu-overlay.is-open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transition-delay: 0s;
  }
  .cp-mobile-drawer {
    position: fixed;
    z-index: 201;
    top: 0;
    right: 0;
    width: min(86vw, 340px);
    height: 100vh;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    background:
      radial-gradient(420px 260px at 100% 0%, rgba(195,201,210,.1), transparent 66%),
      linear-gradient(180deg, #14161a 0%, #090a0c 100%);
    border-left: 1px solid rgba(255,255,255,.12);
    box-shadow: -24px 0 60px rgba(0,0,0,.48);
    transform: translateX(104%);
    visibility: hidden;
    transition:
      transform .24s cubic-bezier(.22, 1, .36, 1),
      visibility 0s linear .24s;
  }
  .cp-mobile-drawer.is-open {
    transform: translateX(0);
    visibility: visible;
    transition-delay: 0s;
  }
  .cp-drawer-head {
    min-height: 78px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    padding: 14px 18px 14px 22px;
    border-bottom: 1px solid rgba(255,255,255,.08);
  }
  .cp-drawer-head > div {
    display: grid;
    gap: 4px;
  }
  .cp-drawer-head span {
    color: white;
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: .12em;
    text-transform: uppercase;
  }
  .cp-drawer-head small {
    color: var(--silver-soft);
    font-size: .7rem;
    font-weight: 700;
  }
  .cp-drawer-head button {
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 12px;
    background: rgba(255,255,255,.07);
    color: white;
  }
  .cp-drawer-nav {
    min-height: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 16px 18px max(20px, env(safe-area-inset-bottom));
    overflow-y: auto;
  }
  .cp-drawer-nav > a:not(.cp-drawer-cta) {
    min-height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 0 10px;
    border-bottom: 1px solid rgba(255,255,255,.07);
    color: rgba(255,255,255,.84);
    font-size: .95rem;
    font-weight: 750;
    transition: color .16s ease, padding-left .16s ease;
  }
  .cp-drawer-nav > a:not(.cp-drawer-cta):hover {
    padding-left: 14px;
    color: white;
  }
  .cp-drawer-nav > a:not(.cp-drawer-cta) svg {
    flex: none;
    color: var(--silver-dark);
  }
  .cp-drawer-nav .cp-drawer-cta {
    min-height: 52px;
    margin-top: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 16px;
    border-radius: 11px;
    background: var(--wa);
    color: white;
    font-size: .92rem;
    font-weight: 900;
    box-shadow: 0 14px 28px rgba(0,0,0,.28);
  }

  .cp-hero {
    position: relative;
    padding: 178px 0 64px;
    background:
      radial-gradient(760px 440px at 88% 4%, rgba(195,201,210,.12), transparent 62%),
      linear-gradient(168deg, #0a0b0d 0%, var(--black) 45%, var(--steel) 100%);
    color: white;
    overflow: hidden;
  }
  .cp-hero::before {
    content: "";
    position: absolute;
    top: 34px;
    right: -130px;
    width: 580px;
    height: 580px;
    background: url("/images/campioni/campioni-logo.png") center / contain no-repeat;
    opacity: .05;
    filter: grayscale(1);
    pointer-events: none;
  }
  .cp-hero .cp-wrap {
    position: relative;
    z-index: 1;
  }
  .cp-hero-grid {
    display: grid;
    gap: 38px;
  }
  .cp-kicker {
    margin: 0 0 12px;
    color: var(--silver-soft);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: .16em;
    text-transform: uppercase;
  }
  .cp-hero .cp-kicker { color: var(--silver); }
  .cp-hero h1 {
    margin: 0 0 16px;
    font-size: clamp(2rem, 5.4vw, 3.2rem);
  }
  .cp-hero h1 span {
    color: var(--silver);
    display: block;
    background: linear-gradient(115deg, #f4f6f9 0%, #aeb6c2 34%, #e9ecf1 52%, #8b93a0 78%, #c9cfd8 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .cp-hero-lead {
    margin: 0 0 26px;
    max-width: 580px;
    color: rgba(255,255,255,.84);
    font-size: 1.06rem;
  }
  .cp-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .cp-button {
    min-height: 52px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 22px;
    border-radius: 9px;
    font-size: 15px;
    font-weight: 900;
    transition: transform .16s ease, background .16s ease, color .16s ease;
  }
  .cp-button:hover { transform: translateY(-1px); }
  .cp-button-wa {
    background: linear-gradient(165deg, #2dd571 0%, #1fae57 100%);
    color: white;
    box-shadow: 0 10px 24px rgba(6,7,9,.32);
  }
  .cp-button-wa:hover {
    background: linear-gradient(165deg, #2bc96b 0%, #189a4c 100%);
    box-shadow: 0 14px 30px rgba(6,7,9,.42);
  }
  .cp-button-outline {
    border: 1.5px solid rgba(255,255,255,.38);
    color: white;
  }
  .cp-button-outline:hover {
    border-color: var(--silver);
    color: var(--silver);
    background: rgba(255,255,255,.06);
  }
  .cp-hero-service {
    margin: 14px 0 0;
    color: rgba(255,255,255,.6);
    font-size: .92rem;
  }
  .cp-trust-strip {
    margin-top: 26px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .cp-trust-strip span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 14px;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 999px;
    background: rgba(255,255,255,.06);
    color: rgba(255,255,255,.88);
    font-size: .84rem;
    font-weight: 700;
  }
  .cp-trust-strip svg { color: var(--silver); }

  .cp-hero-media {
    position: relative;
    max-width: 520px;
  }
  .cp-photo-frame {
    position: relative;
    z-index: 1;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.18);
    box-shadow: 0 24px 60px rgba(0,0,0,.5);
  }
  .cp-photo-frame::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(180deg, transparent 58%, rgba(6,7,9,.38) 100%);
    pointer-events: none;
  }
  .cp-photo-frame::after {
    content: "";
    position: absolute;
    inset: 10px;
    z-index: 2;
    border: 1px solid rgba(195,201,210,.35);
    border-radius: 10px;
    pointer-events: none;
  }
  .cp-photo-frame img {
    width: 100%;
    height: auto;
  }
  .cp-hero-note {
    position: relative;
    z-index: 3;
    margin: -30px 16px 0;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 14px 18px;
    border-left: 3px solid var(--silver-soft);
    border-radius: 10px;
    background: var(--white);
    color: var(--ink);
    box-shadow: 0 16px 34px rgba(0,0,0,.32);
  }
  .cp-hero-note svg {
    margin-top: 2px;
    flex: none;
    color: var(--silver-dark);
  }
  .cp-hero-note div { display: grid; gap: 3px; }
  .cp-hero-note span {
    color: var(--silver-dark);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: .12em;
    text-transform: uppercase;
  }
  .cp-hero-note strong {
    font-size: .94rem;
    line-height: 1.35;
  }

  .cp-confidence {
    position: relative;
    background: #0a0b0d;
    color: white;
    padding: 30px 0;
  }
  .cp-confidence::before,
  .cp-band::before,
  .cp-final::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 4%, rgba(195,201,210,.45) 50%, transparent 96%);
  }
  .cp-confidence-grid {
    display: grid;
    gap: 20px;
  }
  .cp-confidence-grid div {
    display: grid;
    gap: 4px;
    padding-left: 14px;
    border-left: 2px solid var(--silver-soft);
  }
  .cp-confidence-grid strong { font-size: .98rem; }
  .cp-confidence-grid span {
    color: rgba(255,255,255,.62);
    font-size: .88rem;
    line-height: 1.45;
  }

  .cp-section { padding: 72px 0; }
  .cp-section-soft { background: var(--paper); }

  .cp-divider {
    width: min(1160px, calc(100% - 40px));
    margin: -18px auto 26px;
    display: flex;
    align-items: center;
    gap: 18px;
    color: var(--silver-dark);
  }
  .cp-divider::before,
  .cp-divider::after {
    content: "";
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(107,114,128,.38));
  }
  .cp-divider::after {
    background: linear-gradient(90deg, rgba(107,114,128,.38), transparent);
  }
  .cp-divider span {
    width: 42px;
    height: 42px;
    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(107,114,128,.32);
    border-radius: 999px;
    background: linear-gradient(160deg, rgba(255,255,255,.95) 0%, rgba(232,235,239,.95) 100%);
    box-shadow: 0 4px 14px rgba(16,17,20,.07), inset 0 1px 0 rgba(255,255,255,.9);
  }
  .cp-publico .cp-divider { margin: -14px auto 24px; }
  .cp-section-head {
    max-width: 680px;
    margin-bottom: 40px;
  }
  .cp-section-head .cp-kicker {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }
  .cp-section-head .cp-kicker::before {
    content: "";
    width: 28px;
    height: 2px;
    flex: none;
    border-radius: 2px;
    background: linear-gradient(90deg, var(--silver-dark), rgba(107,114,128,0));
  }
  .cp-section-head h2 {
    margin: 0 0 12px;
    color: var(--black);
    font-size: clamp(1.6rem, 3.6vw, 2.25rem);
  }
  .cp-section-head p:last-child {
    margin: 0;
    color: var(--muted);
  }

  .cp-publico { padding: 64px 0; }
  .cp-publico-grid {
    margin: 0;
    padding: 0;
    display: grid;
    gap: 12px;
    list-style: none;
  }
  .cp-publico-grid li {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px 16px;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: var(--white);
    font-size: .96rem;
    font-weight: 700;
    box-shadow: 0 6px 18px rgba(16,17,20,.05);
    transition: transform .16s ease, border-color .16s ease, box-shadow .16s ease;
  }
  .cp-publico-grid li:hover {
    transform: translateY(-2px);
    border-color: rgba(154,161,171,.55);
    box-shadow: 0 12px 26px rgba(16,17,20,.09);
  }
  .cp-publico-grid svg {
    flex: none;
    box-sizing: content-box;
    padding: 9px;
    border-radius: 10px;
    border: 1px solid rgba(16,17,20,.07);
    background: linear-gradient(160deg, rgba(16,17,20,.03) 0%, rgba(16,17,20,.08) 100%);
    color: var(--ink);
  }

  .cp-card-grid {
    display: grid;
    gap: 18px;
  }
  .cp-card {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 26px 24px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: var(--white);
    box-shadow: 0 8px 26px rgba(16,17,20,.06);
    overflow: hidden;
    transition: transform .16s ease, box-shadow .16s ease, border-color .16s ease;
  }
  .cp-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--silver) 0%, var(--silver-dark) 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .3s ease;
  }
  .cp-card:hover::before { transform: scaleX(1); }
  .cp-card:hover {
    transform: translateY(-3px);
    border-color: rgba(154,161,171,.55);
    box-shadow: 0 16px 34px rgba(16,17,20,.12);
  }
  .cp-card-featured {
    border-color: rgba(63,118,82,.45);
    background: linear-gradient(160deg, #f7fbf8 0%, #eef6f0 100%);
  }
  .cp-card-featured::before {
    background: linear-gradient(90deg, #5c996f 0%, var(--green) 100%);
  }
  .cp-card-featured:hover { border-color: rgba(63,118,82,.65); }
  .cp-icon {
    width: 46px;
    height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    border-radius: 11px;
    background: linear-gradient(160deg, rgba(16,17,20,.04) 0%, rgba(16,17,20,.1) 100%);
    border: 1px solid rgba(16,17,20,.08);
    color: var(--black);
  }
  .cp-card-featured .cp-icon {
    background: rgba(63,118,82,.14);
    color: var(--green);
  }
  .cp-card h3 {
    margin: 0 0 8px;
    color: var(--black);
    font-size: 1.14rem;
  }
  .cp-card > p {
    margin: 0 0 14px;
    color: var(--muted);
    font-size: .94rem;
  }
  .cp-card ul {
    margin: 0 0 18px;
    padding: 0;
    display: grid;
    gap: 7px;
    list-style: none;
  }
  .cp-card li {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--ink);
    font-size: .9rem;
    font-weight: 600;
  }
  .cp-card li svg { color: var(--green); flex: none; }
  .cp-card > a {
    margin-top: auto;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--black);
    font-size: .92rem;
    font-weight: 900;
  }
  .cp-card > a:hover { color: var(--green); }

  .cp-band {
    position: relative;
    padding: 72px 0;
    background:
      radial-gradient(600px 320px at 10% 100%, rgba(195,201,210,.1), transparent 60%),
      linear-gradient(160deg, #0a0b0d 0%, var(--graphite) 100%);
    color: white;
  }
  .cp-band-grid {
    display: grid;
    gap: 34px;
    align-items: center;
  }
  .cp-band h2 {
    margin: 0 0 14px;
    font-size: clamp(1.55rem, 3.4vw, 2.15rem);
  }
  .cp-band-copy > p {
    margin: 0 0 22px;
    max-width: 580px;
    color: rgba(255,255,255,.82);
  }
  .cp-band-list {
    margin: 0 0 26px;
    padding: 0;
    display: grid;
    gap: 12px;
    list-style: none;
  }
  .cp-band-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: rgba(255,255,255,.9);
    font-size: .96rem;
    font-weight: 600;
  }
  .cp-band-list svg {
    margin-top: 3px;
    flex: none;
    color: var(--silver);
  }
  .cp-band-deadline {
    margin: 16px 0 0;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    max-width: 520px;
    color: rgba(255,255,255,.62);
    font-size: .88rem;
  }
  .cp-band-deadline svg { margin-top: 3px; flex: none; color: var(--silver); }
  .cp-band-media {
    max-width: 460px;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.16);
    box-shadow: 0 22px 48px rgba(0,0,0,.45);
  }
  .cp-band-media img {
    width: 100%;
    height: auto;
  }

  .cp-steps {
    display: grid;
    gap: 18px;
  }
  .cp-step {
    position: relative;
    padding: 26px 24px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: var(--white);
    box-shadow: 0 6px 20px rgba(16,17,20,.05);
  }
  .cp-step {
    transition: transform .16s ease, border-color .16s ease, box-shadow .16s ease;
  }
  .cp-step:hover {
    transform: translateY(-2px);
    border-color: rgba(154,161,171,.5);
    box-shadow: 0 14px 30px rgba(16,17,20,.1);
  }
  .cp-step > span {
    position: absolute;
    top: 16px;
    right: 20px;
    font-family: Georgia, "Times New Roman", serif;
    font-style: italic;
    font-size: 2.1rem;
    font-weight: 700;
    line-height: 1;
    background: linear-gradient(160deg, #c3c9d2 0%, #848c98 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: rgba(154,161,171,.55);
  }
  .cp-step h3 {
    margin: 0 0 6px;
    color: var(--black);
    font-size: 1.06rem;
  }
  .cp-step p {
    margin: 0;
    color: var(--muted);
    font-size: .92rem;
  }

  .cp-about-grid {
    display: grid;
    gap: 40px;
    align-items: center;
  }
  .cp-about-image {
    position: relative;
    max-width: 420px;
  }
  .cp-about-image > img {
    border-radius: 16px;
    border: 1px solid var(--line);
    box-shadow: 0 20px 44px rgba(16,17,20,.18);
  }
  .cp-about-badge {
    position: absolute;
    right: -14px;
    bottom: -24px;
    width: 108px;
    height: 108px;
    border-radius: 999px;
    overflow: hidden;
    border: 4px solid var(--white);
    background: var(--white);
    box-shadow: 0 16px 34px rgba(16,17,20,.24);
  }
  .cp-about-badge img { width: 100%; height: 100%; object-fit: cover; }
  .cp-about-copy h2 {
    display: grid;
    gap: 6px;
    margin: 0 0 16px;
    color: var(--black);
    font-size: clamp(1.7rem, 3.6vw, 2.25rem);
  }
  .cp-about-copy h2 em {
    color: var(--silver-dark);
    font-size: .8rem;
    font-style: normal;
    font-weight: 800;
    letter-spacing: .12em;
    text-transform: uppercase;
  }
  .cp-about-copy > p {
    margin: 0 0 14px;
    color: var(--muted);
  }
  .cp-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin: 24px 0;
    padding: 18px 16px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: linear-gradient(160deg, #ffffff 0%, #eef0f3 100%);
  }
  .cp-stats div {
    display: grid;
    gap: 2px;
    text-align: center;
  }
  .cp-stats strong {
    color: var(--black);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.1;
  }
  .cp-stats span {
    color: var(--muted);
    font-size: .78rem;
    font-weight: 700;
    line-height: 1.3;
  }
  .cp-check-list {
    margin: 0;
    padding: 0;
    display: grid;
    gap: 10px;
    list-style: none;
  }
  .cp-check-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: var(--ink);
    font-size: .96rem;
    font-weight: 600;
  }
  .cp-check-list svg {
    margin-top: 3px;
    flex: none;
    color: var(--green);
  }

  .cp-faq-grid {
    display: grid;
    gap: 30px;
  }
  .cp-faq-grid h2 {
    margin: 0 0 12px;
    color: var(--black);
    font-size: clamp(1.6rem, 3.4vw, 2.1rem);
  }
  .cp-faq-grid > div > p {
    margin: 0;
    color: var(--muted);
  }
  .cp-faq-list {
    display: grid;
    gap: 12px;
  }
  .cp-faq-item {
    border: 1px solid var(--line);
    border-radius: 12px;
    background: var(--white);
    overflow: hidden;
    box-shadow: 0 4px 14px rgba(16,17,20,.04);
  }
  .cp-faq-item button {
    width: 100%;
    min-height: 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 14px 18px;
    border: 0;
    background: transparent;
    color: var(--black);
    text-align: left;
    font-size: 1rem;
    font-weight: 800;
  }
  .cp-faq-item button:hover { color: var(--green); }
  .cp-faq-item button svg {
    flex: none;
    transition: transform .18s ease;
  }
  .cp-faq-item button[aria-expanded="true"] svg { transform: rotate(180deg); }
  .cp-faq-item {
    transition: border-color .16s ease;
  }
  .cp-faq-item:hover { border-color: rgba(154,161,171,.5); }
  .cp-faq-answer {
    display: grid;
    grid-template-rows: 0fr;
    visibility: hidden;
    transition: grid-template-rows .32s ease, visibility 0s .32s;
  }
  .cp-faq-answer > div { overflow: hidden; }
  .cp-faq-answer.is-open {
    grid-template-rows: 1fr;
    visibility: visible;
    transition: grid-template-rows .32s ease;
  }
  .cp-faq-answer p {
    margin: 0;
    padding: 0 18px 18px;
    color: var(--muted);
    font-size: .95rem;
  }

  .cp-final {
    position: relative;
    padding: 76px 0;
    background:
      radial-gradient(680px 380px at 92% 0%, rgba(195,201,210,.12), transparent 60%),
      linear-gradient(165deg, #0a0b0d 0%, var(--black) 60%, var(--steel) 100%);
    color: white;
  }
  .cp-final-grid {
    display: grid;
    gap: 38px;
    align-items: start;
  }
  .cp-final h2 {
    margin: 0 0 14px;
    font-size: clamp(1.7rem, 3.8vw, 2.35rem);
  }
  .cp-final > .cp-wrap > div > p {
    margin: 0 0 26px;
    max-width: 540px;
    color: rgba(255,255,255,.84);
  }
  .cp-contact-list {
    margin: 28px 0 0;
    padding: 0;
    display: grid;
    gap: 16px;
    list-style: none;
  }
  .cp-contact-list li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: .95rem;
  }
  .cp-contact-list svg {
    margin-top: 3px;
    flex: none;
    color: var(--silver);
  }
  .cp-contact-list a {
    color: rgba(255,255,255,.9);
    text-decoration: underline;
    text-decoration-color: rgba(255,255,255,.28);
    text-underline-offset: 3px;
  }
  .cp-contact-list a:hover { color: var(--silver); }
  .cp-contact-list span { color: rgba(255,255,255,.9); }

  .cp-final-form {
    position: relative;
    padding: 26px 24px;
    border: 1px solid rgba(255,255,255,.14);
    border-radius: 16px;
    background: rgba(255,255,255,.05);
    overflow: hidden;
  }
  .cp-final-form::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(195,201,210,.65), transparent);
  }
  .cp-final-form h3 {
    margin: 0 0 18px;
    font-size: 1.15rem;
  }
  .cp-form {
    display: grid;
    gap: 14px;
  }
  .cp-form label {
    display: grid;
    gap: 7px;
    font-size: .88rem;
    font-weight: 700;
    color: rgba(255,255,255,.85);
  }
  .cp-form label small {
    font-weight: 500;
    color: rgba(255,255,255,.5);
  }
  .cp-form input,
  .cp-form textarea {
    width: 100%;
    padding: 13px 14px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 9px;
    background: rgba(255,255,255,.07);
    color: white;
    font: inherit;
    font-size: .95rem;
    resize: vertical;
  }
  .cp-form input::placeholder,
  .cp-form textarea::placeholder { color: rgba(255,255,255,.4); }
  .cp-form input:focus,
  .cp-form textarea:focus {
    outline: 2px solid var(--silver);
    outline-offset: 1px;
  }
  .cp-form-note {
    margin: 0;
    color: rgba(255,255,255,.52);
    font-size: .8rem;
    line-height: 1.45;
  }

  .cp-map {
    grid-column: 1 / -1;
    display: grid;
    gap: 0;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 14px;
    overflow: hidden;
    background: rgba(255,255,255,.05);
  }
  .cp-map iframe {
    display: block;
    width: 100%;
    height: 340px;
    border: 0;
    filter: saturate(.92);
  }
  .cp-map-link {
    min-height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0 16px;
    border-top: 1px solid rgba(255,255,255,.14);
    color: rgba(255,255,255,.88);
    font-size: .92rem;
    font-weight: 800;
  }
  .cp-map-link:hover { color: var(--silver); }
  .cp-map-link svg { color: var(--silver); }

  .cp-footer {
    padding: 44px 0 110px;
    background: #060709;
    color: rgba(255,255,255,.64);
  }
  .cp-footer-grid {
    display: grid;
    gap: 0;
  }
  .cp-footer-top {
    display: grid;
    gap: 28px;
    padding-bottom: 30px;
  }
  .cp-footer-brand {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .cp-footer-brand > img {
    width: 76px;
    height: 76px;
    flex: none;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,.2);
  }
  .cp-footer-brand > div {
    display: grid;
    gap: 6px;
  }
  .cp-footer-brand strong {
    color: white;
    font-size: 1.05rem;
  }
  .cp-footer-brand span {
    color: var(--silver-soft);
    font-size: .72rem;
    font-weight: 800;
    letter-spacing: .12em;
    line-height: 1.45;
    text-transform: uppercase;
  }
  .cp-footer-links {
    display: grid;
    gap: 8px;
    font-size: .9rem;
  }
  .cp-footer-links > strong {
    margin-bottom: 4px;
    color: white;
    font-size: .76rem;
    letter-spacing: .12em;
    text-transform: uppercase;
  }
  .cp-footer-links span {
    padding-left: 12px;
    border-left: 2px solid var(--silver-dark);
  }
  .cp-footer-legal {
    padding: 22px;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 12px;
    background: rgba(255,255,255,.035);
  }
  .cp-footer-legal h2 {
    margin: 0 0 14px;
    color: var(--silver);
    font-size: .75rem;
    letter-spacing: .14em;
    text-transform: uppercase;
  }
  .cp-footer-legal-grid {
    display: grid;
    gap: 14px;
  }
  .cp-footer-legal p {
    margin: 0;
    font-size: .82rem;
    line-height: 1.6;
  }
  .cp-footer-credit {
    margin: 22px 0 0;
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px;
    border-top: 1px solid rgba(255,255,255,.08);
    font-size: .88rem;
  }
  .cp-footer-credit a {
    color: var(--silver);
    font-weight: 800;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .cp-footer-credit a:hover { color: white; }

  .cp-floating-wa {
    position: fixed;
    z-index: 60;
    right: 18px;
    bottom: 18px;
    width: 56px;
    height: 56px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    background: var(--wa);
    color: white;
    border: 2px solid rgba(255,255,255,.92);
    box-shadow: 0 14px 30px rgba(0,0,0,.4), 0 0 0 0 rgba(255,255,255,.72);
    transition: transform .16s ease;
    animation: cp-wa-pulse 3.6s ease-out infinite;
  }
  .cp-floating-wa:hover {
    transform: translateY(-3px);
    animation-play-state: paused;
  }
  @keyframes cp-wa-pulse {
    0% {
      box-shadow: 0 14px 30px rgba(0,0,0,.4), 0 0 0 0 rgba(255,255,255,.72);
    }
    70% {
      box-shadow: 0 14px 30px rgba(0,0,0,.4), 0 0 0 10px rgba(255,255,255,0);
    }
    100% {
      box-shadow: 0 14px 30px rgba(0,0,0,.4), 0 0 0 0 rgba(255,255,255,0);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    @keyframes cp-hero-enter {
      from { opacity: 0; transform: translateY(18px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .cp-hero-copy {
      animation: cp-hero-enter .65s cubic-bezier(.22, 1, .36, 1) both;
    }
    .cp-hero-media {
      animation: cp-hero-enter .72s .1s cubic-bezier(.22, 1, .36, 1) both;
    }

    .cp-motion-ready .cp-reveal > .cp-wrap {
      opacity: 0;
      transform: translateY(22px);
      transition:
        opacity .58s ease,
        transform .68s cubic-bezier(.22, 1, .36, 1);
      will-change: opacity, transform;
    }
    .cp-motion-ready .cp-reveal.is-visible > .cp-wrap {
      opacity: 1;
      transform: translateY(0);
    }

    .cp-motion-ready .cp-reveal .cp-card,
    .cp-motion-ready .cp-reveal .cp-step,
    .cp-motion-ready .cp-reveal .cp-publico-grid li,
    .cp-motion-ready .cp-reveal .cp-faq-item {
      opacity: 0;
      transform: translateY(12px);
      transition:
        opacity .42s ease,
        transform .52s cubic-bezier(.22, 1, .36, 1),
        box-shadow .16s ease;
    }
    .cp-motion-ready .cp-reveal.is-visible .cp-card,
    .cp-motion-ready .cp-reveal.is-visible .cp-step,
    .cp-motion-ready .cp-reveal.is-visible .cp-publico-grid li,
    .cp-motion-ready .cp-reveal.is-visible .cp-faq-item {
      opacity: 1;
      transform: translateY(0);
    }
    .cp-motion-ready .cp-reveal.is-visible .cp-card:hover {
      transform: translateY(-3px);
    }
    .cp-motion-ready .cp-reveal.is-visible :is(.cp-card, .cp-step, .cp-publico-grid li, .cp-faq-item):nth-child(2) { transition-delay: .05s; }
    .cp-motion-ready .cp-reveal.is-visible :is(.cp-card, .cp-step, .cp-publico-grid li, .cp-faq-item):nth-child(3) { transition-delay: .1s; }
    .cp-motion-ready .cp-reveal.is-visible :is(.cp-card, .cp-step, .cp-publico-grid li, .cp-faq-item):nth-child(4) { transition-delay: .15s; }
    .cp-motion-ready .cp-reveal.is-visible :is(.cp-card, .cp-step, .cp-publico-grid li, .cp-faq-item):nth-child(n+5) { transition-delay: .2s; }
  }

  @media (prefers-reduced-motion: reduce) {
    .cp-floating-wa { animation: none; }
  }

  @media (min-width: 720px) {
    .cp-confidence-grid { grid-template-columns: repeat(2, 1fr); }
    .cp-publico-grid { grid-template-columns: repeat(2, 1fr); }
    .cp-card-grid { grid-template-columns: repeat(2, 1fr); }
    .cp-steps { grid-template-columns: repeat(2, 1fr); }
    .cp-faq-grid { grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr); }
    .cp-final-grid { grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr); }
    .cp-footer-top {
      grid-template-columns: minmax(0, 1.2fr) minmax(0, .8fr);
      align-items: start;
    }
    .cp-footer-legal-grid {
      grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr);
      gap: 28px;
    }
  }

  @media (min-width: 1080px) {
    .cp-desktop-nav { display: flex; }
    .cp-nav-cta { display: inline-flex; }
    .cp-menu-button { display: none; }
    .cp-menu-overlay,
    .cp-mobile-drawer { display: none !important; }
  }

  @media (min-width: 1000px) {
    .cp-hero { padding: 196px 0 88px; }
    .cp-hero-grid {
      grid-template-columns: minmax(0, 1.05fr) minmax(0, .95fr);
      gap: 56px;
      align-items: center;
    }
    .cp-hero-media { justify-self: end; }
    .cp-confidence-grid { grid-template-columns: repeat(4, 1fr); }
    .cp-publico-grid { grid-template-columns: repeat(3, 1fr); }
    .cp-card-grid { grid-template-columns: repeat(3, 1fr); }
    .cp-band-grid { grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr); }
    .cp-band-media { justify-self: end; }
    .cp-steps { grid-template-columns: repeat(4, 1fr); }
    .cp-about-grid { grid-template-columns: minmax(0, .85fr) minmax(0, 1.15fr); }
  }

  @media (max-width: 719px) {
    .cp-actions { flex-direction: column; align-items: stretch; }
    .cp-button { width: 100%; }
    .cp-hero-media { margin: 0 auto; }
    .cp-brand { flex: 1 1 auto; min-width: 0; }
    .cp-brand-name { font-size: 14px; }
    .cp-brand-name small { font-size: 7.6px; letter-spacing: .08em; }
    .cp-about-badge { right: 0; }
    .cp-preview-back span { display: none; }
    .cp-preview-site span { display: none; }
    .cp-preview-site { border: 0; }
  }

  @media (max-width: 340px) {
    .cp-brand-name small { display: none; }
  }
`;
