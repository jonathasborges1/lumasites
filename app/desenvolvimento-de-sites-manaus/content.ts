import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Gauge,
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

export const pageUrl = `${site.url}/desenvolvimento-de-sites-manaus`;

export const campaignWhatsApp = whatsappLink({
  service: "Desenvolvimento de sites em Manaus",
  custom:
    "Vim pela página /desenvolvimento-de-sites-manaus e quero entender como seria o desenvolvimento de um site para minha empresa.",
});

export const pageMetadata: Metadata = {
  title: "Desenvolvimento de Sites em Manaus | Luma Sites",
  description:
    "Desenvolvimento de sites em Manaus para empresas que precisam de um site rápido, responsivo, profissional e preparado para SEO local. Solicite um orçamento pelo WhatsApp.",
  alternates: {
    canonical: "/desenvolvimento-de-sites-manaus",
  },
  keywords: [
    "desenvolvimento de sites Manaus",
    "desenvolvimento de sites em Manaus",
    "desenvolvimento web Manaus",
    "empresa de desenvolvimento de sites Manaus",
    "criação de sites em Manaus",
    "site para empresa em Manaus",
    "desenvolvedor de sites Manaus",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: pageUrl,
    siteName: site.name,
    title: "Desenvolvimento de Sites em Manaus | Luma Sites",
    description:
      "Sites profissionais, responsivos e otimizados para negócios locais que querem aparecer melhor no Google.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luma Sites - Desenvolvimento de sites em Manaus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desenvolvimento de Sites em Manaus | Luma Sites",
    description:
      "Desenvolvimento de sites profissionais em Manaus com SEO local e atendimento pelo WhatsApp.",
    images: ["/og-image.jpg"],
  },
};

export const hero = {
  eyebrow: "Desenvolvimento de sites em Manaus",
  socialProof: "+30 sites entregues em Manaus",
  urgency: "Agenda limitada - poucos projetos por mês",
  title: "Desenvolvimento de sites em Manaus para empresas que precisam aparecer melhor",
  description:
    "Criamos sites profissionais com estrutura técnica, design responsivo, carregamento rápido e SEO local para negócios de Manaus que querem transformar buscas no Google em contatos pelo WhatsApp.",
  primaryCta: "Falar agora no WhatsApp",
  secondaryCta: "Ver como funciona",
  helper: "Gratuito · Sem compromisso · Resposta em até 1 hora",
};

export const proofItems = [
  "Desenvolvimento responsivo para celular",
  "SEO local desde a estrutura da pagina",
  "Performance, metadados e sitemap configurados",
  "CTA para WhatsApp em pontos estratégicos",
];

export const diagnosticItems = [
  "Qual tipo de site combina com seu objetivo",
  "Quais páginas ou seções precisam entrar",
  "Como estruturar o conteúdo para buscas locais",
  "Prazo e investimento sem surpresa",
];

export const deliverables: Feature[] = [
  {
    Icon: Code2,
    title: "Estrutura técnica profissional",
    text: "Desenvolvimento pensado para estabilidade, organização de conteúdo, URLs amigáveis e uma base limpa para crescer depois.",
  },
  {
    Icon: Gauge,
    title: "Site rápido no celular",
    text: "A experiência mobile vem primeiro: páginas leves, carregamento rápido e navegação clara para quem acessa pelo telefone.",
  },
  {
    Icon: SearchCheck,
    title: "SEO local para Manaus",
    text: "Títulos, descrições, conteúdo local e marcação semântica para ajudar o Google a entender sua empresa e sua área de atendimento.",
  },
  {
    Icon: ShieldCheck,
    title: "Credibilidade para vender melhor",
    text: "Um site bem desenvolvido passa segurança para quem compara fornecedores antes de chamar no WhatsApp.",
  },
];

export const steps = [
  {
    title: "Diagnóstico do projeto",
    text: "Entendemos seu negócio, seu público, seus serviços e o tipo de busca que você quer disputar em Manaus.",
  },
  {
    title: "Planejamento da estrutura",
    text: "Definimos formato, páginas, seções, CTAs e conteúdo necessário para o site cumprir o objetivo comercial.",
  },
  {
    title: "Desenvolvimento e publicacao",
    text: "Criamos o site, revisamos os textos, configuramos SEO técnico básico e publicamos tudo pronto para receber contatos.",
  },
];

export const audiences = [
  "empresas locais",
  "prestadores de serviço",
  "clínicas e consultórios",
  "escritorios de advocacia",
  "lojas e comércios",
  "profissionais liberais",
];

export const faqs = [
  {
    question: "Qual a diferença entre criação e desenvolvimento de sites?",
    answer:
      "Na prática, os termos se aproximam. Criação costuma envolver estratégia, design e conteúdo. Desenvolvimento destaca a parte técnica: estrutura, performance, responsividade, SEO técnico e publicação. Em um projeto profissional, as duas coisas caminham juntas.",
  },
  {
    question: "O site desenvolvido ja fica preparado para aparecer no Google?",
    answer:
      "Sim. Entregamos a base com metadados, estrutura semântica, URL amigável, sitemap e conteúdo pensado para buscas locais. O ranqueamento também depende de concorrência, autoridade do domínio e continuidade de SEO.",
  },
  {
    question: "Vocês fazem site institucional e landing page?",
    answer:
      "Sim. Podemos desenvolver landing pages para campanhas, sites profissionais de apresentação e sites institucionais com várias páginas para empresas que precisam mostrar serviços, diferenciais e canais de contato.",
  },
  {
    question: "Quanto tempo leva o desenvolvimento de um site em Manaus?",
    answer:
      "Uma landing page costuma levar de 5 a 7 dias úteis após o alinhamento inicial. Sites institucionais com mais páginas geralmente ficam entre 10 e 20 dias úteis, dependendo de conteúdo, aprovações e complexidade.",
  },
];

export const testimonials = siteTestimonials;

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Desenvolvimento de sites em Manaus",
  description:
    "Desenvolvimento de sites profissionais em Manaus com design responsivo, performance, SEO local e estrutura para gerar contatos.",
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
