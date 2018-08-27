
let gulp = require('gulp');
let sass = require('gulp-sass');


gulp.task('compileSass',function(){
    console.log(666);

    gulp.src('./src/sass/content.scss');

    .pipe(sass({outputStyle:'compact'}))

    .pipe(gulp.dest('./src/css/'))
});


// gulp.task('autoSass',function(){
//     gulp.watch('./src/sass/')
// })