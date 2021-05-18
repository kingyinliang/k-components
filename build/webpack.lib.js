const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = require('./config')

console.log(config.externals)

module.exports = {
  mode: 'production',
  entry: {
    app: ['./packages/main.js']
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'k-generate-components.common.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'KGenerateComponents',
    libraryTarget: 'commonjs2'
  },
  // output: {
  //   path: path.resolve(process.cwd(), './lib'),
  //   publicPath: '/dist/',
  //   filename: 'index.js',
  //   chunkFilename: '[id].js',
  //   libraryTarget: 'umd',
  //   libraryExport: 'default',
  //   library: 'KComponents',
  //   umdNamedDefine: true,
  //   globalObject: 'typeof self !== \'undefined\' ? self : this'
  // },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './examples'),
      src: path.resolve(process.cwd(), './src'),
      packages: path.resolve(process.cwd(), './packages')
    },
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules']
  },
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  optimization: {
    minimize: false
  },
  externals: config.externals,
  module: {
    rules: [
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: config.jsexclude,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ]
}
