var debug   = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path    = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const clientBundleOutputDir = 'dist';

const { CheckerPlugin } = require('awesome-typescript-loader');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeExternals = require('webpack-node-externals');
const extractSass = new ExtractTextPlugin({
    fallback: "style-loader",
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [
      path.resolve('.'),
      path.resolve('./node_modules')
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  target: 'web',
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: {
      app: "src/main.ts"
  },
  output: {
    path: path.join(__dirname, clientBundleOutputDir),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(txt)$/i,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
           'to-string-loader',
           'css-loader'
         ]
       })
      },
      {
        test: /\.(gif|png|jpe?g|svg|eot|ttf|woff|woff2)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            }
          }
        ]
      },
      {
        test: /.html$/,
        use: 'html-loader?minimize=false'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract( {
                       fallback:'style-loader',
                       use: [ "css-loader" ]
                     }
                   )
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
                loader: "css-loader"
            },
            {
                loader: "resolve-url-loader"
            },
            {
                loader: "sass-loader"
            }]
        })
      },
      {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
     },
     {
        test: /\.ts$/,
        use: [
            'angular2-template-loader',
            'awesome-typescript-loader'
        ]
      }
    ]
  },
  plugins:  [
    new HtmlWebpackPlugin(),
    new CheckerPlugin(),
    extractSass,
    new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/,
      path.join(__dirname, 'src', 'app'),
      {
        // your Angular Async Route paths relative to this root directory
      }
    ),
    new ExtractTextPlugin("styles.css"),
    new TsConfigPathsPlugin({ tsconfig: __dirname + '/tsconfig.json', compiler : 'typescript'} ),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: true }),
  ],
};
