"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { LoadingScreen } from "@/components/LoadingScreen";

const INITIAL_MIN_MS = 200;
const ROUTE_SHOW_DELAY_MS = 140;
const NAV_MIN_MS = 180;
const ROUTE_FAILSAFE_MS = 2500;
const proposalDetailPath = /^\/proposta-comercial\/[^/]+\/?$/;

function isProposalDetailPath(pathname: string) {
  return proposalDetailPath.test(pathname);
}

export function GlobalLoadingOverlay() {
  const [visible, setVisible] = useState(true);
  const [mode, setMode] = useState<"boot" | "route">("boot");
  const pathname = usePathname();
  const startedAtRef = useRef<number>(Date.now());
  const bootHandledRef = useRef(false);
  const hideTimerRef = useRef<number | null>(null);
  const routeShowTimerRef = useRef<number | null>(null);
  const settledRef = useRef(false);
  const waitForSettledRef = useRef(false);

  const hideWithMinimum = (minimumMs: number) => {
    const elapsed = Date.now() - startedAtRef.current;
    const remaining = Math.max(0, minimumMs - elapsed);

    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }

    hideTimerRef.current = window.setTimeout(() => {
      hideTimerRef.current = null;
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setVisible(false);
        });
      });
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
        setMode("route");
        setVisible(true);
      }, ROUTE_SHOW_DELAY_MS);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  // Listen for PageTransition signal that the new page content has been painted.
  // This fires after React commits the new page to the DOM, which is after
  // usePathname() updates — avoiding the flash of the old page content.
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

    // Proposal pages can be large client bundles. During navigation, Next may
    // update the pathname before the new proposal has painted, so keep the
    // overlay up until PageTransition confirms the destination committed.
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

  return (
    <LoadingScreen
      fullScreen
      label={mode === "boot" ? "Preparando a experiência" : "Trocando de página"}
      hint={
        mode === "boot"
          ? "Carregando interface, recursos visuais e interações."
          : "Atualizando conteúdo e finalizando a navegação."
      }
    />
  );
}
