/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      scale: {
        102: "1.02",
      },
    },
    screens: {
      xs: "410px",
      ...defaultTheme.screens,
    },
    colors: {
      "regal-blue": "#243c5a",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
