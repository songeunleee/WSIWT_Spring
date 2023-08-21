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
        color2: "#F0EBE3",
        color4: "#BFA2DB",
        color3: "#ecd0d6",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
