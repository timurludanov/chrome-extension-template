import fs from "fs";

function readFile (patch: string, isJson: boolean = true): object | string {
  const content = fs.readFileSync(patch, { encoding: "utf-8" });

  if (isJson) {
    const json = JSON.parse(content);
    return json;
  }

  return content;
}

export default readFile;
