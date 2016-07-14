'use strict';

var gulp = require('gulp');

gulp.task('default', ['scripts', 'stylesheets', 'layouts', 'image', 'sizereport', 'lint-scripts']);
gulp.task('local', ['scripts', 'layouts', 'image', 'watch', 'sizereport']);
gulp.task('staging', ['scripts', 'layouts', 'image', 'sizereport', 'build']);
gulp.task('live', ['scripts', 'layouts', 'image']);
