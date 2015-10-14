var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var notify = require('gulp-notify');
var path = require('path');

//  Styles
gulp.task('css', function() {
    gulp.src(['assets/less/*.less'])
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 8', 'ie 9'],
            cascade: false
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('./assets/css/'))
        .on('error', notify.onError({
            message: 'Error compiling CSS',
            title: '<%= error.message %>',
            sound: 'Funk',
        }))
        .on('error', function (err) {
            console.log('Error compiling CSS: ', err);
        })
        .pipe(notify({
          title: 'Successfully compiled CSS',
          message: 'All .less files were successfully compiled into CSS',
          sound: false,
          contentImage: path.join(__dirname, 'vendor/nailsapp/module-asset/assets/img/nails/icon/icon@2x.png'),
          icon: false,
          onLast: true
        }));
});

//  JS
gulp.task('js', function() {
    gulp.src(['assets/js/*.js', '!assets/js/*.min.js', '!assets/js/*.min.js.map'])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./', {includeContent: false}))
        .pipe(gulp.dest('./assets/js/'))
        .on('error', notify.onError({
            message: 'Error compiling JS',
            title: '<%= error.message %>',
            sound: 'Funk',
            contentImage: path.join(__dirname, 'vendor/nailsapp/module-asset/assets/img/nails/icon/icon@2x.png'),
            icon: false,
            onLast: true
        }))
        .on('error', function (err) {
            console.log('Error compiling JS: ', err);
        })
        .pipe(notify({
            title: 'Successfully compiled JS',
            message: 'All .js files were successfully minified and sourcemaps generated',
            sound: false,
            contentImage: path.join(__dirname, 'vendor/nailsapp/module-asset/assets/img/nails/icon/icon@2x.png'),
            icon: false,
            onLast: true
        }));
});

//  Watches for changes in JS or less files and executes other tasks
gulp.task('default', function() {
    gulp.watch('assets/less/**/*.less',['css']);
    gulp.watch('assets/js/**/*.js',['js']);
});

//  Builds both CSS and JS
gulp.task('build', function() {
    runSequence(['css', 'js']);
});
