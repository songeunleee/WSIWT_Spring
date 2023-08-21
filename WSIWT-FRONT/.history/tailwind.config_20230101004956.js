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
        color1: "#DFD3D3",
        color2: "#3c475d",
        color4: "#7C7575",
        color3: "#B8B0B0",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
