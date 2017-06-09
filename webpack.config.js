var path = require('path');
var HtmlWbpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module:{
    rules: [
      { test: /\.(js)$/, use:'babel-loader'},
      { test: /\.css$/, use:['style-loader','css-loader']}
    ]
  },
  devServer:{
    historyApiFallback: true
  },
  plugins: [
  new HtmlWbpackPlugin({
    template: 'app/index.html'
  })]
}
