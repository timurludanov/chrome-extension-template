import gulp from "gulp";
import useref from "gulp-useref";
import $if from "gulp-if";
import flatten from "gulp-flatten";
import htmlmin from "gulp-htmlmin";

function html() {
  return gulp
    .src("src/**/*.html")
    .pipe(useref({ searchPath: ["src", "."] }))
    .pipe($if("*.html", htmlmin({ removeComments: true, collapseWhitespace: true })))
    .pipe(flatten())
    .pipe(gulp.dest("dist"));
}

export default html;
