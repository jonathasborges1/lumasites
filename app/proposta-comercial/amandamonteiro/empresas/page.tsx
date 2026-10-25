"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ClipboardCheck,
  LifeBuoy,
  Presentation,
  Users,
  MessagesSquare,
} from "lucide-react";
import {
  Arc,
  ContactSection,
  LocationSection,
  SiteFooter,
  FloatingWhatsApp,
  Faq,
  Monogram,
  PreviewBar,
  SectionHead,
  SiteHeader,
  TopBar,
  assets,
  base,
  useReveal,
  waEmpresa,
} from "../shared";
import styles from "../style.module.css";

const nav = [
  { href: "#nr1", label: "NR-1" },
  { href: "#servicos", label: "Serviços" },
  { href: "#avaliacao", label: "Como funciona" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

const avaliacaoItens = [
  "Avaliação com instrumentos validados, como o HSE-IT",
  "Análise dos resultados por setor e por fator de risco",
  "Relatório técnico claro, que subsidia o PGR",
  "Plano de ação com recomendações práticas e priorizadas",
  "Reavaliação periódica para acompanhar a evolução",
];

const servicos = [
  { icon: LifeBuoy, title: "Plantão psicológico", text: "Escuta qualificada e acolhimento pontual para colaboradores, no momento em que mais precisam." },
  { icon: Presentation, title: "Palestras", text: "Saúde mental no trabalho, ansiedade, sobrecarga e saúde mental da mulher." },
  { icon: Users, title: "Treinamentos para lideranças", text: "Preparo de gestores para reconhecer sinais de sofrimento e agir com cuidado." },
  { icon: MessagesSquare, title: "Rodas de conversa", text: "Encontros em grupo que abrem espaço para o diálogo sobre bem-estar e relações de trabalho." },
];

const etapas = [
  { n: "01", title: "Reunião inicial", text: "Entendo a estrutura, os setores e o momento da organização." },
  { n: "02", title: "Aplicação", text: "Os colaboradores respondem ao instrumento com sigilo e anonimato garantidos." },
  { n: "03", title: "Análise", text: "Os dados são tratados e interpretados por fator de risco." },
  { n: "04", title: "Devolutiva", text: "Apresento os resultados à gestão e entrego o relatório e o plano de ação." },
];

const faq = [
  { q: "Você elabora o PGR?", a: "Não. Entrego a avaliação psicossocial e o plano de ação, que servem de base técnica para o profissional de SST elaborar ou atualizar o PGR." },
  { q: "As respostas dos colaboradores são identificadas?", a: "Não. A aplicação garante sigilo e anonimato, e os resultados são apresentados de forma agrupada." },
  { q: "O que é o plantão psicológico?", a: "É um atendimento pontual de escuta e acolhimento oferecido aos colaboradores em momentos de dificuldade. Não substitui a psicoterapia, mas oferece apoio imediato e orienta sobre os próximos passos." },
  { q: "Você atende empresas de qualquer porte?", a: "Sim. Atendo empresas, escolas, condomínios e instituições de diferentes tamanhos e segmentos." },
  { q: "Com que frequência a avaliação deve ser refeita?", a: "O ideal é reavaliar periodicamente e sempre que houver mudanças relevantes na organização. O cronograma é combinado de acordo com a realidade de cada empresa." },
];

export default function AmandaMonteiroEmpresas() {
  useReveal();

  return (
    <main id="inicio" className={`${styles.site} ${styles.siteCompany}`}>
      <PreviewBar />
      <TopBar />
      <SiteHeader nav={nav} ctaHref={waEmpresa} ctaLabel="Solicitar proposta" homeHref={`${base}`} audience="empresas" />

      {/* E1 Hero */}
      <section className={`${styles.hero} ${styles.heroCompany}`}>
        <Monogram className={styles.heroWatermark} />
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className={styles.kicker}>Saúde mental nas organizações</span>
            <h1>Avaliação de riscos psicossociais para empresas.</h1>
            <p className={styles.lead}>
              Diagnóstico técnico, conduzido por psicóloga, para apoiar sua organização no cumprimento da NR-1 e no
              cuidado com as pessoas.
            </p>
            <div className={styles.actions}>
              <a className={styles.btnPrimary} href="#contato">
                Solicitar uma proposta <ArrowDown size={16} aria-hidden="true" />
              </a>
              <a className={styles.btnOutline} href="#servicos">
                Ver serviços
              </a>
            </div>
            <p className={styles.heroNote}>Amanda Monteiro · Psicóloga · CRP 20/14136</p>
            <p className={styles.crossLink}>
              Procura atendimento individual? <a href={base}>Veja a página Para pacientes <ArrowRight size={14} aria-hidden="true" /></a>
            </p>
          </div>
          <div className={styles.heroVisual}>
            <Arc className={`${styles.heroArc} ${styles.heroArcWine}`} />
            <div className={styles.heroPhoto}>
              <Image
                src={`${assets}/amanda-laptop.webp`}
                alt="Amanda Monteiro à mesa de trabalho, com notebook e livros técnicos"
                fill
                priority
                sizes="(max-width: 900px) 70vw, 440px"
                style={{ objectFit: "cover", objectPosition: "50% 25%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* E2 NR-1 */}
      <section className={styles.section} id="nr1">
        <div className={`${styles.container} ${styles.nrGrid}`}>
          <div data-am-reveal>
            <span className={styles.kicker}>Por que isso importa agora</span>
            <h2 className={styles.h2Left}>A NR-1 mudou. E a saúde mental entrou na conta.</h2>
            <p className={styles.bodyLg}>
              A NR-1 passou a exigir que os riscos psicossociais, como sobrecarga, pressão por metas, conflitos e falta de
              apoio, sejam identificados e considerados no gerenciamento de riscos ocupacionais. Mais do que uma exigência
              legal, é uma oportunidade de entender o que adoece e o que fortalece a sua equipe.
            </p>
          </div>
          <aside className={styles.closingCard} data-am-reveal>
            <p>
              Meu trabalho é a avaliação psicossocial. A elaboração do PGR é feita pelo profissional de Segurança e Saúde
              no Trabalho (SST) da sua empresa, que usa o meu relatório como base técnica.
            </p>
          </aside>
        </div>
      </section>

      {/* E3 Serviços */}
      <section className={`${styles.section} ${styles.bgSand}`} id="servicos">
        <div className={styles.container}>
          <SectionHead title="Como posso apoiar sua organização" />
          <article className={styles.mainService} data-am-reveal>
            <ClipboardCheck size={32} strokeWidth={1.3} aria-hidden="true" />
            <div>
              <h3>Avaliação e reavaliação de riscos psicossociais</h3>
              <ul>
                {avaliacaoItens.map((item) => (
                  <li key={item}>
                    <Check size={16} aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
          <div className={styles.cardsGrid4}>
            {servicos.map((s) => (
              <article key={s.title} className={styles.cardRose} data-am-reveal>
                <s.icon size={26} strokeWidth={1.3} aria-hidden="true" />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* E4 Como funciona */}
      <section className={styles.section} id="avaliacao">
        <div className={styles.container}>
          <SectionHead kicker="Passo a passo" title="Como funciona a avaliação" />
          <ol className={styles.steps}>
            {etapas.map((s) => (
              <li key={s.n} data-am-reveal>
                <span className={styles.stepNum}>{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* E5 Diferencial */}
      <section className={styles.differential}>
        <div className={`${styles.container} ${styles.diffGrid}`}>
          <div data-am-reveal>
            <span className={`${styles.kicker} ${styles.kickerRose}`}>Por que comigo</span>
            <p>
              11 anos de experiência em Recursos Humanos, em grandes multinacionais, somados a mais de 8 anos de prática
              clínica. Entendo a rotina da empresa e a pessoa por trás de cada resultado.
            </p>
          </div>
          <div data-am-reveal>
            <span className={`${styles.kicker} ${styles.kickerRose}`}>Para quem</span>
            <p>
              Empresas, escolas, condomínios e instituições que querem cuidar das pessoas com seriedade técnica. Atendo
              RH, gestores e equipes de SST.
            </p>
          </div>
        </div>
      </section>

      {/* E6 FAQ */}
      <section className={`${styles.section} ${styles.bgSand}`} id="duvidas">
        <div className={`${styles.container} ${styles.narrow}`}>
          <SectionHead title="Dúvidas frequentes" />
          <Faq items={faq} />
          <p className={styles.faqLink}>
            Procura atendimento psicológico individual? <a href={base}>Veja a página Para pacientes <ArrowRight size={14} aria-hidden="true" /></a>
          </p>
        </div>
      </section>

      {/* E7 Chamada final */}
      <section className={styles.finalCta}>
        <Monogram className={styles.finalWatermark} />
        <div className={styles.container} data-am-reveal>
          <h2>Vamos cuidar de quem faz a sua empresa acontecer?</h2>
          <p>Conte um pouco sobre a sua organização e eu preparo uma proposta de acordo com a sua realidade.</p>
          <a className={styles.btnLight} href="#contato">
            Solicitar proposta
          </a>
        </div>
      </section>

      <ContactSection mode="empresa" />
      <LocationSection />
      <SiteFooter mode="empresa" />
      <FloatingWhatsApp href={waEmpresa} label="Solicitar proposta" />
    </main>
  );
}
