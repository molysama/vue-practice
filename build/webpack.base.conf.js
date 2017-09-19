// nodejs的path模块，用于处理路径
var path = require('path')

// css预处理的配置
var utils = require('./utils')

// dev和build的资源路径、代理等的配置
var config = require('../config')

// vue文件内资源加载的配置
var vueLoaderConfig = require('./vue-loader.conf')

// 获取输入路径的绝对路径
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

// webpack配置
module.exports = {

  // webpack入口文件
  entry: {
    app: './src/main.js'
  },

  // webpack输出配置
  output: {
    path: config.build.assetsRoot, // 输出路径，默认为根目录下的dist
    filename: '[name].js', // bundle文件的命名格式

    // 项目部署时所处的路径，会在config/index.js里做详解
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },

  // 解析模块
  resolve: {

    // 配置后import、require时可省略文件后缀
    extensions: ['.js', '.vue', '.json'], 

    // 配置别名，简化import、require的加载路径
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },

  // wbepack对文件的识别配置
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.toml$/,
        loader: 'toml-loader'
      }
    ]
  }
}
