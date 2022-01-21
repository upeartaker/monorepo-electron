const { series, src, dest, parallel } = require('gulp')
const { colors, log } = require('gulp-util')
const clean = require('gulp-clean')

function cleanDist() {
  log(colors.red('clean dist'))
  return src('dist', { read: false, allowEmpty: true }).pipe(
    clean({ force: true })
  )
}

function bundle(cb) {
  log(colors.blue('bundle'))
  cb()
}

function copyBridge() {
  log(colors.blue('copy bridge'))
  return src('node_modules/@keen/bridge/dist/*').pipe(dest('dist/bridge'))
}

function copyWeb() {
  log(colors.blue('copy web'))
  return src('node_modules/@keen/web/dist/*').pipe(dest('dist/web'))
}

exports.clean = cleanDist
exports.default = series(bundle, parallel(copyBridge, copyWeb))
