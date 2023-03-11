import fs from "fs";
import path from "path";

function getFolder(dir: string): string[] {
  const dirs = fs.readdirSync(dir);
  const filteredDirs = dirs.filter((file) => fs.statSync(path.join(dir, file)).isDirectory());

  return filteredDirs;
}

export default getFolder;
