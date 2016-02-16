/* jshint: node */

var gulp = require('gulp'),
    del = require('del'),
    tsc = require('gulp-typescript');

var SOURCE_DIR = 'src';
var TEMP_DIR = '.temp';
var OUTPUT_DIR = 'dist';

var tsConfig = {
    "typescript": require('typescript'),
    "outDir": gulp.dest(TEMP_DIR + '/scripts').path
};
var tsProject = tsc.createProject('./tsconfig.json', tsConfig);

gulp.task('tsc', function() {
    var tsResult = gulp.src([
        './typings/tsd.d.ts',
        SOURCE_DIR + '/scripts/*.tsx',
        SOURCE_DIR + '/scripts/*.ts'
    ])
        .pipe(tsc(tsProject));

    tsResult
        .on("error", function (e) {
            throw e;
        });

    return tsResult.js.pipe(gulp.dest(TEMP_DIR + '/scripts'));
});

gulp.task('clean', function(cb) {
    del([TEMP_DIR + '/*', OUTPUT_DIR + '/*']).then(() => cb())
});

gulp.task('default', ['clean'], function() {
    gulp.start(['tsc']);
});
