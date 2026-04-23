"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { LoadingScreen } from "@/components/LoadingScreen";

const INITIAL_MIN_MS = 900;
const NAV_MIN_MS = 450;

export function GlobalLoadingOverlay() {
  const [visible, setVisible] = useState(true);
  const [mode, setMode] = useState<"boot" | "route">("boot");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const startedAtRef = useRef<number>(Date.now());
  const bootHandledRef = useRef(false);
  const hideTimerRef = useRef<number | null>(null);
  const routeKey = `${pathname}?${searchParams.toString()}`;

  const hideWithMinimum = (minimumMs: number) => {
    const elapsed = Date.now() - startedAtRef.current;
    const remaining = Math.max(0, minimumMs - elapsed);

    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }

    hideTimerRef.current = window.setTimeout(() => {
      setVisible(false);
      hideTimerRef.current = null;
    }, remaining);
  };

  useEffect(() => {
    const hide = () => {
      if (bootHandledRef.current) return;
      bootHandledRef.current = true;
      hideWithMinimum(INITIAL_MIN_MS);
    };

    if (document.readyState === "complete") {
      hide();
      return;
    }

    window.addEventListener("load", hide, { once: true });
    return () => window.removeEventListener("load", hide);
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
      setMode("route");
      setVisible(true);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  useEffect(() => {
    if (!bootHandledRef.current) return;

    hideWithMinimum(mode === "boot" ? INITIAL_MIN_MS : NAV_MIN_MS);
  }, [routeKey, mode]);

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
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
