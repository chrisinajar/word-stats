var gulp = require('gulp');

// include all our tasks
require('./browserify');
require('./lint');
require('./test');
require('./watch');

// tasks for file types
gulp.task('css', []);
gulp.task('js', ['test', 'browserify']);

// build, watch, default
gulp.task('build', ['css', 'js']);
gulp.task('watch', ['build', 'listen']);
gulp.task('default', ['build', 'watch']);
