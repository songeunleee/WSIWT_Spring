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
        color4: "#1E2022",
        color3: "#C9D6DF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
