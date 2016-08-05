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

gulp.task('sass-black', function() {
  return gulp.src([config.path.scssBlack])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({outputStyle: 'compressed'}).on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(plugins.rename('sass-black.css'))
    .pipe(plugins.combineMq({beautify: false}))
    .pipe(gulp.dest(config.path.build + 'css'))
    .pipe(plugins.cssnano())
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(plugins.rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.path.build + 'css'));
});

gulp.task('sass-white', function() {
  return gulp.src([config.path.scssWhite])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({outputStyle: 'compressed'}).on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(plugins.rename('sass-white.css'))
    .pipe(plugins.combineMq({beautify: false}))
    .pipe(gulp.dest(config.path.build + 'css'))
    .pipe(plugins.cssnano())
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(plugins.rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.path.build + 'css'));
});

gulp.task('gridle', function() {
  return gulp.src(["./front/source/assets/stylesheets/gridle/**/*.scss"])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({outputStyle: 'compressed'}).on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(plugins.rename('gridle.css'))
    .pipe(plugins.combineMq({beautify: false}))
    .pipe(gulp.dest(config.path.build + 'css'))
    .pipe(plugins.cssnano())
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(plugins.rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.path.build + 'css'));
});

gulp.task('stylesheets', ['sass-black', 'sass-white', 'fonts'], function() {
  return gulp.src(css.path)
    .pipe(plugins.rename('styles.css'))
    .pipe(gulp.dest(config.path.build + 'css'));
});
