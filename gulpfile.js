"use strict";

var autoprefixer = require('gulp-autoprefixer');
var closureCompiler = require('gulp-closure-compiler');
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var data = require('gulp-data');
var fs = require('fs');
var gulp = require('gulp');
var gutil = require('gulp-util');
var htmlhint = require("gulp-htmlhint");
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var nunjucks = require('gulp-nunjucks');
var plumber = require('gulp-plumber');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sizereport = require('gulp-sizereport');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

var moment = require('moment');
var pkg = require('./package.json');
var config = require('./config.json');

//    browserSync     = require('browser-sync'),
//    notify          = require("gulp-notify"),
//    reload          = browserSync.reload


var src = {
  css:     config.path.css,
  data:    config.path.data,
  scss:    config.path.scss,
  js:      config.path.js,
  img:     config.path.img,
  html:    config.path.html,
  tmpl:    config.path.tmpl,
  build:   config.path.build
}


// error function for plumber
var onError = function (err) {
  gutil.beep();
  console.log(err.toString());
  this.emit('end');
};


gulp.task('local', function() {
  return gutil.log('Gulp is running in local!')
});

gulp.task('staging', function() {
  return gutil.log('Gulp is running for staging!')
});

gulp.task('live', function() {
  return gutil.log('Gulp is running for live!')
});

var banner =
  '/*!\n\n' +
  '<%= pkg.officialName %> - <%= pkg.summary %>\nVersion <%= pkg.version %>+<%= build %>\n' +
  '\u00A9 <%= year %> <%= pkg.author.name %> - <%= pkg.author.url %>\n\n' +
  'Site:     <%= pkg.homepage %>\n' +
  'Issues:   <%= pkg.bugs.url %>\n' +
  'License:  <%= pkg.license %>\n\n' +
  '*/\n';

function generateBuild() {
  var date = new Date;
  //return Math.floor((date - (new Date(date.getFullYear(), 0, 0))) / 1000).toString(36)
  return moment().format('YYYYMMDDHHmmss');
}

var build = generateBuild();

gulp.task('serve', ['sass'], function() {
//    browserSync({
//        server: {
//            baseDir: "dist/"
//        },
//        ghostMode: {
//            clicks: false,
//            forms: false,
//            scroll: false
//        },
//        notify: false,
//        open: "external"
//    });
//
//    gulp.watch(src.scss + '**/*.scss', ['sass']);
//    gulp.watch('./dist/*.html').on('change', reload);
//    gulp.watch('./dist/public/scripts/*.js').on('change', reload);
});

gulp.task('scripts', function(){
  gulp.src([src.js])
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(src.build + 'js'))

    /*.pipe(closureCompiler({
      compilerPath: 'bower_components/closure-compiler/lib/vendor/compiler.jar',
      fileName: 'build.js'
    }))*/

    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(src.build + 'js'));
});

gulp.task('sass', function() {
  return gulp.src([src.css])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'})).on('error', sass.logError)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest(src.build + 'css'))
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(src.build + 'css'));


//  return sass(src.scss, {
//    style: 'expanded',
//    sourcemap: false
//    })
//    .on('error', function(err) {
//        notify.onError({
//            title: 'Sass Error!',
//            message: '<%= error.message %>',
//            sound: 'Basso'
//        })(err);
//    })
//    .pipe(autoprefixer())
//    .pipe(gulp.dest('src/public/styles'))
//    .pipe(minifycss({ keepSpecialComments: 0 }))
//    .pipe(rename({suffix: '.min' }))
//    .pipe(gulp.dest('./dist/public/styles/'))
//    .pipe(reload({ stream: true }));
});

gulp.task('image', function(){
  gulp.src([src.img])
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest(src.build + 'img/'));
});

gulp.task('layout', function () {
  return gulp.src([src.html])
    .pipe(data(function(file) {
        return JSON.parse(fs.readFileSync(src.data, 'utf8'));
      }))
    .on('error', onError)
    .pipe(nunjucks.compile())
    .on('error', onError)
    .pipe(htmlhint('.htmlhintrc'))
    //.pipe(htmlhint.reporter())
    .pipe(htmlhint.failReporter())
    /*.pipe(htmlhint.reporter('gulp-jshint-html-reporter', {
      filename: './front/build/log/jshint-output.html',
      createMissingFolders : true
      }))*/
    .pipe(gulp.dest(src.build));
});

gulp.task('watch', function(){
//  gulp.watch(src.js,                 ['scripts']);
  gulp.watch(src.tmpl, ['layout']);
  gulp.watch(src.data, ['layout']);
  gulp.watch(src.scss, ['sass']);
});

gulp.task('sizereport', function () {
  return gulp.src(src.build + '**/*')
    .pipe(sizereport({
      gzip: true
    }));
});

gulp.task('build', function (cb) {

  return gutil.log(pkg.version + ' ' + build);

  //fs.writeFile('version.txt', banner, cb);
});


gulp.task('default', ['scripts', 'layout', 'image', 'watch', 'serve', 'sizereport']);


gulp.task('local', ['scripts', 'layout', 'image', 'watch', 'serve', 'sizereport']);
gulp.task('staging', ['scripts', 'layout', 'image', 'sizereport', 'build']);
gulp.task('live', ['scripts', 'layout', 'image']);
