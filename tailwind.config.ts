import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void:    "var(--color-void)",
        elevated:"var(--color-elevated)",
        panel:   "var(--color-panel)",
        line:    "var(--color-line)",
        indigo: {
          DEFAULT: "#4F46E5",
          soft:    "#6366F1",
        },
        electric: {
          DEFAULT: "#3B82F6",
          bright:  "var(--color-electric-bright)",
        },
        violet: {
          DEFAULT: "var(--color-violet)",
        },
        ink: {
          primary: "var(--color-ink-primary)",
          muted:   "var(--color-ink-muted)",
          faint:   "var(--color-ink-faint)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent 0%, var(--color-void) 85%)",
        "aurora":
          "radial-gradient(60% 50% at 20% 0%, rgba(79,70,229,0.18) 0%, rgba(79,70,229,0) 60%), radial-gradient(50% 40% at 85% 10%, rgba(56,189,248,0.14) 0%, rgba(56,189,248,0) 60%), radial-gradient(40% 35% at 60% 100%, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0) 60%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(99,102,241,0.15), 0 8px 30px -8px rgba(79,70,229,0.35)",
        "glow-blue": "0 0 0 1px rgba(56,189,248,0.15), 0 8px 30px -8px rgba(56,189,248,0.3)",
      },
      keyframes: {
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ripple: {
          "0%": { opacity: "0.55", transform: "translate(-50%, -50%) scale(0)" },
          "100%": { opacity: "0", transform: "translate(-50%, -50%) scale(22)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 2.4s ease-in-out infinite",
        ticker: "ticker 28s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        ripple: "ripple 0.65s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
