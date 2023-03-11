import del from "del";
import { TaskFunctionCallback } from "gulp";

function clean(done: TaskFunctionCallback): void {
  del([".tmp", "dist"]);
  done();
}

export default clean;
