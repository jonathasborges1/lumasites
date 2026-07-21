export const KM_COLORS = {
  wine: "#6B1A2A",
  wineDark: "#4A1020",
  rose: "#F9F0EB",
  champagne: "#F4E8DE",
  gold: "#BFA26A",
  greenCta: "#25D366",
  greenDark: "#128C48",
  text: "#2C1810",
  muted: "#7A5C54",
  white: "#FDFAF8",
  border: "#E0C8BC",
};

export const KM_WHATSAPP_LINK = (msg = "Olá, Dra. Karen! Vim pelo site.") =>
  `https://wa.me/5566992486203?text=${encodeURIComponent(msg)}`;

export const KM_FONT_HEADING = "var(--km-font-heading,'Playfair Display',Georgia,serif)";
export const KM_FONT_BODY = "var(--km-font-body,'Inter',system-ui,sans-serif)";
