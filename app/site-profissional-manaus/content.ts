import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Brush,
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

export const pageUrl = `${site.url}/site-profissional-manaus`;

export const campaignWhatsApp = whatsappLink({
  service: "Site profissional em Manaus",
  custom:
    "Vim pela página /site-profissional-manaus e quero entender como ficaria um site profissional para o meu negócio.",
});

export const pageMetadata: Metadata = {
  title: "Site Profissional em Manaus | Luma Sites",
  description:
    "Criamos sites profissionais em Manaus para empresas, clínicas, advogados e autônomos que querem credibilidade digital. Design sob medida, rápido e otimizado para o Google. Orçamento pelo WhatsApp.",
  alternates: {
    canonical: pageUrl,
  },
  keywords: [
    "site profissional Manaus",
    "site profissional em Manaus",
    "criação de site profissional Manaus",
    "empresa de sites profissionais Manaus",
    "web design profissional Manaus",
    "site para empresa em Manaus",
    "site profissional Amazonas",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: pageUrl,
    siteName: site.name,
    title: "Site Profissional em Manaus | Luma Sites",
    description:
      "Design sob medida, carregamento rápido e SEO local para sua empresa aparecer no Google com credibilidade.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luma Sites - Site profissional em Manaus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site Profissional em Manaus | Luma Sites",
    description:
      "Site profissional para sua empresa em Manaus. Orçamento pelo WhatsApp.",
    images: ["/og-image.jpg"],
  },
};

export const hero = {
  eyebrow: "Site profissional em Manaus",
  socialProof: "+30 sites entregues em Manaus",
  urgency: "Agenda limitada — poucos projetos por mês",
  title: "Site profissional em Manaus para parar de perder clientes na primeira impressão",
  description:
    "Um site bem feito transmite credibilidade antes de qualquer palavra. Criamos sites profissionais para negócios em Manaus com design sob medida, carregamento rápido e estrutura preparada para o Google.",
  primaryCta: "Falar agora no WhatsApp",
  secondaryCta: "Ver como funciona",
  helper: "Gratuito · Sem compromisso · Resposta em até 1 hora",
};

export const proofItems = [
  "Design personalizado, sem template genérico",
  "Código limpo e carregamento rápido",
  "SEO local para aparecer no Google em Manaus",
  "Atendimento direto com quem vai fazer seu site",
];

export const diagnosticItems = [
  "O visual ideal para o seu mercado",
  "As seções que passam mais credibilidade",
  "Como destacar seu diferencial competitivo",
  "Prazo e investimento sem surpresas",
];

export const deliverables: Feature[] = [
  {
    Icon: Brush,
    title: "Design sob medida",
    text: "Cada site é criado do zero com identidade visual alinhada ao seu negócio — sem template genérico que parece igual ao do concorrente.",
  },
  {
    Icon: Gauge,
    title: "Carregamento rápido",
    text: "Sites lentos perdem visitantes em segundos. Construção leve e otimizada para abrir bem no celular e impressionar desde o primeiro acesso.",
  },
  {
    Icon: SearchCheck,
    title: "Preparado para o Google",
    text: "Metadados, estrutura semântica e conteúdo local para sua empresa aparecer nas buscas de quem procura em Manaus.",
  },
  {
    Icon: ShieldCheck,
    title: "Presença que transmite confiança",
    text: "Um site profissional é o diferencial entre fechar ou perder um cliente que pesquisou você antes de ligar.",
  },
];

export const steps = [
  {
    title: "Entendemos seu negócio",
    text: "Você conta o que faz, para quem vende e o que quer transmitir. Com isso já temos o suficiente para propor o caminho certo.",
  },
  {
    title: "Proposta clara e objetiva",
    text: "Apresentamos o formato ideal, prazo estimado e investimento — sem tabela confusa, sem letra miúda.",
  },
  {
    title: "Criação e publicação",
    text: "Desenvolvemos o site com foco no seu público e colocamos no ar. Você aprova cada etapa antes de ir ao vivo.",
  },
];

export const audiences = [
  "consultórios e clínicas",
  "escritórios de advocacia",
  "prestadores de serviços",
  "comércios e lojas locais",
  "profissionais liberais",
  "empresas que querem mais do que Instagram",
];

export const faqs = [
  {
    question: "O que diferencia um site profissional de um construtor gratuito?",
    answer:
      "Construtores gratuitos usam templates idênticos para milhares de empresas, carregam devagar e têm limitações de SEO. Um site profissional é desenvolvido com identidade própria, otimizado para velocidade e estruturado para aparecer no Google com mais eficiência.",
  },
  {
    question: "Vocês criam do zero ou usam templates prontos?",
    answer:
      "Cada projeto começa do zero com base no seu segmento, público e objetivos. O resultado é um site com personalidade própria, alinhado ao que sua empresa precisa comunicar.",
  },
  {
    question: "Um site profissional aparece no Google?",
    answer:
      "Sim, desde que tenha a estrutura técnica correta. Configuramos metadados, títulos, descrições e marcação semântica para ajudar o Google a entender seu negócio e exibi-lo para quem busca em Manaus.",
  },
  {
    question: "Quanto tempo leva para ter o site no ar?",
    answer:
      "Uma landing page profissional fica pronta em 5 a 7 dias úteis após a aprovação do briefing. Sites institucionais com mais seções levam entre 10 e 20 dias. O prazo exato é confirmado antes do início do projeto.",
  },
];

export const testimonials = siteTestimonials;

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}#service`,
  name: "Site profissional em Manaus",
  description:
    "Criação de sites profissionais em Manaus com design sob medida, carregamento rápido e SEO local configurado.",
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
