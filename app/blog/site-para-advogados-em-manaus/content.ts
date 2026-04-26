import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Clock,
  FileText,
  Landmark,
  MapPin,
  MessageCircle,
  Scale,
  Search,
  Shield,
  Users,
  Wallet,
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

export type ProcessStep = {
  num: string;
  h3: string;
  content: string;
};

export type SiteType = {
  Icon: LucideIcon;
  iconClass: string;
  iconSize: number;
  h3: string;
  price: string;
  badge: string;
  badgeClass: string;
  content: string;
  good: string[];
};

export type Differential = {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
};

export type ContractingItem = {
  h3: string;
  content: string;
  tip: string;
};

const slug = "site-para-advogados-em-manaus";
const articleUrl = `${site.url}/blog/${slug}`;

export const articleDates = {
  publishedAt: "2026-04-23",
  publishedLabel: "23 de abril de 2026",
  updatedAt: "2026-04-26",
  updatedLabel: "26 de abril de 2026",
};

export const pageMetadata: Metadata = {
  title: "Site para Advogados em Manaus | Como captar mais consultas com credibilidade",
  description:
    "Entenda como deve ser um site para advogados em Manaus: estrutura ideal, regras de comunicação, SEO local, investimento e o que avaliar antes de contratar.",
  keywords: [
    "site para advogados em Manaus",
    "site para escritório de advocacia em Manaus",
    "criação de site para advogado em Manaus",
    "site jurídico em Manaus",
    "marketing jurídico em Manaus",
    "landing page para advogado em Manaus",
    "desenvolvimento web para advogados em Manaus",
  ],
  alternates: {
    canonical: `/blog/${slug}`,
  },
  openGraph: {
    title: "Site para Advogados em Manaus | Estrutura, SEO e captação ética",
    description:
      "Guia prático para escritórios e advogados de Manaus que precisam de um site profissional, rápido e alinhado ao posicionamento do escritório.",
    url: articleUrl,
    type: "article",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Site profissional para escritório de advocacia em Manaus",
      },
    ],
  },
};

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Site para Advogados em Manaus: o que um escritório precisa para gerar confiança online",
  description:
    "Guia para advogados e escritórios de Manaus sobre estrutura de site, SEO local, regras de comunicação e como contratar um projeto profissional.",
  author: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
  datePublished: articleDates.publishedAt,
  dateModified: articleDates.updatedAt,
  url: articleUrl,
  mainEntityOfPage: articleUrl,
  inLanguage: "pt-BR",
  keywords:
    "site para advogados em Manaus, site para escritório de advocacia em Manaus, marketing jurídico em Manaus, SEO local para advogados",
  about: {
    "@type": "Thing",
    name: "Site profissional para advogados em Manaus",
  },
};

export const wppLink = whatsappLink({
  service: "Site para advogado em Manaus",
  custom:
    "Tenho um escritório ou atuação jurídica em Manaus e quero entender o melhor formato de site para gerar mais contatos qualificados.",
});

export const faqs: Faq[] = [
  {
    q: "Quanto custa um site para advogados em Manaus?",
    a: "O valor depende da estrutura. Uma landing page para uma área específica de atuação costuma ser a opção mais enxuta. Um site institucional com páginas para o escritório, sócios, áreas atendidas, contato e blog exige mais planejamento. Em Manaus, o ponto principal não é apenas o preço, mas sim se o site transmite sobriedade, é rápido no celular e facilita o primeiro contato sem parecer amador.",
  },
  {
    q: "Um escritório pequeno realmente precisa de site?",
    a: "Sim. Mesmo escritórios que vivem de indicação ganham quando a pessoa procura o nome do advogado no Google e encontra um site claro, profissional e com informações objetivas. Esse momento de validação pesa muito antes de uma ligação ou mensagem.",
  },
  {
    q: "Qual a diferença entre um site institucional e uma landing page jurídica?",
    a: "O site institucional apresenta o escritório como um todo, com posicionamento, equipe, áreas de atuação e canais de atendimento. A landing page é focada em uma única demanda, como direito previdenciário, trabalhista ou família. Para campanhas específicas, a landing page costuma converter melhor. Para construir marca e autoridade, o site institucional é mais completo.",
  },
  {
    q: "O site ajuda a aparecer no Google em buscas locais de Manaus?",
    a: "Ajuda muito quando o projeto nasce com SEO local: páginas otimizadas por área de atuação, velocidade alta, títulos corretos, endereço de atendimento, contexto geográfico de Manaus e integração com o perfil da empresa no Google. Sem isso, o escritório depende mais de indicação e tráfego pago.",
  },
  {
    q: "O marketing jurídico permite ter site e captar contatos?",
    a: "Sim, desde que o site seja pensado com comunicação informativa, institucional e ética. O importante é evitar promessas de resultado, linguagem apelativa ou elementos que comprometam a sobriedade da advocacia. O site deve orientar, explicar serviços e facilitar o contato, não vender como uma página agressiva de varejo.",
  },
  {
    q: "Quais páginas não podem faltar em um site para advogado?",
    a: "As mais importantes são: página inicial clara, sobre o escritório ou profissional, áreas de atuação, página de contato com WhatsApp e formulário, informações de localização e, quando fizer sentido, conteúdo educativo em blog. Também vale incluir perguntas frequentes para reduzir dúvidas antes da consulta.",
  },
  {
    q: "Vale a pena manter blog jurídico no site?",
    a: "Vale quando existe consistência. Um blog bem feito ajuda a responder dúvidas que o cliente pesquisa antes de procurar um advogado, amplia a presença orgânica no Google e fortalece autoridade. O segredo é publicar conteúdo útil, objetivo e alinhado ao perfil do escritório.",
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
    Icon: Scale,
    iconClass: "text-glow-cyan",
    title: "Credibilidade antes do primeiro contato",
    text: "Em serviços jurídicos, a decisão costuma vir depois de uma checagem rápida no Google. Um site bem apresentado reduz desconfiança e reforça autoridade.",
  },
  {
    Icon: Search,
    iconClass: "text-accent-amber",
    title: "SEO local para Manaus",
    text: "Pessoas pesquisam por temas como advogado trabalhista em Manaus, inventário em Manaus ou pensão alimentícia em Manaus. O site ajuda o escritório a disputar essas buscas com mais consistência.",
  },
  {
    Icon: Shield,
    iconClass: "text-accent-green",
    title: "Comunicação mais segura e sóbria",
    text: "Um site próprio permite apresentar serviços, experiência e áreas de atuação com linguagem institucional, sem depender apenas de redes sociais e formatos improvisados.",
  },
  {
    Icon: MessageCircle,
    iconClass: "text-accent-magenta",
    title: "Contato mais qualificado",
    text: "Quando o visitante entende o que o escritório faz antes de chamar no WhatsApp, a conversa começa melhor e com menos perda de tempo para ambas as partes.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    h3: "Diagnóstico do escritório e das áreas de atuação",
    content:
      "O primeiro passo é entender como o escritório atua hoje: quais áreas trazem mais demanda, qual o perfil dos clientes em Manaus, se há atendimento presencial, online ou híbrido e como os contatos chegam atualmente.",
  },
  {
    num: "02",
    h3: "Arquitetura do conteúdo e tom da comunicação",
    content:
      "Definimos as páginas essenciais, o posicionamento do escritório e a forma correta de apresentar serviços, sempre priorizando clareza, sobriedade visual e facilidade de leitura no celular.",
  },
  {
    num: "03",
    h3: "Design, desenvolvimento e adaptação mobile",
    content:
      "O projeto é desenvolvido com foco em performance, boa experiência em smartphone e navegação simples. Para advocacia, isso faz diferença porque boa parte dos primeiros acessos vem do celular.",
  },
  {
    num: "04",
    h3: "SEO local, testes e publicação",
    content:
      "Antes de publicar, o site recebe estrutura de SEO técnico, revisão de títulos, descrições, links internos e páginas estratégicas para buscas locais relacionadas a Manaus.",
  },
  {
    num: "05",
    h3: "Acompanhamento e expansão de conteúdo",
    content:
      "Depois de publicado, o escritório pode ampliar o site com novas páginas por especialidade, perguntas frequentes e artigos que respondam dúvidas reais do público.",
  },
];

export const siteTypes: SiteType[] = [
  {
    Icon: FileText,
    iconClass: "text-glow-cyan",
    iconSize: 22,
    h3: "Landing page jurídica",
    price: "A partir de R$ 997",
    badge: "Entrada rápida",
    badgeClass: "text-glow-aqua border-glow-cyan/40",
    content:
      "Página única para uma área específica de atuação, com foco em explicar o serviço, gerar confiança e captar contatos. Boa opção para advogado autônomo ou campanha pontual.",
    good: [
      "Direito trabalhista, família, previdenciário ou consumidor",
      "Campanhas com tráfego pago ou divulgação direta",
      "Quem precisa publicar rápido com foco em conversão",
    ],
  },
  {
    Icon: Landmark,
    iconClass: "text-accent-amber",
    iconSize: 22,
    h3: "Site institucional para escritório",
    price: "A partir de R$ 1.800",
    badge: "Mais recomendado",
    badgeClass: "text-accent-amber border-accent-amber/40",
    content:
      "Estrutura completa com home, sobre, áreas de atuação, equipe, contato e páginas internas. Ideal para escritórios que querem parecer mais consolidados e construir autoridade no longo prazo.",
    good: [
      "Escritórios com mais de uma especialidade",
      "Sócios que querem apresentar equipe e metodologia",
      "Quem deseja fortalecer a marca do escritório",
    ],
  },
  {
    Icon: Search,
    iconClass: "text-accent-green",
    iconSize: 22,
    h3: "Site com blog jurídico",
    price: "A partir de R$ 2.400",
    badge: "Foco em SEO",
    badgeClass: "text-accent-green border-accent-green/40",
    content:
      "Projeto pensado para crescer no Google com artigos, páginas por tema e estratégia de conteúdo. Indicado para escritórios que querem aumentar presença orgânica ao longo do tempo.",
    good: [
      "Escritórios que produzem conteúdo regularmente",
      "Quem quer ampliar alcance sem depender só de anúncios",
      "Projetos de médio e longo prazo com SEO local",
    ],
  },
  {
    Icon: Users,
    iconClass: "text-accent-magenta",
    iconSize: 22,
    h3: "Site para advogado autônomo",
    price: "A partir de R$ 1.300",
    badge: "Enxuto e profissional",
    badgeClass: "text-accent-magenta border-accent-magenta/40",
    content:
      "Formato objetivo para destacar o profissional, suas áreas de atuação, experiência e canais de atendimento. Funciona bem para quem atua sozinho e precisa passar mais confiança online.",
    good: [
      "Advogados iniciando estrutura própria",
      "Profissionais com atendimento consultivo",
      "Quem recebe indicações mas ainda não tem presença forte no Google",
    ],
  },
];

export const localDifferentials: Differential[] = [
  {
    Icon: MapPin,
    iconClass: "text-glow-cyan",
    title: "Contexto real de Manaus",
    text: "Não basta citar a cidade. O site precisa conversar com bairros, perfil de busca, tipo de atendimento e demandas locais que realmente aparecem no escritório.",
  },
  {
    Icon: Clock,
    iconClass: "text-accent-amber",
    title: "Atendimento ágil pelo mesmo fuso",
    text: "Para escritórios, demora na resposta atrapalha. Ter suporte no horário de Manaus facilita ajustes, aprovações e correções com menos fricção.",
  },
  {
    Icon: BadgeCheck,
    iconClass: "text-accent-green",
    title: "Visual compatível com a advocacia",
    text: "Muita página jurídica erra por parecer genérica ou comercial demais. O diferencial está em equilibrar sobriedade, clareza e boa conversão sem exageros visuais.",
  },
  {
    Icon: Wallet,
    iconClass: "text-accent-magenta",
    title: "Escopo pensado para retorno",
    text: "Em vez de inflar o projeto com páginas que não ajudam na captação, a ideia é priorizar o que realmente gera confiança e facilita o contato certo.",
  },
];

export const contractingGuide: ContractingItem[] = [
  {
    h3: "Pergunte se o projeto entende o contexto da advocacia",
    content:
      "Nem todo site bonito funciona para um escritório. O fornecedor precisa saber trabalhar com linguagem institucional, páginas mais explicativas e uma estrutura que ajude o potencial cliente a entender o serviço sem sensacionalismo.",
    tip: "Peça exemplos de sites para serviços de alta confiança, não apenas lojas ou páginas promocionais.",
  },
  {
    h3: "Confirme o plano de SEO local",
    content:
      "Se o objetivo é ser encontrado em Manaus, o projeto precisa prever títulos, páginas e estrutura pensados para busca local. Sem isso, o site vira apenas um cartão de visita online.",
    tip: "Pergunte quais páginas serão criadas para áreas de atuação e como o escritório será associado a Manaus nas buscas.",
  },
  {
    h3: "Entenda o que está incluso no texto e na arquitetura",
    content:
      "Muitos projetos entregam apenas o layout. Para advocacia, a organização do conteúdo faz enorme diferença. Vale confirmar se o fornecedor ajuda na estrutura, revisão e adaptação dos textos.",
    tip: "Se o escritório não tiver material pronto, alinhe isso no início para evitar atrasos.",
  },
  {
    h3: "Veja como será a captação de contato",
    content:
      "Formulário, WhatsApp, botão fixo, página de contato e chamada principal precisam trabalhar juntos. Em site jurídico, o visitante normalmente quer uma forma simples e discreta de falar com o escritório.",
    tip: "Teste o caminho completo como cliente: entrou na página, entendeu o serviço e conseguiu chamar com facilidade?",
  },
  {
    h3: "Garanta acesso e autonomia depois da entrega",
    content:
      "Domínio, hospedagem, analytics e arquivos do site devem ficar sob controle do escritório. Isso evita dependência e facilita manutenção futura.",
    tip: "O ideal é que o escritório possa continuar com o projeto mesmo se trocar de fornecedor no futuro.",
  },
];
