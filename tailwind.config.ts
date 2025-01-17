import type { Config } from "tailwindcss";
import fluid, { extract, screens, fontSize, FluidThemeConfig } from "fluid-tailwind";
const { fontFamily } = require('tailwindcss/defaultTheme');


const config: Config = {
  content: {
    files: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract
    }  ,
  theme: {
    screens,
    fontSize,
    fluid: (({ theme }) => ({
      defaultScreens: ['20rem', theme('screens.lg')]
    })) satisfies FluidThemeConfig,
    extend: {
      colors: {
        "brand-blue": "#4876ff",
        "brand-lime": "#d9f154",
        "brand-navy": "#2e3192",
        "brand-orange": "#ff7347",
        "brand-pink": "#f7d0e9",
        "brand-purple": "#692e54",
        "brand-gray": "#fffdf9",
      },
      fontFamily: {
        sans: ['var(--font-bowlby)'],
        mono: ['var(--font-dmMono)']
      },
    },
  },
  plugins: [fluid],
};

export default config;
