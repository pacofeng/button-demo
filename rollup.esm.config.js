import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";
import cleanup from "rollup-plugin-cleanup";

const overrides = {
  compilerOptions: { declaration: true },
  exclude: [
    "src/**/*.test.tsx",
    "src/**/*.stories.tsx",
    "src/**/*.stories.mdx",
    "src/setupTests.ts",
  ],
};

const config = {
  input: "src/index.tsx",
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    typescript({ tsconfigOverride: overrides }),
    excludeDependenciesFromBundle(),
    cleanup(),
  ],
  output: [
    {
      file: "dist/index.es.js",
      format: "es",
    },
  ],
};

export default config;
