var gulp   = require('gulp');
var config = require('../config');
var watch  = require('gulp-watch');

gulp.task('watch', ['build', 'browserSync'], function(callback) {
  watch(config.sass.src, function() { gulp.start('sass'); });
  watch(config.html.watch, function() { gulp.start('html'); });
});
