var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './build/main.js',//页面构建主文件
  output: {
    path: path.resolve(__dirname, './dist'),//当前目录+../dist，即是~/dist;这里是打包文件的输出目录
    publicPath: '/dist/',//网站根目录下文件的所在位置
    filename: 'build.js'//打包出来的文件名
  },
  module: {
    rules: [
      {
        test: /\.vue$/,//用对应的loader来处理对应后缀的文件
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'//对引用的地址或模块设置别名，vue$===vue/dist/vue.esm.js
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },//作用未知
  devtool: '#eval-source-map'//开发工具设置，这种模式适合在开发模式中，有模块注释
}

if (process.env.NODE_ENV === 'production') {//判断环境是否是用产品模式
  module.exports.devtool = '#source-map'//无模块注释在生产环境中
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }//配置全局变量，在以后业务代码里可以直接使用，这是自定义的内容
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),//一个压缩或混淆文件的模块
    new webpack.optimize.OccurrenceOrderPlugin()
  ])
}
