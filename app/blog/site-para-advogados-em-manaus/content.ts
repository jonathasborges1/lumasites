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

export const pageMetadata: Metadata = {
  title: "Site para Advogados em Manaus | Como captar mais consultas com credibilidade",
  description:
    "Entenda como deve ser um site para advogados em Manaus: estrutura ideal, regras de comunicacao, SEO local, investimento e o que avaliar antes de contratar.",
  keywords: [
    "site para advogados em Manaus",
    "site para escritorio de advocacia em Manaus",
    "criacao de site para advogado em Manaus",
    "site juridico em Manaus",
    "marketing juridico em Manaus",
    "landing page para advogado em Manaus",
    "desenvolvimento web para advogados em Manaus",
  ],
  alternates: {
    canonical: `/blog/${slug}`,
  },
  openGraph: {
    title: "Site para Advogados em Manaus | Estrutura, SEO e captacao etica",
    description:
      "Guia pratico para escritorios e advogados de Manaus que precisam de um site profissional, rapido e alinhado ao posicionamento do escritorio.",
    url: articleUrl,
    type: "article",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Site profissional para escritorio de advocacia em Manaus",
      },
    ],
  },
};

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Site para Advogados em Manaus: o que um escritorio precisa para gerar confianca online",
  description:
    "Guia para advogados e escritorios de Manaus sobre estrutura de site, SEO local, regras de comunicacao e como contratar um projeto profissional.",
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
  url: articleUrl,
  mainEntityOfPage: articleUrl,
  inLanguage: "pt-BR",
  keywords:
    "site para advogados em Manaus, site para escritorio de advocacia em Manaus, marketing juridico em Manaus, SEO local para advogados",
  about: {
    "@type": "Thing",
    name: "Site profissional para advogados em Manaus",
  },
};

export const wppLink = whatsappLink({
  service: "Site para advogado em Manaus",
  custom:
    "Tenho um escritorio ou atuacao juridica em Manaus e quero entender o melhor formato de site para gerar mais contatos qualificados.",
});

export const faqs: Faq[] = [
  {
    q: "Quanto custa um site para advogados em Manaus?",
    a: "O valor depende da estrutura. Uma landing page para uma area especifica de atuacao costuma ser a opcao mais enxuta. Um site institucional com paginas para o escritorio, socios, areas atendidas, contato e blog exige mais planejamento. Em Manaus, o ponto principal nao e apenas o preco, mas sim se o site transmite sobriedade, e rapido no celular e facilita o primeiro contato sem parecer amador.",
  },
  {
    q: "Um escritorio pequeno realmente precisa de site?",
    a: "Sim. Mesmo escritorios que vivem de indicacao ganham quando a pessoa procura o nome do advogado no Google e encontra um site claro, profissional e com informacoes objetivas. Esse momento de validacao pesa muito antes de uma ligacao ou mensagem.",
  },
  {
    q: "Qual a diferenca entre um site institucional e uma landing page juridica?",
    a: "O site institucional apresenta o escritorio como um todo, com posicionamento, equipe, areas de atuacao e canais de atendimento. A landing page e focada em uma unica demanda, como direito previdenciario, trabalhista ou familia. Para campanhas especificas, a landing page costuma converter melhor. Para construir marca e autoridade, o site institucional e mais completo.",
  },
  {
    q: "O site ajuda a aparecer no Google em buscas locais de Manaus?",
    a: "Ajuda muito quando o projeto nasce com SEO local: paginas otimizadas por area de atuacao, velocidade alta, titulos corretos, endereco de atendimento, contexto geografico de Manaus e integracao com o perfil da empresa no Google. Sem isso, o escritorio depende mais de indicacao e trafego pago.",
  },
  {
    q: "O marketing juridico permite ter site e captar contatos?",
    a: "Sim, desde que o site seja pensado com comunicacao informativa, institucional e etica. O importante e evitar promessas de resultado, linguagem apelativa ou elementos que comprometam a sobriedade da advocacia. O site deve orientar, explicar servicos e facilitar o contato, nao vender como uma pagina agressiva de varejo.",
  },
  {
    q: "Quais paginas nao podem faltar em um site para advogado?",
    a: "As mais importantes sao: pagina inicial clara, sobre o escritorio ou profissional, areas de atuacao, pagina de contato com WhatsApp e formulario, informacoes de localizacao e, quando fizer sentido, conteudo educativo em blog. Tambem vale incluir perguntas frequentes para reduzir duvidas antes da consulta.",
  },
  {
    q: "Vale a pena manter blog juridico no site?",
    a: "Vale quando existe consistencia. Um blog bem feito ajuda a responder duvidas que o cliente pesquisa antes de procurar um advogado, amplia a presenca organica no Google e fortalece autoridade. O segredo e publicar conteudo util, objetivo e alinhado ao perfil do escritorio.",
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
    text: "Em servicos juridicos, a decisao costuma vir depois de uma checagem rapida no Google. Um site bem apresentado reduz desconfianca e reforca autoridade.",
  },
  {
    Icon: Search,
    iconClass: "text-accent-amber",
    title: "SEO local para Manaus",
    text: "Pessoas pesquisam por temas como advogado trabalhista em Manaus, inventario em Manaus ou pensao alimenticia em Manaus. O site ajuda o escritorio a disputar essas buscas com mais consistencia.",
  },
  {
    Icon: Shield,
    iconClass: "text-accent-green",
    title: "Comunicacao mais segura e sobria",
    text: "Um site proprio permite apresentar servicos, experiencia e areas de atuacao com linguagem institucional, sem depender apenas de redes sociais e formatos improvisados.",
  },
  {
    Icon: MessageCircle,
    iconClass: "text-accent-magenta",
    title: "Contato mais qualificado",
    text: "Quando o visitante entende o que o escritorio faz antes de chamar no WhatsApp, a conversa comeca melhor e com menos perda de tempo para ambas as partes.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    h3: "Diagnostico do escritorio e das areas de atuacao",
    content:
      "O primeiro passo e entender como o escritorio atua hoje: quais areas trazem mais demanda, qual o perfil dos clientes em Manaus, se ha atendimento presencial, online ou hibrido e como os contatos chegam atualmente.",
  },
  {
    num: "02",
    h3: "Arquitetura do conteudo e tom da comunicacao",
    content:
      "Definimos as paginas essenciais, o posicionamento do escritorio e a forma correta de apresentar servicos, sempre priorizando clareza, sobriedade visual e facilidade de leitura no celular.",
  },
  {
    num: "03",
    h3: "Design, desenvolvimento e adaptacao mobile",
    content:
      "O projeto e desenvolvido com foco em performance, boa experiencia em smartphone e navegacao simples. Para advocacia, isso faz diferenca porque boa parte dos primeiros acessos vem do celular.",
  },
  {
    num: "04",
    h3: "SEO local, testes e publicacao",
    content:
      "Antes de publicar, o site recebe estrutura de SEO tecnico, revisao de titulos, descricoes, links internos e paginas estrategicas para buscas locais relacionadas a Manaus.",
  },
  {
    num: "05",
    h3: "Acompanhamento e expansao de conteudo",
    content:
      "Depois de publicado, o escritorio pode ampliar o site com novas paginas por especialidade, perguntas frequentes e artigos que respondam duvidas reais do publico.",
  },
];

export const siteTypes: SiteType[] = [
  {
    Icon: FileText,
    iconClass: "text-glow-cyan",
    iconSize: 22,
    h3: "Landing page juridica",
    price: "A partir de R$ 997",
    badge: "Entrada rapida",
    badgeClass: "text-glow-aqua border-glow-cyan/40",
    content:
      "Pagina unica para uma area especifica de atuacao, com foco em explicar o servico, gerar confianca e captar contatos. Boa opcao para advogado autonomo ou campanha pontual.",
    good: [
      "Direito trabalhista, familia, previdenciario ou consumidor",
      "Campanhas com trafego pago ou divulgacao direta",
      "Quem precisa publicar rapido com foco em conversao",
    ],
  },
  {
    Icon: Landmark,
    iconClass: "text-accent-amber",
    iconSize: 22,
    h3: "Site institucional para escritorio",
    price: "A partir de R$ 1.800",
    badge: "Mais recomendado",
    badgeClass: "text-accent-amber border-accent-amber/40",
    content:
      "Estrutura completa com home, sobre, areas de atuacao, equipe, contato e paginas internas. Ideal para escritorios que querem parecer mais consolidados e construir autoridade no longo prazo.",
    good: [
      "Escritorios com mais de uma especialidade",
      "Socios que querem apresentar equipe e metodologia",
      "Quem deseja fortalecer a marca do escritorio",
    ],
  },
  {
    Icon: Search,
    iconClass: "text-accent-green",
    iconSize: 22,
    h3: "Site com blog juridico",
    price: "A partir de R$ 2.400",
    badge: "Foco em SEO",
    badgeClass: "text-accent-green border-accent-green/40",
    content:
      "Projeto pensado para crescer no Google com artigos, paginas por tema e estrategia de conteudo. Indicado para escritorios que querem aumentar presenca organica ao longo do tempo.",
    good: [
      "Escritorios que produzem conteudo regularmente",
      "Quem quer ampliar alcance sem depender so de anuncios",
      "Projetos de medio e longo prazo com SEO local",
    ],
  },
  {
    Icon: Users,
    iconClass: "text-accent-magenta",
    iconSize: 22,
    h3: "Site para advogado autonomo",
    price: "A partir de R$ 1.300",
    badge: "Enxuto e profissional",
    badgeClass: "text-accent-magenta border-accent-magenta/40",
    content:
      "Formato objetivo para destacar o profissional, suas areas de atuacao, experiencia e canais de atendimento. Funciona bem para quem atua sozinho e precisa passar mais confianca online.",
    good: [
      "Advogados iniciando estrutura propria",
      "Profissionais com atendimento consultivo",
      "Quem recebe indicacoes mas ainda nao tem presenca forte no Google",
    ],
  },
];

export const localDifferentials: Differential[] = [
  {
    Icon: MapPin,
    iconClass: "text-glow-cyan",
    title: "Contexto real de Manaus",
    text: "Nao basta citar a cidade. O site precisa conversar com bairros, perfil de busca, tipo de atendimento e demandas locais que realmente aparecem no escritorio.",
  },
  {
    Icon: Clock,
    iconClass: "text-accent-amber",
    title: "Atendimento agil pelo mesmo fuso",
    text: "Para escritorios, demora na resposta atrapalha. Ter suporte no horario de Manaus facilita ajustes, aprovacoes e correcoes com menos friccao.",
  },
  {
    Icon: BadgeCheck,
    iconClass: "text-accent-green",
    title: "Visual compativel com a advocacia",
    text: "Muita pagina juridica erra por parecer generica ou comercial demais. O diferencial esta em equilibrar sobriedade, clareza e boa conversao sem exageros visuais.",
  },
  {
    Icon: Wallet,
    iconClass: "text-accent-magenta",
    title: "Escopo pensado para retorno",
    text: "Em vez de inflar o projeto com paginas que nao ajudam na captacao, a ideia e priorizar o que realmente gera confianca e facilita o contato certo.",
  },
];

export const contractingGuide: ContractingItem[] = [
  {
    h3: "Pergunte se o projeto entende o contexto da advocacia",
    content:
      "Nem todo site bonito funciona para um escritorio. O fornecedor precisa saber trabalhar com linguagem institucional, paginas mais explicativas e uma estrutura que ajude o potencial cliente a entender o servico sem sensacionalismo.",
    tip: "Peca exemplos de sites para servicos de alta confianca, nao apenas lojas ou paginas promocionais.",
  },
  {
    h3: "Confirme o plano de SEO local",
    content:
      "Se o objetivo e ser encontrado em Manaus, o projeto precisa prever titulos, paginas e estrutura pensados para busca local. Sem isso, o site vira apenas um cartao de visita online.",
    tip: "Pergunte quais paginas serao criadas para areas de atuacao e como o escritorio sera associado a Manaus nas buscas.",
  },
  {
    h3: "Entenda o que esta incluso no texto e na arquitetura",
    content:
      "Muitos projetos entregam apenas o layout. Para advocacia, a organizacao do conteudo faz enorme diferenca. Vale confirmar se o fornecedor ajuda na estrutura, revisao e adaptacao dos textos.",
    tip: "Se o escritorio nao tiver material pronto, alinhe isso no inicio para evitar atrasos.",
  },
  {
    h3: "Veja como sera a captacao de contato",
    content:
      "Formulario, WhatsApp, botao fixo, pagina de contato e chamada principal precisam trabalhar juntos. Em site juridico, o visitante normalmente quer uma forma simples e discreta de falar com o escritorio.",
    tip: "Teste o caminho completo como cliente: entrou na pagina, entendeu o servico e conseguiu chamar com facilidade?",
  },
  {
    h3: "Garanta acesso e autonomia depois da entrega",
    content:
      "Dominio, hospedagem, analytics e arquivos do site devem ficar sob controle do escritorio. Isso evita dependencia e facilita manutencao futura.",
    tip: "O ideal e que o escritorio possa continuar com o projeto mesmo se trocar de fornecedor no futuro.",
  },
];
