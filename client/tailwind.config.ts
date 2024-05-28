import type { Config } from "tailwindcss";

import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/context/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utility/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/wrappers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "390px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1600px",
      "4xl": "1700px",
    },
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },
    },
    extend: {
      fontFamily: {
        archivo_black: ["var(--font-archivo_black)"],
        acme: ["var(--font-acme)"],
        silkscreen: ["var(--font-silkscreen)"],
        press_start_2p: ["var(--font-press_start_2p)"],
        londrina_solid: ["var(--font-londrina_solid)"],
        electrolize: ["var(--font-electrolize)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        "brand-primary": "#f02d3a",
        "brand-primary-light": "#fa3442",
        "brand-primary-dark": "#c21521",
        "brand-primary-content": "#F0F0F0",
        "brand-secondary": "#6648b0",
        "brand-secondary-content": "#FFFFFF",
        "base-100": "#F0F0F0",
        "base-200": "#e0e0e0",
        "base-300": "#c2c2c2",
        "base-400": "#8c8c8c",
        "base-500": "#595959",
        "base-600": "#232227",
        "base-content": "#232227",
        "brand-black": "#232227",
        "brand-white": "#F0F0F0",
        "brand-red": "#f02d3a",
        "brand-blue": "#3B82F6",
        "brand-light-blue": "#A9DDD6",
        "brand-navy-blue": "#000080",
        "brand-green": "#44AF69",
        "brand-dark-green": "#3B975B",
        "brand-yellow": "#F7C548",
        "brand-orange": "#FFA500",
        "brand-purple": "#694873",
        "brand-pink": "#DB7F8E",
        "brand-gray": "#808080",
        "brand-brown": "#A98743",
        "brand-silver": "#D7D9D7",
        "brand-gold": "#FFD700",
        "brand-navy": "#000080",
        "brand-teal": "#008080",
        "brand-maroon": "#800000",
        "brand-lime": "#61E786",
        "brand-olive": "#808000",
        "brand-aqua": "#00FFFF",
        "brand-indigo": "#4B0082",
        "brand-khaki": "#c3b091",
        "brand-burgundy": "#800020",
        "brand-apricot": "#fbceb1",
        "brand-winered": "#7B0323",
        "brand-navyblue": "#000080",
      },
    },
  },

  plugins: [
    require("daisyui"),
    require("tailwindcss-animated"),
    require("tailwindcss-bg-patterns"),
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
