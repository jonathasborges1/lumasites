import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Gauge,
  MousePointerClick,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { site } from "@/content/site";
import { testimonials as siteTestimonials } from "@/content/testimonials";
import { whatsappLink } from "@/utils/whatsapp";

export type Feature = {
  Icon: LucideIcon;
  title: string;
  text: string;
};

export const pageUrl = `${site.url}/landing-page-manaus`;

export const campaignWhatsApp = whatsappLink({
  service: "Landing Page em Manaus",
  custom:
    "Vim pela página /landing-page-manaus e quero entender valores, prazo e o melhor formato para o meu negócio.",
});

export const pageMetadata: Metadata = {
  title: "Landing Page em Manaus | Página de Captação pelo WhatsApp",
  description:
    "Landing page profissional em Manaus para captar clientes pelo WhatsApp, divulgar um serviço e converter anúncios em contatos. Orçamento gratuito e sem compromisso.",
  alternates: {
    canonical: pageUrl,
  },
  keywords: [
    "landing page em Manaus",
    "criar landing page Manaus",
    "landing page para WhatsApp Manaus",
    "página de vendas Manaus",
    "landing page para clínica Manaus",
    "página de captação Manaus",
    "landing page para anúncios Manaus",
    "landing page profissional Manaus",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: pageUrl,
    siteName: site.name,
    title: "Landing Page em Manaus | Luma Sites",
    description:
      "Página comercial focada em converter visitantes em clientes pelo WhatsApp. Rápida, profissional e pronta para anúncios.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luma Sites - Landing Page em Manaus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page em Manaus | Luma Sites",
    description:
      "Landing page profissional em Manaus com foco em captação de clientes pelo WhatsApp.",
    images: ["/og-image.jpg"],
  },
};

export const hero = {
  eyebrow: "Landing page em Manaus",
  socialProof: "+30 páginas entregues em Manaus",
  urgency: "Agenda limitada — poucos projetos por mês",
  title: "Landing page em Manaus para transformar cliques em clientes no WhatsApp",
  description:
    "Uma página comercial rápida, clara e focada em uma única ação: fazer o visitante chamar no WhatsApp. Ideal para divulgar um serviço, captar leads ou converter anúncios pagos.",
  primaryCta: "Falar agora no WhatsApp",
  secondaryCta: "Ver como funciona",
  helper: "Gratuito · Sem compromisso · Resposta em até 1 hora",
};

export const proofItems = [
  "Página focada em uma única ação",
  "Otimizada para celular e anúncios",
  "CTA para WhatsApp em pontos estratégicos",
  "Carregamento rápido — menos abandono",
];

export const diagnosticItems = [
  "Se landing page é o formato ideal para você",
  "Quais seções precisam entrar",
  "Como levar o visitante ao WhatsApp",
  "Prazo e investimento estimado",
];

export const deliverables: Feature[] = [
  {
    Icon: MousePointerClick,
    title: "Conversão como prioridade",
    text: "Estrutura pensada para que o visitante dê o próximo passo — sem distração, sem dispersão.",
  },
  {
    Icon: Gauge,
    title: "Velocidade de carregamento",
    text: "Página leve, rápida no celular e preparada para não perder visitantes de anúncios pagos.",
  },
  {
    Icon: Zap,
    title: "Pronta para anúncios",
    text: "Design e código compatíveis com campanhas de Google Ads e Instagram Ads sem adaptação extra.",
  },
  {
    Icon: ShieldCheck,
    title: "Visual profissional",
    text: "Aparência sob medida para transmitir confiança e credibilidade antes do primeiro contato.",
  },
];

export const steps = [
  {
    title: "Diagnóstico rápido",
    text: "Você conta o serviço que quer promover, o público-alvo e se já roda anúncios.",
  },
  {
    title: "Proposta objetiva",
    text: "Definimos a estrutura ideal da landing, prazo estimado e investimento.",
  },
  {
    title: "Criação e publicação",
    text: "Montamos a página, ajustamos os textos e colocamos no ar com foco em conversão pelo WhatsApp.",
  },
];

export const audiences = [
  "profissionais liberais com um serviço específico",
  "clínicas e consultórios com captação de leads",
  "negócios que rodam anúncios no Google ou Instagram",
  "quem quer converter tráfego pago em clientes reais",
  "autônomos que vendem um serviço principal",
  "empresas lançando um novo produto ou promoção",
];

export const faqs = [
  {
    question: "Qual a diferença entre landing page e site institucional?",
    answer:
      "A landing page é uma única página focada em uma única ação — normalmente chamar no WhatsApp ou preencher um formulário. O site institucional apresenta sua empresa de forma completa, com várias seções e páginas. A landing é mais indicada para divulgar um serviço específico ou converter anúncios pagos com agilidade.",
  },
  {
    question: "Landing page funciona sem anúncios pagos?",
    answer:
      "Sim. Uma landing page pode receber tráfego orgânico do Google, direto de links no Instagram ou WhatsApp. Anúncios pagos aumentam o volume de visitas, mas não são obrigatórios para começar.",
  },
  {
    question: "Quanto tempo leva para fazer uma landing page?",
    answer:
      "Em média 5 a 7 dias úteis após o briefing aprovado. A agilidade depende também do retorno do cliente nas etapas de revisão e aprovação de conteúdo.",
  },
  {
    question: "A landing page fica bem no celular?",
    answer:
      "Sim, é a prioridade. A maioria dos acessos via anúncio vem de dispositivos móveis. O layout é pensado mobile-first desde o início, com botões de WhatsApp visíveis e carregamento otimizado.",
  },
];

export const testimonials = siteTestimonials;

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Landing Page em Manaus",
  description:
    "Criação de landing pages profissionais em Manaus para captação de clientes pelo WhatsApp e conversão de tráfego pago.",
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
