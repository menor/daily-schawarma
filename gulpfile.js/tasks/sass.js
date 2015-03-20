var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../lib/handleErrors');
var config = require('../config').sass;
var neat = require('node-neat').includePaths;
var scsslint = require('gulp-scss-lint');

gulp.task('sass', function() {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(scsslint())
    .pipe(sass({
            includePaths: ['styles  '].concat(neat)
        }))
     .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
