// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {

  // 生产模式配置
  build: {

    // 环境选择
    env: require('./prod.env'),

    // 作为单页面入口的html文件
    index: path.resolve(__dirname, '../dist/index.html'),

    // 打包后的文件存放目录
    assetsRoot: path.resolve(__dirname, '../dist'),

    // dist的子目录，存放静态资源
    assetsSubDirectory: 'static',

    /**
     * 发布后项目的根目录，例如默认是localhost:8080/
     * 修改为'/web/'后则应访问localhost:8080/web/
     */
    assetsPublicPath: '/',

    // 是否开启sourceMap
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    // 是否开启Gzip压缩，由于现在的服务器环境大部分都自带Gzip压缩，因此此处默认关闭
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,

    // 运行时是否自动打开浏览器
    autoOpenBrowser: true,

    // 同build
    assetsSubDirectory: 'static',

    /**
     * 同build，但是不应该擅自修改
     * 经实验，在dev模式下仅修改此处是无法改变项目根目录的，需要在其他多处地方同时进行修改
     */
    assetsPublicPath: '/',

    // 开发环境时的代理设置，主要解决跨域问题，仅供开发测试时使用，打包后要在后端另外设置跨域
    // 例如，把 localhost:8080/api/playlist 映射成 http://music.163.com/playlist
    // proxyTable: {
    //   '/api': {
    //     target: 'http://music.163.com',
    //     changeOrigin: true,
    //     headers: {
    //         Referer: 'http://music.163.com/'
    //     },
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    // },
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
