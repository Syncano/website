const gulp = require('gulp');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const autoprefixer = require('gulp-autoprefixer');
const headerfooter = require('gulp-headerfooter');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const browserify = require('browserify');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const beep = require('beepbeep');
const notify = require('gulp-notify');
const preprocess = require("gulp-preprocess");

const errorHandler = r => {
	notify.onError( '\n\n❌  ===> ERROR: <%= error.message %>\n' )( r );
	beep();
};

gulp.task('runBrowserify', function() {
  // Single entry point to browserify
  var entry = browserify({
    //do your config here
    entries: ['./dist/js/app.js'],
    global: true,
    debug: true
  });

  return entry.bundle()
    .pipe(source('app.js')) //this converts to stream
    .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
   // .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
});



gulp.task('assets', function() {
  return gulp.src('./app/assets/**/*').pipe(gulp.dest('./dist/assets/'));
});

gulp.task('vendor', function() {
  return gulp.src('./app/vendor/glorious-demo/dist/*').pipe(gulp.dest('./dist/vendor/'));
});

gulp.task('scripts', function() {
  return gulp
    .src('app/js/**/*')
		.pipe( plumber( errorHandler ) )
    .pipe(
      babel({
        presets: ['@babel/preset-env']
      })
    )
    //.pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('sass', function() {
  return gulp
    .src('./app/scss/main.scss')
		.pipe( plumber( () => {	notify.onError( '\n\n❌  ===> SASS ERROR %>\n' ) }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('html', function() {
  return gulp
    .src('./app/content/*.html')
    .pipe(headerfooter.header('./app/partials/header.html'))
    .pipe(headerfooter.footer('./app/partials/footer.html'))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(preprocess())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('serve', gulp.series('sass', 'html', 'scripts', 'runBrowserify', 'assets', 'vendor', function() {
  browserSync.init({
    server: './dist',
    open: true // set to false to disable browser autostart
  });
  gulp.watch('app/scss/**/*', gulp.series('sass'));
  gulp.watch('app/content/*.html', gulp.series('html'));
  gulp.watch('app/partials/*.html', gulp.series('html'));
  gulp.watch('app/js/**/*.js',  gulp.series('scripts'));
  gulp.watch('app/assets/**/*', gulp.series('assets'));
  gulp.watch('app/vendor/glorious-demo/dist/**/*', gulp.series('vendor'));
  gulp.watch('dist/*.html').on('change', browserSync.reload);
  gulp.watch('dist/js/*.js').on('change', browserSync.reload);
}));

gulp.task('build', gulp.series('sass', 'html' ,'scripts', 'runBrowserify', 'assets', 'vendor'));
gulp.task('default', gulp.series('serve'));





// gulp.task('assets', function () {
//   return gulp.src('./app/assets/**/*')
//     .pipe(gulp.dest('./dist/assets/'));
// });

// gulp.task('scripts', function () {
//   gulp.src('app/js/app.js')
//     .pipe(browserify())
//     .pipe(uglify())
//     .pipe(gulp.dest('./dist/js'))
// });

// gulp.task('sass', function () {
//   return gulp.src('./app/scss/main.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(autoprefixer())
//     .pipe(gulp.dest('./dist/css'))
//     .pipe(browserSync.stream());
// });

// gulp.task('html', function () {
//   return gulp.src('./app/content/*.html')
//     .pipe(headerfooter.header('./app/partials/header.html'))
//     .pipe(headerfooter.footer('./app/partials/footer.html'))
//     .pipe(preprocess())
//     .pipe(gulp.dest('./dist/'));
// });

// gulp.task('build', ['sass', 'html', 'scripts', 'assets']);

// gulp.task('serve', ['sass', 'html', 'scripts', 'assets'], function () {
//   browserSync.init({
//     server: "./dist"
//   });
//   gulp.watch("app/scss/*.scss", ['sass']);
//   gulp.watch("app/content/*.html", ['html']);
//   gulp.watch("app/partials/*.html", ['html']);
//   gulp.watch("app/js/*.js", ['scripts']);
//   gulp.watch("app/assets/**/*", ['assets']);
//   gulp.watch("dist/*.html").on('change', browserSync.reload);
//   gulp.watch("dist/js/*.js").on('change', browserSync.reload);
// });

// gulp.task('default', ['serve']);
