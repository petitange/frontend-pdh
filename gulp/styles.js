'use strict';

var gulp = require('gulp'),
    del = require('del'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /^gulp(-|\.)/,
        lazy: false
    }),
    config = require('./config/config.json'),
    css = require('./config/styles.json');
gulp.task('fonts', function() {
    return gulp.src(config.path.fonts)
    .pipe(gulp.dest(config.path.build + 'css/fonts'))
});

gulp.task('sass', function() {
  return gulp.src([config.path.scss])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({outputStyle: 'compressed'}).on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(plugins.rename('sass.css'))
    .pipe(plugins.combineMq({beautify: false}))
    .pipe(gulp.dest(config.path.build + 'css'))
    .pipe(plugins.cssnano())
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(plugins.rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.path.build + 'css'));
});

gulp.task('stylesheets', ['sass', 'fonts'], function() {
  return gulp.src(css.path)
    .pipe(plugins.rename('styles.css'))
    .pipe(gulp.dest(config.path.build + 'css'));
});
