/* jshint asi:true */
'use strict'
const webpack = require('webpack')
const path = require('path')
const UglifyJsParallelPlugin = require('webpack-uglify-parallel')
const os = require('os')
const config = require('./config')

module.exports = {
  context: __dirname,
  output: {
    path: config.dll.vendorDir,
    filename: '[name].[hash].dll.js',
    library: '[name]_[hash]',
  },
  entry: config.dll.libs,
  plugins: [
    new UglifyJsParallelPlugin({
      workers: os.cpus().length,
      mangle: true,
      exclude: /\.min\.js$/,
      output: { comments: false },
      compressor: {
        warnings: false,
        drop_console: true,
        drop_debugger: true
      }
    }),
    new webpack.DllPlugin({
      path:  path.join(config.dll.vendorDir, '[name]-manifest.json'),
      name: '[name]_[hash]',
    })
  ]
}
