var gulp   = require('gulp');
var config = require('../config');
var watch  = require('gulp-watch');

gulp.task('watch', ['default', 'browserSync'], function(callback) {
  watch(config.sass.watch, function() { gulp.start('sass'); });
  watch(config.html.watch, function() { gulp.start('html'); });
});
