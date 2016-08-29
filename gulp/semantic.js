var gulp = require('gulp');

gulp.task('semantic', function () {
  return gulp.src('./node_modules/semantic-ui-less/themes/*/assets/**/*')
    .pipe(gulp.dest('../public/build/themes'));
});
