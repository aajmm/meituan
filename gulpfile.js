var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest('./src/css/'))
})
gulp.task('watch', function() {
    gulp.watch('./src/scss/*.scss', gulp.series('sass'))
})