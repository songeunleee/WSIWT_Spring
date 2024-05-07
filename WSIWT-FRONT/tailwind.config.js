/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        //우리의 fall 애니메이션 keyframes
        overflow: {
          "0%": { transform: " translateX(1%)" },
          "100%": { transform: " translateX(-100%)" },
        },
      },

      animation: {
        // 그런 다음 테마 구성의 애니메이션 섹션에서 이러한 keyframes를 이름으로 참조할 수 있습니다.
        overflow: "overflow 10s linear infinite",
        // 애니메이션 단축 CSS 속성 즉
        // 애니메이션 이름 | 애니메이션 지속 시간 | 애니메이션 타이밍 함수
        // 애니메이션 반복 횟수
      },
      scale: {
        102: "1.02",
      },
      colors: {
        color1: "#A99B84",
        color2: "#F0EBE3",
        color4: "#6DA5A3",
        color3: "#ADD0CF",
        color5: "#D0C6B6",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
