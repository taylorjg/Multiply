const gulp = require('gulp');
const runSequence = require('run-sequence');
const del = require('del');
const babel = require('gulp-babel');
const jasmineNode = require('gulp-jasmine-node');

const PATHS = {
    srcs: ['src/**/*.js'],
    specs: ['test/**/*.spec.js'],
    builtSpecs: ['dist/**/*.spec.js'],
    dist: 'dist'
};

PATHS.files = PATHS.srcs.concat(PATHS.specs);

gulp.task('clean', done =>
    del(PATHS.dist, done));

gulp.task('test', _ =>
    gulp.src(PATHS.builtSpecs)
        .pipe(jasmineNode()));

gulp.task('build', _ =>
    gulp.src(PATHS.files)
        .pipe(babel())
        .pipe(gulp.dest(PATHS.dist)));

gulp.task('default', done =>
    runSequence('clean', 'build', 'test', done));
