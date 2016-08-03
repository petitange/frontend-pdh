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
  var blackScript = scripts.plugins;
  blackScript.push("./front/source/assets/javascripts/controllers/black/*.js");
  return gulp.src(blackScript)
  .pipe(plugins.concat('scripts-black.js'))
  .pipe(gulp.dest(config.path.build + 'js'))
  .pipe(plugins.uglify())
  .pipe(plugins.rename({ extname: '.min.js' }))
  .pipe(gulp.dest(config.path.build + 'js'));
});

gulp.task('scripts-white', function() {
  var whiteScript = scripts.plugins;
  whiteScript.push("./front/source/assets/javascripts/controllers/white/*.js");
  return gulp.src(whiteScript)
  .pipe(plugins.concat('scripts-white.js'))
  .pipe(gulp.dest(config.path.build + 'js'))
  .pipe(plugins.uglify())
  .pipe(plugins.rename({ extname: '.min.js' }))
  .pipe(gulp.dest(config.path.build + 'js'));
});
