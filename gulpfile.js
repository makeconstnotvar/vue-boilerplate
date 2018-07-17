let gulp = require('gulp'),
  path = require('path'),
  sourcemaps = require('gulp-sourcemaps'),
  inject = require('gulp-inject'),
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
  return gulp.src(['public/styles/styles.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({importer: tildaResolver}).on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destination))
});
gulp.task('flex', function () {
  return gulp.src('node_modules/flexboxgrid/dist/flexboxgrid.css')
    .pipe(gulp.dest(destination))
});
gulp.task('watch', gulp.series('css', function watch() {
  return gulp.watch([
    'public/styles/**/*.scss'
  ], gulp.series('css'))
}));

gulp.task('default', gulp.series('css','flex'));
