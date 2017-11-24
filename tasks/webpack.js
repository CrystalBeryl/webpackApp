
'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var fs = require('fs');

// Config
/*var webpackConfigH5 = require('../webpack.config-H5');
var webpackConfigConsole = require('../webpack.config-console');
var webpackConfigStub = require('../webpack.config-stub');

var compilerH5 = webpack(webpackConfigH5);
var compilerConsole = webpack(webpackConfigConsole);
var compilerStub = webpack(webpackConfigStub);*/

var webpackConfig = require('../webpack.config');

var compiler = webpack(webpackConfig);

gulp.task('build-test', function () {
    compiler.run(function (err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
    });
});

/*
gulp.task('build-H5', function () {
  compilerH5.run(function (err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
  });
});

gulp.task('build-Console', function () {

  compilerConsole.run(function (err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
  });
});

gulp.task('build-Stub', function () {
  compilerStub.run(function (err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
  });
});
*/

gulp.task('watch', function () {
    gulp.watch('public/src/**/*.jsx', ['build-test']);
    gulp.watch('public/src/**/*.scss', ['build-test']);
    gulp.watch('public/src/**/*.css', ['build-test']);
    gulp.watch('views/*.ejs', ['build-test']);
});

/*gulp.task('watch-H5', function () {
  gulp.watch('public/src/H5/!**!/!*.jsx', ['build-H5']);
  gulp.watch('public/src/H5/!**!/!*.scss', ['build-H5']);
  gulp.watch('public/src/H5/!**!/!*.css', ['build-H5']);
  gulp.watch('views/!**!/!*.ejs', ['build-H5']);
});
gulp.task('watch-Console', function () {
  gulp.watch('public/src/Console/!**!/!*.jsx', ['build-Console']);
  gulp.watch('public/src/Console/!**!/!*.scss', ['build-Console']);
  gulp.watch('public/src/Console/!**!/!*.css', ['build-Console']);
  gulp.watch('views/!**!/!*.ejs', ['build-H5']);
});
gulp.task('watch-Stub', function () {
  gulp.watch('public/src/Stub/!**!/!*.jsx', ['build-Stub']);
  gulp.watch('public/src/Stub/!**!/!*.scss', ['build-Stub']);
  gulp.watch('public/src/Stub/!**!/!*.css', ['build-Stub']);
  gulp.watch('views/!**!/!*.ejs', ['build-Stub']);
});*/
//
// gulp.task('watch-H5', function () {
//   compilerH5.watch(200, function (err, stats) {
//     if(err) throw new gutil.PluginError("webpack", err);
//   });
// });
// gulp.task('watch-Console', function () {
//   compilerConsole.watch(200, function (err, stats) {
//     if(err) throw new gutil.PluginError("webpack", err);
//   });
// });