let gulp = require('gulp'),
  path = require('path'),
  sourcemaps = require('gulp-sourcemaps'),
  inject = require('gulp-inject'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass');

function tildaResolver(url, prev, done) {
  if (url[0] === '~') {
    url = path.resolve('node_modules', url.substr(1));
  }
  return {file: url};
}

let destination = 'build';

gulp.task('css', function () {
  return gulp.src(['styles/styles.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destination))
});

gulp.task('fonts', function () {
  return gulp.src(['node_modules/@fortawesome/fontawesome-free/webfonts/*.woff'])
    .pipe(gulp.dest('fonts'))
});
gulp.task('libs', function () {
  return gulp.src([
    'node_modules/lodash/lodash.js',
    'node_modules/vue/dist/vue.runtime.js',
    'node_modules/vuex/dist/vuex.js',
    'node_modules/vue-router/dist/vue-router.js'
  ])
    .pipe(uglify())
    .pipe(concat('libs.js'))
    .pipe(gulp.dest(destination))
});

gulp.task('watch', gulp.series('css', function watch() {
  return gulp.watch([
    'styles/**/*.scss'
  ], gulp.series('css'))
}));

gulp.task('default', gulp.series('css', 'fonts'));
