"use client";

import {
  ArrowRight,
  CheckCircle2,
  FileSignature,
  Gavel,
  Heart,
  MessagesSquare,
  ShoppingCart,
  Users,
} from "lucide-react";
import {
  ContactList,
  FAQItem,
  FloatingWhatsApp,
  IMG,
  PreviewBar,
  SectionDivider,
  SiteFooter,
  SiteHeader,
  SocialLinks,
  VideoHero,
  WA,
  WaIcon,
  useRevealOnScroll,
  waLink,
} from "../shared";
import { baseCss } from "../shared-css";

const sectionNav = [
  { href: "#areas", label: "Áreas de atuação" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

const areas = [
  {
    icon: Gavel,
    title: "Direito Trabalhista",
    intro:
      "O escritório atua na esfera trabalhista, na defesa de interesses dos empregados. Referência em direito trabalhista bancário e diferentes categorias profissionais. Análise e reparação de irregularidades em contratos individuais de trabalho.",
    items: [
      "13º salário",
      "Acidente e doença do trabalho",
      "Adicionais de periculosidade e insalubridade",
      "Adicional noturno",
      "Assédio moral",
      'Comissões e gorjetas "por fora", não pagas ou pagas a menor',
      "Condições de trabalho prejudiciais à saúde e segurança do trabalhador",
      "Desvio e/ou acúmulo de função",
      "Diferenças salariais",
      "Discriminação",
      "Estabilidades Gestantes",
      "Estágio e/ou terceirização fraudulentos",
      "FGTS",
      "Férias",
      "Fraudes na marcação do cartão de ponto",
      "Horas extras não pagas",
      "Indenizações por Dano moral",
      "Insalubridade e Periculosidade",
      "Jornadas de Trabalhos Abusivas",
      "Pedido de Rescisão indireta do contrato de trabalho",
      "Pedido de demissão forçado",
      "Reversão de Justa Causa Indevida",
      'Salários "por fora"',
      "Seguro Desemprego",
      "Trabalho sem registro em carteira e reconhecimento de vínculo de emprego",
    ],
  },
  {
    icon: FileSignature,
    title: "Direito Contratual",
    intro:
      "A análise de contrato é de importância ímpar para evitar que inadimplementos, riscos do objeto do contrato ou brechas no contrato tragam prejuízos incalculáveis para o contratante ou contratado. Trabalhamos com Contratos, Prestação de Serviços, Responsabilidade Civil e Ações Indenizatórias.",
    items: [
      "Análise de contratos",
      "Constituição de Garantias",
      "Contrato de Prestação de Serviços",
      "Contratos Societários",
      "Contratos de Compra e Venda",
      "Contratos de Locação e Direito Locatício",
      "Execução de Contratos",
      "Negociação e Renegociação Contratual",
      "Revisão Contratual",
    ],
  },
  {
    icon: Heart,
    title: "Direito de Família e Sucessões",
    intro:
      "Os profissionais da Alves Barbosa estão preparados para lidar com pessoas e suas emoções ajudando a solucionar situações íntimas e muitas vezes delicadas, como divórcios, guarda dos filhos, pensão alimentícia, adoção, entre outros.",
    items: [
      "Ação de Alimentos",
      "Acordos pré-nupciais",
      "Adoção",
      "Anulação de Casamento",
      "Divórcios",
      "Doação de bens",
      "Inventários",
      "Investigação de paternidade",
      "Partilha de bens",
      "Regime de visitação",
      "Separação Judicial",
      "Testamentos",
      "União estável",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Direito do Consumidor",
    intro:
      "Prestamos serviços de orientação e assessoria jurídica aos clientes, usuários ou compradores de produtos ou serviços, sempre que ações abusivas, indevidas ou lesivas forem usadas e comprovadas nas relações jurídicas de consumo, de forma à reparar os prejuízos, morais ou patrimoniais.",
    items: [
      "Ações de Danos Materiais",
      "Ações de Danos Morais",
      "Ações diversas sobre Questões Bancárias",
      "Cobranças e Negativação Indevida",
      "Falha na Prestação de Serviços",
      "Problemas com Empresas Aéreas",
      "Problemas com Planos de Saúde",
      "Ação de Despejo",
    ],
  },
];

const faqs = [
  {
    q: "Vocês atendem casos trabalhistas de qualquer categoria profissional?",
    a: "Sim. O escritório é referência em direito trabalhista bancário e atende diferentes categorias profissionais, analisando contratos individuais de trabalho para identificar e reparar irregularidades.",
  },
  {
    q: "Como funciona a revisão de um contrato antes de assinar?",
    a: "Analisamos cláusulas, riscos do objeto do contrato e possíveis brechas antes da assinatura, para evitar inadimplementos e prejuízos — tanto em contratos de prestação de serviços quanto de compra, venda e locação.",
  },
  {
    q: "Atendem casos de família mesmo quando é uma situação delicada?",
    a: "Sim, com cuidado e discrição. Atuamos em divórcios, guarda dos filhos, pensão alimentícia, adoção, inventários, partilha de bens e outras questões íntimas do direito de família e sucessões.",
  },
  {
    q: "Posso buscar ajuda por cobrança indevida ou negativação injusta?",
    a: "Sim. Atuamos em ações de danos materiais e morais, cobranças e negativação indevida, falhas na prestação de serviços, problemas com empresas aéreas e planos de saúde.",
  },
  {
    q: "Atendem em quais cidades?",
    a: "O atendimento cobre Barueri, Alphaville, Santana de Parnaíba, Tamboré e Carapicuíba, na Grande São Paulo, além de atuação em todo o território nacional.",
  },
];

function ContactForm() {
  const text = "Olá! Vim pela página Pessoa Física e gostaria de uma orientação jurídica.";
  return (
    <a className="ab-button ab-button-wa ab-button-block" href={waLink(text)} target="_blank" rel="noopener noreferrer">
      <WaIcon /> Falar com um advogado agora
    </a>
  );
}

export default function PessoaFisicaPage() {
  useRevealOnScroll();

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
    <main className="ab-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <a className="ab-skip" href="#conteudo">
        Pular para o conteúdo
      </a>

      <PreviewBar />
      <SiteHeader active="pf" sectionNav={sectionNav} />

      <VideoHero
        videoSrc="/videos/alvesbarbosa/pessoa-fisica-bg.mp4"
        poster={IMG.office}
        kicker="Pessoa Física"
        title={
          <>
            Orientação jurídica individual, <span className="ab-hero-accent">para cada momento da sua vida.</span>
          </>
        }
        lead="Direito Trabalhista, Direito Contratual, Família e Sucessões, e Direito do Consumidor — atuação consultiva e contenciosa, com atendimento próximo e linguagem clara."
      >
        <div id="conteudo" className="ab-actions">
          <a className="ab-button ab-button-wa" href={WA} target="_blank" rel="noopener noreferrer">
            <WaIcon /> Falar com advogado
          </a>
          <a className="ab-button ab-button-outline" href="#areas">
            Ver áreas de atuação <ArrowRight size={17} />
          </a>
        </div>
        <div className="ab-trust-strip" aria-label="Diferenciais rápidos">
          <span>
            <Users size={17} /> Atendimento individual
          </span>
          <span>
            <Heart size={17} /> Cuidado com casos delicados
          </span>
        </div>
      </VideoHero>

      <section id="areas" className="ab-section" aria-labelledby="areas-title">
        <SectionDivider icon={Gavel} />
        <div className="ab-wrap">
          <div className="ab-section-head">
            <p className="ab-kicker">Áreas de atuação</p>
            <h2 id="areas-title">Em qual dessas situações você se encontra?</h2>
            <p>Cada demanda pede uma análise própria. Encontre a sua abaixo e fale com a gente para uma orientação sobre o seu caso.</p>
          </div>

          <div className="ab-area-list">
            {areas.map((area) => (
              <article className="ab-area-block" key={area.title}>
                <div className="ab-area-head">
                  <div className="ab-icon" aria-hidden="true">
                    <area.icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3>{area.title}</h3>
                </div>
                <p className="ab-area-intro">{area.intro}</p>
                <ul className="ab-area-items">
                  {area.items.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={14} aria-hidden="true" /> {item}
                    </li>
                  ))}
                </ul>
                <a
                  className="ab-area-cta"
                  href={waLink(`Olá! Preciso de orientação sobre ${area.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar sobre {area.title} <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="duvidas" className="ab-section ab-section-soft" aria-labelledby="faq-title">
        <SectionDivider icon={MessagesSquare} />
        <div className="ab-wrap ab-faq-grid">
          <div>
            <p className="ab-kicker">Perguntas frequentes</p>
            <h2 id="faq-title">Dúvidas comuns</h2>
            <p>Respostas diretas para quem procura orientação jurídica pessoal.</p>
          </div>
          <div className="ab-faq-list">
            {faqs.map((item, index) => (
              <FAQItem key={item.q} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="ab-final" aria-labelledby="contato-title">
        <div className="ab-wrap ab-final-grid">
          <div>
            <p className="ab-kicker">Contato</p>
            <h2 id="contato-title">Converse com quem entende do seu caso</h2>
            <p>Conte sua situação pelo WhatsApp: a análise é individual e a orientação é transparente desde a primeira conversa.</p>
            <a className="ab-button ab-button-wa" href={WA} target="_blank" rel="noopener noreferrer">
              <WaIcon /> Chamar no WhatsApp
            </a>
            <ContactList />
            <SocialLinks />
          </div>
          <div className="ab-final-form">
            <h3>Pessoa Jurídica?</h3>
            <p className="ab-final-form-note">Se você procura assessoria para uma empresa, veja a página dedicada com as áreas de atuação empresarial.</p>
            <a className="ab-button ab-button-outline ab-button-block" href="/proposta-comercial/alvesbarbosa/pessoa-juridica">
              Ver Pessoa Jurídica <ArrowRight size={17} />
            </a>
            <div className="ab-final-form-spacer" />
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsApp />

      <style jsx global>{`${baseCss}${css}`}</style>
    </main>
  );
}

const css = `
  .ab-hero-accent { display: block; color: var(--gold-light); }
  .ab-area-list { display: grid; gap: 22px; }
  .ab-area-block {
    padding: 30px 28px;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: var(--white);
    box-shadow: 0 10px 30px rgba(15,29,51,.05);
  }
  .ab-area-head { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
  .ab-area-head h3 { margin: 0; font-size: 1.15rem; color: var(--navy); }
  .ab-area-intro { margin: 0 0 18px; color: var(--muted); font-size: .94rem; line-height: 1.7; }
  .ab-area-items { list-style: none; margin: 0 0 20px; padding: 0; columns: 1; column-gap: 26px; }
  .ab-area-items li {
    display: flex; align-items: flex-start; gap: 8px;
    color: var(--ink); font-size: .87rem; line-height: 1.5;
    padding: 5px 0; break-inside: avoid;
  }
  .ab-area-items li svg { color: var(--blue); flex: none; margin-top: 3px; }
  .ab-area-cta {
    display: inline-flex; align-items: center; gap: 6px;
    color: var(--blue); font-weight: 800; font-size: .9rem;
  }
  .ab-area-cta:hover { gap: 10px; }
  .ab-button-block { width: 100%; }
  .ab-final-form-note { color: rgba(255,255,255,.66); font-size: .86rem; margin: 0 0 16px; }
  .ab-final-form-spacer { height: 22px; border-top: 1px solid rgba(255,255,255,.12); margin-bottom: 22px; }

  @media (min-width: 640px) {
    .ab-area-items { columns: 2; }
  }
`;
