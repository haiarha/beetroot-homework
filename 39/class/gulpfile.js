const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');

function cleanStyles() {
  return del(['./css']);
}

function buildStyles() {
  return gulp.src('./sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));
};

exports.watch = function () {
  gulp.watch('./sass/**/*', buildStyles)
}

exports.default = gulp.series(cleanStyles, buildStyles);
