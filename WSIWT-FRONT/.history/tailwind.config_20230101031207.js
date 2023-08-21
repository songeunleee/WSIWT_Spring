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
        color4: "#977AB5",
        color3: "#E0D5EB",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
