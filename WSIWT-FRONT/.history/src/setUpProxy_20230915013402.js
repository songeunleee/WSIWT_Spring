const proxy = require("http-proxy-middleware");

// src/setupProxy.js
module.exports = function (app) {
  app.use(
    proxy("/auth", {
      target: "http://localhost:8080", // 비즈니스 서버 URL 설정
      changeOrigin: true,
    })
  );
};
