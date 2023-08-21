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
        color1: "#e9e8d4",
        color2: "#3c475d",
        color3: "#FBF8CA",
        color4: "#360827",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
