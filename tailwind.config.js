/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080c16",
        foreground: "#f1f5f9",
        navy: {
          950: "#060a12",
          900: "#0a101d",
          850: "#0d1527",
          800: "#111c33",
          700: "#182849",
          600: "#223967",
        },
        card: {
          DEFAULT: "rgba(15, 23, 42, 0.75)",
          border: "rgba(51, 65, 85, 0.45)",
          hover: "rgba(30, 41, 59, 0.85)",
        },
        accent: {
          blue: "#38bdf8",
          indigo: "#6366f1",
          emerald: "#10b981",
          amber: "#f59e0b",
          rose: "#f43f5e",
          purple: "#a855f7",
          cyan: "#06b6d4"
        }
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        glow: "0 0 20px -5px rgba(56, 189, 248, 0.25)",
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
