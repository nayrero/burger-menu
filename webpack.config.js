const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode:'development',
    watch: true,
    watchOptions: {
        aggregateTimeout: 1000,
        poll: 1000,
      },
    entry: {
        main: './index.js',
        nemain: './nemain.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({            
            template: './index.html'            
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ],
      }
}