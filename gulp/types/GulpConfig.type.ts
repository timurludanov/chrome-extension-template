export interface StatLog {
  colors: boolean;
  hash: boolean;
  timings: boolean;
  chunks: boolean;
  chunkModules: boolean;
  modules: boolean;
  children: boolean;
  version: boolean;
  cached: boolean;
  cachedAssets: boolean;
  reasons: boolean;
  source: boolean;
  errorDetails: boolean;
}

export interface GulpConfig {
  statsLog: StatLog;
}
