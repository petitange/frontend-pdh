'use strict';

var gulp = require('gulp'),
    del = require('del'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /^gulp(-|\.)/,
        lazy: false
    }),
    config = require('./config/config.json');

gulp.task('clean-styles', function(callback) {
    del(config.path.build + 'css', callback);
});

gulp.task('sass', function() {
  return gulp.src([config.path.css])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({outputStyle: 'expanded'})).on('error', sass.logError)
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(plugins.rename('styles.css'))
    .pipe(gulp.dest(src.build + 'css'))
    .pipe(plugins.cssnano())
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(plugins.rename({ extname: '.min.css' }))
    .pipe(gulp.dest(src.build + 'css'));
});
