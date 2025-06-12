import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        electricBlue: "#0066FF",
        electricGreen: "#00FF88",
        deepBlack: "#0a0a0a",
        darkGray: "#1a1a1a",
        electricPurple: "#8B5CF6",
        grayLight: "#F8F9FA",
      },
      backgroundImage: {
        gradientPrimary: "linear-gradient(135deg, #0066FF 0%, #00FF88 100%)",
        gradientDark: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
