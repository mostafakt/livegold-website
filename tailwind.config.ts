/* eslint-disable @typescript-eslint/no-explicit-any */
// tailwind.config.ts
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px", // Full HD and up
        "4xl": "2560px", // 2K / WQHD
        "5xl": "3840px", // 4K screens
      },

      spacing: {
        "200": "800px",
        "75": "300px",
        "112": "450px",
        "360": "90rem",
      },
      colors: {
        "gray-text": "#737373",
        primary: {
          DEFAULT: "#f0a647",
          bg: "#FFFDF9",
          200: "#fecf85",
          300: "#ffd99d",
          400: "#FFF8EC",
          500: "#e69832",
          600: "#fecf85",
        },
        secondary: {
          DEFAULT: "#fecf85",
          dark: "#172436",
        },
        red: {
          DEFAULT: "#DC3A3A",
        },
        green: {
          DEFAULT: "#27B11A",
        },
        table: {
          DEFAULT: "#FFFBF4",
        },

        neutral: {
          900: "#323232", // darkest
          800: "#585858",
          850: "#797979",
          700: "#878787",
          600: "#A6A6A6",
          500: "#C6C6C6",
          400: "#DFDFDF",
          300: "#EBEBEB",
          200: "#F9F9F9",
          100: "#8f8f8f",
          50: "#656565",
        },

        white: "#ffffff",
      },

      backgroundImage: {
        "primary-gradient":
          "linear-gradient(to left, #f0a647, #fecf85, #ffd99d)",
        "card-bg-gradient": "linear-gradient(to right, #fff8ec, #ffedd1)",

        "bg-gradient": " linear-gradient(90deg, #FFF8EC 0%, #FFEDD1 100%);",
        "chart-bg-gradient": "var(--color-chart)",
        "bg-nav": "linear-gradient(to left, #e69832, #fecf85);",
      },

      fontFamily: {
        // "arabic": ['"Expo Arabic"', ...defaultTheme.fontFamily.sans],
        "expo-arabic": [
          "var(--font-expo-arabic)",
          ...defaultTheme.fontFamily.sans,
        ],
        sans: ["var(--font-cairo)", "system-ui", "Arial", "sans-serif"],
        tajawal: ["var(--font-tajawal)", ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        "6": "1.5rem",
        "8": "2rem",
      },

      fontWeight: {
        reg: "400",
        med: "500",
        bold: "700",
      },

      borderRadius: {
        none: "0px",
        sm: "0.125rem", // 2px
        DEFAULT: "0.25rem", // 4px
        md: "0.375rem", // 6px
        lg: "0.5rem", // 8px
        xl: "0.75rem", // 12px
        "2xl": "1rem", // 16px
        "3xl": "1.5rem", // 24px
        full: "9999px", // pill
      },
      boxShadow: {
        drop: "0px 4px 10px 0px rgba(0, 0, 0, 0.1)",
      },

      animation: {
        fadeUp: "fadeUp 1.8s ease-out forwards", // runs once
        "fade-in": "fade-in 1s ease forwards",
        "fade-up": "fade-up 1s ease forwards",
        marquee: "marquee var(--duration) infinite linear",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        shimmer: "shimmer 8s infinite",
        spin: "spin 1s linear infinite",
        "image-glow": "image-glow 3s ease-out forwards",
      },

      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        shimmer: {
          "0%, 90%, 100%": {
            backgroundPosition: "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            backgroundPosition: "calc(100% + var(--shimmer-width)) 0",
          },
        },
        spin: {
          to: { transform: "rotate(1turn)" },
        },
        "image-glow": {
          "0%": {
            opacity: "0",
            animationTimingFunction: "cubic-bezier(0.74, 0.25, 0.76, 1)",
          },
          "10%": {
            opacity: "0.7",
            animationTimingFunction: "cubic-bezier(0.12, 0.01, 0.08, 0.99)",
          },
          "100%": { opacity: "0.4" },
        },
      },
    },
  },
  plugins: [typography],
};
