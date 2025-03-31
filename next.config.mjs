import { build } from "velite";
import withPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache.js";

const nextConfig = {};

const nextConfigWithPWA = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
})(nextConfig);

class VeliteWebpackPlugin {
  static started = false;
  constructor(options = {}) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === "development";
      this.options.watch = this.options.watch ?? dev;
      this.options.clean = this.options.clean ?? !dev;
      await build(this.options);
    });
  }
}

nextConfigWithPWA.webpack = (config) => {
  config.plugins.push(new VeliteWebpackPlugin());
  return config;
};

export default nextConfigWithPWA;
