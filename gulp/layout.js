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
    .pipe(gulp.dest(config.path.build));
});

gulp.task('layouts-php', function () {
  return gulp.src([config.path.php])
    .pipe(gulp.dest(config.path.build));
});
