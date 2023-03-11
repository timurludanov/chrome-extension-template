import imagemin from "gulp-imagemin";
import gulp, { parallel } from "gulp";

function images() {
  return gulp
    .src("src/assets/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/assets/images"));
}

function icons() {
  return gulp
    .src("src/assets/icons/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/assets/icons"));
}

export default parallel(images, icons)
