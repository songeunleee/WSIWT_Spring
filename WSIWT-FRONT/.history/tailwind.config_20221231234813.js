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
        color1: "#F0A500",
        color2: "#3c475d",
        color4: "#000000",
        color3: "#DBDBDB",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
