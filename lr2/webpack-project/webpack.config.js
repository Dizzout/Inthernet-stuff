const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const glob = require('glob');

module.exports = {
mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...generateHtmlPlugins(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
};

function generateHtmlPlugins() {
  return glob.sync('./src/pages/*.html').map((filepath) => {
    return new HtmlWebpackPlugin({
      filename: path.basename(filepath),
      template: filepath,
    });
  });
}
