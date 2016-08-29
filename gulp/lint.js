var gulp = require('gulp');
var semistandard = require('gulp-semistandard');

gulp.task('lint', function () {
  return gulp.src('src/**/*.js')
    .pipe(semistandard())
    .pipe(semistandard.reporter('default', {
      breakOnError: true
    }));
});
