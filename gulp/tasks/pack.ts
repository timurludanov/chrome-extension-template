import gulp from "gulp";
import zip from "gulp-zip";
import readFile from "../common/readFile";
import { Manifest } from "../types/Manifest.type";

function pack() {
  const manifest = readFile("dist/manifest.json", true) as Manifest;
  const pack = readFile("package.json", true) as { name: boolean };
  const filename = `${pack.name}-${manifest.version}.zip`;

  return gulp.src("dist/**").pipe(zip(filename)).pipe(gulp.dest("packages"));
}

export default pack;
