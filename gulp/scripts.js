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

gulp.task('scripts', function() {
    return gulp.src(scripts.plugins)
    .pipe(plugins.concat('scripts.js'))
    .pipe(gulp.dest(config.path.build + 'js'))
    .pipe(plugins.uglify())
    .pipe(plugins.rename({ extname: '.min.js' }))
    .pipe(gulp.dest(config.path.build + 'js'));
});
