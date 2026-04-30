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

export const articleDates = {
  publishedAt: "2026-04-23",
  publishedLabel: "23 de abril de 2026",
  updatedAt: null,
  updatedLabel: null,
};

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const pageMetadata: Metadata = {
  title: "Criação de Sites em Manaus | Desenvolvimento Web Profissional",
  description:
    "Precisa de um site profissional em Manaus? Veja tipos de site, como funciona o processo e o que avaliar antes de contratar. Orçamento gratuito no WhatsApp.",
  keywords: [
    "criação de sites em Manaus",
    "desenvolvimento de sites em Manaus",
    "empresa de criação de sites em Manaus",
    "site profissional em Manaus",
    "landing page em Manaus",
    "desenvolvedor web em Manaus",
    "criação de site para empresas em Manaus",
  ],
  alternates: {
    canonical: "/blog/criacao-de-sites-em-manaus",
  },
  openGraph: {
    title: "Criação de Sites em Manaus | Desenvolvimento Web Profissional",
    description:
      "Precisa de um site profissional em Manaus? Entenda como funciona o processo, quais tipos de site existem e o que avaliar antes de contratar.",
    url: `${site.url}/blog/criacao-de-sites-em-manaus`,
    type: "article",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tela de notebook mostrando um site profissional desenvolvido para empresa em Manaus",
      },
    ],
  },
};

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Criação de Sites em Manaus: o que saber antes de contratar",
  description:
    "Guia completo sobre como funciona a criação de sites profissionais em Manaus. Tipos de site, como avaliar fornecedores e por que presença digital é essencial para negócios locais.",
  author: { "@type": "Organization", name: site.name, url: site.url },
  publisher: { "@type": "Organization", name: site.name, url: site.url },
  datePublished: articleDates.publishedAt,
  ...(articleDates.updatedAt ? { dateModified: articleDates.updatedAt } : {}),
  url: `${site.url}/blog/criacao-de-sites-em-manaus`,
  mainEntityOfPage: `${site.url}/blog/criacao-de-sites-em-manaus`,
  inLanguage: "pt-BR",
  keywords:
    "criação de sites em Manaus, desenvolvimento de sites em Manaus, site profissional em Manaus, landing page em Manaus",
  about: { "@type": "Thing", name: "Criação de sites profissionais em Manaus" },
};

// ─── WhatsApp ─────────────────────────────────────────────────────────────────

export const wppLink = whatsappLink({
  custom:
    "Olá! Vi o artigo sobre criação de sites em Manaus e quero saber mais sobre os serviços. Poderia me passar um orçamento?",
});

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const faqs: Faq[] = [
  {
    q: "Quanto custa criar um site em Manaus?",
    a: "O valor varia de acordo com o tipo de site e a complexidade do projeto. Uma landing page começa a partir de R$ 497. Sites institucionais completos variam entre R$ 800 e R$ 2.000. Loja virtual e projetos personalizados são orçados individualmente. Na Luma Sites, você recebe um orçamento detalhado e sem surpresas antes de qualquer compromisso.",
  },
  {
    q: "Quanto tempo leva para criar um site profissional?",
    a: "Uma landing page simples pode ficar pronta em 5 a 7 dias úteis. Um site institucional com até 4 páginas leva em média de 10 a 20 dias úteis, dependendo da agilidade nas aprovações. O prazo real é sempre definido junto com o cliente no início do projeto.",
  },
  {
    q: "Preciso de domínio e hospedagem para ter um site?",
    a: "Sim. O domínio é o endereço do seu site (ex: seusite.com.br) e a hospedagem é onde os arquivos ficam armazenados. Cuidamos de tudo: ajudamos na escolha, registro e configuração. O custo anual fica geralmente entre R$ 100 e R$ 200, dependendo das opções escolhidas.",
  },
  {
    q: "Posso atualizar o site sozinho depois que estiver pronto?",
    a: "Sim. Todos os nossos sites são entregues com painel administrativo simples, onde você pode alterar textos, imagens e informações de contato sem precisar de conhecimento técnico. Para quem prefere, também oferecemos planos de manutenção mensal.",
  },
  {
    q: "O site vai aparecer no Google depois de pronto?",
    a: "Todo site que desenvolvemos já sai configurado com SEO técnico básico: velocidade otimizada, meta tags, sitemap e URLs amigáveis. Para aparecer bem posicionado em buscas locais como 'serviço em Manaus', recomendamos combinar o site com uma estratégia de SEO contínua e cadastro no Google Business Profile.",
  },
  {
    q: "Qual a diferença entre site institucional e landing page?",
    a: "O site institucional apresenta sua empresa de forma completa: quem você é, o que faz, onde fica, como contatar. É ideal para construir credibilidade a longo prazo. A landing page é uma única página focada em uma única ação — captar um lead, promover um serviço ou vender um produto. É mais direta e muito usada em campanhas de anúncios.",
  },
  {
    q: "Fazem manutenção e suporte após a entrega?",
    a: "Sim. Oferecemos suporte após a entrega e planos de manutenção mensal para quem precisa de atualizações frequentes. Atendemos por WhatsApp em horário comercial, com agilidade e sem burocracia.",
  },
  {
    q: "Vocês atendem qualquer tipo de negócio em Manaus?",
    a: "Sim. Desenvolvemos sites para clínicas, consultórios, escritórios de advocacia e contabilidade, prestadores de serviços, salões de beleza, comércio local, autônomos e profissionais liberais. Se você tem um negócio em Manaus e precisa de presença digital, podemos ajudar.",
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

// ─── Seção 1 — Benefícios ─────────────────────────────────────────────────────

export const benefits: Benefit[] = [
  {
    Icon: Star,
    iconClass: "text-accent-amber",
    title: "Credibilidade imediata",
    text: "Clientes confiam mais em negócios com site. É o primeiro sinal de profissionalismo antes de qualquer contato.",
  },
  {
    Icon: Globe,
    iconClass: "text-glow-cyan",
    title: "Visibilidade no Google",
    text: "Apareça quando alguém buscar pelo seu serviço em Manaus — sem depender de anúncio pago.",
  },
  {
    Icon: Clock,
    iconClass: "text-accent-green",
    title: "Disponível 24h por dia",
    text: "Seu site trabalha enquanto você dorme. Informações, portfólio e contato sempre acessíveis.",
  },
  {
    Icon: Shield,
    iconClass: "text-accent-magenta",
    title: "Independência digital",
    text: "Sem depender de algoritmos de redes sociais. O seu site é seu — você controla.",
  },
];

// ─── Seção 2 — Processo ───────────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    h3: "Levantamento de necessidades e briefing",
    content:
      "Tudo começa com uma conversa. O objetivo é entender o seu negócio: o que você oferece, quem é o seu cliente, quais são seus diferenciais, se você tem materiais prontos (logo, fotos, textos) e qual o objetivo principal do site. Esse alinhamento no início evita retrabalho e garante que o resultado final faça sentido para o seu público.",
  },
  {
    num: "02",
    h3: "Design e identidade visual",
    content:
      "Com o briefing em mãos, criamos o layout visual do site: cores, tipografia, estrutura das páginas e fluxo de navegação. Tudo pensado para refletir a identidade do seu negócio e facilitar a experiência de quem acessa. Você aprova o design antes de qualquer linha de código ser escrita.",
  },
  {
    num: "03",
    h3: "Desenvolvimento e programação",
    content:
      "Após a aprovação do design, o site é construído com código limpo, carregamento rápido e funcionamento correto em celulares, tablets e computadores. Usamos tecnologias modernas que garantem performance, segurança e boa pontuação no Google.",
  },
  {
    num: "04",
    h3: "Testes, SEO inicial e publicação",
    content:
      "Antes de publicar, testamos o site em diferentes dispositivos e navegadores. Configuramos o SEO técnico básico — meta tags, velocidade, sitemap, URLs amigáveis — para que o Google indexe corretamente. Em seguida, o site vai ao ar no seu domínio.",
  },
  {
    num: "05",
    h3: "Suporte e manutenção após o lançamento",
    content:
      "O trabalho não termina com a publicação. Você recebe acesso completo ao site e suporte para dúvidas. Para quem precisa de atualizações frequentes, oferecemos planos de manutenção mensal com atendimento direto pelo WhatsApp.",
  },
];

// ─── Seção 3 — Tipos de site ──────────────────────────────────────────────────

export const siteTypes: SiteType[] = [
  {
    Icon: Globe,
    iconClass: "text-glow-cyan",
    iconSize: 22,
    h3: "Site institucional",
    badge: "Mais contratado",
    badgeClass: "text-glow-aqua border-glow-cyan/40",
    content:
      "Apresenta sua empresa de forma completa: quem você é, o que faz, onde fica e como contatar. Ideal para clínicas, escritórios, comércio e prestadores de serviço que querem construir credibilidade online a longo prazo.",
    good: [
      "Empresas com múltiplos serviços",
      "Quem quer construir presença sólida",
      "Negócios que dependem de confiança",
    ],
  },
  {
    Icon: Zap,
    iconClass: "text-accent-amber",
    iconSize: 22,
    h3: "Landing page",
    badge: "Alta conversão",
    badgeClass: "text-accent-amber border-accent-amber/40",
    content:
      "Uma única página focada em uma única ação: captar um lead, promover um serviço ou apresentar uma oferta. Mais direta, mais rápida de criar e muito eficiente em campanhas de anúncios no Google e Instagram.",
    good: [
      "Promoção de um serviço específico",
      "Campanhas de anúncios pagos",
      "Profissionais com um serviço principal",
    ],
  },
  {
    Icon: ShoppingCart,
    iconClass: "text-accent-green",
    iconSize: 22,
    h3: "Loja virtual",
    badge: "Para quem vende produtos",
    badgeClass: "text-accent-green border-accent-green/40",
    content:
      "Permite vender produtos diretamente pela internet — com carrinho, pagamento online e controle de estoque. Ideal para comércio físico que quer expandir para o e-commerce ou marcas que querem autonomia do marketplace.",
    good: [
      "Comércio que quer vender online",
      "Negócios com catálogo de produtos",
      "Quem quer sair do marketplace",
    ],
  },
  {
    Icon: User,
    iconClass: "text-accent-magenta",
    iconSize: 22,
    h3: "Site para profissional liberal",
    badge: "Médicos, advogados, consultores",
    badgeClass: "text-accent-magenta border-accent-magenta/40",
    content:
      "Pensado para autônomos que precisam de credibilidade digital: médicos, advogados, contadores, psicólogos, consultores. Apresenta o profissional, suas especialidades e as formas de agendamento ou contato.",
    good: [
      "Profissionais liberais e autônomos",
      "Quem depende de indicação e reputação",
      "Serviços que exigem confiança prévia",
    ],
  },
];

// ─── Seção 4 — Diferenciais locais ───────────────────────────────────────────

export const localDifferentials: Differential[] = [
  {
    Icon: MessageCircle,
    iconClass: "text-glow-cyan",
    title: "Atendimento próximo, sem fuso",
    text: "Nada de ticket com 3 dias de espera. Atendemos por WhatsApp, em português, no horário de Manaus.",
  },
  {
    Icon: Award,
    iconClass: "text-accent-amber",
    title: "Conhecimento do mercado local",
    text: "Sabemos como o público de Manaus pesquisa, compara e decide. Isso influencia diretamente o design e o SEO do seu site.",
  },
  {
    Icon: Shield,
    iconClass: "text-accent-green",
    title: "Acesso e código completos",
    text: "Você recebe acesso total ao site. Nada fica preso conosco. Quer migrar no futuro? É seu.",
  },
  {
    Icon: Zap,
    iconClass: "text-accent-magenta",
    title: "Prazo definido desde o início",
    text: "Definimos prazos reais antes de começar. Sem enrolação. Você sabe quando vai ficar pronto.",
  },
  {
    Icon: Globe,
    iconClass: "text-glow-aqua",
    title: "SEO local desde o primeiro dia",
    text: "Sites desenvolvidos para ranquear em buscas como 'serviço em Manaus'. Sem custo adicional.",
  },
  {
    Icon: Clock,
    iconClass: "text-accent-amber",
    title: "Suporte real após a entrega",
    text: "Não sumimos depois que o site vai ao ar. Estamos disponíveis para dúvidas, ajustes e melhorias.",
  },
];

// ─── Seção 5 — Guia de contratação ───────────────────────────────────────────

export const contractingGuide: ContractingItem[] = [
  {
    h3: "Portfólio e projetos anteriores",
    content:
      "Peça para ver sites que o fornecedor já desenvolveu. Analise a qualidade visual, a velocidade de carregamento e se funcionam bem no celular. Um bom portfólio é a prova mais concreta de capacidade técnica.",
    tip: "Acesse os sites no celular, não só no computador. Mais de 60% dos acessos em Manaus vêm de dispositivos móveis.",
  },
  {
    h3: "Processo de trabalho e comunicação",
    content:
      "Entenda como o projeto será conduzido: quais são as etapas, quem é o ponto de contato, como ocorrem as aprovações e em quanto tempo as respostas chegam. Projetos sem processo claro costumam atrasar e gerar frustração.",
    tip: "Pergunte: quantos projetos simultâneos a equipe conduz? Isso afeta diretamente a atenção dedicada ao seu.",
  },
  {
    h3: "O que está incluso no preço",
    content:
      "Verifique o escopo detalhado: quantas páginas, quantas rodadas de revisão, se domínio e hospedagem estão inclusos, se há SEO técnico, se o site é responsivo e se você terá painel para editar depois.",
    tip: "Desconfie de preços muito baixos sem escopo detalhado. O custo real costuma aparecer depois, em cobranças extras não previstas.",
  },
  {
    h3: "Suporte após a entrega",
    content:
      "O que acontece se algo parar de funcionar depois da publicação? Existe período de garantia? Como funciona o suporte? Um site precisa de cuidado contínuo — atualizações, backups e manutenção preventiva.",
    tip: "Prefira fornecedores que oferecem pelo menos 30 dias de suporte gratuito após a entrega.",
  },
  {
    h3: "Hospedagem, domínio e propriedade",
    content:
      "Confirme: o domínio ficará registrado no seu CPF ou CNPJ? Você terá acesso ao código e aos arquivos do site? Pode migrar para outro servidor se quiser? A resposta ideal para as três é sim.",
    tip: "Evite contratos que prendem seu site ao fornecedor. Você deve ter controle total do ativo que pagou para construir.",
  },
];
