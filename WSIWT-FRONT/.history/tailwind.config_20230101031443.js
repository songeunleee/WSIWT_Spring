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
        color4: "#7FAB71",
        color3: "#AEC3D4",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
