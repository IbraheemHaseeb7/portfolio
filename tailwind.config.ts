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
        backgroundy: "#0f3343",
        pinky: "#ff1654",
        "dark-pinky": "#ff165499",
        creamy: "#f3ffbd",
      },
      gridTemplateColumns: {
        nav: "20% 60% 20%",
      },
    },
  },
  plugins: [],
};
export default config;
