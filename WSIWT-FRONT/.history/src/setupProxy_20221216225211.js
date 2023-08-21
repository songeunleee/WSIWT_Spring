const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("https://naveropenapi.apigw.ntruss.com", {
      target: "http://localhost:3000/",
      changeOrigin: true,
    })
  );
};
