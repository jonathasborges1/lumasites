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
    a: "Sim. A Resolução CFM nº 2.336/2023, em vigor desde março de 2024, permite que médicos tenham site profissional, mas proíbe depoimentos de pacientes, promessas de resultado e comparações com outros profissionais. O site pode apresentar formação, CRM, especialidade, RQE quando houver, local de atendimento e canais de contato.",
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
    h2: "O paciente pesquisa antes de ligar — e a especialidade muda o que ele procura",
    paragraphs: [
      "Antes de ligar para um consultório ou aceitar uma indicação, a maioria das pessoas abre o Google. Mas o que cada paciente pesquisa depende da especialidade e do momento. Quem procura um pediatra costuma pesquisar pelo bairro e pela indicação de outras mães. Quem procura um cardiologista ou um psiquiatra pesquisa o nome do médico depois de receber uma indicação, para confirmar formação e CRM antes de marcar. Quem procura um dermatologista para um procedimento estético compara dois ou três profissionais antes de decidir.",
      "Quando o médico não aparece nessa pesquisa, ou aparece só com dados incompletos em plataformas de terceiros, esse momento de checagem falha silenciosamente — o paciente não avisa que desistiu, simplesmente não liga. Em Manaus, com bairros distantes e deslocamento difícil, essa checagem inclui também a pergunta prática de que zona da cidade o médico atende, não só quem ele é.",
      "Isso significa que um site para médico em Manaus não pode ser genérico por especialidade. A página de um pediatra precisa responder dúvidas diferentes das de um psiquiatra ou de um dermatologista, porque o paciente que chega até ela está numa etapa diferente da decisão.",
    ],
  },
  {
    h2: "Por que o Instagram não resolve essa checagem",
    paragraphs: [
      "O Instagram é útil para educação em saúde e relacionamento com quem já segue o perfil — mas atende um público diferente do que faz a checagem antes de marcar consulta. No feed, o conteúdo disputa atenção com entretenimento e anúncios, e um post educativo de hoje some do alcance amanhã.",
      "Há também um fator que a medicina tem mais do que outras áreas: muitos pacientes preferem pesquisar discretamente antes de agendar, principalmente em especialidades como psiquiatria, ginecologia ou urologia. Seguir um perfil publicamente para depois marcar consulta expõe uma decisão que o paciente quer manter privada. O site permite essa checagem sem exposição social — o paciente lê, confirma e decide sem deixar rastro visível.",
      "Na prática: o Instagram atende quem já te encontrou. O site é o que aparece para quem ainda não te conhece e está decidindo, no Google, se liga ou não.",
    ],
  },
  {
    h2: "O que o site pode mostrar — e o que a Resolução CFM nº 2.336/2023 não permite",
    paragraphs: [
      "A publicidade médica é regulada pela Resolução CFM nº 2.336/2023, em vigor desde março de 2024, fiscalizada pelas Comissões de Divulgação de Assuntos Médicos (Codame) dos conselhos regionais. Ela é mais restritiva do que a publicidade de várias outras profissões de saúde: nenhum depoimento de paciente é permitido, mesmo com autorização, nenhuma promessa de resultado, nenhuma comparação com outros médicos e nenhuma foto de antes e depois de procedimento.",
      "O que sobra é justamente o que constrói confiança sem depender de prova social: formação, CRM, especialidade, RQE quando houver, local de atendimento, convênios e conteúdo educativo sobre a especialidade. Um site que tenta contornar essas regras com linguagem promocional não só arrisca notificação do conselho — soa menos crível para o próprio paciente, que reconhece esse tom como propaganda, não como orientação de especialista.",
      "Essa restrição, bem entendida, vira vantagem: como nenhum médico pode competir por depoimento ou promessa, quem tem o site mais claro sobre especialidade, formação e local de atendimento sai na frente — não por marketing mais agressivo, mas por informação mais completa.",
    ],
  },
  {
    h2: "SEO local: aparecer para a especialidade certa, no bairro certo",
    paragraphs: [
      "SEO local é o conjunto de técnicas que faz um site aparecer quando alguém pesquisa por um serviço numa cidade ou região específica. Para médicos, isso significa aparecer em buscas como dermatologista em Manaus, cardiologista no Adrianópolis ou pediatra no Dom Pedro — cada uma delas uma combinação de especialidade e bairro que o Google trata como intenção própria.",
      "Para ranquear bem, uma página médica precisa de contexto local explícito — cidade, especialidade, bairro de atendimento — e consistência com o Perfil da Empresa no Google. O Google mostra primeiro o Local Pack (mapa com avaliações) e depois os resultados orgânicos; médicos com site otimizado aparecem nos dois, enquanto quem depende só de cadastros em plataformas de terceiros perde controle sobre as informações exibidas.",
      "Isso muda a forma como o site deve ser estruturado desde o início: títulos, páginas e textos pensados para a combinação especialidade + bairro, não um site genérico que trata Manaus como detalhe de rodapé.",
    ],
  },
  {
    h2: "Site rápido, técnico e organizado — sem virar prontuário",
    paragraphs: [
      "Velocidade de carregamento e experiência mobile pesam no ranqueamento do Google, e no celular — onde grande parte das buscas de saúde acontece — um site lento perde o paciente antes de ele ler qualquer informação. Isso soma-se à estrutura técnica: hierarquia de títulos, meta description clara, sitemap e dados estruturados Schema.org para médicos ajudam o Google a entender do que a página trata.",
      "Mas a estrutura técnica não substitui a decisão editorial mais importante: o que colocar. Um site para médico não precisa listar todo procedimento que o CFM permite mencionar — precisa focar no que o paciente da especialidade realmente pesquisa antes de marcar. Menos página genérica, mais página que responde a uma dúvida real.",
      "Um site para médico em Manaus une três elementos: conteúdo claro sobre a especialidade, comunicação dentro da Resolução 2.336/2023, e base técnica correta para SEO local. Faltando um dos três, o conjunto perde força mesmo que os outros dois estejam bem feitos.",
    ],
  },
  {
    h2: "Do clique ao agendamento: reduzir fricção sem forçar conversão",
    paragraphs: [
      "Aparecer no Google é o primeiro passo; converter a visita em agendamento depende de reduzir fricção, não de CTA agressivo — o que, aliás, esbarraria na Resolução 2.336/2023. Um botão de WhatsApp ou telefone visível, informação sobre convênios, horários e localização já resolve a maior parte da decisão para um paciente que chegou com intenção real.",
      "Explicar o que acontece depois do primeiro contato também ajuda: se há retorno incluso, como funciona a marcação, quanto tempo dura a consulta inicial. Um site que antecipa essas dúvidas evita que a secretária gaste tempo respondendo pelo WhatsApp o que já poderia estar na página — e chega antes do paciente precisar perguntar.",
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
