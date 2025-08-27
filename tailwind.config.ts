import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#e0ad64",
        black: "#10100c",
        white: "#ffffff",
        gray: "#000000",
        blue: "#aec7cc",
        beige: "#ede0cc",
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "hero-title": ["4rem", { lineHeight: "1.1", fontWeight: "900" }],
        "hero-title-mobile": ["2.5rem", { lineHeight: "1.1", fontWeight: "900" }],
        "section-title": ["2.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "section-title-mobile": ["2rem", { lineHeight: "1.2", fontWeight: "700" }],
        "card-title": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        "button-text": ["1.125rem", { lineHeight: "1.4", fontWeight: "700" }],
      },
      spacing: {
        "section-y": "6rem",
        "section-y-mobile": "4rem",
      },
      maxWidth: {
        "container": "1152px",
      },
      borderRadius: {
        "button": "0.75rem",
        "card": "1rem",
      },
      boxShadow: {
        "card": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "button": "0 4px 14px 0 rgba(224, 173, 100, 0.39)",
        "button-hover": "0 6px 20px rgba(224, 173, 100, 0.4)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;