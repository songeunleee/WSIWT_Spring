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
        color4: "#C9CCD5",
        color3: "#C6DCE4",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
