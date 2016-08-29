var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('browserify', function () {
  // Single entry point to browserify
  return gulp.src('src/index.js')
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(gulp.dest('dist'));
});
