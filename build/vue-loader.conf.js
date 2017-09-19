var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {

  // 配置css预处理
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),

  /* 
   * 将以下标签的资源路径转换为模块加载
   * 如： <img id="img" src="./assets/m.jpg">
   * 相当于:
   *      document.getElementById("img").src = require("./assets/m.jpg")
   */
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
