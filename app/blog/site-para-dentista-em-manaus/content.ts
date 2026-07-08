import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  CalendarCheck,
  Clock,
  FileText,
  MapPin,
  MessageCircle,
  Search,
  Shield,
  Smartphone,
  Smile,
  Star,
  UserRound,
  Zap,
} from "lucide-react";
import { site } from "@/content/site";
import { whatsappLink } from "@/utils/whatsapp";

// ─── Types ────────────────────────────────────────────────────────────────────

export type Faq = { q: string; a: string };

export type Benefit = {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
};

export type SectionBlock = {
  h2: string;
  paragraphs: string[];
};

export type SiteEssential = {
  Icon: LucideIcon;
  title: string;
  text: string;
};

export type ProcessStep = {
  num: string;
  h3: string;
  content: string;
};

export type InternalLink = {
  href: string;
  label: string;
  text: string;
};

// ─── Identifiers ──────────────────────────────────────────────────────────────

const slug = "site-para-dentista-em-manaus";
const articleUrl = `${site.url}/blog/${slug}`;

// ─── Thumbnail ────────────────────────────────────────────────────────────────

export const thumbnail = {
  src: "/blog/site-para-dentista-em-manaus.webp",
  alt: "Dentista em consultório em Manaus com notebook mostrando presença profissional no Google",
  width: 1680,
  height: 960,
};

// ─── Dates ───────────────────────────────────────────────────────────────────

export const articleDates = {
  publishedAt: "2026-05-13",
  publishedLabel: "13 de maio de 2026",
  updatedAt: "2026-07-07",
  updatedLabel: "7 de julho de 2026",
};

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const pageMetadata: Metadata = {
  title: "Site para Dentista em Manaus | Guia para Consultórios e Clínicas",
  description:
    "Como consultórios e clínicas odontológicas de Manaus competem com as grandes redes no Google: mapa, avaliações, páginas por procedimento e comunicação dentro das normas do CFO.",
  keywords: [
    "site para dentista em Manaus",
    "criação de site para dentista em Manaus",
    "site para clínica odontológica em Manaus",
    "dentista no Google Manaus",
    "marketing digital para dentista em Manaus",
    "SEO local para odontologia em Manaus",
    "site profissional para odontologista Manaus",
  ],
  alternates: {
    canonical: articleUrl,
  },
  openGraph: {
    title: "Site para Dentista em Manaus | Credibilidade e SEO local",
    description:
      "Guia prático para dentistas e clínicas odontológicas de Manaus que querem fortalecer presença no Google com um site profissional e bem estruturado.",
    url: articleUrl,
    type: "article",
    images: [
      {
        url: thumbnail.src,
        width: thumbnail.width,
        height: thumbnail.height,
        alt: thumbnail.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site para Dentista em Manaus | Mais Pacientes pelo Google",
    description:
      "Entenda como um site para dentista em Manaus ajuda a transmitir credibilidade, aparecer em buscas locais e gerar agendamentos qualificados.",
    images: [thumbnail.src],
  },
};

// ─── Schema ───────────────────────────────────────────────────────────────────

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "Site para Dentista em Manaus: como consultórios independentes competem com as grandes redes no Google",
  description:
    "Guia para dentistas e clínicas odontológicas de Manaus: comportamento de busca do paciente, tripé mapa + avaliações + site, páginas por procedimento e publicidade dentro da Resolução CFO-196/2019.",
  author: {
    "@type": "Person",
    name: "Jonathas Borges",
    url: site.url,
    sameAs: ["https://www.instagram.com/jonathasborges1"],
  },
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
  datePublished: articleDates.publishedAt,
  ...(articleDates.updatedAt ? { dateModified: articleDates.updatedAt } : {}),
  image: `${site.url}${thumbnail.src}`,
  url: articleUrl,
  mainEntityOfPage: articleUrl,
  inLanguage: "pt-BR",
  keywords:
    "site para dentista em Manaus, criação de site para dentista em Manaus, clínica odontológica Manaus, dentista no Google Manaus, marketing digital para dentista em Manaus",
  about: {
    "@type": "Thing",
    name: "Site profissional e SEO local para dentistas em Manaus",
  },
};

// ─── WhatsApp ─────────────────────────────────────────────────────────────────

export const wppLink = whatsappLink({
  service: "Site para dentista em Manaus",
  custom:
    "Sou dentista em Manaus e quero entender como um site profissional pode fortalecer minha presença no Google e gerar mais agendamentos qualificados.",
});

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const faqs: Faq[] = [
  {
    q: "Dentista pode publicar fotos de antes e depois no site?",
    a: "A Resolução CFO-196/2019 passou a permitir imagens de antes e depois, desde que com autorização expressa do paciente, sem promessa de resultado e sem manipulação que induza o público a erro. No site, o mais seguro é usar essas imagens com contexto clínico e termo de autorização arquivado — e nunca como argumento principal de venda.",
  },
  {
    q: "Preciso colocar os preços dos procedimentos no site?",
    a: "Não é obrigatório e, na maioria dos casos, não é recomendado. Valores de implante, aparelho ou clareamento dependem de avaliação clínica. O que funciona é explicar de quais fatores o valor depende e direcionar para uma avaliação — isso filtra curiosos e atrai pacientes com intenção real.",
  },
  {
    q: "Como faço meu consultório aparecer no mapa do Google?",
    a: "Criando e verificando o Perfil da Empresa no Google (antigo Google Meu Negócio) com categoria correta, endereço, horários e fotos reais do consultório. O site potencializa o perfil: o Google cruza as informações dos dois, e consultórios com site tendem a ocupar posições melhores no bloco do mapa.",
  },
  {
    q: "Tenho uma clínica com vários dentistas. O site muda alguma coisa?",
    a: "Muda a estrutura. Cada profissional pode ter sua apresentação com CRO e especialidade, e cada especialidade vira uma página própria — o que multiplica as portas de entrada pelo Google. Uma clínica com páginas de ortodontia, implante e odontopediatria pode aparecer em três tipos de busca diferentes.",
  },
  {
    q: "Em quanto tempo o site começa a trazer pacientes pelo Google?",
    a: "Buscas pelo nome do dentista ou da clínica melhoram em poucas semanas. Buscas competitivas como implante dentário em Manaus levam de 3 a 6 meses para ganhar tração, dependendo da concorrência e da consistência do conteúdo. O Perfil da Empresa no Google costuma gerar resultado antes do orgânico.",
  },
  {
    q: "Atendo por convênio odontológico. Devo listar isso no site?",
    a: "Sim. Convênios aceitos são um dos primeiros filtros que o paciente aplica. Listar os planos atendidos — ou deixar claro que o atendimento é particular — evita contatos desalinhados e melhora a qualidade dos agendamentos que chegam pelo site.",
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

// ─── Benefits ─────────────────────────────────────────────────────────────────

export const benefits: Benefit[] = [
  {
    Icon: Search,
    iconClass: "text-glow-cyan",
    title: "Visibilidade em buscas locais",
    text: "O site ajuda o Google a conectar sua especialidade a Manaus, bairros e os termos que pacientes realmente usam ao procurar atendimento odontológico.",
  },
  {
    Icon: Shield,
    iconClass: "text-accent-amber",
    title: "Credibilidade antes da primeira consulta",
    text: "Antes de agendar, o paciente verifica formação, especialidade e localização. O site organiza essa validação sem depender de plataformas de terceiros.",
  },
  {
    Icon: Smile,
    iconClass: "text-accent-green",
    title: "Comunicação dentro das normas do CFO",
    text: "Um site próprio permite apresentar a atuação com responsabilidade, sem comparativos ou promessas estéticas que conflitem com o Código de Ética Odontológica.",
  },
  {
    Icon: MessageCircle,
    iconClass: "text-accent-magenta",
    title: "Agendamento mais direto",
    text: "Quando o paciente lê sobre especialidades, procedimentos e como funciona o atendimento, o contato chega com intenção real e menos perguntas básicas.",
  },
];

// ─── Sections ─────────────────────────────────────────────────────────────────

export const articleSections: SectionBlock[] = [
  {
    h2: "O paciente de odontologia decide por três gatilhos: dor, preço e confiança",
    paragraphs: [
      "Poucas áreas da saúde têm um comportamento de busca tão dividido quanto a odontologia. Existe o paciente de urgência, que digita dentista 24 horas em Manaus com o celular na mão e o rosto inchado — ele escolhe em minutos, quase sempre pelo mapa do Google. Existe o paciente de orçamento, que pesquisa quanto custa um implante dentário durante semanas e compara três ou quatro clínicas antes de agendar uma avaliação. E existe o paciente de confiança, que quer saber quem é o profissional antes de entregar o próprio sorriso a ele.",
      "Cada um desses perfis exige uma resposta diferente do consultório na internet. O de urgência precisa achar endereço, horário e um botão de WhatsApp em cinco segundos. O de orçamento precisa entender de que fatores o valor depende — número de implantes, enxerto, tipo de prótese — antes de aceitar que só a avaliação clínica define o preço. O de confiança quer ver CRO, formação, tempo de atuação e fotos reais do consultório.",
      "Um site para dentista em Manaus que trata esses três pacientes do mesmo jeito não converte nenhum deles direito. A estrutura certa separa os caminhos: página de urgência com contato imediato, páginas de procedimento com conteúdo educativo e uma apresentação profissional que resolve a checagem de credibilidade.",
    ],
  },
  {
    h2: "Concorrer com as grandes redes odontológicas exige presença própria",
    paragraphs: [
      "Manaus concentra unidades de grandes redes e franquias odontológicas em avenidas de alto fluxo como a Djalma Batista e a Torquato Tapajós, além dos shoppings. Essas redes têm orçamento de mídia, fachadas visíveis e — o que muita gente esquece — sites e perfis do Google alimentados por equipes de marketing centralizadas. Quando um consultório particular não tem presença digital, o paciente que pesquisa no Google só enxerga as redes.",
      "A boa notícia é que a busca local nivela mais do que a mídia paga. O Google prioriza proximidade, relevância e proeminência — e um consultório de bairro com site bem estruturado, perfil do Google completo e avaliações consistentes pode aparecer acima de uma franquia na busca por dentista no Parque 10 ou ortodontista na Cidade Nova. A rede tem escala; o consultório independente tem especificidade local, e o algoritmo valoriza isso.",
      "O ponto de virada é parar de competir em generalidade. A franquia vende tudo para todo mundo. O consultório independente ganha quando o site comunica com precisão o que o diferencia: a especialidade dominante, o atendimento pelo mesmo profissional em todas as consultas, o bairro, os convênios aceitos. Essa especificidade é exatamente o que o Google usa para decidir quem aparece em cada busca.",
    ],
  },
  {
    h2: "Mapa, avaliações e site: o tripé que sustenta o consultório no Google",
    paragraphs: [
      "Para buscas odontológicas em Manaus, o Google quase sempre mostra primeiro o bloco do mapa com três resultados. Entrar nesse bloco depende do Perfil da Empresa no Google — mas permanecer nele e converter o clique depende dos outros dois pés do tripé: as avaliações e o site.",
      "As avaliações são o fator de desempate mais visível. Entre um consultório com 4,9 estrelas e oitenta avaliações e outro sem nenhuma, o paciente nem compara. A rotina que funciona é simples: pedir a avaliação logo após a consulta, com o link direto enviado pelo WhatsApp. Dez avaliações reais por mês mudam a posição no mapa em poucos meses.",
      "O site fecha o ciclo. É para ele que o Google aponta quando o paciente clica em “Visitar site”, e é dele que o algoritmo extrai contexto sobre especialidades e área de atendimento. Perfil sem site é cartão de visita sem consultório: o paciente encontra, mas não tem para onde ir. Site sem perfil é consultório sem placa: existe, mas ninguém passa na frente. Os dois juntos, com as mesmas informações de nome, endereço e telefone, é o que o Google entende como um negócio confiável.",
    ],
  },
  {
    h2: "Cada procedimento é uma porta de entrada diferente",
    paragraphs: [
      "Ninguém pesquisa apenas dentista em Manaus. As buscas reais são específicas: aparelho ortodôntico em Manaus, implante dentário preço, clareamento dental em Manaus, extração de siso, lente de contato dental. Cada uma dessas buscas é uma intenção diferente, feita por um paciente diferente, em um momento diferente da decisão.",
      "É por isso que o site de um consultório não deveria ser uma página única com uma lista de serviços. Cada procedimento relevante merece uma página própria, explicando o que é, para quem é indicado, como funciona a avaliação e quais fatores influenciam o investimento. Uma clínica com oito páginas de procedimento tem oito chances de aparecer no Google — uma clínica com uma página genérica tem uma.",
      "Esse formato também melhora a conversa no consultório. O paciente que leu a página sobre implante chega à avaliação sabendo que existe análise de massa óssea, que o tratamento tem etapas e que o valor depende do caso. A consulta começa mais adiantada e a taxa de fechamento sobe, porque a página fez o trabalho de educação que antes consumia o tempo do dentista.",
    ],
  },
  {
    h2: "O que o Código de Ética Odontológica permite — e o que derruba CRO no site",
    paragraphs: [
      "A comunicação odontológica é regulada pelo Código de Ética Odontológica e pela Resolução CFO-196/2019, que modernizou as regras de publicidade. Hoje o dentista pode divulgar especialidades registradas, equipamentos, títulos e até imagens de antes e depois — desde que com autorização expressa do paciente, sem manipulação e sem promessa de resultado. O que segue proibido: anunciar preço como isca sensacionalista, prometer resultados, usar expressões como “o melhor da cidade” e divulgar especialidade não registrada no CRO.",
      "No site, isso se traduz em escolhas concretas de texto. Em vez de “transforme seu sorriso em 7 dias”, descreve-se o procedimento, suas indicações e o processo de avaliação. Em vez de comparativos com outros profissionais, apresenta-se formação e casuística. O curioso é que a comunicação ética também é a que melhor converte o paciente de maior valor: quem busca implante ou reabilitação oral desconfia justamente das promessas milagrosas.",
      "Para clínicas, há um detalhe a mais: o nome fantasia deve estar acompanhado do nome e CRO do responsável técnico em toda comunicação — incluindo o rodapé do site. É um item pequeno, frequentemente esquecido por quem monta site sem conhecer o setor, e que pode gerar notificação do conselho regional.",
    ],
  },
  {
    h2: "Convênio, particular ou os dois: o site como filtro de agendamento",
    paragraphs: [
      "Uma parte significativa dos contatos que chegam a consultórios odontológicos começa com a mesma pergunta: aceita meu plano? Quando o site não responde isso, a recepção vira um call center de triagem — e o dentista paga em tempo de secretária o que economizou na comunicação.",
      "Listar os convênios aceitos, ou declarar com clareza que o atendimento é particular, muda a qualidade do agendamento. O paciente de convênio confirma a cobertura antes de ligar. O paciente particular chega sabendo que vai investir. Os contatos que sobram são os certos, e a agenda para de encher com avaliações que não se convertem em tratamento.",
      "Para consultórios que atendem os dois públicos, o site pode ir além: explicar o que os planos costumam cobrir (limpeza, restaurações, extrações) e o que geralmente fica fora (estética, ortodontia em muitos casos, implantes). Esse conteúdo responde exatamente as dúvidas que o paciente digita no Google e posiciona o consultório como referência honesta — antes mesmo da primeira consulta.",
    ],
  },
  {
    h2: "A busca de urgência acontece no celular — e não perdoa site lento",
    paragraphs: [
      "Dor de dente não espera. As buscas por dentista urgente em Manaus, dor de dente o que fazer e extração de siso urgência acontecem majoritariamente à noite e nos fins de semana, sempre pelo celular. Nesse cenário, cada segundo de carregamento é um paciente a menos: quem está com dor não espera um site pesado abrir — volta para o Google e toca no próximo resultado.",
      "Um site de consultório precisa carregar em menos de três segundos numa conexão móvel mediana, com o botão de WhatsApp e o telefone visíveis sem rolar a página. Endereço com link direto para o mapa e horário de atendimento completam o mínimo. Se o consultório atende urgências, isso deve estar dito com destaque — é um diferencial de busca que a maioria não explora.",
      "Esse mesmo requisito técnico beneficia todas as outras páginas: o Google usa velocidade e experiência mobile como critério de ranqueamento local. Um site rápido não é estética de desenvolvedor — é a diferença entre receber ou não o paciente que decidiria em trinta segundos.",
    ],
  },
];

// ─── Site Essentials ──────────────────────────────────────────────────────────

export const siteEssentials: SiteEssential[] = [
  {
    Icon: UserRound,
    title: "Apresentação do profissional",
    text: "Nome, formação, CRO, especialidades e local de atendimento organizados com clareza. O paciente precisa saber com quem vai se consultar antes de ligar.",
  },
  {
    Icon: FileText,
    title: "Página por especialidade",
    text: "Cada especialidade oferecida merece uma seção própria — ortodontia, implantes, estética, endodontia. Isso amplia a presença no Google e ajuda o paciente a encontrar o que precisa.",
  },
  {
    Icon: MapPin,
    title: "Contexto local de Manaus",
    text: "Endereço completo, bairro, referências de localização e área de atendimento. O Google precisa de contexto local para ranquear corretamente.",
  },
  {
    Icon: Smartphone,
    title: "Desempenho no celular",
    text: "A maioria das buscas por dentista acontece pelo smartphone, muitas vezes em situação de urgência. O site precisa carregar rápido e facilitar o contato imediato.",
  },
  {
    Icon: CalendarCheck,
    title: "Caminho claro para agendamento",
    text: "Botão de WhatsApp visível, telefone acessível e instruções simples sobre como marcar consulta. O paciente não deve precisar procurar como entrar em contato.",
  },
  {
    Icon: Star,
    title: "Perguntas frequentes por procedimento",
    text: "Dúvidas sobre custo, duração, dor e processo dos procedimentos mais comuns. Responder isso no site reduz a barreira para o primeiro contato.",
  },
];

// ─── Process Steps ────────────────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    h3: "Diagnóstico da especialidade e do público",
    content:
      "Entendemos quais procedimentos são foco do consultório, quem são os pacientes mais comuns, como chegam hoje e quais buscas fazem mais sentido para o perfil do profissional ou clínica.",
  },
  {
    num: "02",
    h3: "Arquitetura de conteúdo dentro do CFO",
    content:
      "Organizamos páginas, especialidades, perguntas frequentes e formas de contato com linguagem clara e dentro das diretrizes do Código de Ética Odontológica — sem promessas ou comparativos inadequados.",
  },
  {
    num: "03",
    h3: "Design profissional e desenvolvimento otimizado",
    content:
      "Criamos uma experiência visual limpa, responsiva e rápida. O foco está em clareza, facilidade de navegação no celular e performance que não compromete o tempo de carregamento.",
  },
  {
    num: "04",
    h3: "SEO local e publicação em Manaus",
    content:
      "Configuramos metadados, sitemap, canonical, dados estruturados e textos com contexto local para aumentar a chance de aparecer quando pacientes pesquisam por atendimento odontológico em Manaus.",
  },
];

// ─── Local Differentials ──────────────────────────────────────────────────────

export const localDifferentials: Benefit[] = [
  {
    Icon: BadgeCheck,
    iconClass: "text-glow-cyan",
    title: "Conteúdo técnico, não genérico",
    text: "Um site odontológico precisa explicar procedimentos com precisão, não com textos copiados que qualquer clínica no Brasil poderia usar.",
  },
  {
    Icon: Clock,
    iconClass: "text-accent-amber",
    title: "Atendimento no fuso de Manaus",
    text: "Ajustes, aprovações e revisões acontecem no mesmo ritmo. Sem diferença de horário ou dependência de equipes em outros estados.",
  },
  {
    Icon: Zap,
    iconClass: "text-accent-green",
    title: "Performance que não perde paciente",
    text: "Sites lentos perdem o visitante antes mesmo da leitura. O projeto é desenvolvido com foco em velocidade real, especialmente no celular.",
  },
  {
    Icon: Search,
    iconClass: "text-accent-magenta",
    title: "Estrutura preparada para crescer",
    text: "O site nasce com base técnica para SEO local e pode crescer com novas especialidades ou artigos sem precisar refazer tudo do zero.",
  },
];

// ─── Internal Links ───────────────────────────────────────────────────────────

export const internalLinks: InternalLink[] = [
  {
    href: "/blog/site-para-medico-em-manaus",
    label: "Site para Médico em Manaus",
    text: "Como médicos e especialistas em Manaus podem fortalecer presença no Google e atrair pacientes qualificados.",
  },
  {
    href: "/blog/site-para-psicologo-em-manaus",
    label: "Site para Psicólogo em Manaus",
    text: "Como psicólogos em Manaus podem construir uma presença digital ética e ser encontrados nas buscas locais.",
  },
  {
    href: "/criar-site-em-manaus",
    label: "Criar site em Manaus",
    text: "Conheça formatos, prazos e caminhos para publicar uma presença digital própria em Manaus.",
  },
];
