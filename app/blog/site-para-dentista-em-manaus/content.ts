import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CalendarCheck,
  Clock,
  FileText,
  MapPin,
  MessageCircle,
  Search,
  Shield,
  Smartphone,
  Smile,
  Star,
  UserRound,
  Zap,
} from "lucide-react";
import { site } from "@/content/site";
import { whatsappLink } from "@/utils/whatsapp";

// ─── Types ────────────────────────────────────────────────────────────────────

export type Faq = { q: string; a: string };

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

// ─── Identifiers ──────────────────────────────────────────────────────────────

const slug = "site-para-dentista-em-manaus";
const articleUrl = `${site.url}/blog/${slug}`;

// ─── Thumbnail ────────────────────────────────────────────────────────────────

export const thumbnail = {
  src: "/blog/site-para-dentista-em-manaus.png",
  alt: "Dentista em consultório em Manaus com notebook mostrando presença profissional no Google",
  width: 1680,
  height: 960,
};

// ─── Dates ───────────────────────────────────────────────────────────────────

export const articleDates = {
  publishedAt: "2026-05-13",
  publishedLabel: "13 de maio de 2026",
  updatedAt: null,
  updatedLabel: null,
};

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const pageMetadata: Metadata = {
  title: "Site para Dentista em Manaus | Mais Pacientes pelo Google",
  description:
    "Entenda como um site para dentista em Manaus ajuda a transmitir credibilidade, aparecer em buscas locais e gerar agendamentos qualificados sem depender só do Instagram.",
  keywords: [
    "site para dentista em Manaus",
    "criação de site para dentista em Manaus",
    "site para clínica odontológica em Manaus",
    "dentista no Google Manaus",
    "marketing digital para dentista em Manaus",
    "SEO local para odontologia em Manaus",
    "site profissional para odontologista Manaus",
  ],
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: "Site para Dentista em Manaus | Credibilidade e SEO local",
    description:
      "Guia prático para dentistas e clínicas odontológicas de Manaus que querem fortalecer presença no Google com um site profissional e bem estruturado.",
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
    title: "Site para Dentista em Manaus | Mais Pacientes pelo Google",
    description:
      "Entenda como um site para dentista em Manaus ajuda a transmitir credibilidade, aparecer em buscas locais e gerar agendamentos qualificados.",
    images: [thumbnail.src],
  },
};

// ─── Schema ───────────────────────────────────────────────────────────────────

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Site para Dentista em Manaus: como fortalecer sua presença no Google e atrair mais pacientes",
  description:
    "Artigo sobre criação de site para dentistas e clínicas odontológicas em Manaus, SEO local, presença digital ética e como transformar buscas no Google em agendamentos qualificados.",
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
    "site para dentista em Manaus, criação de site para dentista em Manaus, clínica odontológica Manaus, dentista no Google Manaus, marketing digital para dentista em Manaus",
  about: {
    "@type": "Thing",
    name: "Site profissional e SEO local para dentistas em Manaus",
  },
};

// ─── WhatsApp ─────────────────────────────────────────────────────────────────

export const wppLink = whatsappLink({
  service: "Site para dentista em Manaus",
  custom:
    "Sou dentista em Manaus e quero entender como um site profissional pode fortalecer minha presença no Google e gerar mais agendamentos qualificados.",
});

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const faqs: Faq[] = [
  {
    q: "Quanto custa um site para dentista em Manaus?",
    a: "O investimento varia conforme a estrutura. Um site simples com página principal, especialidades, sobre e contato é mais enxuto. Projetos com múltiplas especialidades, blog, SEO local aprofundado e integração com agendamento exigem escopo maior. O ideal é definir os objetivos antes de fechar qualquer proposta.",
  },
  {
    q: "Dentista pode fazer marketing digital?",
    a: "Sim. O CFO permite que dentistas tenham site profissional e usem marketing digital, desde que a comunicação respeite o Código de Ética Odontológica. Isso significa evitar fotos de antes e depois sem autorização, não prometer resultados estéticos específicos e manter linguagem informativa. O site pode apresentar formação, especialidades, local de atendimento e canais de contato.",
  },
  {
    q: "Um site ajuda dentista a conseguir mais pacientes?",
    a: "Ajuda quando é bem estruturado. O site precisa ter conteúdo claro, SEO local, boa velocidade, funcionamento no celular e informações relevantes para quem pesquisa por dentista em Manaus, ortodontista no Dom Pedro, clínica odontológica no Adrianópolis ou implante dentário em Manaus.",
  },
  {
    q: "Instagram substitui um site para consultório odontológico?",
    a: "Não substitui. O Instagram é útil para relacionamento e conteúdo educativo, mas o site é a base indexável pelo Google. Pacientes que pesquisam ativamente por um dentista querem encontrar uma página organizada com especialidades, localização e formas de contato, não um feed de posts.",
  },
  {
    q: "O que deve ter em um site para dentista?",
    a: "Apresentação do profissional ou clínica, especialidades oferecidas, CRO, endereço, formas de contato, dúvidas frequentes sobre os procedimentos e orientações gerais sobre cuidados bucais. A linguagem deve ser clara e respeitosa com as normas do CFO.",
  },
  {
    q: "Site para dentista precisa de blog?",
    a: "Não é obrigatório, mas amplia bastante a presença orgânica. Artigos respondendo dúvidas comuns como quando fazer aparelho, quanto tempo dura um implante ou como cuidar da saúde bucal ajudam o Google a entender a autoridade do profissional e aumentam as chances de aparecer em buscas relacionadas.",
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

// ─── Benefits ─────────────────────────────────────────────────────────────────

export const benefits: Benefit[] = [
  {
    Icon: Search,
    iconClass: "text-glow-cyan",
    title: "Visibilidade em buscas locais",
    text: "O site ajuda o Google a conectar sua especialidade a Manaus, bairros e os termos que pacientes realmente usam ao procurar atendimento odontológico.",
  },
  {
    Icon: Shield,
    iconClass: "text-accent-amber",
    title: "Credibilidade antes da primeira consulta",
    text: "Antes de agendar, o paciente verifica formação, especialidade e localização. O site organiza essa validação sem depender de plataformas de terceiros.",
  },
  {
    Icon: Smile,
    iconClass: "text-accent-green",
    title: "Comunicação dentro das normas do CFO",
    text: "Um site próprio permite apresentar a atuação com responsabilidade, sem comparativos ou promessas estéticas que conflitem com o Código de Ética Odontológica.",
  },
  {
    Icon: MessageCircle,
    iconClass: "text-accent-magenta",
    title: "Agendamento mais direto",
    text: "Quando o paciente lê sobre especialidades, procedimentos e como funciona o atendimento, o contato chega com intenção real e menos perguntas básicas.",
  },
];

// ─── Sections ─────────────────────────────────────────────────────────────────

export const articleSections: SectionBlock[] = [
  {
    h2: "Como o paciente encontra um dentista antes de agendar",
    paragraphs: [
      "O caminho começa no Google. Uma dor de dente leva à busca por dentista de urgência em Manaus. A decisão de colocar aparelho gera pesquisas por ortodontista no Adrianópolis ou clínica de ortodontia em Manaus. Quem considera um implante provavelmente já pesquisou valores, clínicas e profissionais antes de fazer qualquer contato.",
      "O dentista que não aparece nessas buscas não existe para esse paciente. Não importa a qualidade do atendimento ou o tempo de experiência — se a presença digital é inexistente ou fraca, o paciente escolhe quem aparece. Em Manaus, onde os bairros têm dinâmicas próprias e a mobilidade urbana influencia muito a decisão de onde se consultar, isso é ainda mais relevante.",
      "Um site para dentista em Manaus cumpre a função de ser encontrado antes que o paciente escolha outra opção. Não é sobre parecer moderno. É sobre estar presente no momento certo, com a informação certa.",
    ],
  },
  {
    h2: "Consultório sem site perde para quem tem",
    paragraphs: [
      "Manaus tem um número alto de consultórios odontológicos por bairro. Em regiões como Adrianópolis, Dom Pedro, Chapada e Parque 10, a concorrência entre clínicas e consultórios particulares é real. Quando um paciente pesquisa no Google, ele vê uma lista de resultados. Quem tem site profissional e SEO local tende a aparecer antes.",
      "Perfis no Google Meu Negócio ajudam, mas não substituem o site. O perfil mostra endereço, telefone e avaliações. O site apresenta especialidades, transmite credibilidade, organiza o conteúdo e cria múltiplos pontos de entrada pelo Google. Um consultório com site bem estruturado aparece tanto no mapa quanto nas buscas orgânicas.",
      "Não é questão de tamanho — clínica grande ou consultório individual. É questão de presença. O paciente que pesquisa por implante dentário em Manaus ou tratamento de canal no Adrianópolis vai encontrar quem tem o conteúdo mais organizado para essa busca.",
    ],
  },
  {
    h2: "Como um site transmite credibilidade antes da consulta",
    paragraphs: [
      "Odontologia envolve procedimentos invasivos, anestesia e, em muitos casos, investimentos altos. O paciente precisa confiar antes de colocar a saúde bucal nas mãos de alguém. Essa confiança começa na busca, não no consultório.",
      "Um site profissional apresenta o dentista com clareza: formação, CRO, especialidades, tempo de experiência e local de atendimento. Quando há mais de um profissional na clínica, cada um pode ter sua apresentação individual. Isso ajuda o paciente a entender com quem vai se consultar antes mesmo de ligar.",
      "O design também comunica. Um site lento, com layout desorganizado ou informações incompletas gera desconfiança antes da primeira palavra. Já um site limpo, rápido e com informações claras transmite o mesmo padrão de cuidado que o paciente espera encontrar no atendimento.",
    ],
  },
  {
    h2: "SEO local para odontologia em Manaus",
    paragraphs: [
      "SEO local é o conjunto de sinais que fazem um site aparecer quando alguém pesquisa por um serviço em uma cidade ou região específica. Para dentistas, isso envolve termos como ortodontista em Manaus, clínica de implante no Centro, dentista perto do Dom Pedro, clareamento dental em Manaus e dezenas de variações por especialidade e bairro.",
      "Para o Google ranquear um site odontológico localmente, ele precisa entender contexto: cidade, especialidade, área de atendimento e consistência com outros canais digitais como o Perfil da Empresa no Google. Um site genérico, sem menção clara a Manaus e às especialidades oferecidas, compete em desvantagem contra clínicas com presença digital estruturada.",
      "Na prática, isso significa que a criação de site para dentista em Manaus precisa considerar desde o início como os pacientes pesquisam. Títulos de página, conteúdo das especialidades e estrutura técnica do site são os elementos que determinam se aquele consultório aparece ou não quando um paciente abre o Google.",
    ],
  },
  {
    h2: "Instagram não substitui o site do consultório",
    paragraphs: [
      "O Instagram é uma ferramenta de relacionamento. O site é um ativo de busca. No feed, o conteúdo aparece para quem já segue o perfil. No Google, o site aparece para quem ainda não conhece o consultório mas está procurando atendimento.",
      "Há também uma questão de controle. No Instagram, o alcance depende de algoritmo, frequência de publicação e formato do conteúdo. No site, o que foi publicado continua disponível e pode ser encontrado meses depois. Uma página sobre tratamento de canal em Manaus pode gerar visitas orgânicas por anos sem precisar ser atualizada com frequência.",
      "Para consultórios com foco em estética dental, clareamento ou ortodontia, o Instagram é uma vitrine de resultados. Mas o site é onde o paciente vai quando quer entender o processo, checar as credenciais do profissional e decidir se vai entrar em contato. São funções diferentes que se complementam, não se substituem.",
    ],
  },
  {
    h2: "Comunicação odontológica dentro das normas do CFO",
    paragraphs: [
      "O Código de Ética Odontológica tem regras específicas para a comunicação profissional. Sites e materiais de marketing não podem usar comparativos de resultados entre pacientes, imagens de antes e depois sem o contexto adequado, promessas estéticas específicas ou linguagem sensacionalista sobre procedimentos.",
      "Isso não impede o dentista de ter uma presença digital forte. Significa que a comunicação precisa ser informativa, objetiva e respeitosa. Um site pode detalhar cada especialidade, explicar como funciona o procedimento, tirar dúvidas frequentes e apresentar o profissional com clareza — tudo dentro das diretrizes do CFO.",
      "Na prática, um site odontológico ético educa o paciente antes de vender. Explica o que é uma endodontia, quando o aparelho é indicado, como funciona a consulta de avaliação de implante e o que esperar em cada etapa. Esse tipo de conteúdo gera confiança e ainda contribui para o SEO local.",
    ],
  },
  {
    h2: "Especialidades odontológicas e presença digital",
    paragraphs: [
      "Clínicas que oferecem múltiplas especialidades têm uma vantagem: cada especialidade pode ser um ponto de entrada diferente no Google. Uma página dedicada à ortodontia em Manaus, outra para implantes dentários e outra para odontopediatria ampliam significativamente as chances de aparecer em buscas específicas.",
      "Pacientes que buscam por ortodontista em Manaus têm intenção diferente de quem pesquisa por dentista de emergência em Manaus ou clínica de estética dental em Manaus. Um site estruturado por especialidade atende cada uma dessas intenções com conteúdo adequado, em vez de forçar o visitante a deduzir o que o consultório faz a partir de uma página genérica.",
      "Para consultórios com uma especialidade principal, o foco funciona a favor. Um endodontista pode construir uma presença forte para tratamento de canal em Manaus. Um ortodontista pode ranquear bem para aparelho dentário em Manaus e bairros específicos. A profundidade de conteúdo numa especialidade é mais eficaz do que páginas genéricas que tentam cobrir tudo ao mesmo tempo.",
    ],
  },
  {
    h2: "Como o site influencia o agendamento de novos pacientes",
    paragraphs: [
      "Aparecer no Google é o primeiro passo. O segundo é converter esse visitante em um paciente que entra em contato. Isso depende de como o site está organizado depois que o paciente chega.",
      "Um botão de WhatsApp acessível, um telefone visível e instruções claras de como agendar reduzem a fricção. Não é necessário nenhuma chamada agressiva. O paciente que chegou pelo Google já tem intenção. O site só precisa não atrapalhar essa decisão com informações confusas, navegação lenta ou ausência de informações básicas como endereço e horário de funcionamento.",
      "A velocidade também importa. Uma página que demora para carregar no celular — onde a maioria das buscas locais acontece — perde o paciente para quem carrega em dois segundos. Performance não é detalhe técnico: é o tempo que o visitante aguenta esperar antes de fechar a aba e tentar o próximo resultado.",
    ],
  },
];

// ─── Site Essentials ──────────────────────────────────────────────────────────

export const siteEssentials: SiteEssential[] = [
  {
    Icon: UserRound,
    title: "Apresentação do profissional",
    text: "Nome, formação, CRO, especialidades e local de atendimento organizados com clareza. O paciente precisa saber com quem vai se consultar antes de ligar.",
  },
  {
    Icon: FileText,
    title: "Página por especialidade",
    text: "Cada especialidade oferecida merece uma seção própria — ortodontia, implantes, estética, endodontia. Isso amplia a presença no Google e ajuda o paciente a encontrar o que precisa.",
  },
  {
    Icon: MapPin,
    title: "Contexto local de Manaus",
    text: "Endereço completo, bairro, referências de localização e área de atendimento. O Google precisa de contexto local para ranquear corretamente.",
  },
  {
    Icon: Smartphone,
    title: "Desempenho no celular",
    text: "A maioria das buscas por dentista acontece pelo smartphone, muitas vezes em situação de urgência. O site precisa carregar rápido e facilitar o contato imediato.",
  },
  {
    Icon: CalendarCheck,
    title: "Caminho claro para agendamento",
    text: "Botão de WhatsApp visível, telefone acessível e instruções simples sobre como marcar consulta. O paciente não deve precisar procurar como entrar em contato.",
  },
  {
    Icon: Star,
    title: "Perguntas frequentes por procedimento",
    text: "Dúvidas sobre custo, duração, dor e processo dos procedimentos mais comuns. Responder isso no site reduz a barreira para o primeiro contato.",
  },
];

// ─── Process Steps ────────────────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    h3: "Diagnóstico da especialidade e do público",
    content:
      "Entendemos quais procedimentos são foco do consultório, quem são os pacientes mais comuns, como chegam hoje e quais buscas fazem mais sentido para o perfil do profissional ou clínica.",
  },
  {
    num: "02",
    h3: "Arquitetura de conteúdo dentro do CFO",
    content:
      "Organizamos páginas, especialidades, perguntas frequentes e formas de contato com linguagem clara e dentro das diretrizes do Código de Ética Odontológica — sem promessas ou comparativos inadequados.",
  },
  {
    num: "03",
    h3: "Design profissional e desenvolvimento otimizado",
    content:
      "Criamos uma experiência visual limpa, responsiva e rápida. O foco está em clareza, facilidade de navegação no celular e performance que não compromete o tempo de carregamento.",
  },
  {
    num: "04",
    h3: "SEO local e publicação em Manaus",
    content:
      "Configuramos metadados, sitemap, canonical, dados estruturados e textos com contexto local para aumentar a chance de aparecer quando pacientes pesquisam por atendimento odontológico em Manaus.",
  },
];

// ─── Local Differentials ──────────────────────────────────────────────────────

export const localDifferentials: Benefit[] = [
  {
    Icon: BadgeCheck,
    iconClass: "text-glow-cyan",
    title: "Conteúdo técnico, não genérico",
    text: "Um site odontológico precisa explicar procedimentos com precisão, não com textos copiados que qualquer clínica no Brasil poderia usar.",
  },
  {
    Icon: Clock,
    iconClass: "text-accent-amber",
    title: "Atendimento no fuso de Manaus",
    text: "Ajustes, aprovações e revisões acontecem no mesmo ritmo. Sem diferença de horário ou dependência de equipes em outros estados.",
  },
  {
    Icon: Zap,
    iconClass: "text-accent-green",
    title: "Performance que não perde paciente",
    text: "Sites lentos perdem o visitante antes mesmo da leitura. O projeto é desenvolvido com foco em velocidade real, especialmente no celular.",
  },
  {
    Icon: Search,
    iconClass: "text-accent-magenta",
    title: "Estrutura preparada para crescer",
    text: "O site nasce com base técnica para SEO local e pode crescer com novas especialidades ou artigos sem precisar refazer tudo do zero.",
  },
];

// ─── Internal Links ───────────────────────────────────────────────────────────

export const internalLinks: InternalLink[] = [
  {
    href: "/blog/site-para-medico-em-manaus",
    label: "Site para Médico em Manaus",
    text: "Como médicos e especialistas em Manaus podem fortalecer presença no Google e atrair pacientes qualificados.",
  },
  {
    href: "/blog/site-para-psicologo-em-manaus",
    label: "Site para Psicólogo em Manaus",
    text: "Como psicólogos em Manaus podem construir uma presença digital ética e ser encontrados nas buscas locais.",
  },
  {
    href: "/criar-site-em-manaus",
    label: "Criar site em Manaus",
    text: "Conheça formatos, prazos e caminhos para publicar uma presença digital própria em Manaus.",
  },
];
