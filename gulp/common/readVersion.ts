import { Manifest } from "../types/Manifest.type";
import readFile from "./readFile";

function readVersion(): number[] {
  const manifest = readFile("src/manifest.json") as Manifest;
  const { version } = manifest;
  let versionResult: number[];

  const versionParts: string[] = version.split(".");
  versionResult = versionParts.map((item) => parseInt(item, 10));

  return versionResult;
}

export default readVersion;
