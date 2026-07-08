"use client";

import { track } from "@vercel/analytics";

export type WhatsAppClickProperties = {
  page: string;
  service?: string;
};

export function trackWhatsAppClick({
  page,
  service = "geral",
}: WhatsAppClickProperties) {
  track("whatsapp_click", {
    page,
    service,
  });
}
