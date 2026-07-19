"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Banknote,
  Instagram,
  Landmark,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  ScrollText,
  Shield,
  ShieldCheck,
  Sprout,
  Star,
  Users,
  X,
} from "lucide-react";

/**
 * Dados extraídos de https://wesleyveiga.adv.br/ — ver
 * wesleyveiga-previa-conceitual.md para a origem de cada trecho. Único canal
 * de contato real da fonte é o WhatsApp abaixo; não há telefone fixo ou
 * e-mail divulgados publicamente. A identidade, os retratos e as peças visuais
 * desta prévia foram preservados localmente a partir do acervo público da fonte.
 */

const OFFICIAL = "https://wesleyveiga.adv.br/";
const WHATSAPP_URL = "https://wa.me/message/J6J4VVWJIHKXB1";
const OFFICE_ADDRESS = "Av. Manoel Mendes de Camargo, 2190 — Centro, Campo Mourão — PR";
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Av.%20Manoel%20Mendes%20de%20Camargo%2C%202190%2C%20Campo%20Mour%C3%A3o%2C%20PR&z=16&output=embed";
const MAP_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Av.%20Manoel%20Mendes%20de%20Camargo%2C%202190%2C%20Campo%20Mour%C3%A3o%2C%20PR";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/Wesley-Veiga-Advogado-do-Agroneg%C3%B3cio-e-Empresarial-61558998309928/",
    icon: Users,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/wesleyatveiga/",
    icon: Instagram,
  },
  {
    label: "Perfil no Google",
    href: "https://share.google/f3xabGfwtTE5JJhlC",
    icon: Star,
  },
];

function WaIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
    </svg>
  );
}

const NAV_LINKS = [
  { href: "#areas", label: "Áreas de atuação" },
  { href: "#sobre", label: "Sobre" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#localizacao", label: "Localização" },
];

const AREAS = [
  {
    icon: ShieldCheck,
    question: "Seu seguro agrícola ou PROAGROS não pagou o que devia?",
    text: "Análise de laudos, glosas, zoneamento e cálculo de indenizações para reverter negativas injustas.",
  },
  {
    icon: Landmark,
    question: "O banco está cobrando uma cédula rural abusiva?",
    text: "Revisão de cédulas de crédito rural, renegociação de dívidas e defesa judicial contra cobranças indevidas.",
  },
  {
    icon: ScrollText,
    question: "Quer proteger o patrimônio da família e evitar brigas na herança?",
    text: "Planejamento sucessório com holdings e inventários, com foco em blindagem patrimonial e economia fiscal.",
  },
  {
    icon: Banknote,
    question: "Sua empresa está exposta em trabalhista, LGPD ou cobranças?",
    text: "Assessoria empresarial preventiva: trabalhista, adequação à LGPD e gestão de cobranças.",
  },
];

const ABRANGENCIA = ["Paraná", "Santa Catarina", "Mato Grosso do Sul", "Pará", "Maranhão", "Piauí"];

const COMO_FUNCIONA = [
  "Você chama no WhatsApp e explica sua situação.",
  "Wesley entende o caso: seguro, banco, patrimônio ou empresa.",
  "Avaliação do laudo, contrato ou processo envolvido.",
  "Estratégia jurídica definida com base em mais de 10 anos de prática.",
  "Acompanhamento até a resolução do caso.",
];

const DEPOIMENTOS = [
  { src: "/wesleyveiga/depoimento-1.png", alt: "Avaliação de Jussara Santos sobre o atendimento de Wesley Veiga" },
  { src: "/wesleyveiga/depoimento-2.png", alt: "Avaliação de Marcos Simões sobre a atuação de Wesley Veiga no agronegócio" },
  { src: "/wesleyveiga/depoimento-3.png", alt: "Avaliação de Marcelo Escame sobre o atendimento de Wesley Veiga" },
  { src: "/wesleyveiga/depoimento-4.png", alt: "Avaliação de Pedro Benedito Patrício sobre Wesley Veiga" },
];

const FAQ = [
  {
    q: "Meu seguro agrícola negou o pagamento, ainda posso reverter?",
    a: "Na maioria dos casos sim. É preciso analisar o laudo técnico, o zoneamento agrícola aplicado e o motivo da glosa para identificar se a negativa foi indevida.",
  },
  {
    q: "O que é PROAGROS e quando posso acionar?",
    a: "É o mecanismo de garantia vinculado ao crédito rural. Pode ser acionado quando há perda na lavoura coberta e a indenização não foi paga corretamente.",
  },
  {
    q: "Como funciona a revisão de cédula bancária rural?",
    a: "Analisamos os encargos, juros e cláusulas do contrato para identificar abusividades e negociar ou contestar judicialmente a cobrança.",
  },
  {
    q: "Holding rural serve para propriedades pequenas também?",
    a: "Sim. O planejamento sucessório é útil em qualquer tamanho de propriedade quando o objetivo é evitar inventário longo e proteger o patrimônio da família.",
  },
  {
    q: "Atende clientes fora do Paraná?",
    a: "Sim, o escritório atende clientes em Santa Catarina, Mato Grosso do Sul, Pará, Maranhão e Piauí, além do Paraná.",
  },
  {
    q: "Como funciona o primeiro contato?",
    a: "Pelo WhatsApp. Você explica sua situação e Wesley orienta os próximos passos antes de qualquer compromisso.",
  },
];

export default function WesleyVeigaProposalPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ backgroundColor: "#F6F2E9", color: "#2B2419" }}>
      {/* Prévia Conceitual banner */}
      <div
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-center px-4 text-center"
        style={{
          height: "36px",
          backgroundColor: "#2B2419",
          color: "rgba(255,255,255,0.72)",
          fontSize: "11.5px",
          letterSpacing: "0.04em",
        }}
      >
        <span className="flex items-center gap-2 flex-wrap justify-center">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: "#C4972B" }}
            aria-hidden="true"
          />
          <span className="font-medium" style={{ color: "rgba(255,255,255,0.9)" }}>
            Prévia Conceitual
          </span>
          <span className="hidden sm:inline opacity-40">·</span>
          <span className="hidden sm:inline">
            Esta é uma proposta de redesign elaborada pela{" "}
            <a
              href="https://lumasites.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-white"
            >
              LumaSites.com.br
            </a>{" "}
            com base no site real de{" "}
            <a
              href={OFFICIAL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-white"
            >
              wesleyveiga.adv.br
            </a>
          </span>
        </span>
      </div>

      {/* Header */}
      <header
        className="fixed left-0 right-0 z-[90] transition-all duration-300"
        style={{
          top: "36px",
          backgroundColor: scrolled ? "rgba(246,242,233,0.98)" : "rgba(246,242,233,0.9)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid #E4DCC8" : "1px solid rgba(228,220,200,0.5)",
          boxShadow: scrolled ? "0 2px 24px rgba(43,36,25,0.08)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center" aria-label="Wesley Veiga — início">
              <Image
                src="/wesleyveiga/logo.png"
                alt="Wesley Veiga — Advogado do Agronegócio e Empresas"
                width={164}
                height={100}
                className="h-11 w-auto object-contain"
                priority
              />
            </a>

            <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                  style={{ color: "#4A4433" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#2F4A34" }}
              >
                <MessageCircle size={16} aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </div>

            <button
              type="button"
              className="md:hidden p-2 rounded-lg"
              style={{ color: "#2F4A34" }}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t" style={{ borderColor: "#E4DCC8", backgroundColor: "#F6F2E9" }}>
            <div className="max-w-6xl mx-auto px-4 py-3 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium rounded-xl"
                  style={{ color: "#2B2419" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-3 px-4 py-3 text-sm font-semibold rounded-xl text-white"
                style={{ backgroundColor: "#2F4A34" }}
                onClick={() => setMenuOpen(false)}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      <main style={{ paddingTop: "92px" }}>
        {/* Hero */}
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 md:py-20" style={{ backgroundColor: "#2F4A34" }}>
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 15% 20%, rgba(196,151,43,0.35), transparent 45%), radial-gradient(circle at 85% 80%, rgba(92,122,78,0.4), transparent 50%)",
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.02fr_.98fr] gap-10 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6"
                style={{ backgroundColor: "rgba(196,151,43,0.18)", color: "#EBCF8C", border: "1px solid rgba(196,151,43,0.35)" }}
              >
                <Sprout size={14} aria-hidden="true" />
                Advogado do agronegócio e empresas
              </span>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
                style={{ color: "#F6F2E9", fontFamily: "Georgia, serif" }}
              >
                O agro não para. Sua defesa também não.
              </h1>
              <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto lg:mx-0" style={{ color: "rgba(246,242,233,0.85)" }}>
                Proteção jurídica para a lavoura, o crédito, os contratos e o patrimônio de quem
                produz — com atendimento direto de um advogado que conhece a realidade do campo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all hover:scale-[1.02]"
                  style={{ backgroundColor: "#C4972B", color: "#2B2419" }}
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  Falar com Wesley
                </a>
                <a href="#areas" className="text-sm font-semibold underline underline-offset-4" style={{ color: "#F6F2E9" }}>
                  Conhecer áreas de atuação
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-xs" style={{ color: "rgba(246,242,233,.62)" }}>
                <span>OAB/PR 57.417</span>
                <span>Campo Mourão — PR</span>
                <span>Atuação multiestadual</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -inset-4 rounded-[2rem] rotate-3" style={{ border: "1px solid rgba(196,151,43,.4)" }} aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.75rem] shadow-2xl aspect-square">
                <Image
                  src="/wesleyveiga/wesley-milho.jpeg"
                  alt="Wesley Veiga em uma plantação de milho ao pôr do sol"
                  fill
                  sizes="(max-width: 1024px) 90vw, 44vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 p-5 pt-16" style={{ background: "linear-gradient(transparent, rgba(24,39,27,.92))" }}>
                  <p className="text-sm font-semibold" style={{ color: "#F6F2E9" }}>Conexão real entre o campo e o Direito</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Abrangência */}
        <section className="px-4 sm:px-6 lg:px-8 py-8" style={{ backgroundColor: "#EBE4D0", borderBottom: "1px solid #DDD3B8" }}>
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#5C7A4E" }}>
              Atendemos em
            </span>
            {ABRANGENCIA.map((uf) => (
              <span key={uf} className="text-sm font-medium" style={{ color: "#2B2419" }}>
                {uf}
              </span>
            ))}
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[.85fr_1.15fr] gap-10 md:gap-16 items-center">
            <div className="relative min-h-[430px] sm:min-h-[540px] overflow-hidden rounded-[1.75rem]" style={{ backgroundColor: "#E5DDC9" }}>
              <Image
                src="/wesleyveiga/wesley-retrato.jpg"
                alt="Retrato profissional do advogado Wesley Veiga"
                fill
                sizes="(max-width: 768px) 92vw, 40vw"
                className="object-cover object-[center_35%]"
              />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#5C7A4E" }}>
                Quem é Wesley Veiga
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold mt-3 mb-6"
                style={{ color: "#2F4A34", fontFamily: "Georgia, serif" }}
              >
                Da zona rural de Mamborê para a defesa jurídica de quem produz.
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#4A4433" }}>
                Natural de Mamborê, Wesley cresceu na zona rural próxima ao distrito de Piquirivaí.
                Essa origem faz diferença: ele conhece a rotina, os riscos e as decisões de quem
                vive do campo — não apenas a teoria jurídica.
              </p>
              <p className="text-base leading-relaxed mb-7" style={{ color: "#4A4433" }}>
                Hoje atua a partir de Campo Mourão com foco no direito dos agricultores e
                empresários, conectando conhecimento técnico a uma conversa clara e próxima.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl p-4" style={{ backgroundColor: "#EBE4D0" }}>
                  <strong className="block text-xl" style={{ color: "#2F4A34", fontFamily: "Georgia, serif" }}>57.417</strong>
                  <span className="text-xs" style={{ color: "#6E6655" }}>Registro OAB/PR</span>
                </div>
                <div className="rounded-2xl p-4" style={{ backgroundColor: "#EBE4D0" }}>
                  <strong className="block text-xl" style={{ color: "#2F4A34", fontFamily: "Georgia, serif" }}>6 estados</strong>
                  <span className="text-xs" style={{ color: "#6E6655" }}>com atendimento</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Áreas de atuação */}
        <section id="areas" className="px-4 sm:px-6 lg:px-8 py-16 md:py-20" style={{ backgroundColor: "#EBE4D0" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#5C7A4E" }}>
                Áreas de atuação
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold mt-3"
                style={{ color: "#2F4A34", fontFamily: "Georgia, serif" }}
              >
                Qual dessas situações é a sua?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {AREAS.map(({ icon: Icon, question, text }) => (
                <div
                  key={question}
                  className="rounded-2xl p-6 flex flex-col gap-3"
                  style={{ backgroundColor: "#F6F2E9", border: "1px solid #DDD3B8" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(47,74,52,0.1)" }}
                  >
                    <Icon size={20} style={{ color: "#2F4A34" }} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold" style={{ color: "#2B2419" }}>
                    {question}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4A4433" }}>
                    {text}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold mt-1 inline-flex items-center gap-1"
                    style={{ color: "#5C7A4E" }}
                  >
                    Falar sobre isso no WhatsApp →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Imagem institucional da fonte */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-[.85fr_1.15fr] gap-4 md:gap-12 items-end mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[.18em]" style={{ color: "#5C7A4E" }}>
                  Uma atuação integrada
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mt-3" style={{ color: "#2F4A34", fontFamily: "Georgia, serif" }}>
                  O campo e o negócio sob a mesma visão jurídica.
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#4A4433" }}>
                A atuação acompanha a produção, o financiamento, os contratos e a continuidade do
                patrimônio rural — sem separar a fazenda das decisões empresariais.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] aspect-[3/2] shadow-xl" style={{ backgroundColor: "#18271B" }}>
              <Image
                src="/wesleyveiga/agro-hero.png"
                alt="Composição institucional de Wesley Veiga conectando agronegócio e ambiente empresarial"
                fill
                sizes="(max-width: 1200px) 92vw, 1152px"
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#5C7A4E" }}>
                Como funciona
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold mt-3"
                style={{ color: "#2F4A34", fontFamily: "Georgia, serif" }}
              >
                Do primeiro contato à resolução do seu caso
              </h2>
            </div>
            <ol className="space-y-5">
              {COMO_FUNCIONA.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span
                    className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: "#2F4A34", color: "#F6F2E9" }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-base leading-relaxed pt-1" style={{ color: "#4A4433" }}>
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="px-4 sm:px-6 lg:px-8 py-16 md:py-20" style={{ backgroundColor: "#2F4A34" }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#C4972B" }}>
                Depoimentos
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-3" style={{ color: "#F6F2E9", fontFamily: "Georgia, serif" }}>
                A confiança de quem já foi atendido
              </h2>
              <p className="text-sm mt-2" style={{ color: "rgba(246,242,233,0.6)" }}>
                Avaliações reais publicadas no perfil do escritório e apresentadas no site atual.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {DEPOIMENTOS.map((depoimento) => (
                <div
                  key={depoimento.src}
                  className="rounded-2xl p-4 sm:p-5 flex items-center min-h-[154px]"
                  style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(246,242,233,0.12)" }}
                >
                  <Image
                    src={depoimento.src}
                    alt={depoimento.alt}
                    width={620}
                    height={180}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#5C7A4E" }}>
                Dúvidas frequentes
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-3" style={{ color: "#2F4A34", fontFamily: "Georgia, serif" }}>
                Perguntas que produtores e empresários fazem
              </h2>
            </div>
            <div className="space-y-3">
              {FAQ.map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-xl px-5 py-4"
                  style={{ backgroundColor: "#EBE4D0", border: "1px solid #DDD3B8" }}
                >
                  <summary
                    className="cursor-pointer text-sm sm:text-base font-semibold flex items-center justify-between gap-4"
                    style={{ color: "#2B2419" }}
                  >
                    {q}
                    <span className="text-lg group-open:rotate-45 transition-transform" style={{ color: "#5C7A4E" }}>
                      +
                    </span>
                  </summary>
                  <p className="text-sm leading-relaxed mt-3" style={{ color: "#4A4433" }}>
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Localização */}
        <section id="localizacao" className="px-4 sm:px-6 lg:px-8 py-16 md:py-20" style={{ backgroundColor: "#EBE4D0" }}>
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#5C7A4E" }}>
                Atendimento presencial
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-3 mb-4" style={{ color: "#2F4A34", fontFamily: "Georgia, serif" }}>
                Escritório em Campo Mourão
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#4A4433" }}>
                Um ponto de atendimento físico no centro da cidade, com acesso fácil para clientes
                da região. Para atendimento presencial, confirme o horário previamente pelo WhatsApp.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-[1.5rem]" style={{ backgroundColor: "#F6F2E9", border: "1px solid #DDD3B8" }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/wesleyveiga/fachada-escritorio.png"
                    alt="Fachada do local de atendimento na Avenida Manoel Mendes de Camargo, 2190, em Campo Mourão"
                    fill
                    sizes="(max-width: 1024px) 92vw, 48vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 sm:p-6 flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 flex-shrink-0" style={{ color: "#5C7A4E" }} aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#2B2419" }}>{OFFICE_ADDRESS}</p>
                    <p className="text-xs mt-1" style={{ color: "#6E6655" }}>
                      Fachada do local de atendimento exibida no site oficial.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] flex flex-col min-h-[420px]" style={{ backgroundColor: "#F6F2E9", border: "1px solid #DDD3B8" }}>
                <iframe
                  src={MAP_EMBED_URL}
                  title="Mapa do escritório de Wesley Veiga em Campo Mourão"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full flex-1 min-h-[330px] border-0"
                  allowFullScreen
                />
                <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#2B2419" }}>Como chegar</p>
                    <p className="text-xs mt-1" style={{ color: "#6E6655" }}>Abra a rota no Google Maps.</p>
                  </div>
                  <a
                    href={MAP_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#2F4A34" }}
                  >
                    <Navigation size={16} aria-hidden="true" />
                    Traçar rota
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center" style={{ backgroundColor: "#C4972B" }}>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#2B2419", fontFamily: "Georgia, serif" }}>
              Sua fazenda, seu crédito e seu patrimônio merecem defesa de quem entende do campo.
            </h2>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold transition-all hover:scale-[1.02]"
              style={{ backgroundColor: "#2F4A34", color: "#F6F2E9" }}
            >
              <MessageCircle size={18} aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#2B2419" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <Image
                src="/wesleyveiga/logo.png"
                alt="Wesley Veiga — Advogado do Agronegócio e Empresas"
                width={230}
                height={140}
                className="h-20 w-auto object-contain object-left mb-4 brightness-0 invert opacity-90"
              />
              <p className="text-sm leading-relaxed" style={{ color: "rgba(246,242,233,0.5)" }}>
                Advocacia para o agronegócio e empresas. Campo Mourão — PR.
              </p>
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(246,242,233,0.72)" }}>
                  Me conheça melhor
                </p>
                <div className="flex flex-wrap gap-2">
                  {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label} de Wesley Veiga`}
                      title={label}
                      className="w-10 h-10 rounded-full inline-flex items-center justify-center transition-all hover:-translate-y-0.5 hover:bg-white/15"
                      style={{ color: "#F6F2E9", backgroundColor: "rgba(246,242,233,0.08)", border: "1px solid rgba(246,242,233,0.12)" }}
                    >
                      <Icon size={17} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4" style={{ color: "#F6F2E9" }}>
                Áreas de atuação
              </h3>
              <ul className="space-y-2.5">
                {AREAS.map(({ question }) => (
                  <li key={question}>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "rgba(246,242,233,0.5)" }}
                    >
                      {question}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4" style={{ color: "#F6F2E9" }}>
                Escritório
              </h3>
              <ul className="space-y-2.5 text-sm" style={{ color: "rgba(246,242,233,0.5)" }}>
                <li>
                  <a href="#localizacao" className="flex items-start gap-2 transition-colors hover:text-white">
                    <MapPin size={14} className="mt-0.5 flex-shrink-0" aria-hidden="true" />
                    Av. Manoel Mendes de Camargo, 2190 — Centro
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Shield size={14} aria-hidden="true" /> PR · SC · MS · PA · MA · PI
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4" style={{ color: "#F6F2E9" }}>
                Contato
              </h3>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold"
                style={{ backgroundColor: "#2F4A34", color: "#F6F2E9" }}
              >
                <MessageCircle size={15} aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>

          <div
            className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t text-center sm:text-left"
            style={{ borderColor: "rgba(246,242,233,0.08)" }}
          >
            <p className="text-xs" style={{ color: "rgba(246,242,233,0.35)" }}>
              Wesley Veiga Advocacia — Campo Mourão/PR.
            </p>
            <p className="text-xs" style={{ color: "rgba(246,242,233,0.22)" }}>
              Proposta conceitual elaborada por{" "}
              <a
                href="https://lumasites.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white underline"
              >
                LumaSites.com.br
              </a>
            </p>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Wesley Veiga no WhatsApp"
        className="wv-floating-wa"
      >
        <WaIcon size={26} />
      </a>

      <style jsx>{`
        .wv-floating-wa {
          position: fixed;
          right: max(18px, env(safe-area-inset-right));
          bottom: max(18px, env(safe-area-inset-bottom));
          z-index: 95;
          width: 58px;
          height: 58px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: #25c366;
          color: #fff;
          border: 2px solid rgba(255, 255, 255, 0.92);
          box-shadow: 0 18px 42px rgba(37, 195, 102, 0.4), 0 0 0 0 rgba(37, 195, 102, 0.55);
          text-decoration: none;
          transition: transform 0.16s ease;
          animation: wv-wa-pulse 2.6s ease-out infinite;
        }
        .wv-floating-wa:hover {
          transform: translateY(-3px);
          animation-play-state: paused;
        }
        .wv-floating-wa:focus-visible {
          outline: 3px solid #2f4a34;
          outline-offset: 3px;
        }
        @keyframes wv-wa-pulse {
          0% {
            box-shadow: 0 18px 42px rgba(37, 195, 102, 0.4), 0 0 0 0 rgba(37, 195, 102, 0.55);
          }
          70% {
            box-shadow: 0 18px 42px rgba(37, 195, 102, 0.4), 0 0 0 14px rgba(37, 195, 102, 0);
          }
          100% {
            box-shadow: 0 18px 42px rgba(37, 195, 102, 0.4), 0 0 0 0 rgba(37, 195, 102, 0);
          }
        }
        @media (max-width: 560px) {
          .wv-floating-wa {
            right: max(14px, env(safe-area-inset-right));
            bottom: max(14px, env(safe-area-inset-bottom));
            width: 54px;
            height: 54px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .wv-floating-wa {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
