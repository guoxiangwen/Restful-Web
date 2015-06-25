/**
 * Created by guoxiangwen on 2015/6/12.
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');//js语法检查
var concat = require('gulp-concat');//js合并
var uglify = require('gulp-uglify');//js压缩,美化
var rename = require('gulp-rename');

// 语法检查
gulp.task('jshint', function () {
    return gulp.src('public/app/module/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
// 合并文件之后压缩代码
gulp.task('minify', function () {
    return gulp.src('public/app/module/**/*.js')
        .pipe(concat('login.js'))
        .pipe(gulp.dest('public/app/build'))
        //.pipe(uglify())
        //.pipe(rename('login.min.js'))
        .pipe(gulp.dest('public/app/build'))
});
// 监视文件的变化
gulp.task('watch', function () {
    gulp.watch('public/app/module/login/*.js', ['jshint', 'minify']);
});


gulp.task('default', ['jshint', 'minify', 'watch']);