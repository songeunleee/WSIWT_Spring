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
        color1: "F4F9F9",
        color2: "CCF2F4",
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
