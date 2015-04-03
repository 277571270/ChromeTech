var gulp = require('gulp');
var jshint = require('gulp-jshint');

var paths = {
    scripts: 'js/**/*.js'
};

gulp.task('lint', function() {
    return gulp.src(paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});