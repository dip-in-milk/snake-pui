import path from 'path';
import { main } from './package';

export default {

  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, main),
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
        },
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
};
