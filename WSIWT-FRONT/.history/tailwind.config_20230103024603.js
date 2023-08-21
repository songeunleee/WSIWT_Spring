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
        color1: "#A99B84",
        color2: "#F0EBE3",
        color4: "#6DA5A3",
        color3: "#ADD0CF",
        color5: "#D0C6B6",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
