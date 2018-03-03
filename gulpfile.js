'use strict';
 
let gulp = require('gulp');
let sass = require('gulp-sass');
let pug = require('gulp-pug');
let merge = require('gulp-merge-json');
let data = require('gulp-data');
let fs = require('fs');
let browserSync = require('browser-sync').create();
let browserify = require('gulp-browserify');

let paths = {
    dest: './dist',
    sass: './scss/style.scss',
    sassWatch: ['./scss/style.scss', './scss/**/*.scss'],
    pug: ['./pug/*.pug', '!./pug/layout.pug'],
    pugWatch: ['./pug/*.pug', './pug/**/*.pug'],
    pugWithLayout: './pug/*.pug',
    jsonIn: ['./data/*.json', '!./data/data.json'],
    jsonOut: './data/',
    js: './js/main.js',
    jsWatch: './js/*'
};
let dataFile = 'data.json';

gulp.task('scss', () => {
    return gulp.src(paths.sass)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('pug', () => {
    return gulp.src(paths.pug)
        .pipe(data(file => {
            return JSON.parse(fs.readFileSync(paths.jsonOut + dataFile))
        }))
        .pipe(pug())
        .pipe(gulp.dest(paths.dest));
});

gulp.task('json', () => {
    return gulp.src(paths.jsonIn)
        .pipe(merge({
            fileName: dataFile
        }))
        .pipe(gulp.dest(paths.jsonOut));
});

gulp.task('start-server', () => {
    browserSync.init({
        server: "./dist",
        open: false
    });
});

gulp.task('js', () => {
    return gulp.src(paths.js)
        .pipe(browserify({
            insertGlobals : true,
        }))
        .pipe(gulp.dest(paths.dest))
});

gulp.task("default", gulp.series(gulp.series('json', gulp.parallel('scss', 'pug', 'js')), 'start-server'));

gulp.watch(paths.sassWatch, gulp.parallel('scss')).on('change', browserSync.reload);
gulp.watch(paths.pugWatch, gulp.parallel('pug')).on('change', browserSync.reload);
gulp.watch(paths.jsonIn, gulp.series('json', 'pug')).on('change', browserSync.reload);
gulp.watch(paths.jsWatch, gulp.parallel('js')).on('change', browserSync.reload);