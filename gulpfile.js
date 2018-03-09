const gulp = require('gulp'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    scssSrc = 'src/scss/**/*.scss';

gulp.task('scss', () => {
    return gulp.src(scssSrc)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.stream());
});

gulp.task('clean', () => {
    return gulp.src('dist/css/')
        .pipe(clean());
});

gulp.task('watch', () => {
    browserSync.init({
        proxy: "localhost:3000"
    });

    gulp.watch(scssSrc, ['scss']);
});

gulp.task('default', ['clean'], () => {
    return gulp.start(['scss']);
});

