'use strict'

var fs = require('fs')
var gulp = require('gulp')
var svgSprite = require('gulp-svg-sprite')

var svgConfig = {
  log: 'verbose',
  shape: {
    id: {
      generator: 'image-%s'
    }
  },
  mode: {
    symbol: {
      dest: '.',
      sprite: 'images',
      inline: true
    }
  }
}

var glob = [
  'images/**/*.svg',
  // Ignore
  '!images/vehicles/fat-car-*.svg',
  '!images/guidebook/*.svg'
]

gulp.task('default', function () {
  return gulp.src(glob)
    .pipe(svgSprite(svgConfig))
    .pipe(gulp.dest('./dist'))
})
