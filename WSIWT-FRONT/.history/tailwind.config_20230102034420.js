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
        color1: "#E4DCCF",
        color2: "#A99B84",
        color4: "#6DA5A3",
        color3: "#ADD0CF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
