module.exports = {
  devServer: {
    proxy: {
      "/article": {
        target: "http://localhost:7001",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
