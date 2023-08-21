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
        color1: "#FBF0F0",
        color2: "#DFD3D3",
        color4: "#FFB6B6",
        color3: "#FDE2E2",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
