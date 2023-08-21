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
        color2: "#E4DCCF",
        color4: "#679B9B",
        color3: "#AACFCF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
