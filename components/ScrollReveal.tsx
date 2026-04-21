"use client";

import React, { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade" | "scale";

type Props = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  threshold?: number;
  className?: string;
  as?: React.ElementType;
};

const directionTransforms: Record<Direction, string> = {
  up: "translate3d(0, 24px, 0)",
  down: "translate3d(0, -24px, 0)",
  left: "translate3d(24px, 0, 0)",
  right: "translate3d(-24px, 0, 0)",
  fade: "none",
  scale: "scale(.95)",
};

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  distance,
  once = true,
  threshold = 0.15,
  className = "",
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const transform = distance
    ? direction === "up"
      ? `translate3d(0, ${distance}px, 0)`
      : direction === "down"
      ? `translate3d(0, -${distance}px, 0)`
      : direction === "left"
      ? `translate3d(${distance}px, 0, 0)`
      : direction === "right"
      ? `translate3d(-${distance}px, 0, 0)`
      : directionTransforms[direction]
    : directionTransforms[direction];

  return React.createElement(
    as,
    {
      ref: (node: HTMLElement | null) => {
        ref.current = node;
      },
      className,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transform,
        transition: `opacity ${duration}ms cubic-bezier(.22,.61,.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(.22,.61,.36,1) ${delay}ms`,
        willChange: visible ? "auto" : "opacity, transform",
      },
    },
    children
  );
}
