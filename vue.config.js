module.exports = {
  publicPath: './',
  assetsDir: './',
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        prependData: `@import "~@/styles/reset.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      '/apis': { // 将www.exaple.com印射为/apis
        target: 'http://lab.mkblog.cn', // 接口域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/apis': '' // 需要rewrite的,
        }
      }
    }
  }
}
