"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  ChevronRight,
  Clock3,
  FileText,
  Gavel,
  GraduationCap,
  HeartHandshake,
  Instagram,
  Landmark,
  MapPin,
  Menu,
  MessageCircle,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react";

const WHATSAPP =
  "https://wa.me/5582982166758?text=Ol%C3%A1%2C%20Bruno.%20Vim%20pelo%20site%20e%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o.";
const INSTAGRAM = "https://www.instagram.com/souadvogadoautista/";
const ADDRESS = "Rua Roland Simons, 185 - Jatiúca, Maceió/AL";
const MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Rua Roland Simons, 185, Jatiúca, Maceió - AL");
const MAPS_EMBED =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("Rua Roland Simons, 185, Jatiúca, Maceió - AL") +
  "&output=embed&hl=pt-BR&z=16";

const themes = [
  {
    icon: Gavel,
    number: "01",
    title: "Direito Criminal",
    text: "Defesa criminal em todas as fases, da investigação ao julgamento, com atendimento imediato em casos de urgência.",
  },
  {
    icon: Stethoscope,
    number: "02",
    title: "Direito da Saúde",
    text: "Orientação sobre acesso a tratamentos, terapias e situações envolvendo SUS e planos de saúde.",
  },
  {
    icon: Brain,
    number: "03",
    title: "Direitos da pessoa autista",
    text: "Informação jurídica sobre proteção, prioridade, acessibilidade, inclusão e combate à discriminação.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "CIPTEA e prioridade",
    text: "Conteúdo claro sobre identificação, atendimento prioritário e caminhos diante de demora ou recusa.",
  },
  {
    icon: GraduationCap,
    number: "05",
    title: "Educação inclusiva",
    text: "Direitos relacionados à escola, adaptações, acessibilidade e acompanhante especializado.",
  },
  {
    icon: Landmark,
    number: "06",
    title: "BPC / LOAS",
    text: "Conteúdo informativo sobre requisitos, documentos e análise individual para acesso ao benefício.",
  },
  {
    icon: FileText,
    number: "07",
    title: "Laudos e documentos",
    text: "Organização de provas, relatórios, protocolos e negativas para pedidos administrativos ou judiciais.",
  },
];

const steps = [
  ["01", "Escuta", "Você explica o que aconteceu, com liberdade e sem juridiquês."],
  ["02", "Análise", "Os documentos e as particularidades do caso são avaliados."],
  ["03", "Orientação", "Os caminhos possíveis são apresentados de forma direta e compreensível."],
];

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#temas", label: "Atuação" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#contato", label: "Contato" },
];

function WaIcon({ size = 21 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}

export default function BrunoLinsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const previousActive = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const desktopMedia = window.matchMedia("(min-width: 901px)");

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
      if (previousActive && document.contains(previousActive)) {
        previousActive.focus();
      } else {
        menuButtonRef.current?.focus();
      }
    };
  }, [menuOpen]);

  return (
    <main className="bruno-site">
      <div className="preview-bar" role="note" aria-label="Aviso de prévia conceitual">
        <Link className="preview-back" href="/proposta-comercial" aria-label="Voltar para propostas comerciais">
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Voltar</span>
        </Link>
        <div className="preview-line">
          <span className="preview-dot" aria-hidden="true" />
          Prévia Conceitual
        </div>
        <span className="preview-sub">
          Proposta elaborada pela{" "}
          <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">LumaSites.com.br</a>
        </span>
        <a className="preview-source" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
          <span>Instagram</span>
          <Instagram size={14} aria-hidden="true" />
        </a>
      </div>

      <a
        className="whatsapp-floating"
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Bruno Lins no WhatsApp"
      >
        <WaIcon />
      </a>

      <header className="header">
        <a className="brand" href="#inicio" aria-label="Bruno Lins - início">
          <span className="brand-mark">BL</span>
          <span><b>Bruno Lins</b><small>Criminal · Saúde · PCD</small></span>
        </a>
        <nav>
          {navLinks.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="header-cta" href={WHATSAPP} target="_blank" rel="noreferrer">
          <MessageCircle size={16} /> Conversar
        </a>
        <button
          ref={menuButtonRef}
          className="menu"
          type="button"
          aria-label="Abrir menu"
          aria-controls="bl-mobile-drawer"
          aria-expanded={menuOpen}
          aria-haspopup="dialog"
          onClick={() => setMenuOpen(true)}
        >
          <Menu aria-hidden="true" />
        </button>
      </header>

      <button
        className={`menu-overlay${menuOpen ? " is-open" : ""}`}
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      <aside
        ref={drawerRef}
        id="bl-mobile-drawer"
        className={`mobile-drawer${menuOpen ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-drawer-head">
          <span><b>Bruno Lins</b><small>Menu</small></span>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <nav className="mobile-drawer-nav" aria-label="Navegação mobile">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}<ChevronRight size={16} aria-hidden="true" />
            </a>
          ))}
          <a
            className="mobile-drawer-cta"
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <MessageCircle size={16} /> Conversar no WhatsApp
          </a>
        </nav>
      </aside>

      <section className="hero" id="inicio">
        <div className="hero-noise" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Direito Criminal · Saúde · PCD</p>
          <h1>Direito que<br />acolhe. <em>Voz que</em><br /><em>transforma.</em></h1>
          <p className="hero-lead">
            Atuação em Direito Criminal, Direito da Saúde e direitos da pessoa com deficiência, com escuta atenta e domínio técnico — e a vivência de quem também é autista.
          </p>
          <div className="hero-actions">
            <a className="primary" href={WHATSAPP} target="_blank" rel="noreferrer">
              Falar com Bruno <ArrowRight size={18} />
            </a>
            <a className="text-link" href="#temas">Conhecer a atuação <ChevronRight size={16} /></a>
          </div>
          <p className="credential"><Check size={14} /> Bruno Lins de Arruda · OAB/AL 6.261</p>
          <p className="credential emergency"><Clock3 size={14} /> Horário comercial · Emergências criminais: atendimento 24 horas</p>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="puzzle p1" />
          <div className="puzzle p2" />
          <div className="puzzle p3" />
          <div className="hero-card">
            <Image src="/images/brunolins/bruno-lins-marca-instagram.jpg" alt="" width={100} height={100} />
            <span>Advogado</span>
            <strong>Professor</strong>
            <em>& Autista</em>
          </div>
        </div>
        <div className="scroll-note">Role para conhecer <span>↓</span></div>
      </section>

      <section className="manifesto" id="sobre">
        <p className="section-tag">Uma advocacia mais humana</p>
        <div className="manifesto-grid">
          <h2>Conhecer é respeitar.<br />Garantir direitos<br />é <i>incluir.</i></h2>
          <div className="manifesto-copy">
            <p className="large">Bruno Lins de Arruda se apresenta como advogado, professor e pessoa autista.</p>
            <p>Atua como Criminalista, com atuação também em Direito da Saúde e nos direitos da pessoa com deficiência (PCD) — o Direito da Saúde é um dos nichos de atuação, não o único.</p>
            <p>Sua comunicação une conhecimento jurídico e vivência pessoal para traduzir direitos em informação clara, prática e acessível. Diagnosticado com TEA e TDAH aos 51 anos, aborda temas ligados à saúde, cidadania, neurodiversidade e inclusão.</p>
            <div className="pill-row">
              <span><Gavel size={15} /> Criminal</span>
              <span><Scale size={15} /> Saúde & PCD</span>
              <span><GraduationCap size={15} /> Ensino</span>
              <span><HeartHandshake size={15} /> Vivência</span>
            </div>
          </div>
        </div>
      </section>

      <section className="themes" id="temas">
        <div className="section-head">
          <div><p className="section-tag light">Áreas de atuação</p><h2>Direito explicado<br />para a <i>vida real.</i></h2></div>
          <p>Três frentes confirmadas: Direito Criminal, Direito da Saúde e direitos da Pessoa com Deficiência (PCD). Os temas abaixo detalham as demandas mais comuns em cada uma.</p>
        </div>
        <div className="theme-grid">
          {themes.map(({ icon: Icon, number, title, text }) => (
            <article key={title}>
              <div className="theme-top"><Icon size={25} /><span>{number}</span></div>
              <h3>{title}</h3><p>{text}</p>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label={`Conversar sobre ${title}`}><ArrowRight size={17} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="conteudo">
        <div className="publication">
          <div className="post-image">
            <Image src="/images/brunolins/bruno-lins-retrato.webp" alt="Publicação de Bruno Lins sobre direitos da pessoa autista" fill sizes="(max-width: 900px) 90vw, 42vw" />
          </div>
          <div className="publication-copy">
            <p className="section-tag">Conteúdo que orienta</p>
            <h2>Informação também é <i>proteção.</i></h2>
            <p>Cartilhas, e-books e conteúdos educativos ajudam pessoas autistas, familiares, cuidadores e profissionais a reconhecer direitos e organizar os próximos passos.</p>
            <ul>
              <li><BookOpen size={18} /> Linguagem simples e didática</li>
              <li><FileText size={18} /> Checklists e modelos práticos</li>
              <li><Sparkles size={18} /> Informação com perspectiva inclusiva</li>
            </ul>
            <a className="dark-link" href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={18} /> Acompanhar no Instagram <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="section-head process-head">
          <div><p className="section-tag light">Como funciona</p><h2>Clareza em cada<br /><i>próximo passo.</i></h2></div>
          <p>Fluxo conceitual de atendimento. Os canais, prazos e condições devem ser validados com o profissional.</p>
        </div>
        <div className="step-grid">
          {steps.map(([n, title, text]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact-symbol"><Scale size={34} /></div>
        <p className="section-tag">Vamos conversar?</p>
        <h2>Seu direito começa<br />com uma conversa <i>clara.</i></h2>
        <p>Entre em contato para apresentar a sua situação e entender os caminhos possíveis.</p>
        <a className="primary dark" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Iniciar conversa no WhatsApp</a>
        <small>
          <MapPin size={13} /> <a href={MAPS} target="_blank" rel="noreferrer">{ADDRESS}</a>
          <br />Horário comercial · Emergências criminais: atendimento 24 horas
        </small>

        <div className="map-embed">
          <iframe
            src={MAPS_EMBED}
            title={`Mapa com a localização do escritório: ${ADDRESS}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a className="map-embed-link" href={MAPS} target="_blank" rel="noreferrer">
            <MapPin size={15} /> Ver rotas no Google Maps
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">BL</span><div><b>Bruno Lins de Arruda</b><small>Criminalista · Direito da Saúde · PCD</small></div></div>
        <div><small>Registro profissional</small><p>OAB/AL 6.261</p></div>
        <div><small>Contato</small><p>(82) 98216-6758</p><p><a href={MAPS} target="_blank" rel="noreferrer">{ADDRESS}</a></p></div>
        <a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={18} /> @souadvogadoautista</a>
      </footer>

      <style>{`
        .hero-noise{position:absolute;inset:0;pointer-events:none}
        .bruno-site{--navy:#10182b;--blue:#80baff;--lilac:#c9baff;--paper:#f4f2ed;--ink:#10182b;background:var(--paper);color:var(--ink);font-family:Arial,Helvetica,sans-serif;overflow:hidden}.bruno-site *{box-sizing:border-box}.back{position:fixed;z-index:90;left:10px;bottom:10px;background:#fff;color:#10182b;text-decoration:none;border-radius:99px;padding:9px 13px;font-size:11px;box-shadow:0 8px 30px #0003}.header{height:82px;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(24px,5vw,76px);background:#f4f2ed;border-bottom:1px solid #10182b1a;position:relative;z-index:10}.brand{display:flex;align-items:center;gap:11px;text-decoration:none;color:var(--ink)}.brand-mark{width:36px;height:36px;border:1px solid var(--ink);display:grid;place-items:center;border-radius:50%;font:700 13px Georgia,serif}.brand b,.brand small{display:block}.brand b{font:600 18px Georgia,serif}.brand small{font-size:8px;text-transform:uppercase;letter-spacing:.16em;margin-top:2px}.header nav{display:flex;gap:35px}.header nav a,.text-link{color:var(--ink);text-decoration:none;font-size:12px}.header-cta,.primary{display:inline-flex;align-items:center;justify-content:center;gap:9px;text-decoration:none}.header-cta{background:var(--navy);color:#fff;padding:12px 18px;font-size:11px}.menu{display:none;border:0;background:none;color:var(--ink)}.menu-overlay{position:fixed;z-index:200;inset:0;border:0;background:#02030566;backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .22s ease,visibility 0s linear .22s}.menu-overlay.is-open{opacity:1;visibility:visible;pointer-events:auto;transition-delay:0s}.mobile-drawer{position:fixed;z-index:201;top:0;right:0;width:min(86vw,340px);height:100vh;height:100dvh;display:flex;flex-direction:column;background:#10182b;border-left:1px solid #ffffff1f;box-shadow:-24px 0 60px #00000077;transform:translateX(104%);visibility:hidden;transition:transform .24s cubic-bezier(.22,1,.36,1),visibility 0s linear .24s}.mobile-drawer.is-open{transform:translateX(0);visibility:visible;transition-delay:0s}.mobile-drawer-head{min-height:78px;display:flex;align-items:center;justify-content:space-between;gap:18px;padding:14px 18px 14px 22px;border-bottom:1px solid #ffffff1a}.mobile-drawer-head b,.mobile-drawer-head small{display:block;color:#fff}.mobile-drawer-head b{font:600 16px Georgia,serif}.mobile-drawer-head small{font-size:9px;color:#8c96aa;text-transform:uppercase;letter-spacing:.16em;margin-top:2px}.mobile-drawer-head button{width:44px;height:44px;flex:0 0 44px;display:inline-flex;align-items:center;justify-content:center;border:1px solid #ffffff2e;border-radius:12px;background:#ffffff12;color:#fff}.mobile-drawer-nav{min-height:0;flex:1;display:flex;flex-direction:column;gap:2px;padding:16px 18px max(20px,env(safe-area-inset-bottom));overflow-y:auto}.mobile-drawer-nav>a:not(.mobile-drawer-cta){min-height:52px;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:0 10px;border-bottom:1px solid #ffffff12;color:#ffffffd6;font-size:.95rem;font-weight:600;text-decoration:none}.mobile-drawer-nav>a:not(.mobile-drawer-cta):hover{color:#fff}.mobile-drawer-nav>a:not(.mobile-drawer-cta) svg{color:#83bcff}.mobile-drawer-nav .mobile-drawer-cta{min-height:52px;margin-top:auto;display:inline-flex;align-items:center;justify-content:center;gap:10px;border-radius:11px;background:#20a75a;color:#fff;font-size:.92rem;font-weight:700;text-decoration:none;box-shadow:0 14px 28px #00000047}.hero{min-height:calc(100vh - 82px);position:relative;display:grid;grid-template-columns:56% 44%;background:var(--paper);padding:80px clamp(24px,7vw,105px) 65px}.hero-copy{position:relative;z-index:2}.eyebrow,.section-tag{font-size:10px;font-weight:700;letter-spacing:.23em;text-transform:uppercase}.eyebrow{display:flex;align-items:center;gap:10px}.eyebrow span{width:30px;height:1px;background:var(--ink)}.hero h1{font:400 clamp(58px,7.3vw,112px)/.86 Georgia,serif;letter-spacing:-.065em;margin:38px 0 32px}.hero h1 em,.manifesto i,.themes i,.content-section i,.process i,.contact i{font-weight:400;color:#448edb}.hero-lead{max-width:570px;font:20px/1.6 Georgia,serif;color:#354052}.hero-actions{display:flex;align-items:center;gap:27px;margin-top:32px}.primary{background:var(--navy);color:#fff;padding:17px 23px;font-size:12px}.text-link{display:flex;align-items:center;gap:5px;border-bottom:1px solid #10182b;padding-bottom:5px}.credential{margin-top:30px;font-size:10px;display:flex;align-items:center;gap:7px;color:#566071}.credential b{color:#a14848}.credential.emergency{margin-top:10px;color:#873e3e;font-weight:700}.hero-art{position:absolute;right:0;top:0;width:48%;height:100%;background:var(--blue);overflow:hidden}.hero-art:after{content:"";position:absolute;inset:0;background:linear-gradient(145deg,#fff2,transparent 40%,#786be227)}.orbit{position:absolute;border:1px solid #10182b30;border-radius:50%}.orbit-one{width:590px;height:590px;right:-100px;top:70px}.orbit-two{width:390px;height:390px;right:40px;top:170px}.hero-card{position:absolute;z-index:3;left:18%;top:24%;width:58%;aspect-ratio:1/1.12;background:#11182a;color:#fff;padding:42px;display:flex;flex-direction:column;justify-content:flex-end;box-shadow:24px 25px 0 #c8b9f2}.hero-card img{width:74px;height:74px;border-radius:50%;position:absolute;top:35px;left:35px}.hero-card span,.hero-card strong,.hero-card em{font:400 clamp(32px,4vw,64px)/.94 Georgia,serif}.hero-card strong{color:#83bcff}.hero-card em{color:#c9baff}.puzzle{position:absolute;width:80px;height:80px;border:18px solid #f5f3ed;border-radius:20px;transform:rotate(18deg);opacity:.9}.p1{right:2%;top:8%}.p2{left:4%;bottom:8%;border-color:#c9baff}.p3{right:9%;bottom:7%;width:50px;height:50px;border-width:12px}.scroll-note{position:absolute;bottom:24px;left:50%;font-size:9px;text-transform:uppercase;letter-spacing:.14em}.scroll-note span{font-size:18px;margin-left:8px}.manifesto{padding:125px clamp(24px,7vw,105px);background:var(--paper)}.section-tag{color:#55769d;margin:0 0 35px}.manifesto-grid{display:grid;grid-template-columns:1fr 1fr;gap:10vw}.manifesto h2,.section-head h2,.publication-copy h2,.contact h2{font:400 clamp(42px,5.2vw,78px)/1.03 Georgia,serif;letter-spacing:-.045em;margin:0}.manifesto-copy{padding-top:8px;max-width:580px}.manifesto-copy p{font-size:15px;line-height:1.8;color:#566071}.manifesto-copy .large{font:24px/1.5 Georgia,serif;color:var(--ink);margin-top:0}.pill-row{display:flex;flex-wrap:wrap;gap:9px;margin-top:30px}.pill-row span{display:flex;align-items:center;gap:7px;border:1px solid #10182b2d;border-radius:99px;padding:10px 14px;font-size:10px;text-transform:uppercase;letter-spacing:.08em}.themes,.process{background:var(--navy);color:#fff;padding:115px clamp(24px,7vw,105px)}.section-head{display:grid;grid-template-columns:1.4fr .6fr;gap:10vw;align-items:end;margin-bottom:65px}.section-tag.light{color:#83bcff}.section-head h2{font-size:clamp(42px,5vw,75px)}.section-head p:last-child{font-size:13px;line-height:1.8;color:#aeb8ca;max-width:410px}.theme-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #ffffff26;border-left:1px solid #ffffff26}.theme-grid article{min-height:310px;padding:32px;border-right:1px solid #ffffff26;border-bottom:1px solid #ffffff26;position:relative;transition:.3s}.theme-grid article:hover{background:#83bcff;color:#10182b}.theme-top{display:flex;justify-content:space-between;color:#83bcff}.theme-grid article:hover .theme-top{color:#10182b}.theme-top span{font:12px Georgia,serif}.theme-grid h3{font:26px Georgia,serif;margin:72px 0 15px}.theme-grid p{font-size:12px;line-height:1.75;color:#adb7c9;max-width:300px}.theme-grid article:hover p{color:#283349}.theme-grid article>a{position:absolute;right:28px;bottom:25px;color:inherit}.content-section{padding:130px clamp(24px,7vw,105px);background:#c7b8ef}.publication{display:grid;grid-template-columns:.82fr 1.18fr;max-width:1200px;margin:auto;box-shadow:0 25px 80px #5b4e8230}.post-image{position:relative;min-height:640px;background:#10182b}.post-image img{object-fit:cover;image-rendering:auto}.publication-copy{background:var(--paper);padding:75px clamp(35px,6vw,90px)}.publication-copy h2{font-size:clamp(45px,5vw,72px);margin-bottom:30px}.publication-copy>p:not(.section-tag){font-size:14px;line-height:1.9;color:#596273}.publication-copy ul{list-style:none;padding:0;margin:30px 0}.publication-copy li{display:flex;align-items:center;gap:12px;padding:13px 0;border-bottom:1px solid #10182b1a;font-size:12px}.dark-link{display:inline-flex;align-items:center;gap:10px;background:#10182b;color:white;text-decoration:none;padding:15px 20px;font-size:11px}.process{background:#17142a}.process-head{margin-bottom:70px}.step-grid{border-top:1px solid #ffffff2b}.step-grid article{display:grid;grid-template-columns:100px 1fr;padding:35px 0;border-bottom:1px solid #ffffff2b}.step-grid article>span{font:20px Georgia,serif;color:#83bcff}.step-grid h3{font:30px Georgia,serif;margin:0 0 8px}.step-grid p{font-size:13px;color:#aeb7ca;margin:0;line-height:1.7}.contact{text-align:center;padding:125px 24px;background:#83bcff}.contact-symbol{width:72px;height:72px;margin:0 auto 35px;border:1px solid #10182b;border-radius:50%;display:grid;place-items:center}.contact .section-tag{color:#10182b}.contact h2{max-width:850px;margin:auto}.contact>p:not(.section-tag){font:19px Georgia,serif;margin:25px auto;max-width:590px}.primary.dark{margin:12px auto 25px}.contact small{display:block;color:#354052;line-height:1.7}.contact small a{color:#10182b;font-weight:700;text-decoration:underline;text-underline-offset:2px}.contact small b{color:#873e3e}.map-embed{position:relative;max-width:640px;margin:35px auto 0;border-radius:14px;overflow:hidden;box-shadow:0 25px 60px #10182b30;border:1px solid #10182b1f}.map-embed iframe{display:block;width:100%;height:320px;border:0}.map-embed-link{position:absolute;left:14px;bottom:14px;display:inline-flex;align-items:center;gap:8px;padding:10px 16px;border-radius:99px;background:#10182b;color:#fff;text-decoration:none;font-size:11px;font-weight:700;letter-spacing:.04em;box-shadow:0 10px 24px #10182b40}.map-embed-link:hover{background:#0a1120}footer{background:#0c1220;color:#fff;padding:55px clamp(24px,7vw,105px);display:grid;grid-template-columns:1.5fr 1fr 1fr auto;gap:35px;align-items:center}footer .footer-brand{display:flex;align-items:center;gap:12px}footer .brand-mark{border-color:#83bcff;color:#83bcff}footer b,footer small{display:block}footer small{font-size:9px;color:#8c96aa;text-transform:uppercase;letter-spacing:.1em}footer p{font-size:12px;margin:7px 0}footer a{color:#fff;text-decoration:none;font-size:11px;display:flex;gap:8px;align-items:center}@media(max-width:900px){.header nav,.header-cta{display:none}.menu{display:block}.hero{grid-template-columns:1fr;padding-top:60px;padding-bottom:420px}.hero h1{font-size:clamp(54px,14vw,82px)}.hero-art{top:auto;bottom:0;width:100%;height:380px}.hero-card{top:35px;left:24%;width:52%;padding:25px}.hero-card img{width:55px;height:55px;top:22px;left:22px}.orbit-one{width:430px;height:430px;top:-30px}.scroll-note{display:none}.manifesto-grid,.section-head,.publication{grid-template-columns:1fr}.manifesto-grid{gap:45px}.theme-grid{grid-template-columns:1fr 1fr}.section-head{gap:25px}.post-image{min-height:520px}.publication-copy{padding:55px 35px}footer{grid-template-columns:1fr 1fr}.back span{display:none}}@media(max-width:560px){.header{height:70px;padding:0 20px}.brand small{display:none}.hero{padding:48px 20px 345px}.hero h1{font-size:52px}.hero-lead{font-size:17px}.hero-actions{align-items:flex-start;flex-direction:column}.hero-art{height:310px}.hero-card{width:60%;left:19%;top:25px;padding:18px}.hero-card span,.hero-card strong,.hero-card em{font-size:27px}.hero-card img{width:42px;height:42px}.manifesto,.themes,.process,.content-section{padding:80px 20px}.manifesto h2,.section-head h2,.publication-copy h2,.contact h2{font-size:42px}.theme-grid{grid-template-columns:1fr}.theme-grid article{min-height:270px}.post-image{min-height:380px}.step-grid article{grid-template-columns:55px 1fr}.contact{padding:90px 20px}.map-embed iframe{height:240px}.map-embed-link{position:static;margin:12px auto 0;width:max-content}footer{grid-template-columns:1fr;padding:45px 24px}.footer-brand{grid-column:1/-1}}
        .preview-bar{position:fixed;z-index:80;inset:0 0 auto;min-height:52px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding:7px 108px;background:#070b14;color:#ffffffb8;border-bottom:1px solid #ffffff1f;text-align:center}.preview-back,.preview-source{position:absolute;top:50%;min-height:36px;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:0 10px;border-radius:6px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;transform:translateY(-50%)}.preview-back{left:12px;color:#ffffff9e}.preview-back:hover{background:#ffffff14;color:#fff}.preview-source{right:12px;border:1px solid #83bcff70;color:#a9d3ff}.preview-source:hover{background:#83bcff1f;color:#fff}.preview-line{display:inline-flex;align-items:center;justify-content:center;gap:8px;color:#fff;font-size:11px;font-weight:800;letter-spacing:.13em;text-transform:uppercase}.preview-sub{color:#ffffff7a;font-size:11px;line-height:1.25}.preview-sub a{color:#a9d3ff;text-decoration:underline;text-underline-offset:2px}.preview-dot{width:7px;height:7px;display:inline-block;flex:none;border-radius:999px;background:#83bcff;animation:preview-dot-pulse 1.7s ease-out infinite}.header{position:sticky;top:52px;z-index:70;margin-top:52px}.hero{min-height:calc(100vh - 134px)}.whatsapp-floating{position:fixed;z-index:90;right:max(18px,env(safe-area-inset-right));bottom:max(18px,env(safe-area-inset-bottom));width:56px;height:56px;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;background:#25c366;color:#fff;border:2px solid #fffffff0;box-shadow:0 18px 42px #25c36652,0 0 0 0 #ffffffb8;text-decoration:none;transition:transform .16s ease;animation:whatsapp-pulse 3.2s ease-out infinite}.whatsapp-floating:hover{transform:translateY(-3px);animation-play-state:paused}.whatsapp-floating:focus-visible{outline:3px solid #10182b;outline-offset:3px}@keyframes preview-dot-pulse{0%{box-shadow:0 0 0 0 #83bcffb8}100%{box-shadow:0 0 0 11px #83bcff00}}@keyframes whatsapp-pulse{0%{box-shadow:0 18px 42px #25c36652,0 0 0 0 #ffffffb8}70%{box-shadow:0 18px 42px #25c36652,0 0 0 14px #ffffff00}100%{box-shadow:0 18px 42px #25c36652,0 0 0 0 #ffffff00}}@media(max-width:560px){.preview-bar{padding:7px 62px}.preview-back,.preview-source{width:40px;min-width:40px;padding:0}.preview-back span,.preview-source span{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}.preview-line{font-size:10px;letter-spacing:.1em}.preview-sub{max-width:210px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:9px}.header{top:52px}.hero{min-height:calc(100vh - 122px)}.whatsapp-floating{right:max(14px,env(safe-area-inset-right));bottom:max(14px,env(safe-area-inset-bottom));width:56px;height:56px}}@media(prefers-reduced-motion:reduce){.preview-dot,.whatsapp-floating{animation:none}}
      `}</style>
    </main>
  );
}
