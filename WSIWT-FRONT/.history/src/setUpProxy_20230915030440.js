const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/auth/login", {
      target: "http://locahost:8080",
      changeOrigin: true,
    })
  );
};
