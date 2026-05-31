import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposta de Redesign | Markha Consultoria em Seguros",
};

export default function MarkhaProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        body:has(#markha-proposal) {
          background: #F8F9FC !important;
          background-image: none !important;
          color: #1A1A2E !important;
        }
        /* Oculta overlay de carregamento do LumaSites nesta rota */
        body:has(#markha-proposal) .bg-midnight.fixed.inset-0 {
          display: none !important;
        }
        /* Oculta barra de progresso de scroll do LumaSites */
        body:has(#markha-proposal) .inset-x-0.h-\\[2px\\] {
          display: none !important;
        }
        /* Oculta botão flutuante WhatsApp do LumaSites */
        body:has(#markha-proposal) .fixed.bottom-5.right-5 {
          display: none !important;
        }
        #markha-proposal {
          scroll-padding-top: 110px;
        }
        #markha-proposal *,
        #markha-proposal *::before,
        #markha-proposal *::after {
          box-sizing: border-box;
        }
      `}</style>
      <div
        id="markha-proposal"
        style={{
          backgroundColor: "#F8F9FC",
          color: "#1A1A2E",
          fontFamily: "var(--font-body), Inter, system-ui, sans-serif",
          minHeight: "100vh",
          isolation: "isolate",
        }}
      >
        {children}
      </div>
    </>
  );
}
