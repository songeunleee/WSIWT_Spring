import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    "/",
    createProxyMiddleware({
      target: "http://locahost:3000",
      changeOrigin: true,
    })
  );
};
