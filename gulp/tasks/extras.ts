import gulp from "gulp";

function extras() {
  return gulp
    .src(["src/_locales/**", "src/manifest.json"], {
      base: "src",
    })
    .pipe(gulp.dest("dist"));
}

export default extras;
