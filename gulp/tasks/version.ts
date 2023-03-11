import gulp from "gulp";
import shell from "gulp-shell";
import jsonEditor from "gulp-json-editor";
import readVersion from "../common/readVersion";
import { Manifest } from "../types/Manifest.type";

function changeVersion (vparts: number[]): void {
  const version = vparts.join(".");

  gulp
    .src(["src/manifest.json"])
    .pipe(
      jsonEditor((json: Manifest) => {
        const cjson = { ...json };
        cjson.version = version;
        return cjson;
      })
    )
    .pipe(gulp.dest("src"))
    .pipe(
      shell([
        "git add .",
        `git commit -m "Change the version number to ${version}"`,
        "git push origin HEAD",
      ])
    );
}

export default {
  major() {
    const version = readVersion();

    version[0] += 1;
    version[1] = 0;
    version[2] = 0;

    changeVersion(version);
  },
  minor() {
    const version = readVersion();

    version[1] += 1;
    version[2] = 0;

    changeVersion(version);
  },
  patch() {
    const version = readVersion();

    version[2] += 1;

    changeVersion(version);
  },
  setTag() {
    const version = readVersion().join(".");
    gulp
      .src(["src/manifest.json"])
      .pipe(shell([`git tag -a v${version} -m "version ${version}"`, "git push origin --tags"]));
  },
};
