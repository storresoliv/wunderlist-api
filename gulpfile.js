'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const srcPaths = {
  js: './src/index.js'
};

const buildPaths = {
  js: 'build/'
};

gulp.task('js', () => {
  gulp.src(srcPaths.js)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename("index.js"))
    .pipe(rename({
	    suffix: ".min"
  	}))
    .pipe(gulp.dest(buildPaths.js));
});

gulp.task('watch', () => {
  gulp.watch(srcPaths.js, ['js']);
});


gulp.task('default', ['js', 'watch']);
