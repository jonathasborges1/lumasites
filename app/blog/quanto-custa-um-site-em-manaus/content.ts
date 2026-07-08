import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Globe,
  ShoppingCart,
  Star,
  Shield,
  Zap,
  Clock,
  MessageCircle,
  Award,
  User,
} from "lucide-react";
import { whatsappLink } from "@/utils/whatsapp";
import { site } from "@/content/site";

// ─── Types ───────────────────────────────────────────────────────────────────

export type Faq = { q: string; a: string };

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

const slug = "quanto-custa-um-site-em-manaus";
const articleUrl = `${site.url}/blog/${slug}`;

export const articleDates = {
  publishedAt: "2026-04-23",
  publishedLabel: "23 de abril de 2026",
  updatedAt: "2026-07-07",
  updatedLabel: "7 de julho de 2026",
};

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const pageMetadata: Metadata = {
  title: "Quanto Custa um Site em Manaus em 2026? | Guia de Preços Real",
  description:
    "Valores reais de criação de site em Manaus: landing page a partir de R$ 497, site institucional entre R$ 800 e R$ 2.000. O que influencia o preço, custos fixos anuais e como evitar cobranças escondidas.",
  keywords: [
    "quanto custa um site em Manaus",
    "quanto custa criar um site",
    "preço de site profissional em Manaus",
    "valor de landing page em Manaus",
    "custo de site institucional",
    "quanto custa manter um site",
    "orçamento de site em Manaus",
  ],
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: "Quanto Custa um Site em Manaus em 2026? | Guia de Preços Real",
    description:
      "Valores reais por tipo de site, o que influencia o preço, custos fixos anuais e as cobranças escondidas que você deve evitar antes de contratar.",
    url: articleUrl,
    type: "article",
    images: [
      {
        url: "/blog/criacao-de-sites-em-manaus.webp",
        width: 1680,
        height: 960,
        alt: "Guia de preços de criação de sites profissionais em Manaus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quanto Custa um Site em Manaus em 2026? | Guia de Preços Real",
    description:
      "Valores reais por tipo de site, custos fixos anuais e as cobranças escondidas que você deve evitar antes de contratar.",
    images: ["/blog/criacao-de-sites-em-manaus.webp"],
  },
};

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Quanto custa um site em Manaus em 2026: guia de preços sem enrolação",
  description:
    "Guia de preços de criação de sites em Manaus: faixas de valor por tipo de projeto, fatores que influenciam o orçamento, custos fixos de domínio e hospedagem e como comparar propostas.",
  author: {
    "@type": "Person",
    name: "Jonathas Borges",
    url: site.url,
    sameAs: ["https://www.instagram.com/jonathasborges1"],
  },
  publisher: { "@type": "Organization", name: site.name, url: site.url },
  datePublished: articleDates.publishedAt,
  dateModified: articleDates.updatedAt,
  image: `${site.url}/blog/criacao-de-sites-em-manaus.webp`,
  url: articleUrl,
  mainEntityOfPage: articleUrl,
  inLanguage: "pt-BR",
  keywords:
    "quanto custa um site em Manaus, preço de site profissional, valor de landing page, custo de site institucional, orçamento de site",
  about: { "@type": "Thing", name: "Preços de criação de sites em Manaus" },
};

// ─── WhatsApp ─────────────────────────────────────────────────────────────────

export const wppLink = whatsappLink({
  custom:
    "Olá! Li o guia de preços de sites em Manaus e quero um orçamento para o meu caso. Pode me ajudar?",
});

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faqs: Faq[] = [
  {
    q: "Quanto custa um site simples em Manaus?",
    a: "Uma landing page profissional — página única com apresentação do negócio, serviços e botão de WhatsApp — parte de R$ 497 na Luma Sites. No mercado de Manaus, projetos equivalentes variam de R$ 400 a R$ 1.500, dependendo do nível de personalização, do texto e do SEO incluído.",
  },
  {
    q: "E um site completo para empresa, quanto custa?",
    a: "Sites institucionais com 3 a 5 páginas (início, sobre, serviços, contato) costumam ficar entre R$ 800 e R$ 2.000 em Manaus. Projetos com blog, muitas páginas de serviço ou área de conteúdo passam disso. O que separa as faixas é o escopo: número de páginas, produção de texto, SEO e prazos.",
  },
  {
    q: "Quais são os custos fixos de manter um site no ar?",
    a: "Dois custos são inevitáveis: o domínio (endereço .com.br), cerca de R$ 40 por ano no Registro.br, e a hospedagem, que varia de R$ 0 (planos gratuitos de plataformas modernas, suficientes para sites pequenos) a R$ 30–60 por mês em hospedagens tradicionais. Somando, um site simples pode custar menos de R$ 100 por ano para manter.",
  },
  {
    q: "Por que os orçamentos variam tanto de um fornecedor para outro?",
    a: "Porque 'site' descreve coisas muito diferentes. Um template pronto adaptado em um dia custa menos que um projeto desenhado do zero com texto profissional e SEO local. Ao comparar propostas, compare o escopo: quantas páginas, quem escreve o texto, se o SEO técnico está incluso, quantas revisões, e de quem é o domínio ao final.",
  },
  {
    q: "Existe site grátis? Vale a pena?",
    a: "Existem construtores gratuitos (Wix, Google Sites), mas o custo aparece de outra forma: endereço com a marca da plataforma, anúncios de terceiros, limitações de SEO e aparência genérica. Para validar uma ideia, servem. Para um negócio que quer ser encontrado no Google e transmitir profissionalismo, o barato costuma custar clientes.",
  },
  {
    q: "O que é mensalidade de site? Preciso pagar?",
    a: "Alguns fornecedores cobram mensalidade que mistura hospedagem, manutenção e 'aluguel' do site — e se você parar de pagar, perde tudo. Nosso modelo é diferente: você paga o projeto uma vez e o site é seu, com domínio no seu CPF ou CNPJ. Manutenção mensal é opcional, para quem quer atualizações frequentes.",
  },
  {
    q: "Quanto custa um site que aparece no Google?",
    a: "SEO técnico básico (velocidade, meta tags, sitemap, dados estruturados) deve estar incluso em qualquer projeto sério — desconfie se for cobrado à parte. O que pode ter custo adicional é a estratégia contínua: produção de conteúdo, páginas por serviço e otimização mensal. Para a maioria dos pequenos negócios de Manaus, o site bem feito mais o perfil do Google já geram resultado.",
  },
  {
    q: "Formas de pagamento: como costuma funcionar?",
    a: "O padrão do mercado é 50% para iniciar e 50% na entrega, ou parcelamento no cartão. Desconfie de cobrança de 100% antecipado sem contrato ou escopo documentado. Na Luma Sites, o orçamento detalha exatamente o que está incluso antes de qualquer pagamento.",
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

// ─── Seção 1 — Fatores que influenciam o preço ───────────────────────────────

export const benefits: Benefit[] = [
  {
    Icon: Globe,
    iconClass: "text-glow-cyan",
    title: "Número de páginas e seções",
    text: "Uma landing page é um projeto; um site com 8 páginas de serviço é outro. Cada página exige design, texto e otimização próprios — é o fator que mais pesa no orçamento.",
  },
  {
    Icon: Star,
    iconClass: "text-accent-amber",
    title: "Quem produz o conteúdo",
    text: "Se você entrega textos e fotos prontos, o projeto custa menos. Se o fornecedor precisa escrever, fotografar ou gerar imagens, isso entra no valor — e faz diferença no resultado.",
  },
  {
    Icon: Zap,
    iconClass: "text-accent-green",
    title: "Template pronto vs. projeto sob medida",
    text: "Adaptar um modelo pronto é rápido e barato, mas fica parecido com milhares de sites. Design exclusivo custa mais e posiciona melhor — o certo depende do seu momento.",
  },
  {
    Icon: Shield,
    iconClass: "text-accent-magenta",
    title: "SEO e estrutura técnica",
    text: "Velocidade, dados estruturados, sitemap e contexto local de Manaus não aparecem no layout, mas determinam se o site será encontrado. Projetos sem isso são mais baratos — e invisíveis.",
  },
];

// ─── Seção 2 — Processo ───────────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    h3: "Briefing define o escopo — e o escopo define o preço",
    content:
      "Antes de falar em valor, um fornecedor sério entende o objetivo: captar contatos no WhatsApp? Apresentar a empresa? Vender produtos? É o objetivo que determina o tipo de site, o número de páginas e, por consequência, o orçamento. Desconfie de preço fechado antes de qualquer pergunta sobre o seu negócio.",
  },
  {
    num: "02",
    h3: "Proposta com escopo documentado",
    content:
      "O orçamento deve listar por escrito: páginas incluídas, quem produz textos e imagens, rodadas de revisão, prazo, SEO técnico incluso e o que acontece com domínio e hospedagem. Esse documento é sua proteção contra o principal problema do mercado: o preço que cresce depois do fechamento.",
  },
  {
    num: "03",
    h3: "Desenvolvimento com aprovações por etapa",
    content:
      "Você aprova o design antes do desenvolvimento começar. Mudanças na fase certa não custam nada; mudanças depois do site pronto viram retrabalho — e retrabalho vira cobrança extra em muitos contratos. Aprovar por etapa mantém o valor combinado.",
  },
  {
    num: "04",
    h3: "Entrega com propriedade transferida",
    content:
      "Na entrega, o domínio deve estar registrado no seu CPF/CNPJ, e você deve receber os acessos. Se o fornecedor 'segura' o domínio ou o código, o preço baixo do início se paga caro depois: você fica refém para qualquer mudança futura.",
  },
  {
    num: "05",
    h3: "Custos contínuos claros desde o início",
    content:
      "Depois do projeto, os custos recorrentes devem ser mínimos e transparentes: domínio (~R$ 40/ano), hospedagem (de gratuita a R$ 60/mês conforme o porte) e, se você quiser, plano de manutenção opcional. Tudo isso deve estar dito antes do contrato, não descoberto depois.",
  },
];

// ─── Seção 3 — Preços por tipo de site ───────────────────────────────────────

export const siteTypes: SiteType[] = [
  {
    Icon: Zap,
    iconClass: "text-accent-amber",
    iconSize: 22,
    h3: "Landing page — a partir de R$ 497",
    badge: "Menor investimento",
    badgeClass: "text-accent-amber border-accent-amber/40",
    content:
      "Página única focada em uma ação: levar o visitante ao WhatsApp. Inclui apresentação do negócio, serviços, provas sociais e contato. No mercado de Manaus, o intervalo típico é de R$ 400 a R$ 1.500 conforme personalização e SEO.",
    good: [
      "Autônomos e prestadores de serviço",
      "Campanhas de anúncios pagos",
      "Quem precisa publicar rápido",
    ],
  },
  {
    Icon: Globe,
    iconClass: "text-glow-cyan",
    iconSize: 22,
    h3: "Site institucional — R$ 800 a R$ 2.000",
    badge: "Mais contratado",
    badgeClass: "text-glow-aqua border-glow-cyan/40",
    content:
      "De 3 a 5 páginas: início, sobre, serviços e contato. É a faixa onde está a maioria dos projetos de pequenas empresas, clínicas e escritórios em Manaus. O valor dentro do intervalo depende do número de páginas e de quem produz o conteúdo.",
    good: [
      "Empresas com múltiplos serviços",
      "Clínicas, escritórios e comércio",
      "Negócios que dependem de confiança",
    ],
  },
  {
    Icon: Star,
    iconClass: "text-accent-magenta",
    iconSize: 22,
    h3: "Site com blog e SEO — R$ 2.000 a R$ 4.000",
    badge: "Crescimento no Google",
    badgeClass: "text-accent-magenta border-accent-magenta/40",
    content:
      "Estrutura institucional mais área de conteúdo, páginas por serviço e SEO local aprofundado. É o formato para quem quer crescer organicamente no Google ao longo dos meses, sem depender só de anúncio.",
    good: [
      "Quem quer tráfego orgânico contínuo",
      "Profissionais construindo autoridade",
      "Projetos de médio e longo prazo",
    ],
  },
  {
    Icon: ShoppingCart,
    iconClass: "text-accent-green",
    iconSize: 22,
    h3: "Loja virtual — a partir de R$ 3.000",
    badge: "Orçamento sob medida",
    badgeClass: "text-accent-green border-accent-green/40",
    content:
      "Carrinho, pagamento online, frete e estoque tornam o e-commerce o projeto mais variável de todos: de R$ 3.000 em plataformas prontas a valores muito maiores em projetos personalizados. Aqui o orçamento depende inteiramente do catálogo e da operação.",
    good: [
      "Comércio que quer vender online",
      "Negócios com catálogo de produtos",
      "Quem quer sair do marketplace",
    ],
  },
];

// ─── Seção 4 — Onde o barato sai caro ────────────────────────────────────────

export const localDifferentials: Differential[] = [
  {
    Icon: Shield,
    iconClass: "text-glow-cyan",
    title: "Domínio registrado no nome do fornecedor",
    text: "Se o domínio não está no seu CPF/CNPJ, o site nunca foi seu. Trocar de fornecedor pode significar perder o endereço que seus clientes conhecem.",
  },
  {
    Icon: Clock,
    iconClass: "text-accent-amber",
    title: "Mensalidade eterna disfarçada",
    text: "R$ 99/mês para sempre custa R$ 3.564 em três anos — mais que um site institucional completo que seria seu. Faça a conta antes de assinar.",
  },
  {
    Icon: Zap,
    iconClass: "text-accent-green",
    title: "SEO cobrado como extra",
    text: "Meta tags, velocidade e sitemap são parte de fazer o trabalho direito, não um adicional premium. Se o básico é extra, o orçamento inicial era incompleto.",
  },
  {
    Icon: MessageCircle,
    iconClass: "text-accent-magenta",
    title: "Revisões ilimitadas que não existem",
    text: "Propostas vagas sobre revisões terminam em conflito. O número de rodadas de ajuste deve estar no papel — é proteção para os dois lados.",
  },
  {
    Icon: Award,
    iconClass: "text-glow-aqua",
    title: "Preço fechado sem briefing",
    text: "Quem dá preço sem perguntar nada sobre seu negócio está vendendo um template, não um projeto. Pode servir — mas você deve saber o que está comprando.",
  },
  {
    Icon: User,
    iconClass: "text-accent-amber",
    title: "Site entregue sem treinamento",
    text: "Você deve saber alterar textos, fotos e telefone sem pagar por cada vírgula. Confirme se a entrega inclui painel de edição ou orientação de uso.",
  },
];

// ─── Seção 5 — Como comparar orçamentos ─────────────────────────────────────

export const contractingGuide: ContractingItem[] = [
  {
    h3: "Compare escopo, não número final",
    content:
      "Um orçamento de R$ 600 e outro de R$ 1.800 podem descrever projetos completamente diferentes. Coloque lado a lado: páginas, conteúdo, SEO, prazo, revisões e propriedade. Só então o número faz sentido.",
    tip: "Peça os dois escopos por escrito e compare item a item. A diferença de preço quase sempre está no que um deles não inclui.",
  },
  {
    h3: "Pergunte o que acontece se vocês se separarem",
    content:
      "A pergunta mais reveladora para qualquer fornecedor: 'se eu quiser trocar de empresa daqui a um ano, o que levo comigo?'. A resposta certa: domínio, arquivos e acessos — tudo. Hesitação aqui é o maior sinal de alerta que existe.",
    tip: "Confirme por escrito que domínio e código são seus. É a diferença entre comprar um ativo e alugar uma vitrine.",
  },
  {
    h3: "Valide o portfólio no celular",
    content:
      "Peça sites já entregues e abra cada um no seu smartphone, na sua rede. Veja se carregam rápido, se o WhatsApp funciona e se aparecem no Google quando você busca pelo nome do negócio. É o teste que nenhum discurso comercial substitui.",
    tip: "Digite o nome de um cliente do portfólio no Google. Se o site dele não aparece nem na busca pelo próprio nome, o SEO prometido não existe.",
  },
  {
    h3: "Considere o custo total de 3 anos",
    content:
      "Some projeto + domínio + hospedagem + manutenção pelo período de 3 anos em cada proposta. Modelos de mensalidade parecem baratos no mês 1 e caros no mês 36. Projetos pagos uma vez invertem essa conta.",
    tip: "Um site próprio de R$ 1.200 + R$ 100/ano de custos fixos custa R$ 1.500 em 3 anos. Uma 'mensalidade acessível' de R$ 99 custa R$ 3.564.",
  },
  {
    h3: "Desconfie das duas pontas",
    content:
      "O orçamento muito acima do mercado não garante qualidade, e o muito abaixo geralmente esconde template genérico, ausência de SEO ou cobranças futuras. Em Manaus, as faixas deste guia são a referência realista para comparar.",
    tip: "Se uma proposta está 50% abaixo das outras, pergunte exatamente o que foi cortado. A resposta costuma explicar a diferença.",
  },
];

export type InternalLink = {
  href: string;
  label: string;
  text: string;
};

export const internalLinks: InternalLink[] = [
  {
    href: "/criar-site-em-manaus",
    label: "Criar site em Manaus",
    text: "Conheça os formatos que oferecemos, prazos reais e como funciona o processo do briefing à publicação.",
  },
  {
    href: "/site-profissional-manaus",
    label: "Site profissional em Manaus",
    text: "Veja como um site profissional transmite credibilidade antes do primeiro contato com o cliente.",
  },
  {
    href: "/blog/como-aparecer-no-google-em-manaus",
    label: "Como aparecer no Google em Manaus",
    text: "O que o Google considera para mostrar negócios locais e o checklist prático para ser encontrado.",
  },
];
