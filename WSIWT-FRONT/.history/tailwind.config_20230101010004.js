/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      scale: {
        102: "1.02",
      },
      colors: {
        color1: "#FFB6B6",
        color2: "#FDE2E2",
        color4: "#679B9B",
        color3: "#AACFCF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
