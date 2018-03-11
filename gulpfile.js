const gulp = require('gulp'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    merge = require('merge-stream'),
    browserSync = require('browser-sync').create();

let src = {
    scss: [
        'src/scss/**/*.scss'
    ],
    css: [
        'src/fonts/HelveticaNeueCyr/css/*.css'
    ],
    images: [
        'src/images/**/*'
    ],
    fonts: [
        'src/fonts/HelveticaNeueCyr/fonts/*'
    ]
}, dest = {
    css: 'dist/css',
    images: 'dist/images',
    fonts: 'dist/fonts'
};

gulp.task('scss', () => {
    let cssStream, scssStream;

    cssStream = gulp.src(src.css);

    scssStream = gulp.src(src.scss)
        .pipe(sass({
            includePaths: ['node_modules/bootstrap/scss']
        }).on('error', sass.logError));

    return merge(cssStream, scssStream)
        .pipe(autoprefixer())
        .pipe(csso())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(dest.css))
        .pipe(browserSync.stream());
});

gulp.task('images', () => {
    return gulp.src(src.images)
        .pipe(gulp.dest(dest.images));
});

gulp.task('fonts', () => {
    return gulp.src(src.fonts)
        .pipe(gulp.dest(dest.fonts));
});

gulp.task('clean', () => {
    return gulp.src([
        dest.css,
        dest.images,
        dest.fonts
    ]).pipe(clean());
});

gulp.task('watch', ['default'], () => {
    browserSync.init({
        proxy: "localhost:3000"
    });

    gulp.watch(src.scss, ['scss']);
    gulp.watch(src.images, ['images']).on('change', browserSync.reload);
});

gulp.task('default', ['clean'], () => {
    return gulp.start(['scss', 'images', 'fonts']);
});

