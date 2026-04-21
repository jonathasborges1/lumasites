export type Service = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  deliveryDays: string;
  priceFrom: string;
  features: string[];
  idealFor: string;
  highlight?: boolean;
};

export const services: Service[] = [
  {
    id: "landing-page",
    icon: "Rocket",
    title: "Landing Page",
    subtitle: "Uma página focada em vender",
    description:
      "Página única, direta e otimizada para converter visitantes em contato no WhatsApp. Ideal para divulgar um serviço específico ou promoção.",
    deliveryDays: "3 a 5 dias",
    priceFrom: "R$ 497",
    features: [
      "1 página otimizada para conversão",
      "Botão de WhatsApp fixo",
      "Formulário de contato",
      "SEO básico configurado",
      "Responsivo (celular, tablet, PC)",
    ],
    idealFor: "Profissional autônomo, lançamentos, campanhas",
    highlight: true,
  },
  {
    id: "site-institucional",
    icon: "Building2",
    title: "Site Institucional",
    subtitle: "Sua empresa com cara profissional",
    description:
      "Site completo com páginas de Sobre, Serviços, Contato e galeria. Passa credibilidade e apresenta tudo que você oferece.",
    deliveryDays: "5 a 7 dias",
    priceFrom: "R$ 897",
    features: [
      "Até 5 páginas",
      "Galeria de fotos / portfólio",
      "Integração WhatsApp e redes sociais",
      "Google Maps da sua localização",
      "SEO local (Manaus)",
    ],
    idealFor: "Clínicas, escritórios, lojas, prestadores",
  },
  {
    id: "cardapio-digital",
    icon: "UtensilsCrossed",
    title: "Cardápio Digital",
    subtitle: "Para restaurantes e delivery",
    description:
      "Cardápio online via QR Code com pedido direto no WhatsApp. Seu cliente vê fotos, preços e pede em 2 cliques.",
    deliveryDays: "3 a 5 dias",
    priceFrom: "R$ 697",
    features: [
      "Cardápio com categorias e fotos",
      "QR Code pronto para imprimir",
      "Pedido direto no WhatsApp",
      "Atualização fácil de itens",
      "Funciona sem app",
    ],
    idealFor: "Restaurantes, lanchonetes, food trucks, delivery",
  },
  {
    id: "portfolio",
    icon: "Camera",
    title: "Portfólio Profissional",
    subtitle: "Mostre seu trabalho com estilo",
    description:
      "Site visual focado em seus trabalhos. Perfeito para quem vive de imagem: fotógrafos, designers, arquitetos e artistas.",
    deliveryDays: "4 a 6 dias",
    priceFrom: "R$ 697",
    features: [
      "Galeria de projetos com zoom",
      "Página Sobre / Biografia",
      "Contato direto via WhatsApp",
      "Otimização de imagens",
      "Links para Instagram / Behance",
    ],
    idealFor: "Fotógrafos, designers, arquitetos, artistas",
  },
];
