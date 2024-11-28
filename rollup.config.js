import typescript from "@rollup/plugin-typescript";

export default {
  input: "components/index.ts",
  output: {
    file: "dist/index.js",
    format: "esm",
  },
  plugins: [typescript()],
};
