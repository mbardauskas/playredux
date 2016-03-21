/* jshint: node */

var gulp = require('gulp'),
    del = require('del'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    webpack = require("webpack"),
    util = require('gulp-util'),
    tsc = require('gulp-typescript');

var SOURCE_DIR = 'src';
var TEMP_DIR = '.temp';
var OUTPUT_DIR = 'dist';

var APP_ROOT = "/";
if(util.env['appRoot']) {
    APP_ROOT += util.env['appRoot'];
}
if(!/\/$/.test(APP_ROOT)) {
    APP_ROOT += '/';
}

var BUILD_TYPES = {
    LOCAL: 1,
    TEST: 2,
    PRODUCTION: 3,
    DEFAULT: 3
};

var BUILD_MODE;
var ENV_MODE = util.env['mode'];

if(!!ENV_MODE) {
    switch(ENV_MODE) {
        case 'local':
            BUILD_MODE = BUILD_TYPES.LOCAL;
            break;

        case 'test':
            BUILD_MODE = BUILD_TYPES.TEST;
            break;

        case 'production':
            BUILD_MODE = BUILD_TYPES.PRODUCTION;
            break;

        default:
            throw new Error('Supported modes: local, test, production');
            break;
    }
} else {
    BUILD_MODE = BUILD_TYPES.DEFAULT;
}

var tsConfig = {
    "typescript": require('typescript'),
    "outDir": gulp.dest(TEMP_DIR + '/scripts').path
};
var tsProject = tsc.createProject('./tsconfig.json', tsConfig);

gulp.task('tsc', function() {
    var tsResult = gulp.src([
        './typings/tsd.d.ts',
        SOURCE_DIR + '/scripts/**/*.tsx',
        SOURCE_DIR + '/scripts/**/*.ts'
    ])
        .pipe(tsc(tsProject));

    tsResult
        .on("error", function (e) {
            throw e;
        });

    return tsResult.js.pipe(gulp.dest(TEMP_DIR + '/scripts'));
});

gulp.task('tpl', function() {
    return gulp.src(SOURCE_DIR + '/index.tpl')
        .pipe(template({
            appRoot: APP_ROOT,
            local: BUILD_MODE !== BUILD_TYPES.PRODUCTION
        }))
        .pipe(rename({extname: '.html'}))
        .pipe(gulp.dest(TEMP_DIR))
        .pipe(gulp.dest(OUTPUT_DIR))
});

gulp.task("webpack", ['tsc'], function(callback) {
    // @TODO: uglify JS for production build
    var dir = BUILD_MODE === BUILD_TYPES.PRODUCTION ? OUTPUT_DIR : TEMP_DIR;
    var outputPath = __dirname + '/' + dir + '/scripts/';
    webpack({
        entry: __dirname + '/' + TEMP_DIR + '/scripts/bootstrapper',
        output: {
            path: outputPath,
            publicPath: APP_ROOT + '/scripts/',
            filename: '[name].bundle.js'
        }
    }, function(err, stats) {
        if(err) throw new util.PluginError("webpack", err);
        util.log("[webpack]", stats.toString({
            // output options
            chunks: false
        }));
        callback();
    });
});

gulp.task('clean', function(cb) {
    del([TEMP_DIR + '/*', OUTPUT_DIR + '/*']).then(() => cb())
});

gulp.task('default', ['clean'], function() {
    gulp.start(['tsc', 'webpack', 'tpl']);
});
