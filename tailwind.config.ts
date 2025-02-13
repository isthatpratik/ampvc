import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        "display-h1": ["90px", { lineHeight: "112px", letterSpacing: "-0.04em", fontWeight: "600" }],
        "display-h2": ["72px", { lineHeight: "90px", letterSpacing: "-0.04em", fontWeight: "600" }],
        h1: ["60px", { lineHeight: "72px", letterSpacing: "-0.03em", fontWeight: "600" }],
        h2: ["48px", { lineHeight: "60px", letterSpacing: "-0.02em", fontWeight: "600" }],
        h3: ["40px", { lineHeight: "48px", letterSpacing: "-0.01em", fontWeight: "600" }],
        h4: ["32px", { lineHeight: "40px", letterSpacing: "-0.008em", fontWeight: "600" }],
        h5: ["24px", { lineHeight: "28px", letterSpacing: "-0.004em", fontWeight: "600" }],
        h6: ["20px", { lineHeight: "24px", letterSpacing: "-0.004em", fontWeight: "600" }],
        "label-1": ["18px", { lineHeight: "24px", fontWeight: "600" }],
        "label-2": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-1": ["18px", { lineHeight: "24px", fontWeight: "400" }],
        "body-2": ["16px", { lineHeight: "20px", fontWeight: "400" }],
        "body-3": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        caption: ["12px", { lineHeight: "18px", fontWeight: "500" }],
      },
      dropShadow: {
        x: "0 0 2px rgba(0, 0, 0, 0.05)",
        x1: "0 0 3px rgba(0, 0, 0, 0.10)",
        x2: "0 0 8px -2px rgba(0, 0, 0, 0.10)",
        x3: "0 0 16px -2px rgba(0, 0, 0, 0.10)",
        x4: "0 0 48px -12px rgba(0, 0, 0, 0.20)",
        x5: "0 0 48px 6px rgba(0, 0, 0, 0.10)",
        x6: "4px 5px 6px rgba(0, 0, 0, 0.55)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
