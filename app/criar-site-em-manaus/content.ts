import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Gauge,
  MousePointerClick,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import { site } from "@/content/site";
import { testimonials as siteTestimonials } from "@/content/testimonials";
import { whatsappLink } from "@/utils/whatsapp";

export type Feature = {
  Icon: LucideIcon;
  title: string;
  text: string;
};

export const pageUrl = `${site.url}/criar-site-em-manaus`;

export const campaignWhatsApp = whatsappLink({
  service: "Criar site em Manaus",
  custom:
    "Vim pela página /criar-site-em-manaus e quero entender valores, prazo e o melhor formato para meu negócio.",
});

export const pageMetadata: Metadata = {
  title: "Criar Site em Manaus com Orçamento pelo WhatsApp",
  description:
    "Crie um site profissional em Manaus para apresentar sua empresa, aparecer melhor no Google e receber contatos pelo WhatsApp. Orçamento rápido e sem compromisso.",
  alternates: {
    canonical: "/criar-site-em-manaus",
  },
  keywords: [
    "criar site em Manaus",
    "criação de site em Manaus",
    "site profissional Manaus",
    "landing page Manaus",
    "site para empresa em Manaus",
    "orçamento site Manaus",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: pageUrl,
    siteName: site.name,
    title: "Criar Site em Manaus | Luma Sites",
    description:
      "Site profissional para negócios em Manaus, com foco em credibilidade, Google e contatos pelo WhatsApp.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luma Sites - Criar site em Manaus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Criar Site em Manaus | Luma Sites",
    description:
      "Site profissional para negócios em Manaus, com orçamento pelo WhatsApp.",
    images: ["/og-image.jpg"],
  },
};

export const hero = {
  eyebrow: "Criação de sites em Manaus",
  socialProof: "+30 sites entregues em Manaus",
  urgency: "Agenda limitada — poucos projetos por mês",
  title: "Criar site em Manaus para sua empresa vender com mais confiança",
  description:
    "Um site profissional, rápido e claro para apresentar seu negócio, aparecer melhor nas buscas locais e receber contatos pelo WhatsApp sem depender apenas das redes sociais.",
  primaryCta: "Falar agora no WhatsApp",
  secondaryCta: "Ver como funciona",
  helper: "Gratuito · Sem compromisso · Resposta em até 1 hora",
};

export const proofItems = [
  "Atendimento direto em Manaus",
  "Site responsivo para celular",
  "Estrutura preparada para SEO local",
  "CTA para WhatsApp em pontos estratégicos",
];

export const diagnosticItems = [
  "Qual tipo de site faz sentido",
  "Quais seções precisam entrar",
  "Como levar o visitante ao WhatsApp",
  "Prazo e investimento estimado",
];

export const deliverables: Feature[] = [
  {
    Icon: MousePointerClick,
    title: "Página pensada para conversão",
    text: "Texto, seções e botões organizados para transformar visitantes em contatos reais.",
  },
  {
    Icon: Gauge,
    title: "Carregamento rápido",
    text: "Construção leve para abrir bem no celular e reduzir abandono no primeiro acesso.",
  },
  {
    Icon: SearchCheck,
    title: "Base para aparecer no Google",
    text: "Metadados, estrutura semântica e conteúdo local para sua empresa ser encontrada.",
  },
  {
    Icon: ShieldCheck,
    title: "Presença profissional",
    text: "Visual sob medida para transmitir confiança antes mesmo do primeiro atendimento.",
  },
];

export const steps = [
  {
    title: "Diagnóstico rápido",
    text: "Você conta o tipo de negócio, objetivo do site e o que precisa divulgar.",
  },
  {
    title: "Proposta objetiva",
    text: "Indicamos o formato ideal, prazo estimado e investimento para tirar o site do papel.",
  },
  {
    title: "Criação e publicação",
    text: "Montamos a página, ajustamos textos e colocamos tudo no ar com foco em contato.",
  },
];

export const audiences = [
  "prestadores de serviço",
  "clínicas e consultórios",
  "advogados e escritórios",
  "lojas e negócios locais",
  "autônomos e profissionais liberais",
  "empresas que dependem de WhatsApp",
];

export const faqs = [
  {
    question: "Quanto custa criar um site em Manaus?",
    answer:
      "Depende do tamanho e do objetivo. Uma landing page costuma ser mais enxuta; um site institucional com várias seções exige mais planejamento. No WhatsApp, fazemos um diagnóstico rápido e passamos uma estimativa clara.",
  },
  {
    question: "O site fica bom no celular?",
    answer:
      "Sim. A maior parte dos acessos vem do celular, então a experiência mobile é tratada como prioridade desde o início.",
  },
  {
    question: "Vocês ajudam com o texto da página?",
    answer:
      "Sim. Organizamos as informações do negócio em uma narrativa simples, clara e focada em gerar contato.",
  },
  {
    question: "Preciso pagar mensalidade obrigatória?",
    answer:
      "Não trabalhamos com mensalidade abusiva obrigatória. Quando houver custos de hospedagem, domínio ou manutenção, eles são explicados antes da contratação.",
  },
];

export const testimonials = siteTestimonials;

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Criar site em Manaus",
  description:
    "Criação de sites profissionais em Manaus para empresas, autônomos e profissionais liberais.",
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
