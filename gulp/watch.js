var gulp = require('gulp');

gulp.task('listen', function () {
  gulp.watch('css/**/*', ['css']);
  gulp.watch('src/**/*.js', ['test', 'js']);
});
