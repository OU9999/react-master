const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/coinpaprika", {
      target: "https://api.coinpaprika.com",
      pathRewrite: {
        "^/coinpaprika": "",
      },
      changeOrigin: true,
    })
  );
};
