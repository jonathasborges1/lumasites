import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeCheck,
  BookOpen,
  CalendarCheck,
  Clock,
  FileText,
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

const slug = "site-para-medico-em-manaus";
const articleUrl = `${site.url}/blog/${slug}`;

export const thumbnail = {
  src: "/blog/site-para-medico-em-manaus.webp",
  alt: "Médico em consultório em Manaus com notebook mostrando presença profissional no Google",
  width: 1680,
  height: 960,
  headline: "Site para Médico em Manaus",
  subheadline: "Credibilidade, SEO local e mais pacientes pelo Google",
};

export const articleDates = {
  publishedAt: "2026-05-12",
  publishedLabel: "12 de maio de 2026",
  updatedAt: null,
  updatedLabel: null,
};

export const pageMetadata: Metadata = {
  title: "Site para Médico em Manaus | Mais Pacientes pelo Google",
  description:
    "Entenda como um site para médico em Manaus ajuda a transmitir credibilidade, aparecer no Google e gerar agendamentos qualificados.",
  keywords: [
    "site para médico em Manaus",
    "criação de site para médico em Manaus",
    "site profissional para médico Manaus",
    "médico no Google Manaus",
    "marketing digital para médico em Manaus",
    "como conseguir pacientes pelo Google médico",
    "SEO local para médicos em Manaus",
  ],
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: "Site para Médico em Manaus | Credibilidade e SEO local",
    description:
      "Guia prático para médicos de Manaus que querem fortalecer presença no Google com um site profissional, ético e otimizado para buscas locais.",
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
    title: "Site para Médico em Manaus | Mais Pacientes pelo Google",
    description:
      "Entenda como um site para médico em Manaus ajuda a transmitir credibilidade, aparecer no Google e gerar agendamentos qualificados.",
    images: [thumbnail.src],
  },
};

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Site para Médico em Manaus: como fortalecer sua presença no Google e atrair pacientes com mais confiança",
  description:
    "Artigo sobre criação de site para médicos em Manaus, SEO local, presença digital ética e como transformar buscas no Google em agendamentos qualificados.",
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
    "site para médico em Manaus, criação de site para médico em Manaus, médico no Google Manaus, marketing digital para médico em Manaus",
  about: {
    "@type": "Thing",
    name: "Site profissional e SEO local para médicos em Manaus",
  },
};

export const wppLink = whatsappLink({
  service: "Site para médico em Manaus",
  custom:
    "Sou médico(a) em Manaus e quero entender como um site profissional pode fortalecer minha presença no Google e gerar mais agendamentos qualificados.",
});

export const faqs: Faq[] = [
  {
    q: "Quanto custa um site para médico em Manaus?",
    a: "O valor varia com a estrutura. Um site com página principal, sobre, especialidade, FAQ e contato pode ser simples. Quando o projeto inclui blog, múltiplas especialidades, SEO local aprofundado e integração com agendamento, o escopo aumenta. O ideal é alinhar objetivos e conteúdo antes de definir investimento.",
  },
  {
    q: "Médico pode ter site profissional?",
    a: "Sim. O CFM permite que médicos tenham site profissional, desde que a comunicação respeite o Código de Ética Médica. Isso significa evitar promessas de cura, não usar depoimentos de pacientes e manter linguagem informativa e ética. O site pode apresentar formação, especialidade, local de atendimento e canais de contato.",
  },
  {
    q: "Um site ajuda médico a conseguir pacientes pelo Google?",
    a: "Ajuda quando é bem estruturado. O site precisa ter conteúdo claro, SEO local, boa velocidade, adaptação para celular e informações relevantes para quem pesquisa por médico em Manaus, dermatologista no Adrianópolis ou cardiologista em Manaus, por exemplo.",
  },
  {
    q: "Instagram substitui um site para médico?",
    a: "Não substitui. O Instagram é útil para relacionamento e conteúdo educativo, mas o site é a base indexável pelo Google. Pacientes que pesquisam ativamente por um especialista precisam encontrar uma página organizada com informações completas, não um feed de posts.",
  },
  {
    q: "O que colocar em um site para médico?",
    a: "Apresentação profissional, especialidade, formação, CRM, local de atendimento, convênios aceitos (se aplicável), dúvidas frequentes, artigos sobre a especialidade e canal de contato. A linguagem deve ser clara, informativa e respeitosa com o código de ética da profissão.",
  },
  {
    q: "Site para médico precisa de blog?",
    a: "Não é obrigatório, mas um blog com artigos sobre a especialidade amplia muito a presença orgânica. Textos que respondem dúvidas comuns dos pacientes ajudam o Google a entender a autoridade do profissional e aumentam as chances de aparecer em buscas relacionadas.",
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
    text: "O site ajuda o Google a associar sua especialidade a Manaus, bairros e os termos que pacientes realmente pesquisam ao procurar atendimento.",
  },
  {
    Icon: Shield,
    iconClass: "text-accent-amber",
    title: "Credibilidade antes da consulta",
    text: "Antes de ligar ou agendar, o paciente quer verificar formação, especialidade e onde o médico atende. O site organiza essa validação com clareza.",
  },
  {
    Icon: Activity,
    iconClass: "text-accent-green",
    title: "Comunicação dentro da ética médica",
    text: "Um site próprio permite apresentar a atuação com responsabilidade, sem promessas de resultado e sem depender do formato das redes sociais.",
  },
  {
    Icon: MessageCircle,
    iconClass: "text-accent-magenta",
    title: "Agendamento mais qualificado",
    text: "Quando o paciente lê sobre especialidade, abordagem e próximos passos, o contato chega com intenção real — sem dúvidas básicas que tomam tempo.",
  },
];

export const articleSections: SectionBlock[] = [
  {
    h2: "Por que médicos precisam aparecer no Google",
    paragraphs: [
      "O comportamento do paciente mudou. Antes de ligar para um consultório ou aceitar uma indicação, a maioria das pessoas abre o Google para verificar informações. Procuram o nome do médico, a especialidade, o endereço, os horários e qualquer informação que ajude a confirmar que estão diante de um profissional sério.",
      "Quando um médico não aparece no Google, ou aparece apenas com dados incompletos em plataformas de terceiros, esse momento de validação falha. O paciente pode desistir da busca, ir para outro profissional ou simplesmente não conseguir encontrar as informações que precisava para tomar uma decisão.",
      "Para médicos em Manaus, o contexto local é ainda mais relevante. A cidade tem bairros distantes, deslocamento difícil e pacientes que priorizam proximidade ou atendimento por especialista disponível na cidade. Um site para médico em Manaus ajuda a capturar essa intenção de busca antes que o paciente escolha outra opção.",
    ],
  },
  {
    h2: "Instagram sozinho não é suficiente para médicos",
    paragraphs: [
      "O Instagram pode ser uma ferramenta útil para educação em saúde e relacionamento com a audiência. Mas não substitui um site profissional. No feed, o conteúdo disputa atenção com entretenimento, notícias e anúncios. Um post educativo hoje some amanhã.",
      "Existe também um fator de privacidade importante. Muitos pacientes preferem pesquisar discretamente antes de entrar em contato com um médico. Seguir um perfil publicamente pode não ser o que eles querem fazer antes de uma consulta. O site oferece uma experiência de busca discreta, direta e sem exposição social.",
      "A diferença prática é simples: o Instagram atende quem já te encontrou. O site ajuda pacientes que ainda não te conhecem a te encontrar no Google.",
    ],
  },
  {
    h2: "Como um site profissional transmite credibilidade médica",
    paragraphs: [
      "A medicina é uma das áreas onde credibilidade não é opcional. O paciente precisa sentir segurança antes de confiar alguém sua saúde. Um site bem estruturado contribui para essa percepção ao apresentar formação, registro no CRM, especialidade, local de atendimento e as informações que o paciente precisa antes de decidir.",
      "Um bom site para médico não precisa ser complexo. Precisa ser claro, objetivo e tecnicamente confiável. O design deve transmitir seriedade. Os textos devem informar sem sensacionalismo. A estrutura deve facilitar o próximo passo — seja ligar, mandar mensagem ou encontrar o consultório.",
      "A experiência de navegação também comunica. Um site que carrega rápido, funciona bem no celular e tem informações organizadas transmite o mesmo cuidado que o paciente espera encontrar no atendimento. Um site lento ou confuso gera dúvida antes mesmo da primeira consulta.",
    ],
  },
  {
    h2: "Vantagens do SEO local para médicos em Manaus",
    paragraphs: [
      "SEO local é o conjunto de técnicas que faz um site aparecer quando alguém pesquisa por um serviço em uma cidade ou região específica. Para médicos, isso significa aparecer para buscas como dermatologista em Manaus, médico no Adrianópolis, cardiologista em Manaus ou pediatra no Dom Pedro.",
      "Para o Google ranquear bem uma página médica, ela precisa de contexto local claro: cidade, especialidade, bairro de atendimento, consistência com o Perfil da Empresa no Google e conteúdo relevante sobre a especialidade. Um site genérico, sem referências locais, compete em desvantagem.",
      "A criação de site para médico em Manaus precisa considerar isso desde a estrutura. Títulos, páginas e textos pensados para busca local são o que fazem a diferença entre aparecer na primeira página do Google ou ficar invisível para pacientes que estão ativamente procurando um especialista.",
    ],
  },
  {
    h2: "Como pacientes encontram médicos no Google",
    paragraphs: [
      "A busca geralmente começa com um sintoma, uma especialidade ou uma indicação. O paciente pesquisa algo como neurologista em Manaus, médico para ansiedade em Manaus ou ortopedista no Adrianópolis. Em alguns casos, pesquisa diretamente o nome do profissional após receber uma recomendação.",
      "O Google apresenta resultados locais primeiro — o chamado Local Pack, com mapa e avaliações. Depois, os resultados orgânicos com sites. Médicos que têm site otimizado aparecem nas duas frentes. Quem depende apenas de cadastros em plataformas de terceiros aparece com menos controle sobre as informações apresentadas.",
      "Estar presente com site próprio significa que o paciente encontra exatamente o que você quer que ele encontre: especialidade, formação, localização, formas de contato e o caminho para agendar.",
    ],
  },
  {
    h2: "Diferença entre redes sociais e site profissional para médicos",
    paragraphs: [
      "A rede social é um canal de relacionamento e produção de conteúdo. O site é um ativo digital permanente. No Instagram, você publica dicas de saúde, responde dúvidas e constrói familiaridade com a audiência. No site, você estrutura autoridade, organiza informações essenciais e cria uma presença que o Google pode indexar.",
      "Outra distinção relevante é o controle. Uma plataforma social pode mudar seus algoritmos, reduzir alcance ou até encerrar sua conta. O site é seu. O domínio é seu. O conteúdo permanece acessível independentemente de qualquer plataforma.",
      "Para médicos, isso tem implicações práticas: pacientes com perfil mais criterioso tendem a confiar mais em profissionais com presença estruturada no próprio domínio do que apenas em redes sociais.",
    ],
  },
  {
    h2: "Site rápido e otimizado influencia no Google?",
    paragraphs: [
      "Sim. Velocidade de carregamento e experiência do usuário são fatores considerados pelo Google ao ranquear páginas. Um site lento pode fazer o paciente abandonar antes de ler o conteúdo. No celular, onde grande parte das buscas de saúde acontece, isso é ainda mais crítico.",
      "Além da velocidade, a estrutura técnica conta: títulos organizados em hierarquia, meta description clara, URL amigável, sitemap, dados estruturados Schema.org para médicos e boa adaptação mobile. Esses elementos não substituem conteúdo relevante, mas ajudam o Google a encontrar e entender a página com mais facilidade.",
      "Um site para médico em Manaus precisa unir três elementos: conteúdo claro sobre a especialidade, design profissional que transmita confiança e base técnica correta para SEO local. A ausência de qualquer um desses enfraquece o conjunto.",
    ],
  },
  {
    h2: "Como gerar agendamentos através do Google",
    paragraphs: [
      "Aparecer no Google é o primeiro passo. Para converter visitas em agendamentos, o site precisa guiar o paciente com clareza. Isso não significa CTAs agressivos. Na medicina, a conversão deve ser natural: o paciente entende a especialidade, sente segurança e encontra um caminho simples para entrar em contato.",
      "Um botão de WhatsApp ou telefone visível, informação sobre convênios, horários e localização reduz a fricção. O paciente que chega ao site já tem uma intenção. Ele precisa de informação suficiente para tomar a decisão de entrar em contato — não de obstáculos.",
      "Explicar o que acontece após o primeiro contato também ajuda. Se o paciente manda mensagem, ele quer saber como funciona o agendamento, se há consulta inicial, como é o atendimento. Um site que antecipa essas dúvidas chega antes do paciente precisar perguntar.",
    ],
  },
  {
    h2: "Marketing digital para médico em Manaus com ética e responsabilidade",
    paragraphs: [
      "Marketing digital para médico precisa respeitar o Código de Ética Médica do CFM. Isso significa não prometer resultados, não usar depoimentos de pacientes, não fazer comparações com outros profissionais e não usar linguagem sensacionalista. Dentro dessas diretrizes, há muito espaço para uma presença digital eficiente.",
      "Conteúdo educativo sobre a especialidade, esclarecimento de dúvidas comuns, informações sobre procedimentos e orientações preventivas são estratégias que ampliam a presença orgânica com responsabilidade. Cada artigo publicado é uma nova oportunidade de aparecer no Google para buscas relacionadas à especialidade.",
      "Para médicos em Manaus, isso representa uma vantagem competitiva real: poucos profissionais da cidade têm sites com conteúdo otimizado para buscas locais. Quem investe nessa base agora constrói presença que se fortalece com o tempo.",
    ],
  },
];

export const siteEssentials: SiteEssential[] = [
  {
    Icon: UserRound,
    title: "Apresentação e especialidade",
    text: "Apresente formação, CRM, especialidade e abordagem de forma clara, sem transformar o site em currículo frio ou panfleto comercial.",
  },
  {
    Icon: MapPin,
    title: "Contexto local de Manaus",
    text: "Inclua cidade, bairro de atendimento, endereço e informações que ajudem o Google a entender a busca local do paciente.",
  },
  {
    Icon: Smartphone,
    title: "Experiência forte no celular",
    text: "A maioria das buscas por médico acontece pelo smartphone. O site precisa carregar rápido e facilitar o contato com um toque.",
  },
  {
    Icon: BookOpen,
    title: "Conteúdo sobre a especialidade",
    text: "Artigos, dúvidas frequentes e orientações educativas ajudam o Google e o paciente a entender sua área de atuação.",
  },
  {
    Icon: FileText,
    title: "Páginas objetivas e organizadas",
    text: "Início, sobre, especialidade, convênios, contato e FAQ já formam uma base sólida para presença digital profissional.",
  },
  {
    Icon: CalendarCheck,
    title: "Caminho claro para agendar",
    text: "Botão de contato visível, WhatsApp e informações sobre o processo de agendamento reduzem a barreira e aumentam conversões.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    h3: "Diagnóstico da especialidade e do público",
    content:
      "Entendemos a especialidade, o perfil do paciente, como os contatos chegam hoje, quais dúvidas mais aparecem e qual linguagem transmite melhor a seriedade do atendimento.",
  },
  {
    num: "02",
    h3: "Arquitetura do conteúdo dentro da ética médica",
    content:
      "Organizamos páginas, títulos, FAQ e chamadas de contato respeitando as diretrizes do CFM — sem promessas de resultado e com linguagem informativa e responsável.",
  },
  {
    num: "03",
    h3: "Design profissional e desenvolvimento rápido",
    content:
      "Criamos uma experiência visual que transmite seriedade e confiança, responsiva e rápida, com foco em leitura confortável no celular e navegação sem atrito.",
  },
  {
    num: "04",
    h3: "SEO local e publicação",
    content:
      "Configuramos metadados, sitemap, canonical, Schema.org para médicos e textos com contexto de Manaus para maximizar a chance de aparecer nas buscas certas.",
  },
];

export const localDifferentials: Benefit[] = [
  {
    Icon: BadgeCheck,
    iconClass: "text-glow-cyan",
    title: "Conteúdo informativo, não comercial",
    text: "O texto precisa soar como orientação de um especialista, não como propaganda. Clareza e responsabilidade fazem mais pela conversão do que apelos comerciais.",
  },
  {
    Icon: Clock,
    iconClass: "text-accent-amber",
    title: "Atendimento no horário de Manaus",
    text: "Ajustes, aprovações e dúvidas fluem melhor quando o projeto respeita o ritmo local e opera no mesmo fuso.",
  },
  {
    Icon: Shield,
    iconClass: "text-accent-green",
    title: "Respeito às normas do CFM",
    text: "O projeto é desenvolvido com atenção às diretrizes éticas da medicina, evitando conteúdo proibido e garantindo uma presença digital segura.",
  },
  {
    Icon: Search,
    iconClass: "text-accent-magenta",
    title: "Base preparada para SEO local",
    text: "O site já nasce com estrutura para aparecer em buscas locais em Manaus e crescer com novos conteúdos sobre a especialidade.",
  },
];

export const internalLinks: InternalLink[] = [
  {
    href: "/blog/site-para-dentista-em-manaus",
    label: "Site para Dentista em Manaus",
    text: "Como dentistas e clínicas odontológicas em Manaus podem fortalecer presença no Google e gerar agendamentos qualificados.",
  },
  {
    href: "/site-institucional-manaus",
    label: "Site profissional em Manaus",
    text: "Veja como um site profissional transmite credibilidade antes do primeiro contato com o cliente.",
  },
  {
    href: "/blog/quanto-custa-um-site-em-manaus",
    label: "Quanto Custa um Site em Manaus",
    text: "Guia de preços real: faixas de valor por tipo de site, custos fixos e como comparar orçamentos.",
  },
];
