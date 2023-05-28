const gulp = require('gulp');
const addsrc = require('gulp-add-src')
function compileJs() {
  return gulp.src('theme/static/app/app.js')
    .pipe(addsrc('node_modules/jquery/dist/jquery.min.js'))
    .pipe(gulp.dest('theme/static/js'));
}

gulp.task('js', compileJs);