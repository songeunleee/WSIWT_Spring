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
        color1: "#93B5C6",
        color2: "#C9CCD5",
        color3: "#C9CCD5",
        color4: "#93B5C6",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
