import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "dark-blue": {
        100: "#687685",
        200: "#47576A",
        300: "#26394E",
        400: "#051A32",
        500: "#04172C",
        600: "#031327",
        700: "#021021",
        800: "#010D1B",
      },
      orange: {
        100: "#FFBF66",
        200: "#FFB144",
        300: "#FFA222",
        400: "#FE9301",
        500: "#DF8100",
        600: "#BF6F00",
        700: "#9F5D00",
        800: "#804B00",
      },
    },
  },
  plugins: [],
};
export default config;
