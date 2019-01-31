const path = require('path');
const dest = path.resolve(__dirname, './dist');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: dest,
    filename: 'index.js',
    library: 'store',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['jsx', '.js']
  },
  externals: {
    react: 'react',
    'react-dom': 'ReactDOM'
  }
};
