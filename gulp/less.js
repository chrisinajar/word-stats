var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var NpmImport = require('less-plugin-npm-import');
var CorrectTheme = require('less-plugin-semantic-theme');

gulp.task('less', function () {
  gulp.src('css/style.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      plugins: [
        CorrectTheme({ base: './css' }),
        new NpmImport()
      ]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../public/build/'));
});
