var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    plumber     = require('gulp-plumber'),

    // stylus
    stylus      = require('gulp-stylus'),
    rupture     = require('rupture'),
    prefixer    = require('autoprefixer-stylus'),
    nib         = require('nib');

var sass = require('gulp-sass');

gulp.task('sass-styles', function() {
  gulp.src('assets/styles/sass/style.scss')
  .pipe(plumber())
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('_includes'))
  .pipe(gulp.dest('assets/styles'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('styles', function() {
    return gulp.src('assets/styles/main.styl')
        .pipe(plumber())
        .pipe(stylus({
            use:[prefixer(), rupture(), nib()],
			compress: false
        }))
        .pipe(gulp.dest('_site/assets/styles'))
        .pipe(gulp.dest('_includes'))
        .pipe(browserSync.reload({stream: true}))
        .pipe(gulp.dest('assets/styles'));
});
