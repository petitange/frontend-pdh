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

css.path.push(config.path.styles);

gulp.task('fonts', function() {
    return gulp.src(config.path.fonts)
    .pipe(gulp.dest(config.path.build + 'css/fonts'))
});

gulp.task('stylesheets',['fonts'], function() {
    return gulp.src(css.path)
    .pipe(plugins.concat('styles.css'))
    .pipe(gulp.dest(config.path.build + 'css'))
    .pipe(plugins.rename({ extname: '.min.css' }))
    .pipe(gulp.dest(config.path.build + 'css'));
});
