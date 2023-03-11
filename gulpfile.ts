import { task, series, parallel } from "gulp";
import taskClean from "./gulp/tasks/clean";
import taskCompile from "./gulp/tasks/compile";
import taskExtras from "./gulp/tasks/extras";
import taskHtml from "./gulp/tasks/html";
import taskImages from "./gulp/tasks/images";
import taskPack from "./gulp/tasks/pack";
import taskLint from "./gulp/tasks/lint";
import taskSize from "./gulp/tasks/size";
import taskVersion from "./gulp/tasks/version";

task("extras", taskExtras);
task("lint", taskLint);
task("images", taskImages);
task("html", taskHtml);
task("compile", taskCompile);
task("clean", taskClean);
task("size", taskSize);
task("pack", taskPack);

task("version:major", taskVersion.major);
task("version:minor", taskVersion.minor);
task("version:patch", taskVersion.patch);
task("version:set-tag", taskVersion.setTag);

task("build:dev", series("clean", "compile", "extras", parallel("html", "images"), "size"));
task(
  "build",
  series("lint", "clean", "compile", "extras", parallel("html", "images"), "pack", "size")
);
