import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Briefcase,
  Building2,
  Home,
  Mail,
  SearchCheck,
} from "lucide-react";
import { site } from "@/content/site";
import { testimonials as siteTestimonials } from "@/content/testimonials";
import { whatsappLink } from "@/utils/whatsapp";

export type SitePage = {
  Icon: LucideIcon;
  name: string;
  description: string;
  items: string[];
  optional?: boolean;
};

export const pageUrl = `${site.url}/site-institucional-manaus`;

export const campaignWhatsApp = whatsappLink({
  service: "Site institucional em Manaus",
  custom:
    "Vim pela página /site-institucional-manaus e quero entender como seria um site institucional para minha empresa.",
});

export const pageMetadata: Metadata = {
  title: "Site Institucional em Manaus | Luma Sites",
  description:
    "Criamos sites institucionais em Manaus para empresas que precisam de presença digital completa: múltiplas páginas, SEO local, identidade própria e estrutura para crescer. Orçamento pelo WhatsApp.",
  alternates: {
    canonical: pageUrl,
  },
  keywords: [
    "site institucional Manaus",
    "site institucional em Manaus",
    "criação de site institucional Manaus",
    "site para empresa Manaus",
    "site completo para empresa Manaus",
    "desenvolvimento web institucional Manaus",
    "site institucional Amazonas",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: pageUrl,
    siteName: site.name,
    title: "Site Institucional em Manaus | Luma Sites",
    description:
      "Presença digital completa para sua empresa em Manaus. Múltiplas páginas, SEO local e identidade visual consistente.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luma Sites - Site institucional em Manaus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site Institucional em Manaus | Luma Sites",
    description:
      "Site institucional completo para empresas em Manaus. Orçamento pelo WhatsApp.",
    images: ["/og-image.jpg"],
  },
};

export const hero = {
  eyebrow: "Site institucional em Manaus",
  socialProof: "+30 sites entregues em Manaus",
  urgency: "Agenda limitada — poucos projetos por mês",
  title: "Site institucional em Manaus para sua empresa ter presença digital de verdade",
  description:
    "Mais do que uma página única: um site completo com estrutura para apresentar sua empresa, seus serviços e sua equipe — organizado para gerar confiança e aparecer no Google.",
  primaryCta: "Falar agora no WhatsApp",
  secondaryCta: "Ver o que está incluído",
  helper: "Gratuito · Sem compromisso · Resposta em até 1 hora",
  stats: [
    { value: "4–6", label: "Páginas incluídas" },
    { value: "10–20", label: "Dias para entrega" },
    { value: "R$897", label: "A partir de" },
  ],
};

export const sitePages: SitePage[] = [
  {
    Icon: Home,
    name: "Início",
    description: "Primeira impressão que apresenta e converte.",
    items: ["Hero com proposta de valor", "Resumo de serviços", "Prova social", "CTA para contato"],
  },
  {
    Icon: Building2,
    name: "Sobre",
    description: "Constrói confiança com história e equipe.",
    items: ["Missão e valores", "Quem faz parte da empresa", "Tempo de mercado", "Diferenciais"],
  },
  {
    Icon: Briefcase,
    name: "Serviços",
    description: "Detalha o que você oferece com clareza.",
    items: ["Descrição de cada serviço", "Para quem é indicado", "Resultados esperados", "CTA por serviço"],
  },
  {
    Icon: Mail,
    name: "Contato",
    description: "Transforma visita em conversa.",
    items: ["WhatsApp com mensagem pré-pronta", "E-mail e telefone", "Endereço se necessário", "Formulário opcional"],
  },
  {
    Icon: SearchCheck,
    name: "SEO local",
    description: "Configurado para aparecer no Google.",
    items: ["Metadados por página", "Schema markup local", "Velocidade otimizada", "Sitemap enviado ao Google"],
  },
  {
    Icon: BookOpen,
    name: "Blog",
    description: "Opcional — gera autoridade no longo prazo.",
    items: ["Artigos do seu segmento", "Posicionamento para novas keywords", "Conteúdo para redes sociais", "Aumenta autoridade de domínio"],
    optional: true,
  },
];

export const comparison = {
  features: [
    { label: "Número de páginas",      lp: "1 página",          inst: "4 a 6 páginas" },
    { label: "Apresentação da empresa", lp: "Parcial",           inst: "Completa" },
    { label: "Página Sobre / Equipe",  lp: "Não",               inst: "Sim" },
    { label: "Detalhamento de serviços", lp: "Resumido",        inst: "Página dedicada" },
    { label: "SEO por múltiplas keywords", lp: "Limitado",      inst: "Amplo" },
    { label: "Ideal para anúncios",    lp: "Sim",               inst: "Complementar" },
    { label: "Blog / conteúdo",        lp: "Não",               inst: "Opcional" },
    { label: "Credibilidade B2B",      lp: "Média",             inst: "Alta" },
  ],
};

export const steps = [
  {
    title: "Briefing completo",
    text: "Entendemos a empresa, os serviços, o público e o que precisa estar no site. Com isso definimos a estrutura de páginas e o tom de comunicação.",
    detail: "30 a 60 min — feito pelo WhatsApp ou videochamada",
  },
  {
    title: "Proposta com estrutura",
    text: "Apresentamos o mapa de páginas, o que entra em cada uma, o prazo de entrega e o investimento — tudo por escrito antes de começar.",
    detail: "Entregue em até 24 horas após o briefing",
  },
  {
    title: "Desenvolvimento por etapas",
    text: "Construímos o site página a página, com aprovação em cada etapa. Você acompanha o progresso antes de ir ao vivo.",
    detail: "10 a 20 dias úteis após aprovação",
  },
  {
    title: "Publicação e entrega",
    text: "Site no ar com suporte pós-entrega, domínio configurado e sitemap enviado ao Google. Você recebe acesso completo.",
    detail: "Com orientação de uso e suporte inicial",
  },
];

export const audiences = [
  "empresas de serviços B2B",
  "clínicas com equipe médica",
  "escritórios de advocacia e contabilidade",
  "construtoras e imobiliárias",
  "empresas que participam de licitações",
  "negócios que querem mais do que Instagram",
];

export const faqs = [
  {
    question: "Qual a diferença entre site institucional e landing page?",
    answer:
      "A landing page é uma página única focada em um objetivo específico — geralmente capturar contato ou converter um anúncio. O site institucional tem múltiplas páginas (Sobre, Serviços, Contato, etc.) e apresenta a empresa de forma completa. Para negócios com mais serviços ou que precisam de credibilidade com parceiros e clientes B2B, o institucional faz mais sentido.",
  },
  {
    question: "Quantas páginas tem um site institucional?",
    answer:
      "O padrão inclui Início, Sobre a empresa, Serviços e Contato — quatro páginas que já respondem 90% do que um visitante quer saber. Dependendo do negócio, podemos incluir portfólio, equipe, área de blog ou páginas por serviço específico. Definimos juntos antes de começar.",
  },
  {
    question: "Landing page resolve ou preciso do institucional?",
    answer:
      "Depende do objetivo. Se você quer converter anúncios ou divulgar um serviço específico, a landing page é mais eficiente. Se precisa apresentar a empresa completa para clientes, parceiros ou processos de contratação — inclusive licitações — o site institucional é o caminho certo.",
  },
  {
    question: "Quanto tempo leva para ficar pronto?",
    answer:
      "Sites institucionais com quatro a seis páginas ficam prontos em 10 a 20 dias úteis após a aprovação do briefing. O prazo exato depende do volume de conteúdo e das páginas definidas — e é confirmado antes do início do projeto.",
  },
];

export const testimonials = siteTestimonials;

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Site institucional em Manaus",
  description:
    "Criação de sites institucionais em Manaus com múltiplas páginas, SEO local e identidade visual para empresas que precisam de presença digital completa.",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    telephone: `+${site.whatsapp.number}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "BR",
    },
  },
  areaServed: {
    "@type": "City",
    name: site.city,
  },
  offers: {
    "@type": "Offer",
    url: pageUrl,
    availability: "https://schema.org/InStock",
    priceCurrency: "BRL",
    price: "897",
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
