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
    dest: {
        root: 'dist',
        js: 'dist/js',
        images: 'dist/images',
        fonts: 'dist/fonts'
    },
    sass: {
        main: 'scss/style.scss',
        watch: ['scss/style.scss', 'scss/**/*.scss'],
    },
    pug: {
        main: ['pug/*.pug', '!pug/layout.pug'],
        project: ['pug/documents/project*.pug'],
        projectDest: 'dist/documents',
        watch: ['pug/*.pug', 'pug/**/*.pug']
    },
    json: {
        in: ['data/*.json', '!data/data.json'],
        out: 'data/',
    },
    js: {
        main: 'js/main.js',
        navbar: 'js/navbar.js',
        watch: 'js/*',
    }
};
let dataFile = 'data.json';

gulp.task('scss', () => {
    return gulp.src(paths.sass.main)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest(paths.dest.root));
});

gulp.task('pug:main', () => {
    return gulp.src(paths.pug.main)
        .pipe(data(file => {
            return JSON.parse(fs.readFileSync(paths.json.out + dataFile))
        }))
        .pipe(pug())
        .pipe(gulp.dest(paths.dest.root));
});

gulp.task('pug:projects', () => {
    return gulp.src(paths.pug.project)
        .pipe(data(file => {
            return JSON.parse(fs.readFileSync(paths.json.out + dataFile))
        }))
        .pipe(pug())
        .pipe(gulp.dest(paths.pug.projectDest));
});

gulp.task('json', () => {
    return gulp.src(paths.json.in)
        .pipe(merge({
            fileName: dataFile
        }))
        .pipe(gulp.dest(paths.json.out));
});

gulp.task('start-server', () => {
    browserSync.init({
        server: "./dist",
        open: false
    });
});

gulp.task('js:main', () => {
    return gulp.src(paths.js.main)
        .pipe(browserify({
            insertGlobals: true,
        }))
        .pipe(gulp.dest(paths.dest.js))
});

gulp.task('js:navbar', () => {
    return gulp.src(paths.js.navbar)
        .pipe(browserify({
            insertGlobals: true,
        }))
        .pipe(gulp.dest(paths.dest.js))
});

gulp.task('pug', gulp.parallel('pug:main', 'pug:projects'));
gulp.task('js', gulp.parallel('js:main', 'js:navbar'));

gulp.task("default", gulp.series(gulp.series('json', gulp.parallel('scss', 'pug', 'js')), 'start-server'));

gulp.watch(paths.sass.watch, gulp.parallel('scss')).on('change', browserSync.reload);
gulp.watch(paths.pug.watch, gulp.parallel('pug')).on('change', browserSync.reload);
gulp.watch(paths.json.in, gulp.series('json', 'pug')).on('change', browserSync.reload);
gulp.watch(paths.js.watch, gulp.parallel('js')).on('change', browserSync.reload);