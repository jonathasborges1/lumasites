import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0A0E1A",
        "deep-blue": "#0D1628",
        cream: "#F5EFE4",
        surface: "#0F1A2E",
        glow: {
          cyan: "#4FC8FF",
          blue: "#2E9BD6",
          aqua: "#7FE5FF",
        },
        accent: {
          amber: "#FFB74D",
          gold: "#FFD54F",
          magenta: "#C26BFF",
          green: "#7DE68B",
        },
        danger: "#E53935",
        ink: {
          primary: "#EAF2FF",
          secondary: "#B8C5D9",
          muted: "#6C7A94",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        "glow-sm": "0 0 8px rgba(79,200,255,.55)",
        "glow-md":
          "0 0 16px rgba(79,200,255,.55), 0 0 32px rgba(79,200,255,.25)",
        "glow-lg":
          "0 0 32px rgba(79,200,255,.6), 0 0 64px rgba(79,200,255,.35)",
        "glow-amber":
          "0 0 16px rgba(255,183,77,.55), 0 0 32px rgba(255,183,77,.25)",
      },
      backgroundImage: {
        "grad-scene":
          "linear-gradient(180deg, #0A0E1A 0%, #0D2440 50%, #0A1628 100%)",
        "grad-hero":
          "radial-gradient(ellipse at 50% 40%, rgba(79,200,255,.25) 0%, rgba(46,155,214,.08) 35%, rgba(10,14,26,0) 70%)",
        "grad-aurora":
          "radial-gradient(ellipse at 20% 10%, rgba(79,200,255,.18), transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(194,107,255,.14), transparent 55%), radial-gradient(ellipse at 50% 90%, rgba(125,230,139,.08), transparent 60%)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.85", filter: "brightness(1)" },
          "50%": { opacity: "1", filter: "brightness(1.18)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(8px,-14px,0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "shimmer-slow": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.1", transform: "scale(0.6)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
        "aurora-drift": {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "50%": { transform: "translate3d(-3%, 2%, 0) rotate(2deg)" },
        },
        "aurora-drift-reverse": {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "50%": { transform: "translate3d(3%, -2%, 0) rotate(-3deg)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "orbit-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "tilt": {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        "glow-breath": {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(79,200,255,.3), 0 0 40px rgba(79,200,255,.15)",
          },
          "50%": {
            boxShadow:
              "0 0 40px rgba(79,200,255,.7), 0 0 80px rgba(79,200,255,.4)",
          },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        ripple: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "fade-up": "fade-up .7s cubic-bezier(.22,.61,.36,1) both",
        shimmer: "shimmer 3s linear infinite",
        "shimmer-slow": "shimmer-slow 8s ease-in-out infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
        "aurora-drift": "aurora-drift 20s ease-in-out infinite",
        "aurora-drift-reverse":
          "aurora-drift-reverse 24s ease-in-out infinite",
        orbit: "orbit 18s linear infinite",
        "orbit-reverse": "orbit-reverse 22s linear infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "draw-line": "draw-line 2.5s ease-out forwards",
        tilt: "tilt 6s ease-in-out infinite",
        "glow-breath": "glow-breath 4s ease-in-out infinite",
        "slide-in-right": "slide-in-right .6s cubic-bezier(.22,.61,.36,1) both",
        ripple: "ripple 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
