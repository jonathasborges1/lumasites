"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Instagram,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import styles from "./peresdesigns.module.css";

const WA_NUMBER = "554497324658";
const whatsapp = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

const navigation = [
  { href: "#projetos", label: "Projetos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#sobre", label: "Sobre" },
  { href: "#localizacao", label: "Localização" },
  { href: "#faq", label: "FAQ" },
];

const projects = [
  {
    number: "01",
    name: "Giselle Moraes Confeitaria",
    category: "Identidade visual · Confeitaria gourmet",
    tone: "sage",
    image: "/images/peresdesigns/projeto-giselle-moraes.png",
  },
  {
    number: "02",
    name: "Lev Cream | Delicias Gourmet",
    category: "Identidade visual · Confeitaria gourmet",
    tone: "cream",
    image: "/images/peresdesigns/projeto-lev-cream.png",
  },
  {
    number: "03",
    name: "Claus Cabelereiro",
    category: "Identidade visual · Cabeleireiro",
    tone: "ink",
    image: "/images/peresdesigns/projeto-claus.jpg",
  },
  {
    number: "04",
    name: "Paulo Rodrigo | Visagista",
    category: "Identidade visual · Visagismo",
    tone: "lilac",
    image: "/images/peresdesigns/projeto-paulo-rodrigo.png",
  },
];

const socialDesigns = [
  "/images/peresdesigns/social-01.png",
  "/images/peresdesigns/social-02.png",
  "/images/peresdesigns/social-03.jpg",
  "/images/peresdesigns/social-04.jpg",
  "/images/peresdesigns/social-05.jpg",
  "/images/peresdesigns/social-06.png",
];

const services = [
  {
    id: "redes-sociais",
    label: "Para manter presença",
    name: "Designs para Redes Sociais",
    description:
      "Posts, stories e capas que traduzem a identidade da sua marca para o feed.",
    price: "R$ 80,00",
    items: [
      "Posts e stories individuais ou pacotes mensais",
      "Revisões inclusas",
      "Adaptação para feed, stories e capas",
      "Estratégia de conteúdo opcional",
    ],
  },
  {
    id: "alinhamento-visual",
    label: "Para organizar o perfil",
    name: "Alinhamento Visual",
    description:
      "A base visual para um perfil mais harmônico, organizado e coerente com a essência da marca.",
    price: "R$ 490,90",
    items: [
      "Moodboard e estilo fotográfico",
      "Definição de tipografia",
      "Paleta de cores do perfil",
      "3 posts de apresentação",
    ],
  },
  {
    id: "identidade-visual",
    label: "Para construir do zero",
    name: "Identidade Visual",
    description:
      "Uma marca memorável e coerente, pronta para se comunicar com profissionalismo em cada canal.",
    price: "R$ 990,90",
    featured: true,
    items: [
      "Pesquisa e estratégia de marca",
      "Logotipo, variações e versões",
      "Paleta de cores e tipografia",
      "Manual de uso da marca",
      "Aplicações em mockups",
    ],
  },
  {
    id: "landing-page",
    label: "Para apresentar e converter",
    name: "Landing Page",
    description:
      "Uma página responsiva para apresentar sua marca, serviço ou produto de forma estratégica.",
    price: "R$ 599,90",
    items: [
      "Layout exclusivo e responsivo",
      "Seções adequadas ao conteúdo",
      "Tipografia e cores da marca",
      "Otimização para dispositivos móveis",
      "Hospedagem e domínio opcionais",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Alinhamento e briefing",
    text: "A primeira conversa organiza o contexto, as necessidades e os objetivos do projeto.",
  },
  {
    number: "02",
    title: "Desenvolvimento",
    text: "As propostas visuais são desenvolvidas a partir das informações definidas no briefing.",
  },
  {
    number: "03",
    title: "Apresentação e ajustes",
    text: "O projeto é apresentado com espaço para as rodadas de pequenos ajustes incluídas.",
  },
  {
    number: "04",
    title: "Entrega dos arquivos",
    text: "Após a aprovação, os arquivos finais são organizados e entregues para uso da marca.",
  },
];

const faqs = [
  {
    question: "Quais serviços você oferece?",
    answer:
      "Trabalho com identidade visual, designs para redes sociais e design gráfico, ajudando marcas a se posicionarem de forma estratégica e profissional.",
  },
  {
    question: "Para quem é o serviço de identidade visual?",
    answer:
      "Para empresas e profissionais que desejam posicionar sua marca com mais profissionalismo, estratégia e consistência visual.",
  },
  {
    question: "Quanto tempo leva um projeto de identidade visual?",
    answer:
      "O prazo médio é de 20 a 30 dias úteis, podendo variar conforme a complexidade do projeto e o tempo de retorno nos feedbacks.",
  },
  {
    question: "Você faz apenas logotipo?",
    answer:
      "Meu foco é desenvolver identidades visuais completas, garantindo que a marca tenha consistência e personalidade em todos os pontos de contato.",
  },
  {
    question: "Posso pedir alterações no projeto?",
    answer:
      "Sim. O projeto inclui rodadas de pequenos ajustes, garantindo que o resultado final esteja alinhado com o que você precisa.",
  },
  {
    question: "Trabalha com parcelamento?",
    answer:
      "Sim. O investimento em pacotes de identidade visual pode ser parcelado no cartão ou dividido entre entrada e pagamento final.",
  },
  {
    question: "Você atende clientes de qualquer cidade?",
    answer:
      "Sim. Todo o processo pode ser feito online, atendendo clientes de qualquer cidade.",
  },
];

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function PreviewBar() {
  return (
    <aside className={styles.previewBar} aria-label="Aviso de proposta comercial">
      <Link
        aria-label="Voltar para propostas comerciais"
        className={styles.previewBack}
        href="/proposta-comercial"
      >
        <ArrowLeft aria-hidden="true" size={15} />
        <span>Voltar</span>
      </Link>
      <div className={styles.previewMessage}>
        <span aria-hidden="true" className={styles.previewDot} />
        <strong>Proposta comercial</strong>
        <span aria-hidden="true" className={styles.previewSeparator}>·</span>
        <span className={styles.previewMobileDescription}>Prévia conceitual</span>
        <span className={styles.previewDescription}>
          Prévia conceitual desenvolvida pela{" "}
          <a href="https://lumasites.com.br" rel="noreferrer" target="_blank">
            LumaSites.com.br
          </a>
        </span>
      </div>
    </aside>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <PreviewBar />
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="#inicio" onClick={() => setMenuOpen(false)}>
            <span className={styles.brandName}>Peres Design</span>
            <span className={styles.brandDescriptor}>Identidade visual &amp; design gráfico</span>
          </a>

          <nav className={styles.desktopNavigation} aria-label="Navegação principal">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <a
              className={styles.headerCta}
              href={whatsapp("Olá, Kethelyn! Vim pelo site e gostaria de conversar sobre um projeto.")}
              rel="noreferrer"
              target="_blank"
            >
              Solicitar orçamento <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </nav>

          <button
            aria-controls="peres-mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className={styles.menuButton}
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className={styles.mobileNavigation} id="peres-mobile-menu" aria-label="Navegação móvel">
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              {item.label} <ArrowRight aria-hidden="true" size={18} />
            </a>
          ))}
          <a
            className={styles.mobileCta}
            href={whatsapp("Olá, Kethelyn! Vim pelo site e gostaria de conversar sobre um projeto.")}
            onClick={() => setMenuOpen(false)}
            rel="noreferrer"
            target="_blank"
          >
            Solicitar orçamento <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </nav>
      )}
    </>
  );
}

function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Kethelyn Peres · Maringá, PR · Atendimento online</p>
          <h1>
            Ideias ganham forma.
            <em> Marcas ganham presença.</em>
          </h1>
          <p className={styles.heroText}>
            Identidades visuais e designs para redes sociais criados com intenção, estética e
            estratégia — para marcas que querem ser vistas e lembradas.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#projetos">
              Ver projetos <ArrowDown aria-hidden="true" size={16} />
            </a>
            <a
              className={styles.secondaryButton}
              href={whatsapp("Olá, Kethelyn! Gostaria de saber mais sobre um projeto de identidade visual.")}
              rel="noreferrer"
              target="_blank"
            >
              Falar sobre minha marca <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>

        <div className={styles.heroArtwork}>
          <Image
            alt="Mesa de trabalho com notebook e materiais de design da Peres Design"
            className={styles.heroImage}
            fill
            priority
            sizes="(max-width: 820px) calc(100vw - 48px), 42vw"
            src="/images/peresdesigns/hero.jpg"
          />
          <div className={styles.artworkTopline}>
            <span>Design gráfico</span>
            <span>Desde Maringá · para todo o Brasil</span>
          </div>
          <div className={styles.artworkMonogram} aria-hidden="true">
            <span>P</span>
            <i />
            <span>D</span>
          </div>
          <p>Bom design vai além da estética.</p>
          <span className={styles.artworkNote}>Imagem da fonte oficial · uso autorizado nesta prévia</span>
        </div>
      </div>
      <div className={styles.heroFoot}>
        <span>Identidade visual</span>
        <span>Design para redes sociais</span>
        <span>Landing pages</span>
      </div>
    </section>
  );
}

function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const active = projects[activeProject];

  return (
    <section className={styles.projectsSection} id="projetos">
      <div className={styles.sectionIntro}>
        <div>
          <p className={styles.sectionLabel}>01 · Projetos selecionados</p>
          <h2>Identidades que contam histórias.</h2>
        </div>
        <p>
          Uma seleção real do portfólio da Peres Design, agora apresentada sem retirar o visitante
          da experiência. As imagens vêm da fonte oficial e foram autorizadas para esta prévia.
        </p>
      </div>

      <div className={styles.projectExperience}>
        <div className={styles.projectTabs} role="tablist" aria-label="Projetos selecionados">
          {projects.map((project, index) => (
            <button
              aria-controls="project-panel"
              aria-selected={activeProject === index}
              className={activeProject === index ? styles.activeProjectTab : undefined}
              id={`project-tab-${index}`}
              key={project.name}
              onClick={() => setActiveProject(index)}
              role="tab"
              type="button"
            >
              <span>{project.number}</span>
              <strong>{project.name}</strong>
              <ArrowRight aria-hidden="true" size={18} />
            </button>
          ))}
        </div>

        <div
          aria-labelledby={`project-tab-${activeProject}`}
          className={`${styles.projectPanel} ${styles[active.tone]}`}
          id="project-panel"
          role="tabpanel"
        >
          <div className={styles.projectVisual}>
            <Image
              alt={`${active.name} — ${active.category}`}
              className={styles.projectImage}
              fill
              key={active.image}
              priority={activeProject === 0}
              sizes="(max-width: 820px) calc(100vw - 40px), 68vw"
              src={active.image}
            />
            <span className={styles.projectImageIndex}>{active.number}</span>
          </div>
          <div className={styles.projectMetadata}>
            <div>
              <span>{active.category}</span>
              <h3>{active.name}</h3>
            </div>
            <a
              className={styles.projectContact}
              href={whatsapp(`Olá, Kethelyn! Vi o projeto ${active.name} e gostaria de conversar sobre uma identidade visual.`)}
              rel="noreferrer"
              target="_blank"
            >
              Quero um projeto assim <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          </div>
          <p className={styles.projectDisclaimer}>
            Capa real do portfólio da Peres Design. Na versão final, o case pode ganhar contexto,
            processo, sistema visual e aplicações adicionais.
          </p>
        </div>
      </div>
    </section>
  );
}

function SocialDesigns() {
  return (
    <section className={styles.socialSection} aria-labelledby="social-heading">
      <div className={styles.socialHeading}>
        <div>
          <p className={styles.sectionLabel}>Design aplicado no dia a dia</p>
          <h2 id="social-heading">Designs para Redes Sociais</h2>
        </div>
        <a href="https://www.instagram.com/peresdesigns" rel="noreferrer" target="_blank">
          Ver no Instagram <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
      <div className={styles.socialRail}>
        {socialDesigns.map((src, index) => (
          <figure key={src}>
            <Image
              alt={`Design para redes sociais criado pela Peres Design — peça ${index + 1}`}
              fill
              sizes="(max-width: 620px) 72vw, (max-width: 1100px) 34vw, 22vw"
              src={src}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className={styles.servicesSection} id="servicos">
      <div className={styles.sectionIntro}>
        <div>
          <p className={styles.sectionLabel}>02 · Serviços</p>
          <h2>O ponto certo para cada momento da marca.</h2>
        </div>
        <p>
          Uma visão mais direta dos pacotes reais, organizada pela necessidade de quem chega —
          com investimento inicial e detalhes sob demanda.
        </p>
      </div>

      <div className={styles.serviceGrid}>
        {services.map((service) => (
          <article
            className={`${styles.serviceCard} ${service.featured ? styles.featuredService : ""}`}
            key={service.id}
          >
            <p className={styles.serviceLabel}>{service.label}</p>
            <h3>{service.name}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <div className={styles.servicePrice}>
              <span>A partir de</span>
              <strong>{service.price}</strong>
            </div>
            <details className={styles.serviceDetails}>
              <summary>
                Ver o que inclui <ChevronDown aria-hidden="true" size={18} />
              </summary>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" size={16} /> {item}
                  </li>
                ))}
              </ul>
            </details>
            <a
              className={styles.serviceCta}
              href={whatsapp(`Olá, Kethelyn! Gostaria de saber mais sobre ${service.name}.`)}
              rel="noreferrer"
              target="_blank"
            >
              Conversar sobre este serviço <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className={styles.processSection} id="processo">
      <div className={styles.processHeading}>
        <p className={styles.sectionLabel}>03 · Processo</p>
        <h2>Clareza em cada etapa, do briefing à entrega.</h2>
        <p>Projetos de identidade visual têm prazo médio de 20 a 30 dias úteis.</p>
      </div>
      <ol className={styles.processList}>
        {process.map((step) => (
          <li key={step.number}>
            <span>{step.number}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function About() {
  return (
    <section className={styles.aboutSection} id="sobre">
      <div className={styles.aboutPortrait}>
        <Image
          alt="Kethelyn Peres, designer gráfica especializada em identidade visual"
          fill
          sizes="(max-width: 820px) 100vw, 42vw"
          src="/images/peresdesigns/kethelyn-peres.jpg"
        />
        <span className={styles.portraitCaption}>Kethelyn Peres · Designer gráfica</span>
      </div>
      <div className={styles.aboutCopy}>
        <p className={styles.sectionLabel}>04 · Sobre</p>
        <h2>Kethelyn Peres</h2>
        <p className={styles.aboutRole}>Design gráfico · Designs para redes sociais · Identidade visual</p>
        <p>
          Olá, sou Kethelyn Peres — designer especializada em transformar a essência de marcas
          em identidades visuais que comunicam, conectam e ficam na memória.
        </p>
        <p>
          Acredito que um bom design vai além da estética: ele conta histórias, desperta emoções
          e gera resultados reais para quem empreende. Cada entrega é desenvolvida com olhar
          estratégico, atenção aos detalhes e total dedicação à visão de quem empreende.
        </p>
        <blockquote>
          “Mais do que design, meu trabalho é transformar ideias em identidades que fazem marcas
          serem vistas e lembradas com presença, personalidade e propósito.”
        </blockquote>
      </div>
    </section>
  );
}

function Location() {
  const mapQuery = encodeURIComponent("Maringá, PR, Brasil");

  return (
    <section className={styles.locationSection} id="localizacao">
      <div className={styles.locationCopy}>
        <p className={styles.sectionLabel}>05 · Localização</p>
        <MapPin aria-hidden="true" className={styles.locationIcon} size={28} strokeWidth={1.5} />
        <h2>De Maringá para marcas de todo o Brasil.</h2>
        <p>
          A Peres Design tem sua base em Maringá, Paraná, e conduz seus projetos de forma online,
          com proximidade e clareza em cada etapa.
        </p>
        <a
          className={styles.locationLink}
          href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
          rel="noreferrer"
          target="_blank"
        >
          Abrir no Google Maps <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
      <div className={styles.mapFrame}>
        <iframe
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed&z=12&hl=pt-BR`}
          title="Mapa da cidade de Maringá, Paraná"
        />
        <span>Localização aproximada · Maringá, PR</span>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.faqHeading}>
        <p className={styles.sectionLabel}>06 · Dúvidas</p>
        <h2>Antes de começarmos.</h2>
        <p>As respostas abaixo preservam as informações publicadas pela Peres Design.</p>
      </div>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <details key={faq.question} open={index === 0}>
            <summary>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {faq.question}
              <ChevronDown aria-hidden="true" size={20} />
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className={styles.contactSection} id="contato">
      <p className={styles.sectionLabel}>Disponível para novos projetos</p>
      <h2>
        Sua marca pode ser a próxima a ganhar <em>presença.</em>
      </h2>
      <p>
        Escolha o canal que preferir para conversar sobre identidade visual ou designs para redes
        sociais.
      </p>
      <div className={styles.contactActions}>
        <a
          href={whatsapp("Olá, Kethelyn! Vim pelo site e gostaria de começar um projeto.")}
          rel="noreferrer"
          target="_blank"
        >
          <WhatsAppIcon size={19} /> Falar no WhatsApp <ArrowUpRight aria-hidden="true" size={16} />
        </a>
        <a href="https://www.instagram.com/peresdesigns" rel="noreferrer" target="_blank">
          <Instagram aria-hidden="true" size={19} /> Abrir Instagram <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLead}>
        <div className={styles.footerBrand}>
          <strong>Peres Design</strong>
          <span>Design gráfico, identidade visual e designs para redes sociais.</span>
        </div>
        <div className={styles.footerAvailability}>
          <i aria-hidden="true" />
          Atendimento online
        </div>
      </div>

      <div className={styles.footerDirectory}>
        <nav className={styles.footerNavigation} aria-label="Navegação do rodapé">
          <span>Navegação</span>
          <div>
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </div>
        </nav>
        <div className={styles.footerContact}>
          <span>Contato</span>
          <a href="mailto:peres.designss@gmail.com">
            <Mail aria-hidden="true" size={16} /> peres.designss@gmail.com
          </a>
          <a href={whatsapp("Olá, Kethelyn!")} rel="noreferrer" target="_blank">
            <WhatsAppIcon size={16} /> +55 (44) 99732-4658
          </a>
        </div>
        <div className={styles.footerSocial}>
          <span>Redes</span>
          <a href="https://www.instagram.com/peresdesigns" rel="noreferrer" target="_blank">
            Instagram <ArrowUpRight aria-hidden="true" size={15} />
          </a>
          <a href="https://www.behance.net/peresdesigns" rel="noreferrer" target="_blank">
            Behance <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <span>© 2026 Peres Design</span>
        <span>Maringá, PR · Atendimento para todo o Brasil</span>
        <span>Prévia conceitual por LumaSites</span>
      </div>
    </footer>
  );
}

export default function PeresDesignsPage() {
  return (
    <div className={styles.siteShell}>
      <Header />
      <main>
        <Hero />
        <Projects />
        <SocialDesigns />
        <Services />
        <Process />
        <About />
        <Location />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <a
        aria-label="Falar com a Peres Design no WhatsApp"
        className={styles.floatingWhatsapp}
        href={whatsapp("Olá, Kethelyn! Vim pelo site e gostaria de conversar sobre um projeto.")}
        rel="noreferrer"
        target="_blank"
      >
        <WhatsAppIcon size={24} />
      </a>
    </div>
  );
}
