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
        color1: "#a1c4fd",
        color2: "#ebedee",
      },
    },
    screens: {
      xs: "410px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
