"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";

export function GlobalLoadingOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hide = () => setVisible(false);

    if (document.readyState === "complete") {
      hide();
      return;
    }

    window.addEventListener("load", hide, { once: true });
    return () => window.removeEventListener("load", hide);
  }, []);

  if (!visible) return null;

  return <LoadingScreen fullScreen />;
}
