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
        color4: "#406882",
        color3: "#B3E8E5",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
