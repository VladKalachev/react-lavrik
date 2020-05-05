let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: [
                  "@babel/plugin-transform-react-jsx",
                  "@babel/plugin-proposal-class-properties"
                ]
              }
            }
          },
          {
            test: /\.module\.css$/,
            exclude: /node_modules/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '/public/path/to/',
                },
              },
              { 
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: {
                    localIdentName: '[local]_[sha1:hash:hex:7]'
                  }
                },
              },
            ],
          },
          {
            test: /^((?!\.module).)*css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hmr: process.env.NODE_ENV === "development"
                },
              },
              'css-loader'
            ]
          }
        ]
      },
      resolve: {
        alias: {
          '~': path.resolve(__dirname, 'src')
        }
      }
};

module.exports = conf;