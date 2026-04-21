export type ProcessStep = {
  step: string;
  icon: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    icon: "MessageCircle",
    title: "Conversa no WhatsApp",
    description:
      "Você nos manda um oi. Em minutos, entendemos seu negócio e tiramos suas primeiras dúvidas. Sem formulário chato.",
  },
  {
    step: "02",
    icon: "ClipboardList",
    title: "Briefing simples",
    description:
      "Juntamos textos, fotos e logo (se tiver). Se não tiver, a gente ajuda. 15 minutos resolvem.",
  },
  {
    step: "03",
    icon: "Code2",
    title: "Desenvolvimento",
    description:
      "Seu site é criado em 3 a 7 dias. Você acompanha e pede ajustes pelo WhatsApp, quando precisar.",
  },
  {
    step: "04",
    icon: "CheckCircle2",
    title: "Publicação & Entrega",
    description:
      "Colocamos seu site no ar com seu domínio. Você recebe acesso, tutorial e suporte inicial. Pronto para vender.",
  },
];
