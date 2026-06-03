"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const proposalPath = /^\/proposta-comercial\/[^/]+$/;

export function ProposalBackLink() {
  const pathname = usePathname();
  const normalizedPathname = pathname.replace(/\/$/, "");

  if (!proposalPath.test(normalizedPathname)) {
    return null;
  }

  return (
    <>
      <Link
        className="proposal-back-link"
        href="/proposta-comercial/"
        aria-label="Voltar para a listagem de propostas comerciais"
      >
        <ArrowLeft size={18} aria-hidden="true" />
        <span>Voltar</span>
      </Link>
      <style jsx>{`
        :global(.proposal-back-link) {
          position: fixed;
          z-index: 2147483640;
          top: max(8px, env(safe-area-inset-top));
          left: max(8px, env(safe-area-inset-left));
          min-width: 44px;
          min-height: 44px;
          padding: 0 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 999px;
          background: rgba(10, 14, 26, 0.86);
          color: #fff;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(12px);
          font-family: Arial, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          line-height: 1;
          text-decoration: none;
          text-transform: uppercase;
          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }

        :global(.proposal-back-link:hover) {
          background: rgba(10, 14, 26, 0.98);
          transform: translateY(-1px);
        }

        :global(.proposal-back-link:focus-visible) {
          outline: 3px solid #fff;
          outline-offset: 3px;
        }

        @media (max-width: 640px) {
          :global(.proposal-back-link) {
            width: 44px;
            padding: 0;
          }

          :global(.proposal-back-link span) {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
        }
      `}</style>
    </>
  );
}
