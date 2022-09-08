const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyle() {
    return src('./index.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
}

function watchTasks() {
    watch(['./index.scss'], buildStyle);
}
exports.default = series(buildStyle, watchTasks) 