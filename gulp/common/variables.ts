import { GulpConfig } from "../types/GulpConfig.type";

const config: GulpConfig = {
  statsLog: {
    colors: true,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: false,
    version: true,
    cached: false,
    cachedAssets: false,
    reasons: false,
    source: false,
    errorDetails: false,
  },
};

export default config;
