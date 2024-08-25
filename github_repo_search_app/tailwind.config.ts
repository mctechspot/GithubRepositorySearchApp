import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "coral": {
          "main": "#f5425d",
          "light": "#ffd4da"
        },
        "blue": {
          "main": "#0073DE",
          "light": "#C4E3FF"
        },
        "green": {
          "main": "#02B866",
          "light": "#CCFFE8"
        },
        "grey": {
          "dark": "#1E1E1E",
          "light": "#EBEBEB"
        },
        "purple": {
          "main": "#F5425D",
          "light": "#FFD4DA"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        robotoMono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
};
export default config;
