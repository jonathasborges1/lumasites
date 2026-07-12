"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Accessibility,
  ArrowLeft,
  ArrowRight,
  Bike,
  CalendarDays,
  Car,
  CheckCircle2,
  ChevronDown,
  Clock3,
  CreditCard,
  ExternalLink,
  Fish,
  Flame,
  Instagram,
  MapPin,
  Menu,
  Music4,
  Phone,
  Salad,
  Soup,
  Sparkles,
  Star,
  Sun,
  UsersRound,
  UtensilsCrossed,
  Wifi,
  X,
} from "lucide-react";

const WA = `https://wa.me/5592994302424?text=${encodeURIComponent(
  "Olá! Vim pelo site do La Finca e gostaria de reservar uma mesa.",
)}`;
const WA_MENU = `https://wa.me/5592994302424?text=${encodeURIComponent(
  "Olá! Vim pelo site do La Finca e gostaria de ver o cardápio completo.",
)}`;
const INSTAGRAM = "https://www.instagram.com/lafincarestaurantee/";
const PHONE_DISPLAY = "(92) 99430-2424";
const PHONE_TEL = "tel:+5592994302424";
const ADDRESS = "R. Diogo de Mendonça Furtado, 143 — Dom Pedro, Manaus/AM";
const MAPS = "https://maps.app.goo.gl/c95FGkAEC9qcWTS39";
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  "Restaurante Colombiano e Peruano La Finca, R. Diogo de Mendonça Furtado, 143 - Dom Pedro, Manaus - AM",
)}&output=embed&hl=pt-BR&z=16`;

const nav = [
  { href: "#sabores", label: "Sabores" },
  { href: "#musica", label: "Música ao vivo" },
  { href: "#experiencia", label: "A casa" },
  { href: "#horarios", label: "Horários" },
  { href: "#contato", label: "Contato" },
];

const pratos = [
  {
    icon: Fish,
    origem: "Clássico peruano",
    title: "Ceviche Mixto",
    text: "Peixe branco e frutos do mar marinados na hora com limão, cebola-roxa e um toque de pimenta. O prato mais pedido da casa.",
    highlight: true,
  },
  {
    icon: Flame,
    origem: "Direto de Lima",
    title: "Lomo Saltado",
    text: "Tiras de filé salteadas em fogo alto com cebola, tomate e batatas douradas — o encontro da cozinha peruana com o wok.",
  },
  {
    icon: Soup,
    origem: "Sabor do Caribe latino",
    title: "Mofongo",
    text: "Banana-da-terra amassada com alho e torresmo, coroada com carne suculenta ao molho da casa. Comida de alma latina.",
  },
  {
    icon: UtensilsCrossed,
    origem: "Tradição colombiana",
    title: "Empanadas Colombianas",
    text: "Massa de milho dourada e crocante com recheios generosos, servidas com ají colombiano para abrir a noite.",
  },
];

const faqs = [
  {
    q: "Precisa reservar mesa?",
    a: "Nas sextas e sábados, quando a casa recebe música ao vivo, a reserva é muito recomendada — as mesas mais próximas da pista saem primeiro. É só chamar no WhatsApp (92) 99430-2424 e garantir o seu lugar.",
  },
  {
    q: "Quais dias têm música ao vivo?",
    a: "As noites de sexta e sábado são embaladas por bandas ao vivo com salsa, merengue, forró e ritmos latinos, com pista de dança liberada. No domingo, o clima é de almoço em família.",
  },
  {
    q: "Quais são os horários de funcionamento?",
    a: "Sexta a partir das 17h até a madrugada, sábado do almoço até a madrugada e domingo do almoço até as 22h. Para datas especiais e feriados, confirme a programação pelo WhatsApp ou Instagram.",
  },
  {
    q: "Vocês têm delivery?",
    a: "Sim! Os pratos à la carte também saem para delivery e retirada. Peça pelo WhatsApp e receba os sabores da Colômbia e do Peru em casa.",
  },
  {
    q: "Aceitam cartão? Tem estacionamento?",
    a: "Aceitamos os principais cartões de crédito e débito. A casa conta com estacionamento gratuito, área externa arborizada, Wi-Fi e acesso para cadeirantes.",
  },
  {
    q: "Onde fica o La Finca?",
    a: "No bairro Dom Pedro, na R. Diogo de Mendonça Furtado, 143 — Manaus/AM. É fácil de chegar: abra a rota no Google Maps pelo botão do site e venha nos visitar.",
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

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const id = `faq-${index}`;

  return (
    <div className="lf-faq-item">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{q}</span>
        <ChevronDown size={20} aria-hidden="true" />
      </button>
      <div id={id} hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function LaFincaPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Restaurante Colombiano e Peruano La Finca",
    servesCuisine: ["Colombiana", "Peruana", "Latina"],
    telephone: "+55 92 99430-2424",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Diogo de Mendonça Furtado, 143",
      addressLocality: "Manaus",
      addressRegion: "AM",
      postalCode: "69040-460",
      addressCountry: "BR",
    },
    hasMap: MAPS,
    sameAs: [INSTAGRAM],
    priceRange: "$$",
    acceptsReservations: "True",
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
    <main className="lf-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <a className="lf-skip" href="#conteudo">
        Pular para o conteúdo
      </a>

      <div className="lf-preview-bar" role="note" aria-label="Aviso de proposta">
        <Link
          className="lf-preview-back"
          href="/proposta-comercial"
          aria-label="Voltar para propostas comerciais"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Voltar</span>
        </Link>
        <div className="lf-preview-line">
          <span className="lf-preview-dot" aria-hidden="true" />
          Prévia Conceitual
        </div>
        <span className="lf-preview-sub">
          Proposta elaborada pela{" "}
          <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
            LumaSites.com.br
          </a>
        </span>
        <a
          className="lf-preview-site"
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Instagram</span>
          <ExternalLink size={13} aria-hidden="true" />
        </a>
      </div>

      <header className="lf-header">
        <div className="lf-wrap lf-nav">
          <a href="#inicio" className="lf-brand" aria-label="La Finca — Restaurante Colombiano e Peruano">
            <span className="lf-brand-mark" aria-hidden="true">
              <UtensilsCrossed size={21} strokeWidth={1.9} />
            </span>
            <span className="lf-brand-name">
              La Finca
              <small>Colombiano &amp; Peruano</small>
            </span>
          </a>

          <nav aria-label="Navegação principal" className="lf-desktop-nav">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="lf-nav-cta" href={WA} target="_blank" rel="noopener noreferrer">
            <WaIcon /> Reservar mesa
          </a>

          <button
            className="lf-menu-button"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <nav
          className={`lf-mobile-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Navegação mobile"
        >
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer">
            Reservar pelo WhatsApp
          </a>
        </nav>
      </header>

      <section id="inicio" className="lf-hero" aria-labelledby="hero-title">
        <div className="lf-ribbon" aria-hidden="true" />
        <div className="lf-wrap lf-hero-grid" id="conteudo">
          <div className="lf-hero-copy">
            <p className="lf-kicker">
              Restaurante colombiano e peruano · Dom Pedro, Manaus
            </p>
            <h1 id="hero-title">
              A maior casa <em>latina</em> de Manaus
            </h1>
            <p className="lf-hero-lead">
              Ceviche mixto na chegada, lomo saltado no jantar e salsa na pista
              até a madrugada. A Colômbia e o Peru se encontram aqui — com
              música ao vivo e lugar para toda a família.
            </p>
            <div className="lf-actions">
              <a className="lf-button lf-button-wa" href={WA} target="_blank" rel="noopener noreferrer">
                <WaIcon /> Reservar pelo WhatsApp
              </a>
              <a className="lf-button lf-button-outline" href="#sabores">
                Conhecer os sabores <ArrowRight size={17} />
              </a>
            </div>
            <div className="lf-rating" aria-label="Avaliação no Google">
              <span className="lf-stars" aria-hidden="true">
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} className="lf-star-half" />
              </span>
              <strong>4,5 no Google</strong>
              <span>· mais de 1.200 avaliações</span>
            </div>
            <div className="lf-trust-strip" aria-label="Diferenciais rápidos">
              <span>
                <Music4 size={17} /> Música ao vivo sex &amp; sáb
              </span>
              <span>
                <UsersRound size={17} /> Espaço para família
              </span>
              <span>
                <Car size={17} /> Estacionamento gratuito
              </span>
            </div>
          </div>

          <div className="lf-hero-media">
            <div className="lf-ticket">
              <div className="lf-ticket-top">
                <span>Sexta &amp; sábado</span>
                <strong>Noite Latina ao vivo</strong>
                <em>salsa · merengue · forró · ritmos latinos</em>
              </div>
              <div className="lf-ticket-divider" aria-hidden="true" />
              <ul className="lf-ticket-list">
                <li>
                  <Music4 size={17} aria-hidden="true" /> Bandas ao vivo e pista de dança
                </li>
                <li>
                  <Fish size={17} aria-hidden="true" /> Ceviche mixto e lomo saltado
                </li>
                <li>
                  <Sun size={17} aria-hidden="true" /> Domingo: almoço em família
                </li>
                <li>
                  <MapPin size={17} aria-hidden="true" /> Dom Pedro, Manaus/AM
                </li>
              </ul>
              <a href={WA} target="_blank" rel="noopener noreferrer">
                <WaIcon size={16} /> Garantir minha mesa
              </a>
            </div>
            <div className="lf-hero-note">
              <span>La Finca Bar e Restaurante</span>
              <strong>+35 mil seguidores no Instagram acompanham a casa</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="lf-confidence" aria-label="Resumo da experiência">
        <div className="lf-wrap lf-confidence-grid">
          <div>
            <strong>Cozinha típica de verdade</strong>
            <span>Receitas colombianas e peruanas preparadas como na terra natal.</span>
          </div>
          <div>
            <strong>Música ao vivo</strong>
            <span>Bandas latinas às sextas e sábados, com pista de dança aberta.</span>
          </div>
          <div>
            <strong>Ambiente amplo</strong>
            <span>Área externa arborizada e espaço confortável para grupos e famílias.</span>
          </div>
          <div>
            <strong>Fácil de chegar</strong>
            <span>Bairro Dom Pedro, com estacionamento gratuito para clientes.</span>
          </div>
        </div>
      </section>

      <section id="sabores" className="lf-section" aria-labelledby="sabores-title">
        <div className="lf-wrap">
          <div className="lf-section-head">
            <p className="lf-kicker">Cocina latina</p>
            <h2 id="sabores-title">Os sabores que fazem a casa lotar</h2>
            <p>
              Do ceviche fresquinho às empanadas crocantes: pratos típicos da
              Colômbia e do Peru, acompanhados de caipirinhas e coquetéis
              latinos. Peça no salão ou receba em casa.
            </p>
          </div>

          <div className="lf-card-grid">
            {pratos.map((prato) => (
              <article
                key={prato.title}
                className={`lf-card${prato.highlight ? " lf-card-hot" : ""}`}
              >
                {prato.highlight && (
                  <span className="lf-card-badge">
                    <Sparkles size={13} aria-hidden="true" /> Mais pedido
                  </span>
                )}
                <div className="lf-icon" aria-hidden="true">
                  <prato.icon size={22} strokeWidth={1.8} />
                </div>
                <p className="lf-card-origem">{prato.origem}</p>
                <h3>{prato.title}</h3>
                <p>{prato.text}</p>
                <a href={WA_MENU} target="_blank" rel="noopener noreferrer">
                  Pedir pelo WhatsApp <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>

          <div className="lf-menu-note">
            <Salad size={18} aria-hidden="true" />
            <p>
              O cardápio completo tem muito mais: petiscos, pratos à la carte,
              sobremesas típicas e bebidas.{" "}
              <a href={WA_MENU} target="_blank" rel="noopener noreferrer">
                Peça o cardápio pelo WhatsApp
              </a>{" "}
              ou receba em casa pelo delivery.
            </p>
          </div>
        </div>
      </section>

      <section id="musica" className="lf-night" aria-labelledby="musica-title">
        <div className="lf-wrap lf-night-grid">
          <div className="lf-night-copy">
            <p className="lf-kicker">Música ao vivo</p>
            <h2 id="musica-title">Quando a banda começa, ninguém fica sentado</h2>
            <p>
              Às sextas e sábados, o La Finca vira a pista latina de Manaus:
              bandas ao vivo tocando salsa, merengue, forró e os ritmos que
              atravessam a América Latina — até a madrugada.
            </p>
            <ul className="lf-night-list">
              <li>
                <CheckCircle2 size={18} aria-hidden="true" /> Bandas colombianas e peruanas ao vivo
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden="true" /> Pista de dança aberta para o público
              </li>
              <li>
                <CheckCircle2 size={18} aria-hidden="true" /> Mesas próximas da pista por reserva
              </li>
            </ul>
            <a className="lf-button lf-button-wa" href={WA} target="_blank" rel="noopener noreferrer">
              <WaIcon /> Reservar para a noite latina
            </a>
          </div>
          <div className="lf-night-panel" aria-hidden="true">
            <div className="lf-night-eq">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <p className="lf-night-genres">
              <span>Salsa</span>
              <span>Merengue</span>
              <span>Forró</span>
              <span>Cumbia</span>
              <span>Bachata</span>
            </p>
            <p className="lf-night-tag">Sexta &amp; sábado · até a madrugada</p>
          </div>
        </div>
      </section>

      <section id="experiencia" className="lf-section lf-section-soft" aria-labelledby="experiencia-title">
        <div className="lf-wrap lf-about-grid">
          <div className="lf-about-copy">
            <p className="lf-kicker">A casa</p>
            <h2 id="experiencia-title">
              La Finca
              <em>Um pedaço da Colômbia e do Peru em Manaus</em>
            </h2>
            <p>
              Mais do que um restaurante, o La Finca é um ponto de encontro da
              comunidade latina e dos manauaras que amam boa comida e boa
              música. No almoço, clima de família; à noite, a energia da
              América Latina toma conta do salão.
            </p>
            <p>
              O ambiente é amplo e arborizado, com área externa, atendimento
              acolhedor e aquela hospitalidade que faz todo mundo se sentir em
              casa — seja para um almoço de domingo ou para dançar até tarde.
            </p>
            <div className="lf-stats" aria-label="Números da casa">
              <div>
                <strong>4,5★</strong>
                <span>nota no Google</span>
              </div>
              <div>
                <strong>+1.200</strong>
                <span>avaliações de clientes</span>
              </div>
              <div>
                <strong>+35 mil</strong>
                <span>seguidores no Instagram</span>
              </div>
            </div>
          </div>
          <ul className="lf-feature-list" aria-label="Comodidades">
            <li>
              <Car size={19} aria-hidden="true" />
              <div>
                <strong>Estacionamento gratuito</strong>
                <span>Chegue de carro sem preocupação.</span>
              </div>
            </li>
            <li>
              <CreditCard size={19} aria-hidden="true" />
              <div>
                <strong>Cartões aceitos</strong>
                <span>Crédito e débito das principais bandeiras.</span>
              </div>
            </li>
            <li>
              <Bike size={19} aria-hidden="true" />
              <div>
                <strong>Delivery e retirada</strong>
                <span>Os pratos da casa na sua mesa, em casa.</span>
              </div>
            </li>
            <li>
              <Accessibility size={19} aria-hidden="true" />
              <div>
                <strong>Acessível para cadeirantes</strong>
                <span>Estrutura pensada para receber todo mundo.</span>
              </div>
            </li>
            <li>
              <Wifi size={19} aria-hidden="true" />
              <div>
                <strong>Wi-Fi para clientes</strong>
                <span>Poste a noite latina em tempo real.</span>
              </div>
            </li>
            <li>
              <UsersRound size={19} aria-hidden="true" />
              <div>
                <strong>Grupos e comemorações</strong>
                <span>Mesas amplas para aniversários e encontros.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="horarios" className="lf-section" aria-labelledby="horarios-title">
        <div className="lf-wrap">
          <div className="lf-section-head">
            <p className="lf-kicker">Horários &amp; localização</p>
            <h2 id="horarios-title">Programe sua visita</h2>
            <p>
              O fim de semana começa na sexta à tarde e só termina no domingo à
              noite. Confirme a programação de datas especiais pelo WhatsApp.
            </p>
          </div>

          <div className="lf-hours-grid">
            <div className="lf-hours-card">
              <div className="lf-hours-day">
                <span className="lf-hours-label">
                  <CalendarDays size={17} aria-hidden="true" /> Sexta-feira
                </span>
                <strong>17h até a madrugada</strong>
                <em>Noite latina com banda ao vivo</em>
              </div>
              <div className="lf-hours-day">
                <span className="lf-hours-label">
                  <CalendarDays size={17} aria-hidden="true" /> Sábado
                </span>
                <strong>11h até a madrugada</strong>
                <em>Almoço, jantar e pista de dança</em>
              </div>
              <div className="lf-hours-day">
                <span className="lf-hours-label">
                  <CalendarDays size={17} aria-hidden="true" /> Domingo
                </span>
                <strong>11h30 às 22h</strong>
                <em>Almoço em família</em>
              </div>
              <p className="lf-hours-note">
                <Clock3 size={15} aria-hidden="true" /> Segunda a quinta a casa
                descansa — e volta com tudo na sexta.
              </p>
            </div>

            <div className="lf-map">
              <iframe
                src={MAPS_EMBED}
                title="Mapa com a localização do La Finca: R. Diogo de Mendonça Furtado, 143, Dom Pedro, Manaus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                className="lf-map-link"
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={16} aria-hidden="true" /> Ver rotas no Google Maps
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="duvidas" className="lf-section lf-section-soft" aria-labelledby="faq-title">
        <div className="lf-wrap lf-faq-grid">
          <div>
            <p className="lf-kicker">Perguntas frequentes</p>
            <h2 id="faq-title">Tudo o que você precisa saber antes de vir</h2>
            <p>
              Reservas, música ao vivo, delivery e estrutura da casa — as
              respostas para as dúvidas mais comuns de quem vai visitar o La
              Finca pela primeira vez.
            </p>
          </div>
          <div className="lf-faq-list">
            {faqs.map((item, index) => (
              <FAQItem key={item.q} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="lf-final" aria-labelledby="contato-title">
        <div className="lf-wrap lf-final-grid">
          <div>
            <p className="lf-kicker">Reservas &amp; contato</p>
            <h2 id="contato-title">Sua mesa na noite latina está a uma mensagem</h2>
            <p>
              Chame no WhatsApp para reservar mesa, pedir o cardápio ou
              combinar aquela comemoração em grupo. A gente responde rapidinho.
            </p>
            <a className="lf-button lf-button-wa" href={WA} target="_blank" rel="noopener noreferrer">
              <WaIcon /> Reservar pelo WhatsApp
            </a>
          </div>
          <ul className="lf-contact-list">
            <li>
              <Phone size={18} aria-hidden="true" />
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <Instagram size={18} aria-hidden="true" />
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                @lafincarestaurantee
              </a>
            </li>
            <li>
              <MapPin size={18} aria-hidden="true" />
              <a href={MAPS} target="_blank" rel="noopener noreferrer">
                {ADDRESS}
              </a>
            </li>
            <li>
              <Clock3 size={18} aria-hidden="true" />
              <span>Sex, 17h–madrugada · Sáb, 11h–madrugada · Dom, 11h30–22h</span>
            </li>
          </ul>
        </div>
      </section>

      <footer className="lf-footer">
        <div className="lf-wrap lf-footer-grid">
          <div className="lf-footer-brand">
            <strong>La Finca — Restaurante Colombiano e Peruano</strong>
            <p>
              Cozinha típica latina, música ao vivo e hospitalidade no coração
              do Dom Pedro, em Manaus. Esta página é uma prévia conceitual e
              não substitui os canais oficiais do restaurante.
            </p>
          </div>
          <div className="lf-footer-links" aria-label="Resumo da casa">
            <span>Cozinha colombiana e peruana</span>
            <span>Música ao vivo às sextas e sábados</span>
            <span>Dom Pedro · Manaus/AM</span>
          </div>
          <p className="lf-footer-credit">
            <span>Site criado por</span>
            <Link href="/" aria-label="Luma Sites">
              Luma Sites
            </Link>
          </p>
        </div>
      </footer>

      <a
        className="lf-floating-wa"
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Reservar pelo WhatsApp"
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
  .lf-page, .lf-page * { box-sizing: border-box; }
  .lf-page {
    --night: #1b0f08;
    --night-soft: #2c160a;
    --night-warm: #3d1e0c;
    --paper: #faf3e7;
    --paper-soft: #f3e8d5;
    --white: #ffffff;
    --ink: #2b1a10;
    --muted: #5d4634;
    --line: #e6d8c2;
    --terra: #c8501e;
    --terra-deep: #9c3a12;
    --gold: #e9a13b;
    --gold-light: #f4c069;
    --lime: #7fa650;
    --wa: #25c366;
    min-height: 100vh;
    overflow-x: clip;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--font-body, Inter), Inter, system-ui, -apple-system, "Segoe UI", sans-serif;
    font-size: 17px;
    line-height: 1.6;
  }
  .lf-page h1, .lf-page h2, .lf-page h3 {
    font-family: Georgia, "Times New Roman", serif;
    line-height: 1.18;
  }
  .lf-page img { display: block; max-width: 100%; }
  .lf-page a { color: inherit; text-decoration: none; }
  .lf-page button { font: inherit; cursor: pointer; }
  .lf-page :focus-visible {
    outline: 3px solid color-mix(in srgb, var(--gold) 75%, white);
    outline-offset: 4px;
    border-radius: 6px;
  }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .lf-page *, .lf-page *::before, .lf-page *::after {
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
  }
  .lf-wrap {
    width: min(1160px, calc(100% - 40px));
    margin: 0 auto;
  }
  .lf-skip {
    position: fixed;
    z-index: 999;
    top: 8px;
    left: 8px;
    transform: translateY(-140%);
    background: var(--gold);
    color: var(--night);
    padding: 10px 14px;
    font-weight: 800;
    border-radius: 6px;
  }
  .lf-skip:focus { transform: translateY(0); }

  .lf-preview-bar {
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
    background: #120a05;
    color: rgba(255,255,255,.72);
    border-bottom: 1px solid rgba(255,255,255,.12);
    text-align: center;
  }
  .lf-preview-back {
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
  .lf-preview-back:hover {
    background: rgba(255,255,255,.08);
    color: white;
  }
  .lf-preview-site {
    position: absolute;
    right: 12px;
    top: 50%;
    min-height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 0 10px;
    border: 1px solid rgba(233,161,59,.45);
    border-radius: 6px;
    color: var(--gold);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
    white-space: nowrap;
    transform: translateY(-50%);
  }
  .lf-preview-site:hover {
    background: rgba(233,161,59,.14);
    color: white;
  }
  .lf-preview-line {
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
  .lf-preview-sub {
    color: rgba(255,255,255,.48);
    font-size: 11px;
    line-height: 1.25;
  }
  .lf-preview-sub a {
    color: var(--gold);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .lf-preview-sub a:hover { color: white; }
  .lf-preview-dot {
    width: 7px;
    height: 7px;
    display: inline-block;
    flex: none;
    border-radius: 999px;
    background: var(--gold);
    box-shadow: 0 0 0 0 rgba(233,161,59,.72);
    animation: lf-dot-pulse 1.7s ease-out infinite;
  }
  @keyframes lf-dot-pulse {
    0% { box-shadow: 0 0 0 0 rgba(233,161,59,.6); }
    100% { box-shadow: 0 0 0 11px rgba(233,161,59,0); }
  }

  .lf-header {
    position: fixed;
    z-index: 70;
    inset: 52px 0 auto;
    background: rgba(27,15,8,.68);
    border-bottom: 1px solid rgba(255,255,255,.12);
    -webkit-backdrop-filter: blur(16px) saturate(1.4);
    backdrop-filter: blur(16px) saturate(1.4);
  }
  .lf-nav {
    height: 74px;
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .lf-brand {
    display: inline-flex;
    align-items: center;
    gap: 11px;
    flex: none;
    min-height: 48px;
  }
  .lf-brand-mark {
    width: 42px;
    height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    border-radius: 12px;
    background: linear-gradient(150deg, var(--gold) 0%, var(--terra) 100%);
    color: var(--night);
  }
  .lf-brand-name {
    display: grid;
    gap: 2px;
    color: white;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 19px;
    font-weight: 700;
    line-height: 1;
  }
  .lf-brand-name small {
    color: var(--gold-light);
    font-family: var(--font-body, Inter), Inter, system-ui, sans-serif;
    font-size: 9px;
    font-weight: 900;
    letter-spacing: .28em;
    text-transform: uppercase;
  }
  .lf-desktop-nav {
    margin-left: auto;
    display: none;
    align-items: center;
    gap: 24px;
  }
  .lf-desktop-nav a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    color: rgba(255,255,255,.75);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: .09em;
    text-transform: uppercase;
  }
  .lf-desktop-nav a:hover { color: var(--gold-light); }
  .lf-nav-cta {
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
  }
  .lf-nav-cta:hover { background: #1fae57; }
  .lf-menu-button {
    margin-left: auto;
    width: 48px;
    height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255,255,255,.24);
    border-radius: 9px;
    background: rgba(255,255,255,.06);
    color: white;
  }
  .lf-mobile-nav {
    display: none;
    flex-direction: column;
    padding: 6px 20px 18px;
    background: var(--night);
    border-bottom: 1px solid rgba(255,255,255,.12);
  }
  .lf-mobile-nav.is-open { display: flex; }
  .lf-mobile-nav a {
    min-height: 48px;
    display: flex;
    align-items: center;
    color: rgba(255,255,255,.85);
    font-size: 15px;
    font-weight: 700;
    border-bottom: 1px solid rgba(255,255,255,.08);
  }
  .lf-mobile-nav a:last-child {
    margin-top: 12px;
    justify-content: center;
    border: 0;
    border-radius: 9px;
    background: var(--wa);
    color: white;
    font-weight: 900;
  }

  .lf-hero {
    position: relative;
    padding: 178px 0 64px;
    background:
      radial-gradient(760px 440px at 88% 6%, rgba(233,161,59,.2), transparent 62%),
      radial-gradient(520px 320px at 4% 96%, rgba(200,80,30,.28), transparent 58%),
      linear-gradient(166deg, #120a05 0%, var(--night) 42%, var(--night-warm) 100%);
    color: white;
  }
  .lf-ribbon {
    position: absolute;
    top: 52px;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      #f5c518 0 26%,
      #2a5caa 26% 38%,
      #ce1126 38% 50%,
      #d91023 50% 66%,
      #f6f2ea 66% 84%,
      #d91023 84% 100%
    );
    opacity: .85;
  }
  .lf-hero-grid {
    display: grid;
    gap: 38px;
  }
  .lf-kicker {
    margin: 0 0 12px;
    color: var(--terra);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: .16em;
    text-transform: uppercase;
  }
  .lf-hero .lf-kicker, .lf-night .lf-kicker, .lf-final .lf-kicker { color: var(--gold-light); }
  .lf-hero h1 {
    margin: 0 0 16px;
    font-size: clamp(2.1rem, 6vw, 3.6rem);
    font-weight: 700;
  }
  .lf-hero h1 em {
    color: var(--gold-light);
    font-style: italic;
  }
  .lf-hero-lead {
    margin: 0 0 26px;
    max-width: 560px;
    color: rgba(255,255,255,.86);
    font-size: 1.06rem;
  }
  .lf-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .lf-button {
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
  .lf-button:hover { transform: translateY(-1px); }
  .lf-button-wa {
    background: var(--wa);
    color: white;
    box-shadow: 0 10px 24px rgba(18,10,5,.32);
  }
  .lf-button-wa:hover { background: #1fae57; }
  .lf-button-outline {
    border: 1.5px solid rgba(255,255,255,.4);
    color: white;
  }
  .lf-button-outline:hover {
    border-color: var(--gold-light);
    color: var(--gold-light);
  }
  .lf-rating {
    margin: 18px 0 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    color: rgba(255,255,255,.72);
    font-size: .95rem;
  }
  .lf-rating strong { color: white; }
  .lf-stars {
    display: inline-flex;
    gap: 2px;
    color: var(--gold);
  }
  .lf-stars svg { fill: currentColor; }
  .lf-star-half { opacity: .45; }
  .lf-trust-strip {
    margin-top: 22px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .lf-trust-strip span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 14px;
    border: 1px solid rgba(255,255,255,.18);
    border-radius: 999px;
    background: rgba(255,255,255,.07);
    color: rgba(255,255,255,.88);
    font-size: .84rem;
    font-weight: 700;
  }
  .lf-trust-strip svg { color: var(--gold-light); }

  .lf-hero-media {
    position: relative;
    max-width: 420px;
  }
  .lf-ticket {
    position: relative;
    display: grid;
    gap: 18px;
    padding: 26px 24px;
    border: 1px solid rgba(233,161,59,.5);
    border-radius: 16px;
    background:
      radial-gradient(300px 160px at 100% 0%, rgba(233,161,59,.16), transparent 60%),
      linear-gradient(165deg, #241209 0%, #331a0b 100%);
    box-shadow: 0 24px 60px rgba(7,3,1,.5);
  }
  .lf-ticket::before {
    content: "";
    position: absolute;
    inset: 8px;
    border: 1px dashed rgba(244,192,105,.35);
    border-radius: 11px;
    pointer-events: none;
  }
  .lf-ticket-top {
    display: grid;
    gap: 5px;
    text-align: center;
  }
  .lf-ticket-top span {
    color: var(--gold);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: .22em;
    text-transform: uppercase;
  }
  .lf-ticket-top strong {
    color: white;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.65rem;
    line-height: 1.15;
  }
  .lf-ticket-top em {
    color: rgba(255,255,255,.66);
    font-size: .86rem;
    font-style: italic;
  }
  .lf-ticket-divider {
    height: 1px;
    background: repeating-linear-gradient(
      90deg,
      rgba(244,192,105,.5) 0 8px,
      transparent 8px 16px
    );
  }
  .lf-ticket-list {
    margin: 0;
    padding: 0;
    display: grid;
    gap: 11px;
    list-style: none;
  }
  .lf-ticket-list li {
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(255,255,255,.88);
    font-size: .92rem;
    font-weight: 600;
  }
  .lf-ticket-list svg { flex: none; color: var(--gold-light); }
  .lf-ticket > a {
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    border-radius: 9px;
    background: var(--wa);
    color: white;
    font-size: .95rem;
    font-weight: 900;
    transition: background .16s ease;
  }
  .lf-ticket > a:hover { background: #1fae57; }
  .lf-hero-note {
    position: relative;
    margin: -18px 16px 0;
    display: grid;
    gap: 3px;
    padding: 14px 18px;
    border-left: 3px solid var(--terra);
    border-radius: 10px;
    background: var(--white);
    color: var(--ink);
    box-shadow: 0 16px 34px rgba(7,3,1,.3);
  }
  .lf-hero-note span {
    color: var(--terra-deep);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: .14em;
    text-transform: uppercase;
  }
  .lf-hero-note strong {
    font-size: .95rem;
    line-height: 1.35;
  }

  .lf-confidence {
    background: #120a05;
    border-top: 1px solid rgba(255,255,255,.1);
    color: white;
    padding: 30px 0;
  }
  .lf-confidence-grid {
    display: grid;
    gap: 20px;
  }
  .lf-confidence-grid div {
    display: grid;
    gap: 4px;
    padding-left: 14px;
    border-left: 2px solid var(--gold);
  }
  .lf-confidence-grid strong { font-size: .98rem; }
  .lf-confidence-grid span {
    color: rgba(255,255,255,.66);
    font-size: .88rem;
    line-height: 1.45;
  }

  .lf-section { padding: 72px 0; }
  .lf-section-soft { background: var(--paper-soft); }
  .lf-section-head {
    max-width: 660px;
    margin-bottom: 40px;
  }
  .lf-section-head h2 {
    margin: 0 0 12px;
    color: var(--terra-deep);
    font-size: clamp(1.6rem, 3.6vw, 2.3rem);
  }
  .lf-section-head p:last-child {
    margin: 0;
    color: var(--muted);
  }

  .lf-card-grid {
    display: grid;
    gap: 18px;
  }
  .lf-card {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 26px 24px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: var(--white);
    box-shadow: 0 8px 26px rgba(80,45,20,.07);
    transition: transform .16s ease, box-shadow .16s ease;
  }
  .lf-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 34px rgba(80,45,20,.14);
  }
  .lf-card-hot {
    border-color: rgba(200,80,30,.5);
    background: linear-gradient(160deg, #fffaf2 0%, #fbeeda 100%);
  }
  .lf-card-badge {
    position: absolute;
    top: 16px;
    right: 16px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    border-radius: 999px;
    background: var(--terra);
    color: white;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: .1em;
    text-transform: uppercase;
  }
  .lf-icon {
    width: 46px;
    height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
    border-radius: 11px;
    background: rgba(200,80,30,.1);
    color: var(--terra);
  }
  .lf-card-hot .lf-icon {
    background: rgba(200,80,30,.16);
    color: var(--terra-deep);
  }
  .lf-card-origem {
    margin: 0 0 4px;
    color: var(--terra);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: .12em;
    text-transform: uppercase;
  }
  .lf-card h3 {
    margin: 0 0 8px;
    color: var(--ink);
    font-size: 1.22rem;
  }
  .lf-card > p:not(.lf-card-origem) {
    margin: 0 0 16px;
    color: var(--muted);
    font-size: .94rem;
  }
  .lf-card > a {
    margin-top: auto;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--terra-deep);
    font-size: .92rem;
    font-weight: 900;
  }
  .lf-card > a:hover { color: var(--terra); }
  .lf-menu-note {
    margin-top: 26px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 18px 20px;
    border: 1px dashed rgba(200,80,30,.45);
    border-radius: 12px;
    background: rgba(200,80,30,.05);
  }
  .lf-menu-note svg {
    margin-top: 3px;
    flex: none;
    color: var(--terra);
  }
  .lf-menu-note p {
    margin: 0;
    color: var(--muted);
    font-size: .95rem;
  }
  .lf-menu-note a {
    color: var(--terra-deep);
    font-weight: 800;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .lf-menu-note a:hover { color: var(--terra); }

  .lf-night {
    padding: 72px 0;
    background:
      radial-gradient(620px 340px at 10% 100%, rgba(200,80,30,.25), transparent 60%),
      radial-gradient(520px 300px at 95% 0%, rgba(233,161,59,.14), transparent 58%),
      linear-gradient(160deg, #120a05 0%, var(--night-soft) 100%);
    color: white;
  }
  .lf-night-grid {
    display: grid;
    gap: 38px;
    align-items: center;
  }
  .lf-night h2 {
    margin: 0 0 14px;
    font-size: clamp(1.55rem, 3.4vw, 2.2rem);
  }
  .lf-night p {
    margin: 0 0 22px;
    max-width: 560px;
    color: rgba(255,255,255,.84);
  }
  .lf-night-list {
    margin: 0 0 26px;
    padding: 0;
    display: grid;
    gap: 10px;
    list-style: none;
  }
  .lf-night-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: rgba(255,255,255,.9);
    font-size: .96rem;
    font-weight: 600;
  }
  .lf-night-list svg {
    margin-top: 3px;
    flex: none;
    color: var(--gold-light);
  }
  .lf-night-panel {
    display: grid;
    gap: 22px;
    justify-items: center;
    max-width: 400px;
    padding: 34px 28px;
    border: 1px solid rgba(233,161,59,.4);
    border-radius: 16px;
    background: rgba(255,255,255,.04);
    box-shadow: 0 22px 48px rgba(7,3,1,.42);
  }
  .lf-night-eq {
    display: flex;
    align-items: flex-end;
    gap: 7px;
    height: 64px;
  }
  .lf-night-eq span {
    width: 9px;
    border-radius: 4px 4px 0 0;
    background: linear-gradient(180deg, var(--gold-light), var(--terra));
    animation: lf-eq 1.1s ease-in-out infinite alternate;
  }
  .lf-night-eq span:nth-child(1) { height: 34%; animation-delay: 0s; }
  .lf-night-eq span:nth-child(2) { height: 68%; animation-delay: .12s; }
  .lf-night-eq span:nth-child(3) { height: 46%; animation-delay: .24s; }
  .lf-night-eq span:nth-child(4) { height: 92%; animation-delay: .06s; }
  .lf-night-eq span:nth-child(5) { height: 58%; animation-delay: .3s; }
  .lf-night-eq span:nth-child(6) { height: 80%; animation-delay: .18s; }
  .lf-night-eq span:nth-child(7) { height: 40%; animation-delay: .36s; }
  @keyframes lf-eq {
    from { transform: scaleY(.45); }
    to { transform: scaleY(1); }
  }
  .lf-night-genres {
    margin: 0 !important;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
  }
  .lf-night-genres span {
    padding: 7px 13px;
    border: 1px solid rgba(244,192,105,.4);
    border-radius: 999px;
    color: var(--gold-light);
    font-size: .82rem;
    font-weight: 800;
    letter-spacing: .06em;
    text-transform: uppercase;
  }
  .lf-night-tag {
    margin: 0 !important;
    color: rgba(255,255,255,.6);
    font-size: .88rem;
    font-style: italic;
  }

  .lf-about-grid {
    display: grid;
    gap: 40px;
    align-items: start;
  }
  .lf-about-copy h2 {
    display: grid;
    gap: 6px;
    margin: 0 0 16px;
    color: var(--terra-deep);
    font-size: clamp(1.7rem, 3.6vw, 2.3rem);
  }
  .lf-about-copy h2 em {
    color: var(--terra);
    font-family: var(--font-body, Inter), Inter, system-ui, sans-serif;
    font-size: .82rem;
    font-style: normal;
    font-weight: 800;
    letter-spacing: .12em;
    text-transform: uppercase;
  }
  .lf-about-copy > p {
    margin: 0 0 14px;
    color: var(--muted);
  }
  .lf-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin: 24px 0 0;
    padding: 18px 16px;
    border: 1px solid rgba(233,161,59,.5);
    border-radius: 14px;
    background: linear-gradient(160deg, #fffaf2 0%, #f9edd8 100%);
  }
  .lf-stats div {
    display: grid;
    gap: 2px;
    text-align: center;
  }
  .lf-stats strong {
    color: var(--terra-deep);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.5rem;
    line-height: 1.1;
  }
  .lf-stats span {
    color: var(--muted);
    font-size: .78rem;
    font-weight: 700;
    line-height: 1.3;
  }
  .lf-feature-list {
    margin: 0;
    padding: 0;
    display: grid;
    gap: 14px;
    list-style: none;
  }
  .lf-feature-list li {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 16px 18px;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: var(--white);
  }
  .lf-feature-list svg {
    margin-top: 3px;
    flex: none;
    color: var(--terra);
  }
  .lf-feature-list strong {
    display: block;
    color: var(--ink);
    font-size: .96rem;
  }
  .lf-feature-list span {
    color: var(--muted);
    font-size: .87rem;
  }

  .lf-hours-grid {
    display: grid;
    gap: 22px;
  }
  .lf-hours-card {
    display: grid;
    gap: 18px;
    padding: 26px 24px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: var(--white);
    box-shadow: 0 8px 26px rgba(80,45,20,.07);
  }
  .lf-hours-day {
    display: grid;
    gap: 3px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--line);
  }
  .lf-hours-day:last-of-type { border-bottom: 0; padding-bottom: 0; }
  .lf-hours-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--terra);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: .13em;
    text-transform: uppercase;
  }
  .lf-hours-day strong {
    color: var(--ink);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.25rem;
  }
  .lf-hours-day em {
    color: var(--muted);
    font-size: .88rem;
    font-style: italic;
  }
  .lf-hours-note {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--muted);
    font-size: .88rem;
  }
  .lf-hours-note svg { flex: none; color: var(--terra); }

  .lf-map {
    display: grid;
    gap: 0;
    border: 1px solid var(--line);
    border-radius: 14px;
    overflow: hidden;
    background: var(--white);
    box-shadow: 0 8px 26px rgba(80,45,20,.07);
  }
  .lf-map iframe {
    display: block;
    width: 100%;
    height: 340px;
    border: 0;
    filter: saturate(.94);
  }
  .lf-map-link {
    min-height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 0 16px;
    border-top: 1px solid var(--line);
    color: var(--terra-deep);
    font-size: .92rem;
    font-weight: 800;
  }
  .lf-map-link:hover { color: var(--terra); }
  .lf-map-link svg { color: var(--terra); }

  .lf-faq-grid {
    display: grid;
    gap: 30px;
  }
  .lf-faq-grid h2 {
    margin: 0 0 12px;
    color: var(--terra-deep);
    font-size: clamp(1.6rem, 3.4vw, 2.1rem);
  }
  .lf-faq-grid > div > p {
    margin: 0;
    color: var(--muted);
  }
  .lf-faq-list {
    display: grid;
    gap: 12px;
  }
  .lf-faq-item {
    border: 1px solid var(--line);
    border-radius: 12px;
    background: var(--white);
    overflow: hidden;
  }
  .lf-faq-item button {
    width: 100%;
    min-height: 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 14px 18px;
    border: 0;
    background: transparent;
    color: var(--terra-deep);
    text-align: left;
    font-size: 1rem;
    font-weight: 800;
  }
  .lf-faq-item button:hover { color: var(--terra); }
  .lf-faq-item button svg {
    flex: none;
    transition: transform .18s ease;
  }
  .lf-faq-item button[aria-expanded="true"] svg { transform: rotate(180deg); }
  .lf-faq-item div p {
    margin: 0;
    padding: 0 18px 18px;
    color: var(--muted);
    font-size: .95rem;
  }

  .lf-final {
    padding: 76px 0;
    background:
      radial-gradient(680px 380px at 90% 0%, rgba(233,161,59,.18), transparent 60%),
      radial-gradient(480px 300px at 5% 100%, rgba(200,80,30,.3), transparent 58%),
      linear-gradient(165deg, #120a05 0%, var(--night) 60%, var(--night-warm) 100%);
    color: white;
  }
  .lf-final-grid {
    display: grid;
    gap: 38px;
    align-items: start;
  }
  .lf-final h2 {
    margin: 0 0 14px;
    font-size: clamp(1.7rem, 3.8vw, 2.4rem);
  }
  .lf-final p {
    margin: 0 0 26px;
    max-width: 540px;
    color: rgba(255,255,255,.84);
  }
  .lf-contact-list {
    margin: 0;
    padding: 24px 22px;
    display: grid;
    gap: 16px;
    list-style: none;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 14px;
    background: rgba(255,255,255,.05);
  }
  .lf-contact-list li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: .96rem;
  }
  .lf-contact-list svg {
    margin-top: 3px;
    flex: none;
    color: var(--gold-light);
  }
  .lf-contact-list a {
    color: rgba(255,255,255,.9);
    text-decoration: underline;
    text-decoration-color: rgba(255,255,255,.28);
    text-underline-offset: 3px;
  }
  .lf-contact-list a:hover { color: var(--gold-light); }
  .lf-contact-list span { color: rgba(255,255,255,.9); }

  .lf-footer {
    padding: 44px 0 110px;
    background: #0d0703;
    color: rgba(255,255,255,.66);
  }
  .lf-footer-grid {
    display: grid;
    gap: 26px;
  }
  .lf-footer-brand strong {
    display: block;
    margin-bottom: 10px;
    color: white;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.1rem;
  }
  .lf-footer-brand p {
    margin: 0;
    max-width: 430px;
    font-size: .88rem;
    line-height: 1.55;
  }
  .lf-footer-links {
    display: grid;
    gap: 8px;
    font-size: .9rem;
  }
  .lf-footer-links span {
    padding-left: 12px;
    border-left: 2px solid var(--terra);
  }
  .lf-footer-credit {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: .88rem;
  }
  .lf-footer-credit a {
    color: var(--gold-light);
    font-weight: 800;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .lf-footer-credit a:hover { color: white; }

  .lf-floating-wa {
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
    box-shadow: 0 14px 30px rgba(7,3,1,.4);
    transition: transform .16s ease;
  }
  .lf-floating-wa:hover { transform: translateY(-3px); }

  @media (min-width: 720px) {
    .lf-confidence-grid { grid-template-columns: repeat(2, 1fr); }
    .lf-card-grid { grid-template-columns: repeat(2, 1fr); }
    .lf-feature-list { grid-template-columns: repeat(2, 1fr); }
    .lf-hours-grid { grid-template-columns: minmax(0, .85fr) minmax(0, 1.15fr); }
    .lf-faq-grid { grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr); }
    .lf-final-grid { grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr); }
    .lf-footer-grid {
      grid-template-columns: minmax(0, 1.2fr) minmax(0, .8fr);
      align-items: start;
    }
    .lf-footer-credit { grid-column: 1 / -1; }
  }

  @media (min-width: 1000px) {
    .lf-desktop-nav { display: flex; }
    .lf-nav-cta { display: inline-flex; }
    .lf-menu-button { display: none; }
    .lf-mobile-nav { display: none !important; }
    .lf-hero { padding: 196px 0 88px; }
    .lf-hero-grid {
      grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr);
      gap: 56px;
      align-items: center;
    }
    .lf-hero-media { justify-self: end; }
    .lf-confidence-grid { grid-template-columns: repeat(4, 1fr); }
    .lf-card-grid { grid-template-columns: repeat(4, 1fr); }
    .lf-night-grid { grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr); }
    .lf-night-panel { justify-self: end; }
    .lf-about-grid { grid-template-columns: minmax(0, 1.05fr) minmax(0, .95fr); }
  }

  @media (max-width: 719px) {
    .lf-page { font-size: 17px; }
    .lf-actions { flex-direction: column; align-items: stretch; }
    .lf-button { width: 100%; }
    .lf-hero-media { margin: 0 auto; }
    .lf-preview-back span { display: none; }
    .lf-preview-site span { display: none; }
    .lf-preview-site { border: 0; }
  }
`;
