/* eslint @typescript-eslint/no-var-requires: off */

const esbuild = require("esbuild");
const fs = require("fs");

const pkg = require("./package.json");

const jointDependencies = Object.keys(pkg.dependencies).join("$|^");
const dependencyRegex = new RegExp(`^vscode$|^${jointDependencies}$`);

const setExternals = {
  name: "set-externals",
  setup(build) {
    // Set all dependencies as external
    build.onResolve({ filter: dependencyRegex }, (args) => {
      return { path: args.path, external: true };
    });
  },
};

// Empty directory before build
fs.rmdirSync("out", { recursive: true });

esbuild.build({
  entryPoints: ["src/extension.ts"],
  outfile: "out/extension.js",
  platform: "node",
  bundle: true,
  minify: true,
  sourcemap: true,
  plugins: [setExternals],
});
