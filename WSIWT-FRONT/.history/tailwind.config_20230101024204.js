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
        color1: "#BBBBBB",
        color2: "#EAEAEA",
        color4: "#B1D0E0",
        color3: "#6998AB",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
