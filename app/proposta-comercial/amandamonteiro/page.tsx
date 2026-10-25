"use client";

import Image from "next/image";
import {
  ArrowRight,
  BatteryLow,
  Building2,
  Baby,
  Brain,
  Compass,
  MapPin,
  Cookie,
  HeartPulse,
  Moon,
  Route,
  ShoppingBag,
  Smile,
  Sprout,
  Video,
  ArrowUpRight,
  Waypoints,
  Flower2,
} from "lucide-react";
import {
  Arc,
  ContactSection,
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
  endereco,
  mapsEmbedUrl,
  mapsRouteUrl,
  useReveal,
  waPaciente,
} from "./shared";
import styles from "./style.module.css";

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#temas", label: "Temas" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

const identify = [
  { icon: Moon, text: "Você deita, mas a cabeça continua trabalhando: listas, preocupações, conversas que ainda vão acontecer." },
  { icon: BatteryLow, text: "Acorda cansada, mesmo depois de dormir, e sente que está sempre devendo: no trabalho, em casa, para si mesma." },
  { icon: Cookie, text: "No fim do dia, a comida, as compras ou o celular viram a única pausa possível, e depois vem a culpa." },
  { icon: Smile, text: "Sorri por fora, mas por dentro sente um nó que não passa." },
  { icon: Waypoints, text: "Está atravessando uma mudança, como maternidade, carreira, relacionamento ou corpo, e não se reconhece mais na própria rotina." },
  { icon: HeartPulse, text: "Convive com questões de saúde que afetam seu humor, sua energia e sua autoestima, e sente que ninguém entende de verdade." },
];

const pillars = [
  { title: "Ciência para orientar", text: "Um trabalho fundamentado na Terapia Cognitivo-Comportamental, uma abordagem baseada em evidências científicas." },
  { title: "Conforto para acolher", text: "Um espaço seguro, sem julgamentos e sem pressa, onde você pode ser inteira." },
  { title: "Presença para caminhar junto", text: "Um acompanhamento próximo, que respeita o seu ritmo e a sua história." },
];

const themes = [
  { icon: Brain, title: "Ansiedade, depressão e exaustão mental", text: "Para quando a mente não desacelera, o corpo vive em alerta e o descanso nunca parece suficiente." },
  { icon: Compass, title: "Sobrecarga e vida profissional", text: "Para quem sente o peso de dar conta de tudo: carreira, casa, relações e cobranças internas." },
  { icon: ShoppingBag, title: "Comer, comprar e “descontar”", text: "Para quem percebe que busca alívio em comportamentos que depois trazem culpa, e quer entender o que eles estão tentando dizer." },
  { icon: Baby, title: "Maternidade e perinatalidade", text: "Do desejo de ser mãe ao pós-parto e aos desafios do dia a dia com os filhos: um espaço para viver a maternidade real, sem idealizações." },
  { icon: Flower2, title: "Saúde da mulher e emoções", text: "SOP, TDPM, endometriose, infertilidade, fibromialgia e menopausa afetam muito mais do que o corpo. Aqui, o impacto emocional dessas condições também é levado a sério." },
  { icon: Route, title: "Transições de vida", text: "Mudanças de carreira, de relacionamento, de cidade ou de identidade. Momentos em que é natural se sentir perdida, e é possível se reencontrar." },
];

const seals = [
  { n: "8+", label: "anos de atuação clínica" },
  { n: "11", label: "anos em Recursos Humanos" },
  { n: "TCC", label: "Terapia Cognitivo-Comportamental" },
  { n: "Pós", label: "Neurociência e Comportamento" },
];

const steps = [
  { n: "01", title: "Primeiro contato", text: "Você envia uma mensagem pelo WhatsApp e nossa equipe de atendimento tira suas dúvidas e apresenta os horários disponíveis." },
  { n: "02", title: "Primeira sessão", text: "Um momento para nos conhecermos. Você conta o que está vivendo, e eu compreendo sua história e o que você busca." },
  { n: "03", title: "Plano de cuidado", text: "Juntas, definimos objetivos e a frequência das sessões de acordo com a sua necessidade, sem pressa e sem fórmulas prontas." },
  { n: "04", title: "Processo terapêutico", text: "Trabalhamos com escuta, reflexão e estratégias práticas da TCC, para que você entenda seus padrões e encontre novas formas de responder a eles." },
];

const faq = [
  { q: "Como sei se preciso de terapia?", a: "Se algo tem tirado sua paz, seu sono, sua energia ou sua alegria por um tempo, vale a pena conversar. Não é preciso estar em crise para buscar ajuda." },
  { q: "Você atende homens?", a: "Não. Meu atendimento clínico é dedicado exclusivamente a mulheres adultas." },
  { q: "A terapia online funciona tão bem quanto a presencial?", a: "Sim. Pesquisas mostram resultados semelhantes entre as duas modalidades. O importante é você ter um lugar reservado e uma conexão estável." },
  { q: "Atende brasileiras que moram fora do país?", a: "Sim. O atendimento online está disponível para mulheres em todo o Brasil e para brasileiras que vivem no exterior." },
  { q: "Quanto tempo dura a terapia?", a: "Depende dos seus objetivos e do seu momento. Definimos metas juntas e revisamos o caminho ao longo do processo, sem pressa." },
  { q: "O que eu conto na terapia fica em sigilo?", a: "Sim. O sigilo é um dever ético da psicóloga, previsto no Código de Ética Profissional." },
  { q: "Você atende por convênio?", a: "Não atendo por convênio, mas emito nota fiscal de todas as sessões. Você pode usá-la para solicitar reembolso ao seu plano de saúde, conforme as regras dele." },
  { q: "Quanto custa a sessão?", a: "Os valores e as formas de pagamento são informados pelo WhatsApp, junto com os horários disponíveis." },
  { q: "Como faço para agendar?", a: "Basta clicar no botão de WhatsApp. Nossa equipe de atendimento vai te responder e apresentar os horários." },
];

export default function AmandaMonteiroPreview() {
  useReveal();

  return (
    <main id="inicio" className={styles.site}>
      <PreviewBar />
      <TopBar />
      <SiteHeader nav={nav} ctaHref={waPaciente} homeHref="#inicio" />

      {/* Hero */}
      <section className={styles.hero}>
        <Monogram className={styles.heroWatermark} />
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className={styles.kicker}>Saúde mental da mulher</span>
            <h1>Quando a cabeça não desliga, o cansaço vira rotina.</h1>
            <p className={styles.lead}>
              Psicoterapia para mulheres adultas que vivem no limite da ansiedade e da exaustão mental. Um espaço seguro
              para entender o que está por trás desse peso e construir novas formas de lidar com ele.
            </p>
            <p className={styles.signature}>
              Ciência para orientar, conforto para acolher e presença para caminhar junto.
            </p>
            <div className={styles.actions}>
              <a className={styles.btnPrimary} href={waPaciente} target="_blank" rel="noreferrer">
                Agendar minha primeira conversa <ArrowRight size={16} />
              </a>
              <a className={styles.btnOutline} href={`${base}/empresas`}>
                <Building2 size={16} aria-hidden="true" /> Sou empresa <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
            <p className={styles.heroNote}>Atendimento online e presencial · Ponta Negra, Manaus · Sigilo garantido</p>
          </div>
          <div className={styles.heroVisual}>
            <Arc className={styles.heroArc} />
            <div className={styles.heroPhoto}>
              <Image
                src={`${assets}/amanda-livro.webp`}
                alt="Amanda Monteiro, psicóloga, sorrindo com um livro nas mãos"
                fill
                priority
                sizes="(max-width: 900px) 70vw, 440px"
                style={{ objectFit: "cover", objectPosition: "50% 18%" }}
              />
            </div>
            <div className={styles.heroSeal}>
              <strong>Amanda Monteiro</strong>
              <span>Psicóloga · CRP 20/14136</span>
            </div>
          </div>
        </div>
      </section>

      {/* Você se identifica */}
      <section className={`${styles.section} ${styles.bgSand}`} id="identifica">
        <div className={styles.container}>
          <SectionHead
            kicker="Talvez seja com você"
            title="Talvez você nunca tenha dito isso em voz alta"
            sub="Muitas mulheres chegam até aqui sentindo que “deveriam dar conta”. Veja se algo disso soa familiar:"
          />
          <div className={styles.cardsGrid2}>
            {identify.map((item) => (
              <article key={item.text} className={styles.cardLight} data-am-reveal>
                <item.icon size={26} strokeWidth={1.3} aria-hidden="true" />
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className={styles.closingCard} data-am-reveal>
            <p>
              Se você se reconheceu em alguma dessas frases, saiba que isso não é fraqueza nem falta de força de vontade.
              É um sinal de que você está carregando mais do que consegue sozinha. Pedir ajuda pode ser o primeiro gesto
              de cuidado consigo mesma.
            </p>
            <a className={styles.btnLight} href={waPaciente} target="_blank" rel="noreferrer">
              Quero conversar sobre isso
            </a>
          </div>
        </div>
      </section>

      {/* Faixa do lema */}
      <section className={styles.motto} aria-label="Os três pilares do cuidado">
        <Arc className={styles.mottoArc} />
        <div className={styles.container}>
          <h2 data-am-reveal>
            Não se trata de apagar o que você viveu. Trata-se de caminhar junto para que fique mais leve.
          </h2>
          <div className={styles.pillars}>
            {pillars.map((p, i) => (
              <div key={p.title} className={styles.pillar} data-am-reveal>
                <span>0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temas */}
      <section className={styles.section} id="temas">
        <div className={styles.container}>
          <SectionHead kicker="Como posso te ajudar" title="Cada fase da vida da mulher merece cuidado" />
          <div className={styles.cardsGrid3}>
            {themes.map((t) => (
              <article key={t.title} className={styles.cardRose} data-am-reveal>
                <t.icon size={28} strokeWidth={1.3} aria-hidden="true" />
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </article>
            ))}
          </div>
          <div className={styles.centerAction}>
            <a className={styles.btnPrimary} href={waPaciente} target="_blank" rel="noreferrer">
              Conversar sobre o meu momento
            </a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className={`${styles.section} ${styles.bgSand} ${styles.about}`} id="sobre">
        <Monogram className={styles.aboutWatermark} />
        <div className={`${styles.container} ${styles.aboutGrid}`}>
          <div className={styles.aboutPhotoWrap} data-am-reveal>
            <Arc className={styles.aboutArc} />
            <div className={styles.aboutPhoto}>
              <Image
                src={`${assets}/amanda-laptop.webp`}
                alt="Amanda Monteiro à mesa, com o notebook e livros de Terapia Cognitivo-Comportamental"
                fill
                sizes="(max-width: 900px) 90vw, 480px"
                style={{ objectFit: "cover", objectPosition: "50% 30%" }}
              />
            </div>
          </div>
          <div className={styles.aboutCopy} data-am-reveal>
            <span className={styles.kicker}>Psicóloga · Saúde mental da mulher</span>
            <h2>Prazer, eu sou a Amanda</h2>
            <p className={styles.idLine}>Amanda Monteiro · Psicóloga · CRP 20/14136</p>
            <p>
              Antes de chegar à clínica, construí uma trajetória de 11 anos na área de Recursos Humanos, atuando em grandes
              multinacionais. Foi ali que vi de perto quantas mulheres competentes e dedicadas estavam se esgotando em
              silêncio, tentando equilibrar carreira, família e expectativas que nunca acabam.
            </p>
            <p>
              Há mais de 8 anos atuo na clínica, e hoje meu trabalho tem um foco claro: acolher mulheres adultas que vivem
              a ansiedade, a sobrecarga e a sensação de nunca conseguir “desligar”.
            </p>
            <p>
              Minha prática é fundamentada na Terapia Cognitivo-Comportamental (TCC), uma abordagem baseada em evidências
              científicas. Sou pós-graduada em Psicologia Baseada em Evidências e em Neurociência e Comportamento. Na
              prática, isso significa escuta cuidadosa, objetivos construídos em conjunto e ferramentas que você leva para
              o seu dia a dia.
            </p>
            <p>
              Acredito que cuidar da saúde mental da mulher também passa pelos lugares onde ela vive e trabalha. Por isso,
              além da clínica, apoio empresas e instituições no cuidado com a saúde mental de suas equipes.
            </p>
            <blockquote>“Ciência para orientar, conforto para acolher e presença para caminhar junto.”</blockquote>
          </div>
        </div>
        <div className={styles.container}>
          <ul className={styles.seals}>
            {seals.map((s) => (
              <li key={s.label} data-am-reveal>
                <strong>{s.n}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
          <div className={styles.centerAction}>
            <a className={styles.btnPrimary} href={waPaciente} target="_blank" rel="noreferrer">
              Agendar uma conversa
            </a>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className={styles.section} id="como-funciona">
        <div className={styles.container}>
          <SectionHead
            kicker="Passo a passo"
            title="Um caminho construído com você, no seu ritmo"
            sub="Você não precisa ter tudo claro antes de entrar em contato. Começa com uma mensagem."
          />
          <ol className={styles.steps}>
            {steps.map((s) => (
              <li key={s.n} data-am-reveal>
                <span className={styles.stepNum}>{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>

          <div className={styles.highlightCard} data-am-reveal>
            <Sprout size={28} strokeWidth={1.3} aria-hidden="true" />
            <div>
              <h3>Escuta sem pressa</h3>
              <p>
                Aqui, cada sessão respeita o seu tempo. O ritmo e a duração do acompanhamento são definidos pela sua
                necessidade, não pelo relógio, porque o que você vive merece ser ouvido por inteiro.
              </p>
            </div>
          </div>

          <div className={styles.venue}>
            <div className={styles.venuePhotos} data-am-reveal>
              <div className={styles.venuePhotoA}>
                <Image
                  src={`${assets}/consultorio-recepcao.webp`}
                  alt="Recepção acolhedora com sofá curvo, iluminação suave e plantas"
                  fill
                  sizes="(max-width: 900px) 80vw, 460px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className={styles.venuePhotoB}>
                <Image
                  src={`${assets}/consultorio-sala.webp`}
                  alt="Sala de atendimento com poltronas, sofá e vista para a cidade"
                  fill
                  sizes="(max-width: 900px) 60vw, 340px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className={styles.venueInfo} data-am-reveal>
              <span className={styles.kicker}>Atendimento presencial</span>
              <h3>Um espaço reservado, pensado para acolher</h3>
              <div className={styles.venueMap}>
                <iframe
                  title="Mapa: Harmony Saúde Integral, Torre Soho, Ponta Negra, Manaus"
                  src={mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className={styles.venueAddress}>
                <MapPin size={20} strokeWidth={1.4} aria-hidden="true" />
                <p>{endereco}</p>
              </div>
              <a className={styles.btnOutline} href={mapsRouteUrl} target="_blank" rel="noreferrer">
                Como chegar <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div className={styles.onlineStrip} data-am-reveal>
            <Video size={26} strokeWidth={1.3} aria-hidden="true" />
            <div>
              <h3>Também online, de onde você estiver</h3>
              <p>
                Por videochamada, de qualquer lugar do Brasil ou do exterior, com o mesmo cuidado e sigilo do
                atendimento presencial.
              </p>
            </div>
          </div>

          <p className={styles.supportLine}>
            Segunda a sábado, das 8h às 19h · Emissão de nota fiscal · Sigilo garantido pelo Código de Ética Profissional
          </p>
          <div className={styles.centerAction}>
            <a className={styles.btnPrimary} href={waPaciente} target="_blank" rel="noreferrer">
              Ver horários disponíveis
            </a>
          </div>
        </div>
      </section>

      {/* Faixa Para empresas */}
      <section className={styles.companyBand}>
        <Arc className={styles.companyArc} />
        <div className={`${styles.container} ${styles.companyGrid}`}>
          <div data-am-reveal>
            <span className={`${styles.kicker} ${styles.kickerRose}`}>Para empresas e instituições</span>
            <h2>Saúde mental também é responsabilidade da organização</h2>
            <p>
              Com a atualização da NR-1, os riscos psicossociais passaram a fazer parte do gerenciamento de riscos
              ocupacionais. Realizo a avaliação psicossocial com instrumentos validados, que serve de base técnica para o
              PGR, além de plantão psicológico, palestras, treinamentos e rodas de conversa.
            </p>
          </div>
          <a className={styles.btnLight} href={`${base}/empresas`}>
            Conhecer os serviços para empresas <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.bgSand}`} id="duvidas">
        <div className={`${styles.container} ${styles.narrow}`}>
          <SectionHead title="Dúvidas frequentes" />
          <Faq items={faq} />
          <p className={styles.faqLink}>
            Tem dúvidas sobre os serviços para empresas? <a href={`${base}/empresas`}>Veja a página Para empresas <ArrowRight size={14} aria-hidden="true" /></a>
          </p>
        </div>
      </section>

      {/* Chamada final */}
      <section className={styles.finalCta}>
        <Monogram className={styles.finalWatermark} />
        <div className={styles.container} data-am-reveal>
          <h2>Você não precisa carregar tudo sozinha.</h2>
          <p>Dar o primeiro passo pode parecer difícil, mas ele não precisa ser grande. Uma mensagem já é um começo. Estou aqui para te ouvir.</p>
          <a className={styles.btnLight} href={waPaciente} target="_blank" rel="noreferrer">
            Falar pelo WhatsApp
          </a>
          <small>Online e presencial · Sigilo garantido · Brasil e exterior</small>
        </div>
      </section>

      <ContactSection mode="paciente" />
      <SiteFooter mode="paciente" />
      <FloatingWhatsApp href={waPaciente} />
    </main>
  );
}
