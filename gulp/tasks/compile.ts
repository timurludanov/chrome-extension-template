import { TaskFunctionCallback } from "gulp";
import util from "gulp-util";
import webpack, { Configuration, Stats } from "webpack";
import isProduction from "../common/isProduction";
import vars from "../common/variables";
const webpackConfig = require("../../webpack.config.js");

function compile(done: TaskFunctionCallback): void {
  const onError = (error: Error | string) => {
    const formatedError = new util.PluginError("webpack", error);
    done(formatedError);
  };

  const onComplete = (error: Error | undefined, stats: Stats | undefined) => {
    if (error) {
      onError(error);
    } else if (stats?.hasErrors()) {
      onError(stats.toString(vars.statsLog));
    } else {
      done();
    }
  };

  if (isProduction()) {
    webpackConfig.mode = "production";
  } else {
    webpackConfig.mode = "development";
    webpackConfig.devtool = "inline-source-map";
  }

  webpack(webpackConfig as Configuration, onComplete);
}

export default compile;
