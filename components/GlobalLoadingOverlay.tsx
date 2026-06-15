"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { LoadingScreen } from "@/components/LoadingScreen";

const INITIAL_MIN_MS = 200;
const ROUTE_SHOW_DELAY_MS = 160;
const NAV_MIN_MS = 50;
const ROUTE_FAILSAFE_MS = 2500;
const proposalDetailPath = /^\/proposta-comercial\/[^/]+\/?$/;

function isProposalDetailPath(pathname: string) {
  return proposalDetailPath.test(pathname);
}

function NavProgressBar({ completing }: { completing: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[200] h-[2px] pointer-events-none"
    >
      <div
        className={completing ? "h-full origin-left" : "h-full origin-left animate-nav-progress"}
        style={{
          background: "linear-gradient(90deg, #4FC8FF 0%, #7FE5FF 50%, #FFD54F 100%)",
          boxShadow: "0 0 8px rgba(79,200,255,.7)",
          willChange: "transform, opacity",
          ...(completing
            ? {
                transform: "scaleX(1)",
                opacity: 0,
                transition: "transform 0.15s ease, opacity 0.2s ease 0.05s",
              }
            : {}),
        }}
      />
    </div>
  );
}

export function GlobalLoadingOverlay() {
  const [visible, setVisible] = useState(true);
  const [mode, setMode] = useState<"boot" | "route">("boot");
  const [completing, setCompleting] = useState(false);
  const pathname = usePathname();
  const startedAtRef = useRef<number>(Date.now());
  const bootHandledRef = useRef(false);
  const hideTimerRef = useRef<number | null>(null);
  const routeShowTimerRef = useRef<number | null>(null);
  const settledRef = useRef(false);
  const waitForSettledRef = useRef(false);
  const modeRef = useRef<"boot" | "route">("boot");

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  const hideWithMinimum = (minimumMs: number) => {
    const elapsed = Date.now() - startedAtRef.current;
    const remaining = Math.max(0, minimumMs - elapsed);

    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }

    hideTimerRef.current = window.setTimeout(() => {
      hideTimerRef.current = null;
      if (modeRef.current === "route") {
        setCompleting(true);
        window.setTimeout(() => {
          setVisible(false);
          setCompleting(false);
        }, 220);
      } else {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            setVisible(false);
          });
        });
      }
    }, remaining);
  };

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (bootHandledRef.current) return;
      bootHandledRef.current = true;
      hideWithMinimum(INITIAL_MIN_MS);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }

      const nextUrl = new URL(anchor.href, window.location.href);
      const currentUrl = new URL(window.location.href);

      if (nextUrl.origin !== currentUrl.origin) return;

      const isRouteChange =
        nextUrl.pathname !== currentUrl.pathname ||
        nextUrl.search !== currentUrl.search;

      if (!isRouteChange) return;

      startedAtRef.current = Date.now();
      settledRef.current = false;
      waitForSettledRef.current = isProposalDetailPath(nextUrl.pathname);

      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }

      if (routeShowTimerRef.current) {
        window.clearTimeout(routeShowTimerRef.current);
      }

      routeShowTimerRef.current = window.setTimeout(() => {
        routeShowTimerRef.current = null;
        setCompleting(false);
        setMode("route");
        setVisible(true);
      }, ROUTE_SHOW_DELAY_MS);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  useEffect(() => {
    const handleSettled = () => {
      settledRef.current = true;
      waitForSettledRef.current = false;
      hideWithMinimum(NAV_MIN_MS);
    };

    window.addEventListener("navigation-settled", handleSettled);
    return () => window.removeEventListener("navigation-settled", handleSettled);
  }, []);

  useEffect(() => {
    if (!bootHandledRef.current) return;

    if (routeShowTimerRef.current) {
      window.clearTimeout(routeShowTimerRef.current);
      routeShowTimerRef.current = null;
    }

    if (mode === "route" && waitForSettledRef.current && !settledRef.current) {
      return;
    }

    hideWithMinimum(mode === "boot" ? INITIAL_MIN_MS : NAV_MIN_MS);
  }, [pathname]);

  useEffect(() => {
    if (!visible || mode !== "route") return;
    if (waitForSettledRef.current && !settledRef.current) return;

    const failsafe = window.setTimeout(() => {
      setVisible(false);
    }, ROUTE_FAILSAFE_MS);

    return () => window.clearTimeout(failsafe);
  }, [visible, mode, pathname]);

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
      if (routeShowTimerRef.current) {
        window.clearTimeout(routeShowTimerRef.current);
      }
    };
  }, []);

  if (!visible) return null;

  if (mode === "route") {
    return <NavProgressBar completing={completing} />;
  }

  return (
    <LoadingScreen
      fullScreen
      label="Preparando a experiência"
      hint="Carregando interface, recursos visuais e interações."
    />
  );
}
