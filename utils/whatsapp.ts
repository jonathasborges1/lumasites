import { site } from "@/content/site";

export type WhatsAppContext = {
  service?: string;
  extras?: string[];
  custom?: string;
};

function buildMessage(ctx?: WhatsAppContext): string {
  if (!ctx) return site.whatsapp.defaultMessage;

  const lines: string[] = ["Olá! Vim pelo site da Luma Sites."];

  if (ctx.service) {
    lines.push(`\n• Serviço de interesse: *${ctx.service}*`);
  }

  if (ctx.extras && ctx.extras.length > 0) {
    lines.push("\n• Também tenho interesse em:");
    ctx.extras.forEach((item) => lines.push(`   - ${item}`));
  }

  if (ctx.custom) {
    lines.push(`\n${ctx.custom}`);
  }

  lines.push("\nPoderia me passar mais informações e um orçamento? 🙂");

  return lines.join("\n");
}

export function whatsappLink(ctx?: WhatsAppContext): string {
  const message = buildMessage(ctx);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsapp.number}?text=${encoded}`;
}

export function openWhatsApp(ctx?: WhatsAppContext) {
  if (typeof window === "undefined") return;
  window.open(whatsappLink(ctx), "_blank", "noopener,noreferrer");
}
