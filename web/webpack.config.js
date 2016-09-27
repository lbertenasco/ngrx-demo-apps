const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const WebpackDashboardPlugin = require('webpack-dashboard/plugin');


module.exports = function (env) {
  if (!env) {
    env = {};
  }
  return {
    entry: {
      main: env.prod ? './src/index.prod.ts' : './src/index.dev.ts'
    },
    devtool: env.prod ? 'source-map' : 'eval',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
      pathinfo: !env.prod
    },
    resolve: {
      extensions: ['', '.ts', '.js']
    },
    module: {
      preLoaders: [
        {
          test: /.js$/,
          loader: 'string-replace-loader',
          query: {
            search: 'moduleId: module.id,',
            replace: '',
            flags: 'g'
          }
        }
      ],
      loaders: [
        {
          test: /\.ts$/,
          loader: 'awesome-typescript-loader',
          query: {
            useForkChecker: true
          }
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        // {
        //   test: /\.css$/,
        //   loader: 'raw-loader'
        // },
        {
          test: /\.html$/,
          loader: 'raw-loader',
          exclude: [
            path.resolve(__dirname, './src/index.html')
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        PROD: env.prod ? 'true' : 'false'
      }),
      new ForkCheckerPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.optimize.CommonsChunkPlugin({
        minChunks: Infinity,
        name: 'inline',
        filename: 'inline.js',
        sourceMapFilename: 'inline.map'
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),
      new WebpackDashboardPlugin(),
      new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        path.resolve('./src') // location of your src
      )
    ],
    node: {
      global: 'window',
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };
}
