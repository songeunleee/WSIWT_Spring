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
        color4: "#7C7575",
        color3: "#DFD3D3",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
