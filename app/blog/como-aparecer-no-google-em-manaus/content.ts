import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Globe,
  MapPin,
  Search,
  Star,
  Smartphone,
  Zap,
  Clock,
  MessageCircle,
} from "lucide-react";
import { whatsappLink } from "@/utils/whatsapp";
import { site } from "@/content/site";

// ─── Types ───────────────────────────────────────────────────────────────────

export type Faq = { q: string; a: string };

export type Factor = {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
};

export type ActionStep = {
  num: string;
  h3: string;
  content: string;
  tip: string;
};

export type Mistake = {
  title: string;
  text: string;
};

// ─── Dates ───────────────────────────────────────────────────────────────────

export const articleDates = {
  publishedAt: "2026-04-28",
  publishedLabel: "28 de abril de 2026",
  updatedAt: null,
  updatedLabel: null,
};

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const pageMetadata: Metadata = {
  title: "Como Aparecer no Google em Manaus | Guia para Pequenos Negócios",
  description:
    "Seu cliente está no Google — mas ele encontra você? Aprenda o que fazer para aparecer nas buscas locais de Manaus: Google Meu Negócio, SEO local e presença digital prática.",
  keywords: [
    "como aparecer no Google em Manaus",
    "Google Meu Negócio Manaus",
    "SEO local Manaus",
    "presença digital Manaus",
    "aparecer no Google Manaus",
    "site para aparecer no Google Manaus",
    "cadastro Google Meu Negócio Manaus",
    "ranquear no Google Manaus",
  ],
  alternates: {
    canonical: "/blog/como-aparecer-no-google-em-manaus",
  },
  openGraph: {
    title: "Como Aparecer no Google em Manaus | Guia para Pequenos Negócios",
    description:
      "Seu cliente está no Google — mas ele encontra você? Aprenda como pequenos negócios de Manaus podem aparecer nas buscas locais.",
    url: `${site.url}/blog/como-aparecer-no-google-em-manaus`,
    type: "article",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Guia sobre como aparecer no Google para pequenos negócios em Manaus",
      },
    ],
  },
};

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Como Aparecer no Google em Manaus: guia prático para pequenos negócios",
  description:
    "Guia prático para pequenos negócios de Manaus aparecerem no Google: Google Meu Negócio, SEO local, erros comuns e checklist de ações.",
  author: { "@type": "Organization", name: site.name, url: site.url },
  publisher: { "@type": "Organization", name: site.name, url: site.url },
  datePublished: articleDates.publishedAt,
  ...(articleDates.updatedAt ? { dateModified: articleDates.updatedAt } : {}),
  url: `${site.url}/blog/como-aparecer-no-google-em-manaus`,
  mainEntityOfPage: `${site.url}/blog/como-aparecer-no-google-em-manaus`,
  inLanguage: "pt-BR",
  keywords:
    "como aparecer no Google em Manaus, Google Meu Negócio Manaus, SEO local Manaus, presença digital Manaus",
  about: { "@type": "Thing", name: "Presença digital e SEO local para negócios em Manaus" },
};

// ─── WhatsApp ─────────────────────────────────────────────────────────────────

export const wppLink = whatsappLink({
  custom:
    "Olá! Vi o artigo sobre como aparecer no Google em Manaus e quero saber mais sobre os serviços. Poderia me passar um orçamento?",
});

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faqs: Faq[] = [
  {
    q: "O Google Meu Negócio é gratuito?",
    a: "Sim, completamente gratuito. Você cadastra seu negócio, adiciona fotos, horários, endereço e telefone — e começa a aparecer nos resultados locais do Google e no Google Maps sem pagar nada. É o primeiro passo obrigatório para qualquer negócio em Manaus.",
  },
  {
    q: "Quanto tempo leva para aparecer no Google depois de criar o perfil?",
    a: "O Google Meu Negócio pode começar a aparecer em poucos dias após a verificação do cadastro. Já um site pode levar de 4 a 12 semanas para ganhar posicionamento orgânico relevante, dependendo da concorrência na sua área e da qualidade do SEO aplicado.",
  },
  {
    q: "Preciso de um site para aparecer no Google?",
    a: "Não necessariamente para aparecer no Google Maps — o perfil no Google Meu Negócio já resolve isso. Mas para aparecer nas buscas orgânicas (os resultados abaixo do mapa), um site é essencial. A combinação dos dois é o que gera a presença digital mais completa e confiável.",
  },
  {
    q: "O que é SEO local e por que importa para negócios em Manaus?",
    a: "SEO local são as técnicas que fazem seu site ou perfil aparecer quando alguém busca por um serviço em uma região específica — por exemplo, 'dentista em Manaus' ou 'advocacia Manaus'. Para negócios locais, é mais importante do que aparecer para buscas genéricas do Brasil inteiro.",
  },
  {
    q: "Anúncios pagos no Google são necessários para aparecer?",
    a: "Não são obrigatórios. Os resultados orgânicos e o Google Meu Negócio são gratuitos. Anúncios pagos (Google Ads) aceleram a visibilidade a curto prazo, mas não substituem o SEO — que gera presença contínua e gratuita. O ideal é começar pela base orgânica e usar anúncios como complemento.",
  },
  {
    q: "Como as avaliações no Google influenciam o posicionamento?",
    a: "Diretamente. Negócios com mais avaliações, notas altas e respostas ativas têm prioridade nos resultados locais. Pedir avaliações a clientes satisfeitos — via WhatsApp, link direto ou pessoalmente — é uma das ações mais simples e eficazes para melhorar a visibilidade no Google.",
  },
  {
    q: "Meu negócio não tem endereço físico. Posso aparecer no Google?",
    a: "Sim. O Google Meu Negócio permite cadastrar negócios que atendem em domicílio ou por área de cobertura, sem exibir o endereço publicamente. Você configura as regiões onde atende — como diferentes bairros de Manaus — e aparece nas buscas dessas áreas.",
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

// ─── Seção 1 — Fatores de ranqueamento local ──────────────────────────────────

export const rankingFactors: Factor[] = [
  {
    Icon: MapPin,
    iconClass: "text-glow-cyan",
    title: "Perfil no Google Meu Negócio",
    text: "O cadastro completo e verificado é o sinal mais importante para o Google associar seu negócio a buscas locais em Manaus.",
  },
  {
    Icon: Star,
    iconClass: "text-accent-amber",
    title: "Avaliações e nota média",
    text: "Negócios com mais avaliações positivas e respostas ativas têm vantagem clara nos resultados locais do Google Maps.",
  },
  {
    Icon: Globe,
    iconClass: "text-accent-green",
    title: "Site profissional com SEO local",
    text: "Um site otimizado para buscas em Manaus amplia o alcance orgânico e transmite credibilidade ao algoritmo do Google.",
  },
  {
    Icon: Smartphone,
    iconClass: "text-accent-magenta",
    title: "Experiência no celular",
    text: "Mais de 70% das buscas locais acontecem via celular. Um site responsivo e rápido é pré-requisito para ranquear bem.",
  },
  {
    Icon: Search,
    iconClass: "text-glow-aqua",
    title: "Consistência de informações",
    text: "Nome, endereço e telefone iguais em todos os lugares — site, redes sociais e Google — reforçam a confiança do algoritmo.",
  },
  {
    Icon: Clock,
    iconClass: "text-accent-amber",
    title: "Frequência de atualizações",
    text: "Negócios que postam, respondem avaliações e atualizam informações com regularidade ganham mais relevância ao longo do tempo.",
  },
];

// ─── Seção 2 — Erros comuns ───────────────────────────────────────────────────

export const commonMistakes: Mistake[] = [
  {
    title: "Perfil no Google Meu Negócio incompleto ou não verificado",
    text: "Muitos negócios em Manaus criam o perfil mas não completam todas as informações — ou pior, não verificam o cadastro. Um perfil incompleto tem desempenho ruim. Reserve 30 minutos para preencher tudo: fotos, horários, descrição, categoria e telefone.",
  },
  {
    title: "Site sem menção à cidade ou ao bairro",
    text: "Se seu site não menciona 'Manaus', 'Amazonas' ou os bairros onde você atende, o Google não entende que você é local. Inclua referências geográficas nos textos, no título das páginas e nas meta descrições.",
  },
  {
    title: "Ignorar avaliações no Google",
    text: "Não pedir avaliações a clientes satisfeitos é uma oportunidade perdida. Não responder avaliações — positivas ou negativas — passa uma imagem de descaso. Crie o hábito de pedir e responder ativamente.",
  },
  {
    title: "Depender só das redes sociais",
    text: "Instagram e Facebook são importantes, mas você não controla o alcance. Quando o algoritmo muda, seu negócio some. O site é o ativo digital que você possui — e é o que o Google efetivamente indexa para buscas orgânicas.",
  },
  {
    title: "Site lento ou que não funciona no celular",
    text: "Um site que demora para carregar ou que quebra no smartphone derruba seu posicionamento no Google. Velocidade e responsividade são critérios de ranqueamento, não apenas estética.",
  },
];

// ─── Seção 3 — Checklist de ações ────────────────────────────────────────────

export const actionSteps: ActionStep[] = [
  {
    num: "01",
    h3: "Crie ou reivindique seu perfil no Google Meu Negócio",
    content:
      "Acesse business.google.com e cadastre seu negócio. Se ele já aparecer no Google, reivindique o perfil como proprietário. Preencha todas as informações: nome exato, categoria principal, endereço ou área de cobertura, telefone, site, horários de funcionamento e descrição.",
    tip: "Use o nome exato do seu negócio. Não inclua palavras-chave como cidade no nome — o Google penaliza essa prática.",
  },
  {
    num: "02",
    h3: "Adicione fotos reais do seu espaço ou serviço",
    content:
      "Perfis com fotos recebem muito mais cliques. Adicione fotos da fachada, do interior, da equipe e dos serviços realizados. Atualize com regularidade — isso sinaliza ao Google que o negócio está ativo e engajado.",
    tip: "Mínimo de 10 fotos para começar. Prefira fotos tiradas com boa iluminação durante o dia, sem filtros excessivos.",
  },
  {
    num: "03",
    h3: "Peça avaliações a clientes satisfeitos",
    content:
      "Gere o link direto para avaliação no Google Meu Negócio e envie via WhatsApp após cada atendimento bem-sucedido. Uma mensagem simples como 'se ficou satisfeito, deixar uma avaliação nos ajuda muito' já resolve.",
    tip: "Responda TODAS as avaliações — positivas e negativas. Isso demonstra profissionalismo e melhora o posicionamento local.",
  },
  {
    num: "04",
    h3: "Tenha um site com SEO local configurado",
    content:
      "Crie páginas que mencionem Manaus e os serviços que você oferece. Garanta que o site carregue em menos de 3 segundos no celular. Configure o Google Search Console para monitorar como o Google está indexando seu conteúdo.",
    tip: "Páginas específicas por serviço ou bairro performam melhor do que uma única página genérica para tudo.",
  },
  {
    num: "05",
    h3: "Mantenha informações consistentes em todos os canais",
    content:
      "Nome, endereço e telefone do seu negócio devem ser exatamente iguais no Google Meu Negócio, no site, no Instagram, no Facebook e em qualquer diretório onde você apareça. Inconsistências confundem o algoritmo do Google.",
    tip: "Copie e cole as informações — não redigite. Qualquer variação ortográfica pode prejudicar o ranqueamento local.",
  },
];

// ─── Ícone de alerta para erros ───────────────────────────────────────────────

export { MessageCircle, Zap };
