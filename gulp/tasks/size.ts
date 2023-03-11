import gulp from "gulp";
import gulpSize from "gulp-size";

function size() {
  return gulp.src("dist/**/*").pipe(gulpSize({ title: "build" }));
}

export default size;
