import gulp from "gulp";
import eslint from "gulp-eslint-new";

function lint() {
  return gulp
    .src("src/**/*.js")
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format());
}

export default lint;
