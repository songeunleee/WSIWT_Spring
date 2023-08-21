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
        color4: "#79A3B5",
        color3: "#D5E5EB",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
