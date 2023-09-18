const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "https://equran.id",
            changeOrigin: true,
            secure: false,
            pathRewrite: {
                "^/api": "/api/v2",
            },
        })
    );
};
