import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "24px",
        md: "48px",
        lg: "80px",
      },
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          dark: "#111111",
          light: "#F5F4F0",
          cyan: "#00A3FF",
          cardDark: "#1A1A1A",
          grayTextLight: "#666666",
          grayTextDark: "#A0A0A0"
        }
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      spacing: {
        micro: "4px",
        tiny: "8px",
        small: "16px",
        base: "24px",
        medium: "40px",
        large: "64px",
        section: "120px",
        macro: "160px",
      },
      borderRadius: {
        sharp: "0px",
        small: "16px",
        large: "32px",
        pill: "9999px",
      },
      maxWidth: {
        narrow: "800px",
        standard: "1440px",
      },
      boxShadow: {
        'subtle': '0 10px 40px rgba(0, 0, 0, 0.05)',
        'medium': '0 20px 60px rgba(0, 0, 0, 0.08)',
        'glow': '0 0 120px rgba(0, 163, 255, 0.3)',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
};
export default config;
