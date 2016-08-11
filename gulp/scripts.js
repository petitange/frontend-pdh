'use strict';

var gulp = require('gulp'),
    del = require('del'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /^gulp(-|\.)/,
        lazy: false
    }),
    config = require('./config/config.json'),
    scripts = require('./config/scripts.json');

gulp.task('clean-scripts', function(callback) {
    del(config.path.build + 'js', callback);
});

gulp.task('scripts-black', function() {
  return gulp.src([
  "bower_components/jquery/dist/jquery.min.js",
  "bower_components/flexslider/jquery.flexslider-min.js",
  "bower_components/angular/angular.min.js",
  "bower_components/angular-contentful/dist/angular-contentful.min.js",
  "./front/source/assets/plugins/**/*.js",
  "./front/source/assets/javascripts/app.js",
  "./front/source/assets/javascripts/config.js",
  "./front/source/assets/javascripts/controllers/pageContent.controller.js",
  "./front/source/assets/javascripts/controllers/header.js",
  "./front/source/assets/javascripts/controllers/slider.js",
  "./front/source/assets/javascripts/controllers/black/animations.js"])
  .pipe(plugins.concat('scripts-black.js'))
  .pipe(gulp.dest(config.path.build + 'js'))
  .pipe(plugins.uglify())
  .pipe(plugins.rename({ extname: '.min.js' }))
  .pipe(gulp.dest(config.path.build + 'js'));
});

gulp.task('scripts-contentful', function() {
  return gulp.src([
    "bower_components/jquery/dist/jquery.min.js",
    "bower_components/angular/angular.min.js",
    "bower_components/angular-contentful/dist/angular-contentful.min.js",
    "./front/source/assets/javascripts/app.js",
    "./front/source/assets/javascripts/config.js",
    "./front/source/assets/javascripts/controllers/pageContent.controller.js"])
  .pipe(plugins.concat('scripts-contentful.js'))
  .pipe(gulp.dest(config.path.build + 'js'))
  .pipe(plugins.uglify())
  .pipe(plugins.rename({ extname: '.min.js' }))
  .pipe(gulp.dest(config.path.build + 'js'));
});

gulp.task('scripts-white', function() {
  return gulp.src([
  "bower_components/jquery/dist/jquery.min.js",
  "bower_components/flexslider/jquery.flexslider-min.js",
  "bower_components/angular/angular.min.js",
  "bower_components/angular-contentful/dist/angular-contentful.min.js",
  "./front/source/assets/plugins/**/*.js",
  "./front/source/assets/javascripts/app.js",
  "./front/source/assets/javascripts/config.js",
  "./front/source/assets/javascripts/controllers/pageContent.controller.js",
  "./front/source/assets/javascripts/controllers/header.js",
  "./front/source/assets/javascripts/controllers/slider.js",
  "./front/source/assets/javascripts/controllers/white/animations.js"])
  .pipe(plugins.concat('scripts-white.js'))
  .pipe(plugins.uglify())
  .pipe(plugins.rename({ extname: '.min.js' }))
  .pipe(gulp.dest(config.path.build + 'js'));
});
