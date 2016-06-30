'use strict';

var gulp = require('gulp'),
    del = require('del'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /^gulp(-|\.)/,
        lazy: false
    }),
    config = require('./config/config.json');

gulp.task('clean-images', function(callback) {
    del(config.path.build + 'img/', callback);
});

gulp.task('image', function(){
  gulp.src([config.path.img])
    .pipe(plugins.plumber())
    .pipe(plugins.imagemin())
    .pipe(gulp.dest(config.path.build + 'img/'));
});
