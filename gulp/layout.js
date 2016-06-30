'use strict';

var gulp = require('gulp'),
    del = require('del'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /^gulp(-|\.)/,
        lazy: false
    }),
    config = require('./config/config.json'),
    fs = require('fs'),
    onError = function (err) {
      //plugins.gutil.beep();
      console.log(err.toString());

      this.emit('end');
    };

gulp.task('clean-layouts', function(callback) {
    del(config.path.build, callback);
});

gulp.task('layouts', function () {
  return gulp.src([config.path.html])
    .pipe(plugins.data(function(file) {
        return JSON.parse(fs.readFileSync(config.path.data, 'utf8'));
      }))
    .on('error', onError)
    .pipe(plugins.nunjucks.compile())
    .on('error', onError)
    .pipe(plugins.htmlhint('.htmlhintrc'))
    .pipe(plugins.htmlhint.failReporter())
    .pipe(gulp.dest(config.path.build));
});
