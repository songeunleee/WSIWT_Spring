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
        color1: "#F0E5CF",
        color2: "#F7F6F2",
        color3: "#F8EBEE",
        color4: "#4B6587",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
