export type Testimonial = {
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Maria Ribeiro",
    role: "Salão Maria Bela",
    location: "Cidade Nova, Manaus",
    rating: 5,
    text: "Não entendia nada de site. Eles fizeram tudo, me explicaram simples e em 5 dias eu tava recebendo cliente novo pelo Google. Paguei uma vez e pronto.",
    initials: "MR",
  },
  {
    name: "João Carvalho",
    role: "Advogado Trabalhista",
    location: "Adrianópolis, Manaus",
    rating: 5,
    text: "Eu queria parar de depender só do Instagram. Hoje chegam clientes qualificados pelo site direto no WhatsApp. Foi o melhor investimento que fiz esse ano.",
    initials: "JC",
  },
  {
    name: "Ana Paula Souza",
    role: "Clínica Odontológica",
    location: "Flores, Manaus",
    rating: 5,
    text: "Entrega rápida, sem enrolação e com preço honesto. O site ficou lindo e profissional. Indico de olhos fechados para quem tem pequeno negócio em Manaus.",
    initials: "AS",
  },
];
