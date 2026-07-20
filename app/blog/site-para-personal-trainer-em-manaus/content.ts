import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CalendarCheck,
  Clock,
  Dumbbell,
  FileText,
  MapPin,
  MessageCircle,
  Search,
  Shield,
  Smartphone,
  Star,
  TrendingUp,
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

const slug = "site-para-personal-trainer-em-manaus";
const articleUrl = `${site.url}/blog/${slug}`;

// ─── Thumbnail ────────────────────────────────────────────────────────────────

export const thumbnail = {
  src: "/blog/site-para-personal-trainer-em-manaus.webp",
  alt: "Personal trainer em Manaus com notebook mostrando presença profissional no Google",
  width: 1680,
  height: 960,
};

// ─── Dates ───────────────────────────────────────────────────────────────────

export const articleDates = {
  publishedAt: "2026-05-31",
  publishedLabel: "31 de maio de 2026",
  updatedAt: null,
  updatedLabel: null,
};

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const pageMetadata: Metadata = {
  title: "Site para Personal Trainer em Manaus | Mais Alunos pelo Google",
  description:
    "Entenda como um site para personal trainer em Manaus ajuda a transmitir credibilidade, aparecer em buscas locais e conquistar novos alunos além das redes sociais.",
  keywords: [
    "site para personal trainer em Manaus",
    "personal trainer Manaus",
    "criação de site para personal trainer em Manaus",
    "assessoria de treino online Manaus",
    "treinador pessoal Manaus",
    "CREF Manaus personal trainer",
    "marketing digital para personal trainer Manaus",
    "SEO local para educador físico Manaus",
  ],
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: "Site para Personal Trainer em Manaus | Credibilidade e SEO local",
    description:
      "Guia prático para personal trainers de Manaus que querem fortalecer a presença no Google e conquistar novos alunos além do Instagram.",
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
    title: "Site para Personal Trainer em Manaus | Mais Alunos pelo Google",
    description:
      "Entenda como um site para personal trainer em Manaus ajuda a transmitir credibilidade, aparecer em buscas locais e conquistar novos alunos.",
    images: [thumbnail.src],
  },
};

// ─── Schema ───────────────────────────────────────────────────────────────────

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Site para Personal Trainer em Manaus: como crescer além das redes sociais e conquistar novos alunos pelo Google",
  description:
    "Artigo sobre criação de site para personal trainers e educadores físicos em Manaus, SEO local, presença digital ética e como transformar buscas no Google em novos alunos.",
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
    "site para personal trainer em Manaus, personal trainer Manaus, assessoria de treino Manaus, CREF Manaus, treinador pessoal Manaus, marketing digital personal trainer",
  about: {
    "@type": "Thing",
    name: "Site profissional e SEO local para personal trainers em Manaus",
  },
};

// ─── WhatsApp ─────────────────────────────────────────────────────────────────

export const wppLink = whatsappLink({
  service: "Site para personal trainer em Manaus",
  custom:
    "Sou personal trainer em Manaus e quero entender como um site profissional pode fortalecer minha presença no Google e conquistar novos alunos além das redes sociais.",
});

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const faqs: Faq[] = [
  {
    q: "Quanto custa um site para personal trainer em Manaus?",
    a: "O investimento varia conforme a estrutura. Um site com página principal, serviços, sobre o profissional e contato é mais enxuto. Projetos com portfólio de transformações, assessoria online, blog e integração com WhatsApp exigem escopo maior. O ideal é definir os objetivos antes de fechar qualquer proposta.",
  },
  {
    q: "Personal trainer pode fazer marketing digital?",
    a: "Sim. O CREF permite que educadores físicos tenham site profissional e usem marketing digital, desde que a comunicação seja ética e não prometa resultados que dependem exclusivamente do cliente. Isso significa evitar garantias de perda de peso específica ou comparativos inadequados entre alunos. O site pode apresentar metodologia, CREF, modalidades, área de atendimento e depoimentos reais com autorização.",
  },
  {
    q: "O site substitui o Instagram para personal trainer?",
    a: "Não substitui — são canais com funções diferentes. O Instagram constrói relacionamento e mostra o dia a dia do trabalho. O site é encontrado pelo Google quando alguém pesquisa ativamente por personal trainer em Manaus. Quem está no Instagram já te segue. Quem está no Google ainda não te conhece e está procurando contratar.",
  },
  {
    q: "O que deve ter em um site para personal trainer?",
    a: "Apresentação do profissional com CREF, modalidades oferecidas (presencial, domiciliar, online), área de atendimento, metodologia, depoimentos de alunos, formas de contato e dúvidas frequentes sobre treino e valores. O objetivo é que o visitante entenda quem você é, como trabalha e como iniciar.",
  },
  {
    q: "Vale a pena ter um site se já tenho muitos alunos pelo Instagram?",
    a: "Vale, especialmente para não depender de um único canal. Algoritmo muda, alcance cai, contas são suspensas. O site é um ativo permanente: o que você publica continua disponível e indexável pelo Google por anos, sem depender de frequência de postagem ou engajamento. É uma base própria que nenhuma plataforma pode tirar de você.",
  },
  {
    q: "Personal trainer que atende online também precisa de site?",
    a: "Ainda mais. Para assessoria online, o site é a principal vitrine para clientes de qualquer cidade. Um personal trainer de Manaus com site bem estruturado pode atrair alunos do Brasil inteiro que pesquisam por assessoria de treino online, treino funcional online ou personal trainer online com metodologia específica.",
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
    text: "O site conecta seu nome às buscas por personal trainer em Manaus, bairros específicos e modalidades — capturando quem já quer contratar, não apenas quem segue perfis.",
  },
  {
    Icon: Shield,
    iconClass: "text-accent-amber",
    title: "Credibilidade antes do primeiro contato",
    text: "Antes de mandar mensagem, o potencial aluno verifica formação, CREF, metodologia e resultados. O site organiza essa validação com profissionalismo.",
  },
  {
    Icon: TrendingUp,
    iconClass: "text-accent-green",
    title: "Canal próprio, independente de algoritmo",
    text: "Enquanto o Instagram depende de alcance orgânico e frequência de post, o site é um ativo permanente: encontrado por quem pesquisa, a qualquer momento.",
  },
  {
    Icon: MessageCircle,
    iconClass: "text-accent-magenta",
    title: "Aluno chega com intenção real",
    text: "Quem encontra o site pelo Google já está procurando contratar. O contato chega mais qualificado e exige menos convencimento do que leads frios das redes sociais.",
  },
];

// ─── Sections ─────────────────────────────────────────────────────────────────

export const articleSections: SectionBlock[] = [
  {
    h2: "A decisão de contratar nasce numa dor, mas se confirma no Google",
    paragraphs: [
      "A decisão de contratar um personal trainer raramente começa num post do Instagram. Ela começa numa insatisfação: não estar conseguindo resultados sozinho, sentir dor durante treinos, querer começar a se exercitar mas não saber como, ou simplesmente querer evoluir mais rápido com acompanhamento profissional. O post que o futuro aluno viu meses atrás raramente é o gatilho — é o empurrão que o faz abrir o Google quando a insatisfação finalmente pesa mais que a inércia.",
      "Nesse momento a pesquisa é concreta: personal trainer em Manaus, educador físico para emagrecimento, personal trainer domiciliar Parque 10, assessoria de treino online. Quem não aparece nessas buscas não perde a venda por preço ou por metodologia — perde porque nunca chegou a ser considerado.",
      "O Instagram continua relevante depois disso, para quem já decidiu e quer ver o dia a dia do trabalho antes de mandar mensagem. Mas o momento que decide se você entra ou não na lista de opções é a busca no Google, não o feed.",
    ],
  },
  {
    h2: "Site próprio é o que sobrevive à mudança de algoritmo",
    paragraphs: [
      "O Instagram é a vitrine mais usada por personal trainers — e também a mais frágil. O alcance orgânico caiu nos últimos anos, a plataforma prioriza Reels sobre feed sem aviso prévio, e um perfil com milhares de seguidores entrega conteúdo para uma fração da base. Nada disso está sob controle do profissional.",
      "A diferença de público é o ponto central: o Instagram atinge quem já te segue — é relacionamento. O site é encontrado por quem ainda não te conhece e já decidiu que quer contratar — é aquisição. Confundir os dois canais faz o personal trainer investir tempo demais em quem já é próximo e de menos em quem está pronto para fechar.",
      "Contratar também é uma decisão de confiança: o aluno vai compartilhar limitações físicas e inseguranças com quem vai acompanhá-lo. Um site que apresenta CREF, formação, metodologia e modalidades com clareza resolve essa checagem antes da primeira mensagem — um site desorganizado ou incompleto sinaliza, sem querer, que o acompanhamento do treino pode ter o mesmo padrão.",
    ],
  },
  {
    h2: "CREF e comunicação ética para educadores físicos",
    paragraphs: [
      "O CREF (Conselho Regional de Educação Física) orienta que a comunicação de educadores físicos seja ética, sem prometer resultados específicos que dependem de variáveis individuais como genética, alimentação e consistência do aluno. Isso não impede uma presença digital forte — define como ela deve ser construída.",
      "Na prática, significa comunicar metodologia em vez de garantias. Em vez de prometer emagrecer X quilos em Y semanas, o site apresenta o processo: avaliação física, planejamento de treino, acompanhamento, progressão e os princípios que guiam o trabalho. Essa abordagem é mais ética e também mais eficaz para atrair alunos sérios.",
      "Depoimentos reais de alunos, com autorização, são a forma mais poderosa de prova social dentro dos limites éticos. Um aluno contando sobre evolução de força, disposição ou qualidade de vida comunica resultado sem prometer o mesmo para todos.",
    ],
  },
  {
    h2: "SEO local para personal trainers em Manaus",
    paragraphs: [
      "SEO local é o que faz um site aparecer quando alguém pesquisa por um serviço em uma região específica. Para personal trainers, isso envolve termos como personal trainer em Manaus, educador físico domiciliar Chapada, treino funcional Manaus, personal trainer para terceira idade Adrianópolis e variações por bairro e modalidade.",
      "Para o Google conectar um perfil de personal trainer a Manaus, o site precisa apresentar contexto claro: cidade, bairros de atendimento, modalidades, e consistência com outros canais como o Perfil da Empresa no Google. Um site genérico, sem mencionar Manaus e as especificidades do trabalho, compete em desvantagem contra profissionais com presença digital estruturada.",
      "Na prática, isso significa que desde a estrutura de URL até os títulos de cada seção precisam refletir como os potenciais alunos pesquisam. Personal trainer domiciliar Manaus e assessoria de treino online Manaus são buscas com intenção alta — e o profissional que responde a elas com conteúdo específico aparece na frente.",
    ],
  },
  {
    h2: "Atendimento presencial, domiciliar e online: como o site diferencia",
    paragraphs: [
      "Personal trainers em Manaus atuam em diferentes formatos: dentro de academias parceiras, no domicílio do aluno, em espaços ao ar livre ou de forma completamente online. Cada formato tem um público diferente e um conjunto de buscas específico.",
      "Um site bem estruturado separa essas modalidades com clareza. Quem procura personal trainer domiciliar Adrianópolis tem uma intenção diferente de quem busca assessoria de treino online ou personal trainer para academia Manaus. Páginas ou seções específicas por modalidade aumentam a chance de aparecer em cada uma dessas buscas.",
      "Para quem oferece assessoria online, o site é ainda mais estratégico. Sem fronteira geográfica, o profissional pode alcançar alunos de todo o Brasil — e o site é a única vitrine encontrável pelo Google para quem pesquisa por assessoria de treino online ou personal trainer online com metodologia específica.",
    ],
  },
  {
    h2: "Como o site converte visitas em contatos de novos alunos",
    paragraphs: [
      "Aparecer no Google é o primeiro passo. O segundo é fazer com que o visitante tome uma ação. Para personal trainers, isso significa um botão de WhatsApp visível, um formulário de contato acessível ou um link direto para agendamento de uma avaliação inicial.",
      "O visitante que chegou pelo Google já tem intenção. O site não precisa convencê-lo de que precisa de treino — ele já sabe disso. Precisa apenas remover as barreiras: responder as dúvidas mais comuns, apresentar valores ou ao menos como funciona o processo de orçamento, e deixar o caminho para o contato completamente desobstruído.",
      "Velocidade de carregamento também impacta diretamente. Em Manaus, onde a maioria das buscas acontece pelo celular, uma página que demora para abrir perde o visitante antes de qualquer leitura. Performance não é detalhe técnico para personal trainers — é a diferença entre ser encontrado e ser ignorado.",
    ],
  },
];

// ─── Site Essentials ──────────────────────────────────────────────────────────

export const siteEssentials: SiteEssential[] = [
  {
    Icon: UserRound,
    title: "Apresentação e CREF",
    text: "Nome, número de CREF, formação, especializações e tempo de experiência. O aluno precisa saber quem vai acompanhar o treino antes de entrar em contato.",
  },
  {
    Icon: Dumbbell,
    title: "Modalidades e metodologia",
    text: "Treino presencial, domiciliar, online, funcional, musculação, emagrecimento, reabilitação — cada modalidade atendida precisa estar descrita com clareza.",
  },
  {
    Icon: MapPin,
    title: "Área de atendimento em Manaus",
    text: "Bairros, academias parceiras, zona da cidade ou alcance para atendimento online. O Google usa essas informações para ranquear localmente.",
  },
  {
    Icon: Smartphone,
    title: "Desempenho no celular",
    text: "A maioria das buscas por personal trainer acontece pelo smartphone. O site precisa carregar rápido e facilitar o contato imediato sem depender de wi-fi.",
  },
  {
    Icon: CalendarCheck,
    title: "Caminho claro para o primeiro contato",
    text: "Botão de WhatsApp acessível, telefone visível e instruções sobre como agendar uma avaliação. O aluno com intenção não deve precisar procurar como iniciar.",
  },
  {
    Icon: Star,
    title: "Depoimentos reais de alunos",
    text: "Relatos de evolução com autorização transmitem prova social dentro dos limites éticos do CREF — mais eficazes do que qualquer promessa de resultado.",
  },
];

// ─── Process Steps ────────────────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    h3: "Diagnóstico do perfil e das modalidades",
    content:
      "Entendemos quais modalidades você oferece, como os alunos chegam hoje, quais bairros ou cidades você atende e quais buscas fazem mais sentido para o seu perfil de atuação.",
  },
  {
    num: "02",
    h3: "Estrutura de conteúdo e comunicação ética",
    content:
      "Organizamos serviços, depoimentos, perguntas frequentes e formas de contato com linguagem clara, dentro das diretrizes do CREF — sem promessas de resultado que comprometam a ética profissional.",
  },
  {
    num: "03",
    h3: "Design profissional e desenvolvimento otimizado",
    content:
      "Criamos uma experiência visual que transmite força e profissionalismo, responsiva no celular e rápida o suficiente para não perder o visitante antes da leitura.",
  },
  {
    num: "04",
    h3: "SEO local e publicação em Manaus",
    content:
      "Configuramos metadados, sitemap, dados estruturados e textos com contexto local para aumentar a chance de aparecer quando alguém pesquisa por personal trainer em Manaus.",
  },
];

// ─── Local Differentials ──────────────────────────────────────────────────────

export const localDifferentials: Benefit[] = [
  {
    Icon: BadgeCheck,
    iconClass: "text-glow-cyan",
    title: "Conteúdo específico para o nicho fitness",
    text: "Um site de personal trainer precisa comunicar metodologia e resultados com precisão, não com textos genéricos que qualquer academia do Brasil poderia usar.",
  },
  {
    Icon: Clock,
    iconClass: "text-accent-amber",
    title: "Atendimento no fuso de Manaus",
    text: "Ajustes, aprovações e revisões acontecem no mesmo ritmo que o seu. Sem diferença de horário ou dependência de equipes em outros estados.",
  },
  {
    Icon: Zap,
    iconClass: "text-accent-green",
    title: "Performance que não perde aluno",
    text: "Sites lentos perdem o visitante antes mesmo da leitura. O projeto é desenvolvido com foco em velocidade real no celular — onde seus futuros alunos estão pesquisando.",
  },
  {
    Icon: FileText,
    iconClass: "text-accent-magenta",
    title: "Estrutura que cresce com você",
    text: "O site nasce com base técnica para SEO local e pode crescer com novas modalidades, depoimentos ou conteúdo de blog sem precisar refazer tudo do zero.",
  },
];

// ─── Internal Links ───────────────────────────────────────────────────────────

export const internalLinks: InternalLink[] = [
  {
    href: "/blog/quanto-custa-um-site-em-manaus",
    label: "Quanto Custa um Site em Manaus",
    text: "Guia de preços real: faixas de valor por tipo de site, custos fixos e como comparar orçamentos.",
  },
  {
    href: "/blog/site-para-medico-em-manaus",
    label: "Site para Médico em Manaus",
    text: "Como profissionais de saúde em Manaus podem fortalecer presença no Google e atrair pacientes qualificados.",
  },
  {
    href: "/site-institucional-manaus",
    label: "Site de uma página em Manaus",
    text: "Conheça o formato mais indicado para personal trainers: uma página comercial com foco em credibilidade e contato.",
  },
];
