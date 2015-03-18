var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config').sass;
var neat = require('node-neat').includePaths;

gulp.task('sass', function() {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
            includePaths: ['styles  '].concat(neat)
        }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest));
});
