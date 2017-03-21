/**
 * Created by HelloZcq on 2017/3/18.
 */
var gulp=require('gulp');
var sass=require('gulp-sass');
var connect=require('gulp-connect');
gulp.task('task',function(){
    console.log('aaa')
});
gulp.task('task1',function(){
    console.log('bbb')
});
gulp.task('task2',['task1','task']);
gulp.task('copy-html',function () {
    gulp.src('index.html').pipe(gulp.dest('dist'))
    console.log('bbb')
    //找到该文件把它放在dist文件夹下，这个操作过程都是由管道来完成的，所以必须得写pipe
});
gulp.task('copy-img1',function () {
    gulp.src('src/icons/images/*.jpg').pipe(gulp.dest('dist'));
});
// gulp.task('copy-img',function () {
//     gulp.src(['src/images/**/*.{jpg,png}','!src/images/4.png']).pipe(gulp.dest('dist/imgss'));
//     //找到该文件把它放在dist文件夹下，这个操作过程都是由管道来完成的，所以必须得写pipe
// });
// gulp.task('copy-img',function () {
//     gulp.src(['src/images.{jpg,png}','!src/images/4.png']).pipe(gulp.dest('dist/imgss'));
//     //找到该文件把它放在dist文件夹下，这个操作过程都是由管道来完成的，所-以必须得写pipe
// });
// gulp.task('sass',function () {
//     gulp.src('src/sass/*.sass').pipe(sass()).pipe(gulp.dest('dest/css'));
//     //找到该文件把它放在dist文件夹下，这个操作过程都是由管道来完成的，所以必须得写pipe
// });
gulp.task('watch-html',function () {
    gulp.watch('index.html',['copy-html']);
});
gulp.task('sass',function () {
    gulp.src('src/sass/*.sass').pipe(sass()).pipe(gulp.dest('dist/css'));
});
gulp.task('copy-html',function () {
    gulp.src('index.html').pipe(gulp.dest('new1')).pipe(connect.reload());
});
gulp.task('server',function () {
    connect.server({
        root:'dist',
        livereload:true
    })
});
gulp.task('default',['server','watch-html']);
