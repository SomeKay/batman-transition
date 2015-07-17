var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var del = require('del');
var zip = require('gulp-zip');

gulp.task('default', ['watch', 'transpile', 'copy']);

gulp.task('build', ['transpile', 'copy', 'zip']);

gulp.task('clean', function(cb) {
    del(['dist'], cb);
});

gulp.task('transpile', ['clean'], function() {
    return browserify({
        entries: 'src/batman-transition.js',
        debug: true
    })
        .transform(babelify)
        .bundle()
        .pipe(source('batman-transition.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy', ['clean', 'transpile'], function() {
    return gulp.src(['./src/**/*.jpg', './src/**/*.css', './src/**/*.png'])
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    return gulp.watch('src/**/*.js', ['transpile', 'copy']);
});

gulp.task('zip', ['clean', 'transpile', 'copy'], function() {
    return gulp.src('dist/*')
        .pipe(zip('batman-transition.zip'))
        .pipe(gulp.dest('dist'))
});
