const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    proxy.createProxyMiddleware("/api", {
      target: "http://fatwxapp.rhecube.com",
      changeOrigin: true,
      // pathRewrite: { "^/api": "/api" },
    })
  );
};
