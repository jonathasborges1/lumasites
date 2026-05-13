import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookOpen,
  CalendarCheck,
  Clock,
  FileText,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Search,
  Shield,
  Smartphone,
  UserRound,
} from "lucide-react";
import { site } from "@/content/site";
import { whatsappLink } from "@/utils/whatsapp";

export type Faq = {
  q: string;
  a: string;
};

export type Benefit = {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
};

export type SectionBlock = {
  h2: string;
  paragraphs: string[];
};

export type SiteEssential = {
  Icon: LucideIcon;
  title: string;
  text: string;
};

export type ProcessStep = {
  num: string;
  h3: string;
  content: string;
};

export type InternalLink = {
  href: string;
  label: string;
  text: string;
};

const slug = "site-para-psicologo-em-manaus";
const articleUrl = `${site.url}/blog/${slug}`;
export const thumbnail = {
  src: "/blog/site-para-psicologo-em-manaus.png",
  alt: "Psicóloga em Manaus usando notebook para fortalecer presença profissional no Google",
  width: 1536,
  height: 1024,
  headline: "Site para Psicólogo em Manaus",
  subheadline: "Credibilidade, SEO local e mais contatos pelo Google",
};

export const articleDates = {
  publishedAt: "2026-05-09",
  publishedLabel: "9 de maio de 2026",
  updatedAt: null,
  updatedLabel: null,
};

export const pageMetadata: Metadata = {
  title: "Site para Psicólogo em Manaus | Mais Pacientes pelo Google",
  description:
    "Entenda como um site para psicólogo em Manaus ajuda a transmitir credibilidade, aparecer no Google e gerar agendamentos qualificados.",
  keywords: [
    "site para psicólogo em Manaus",
    "criação de site para psicólogo em Manaus",
    "site profissional para psicóloga",
    "psicólogo no Google Manaus",
    "marketing digital para psicólogo em Manaus",
    "como conseguir pacientes pelo Google psicólogo",
    "SEO local para psicólogos em Manaus",
  ],
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: "Site para Psicólogo em Manaus | Credibilidade e SEO local",
    description:
      "Guia prático para psicólogos e psicólogas de Manaus que querem fortalecer presença no Google com um site profissional, ético e acolhedor.",
    url: articleUrl,
    type: "article",
    images: [
      {
        url: thumbnail.src,
        width: thumbnail.width,
        height: thumbnail.height,
        alt: thumbnail.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site para Psicólogo em Manaus | Mais Pacientes pelo Google",
    description:
      "Entenda como um site para psicólogo em Manaus ajuda a transmitir credibilidade, aparecer no Google e gerar agendamentos qualificados.",
    images: [thumbnail.src],
  },
};

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Site para Psicólogo em Manaus: como fortalecer sua presença no Google e atrair pacientes com mais confiança",
  description:
    "Artigo sobre criação de site para psicólogos em Manaus, SEO local, presença digital ética e como transformar buscas no Google em contatos qualificados.",
  author: {
    "@type": "Person",
    name: "Jonathas Borges",
    url: site.url,
    sameAs: ["https://www.instagram.com/jonathasborges1"],
  },
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
  datePublished: articleDates.publishedAt,
  ...(articleDates.updatedAt ? { dateModified: articleDates.updatedAt } : {}),
  image: `${site.url}${thumbnail.src}`,
  url: articleUrl,
  mainEntityOfPage: articleUrl,
  inLanguage: "pt-BR",
  keywords:
    "site para psicólogo em Manaus, criação de site para psicólogo em Manaus, psicólogo no Google Manaus, marketing digital para psicólogo em Manaus",
  about: {
    "@type": "Thing",
    name: "Site profissional e SEO local para psicólogos em Manaus",
  },
};

export const wppLink = whatsappLink({
  service: "Site para psicólogo em Manaus",
  custom:
    "Sou psicólogo(a) em Manaus e quero entender como um site profissional pode fortalecer minha presença no Google e gerar contatos qualificados.",
});

export const faqs: Faq[] = [
  {
    q: "Quanto custa um site para psicólogo em Manaus?",
    a: "O valor depende da estrutura. Uma página profissional simples costuma ser mais enxuta, enquanto um site com blog, páginas internas, textos estratégicos e SEO local exige mais planejamento. O ideal é avaliar objetivo, conteúdo necessário e nível de personalização antes de fechar o projeto.",
  },
  {
    q: "Psicólogo pode ter site profissional?",
    a: "Sim. Psicólogos podem ter site profissional, desde que a comunicação seja ética, informativa e sem promessas de resultado. O site pode apresentar formação, abordagem, formato de atendimento, localização, disponibilidade e canais de contato.",
  },
  {
    q: "Um site ajuda psicólogo a conseguir pacientes pelo Google?",
    a: "Ajuda quando é bem estruturado. O site precisa ter conteúdo claro, SEO local, boa velocidade, adaptação para celular e informações relevantes para quem pesquisa por psicólogo em Manaus ou por temas relacionados à psicoterapia.",
  },
  {
    q: "Instagram substitui um site para psicólogo?",
    a: "Não substitui. O Instagram ajuda no relacionamento e na produção de conteúdo, mas o site é uma base própria, indexável pelo Google e mais organizada para quem busca informações antes de agendar uma consulta.",
  },
  {
    q: "O que colocar em um site para psicóloga?",
    a: "Um site para psicóloga pode incluir apresentação profissional, abordagem, formação, modalidades de atendimento, localização ou área atendida, dúvidas frequentes, contato e artigos educativos. A linguagem deve ser acolhedora, objetiva e ética.",
  },
  {
    q: "Site para psicólogo precisa de blog?",
    a: "Não é obrigatório, mas ajuda bastante no SEO. Um blog permite responder dúvidas comuns dos pacientes, ampliar a presença orgânica no Google e construir autoridade com conteúdo útil ao longo do tempo.",
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export const benefits: Benefit[] = [
  {
    Icon: Search,
    iconClass: "text-glow-cyan",
    title: "Presença em buscas locais",
    text: "O site ajuda o Google a associar seu atendimento a Manaus, bairros, modalidade online ou presencial e temas que pacientes realmente pesquisam.",
  },
  {
    Icon: HeartHandshake,
    iconClass: "text-accent-amber",
    title: "Credibilidade antes da mensagem",
    text: "Antes de agendar, o paciente quer entender quem atende, como funciona o processo e se aquele profissional transmite segurança.",
  },
  {
    Icon: Shield,
    iconClass: "text-accent-green",
    title: "Comunicação ética e cuidadosa",
    text: "Um site próprio permite explicar sua atuação com sobriedade, sem promessas de resultado e sem depender de formatos rápidos das redes sociais.",
  },
  {
    Icon: MessageCircle,
    iconClass: "text-accent-magenta",
    title: "Contato mais qualificado",
    text: "Quando o visitante lê sobre abordagem, atendimento e próximos passos, a primeira conversa tende a chegar com menos dúvidas e mais intenção.",
  },
];

export const articleSections: SectionBlock[] = [
  {
    h2: "Por que psicólogos precisam aparecer no Google",
    paragraphs: [
      "O Google costuma ser o primeiro lugar onde muitas pessoas buscam ajuda. Mesmo quando recebem uma indicação, elas pesquisam o nome do profissional para validar informações antes de marcar uma consulta. Essa busca faz parte da decisão: o paciente quer entender se o atendimento é presencial, online ou híbrido, qual é a abordagem, onde fica o consultório e como iniciar o contato.",
      "Quando o profissional não aparece no Google, ou aparece apenas com informações soltas em redes sociais, existe uma perda de confiança. Isso não significa falta de competência clínica. Significa que a presença digital ainda não ajuda a transmitir essa competência para quem está procurando apoio em um momento sensível.",
      "Para psicólogos em Manaus, o fator local é ainda mais importante. A cidade tem bairros distantes, rotinas intensas e perfis diferentes de pacientes. Muitas pessoas procuram atendimento próximo, acessível, discreto ou com possibilidade de sessão online. Um site para psicólogo em Manaus ajuda a conectar essa intenção de busca ao profissional certo.",
    ],
  },
  {
    h2: "Instagram sozinho não é suficiente",
    paragraphs: [
      "O Instagram pode ser uma ferramenta útil para relacionamento, conteúdo e presença de marca. Mas ele não substitui um site profissional. Nas redes sociais, o conteúdo aparece dentro de um feed disputado, sujeito ao algoritmo e ao consumo rápido. Um post pode ser visto hoje e desaparecer amanhã.",
      "Também existe um ponto importante para a psicologia: nem todo paciente quer acompanhar um psicólogo publicamente nas redes antes de entrar em contato. Muitas pessoas preferem uma experiência mais discreta, objetiva e privada. O site cumpre esse papel porque organiza informações essenciais sem expor o visitante a comentários, curtidas ou distrações do feed.",
      "A diferença é simples: o Instagram ajuda quem já encontrou você a acompanhar sua presença. O site ajuda pessoas que ainda não conhecem você a encontrarem seu trabalho no Google.",
    ],
  },
  {
    h2: "Como um site profissional transmite credibilidade",
    paragraphs: [
      "A psicologia é uma área baseada em confiança. Antes de marcar uma consulta, o paciente precisa sentir que está diante de um profissional sério, cuidadoso e preparado. Um site profissional contribui para essa percepção porque apresenta as informações em uma ordem clara: quem é o psicólogo, qual sua formação, como atende, quais demandas acompanha e como iniciar o contato.",
      "Um bom site profissional para psicóloga ou psicólogo não precisa ser exagerado. Na verdade, o ideal é que seja sóbrio, humano e objetivo. O visual deve transmitir acolhimento, mas também profissionalismo. O texto deve orientar, não prometer resultados. A estrutura deve facilitar a decisão do paciente sem pressionar.",
      "Credibilidade também vem da experiência de navegação. Se o site carrega rápido, funciona bem no celular e tem informações fáceis de encontrar, a percepção de cuidado aumenta. Se a página demora, quebra ou parece improvisada, a insegurança aparece antes mesmo da primeira conversa.",
    ],
  },
  {
    h2: "Vantagens do SEO local para psicólogos em Manaus",
    paragraphs: [
      "SEO local é o conjunto de estratégias que ajuda uma página a aparecer quando alguém pesquisa por um serviço em uma região específica. No caso da psicologia, isso envolve buscas como psicólogo em Manaus, terapia em Manaus, psicóloga no Adrianópolis, psicólogo online Manaus ou atendimento psicológico para ansiedade em Manaus.",
      "Para o Google, não basta o site existir. Ele precisa entender o contexto. Isso significa que a página deve mencionar a cidade, explicar a área de atendimento, usar títulos claros, ter boa estrutura técnica e manter consistência com outros canais, como o Perfil da Empresa no Google.",
      "A criação de site para psicólogo em Manaus deve considerar esse cenário desde o início. Um site genérico, sem contexto local, tende a ter menos força. Já uma página pensada para buscas locais ajuda o profissional a competir melhor por pacientes que realmente estão procurando atendimento na cidade.",
    ],
  },
  {
    h2: "Como pacientes encontram psicólogos no Google",
    paragraphs: [
      "O caminho geralmente começa com uma necessidade. A pessoa percebe um sofrimento, recebe uma recomendação ou decide procurar apoio. Em seguida, abre o Google e pesquisa algo relacionado ao que sente ou ao profissional que deseja encontrar.",
      "Essa busca pode ser direta, como psicólogo em Manaus. Também pode ser mais específica, como psicóloga para ansiedade em Manaus, terapia de casal em Manaus, psicólogo infantil em Manaus ou psicólogo online no Amazonas. Quanto mais clara for a estrutura do site, mais sinais o Google tem para entender em quais pesquisas aquela página pode fazer sentido.",
      "É por isso que aparecer como psicólogo no Google em Manaus não deve ser visto apenas como uma questão técnica. Na prática, significa estar presente no momento em que alguém está buscando ajuda e precisa encontrar uma informação confiável antes de tomar uma decisão.",
    ],
  },
  {
    h2: "Diferença entre rede social e site profissional",
    paragraphs: [
      "A rede social é um canal de relacionamento. O site é um ativo digital. No Instagram, você publica conteúdos, conversa com seguidores e constrói familiaridade. No site, você estrutura sua autoridade, organiza informações essenciais e cria uma base que pode aparecer no Google por muito tempo.",
      "Outra diferença importante é o controle. Em uma rede social, o alcance depende de algoritmo, formato, frequência e engajamento. No site, o conteúdo é seu. A URL é sua. A estrutura é sua. O paciente pode encontrar suas informações diretamente, sem depender de uma plataforma que muda regras a todo momento.",
      "Para psicólogos, isso é especialmente relevante porque muitos pacientes preferem um ambiente mais reservado. Uma pessoa pode não querer seguir um perfil publicamente, mas pode acessar um site, ler sobre o atendimento e entrar em contato de forma discreta.",
    ],
  },
  {
    h2: "Site rápido e otimizado influencia no Google?",
    paragraphs: [
      "Sim. Velocidade e experiência do usuário influenciam tanto a percepção do paciente quanto a forma como o Google avalia uma página. Um site lento pode fazer a pessoa desistir antes mesmo de ler o conteúdo. Isso é ainda mais crítico no celular, onde grande parte das buscas locais acontece.",
      "Além da velocidade, a estrutura técnica importa. Títulos bem organizados, meta description clara, URL amigável, sitemap, dados estruturados e boa adaptação mobile ajudam o Google a entender melhor a página. Esses elementos não substituem conteúdo útil, mas fazem o conteúdo ser encontrado com mais facilidade.",
      "Um site para psicólogo em Manaus precisa unir três coisas: conteúdo humano, design confiável e base técnica correta. Quando uma dessas partes falha, o resultado perde força.",
    ],
  },
  {
    h2: "Como gerar agendamentos através do Google",
    paragraphs: [
      "Aparecer no Google é apenas o primeiro passo. Para gerar agendamentos, o site precisa conduzir o visitante com clareza. Isso não significa usar chamadas agressivas. Na área da psicologia, a conversão deve ser natural, respeitosa e informativa.",
      "O paciente precisa entender como funciona o atendimento, sentir segurança e encontrar um caminho simples para iniciar o contato. Um botão de WhatsApp pode funcionar bem, desde que esteja contextualizado com frases como tirar dúvidas sobre atendimento, verificar disponibilidade ou enviar mensagem para agendamento.",
      "Também ajuda explicar o que acontece depois do primeiro contato. Se a pessoa envia uma mensagem, ela quer saber se receberá informações sobre horários, modalidade, valores e próximos passos. Um site bem planejado não força a decisão. Ele remove dúvidas.",
    ],
  },
  {
    h2: "Marketing digital para psicólogo em Manaus com ética e clareza",
    paragraphs: [
      "Marketing digital para psicólogo em Manaus não precisa ser apelativo. Pelo contrário, quanto mais sensível for a área, mais importante é comunicar com responsabilidade. O site deve respeitar os limites éticos da profissão, evitando promessas de cura, garantias de resultado ou exposição inadequada de pacientes.",
      "O foco deve estar em informação, orientação e apresentação profissional. Conteúdos educativos podem ajudar muito: quando procurar terapia, como funciona a primeira sessão, diferenças entre atendimento presencial e online, dúvidas comuns sobre psicoterapia e orientações gerais para quem está considerando iniciar acompanhamento.",
      "Esse tipo de conteúdo amplia a presença orgânica e fortalece autoridade. Em vez de depender apenas de uma página principal, o psicólogo pode construir um conjunto de artigos que respondem perguntas reais dos pacientes.",
    ],
  },
];

export const siteEssentials: SiteEssential[] = [
  {
    Icon: UserRound,
    title: "Apresentação profissional",
    text: "Explique quem atende, formação, abordagem e experiência de forma clara, sem transformar o site em currículo frio.",
  },
  {
    Icon: MapPin,
    title: "Contexto local de Manaus",
    text: "Inclua cidade, modalidade de atendimento, região atendida e informações que ajudem o Google a entender a busca local.",
  },
  {
    Icon: Smartphone,
    title: "Experiência forte no celular",
    text: "Boa parte das buscas por psicólogo acontece pelo smartphone. O site precisa carregar rápido e facilitar o contato.",
  },
  {
    Icon: BookOpen,
    title: "Conteúdo educativo",
    text: "Artigos e perguntas frequentes ajudam o paciente a entender o processo terapêutico antes da primeira mensagem.",
  },
  {
    Icon: FileText,
    title: "Páginas e textos objetivos",
    text: "Página inicial, sobre, atendimento, contato e dúvidas frequentes já criam uma base sólida para presença profissional.",
  },
  {
    Icon: CalendarCheck,
    title: "Caminho simples para agendar",
    text: "Botões de contato, WhatsApp e explicação dos próximos passos reduzem ansiedade e tornam a decisão mais tranquila.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    h3: "Diagnóstico da atuação e do público",
    content:
      "Entendemos se o atendimento é presencial, online ou híbrido, quais demandas são mais comuns, como os pacientes chegam hoje e qual linguagem combina com o posicionamento profissional.",
  },
  {
    num: "02",
    h3: "Arquitetura do conteúdo com cuidado ético",
    content:
      "Organizamos páginas, títulos, perguntas frequentes e chamadas de contato sem promessas de resultado, mantendo clareza e sobriedade na comunicação.",
  },
  {
    num: "03",
    h3: "Design acolhedor e desenvolvimento rápido",
    content:
      "Criamos uma experiência visual profissional, responsiva e rápida, com foco em leitura confortável e navegação simples pelo celular.",
  },
  {
    num: "04",
    h3: "SEO local e publicação",
    content:
      "Configuramos metadados, sitemap, canonical, dados estruturados e textos com contexto de Manaus para aumentar a chance de descoberta pelo Google.",
  },
];

export const localDifferentials: Benefit[] = [
  {
    Icon: BadgeCheck,
    iconClass: "text-glow-cyan",
    title: "Conteúdo humano, não genérico",
    text: "O texto precisa soar como orientação profissional, não como uma página comercial fria ou cheia de promessas.",
  },
  {
    Icon: Clock,
    iconClass: "text-accent-amber",
    title: "Atendimento no horário de Manaus",
    text: "Ajustes, aprovações e dúvidas fluem melhor quando o projeto respeita o ritmo local e o mesmo fuso.",
  },
  {
    Icon: Shield,
    iconClass: "text-accent-green",
    title: "Sobriedade visual",
    text: "Para psicologia, a confiança vem de clareza, conforto e consistência, não de excesso de elementos chamativos.",
  },
  {
    Icon: Search,
    iconClass: "text-accent-magenta",
    title: "Base preparada para SEO",
    text: "O projeto já nasce com estrutura para aparecer em buscas locais e crescer com novos conteúdos no blog.",
  },
];

export const internalLinks: InternalLink[] = [
  {
    href: "/blog/como-aparecer-no-google-em-manaus",
    label: "Como aparecer no Google em Manaus",
    text: "Entenda os sinais locais que ajudam um negócio ou profissional a ser encontrado nas buscas.",
  },
  {
    href: "/site-profissional-manaus",
    label: "Site profissional em Manaus",
    text: "Veja como um site profissional pode transmitir credibilidade antes do primeiro contato.",
  },
  {
    href: "/criar-site-em-manaus",
    label: "Criar site em Manaus",
    text: "Conheça formatos, prazos e caminhos para publicar uma presença digital própria.",
  },
];
