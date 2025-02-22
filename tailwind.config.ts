import tailwindcssTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ["var(--font-roboto-condensed)", "sans-serif"],
        sourceSerifPro: ["var(--font-source-serif-pro)", "serif"],
      },
      colors: {
        primary: {
          "50": "#A5A5A5",
          "100": "#574E4E",
          DEFAULT: "#1D1D1D",
        },
        secondary: {
          "50": "#FFF5F5",
          "75": "#FFCECA",
          "100": "#C82213",
          DEFAULT: "#B62121",
        },
        black: {
          "100": "#333333",
          "200": "#141413",
          "300": "#7D8087",
          DEFAULT: "#000000",
        },
        accent: {
          hover: "#A6FF00",
          DEFAULT: "#D9FF00",
        },
        focus: {
          DEFAULT: "#F0F014",
        },
        white: {
          "100": "#F7F7F7",
          DEFAULT: "#FFFFFF",
        },
      },
      fontSize: {
        hero: "clamp(1.875rem, -1.0096rem + 6.0096vw, 5rem)",
        title: "clamp(1.5rem, -0.5769rem + 4.3269vw, 3.75rem)",
        "title-footer": "clamp(3.125rem, -3.2212rem + 13.2212vw, 10rem)",
        btn: "clamp(0.875rem, 0.5288rem + 0.7212vw, 1.25rem)", // 14-20
        "txt-hero": "clamp(0.875rem, 0.6442rem + 0.4808vw, 1.125rem)", //14-18
        "txt-32-42": "clamp(2rem, 1.4231rem + 1.2019vw, 2.625rem)",
        "txt-24-32": "clamp(1.5rem, 1.0385rem + 0.9615vw, 2rem)",
        "txt-16-20": "clamp(1rem, 0.7692rem + 0.4808vw, 1.25rem)",
        "txt-18-24": "clamp(1.125rem, 0.7788rem + 0.7212vw, 1.5rem)",
        "txt-12-16": "clamp(0.75rem, 0.5192rem + 0.4808vw, 1rem)",
        "txt-24-48": "var(--24-48)",
        "txt-16-48": "var(--16-48)",
        "txt-16-42": "var(--16-42)",
        "txt-32-72": "var(--32-72)",
        "txt-40-60": "var(--40-60)",
      },
      lineHeight: {
        hero: "clamp(2.25rem, -3.8517rem + 12.7119vw, 6rem)", // 36-96
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssTypography],
};
export default config;
