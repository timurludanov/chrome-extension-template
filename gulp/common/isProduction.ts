function isProduction(): boolean {
  return process.argv.includes("--production");
}

export default isProduction;
