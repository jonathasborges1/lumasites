"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accessibility,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  ExternalLink,
  Facebook,
  FileSearch,
  HandHeart,
  HeartHandshake,
  Instagram,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Sprout,
  Stethoscope,
  X,
} from "lucide-react";

const WA = `https://wa.me/5511961252501?text=${encodeURIComponent(
  "Olá! Vim pelo site e gostaria de falar sobre um benefício do INSS.",
)}`;
const INSTAGRAM = "https://www.instagram.com/socialconsultprev";
const FACEBOOK = "https://www.facebook.com/socialconsultprev";
const PHONE_DISPLAY = "(11) 96125-2501";
const PHONE_TEL = "tel:+5511961252501";
const EMAIL = "contato@socialconsultprev.com.br";
const ADDRESS = "Av. Cangaíba, 2699, sala 5 — Cangaíba, São Paulo/SP";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Av.+Cangaiba+2699+Sao+Paulo+SP";

const IMG = {
  logo: "/images/vivianesantos/viviane-santos-logo.png",
  retrato: "/images/vivianesantos/viviane-santos-retrato-advogada.webp",
  casalIdoso: "/images/vivianesantos/viviane-santos-atendimento-casal-idoso.webp",
  apertoMaos: "/images/vivianesantos/viviane-santos-aperto-maos-cliente-idoso.webp",
  atendimento: "/images/vivianesantos/viviane-santos-advogada-atendimento.webp",
};

const nav = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

const beneficios = [
  {
    icon: Landmark,
    title: "Aposentadorias",
    text: "Análise completa do seu histórico de contribuições para orientar a melhor regra e o melhor caminho junto ao INSS.",
    items: [
      "Aposentadoria por idade",
      "Tempo de contribuição",
      "Regras de transição",
      "Planejamento previdenciário",
      "Revisão de valor",
    ],
  },
  {
    icon: Stethoscope,
    title: "Auxílios por incapacidade",
    text: "Proteção para quem está impossibilitado de trabalhar, do requerimento à conclusão do processo.",
    items: [
      "Auxílio-doença",
      "Aposentadoria por invalidez",
      "Auxílio-acidente",
      "Pensão por morte",
      "Auxílio-reclusão",
    ],
  },
  {
    icon: HandHeart,
    title: "BPC/LOAS e maternidade",
    text: "Amparo para idosos e pessoas com deficiência em situação de vulnerabilidade, e apoio às mães seguradas.",
    items: [
      "BPC para idosos",
      "BPC para pessoas com deficiência",
      "Salário-maternidade",
      "Revisão da vida toda",
    ],
  },
  {
    icon: Sprout,
    title: "Aposentadoria rural",
    text: "Experiência na comprovação de tempo rural e pesca artesanal para aposentadoria rural ou híbrida.",
    items: [
      "Comprovação de tempo rural",
      "Pesca artesanal",
      "Aposentadoria híbrida",
      "Segurado especial",
    ],
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Primeiro contato",
    text: "Você chama no WhatsApp e conta sua situação com suas palavras. Sem juridiquês.",
  },
  {
    icon: FileSearch,
    title: "Análise dos documentos",
    text: "Avaliamos seus documentos e seu histórico no INSS para entender o seu caso.",
  },
  {
    icon: ClipboardCheck,
    title: "Estratégia e proposta",
    text: "Explicamos os caminhos possíveis e a proposta de honorários com total transparência.",
  },
  {
    icon: CalendarClock,
    title: "Acompanhamento até o fim",
    text: "Cuidamos do processo e mantemos você informado(a) em cada etapa, do início à conclusão.",
  },
];

const faqs = [
  {
    q: "Quem tem direito ao BPC/LOAS?",
    a: "Idosos a partir de 65 anos e pessoas com deficiência de qualquer idade, em situação de baixa renda familiar, podem ter direito ao benefício. Não é preciso ter contribuído ao INSS, mas é necessário cumprir os requisitos legais e manter o CadÚnico atualizado. Cada caso deve ser analisado individualmente.",
  },
  {
    q: "Como funciona o salário-maternidade?",
    a: "É um benefício pago à segurada por ocasião do parto ou da adoção. Também pode alcançar desempregadas que ainda estejam no período de graça, MEIs e contribuintes individuais, conforme os requisitos de cada situação. Analisamos o seu caso para verificar o direito.",
  },
  {
    q: "O INSS negou meu pedido. E agora?",
    a: "Uma negativa não é o fim do caminho. Analisamos o motivo da recusa e orientamos os próximos passos: em alguns casos cabe recurso administrativo; em outros, pode ser indicada uma ação judicial.",
  },
  {
    q: "Como funciona o atendimento?",
    a: "Você escolhe: presencial no escritório, na zona leste de São Paulo, ou online pelo WhatsApp e por videochamada, para qualquer lugar do Brasil. Analisamos seu tempo de contribuição e seus documentos para definir a melhor estratégia jurídica.",
  },
  {
    q: "Qual o valor dos honorários?",
    a: "Nossos honorários seguem a tabela da OAB e são apresentados com transparência antes de qualquer contratação, após a primeira conversa para entender o seu caso.",
  },
  {
    q: "Atendem casos de tempo rural?",
    a: "Sim. Temos experiência em comprovação de tempo rural e pesca artesanal para fins de aposentadoria rural ou híbrida, incluindo a organização das provas e documentos necessários.",
  },
  {
    q: "Quanto tempo demora o processo?",
    a: "Depende do benefício e da via escolhida (administrativa ou judicial). Logo na análise inicial explicamos os prazos estimados do seu caso e mantemos você informado(a) sobre cada movimentação.",
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

function BeneficioCard({
  icon: Icon,
  title,
  text,
  items,
  highlight,
}: {
  icon: typeof Landmark;
  title: string;
  text: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <article className={`vs-card${highlight ? " vs-card-gold" : ""}`}>
      <div className="vs-icon" aria-hidden="true">
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
        Falar sobre este benefício <ArrowRight size={15} />
      </a>
    </article>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const id = `faq-${index}`;

  return (
    <div className="vs-faq-item">
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

export default function VivianeSantosPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Social Consult Prev — Advocacia Previdenciária",
    url: "https://socialconsultprev.com.br/",
    image: IMG.logo,
    telephone: "+55 11 96125-2501",
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Cangaíba, 2699, sala 5",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-13:00"],
    areaServed: "Brasil",
    sameAs: [INSTAGRAM, FACEBOOK],
    serviceType: [
      "Direito Previdenciário",
      "BPC/LOAS",
      "Aposentadorias",
      "Benefícios do INSS",
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
    <main className="vs-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <a className="vs-skip" href="#conteudo">
        Pular para o conteúdo
      </a>

      <div className="vs-preview-bar" role="note" aria-label="Aviso de proposta">
        <Link
          className="vs-preview-back"
          href="/proposta-comercial"
          aria-label="Voltar para propostas comerciais"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Voltar</span>
        </Link>
        <div className="vs-preview-line">
          <span className="vs-preview-dot" aria-hidden="true" />
          Prévia Conceitual
        </div>
        <span className="vs-preview-sub">
          Proposta elaborada pela{" "}
          <a href="https://lumasites.com.br" target="_blank" rel="noopener noreferrer">
            LumaSites.com.br
          </a>
        </span>
        <a
          className="vs-preview-site"
          href="https://socialconsultprev.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Site oficial</span>
          <ExternalLink size={13} aria-hidden="true" />
        </a>
      </div>

      <header className="vs-header">
        <div className="vs-wrap vs-nav">
          <a href="#inicio" className="vs-brand" aria-label="Social Consult Prev Advocacia">
            <span className="vs-brand-mark" aria-hidden="true">
              <Scale size={22} strokeWidth={1.9} />
            </span>
            <span className="vs-brand-name">
              SocialConsultPrev
              <small>Advocacia</small>
            </span>
          </a>

          <nav aria-label="Navegação principal" className="vs-desktop-nav">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="vs-nav-cta" href={WA} target="_blank" rel="noopener noreferrer">
            <WaIcon /> WhatsApp
          </a>

          <button
            className="vs-menu-button"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <nav
          className={`vs-mobile-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Navegação mobile"
        >
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={WA} target="_blank" rel="noopener noreferrer">
            Falar no WhatsApp
          </a>
        </nav>
      </header>

      <section id="inicio" className="vs-hero" aria-labelledby="hero-title">
        <div className="vs-wrap vs-hero-grid" id="conteudo">
          <div className="vs-hero-copy">
            <p className="vs-kicker">
              Advocacia previdenciária em São Paulo e online para todo o Brasil
            </p>
            <h1 id="hero-title">
              Seu benefício do INSS analisado com <span>atenção, clareza e respeito</span>
            </h1>
            <p className="vs-hero-lead">
              BPC/LOAS, salário-maternidade, aposentadorias, auxílio-doença e
              pensão por morte. Atendimento humanizado, presencial na zona
              leste de São Paulo ou online para todo o Brasil.
            </p>
            <div className="vs-actions">
              <a className="vs-button vs-button-wa" href={WA} target="_blank" rel="noopener noreferrer">
                <WaIcon /> Falar no WhatsApp
              </a>
              <a className="vs-button vs-button-outline" href="#beneficios">
                Ver benefícios que atendemos <ArrowRight size={17} />
              </a>
            </div>
            <p className="vs-hero-service">
              Resposta em até 24h úteis · Atendimento de segunda a sábado
            </p>
            <div className="vs-trust-strip" aria-label="Diferenciais rápidos">
              <span>
                <BadgeCheck size={17} /> Especialista BPC/LOAS
              </span>
              <span>
                <HeartHandshake size={17} /> Atendimento humanizado
              </span>
              <span>
                <ShieldCheck size={17} /> Transparência em cada etapa
              </span>
            </div>
          </div>

          <div className="vs-hero-media">
            <div className="vs-photo-frame">
              <Image
                src={IMG.retrato}
                alt="Advogada previdenciária em escritório, imagem institucional"
                width={896}
                height={1216}
                priority
                sizes="(max-width: 768px) 86vw, 440px"
              />
            </div>
            <div className="vs-hero-note">
              <span>Direito Previdenciário</span>
              <strong>BPC/LOAS, salário-maternidade e benefícios do INSS</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="vs-confidence" aria-label="Resumo de confiança">
        <div className="vs-wrap vs-confidence-grid">
          <div>
            <strong>Atendimento humanizado</strong>
            <span>Você é ouvido(a) com calma, do primeiro contato à conclusão.</span>
          </div>
          <div>
            <strong>Cada etapa acompanhada</strong>
            <span>Transparência total sobre o andamento do seu processo.</span>
          </div>
          <div>
            <strong>Pedidos negados</strong>
            <span>Experiência na análise de negativas do INSS e nos recursos cabíveis.</span>
          </div>
          <div>
            <strong>Sábados também</strong>
            <span>Segunda a sexta, 08h–18h. Sábados, 09h–13h.</span>
          </div>
        </div>
      </section>

      <section id="beneficios" className="vs-section" aria-labelledby="beneficios-title">
        <div className="vs-wrap">
          <div className="vs-section-head">
            <p className="vs-kicker">Benefícios que atendemos</p>
            <h2 id="beneficios-title">Em qual situação você está?</h2>
            <p>
              Cada benefício tem regras próprias. Encontre o seu caso abaixo e
              fale com a gente pelo WhatsApp para entender os próximos passos.
            </p>
          </div>

          <div className="vs-card-grid">
            {beneficios.map((item, index) => (
              <BeneficioCard key={item.title} {...item} highlight={index === 3} />
            ))}
          </div>
        </div>
      </section>

      <section className="vs-negado" aria-labelledby="negado-title">
        <div className="vs-wrap vs-negado-grid">
          <div className="vs-negado-copy">
            <p className="vs-kicker">Pedido negado?</p>
            <h2 id="negado-title">O INSS negou seu pedido? Isso não é o fim do caminho.</h2>
            <p>
              Grande parte dos pedidos é negada por documentação incompleta ou
              análise equivocada. Avaliamos o motivo da negativa e orientamos
              você sobre os caminhos administrativos e judiciais possíveis para
              buscar o seu direito.
            </p>
            <a className="vs-button vs-button-wa" href={WA} target="_blank" rel="noopener noreferrer">
              <WaIcon /> Quero entender meu caso
            </a>
          </div>
          <div className="vs-negado-media">
            <Image
              src={IMG.apertoMaos}
              alt="Aperto de mãos entre advogado e cliente idoso"
              width={1024}
              height={1024}
              sizes="(max-width: 768px) 86vw, 400px"
            />
          </div>
        </div>
      </section>

      <section id="como-funciona" className="vs-section vs-section-soft" aria-labelledby="process-title">
        <div className="vs-wrap">
          <div className="vs-section-head">
            <p className="vs-kicker">Como funciona</p>
            <h2 id="process-title">Atendimento simples, do jeito que deveria ser</h2>
            <p>
              Sem juridiquês e sem mistério: você entende o que está
              acontecendo em cada etapa do seu processo.
            </p>
          </div>

          <div className="vs-steps">
            {steps.map((step, index) => (
              <article className="vs-step" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div className="vs-icon" aria-hidden="true">
                  <step.icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="vs-section vs-about" aria-labelledby="sobre-title">
        <div className="vs-wrap vs-about-grid">
          <div className="vs-about-image">
            <Image
              src={IMG.casalIdoso}
              alt="Advogada cumprimentando casal de clientes idosos"
              width={1280}
              height={832}
              sizes="(max-width: 768px) 100vw, 520px"
            />
            <Image
              className="vs-about-secondary"
              src={IMG.atendimento}
              alt="Advogada orientando cliente com documentos"
              width={1024}
              height={1024}
              sizes="(max-width: 768px) 60vw, 250px"
            />
          </div>
          <div className="vs-about-copy">
            <p className="vs-kicker">Sobre o escritório</p>
            <h2 id="sobre-title">
              Viviane Santos
              <em>Social Consult Prev — Advocacia Previdenciária</em>
            </h2>
            <p>
              Fundado com o propósito de proteger quem mais precisa, o
              escritório se especializou em tornar o Direito Previdenciário
              acessível a todos: transformamos leis complexas em orientação
              clara, para que seu benefício seja buscado com respeito e
              dignidade.
            </p>
            <p>
              Cuidamos de todo o processo — administrativo ou judicial — com
              seriedade, agilidade e compromisso social, para que você tenha
              tranquilidade do início ao fim.
            </p>
            <div className="vs-stats" aria-label="Números do escritório">
              <div>
                <strong>100+</strong>
                <span>benefícios conquistados</span>
              </div>
              <div>
                <strong>10</strong>
                <span>anos de atuação ética</span>
              </div>
              <div>
                <strong>Seg–Sáb</strong>
                <span>presencial e online</span>
              </div>
            </div>
            <ul className="vs-check-list">
              <li>
                <CheckCircle2 size={18} /> Linguagem simples em todas as etapas.
              </li>
              <li>
                <CheckCircle2 size={18} /> Honorários transparentes, conforme a tabela da OAB.
              </li>
              <li>
                <Accessibility size={18} /> Atendimento acolhedor para idosos e pessoas com deficiência.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="duvidas" className="vs-section vs-section-soft" aria-labelledby="faq-title">
        <div className="vs-wrap vs-faq-grid">
          <div>
            <p className="vs-kicker">Perguntas frequentes</p>
            <h2 id="faq-title">Dúvidas comuns sobre benefícios do INSS</h2>
            <p>
              Respostas diretas para as perguntas que mais recebemos sobre
              BPC/LOAS, aposentadorias, salário-maternidade e pedidos negados.
            </p>
          </div>
          <div className="vs-faq-list">
            {faqs.map((item, index) => (
              <FAQItem key={item.q} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="vs-final" aria-labelledby="contato-title">
        <div className="vs-wrap vs-final-grid">
          <div>
            <p className="vs-kicker">Contato</p>
            <h2 id="contato-title">Fale com quem entende de INSS</h2>
            <p>
              Conte sua situação pelo WhatsApp. Vamos analisar seu caso e
              explicar os próximos passos com clareza — sem juridiquês.
              Retornamos todas as mensagens em até 24 horas úteis.
            </p>
            <a className="vs-button vs-button-wa" href={WA} target="_blank" rel="noopener noreferrer">
              <WaIcon /> Chamar no WhatsApp
            </a>
          </div>
          <ul className="vs-contact-list">
            <li>
              <Phone size={18} aria-hidden="true" />
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </li>
            <li>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </li>
            <li>
              <MapPin size={18} aria-hidden="true" />
              <a href={MAPS} target="_blank" rel="noopener noreferrer">
                {ADDRESS}
              </a>
            </li>
            <li>
              <Clock3 size={18} aria-hidden="true" />
              <span>Seg–Sex, 08h–18h · Sáb, 09h–13h</span>
            </li>
            <li>
              <Instagram size={18} aria-hidden="true" />
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                @socialconsultprev
              </a>
            </li>
            <li>
              <Facebook size={18} aria-hidden="true" />
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">
                /socialconsultprev
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer className="vs-footer">
        <div className="vs-wrap vs-footer-grid">
          <div className="vs-footer-brand">
            <div className="vs-footer-logo">
              <Image
                src={IMG.logo}
                alt="Social Consult Prev Advocacia"
                width={903}
                height={274}
              />
            </div>
            <p>
              As informações deste site possuem caráter informativo e não
              substituem uma consulta jurídica individualizada.
            </p>
          </div>
          <div className="vs-footer-links" aria-label="Áreas de atuação">
            <span>Direito Previdenciário</span>
            <span>BPC/LOAS e salário-maternidade</span>
            <span>Presencial em São Paulo e online para todo o Brasil</span>
          </div>
          <p className="vs-footer-credit">
            <span>Site criado por</span>
            <Link href="/" aria-label="Luma Sites">
              Luma Sites
            </Link>
          </p>
        </div>
      </footer>

      <a
        className="vs-floating-wa"
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
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
  .vs-page, .vs-page * { box-sizing: border-box; }
  .vs-page {
    --navy: #0b2f5f;
    --navy-deep: #071f42;
    --navy-soft: #12407c;
    --paper: #f7f5f0;
    --white: #ffffff;
    --ink: #1c2536;
    --muted: #3d4657;
    --line: #dce1ea;
    --gold: #c9a03d;
    --gold-light: #e3c878;
    --gold-dark: #91702a;
    --wa: #25c366;
    min-height: 100vh;
    overflow-x: clip;
    background: var(--paper);
    color: var(--ink);
    font-family: var(--font-body, Inter), Inter, system-ui, -apple-system, "Segoe UI", sans-serif;
    font-size: 17px;
    line-height: 1.6;
  }
  .vs-page h1, .vs-page h2, .vs-page h3 {
    font-family: Georgia, "Times New Roman", serif;
    line-height: 1.2;
  }
  .vs-page img { display: block; max-width: 100%; }
  .vs-page a { color: inherit; text-decoration: none; }
  .vs-page button { font: inherit; cursor: pointer; }
  .vs-page :focus-visible {
    outline: 3px solid color-mix(in srgb, var(--gold) 70%, white);
    outline-offset: 4px;
    border-radius: 6px;
  }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .vs-page *, .vs-page *::before, .vs-page *::after {
      animation-duration: .01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: .01ms !important;
    }
  }
  .vs-wrap {
    width: min(1160px, calc(100% - 40px));
    margin: 0 auto;
  }
  .vs-skip {
    position: fixed;
    z-index: 999;
    top: 8px;
    left: 8px;
    transform: translateY(-140%);
    background: var(--gold);
    color: var(--navy-deep);
    padding: 10px 14px;
    font-weight: 800;
    border-radius: 6px;
  }
  .vs-skip:focus { transform: translateY(0); }

  .vs-preview-bar {
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
    background: var(--navy-deep);
    color: rgba(255,255,255,.72);
    border-bottom: 1px solid rgba(255,255,255,.12);
    text-align: center;
  }
  .vs-preview-back {
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
  .vs-preview-back:hover {
    background: rgba(255,255,255,.08);
    color: white;
  }
  .vs-preview-site {
    position: absolute;
    right: 12px;
    top: 50%;
    min-height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 0 10px;
    border: 1px solid rgba(201,160,61,.45);
    border-radius: 6px;
    color: var(--gold);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
    white-space: nowrap;
    transform: translateY(-50%);
  }
  .vs-preview-site:hover {
    background: rgba(201,160,61,.14);
    color: white;
  }
  .vs-preview-line {
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
  .vs-preview-sub {
    color: rgba(255,255,255,.48);
    font-size: 11px;
    line-height: 1.25;
  }
  .vs-preview-sub a {
    color: var(--gold);
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .vs-preview-sub a:hover { color: white; }
  .vs-preview-dot {
    width: 7px;
    height: 7px;
    display: inline-block;
    flex: none;
    border-radius: 999px;
    background: var(--gold);
    box-shadow: 0 0 0 0 rgba(201,160,61,.72);
    animation: vs-dot-pulse 1.7s ease-out infinite;
  }
  @keyframes vs-dot-pulse {
    0% { box-shadow: 0 0 0 0 rgba(201,160,61,.6); }
    100% { box-shadow: 0 0 0 11px rgba(201,160,61,0); }
  }

  .vs-header {
    position: fixed;
    z-index: 70;
    inset: 52px 0 auto;
    background: rgba(7,31,66,.62);
    border-bottom: 1px solid rgba(255,255,255,.12);
    -webkit-backdrop-filter: blur(16px) saturate(1.4);
    backdrop-filter: blur(16px) saturate(1.4);
  }
  .vs-nav {
    height: 74px;
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .vs-brand {
    display: inline-flex;
    align-items: center;
    gap: 11px;
    flex: none;
    min-height: 48px;
  }
  .vs-brand-mark {
    width: 42px;
    height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    border-radius: 10px;
    background: linear-gradient(150deg, var(--gold) 0%, var(--gold-dark) 100%);
    color: var(--navy-deep);
  }
  .vs-brand-name {
    display: grid;
    gap: 2px;
    color: white;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 17px;
    font-weight: 700;
    line-height: 1;
  }
  .vs-brand-name small {
    color: var(--gold-light);
    font-family: var(--font-body, Inter), Inter, system-ui, sans-serif;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: .3em;
    text-transform: uppercase;
  }
  .vs-desktop-nav {
    margin-left: auto;
    display: none;
    align-items: center;
    gap: 24px;
  }
  .vs-desktop-nav a {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    color: rgba(255,255,255,.75);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: .09em;
    text-transform: uppercase;
  }
  .vs-desktop-nav a:hover { color: var(--gold-light); }
  .vs-nav-cta {
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
  .vs-nav-cta:hover { background: #1fae57; }
  .vs-menu-button {
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
  .vs-mobile-nav {
    display: none;
    flex-direction: column;
    padding: 6px 20px 18px;
    background: var(--navy-deep);
    border-bottom: 1px solid rgba(255,255,255,.12);
  }
  .vs-mobile-nav.is-open { display: flex; }
  .vs-mobile-nav a {
    min-height: 48px;
    display: flex;
    align-items: center;
    color: rgba(255,255,255,.85);
    font-size: 15px;
    font-weight: 700;
    border-bottom: 1px solid rgba(255,255,255,.08);
  }
  .vs-mobile-nav a:last-child {
    margin-top: 12px;
    justify-content: center;
    border: 0;
    border-radius: 9px;
    background: var(--wa);
    color: white;
    font-weight: 900;
  }

  .vs-hero {
    position: relative;
    padding: 178px 0 64px;
    background:
      radial-gradient(720px 420px at 85% 8%, rgba(201,160,61,.16), transparent 62%),
      linear-gradient(168deg, var(--navy-deep) 0%, var(--navy) 55%, var(--navy-soft) 100%);
    color: white;
  }
  .vs-hero-grid {
    display: grid;
    gap: 38px;
  }
  .vs-kicker {
    margin: 0 0 12px;
    color: var(--gold);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: .16em;
    text-transform: uppercase;
  }
  .vs-hero .vs-kicker { color: var(--gold-light); }
  .vs-hero h1 {
    margin: 0 0 16px;
    font-size: clamp(2rem, 5.6vw, 3.3rem);
    font-weight: 700;
  }
  .vs-hero h1 span { color: var(--gold-light); }
  .vs-hero-lead {
    margin: 0 0 26px;
    max-width: 560px;
    color: rgba(255,255,255,.86);
    font-size: 1.06rem;
  }
  .vs-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .vs-button {
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
  .vs-button:hover { transform: translateY(-1px); }
  .vs-button-wa {
    background: var(--wa);
    color: white;
    box-shadow: 0 10px 24px rgba(7,31,66,.28);
  }
  .vs-button-wa:hover { background: #1fae57; }
  .vs-button-outline {
    border: 1.5px solid rgba(255,255,255,.4);
    color: white;
  }
  .vs-button-outline:hover {
    border-color: var(--gold-light);
    color: var(--gold-light);
  }
  .vs-hero-service {
    margin: 14px 0 0;
    color: rgba(255,255,255,.62);
    font-size: .92rem;
  }
  .vs-trust-strip {
    margin-top: 26px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .vs-trust-strip span {
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
  .vs-trust-strip svg { color: var(--gold-light); }

  .vs-hero-media {
    position: relative;
    max-width: 440px;
  }
  .vs-photo-frame {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.2);
    box-shadow: 0 24px 60px rgba(3,12,28,.45);
  }
  .vs-photo-frame::after {
    content: "";
    position: absolute;
    inset: 10px;
    border: 1px solid rgba(227,200,120,.4);
    border-radius: 10px;
    pointer-events: none;
  }
  .vs-photo-frame img {
    width: 100%;
    height: auto;
  }
  .vs-hero-note {
    position: relative;
    margin: -34px 16px 0;
    display: grid;
    gap: 3px;
    padding: 14px 18px;
    border-left: 3px solid var(--gold);
    border-radius: 10px;
    background: var(--white);
    color: var(--ink);
    box-shadow: 0 16px 34px rgba(3,12,28,.24);
  }
  .vs-hero-note span {
    color: var(--gold-dark);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: .14em;
    text-transform: uppercase;
  }
  .vs-hero-note strong {
    font-size: .95rem;
    line-height: 1.35;
  }

  .vs-confidence {
    background: var(--navy-deep);
    border-top: 1px solid rgba(255,255,255,.1);
    color: white;
    padding: 30px 0;
  }
  .vs-confidence-grid {
    display: grid;
    gap: 20px;
  }
  .vs-confidence-grid div {
    display: grid;
    gap: 4px;
    padding-left: 14px;
    border-left: 2px solid var(--gold);
  }
  .vs-confidence-grid strong { font-size: .98rem; }
  .vs-confidence-grid span {
    color: rgba(255,255,255,.66);
    font-size: .88rem;
    line-height: 1.45;
  }

  .vs-section { padding: 72px 0; }
  .vs-section-soft { background: #efece4; }
  .vs-section-head {
    max-width: 660px;
    margin-bottom: 40px;
  }
  .vs-section-head h2 {
    margin: 0 0 12px;
    color: var(--navy);
    font-size: clamp(1.6rem, 3.6vw, 2.3rem);
  }
  .vs-section-head p:last-child {
    margin: 0;
    color: var(--muted);
  }

  .vs-card-grid {
    display: grid;
    gap: 18px;
  }
  .vs-card {
    display: flex;
    flex-direction: column;
    padding: 26px 24px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: var(--white);
    box-shadow: 0 8px 26px rgba(19,34,63,.06);
    transition: transform .16s ease, box-shadow .16s ease;
  }
  .vs-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 34px rgba(19,34,63,.12);
  }
  .vs-card-gold {
    border-color: rgba(201,160,61,.55);
    background: linear-gradient(160deg, #fffdf6 0%, #faf3e2 100%);
  }
  .vs-icon {
    width: 46px;
    height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    border-radius: 11px;
    background: rgba(11,47,95,.08);
    color: var(--navy);
  }
  .vs-card-gold .vs-icon {
    background: rgba(201,160,61,.18);
    color: var(--gold-dark);
  }
  .vs-card h3 {
    margin: 0 0 8px;
    color: var(--navy);
    font-size: 1.18rem;
  }
  .vs-card > p {
    margin: 0 0 14px;
    color: var(--muted);
    font-size: .94rem;
  }
  .vs-card ul {
    margin: 0 0 18px;
    padding: 0;
    display: grid;
    gap: 7px;
    list-style: none;
  }
  .vs-card li {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--ink);
    font-size: .9rem;
    font-weight: 600;
  }
  .vs-card li svg { color: var(--gold-dark); flex: none; }
  .vs-card > a {
    margin-top: auto;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--navy);
    font-size: .92rem;
    font-weight: 900;
  }
  .vs-card > a:hover { color: var(--gold-dark); }

  .vs-negado {
    padding: 68px 0;
    background:
      radial-gradient(560px 300px at 12% 100%, rgba(201,160,61,.14), transparent 60%),
      linear-gradient(160deg, var(--navy-deep) 0%, var(--navy) 100%);
    color: white;
  }
  .vs-negado-grid {
    display: grid;
    gap: 34px;
    align-items: center;
  }
  .vs-negado h2 {
    margin: 0 0 14px;
    font-size: clamp(1.55rem, 3.4vw, 2.15rem);
  }
  .vs-negado p {
    margin: 0 0 24px;
    max-width: 560px;
    color: rgba(255,255,255,.84);
  }
  .vs-negado-media {
    max-width: 400px;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,.18);
    box-shadow: 0 22px 48px rgba(3,12,28,.4);
  }

  .vs-steps {
    display: grid;
    gap: 18px;
  }
  .vs-step {
    position: relative;
    padding: 26px 24px;
    border: 1px solid var(--line);
    border-radius: 14px;
    background: var(--white);
  }
  .vs-step > span {
    position: absolute;
    top: 18px;
    right: 20px;
    color: rgba(201,160,61,.5);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1;
  }
  .vs-step h3 {
    margin: 0 0 6px;
    color: var(--navy);
    font-size: 1.08rem;
  }
  .vs-step p {
    margin: 0;
    color: var(--muted);
    font-size: .92rem;
  }

  .vs-about { background: var(--white); }
  .vs-about-grid {
    display: grid;
    gap: 40px;
    align-items: center;
  }
  .vs-about-image {
    position: relative;
    max-width: 520px;
  }
  .vs-about-image img:first-child {
    border-radius: 16px;
    border: 1px solid var(--line);
    box-shadow: 0 20px 44px rgba(19,34,63,.16);
  }
  .vs-about-secondary {
    position: absolute;
    right: -14px;
    bottom: -30px;
    width: 44%;
    border-radius: 12px;
    border: 4px solid var(--white);
    box-shadow: 0 16px 34px rgba(19,34,63,.22);
  }
  .vs-about-copy h2 {
    display: grid;
    gap: 6px;
    margin: 0 0 16px;
    color: var(--navy);
    font-size: clamp(1.7rem, 3.6vw, 2.3rem);
  }
  .vs-about-copy h2 em {
    color: var(--gold-dark);
    font-family: var(--font-body, Inter), Inter, system-ui, sans-serif;
    font-size: .82rem;
    font-style: normal;
    font-weight: 800;
    letter-spacing: .12em;
    text-transform: uppercase;
  }
  .vs-about-copy > p {
    margin: 0 0 14px;
    color: var(--muted);
  }
  .vs-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin: 24px 0;
    padding: 18px 16px;
    border: 1px solid rgba(201,160,61,.4);
    border-radius: 14px;
    background: linear-gradient(160deg, #fffdf6 0%, #f8f1de 100%);
  }
  .vs-stats div {
    display: grid;
    gap: 2px;
    text-align: center;
  }
  .vs-stats strong {
    color: var(--navy);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.5rem;
    line-height: 1.1;
  }
  .vs-stats span {
    color: var(--muted);
    font-size: .78rem;
    font-weight: 700;
    line-height: 1.3;
  }
  .vs-check-list {
    margin: 0;
    padding: 0;
    display: grid;
    gap: 10px;
    list-style: none;
  }
  .vs-check-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: var(--ink);
    font-size: .96rem;
    font-weight: 600;
  }
  .vs-check-list svg {
    margin-top: 3px;
    flex: none;
    color: var(--gold-dark);
  }

  .vs-faq-grid {
    display: grid;
    gap: 30px;
  }
  .vs-faq-grid h2 {
    margin: 0 0 12px;
    color: var(--navy);
    font-size: clamp(1.6rem, 3.4vw, 2.1rem);
  }
  .vs-faq-grid > div > p {
    margin: 0;
    color: var(--muted);
  }
  .vs-faq-list {
    display: grid;
    gap: 12px;
  }
  .vs-faq-item {
    border: 1px solid var(--line);
    border-radius: 12px;
    background: var(--white);
    overflow: hidden;
  }
  .vs-faq-item button {
    width: 100%;
    min-height: 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 14px 18px;
    border: 0;
    background: transparent;
    color: var(--navy);
    text-align: left;
    font-size: 1rem;
    font-weight: 800;
  }
  .vs-faq-item button:hover { color: var(--gold-dark); }
  .vs-faq-item button svg {
    flex: none;
    transition: transform .18s ease;
  }
  .vs-faq-item button[aria-expanded="true"] svg { transform: rotate(180deg); }
  .vs-faq-item div p {
    margin: 0;
    padding: 0 18px 18px;
    color: var(--muted);
    font-size: .95rem;
  }

  .vs-final {
    padding: 76px 0;
    background:
      radial-gradient(680px 380px at 90% 0%, rgba(201,160,61,.15), transparent 60%),
      linear-gradient(165deg, var(--navy-deep) 0%, var(--navy) 70%, var(--navy-soft) 100%);
    color: white;
  }
  .vs-final-grid {
    display: grid;
    gap: 38px;
    align-items: start;
  }
  .vs-final h2 {
    margin: 0 0 14px;
    font-size: clamp(1.7rem, 3.8vw, 2.4rem);
  }
  .vs-final p {
    margin: 0 0 26px;
    max-width: 540px;
    color: rgba(255,255,255,.84);
  }
  .vs-contact-list {
    margin: 0;
    padding: 24px 22px;
    display: grid;
    gap: 16px;
    list-style: none;
    border: 1px solid rgba(255,255,255,.16);
    border-radius: 14px;
    background: rgba(255,255,255,.05);
  }
  .vs-contact-list li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: .96rem;
  }
  .vs-contact-list svg {
    margin-top: 3px;
    flex: none;
    color: var(--gold-light);
  }
  .vs-contact-list a {
    color: rgba(255,255,255,.9);
    text-decoration: underline;
    text-decoration-color: rgba(255,255,255,.28);
    text-underline-offset: 3px;
  }
  .vs-contact-list a:hover { color: var(--gold-light); }
  .vs-contact-list span { color: rgba(255,255,255,.9); }

  .vs-footer {
    padding: 44px 0 110px;
    background: #04142c;
    color: rgba(255,255,255,.66);
  }
  .vs-footer-grid {
    display: grid;
    gap: 26px;
  }
  .vs-footer-logo {
    display: inline-block;
    margin-bottom: 14px;
    padding: 10px 16px;
    border-radius: 10px;
    background: var(--white);
  }
  .vs-footer-logo img {
    width: 190px;
    height: auto;
  }
  .vs-footer-brand p {
    margin: 0;
    max-width: 430px;
    font-size: .88rem;
    line-height: 1.55;
  }
  .vs-footer-links {
    display: grid;
    gap: 8px;
    font-size: .9rem;
  }
  .vs-footer-links span {
    padding-left: 12px;
    border-left: 2px solid var(--gold-dark);
  }
  .vs-footer-credit {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: .88rem;
  }
  .vs-footer-credit a {
    color: var(--gold-light);
    font-weight: 800;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .vs-footer-credit a:hover { color: white; }

  .vs-floating-wa {
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
    box-shadow: 0 14px 30px rgba(3,12,28,.35);
    transition: transform .16s ease;
  }
  .vs-floating-wa:hover { transform: translateY(-3px); }

  @media (min-width: 720px) {
    .vs-confidence-grid { grid-template-columns: repeat(2, 1fr); }
    .vs-card-grid { grid-template-columns: repeat(2, 1fr); }
    .vs-steps { grid-template-columns: repeat(2, 1fr); }
    .vs-faq-grid { grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr); }
    .vs-final-grid { grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr); }
    .vs-footer-grid {
      grid-template-columns: minmax(0, 1.2fr) minmax(0, .8fr);
      align-items: start;
    }
    .vs-footer-credit { grid-column: 1 / -1; }
  }

  @media (min-width: 1000px) {
    .vs-desktop-nav { display: flex; }
    .vs-nav-cta { display: inline-flex; }
    .vs-menu-button { display: none; }
    .vs-mobile-nav { display: none !important; }
    .vs-hero { padding: 196px 0 88px; }
    .vs-hero-grid {
      grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr);
      gap: 56px;
      align-items: center;
    }
    .vs-hero-media { justify-self: end; }
    .vs-confidence-grid { grid-template-columns: repeat(4, 1fr); }
    .vs-card-grid { grid-template-columns: repeat(4, 1fr); }
    .vs-negado-grid { grid-template-columns: minmax(0, 1.2fr) minmax(0, .8fr); }
    .vs-negado-media { justify-self: end; }
    .vs-steps { grid-template-columns: repeat(4, 1fr); }
    .vs-about-grid { grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr); }
  }

  @media (max-width: 719px) {
    .vs-page { font-size: 17px; }
    .vs-actions { flex-direction: column; align-items: stretch; }
    .vs-button { width: 100%; }
    .vs-hero-media { margin: 0 auto; }
    .vs-about-secondary { right: 0; }
    .vs-preview-back span { display: none; }
    .vs-preview-site span { display: none; }
    .vs-preview-site { border: 0; }
  }
`;
