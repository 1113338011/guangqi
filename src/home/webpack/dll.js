'use strict'
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('./config')
const webpackConfig = require('./webpack.dll.conf')

const spinner = ora('splitting for bundles...')
spinner.start()

rm(path.join(config.dll.vendorDir, '*'), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Split failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Split complete.\n'))
  })
})
