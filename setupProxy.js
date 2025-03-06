// frontend/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    console.log(' 代理中间件已激活'); // 添加此行
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
            pathRewrite: { '^/api': '/api' },
            onProxyReq: (proxyReq) => {
                console.log(` 代理请求已触发: ${proxyReq.path}`); // 关键调试点
            }
        })
    );
};