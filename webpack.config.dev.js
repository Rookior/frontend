const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    entry: './src/index.js',
    devServer: {
        static: './dist',
        hot:true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            //title: 'webpack',
            template: './public/index.html',  //读取模板的入口文件
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',            
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // 将 JS 字符串生成为 style 节点
            }, {
                loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            }, {
                loader: "sass-loader" // 将 Sass 编译成 CSS
            }]
          },
          {
            test: /\.less$/,
            use: [{
              loader: "style-loader" // creates style nodes from JS strings
            }, {
              loader: "css-loader" // translates CSS into CommonJS
            }, {
              loader: "less-loader" // compiles Less to CSS
            }]
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                "presets": [
                  [
                    "@babel/preset-env",
                    {
                      "targets": {
                        "ie" : '6',
                        "edge": "17",
                        "firefox": "60",
                        "chrome": "67",
                        "safari": "11.1"
                      }                   
                    }
                  ]
                ]    
              }
            }
          
          }
    
        ],
        
    },
    mode: 'development',
    performance: {
      "maxEntrypointSize": 10000000,
      "maxAssetSize": 30000000
    }
}


