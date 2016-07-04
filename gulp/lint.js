'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /^gulp(-|\.)/,
        lazy: false
    }),
    config = require('./config/config.json');

gulp.task('lint-scripts', function() {
    return gulp.src([config.path.js])
    .pipe(plugins.jscsCustom({configPath: './jscs.json'}))
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    ;
});
