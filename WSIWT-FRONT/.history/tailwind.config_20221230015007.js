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
        color1: "121 Marble WallGet .PNG#bdc2e8",
        color2: "#ffffff",
        color3: "#DEF3F8",
      },
    },
    screens: {
      xs: "410px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("tailwind-scrollbar")],
};