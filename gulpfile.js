var gulp = require('gulp'); 
var less = require('gulp-less');
var path = require('path');
var shell = require('shelljs');
var typescript = require('gulp-tsc');
 
gulp.task('compile', function(){
  gulp.src(['app/**/*.ts'])
    .pipe(typescript())
    .pipe(gulp.dest('dest/'))
});

gulp.task('less', function () {
  return gulp.src('./app/index.less')
    .pipe(less())
    .pipe(gulp.dest('./app'));
});

gulp.task('install', function(){
  shell.cd('app');
  shell.exec('npm install');
  shell.exec('bower install');
  return;
});