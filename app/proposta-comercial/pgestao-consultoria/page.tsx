"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, Check, ChevronDown, Menu, MoveUpRight, MessageCircle, X } from "lucide-react";
import styles from "./page.module.css";

const instagram = "https://www.instagram.com/pgestao_consultoria/";
const whatsapp = "https://wa.me/5512982677927?text=Ol%C3%A1%2C%20vim%20pela%20pr%C3%A9via%20da%20P%20Gest%C3%A3o%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20planilhas.";
const youtube = "https://www.youtube.com/@palomaferreira419";
const livro = "https://www.mercadolivre.com.br/livro--liberdade-financeira-feminina/up/MLBU3338497670";

const navLinks = [
  { id: "beneficios", label: "Benefícios" },
  { id: "por-dentro", label: "A experiência" },
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "oferta", label: "Oferta" },
  { id: "duvidas", label: "Dúvidas" },
];

const navIds = navLinks.map((link) => link.id);

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function useScrollState() {
  const [progress, setProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? (scrollTop / scrollable) * 100 : 0);
      setShowBackToTop(scrollTop > 600);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { progress, showBackToTop };
}

function OriginalLogo({ filterId }: { filterId: string }) {
  return (
    <svg viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <filter id={filterId} colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.98  0 0 0 0 0.91  0 0 0 0 0.82  0 8 0 0 -1.35"
          />
        </filter>
      </defs>
      <image href="/pgestao-consultoria/logotipo.jpeg" width="800" height="800" filter={`url(#${filterId})`} />
    </svg>
  );
}

const benefits = [
  { number: "01", title: "Veja o todo", text: "Reúna receitas, despesas e compromissos em um lugar fácil de acompanhar." },
  { number: "02", title: "Entenda o mês", text: "Enxergue para onde o dinheiro vai e acompanhe o que muda ao longo do tempo." },
  { number: "03", title: "Planeje o próximo passo", text: "Use seus números para definir prioridades e cuidar das suas metas com mais clareza." },
];

const questions = [
  { question: "Preciso entender de Excel para usar a planilha?", answer: "A proposta é oferecer uma ferramenta simples e intuitiva, com campos e controles organizados para facilitar o uso no dia a dia. A compatibilidade técnica será informada na página do produto." },
  { question: "A planilha é para finanças pessoais ou empresariais?", answer: "A P Gestão planeja modelos para necessidades diferentes. A indicação de cada produto será apresentada com clareza quando o catálogo de lançamento estiver definido." },
  { question: "A planilha substitui uma consultoria ou contabilidade?", answer: "Não. A planilha organiza informações e apoia o acompanhamento. Para análise individual, orientação profissional ou serviços contábeis, você pode contratar a P Gestão & Consultoria." },
  { question: "Como recebo a planilha depois da compra?", answer: "A entrega digital e a plataforma de pagamento ainda serão definidas. Essas informações aparecerão antes da finalização de qualquer compra." },
  { question: "Posso personalizar a planilha?", answer: "Se houver personalizações disponíveis, elas serão apresentadas como serviço adicional, com condições e orçamento definidos conforme a necessidade." },
  { question: "A P Gestão também atende MEIs e faz declarações de Imposto de Renda?", answer: "Sim. A empresa oferece serviços para MEIs e também elabora e envia a Declaração de Imposto de Renda Pessoa Física." },
  { question: "Posso contratar consultoria financeira junto com a planilha?", answer: "Sim. A consultoria complementa o uso da ferramenta com uma análise individual da sua realidade financeira." },
];

const services = [
  { number: "01", title: "Contabilidade e empresas", text: "Acompanhamento contábil, abertura e regularização de CNPJ e serviços para MEI." },
  { number: "02", title: "Impostos e regularização", text: "Imposto de Renda, Carnê-Leão, situação fiscal, análise de CNPJ e planejamento tributário." },
  { number: "03", title: "Consultoria e processos", text: "Orientação financeira e estruturação de controles e processos para pessoas e empresas." },
  { number: "04", title: "Educação financeira", text: "Palestras e conteúdos sobre organização, empreendedorismo e gestão." },
];

function Dashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${styles.dashboard} ${compact ? styles.dashboardCompact : ""}`} aria-label="Simulação visual de um painel financeiro">
      <div className={styles.dashboardTop}><span className={styles.dashboardBrand}>P<span>.</span> gestão</span><span className={styles.dashboardYear}>Visão mensal <ChevronDown size={13} /></span></div>
      <div className={styles.dashboardIntro}><div><small>VISÃO GERAL</small><strong>Seu dinheiro, em perspectiva.</strong></div><span className={styles.dashboardMonth}>Setembro <ChevronDown size={13} /></span></div>
      <div className={styles.statGrid}>
        <div className={styles.stat}><span>Entradas</span><strong>R$ 5.250,00</strong><small>↗ +8% neste mês</small></div>
        <div className={styles.stat}><span>Saídas</span><strong>R$ 3.180,00</strong><small>Rotina sob controle</small></div>
        <div className={`${styles.stat} ${styles.statAccent}`}><span>Saldo do mês</span><strong>R$ 2.070,00</strong><small>Uma visão mais clara</small></div>
      </div>
      <div className={styles.dashboardBottom}>
        <div className={styles.chartBox}><div className={styles.boxLabel}><strong>Entradas × saídas</strong><span>Últimos 6 meses</span></div><div className={styles.chart} aria-hidden="true">{[48, 68, 55, 82, 72, 92].map((h, i) => <div className={styles.barPair} key={i}><i style={{ height: `${h}%` }} /><b style={{ height: `${Math.round(h * .63)}%` }} /></div>)}</div><div className={styles.months}><span>ABR</span><span>MAI</span><span>JUN</span><span>JUL</span><span>AGO</span><span>SET</span></div></div>
        <div className={styles.goalBox}><div className={styles.boxLabel}><strong>Meu objetivo</strong><span>Em andamento</span></div><div className={styles.goalCircle}><span>68<small>%</small></span></div><p>Mais perto do que importa.</p></div>
      </div>
    </div>
  );
}

export default function PGestaoPreview() {
  const active = useActiveSection(navIds);
  const { progress, showBackToTop } = useScrollState();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuCloseRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    menuCloseRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
      if (e.key !== "Tab" || !menuRef.current) return;
      const focusable = Array.from(menuRef.current.querySelectorAll<HTMLElement>("a, button"));
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
      menuButtonRef.current?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  return (
    <main id="inicio" className={styles.site}>
      <div className={styles.progressBar} style={{ width: `${progress}%` }} aria-hidden="true" />
      <div className={styles.previewBar}><span><span className={styles.previewDot} /> PRÉVIA CONCEITUAL</span><span>Conteúdo e telas de demonstração · Oferta em definição</span></div>
      <header className={styles.header}><div className={styles.container}><a href="#inicio" className={styles.logoArtwork} aria-label="P Gestão & Consultoria, início"><OriginalLogo filterId="pgestao-logo-header" /></a><nav aria-label="Navegação principal">{navLinks.map((link) => <a key={link.id} href={`#${link.id}`} className={active === link.id ? styles.navActive : undefined} aria-current={active === link.id ? "location" : undefined}>{link.label}</a>)}</nav><a className={styles.headerCta} href="#oferta">Ver a oferta <ArrowUpRight size={15} /></a><button ref={menuButtonRef} type="button" className={styles.menuToggle} aria-label="Abrir menu de navegação" aria-expanded={menuOpen} aria-controls="menu-mobile" onClick={() => setMenuOpen(true)}><Menu size={22} /></button></div></header>

      <div ref={menuRef} id="menu-mobile" className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`} role="dialog" aria-modal="true" aria-label="Navegação" aria-hidden={!menuOpen}>
        <div className={styles.mobileNavTop}><span className={styles.kicker}>NAVEGAÇÃO</span><button ref={menuCloseRef} type="button" className={styles.mobileNavClose} aria-label="Fechar menu" onClick={() => setMenuOpen(false)}><X size={24} /></button></div>
        <nav aria-label="Navegação principal (mobile)">{navLinks.map((link) => <a key={link.id} href={`#${link.id}`} className={active === link.id ? styles.mobileNavLinkActive : undefined} aria-current={active === link.id ? "location" : undefined} onClick={() => setMenuOpen(false)}>{link.label}</a>)}</nav>
        <a className={styles.primaryButton} href="#oferta" onClick={() => setMenuOpen(false)}>Ver a oferta <ArrowUpRight size={15} /></a>
      </div>

      <section className={styles.hero}><div className={`${styles.container} ${styles.heroGrid}`}><div className={styles.heroCopy}><div className={styles.eyebrow}><span /> CONTROLE FINANCEIRO PARA A VIDA REAL</div><h1>Seu dinheiro mais claro.<br /><em>Suas decisões</em> mais seguras.</h1><p>Um novo jeito de reunir o que entra, entender o que sai e planejar o que vem pela frente — com a praticidade que a sua rotina pede.</p><div className={styles.heroActions}><a className={styles.primaryButton} href="#por-dentro">Ver a demonstração <ArrowRight size={19} /></a><a className={styles.textButton} href="#beneficios">Entenda os benefícios <ArrowDown size={16} /></a></div><div className={styles.heroNote}><span className={styles.noteLine} /> Organização para quem quer sair do improviso.</div></div><div className={styles.heroVisual}><div className={styles.heroHalo} /><div className={styles.heroCard}><Dashboard /></div><div className={styles.floatCard}><span className={styles.floatIcon}>↗</span><span><strong>Clareza para avançar</strong><small>Começa com os seus números.</small></span></div><div className={styles.visualCaption}>DEMONSTRAÇÃO ILUSTRATIVA</div></div></div><div className={styles.heroIndex}>01 / UMA VIDA FINANCEIRA MAIS CLARA</div></section>

      <section className={styles.intro} id="beneficios"><div className={styles.container}><div className={styles.sectionHeading}><span className={styles.kicker}>MENOS IMPROVISO, MAIS PERSPECTIVA</span><h2>Quando os números fazem sentido,<br /><em>o próximo passo fica mais simples.</em></h2><p>Organização financeira não precisa ser um labirinto. A ideia é transformar anotações soltas em uma visão que você consiga usar no dia a dia.</p></div><div className={styles.benefitGrid}>{benefits.map((b) => <article className={styles.benefit} key={b.number}><span className={styles.benefitNumber}>{b.number}</span><div className={styles.benefitRule} /><h3>{b.title}</h3><p>{b.text}</p><ArrowUpRight size={20} aria-hidden="true" /></article>)}</div></div></section>

      <section className={styles.showcase} id="por-dentro"><div className={`${styles.container} ${styles.showcaseGrid}`}><div className={styles.showcaseVisual}><div className={styles.showcaseFrame}><Dashboard compact /></div><div className={styles.showcaseCaption}>Demonstração ilustrativa. A tela final será apresentada após o envio do produto pela cliente.</div></div><div className={styles.showcaseCopy}><span className={styles.kicker}>PENSADA PARA SER USADA</span><h2>Uma visão melhor começa com uma ferramenta <em>simples de acompanhar.</em></h2><p>A proposta das planilhas da P Gestão é aproximar você dos seus próprios números, sem exigir uma rotina complicada.</p><div className={styles.featureList}><div><span><Check size={16} /></span><p>Receitas, despesas e compromissos em uma mesma visão</p></div><div><span><Check size={16} /></span><p>Acompanhamento para entender a evolução mês a mês</p></div><div><span><Check size={16} /></span><p>Mais base para planejar metas e prioridades</p></div></div><a href="#oferta" className={styles.inlineLink}>Ver a oferta <MoveUpRight size={18} /></a></div></div></section>

      <section className={styles.quoteBand}><div className={styles.container}><span className={styles.quoteGlyph}>“</span><p>O objetivo não é só registrar números.<br /><em>É entender o que eles dizem sobre o seu caminho.</em></p><span className={styles.quoteAttribution}>P GESTÃO & CONSULTORIA</span></div></section>

      <section className={styles.audience}><div className={styles.container}><div className={styles.audienceHeader}><div><span className={styles.kicker}>PARA QUEM É</span><h2>Mais clareza para cada<br /><em>fase da sua jornada.</em></h2></div><p>Da vida pessoal ao pequeno negócio, o ponto de partida é o mesmo: enxergar melhor o presente para decidir o futuro.</p></div><div className={styles.audienceGrid}><article><span>01 / PESSOAS</span><h3>Suas finanças pessoais</h3><p>Para quem quer acompanhar gastos, receitas e metas com mais autonomia, inclusive mulheres que buscam maior controle financeiro.</p></article><article><span>02 / AUTÔNOMOS & MEIS</span><h3>Sua rotina de trabalho</h3><p>Para quem precisa organizar melhor os números da própria atividade.</p></article><article><span>03 / PEQUENOS NEGÓCIOS</span><h3>Seu negócio em foco</h3><p>Para empreendedores que desejam substituir controles improvisados por informações mais úteis.</p></article></div><p className={styles.audienceFootnote}>Os modelos disponíveis e a indicação de cada planilha serão definidos no catálogo de lançamento.</p></div></section>

      <section className={styles.about} id="sobre"><div className={`${styles.container} ${styles.aboutGrid}`}><div className={styles.aboutBrand}><div className={styles.logoImage}><Image src="/pgestao-consultoria/logotipo.jpeg" alt="Logotipo P Gestão & Consultoria" fill sizes="(max-width: 800px) 100vw, 440px" /></div><span>ESTRATÉGIA · CLAREZA · CRESCIMENTO</span></div><div className={styles.aboutCopy}><span className={styles.kicker}>POR TRÁS DA FERRAMENTA</span><h2>Conheça Paloma Ferreira.<br /><em>Clareza com olhar profissional.</em></h2><p>Na P Gestão & Consultoria, Paloma une contabilidade, gestão e finanças para aproximar as pessoas dos próprios números. Essa visão orienta ferramentas práticas que ajudam a transformar informação em decisões.</p><p>Além das planilhas, a P Gestão oferece consultoria financeira, organização de processos e serviços contábeis para pessoas e empresas.</p><div className={styles.aboutLinks}><a className={styles.aboutLink} href={instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={18} /></a><a className={styles.aboutLink} href={youtube} target="_blank" rel="noreferrer">Vídeos da Paloma <ArrowUpRight size={18} /></a><a className={styles.aboutLink} href={livro} target="_blank" rel="noreferrer">Livro Liberdade Financeira Feminina <ArrowUpRight size={18} /></a></div></div></div></section>

      <section className={styles.services} id="servicos"><div className={styles.container}><div className={styles.servicesHeading}><div><span className={styles.kicker}>ALÉM DA PLANILHA</span><h2>Quando você precisa de<br /><em>um olhar mais próximo.</em></h2></div><p>A ferramenta ajuda a organizar. Para situações que pedem orientação individual, a P Gestão também oferece consultoria, gestão de processos e serviços contábeis.</p></div><div className={styles.servicesGrid}>{services.map((service) => <article key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p></article>)}</div><a className={styles.inlineLink} href={instagram} target="_blank" rel="noreferrer">Converse sobre os serviços <ArrowUpRight size={18} /></a></div></section>

      <section className={styles.offer} id="oferta"><div className={`${styles.container} ${styles.offerGrid}`}><div className={styles.offerCopy}><span className={styles.kicker}>O COMEÇO DE UMA NOVA ROTINA</span><h2>Organize hoje.<br /><em>Entenda melhor amanhã.</em></h2><p>A primeira planilha da P Gestão ganhará aqui uma apresentação completa, com demonstração real, indicação de uso e condições claras de compra.</p><div className={styles.offerNotice}><span>●</span> Produto, preço, compatibilidade e forma de entrega em definição com a cliente.</div></div><div className={styles.offerCard}><span className={styles.offerTag}>PRÉVIA DA OFERTA</span><h3>Planilha financeira da P Gestão</h3><p>Um espaço para acompanhar seus números com mais clareza e transformar informação em direção.</p><ul><li><Check size={17} /> Organização de receitas e despesas</li><li><Check size={17} /> Acompanhamento da rotina financeira</li><li><Check size={17} /> Apoio ao planejamento de metas</li></ul><a href={whatsapp} target="_blank" rel="noreferrer" className={styles.primaryButton}>Tirar dúvidas no WhatsApp <MessageCircle size={18} /></a><small>Este contato é para informações. A compra online será disponibilizada após a definição do produto e do checkout.</small></div></div></section>

      <section className={styles.faq} id="duvidas"><div className={`${styles.container} ${styles.faqGrid}`}><div><span className={styles.kicker}>ANTES DE COMEÇAR</span><h2>Dúvidas que merecem<br /><em>respostas claras.</em></h2><p>O essencial para entender a proposta das planilhas e o papel da P Gestão.</p></div><div className={styles.faqItems}>{questions.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div></div></section>

      <a href="#inicio" className={`${styles.backToTop} ${showBackToTop ? styles.backToTopVisible : ""}`} aria-label="Voltar ao topo"><ArrowUp size={18} /></a>

      <footer className={styles.footer}><div className={styles.container}><div className={styles.footerTop}><div className={styles.footerIdentity}><a href="#inicio" className={`${styles.logoArtwork} ${styles.footerLogo}`} aria-label="P Gestão & Consultoria, voltar ao início"><OriginalLogo filterId="pgestao-logo-footer" /></a><p>Clareza para cuidar dos seus números e planejar os próximos passos.</p></div><nav className={styles.footerNav} aria-label="Atalhos do rodapé"><span className={styles.footerHeading}>Explore a prévia</span><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#por-dentro">Demonstração</a><a href="#oferta">Oferta</a><a href="#duvidas">Dúvidas frequentes</a></nav><div className={styles.footerContact}><span className={styles.footerHeading}>Fale com a P Gestão</span><a className={styles.footerWhatsapp} href={whatsapp} target="_blank" rel="noreferrer">Conversar no WhatsApp <ArrowUpRight size={18} /></a><a className={styles.footerSocial} href={instagram} target="_blank" rel="noreferrer">Acompanhar no Instagram <ArrowUpRight size={16} /></a></div></div><div className={styles.footerLegal}>CNPJ, política de privacidade, termos de uso e política de reembolso: em definição com a cliente antes da publicação comercial.</div><div className={styles.footerBottom}><span>© {new Date().getFullYear()} P Gestão & Consultoria · Prévia conceitual · Informações comerciais sujeitas à confirmação</span><a href="#inicio">Voltar ao início <ArrowUp size={15} /></a></div></div></footer>
    </main>
  );
}
