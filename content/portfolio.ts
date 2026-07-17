export type PortfolioItem = {
  id: string;
  image: string;
  client: string;
  category: string;
  tag: string;
  url?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "andrelopes-01",
    image: "/images/andrelopes/andre-lopes-retrato.jpg",
    client: "André Lopes Hair Stylist",
    category: "Salão de Beleza",
    tag: "Beleza",
    url: "https://andredlopes.com.br",
  },
  {
    id: "alciellen-01",
    image: "/images/alciellen/concreto-usinado-jr-concretos-manaus.jpg",
    client: "J&R Concretos",
    category: "Concreto Usinado",
    tag: "Construção Civil",
    url: "https://pkassessoria.com.br",
  },
  {
    id: "eduardobremer-01",
    image: "/images/eduardobremer/eduardo-bremer-advogado-01.jpg",
    client: "Dr. Eduardo Bremer",
    category: "Advocacia",
    tag: "Direito",
    url: "https://eduardobremer.com.br",
  },
  {
    id: "geralseg-01",
    image: "/images/geralseg/hero-rastreamento-frotas-hq.jpg",
    client: "GeraSeg",
    category: "Rastreamento Veicular",
    tag: "Segurança",
    url: "https://geralseg.com.br",
  },
  {
    id: "rodriguesecastro-01",
    image: "/images/rodriguesecastroadvocacia/hero-v2.png",
    client: "Rodrigues e Castro Advocacia",
    category: "Advocacia",
    tag: "Direito",
    url: "https://rodriguesecastroadvocacia.com.br",
  },
];
