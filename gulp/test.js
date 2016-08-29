var gulp = require('gulp');
var tape = require('gulp-tape');
var browserify = require('gulp-browserify');
var tapSpec = require('tap-spec');

gulp.task('test', function () {
  return gulp.src('src/**/test.js')
    .pipe(browserify())
    .pipe(tape({
      reporter: tapSpec()
    }));
});
