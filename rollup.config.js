import ts from "rollup-plugin-ts";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";
import scss from "rollup-plugin-scss";

const customComponents = {
  input: ["./components/index.ts"],
  output: [
    {
      format: "esm",
      file: pkg.module,
      sourcemap: true,
    },
    {
      format: "cjs",
      file: pkg.main,
      sourcemap: true,
    },
  ],

  plugins: [ts({}), postcss({ sourceMap: true })],
  external: ["react"],
};

const customStyles = {
  input: "./styles/global.scss",
  output: {
    file: "./dist/index",
    format: "esm",
  },
  plugins: [
    scss({
      output: true,
      // Enables/disables generation of source map (default: false)
      sourceMap: true,
      // Prefix global scss. Useful for variables and mixins.
      prefix: `@import "./global.scss";`,
      outputStyle: "compressed",
    }),
  ],
};

const configBundle = [customComponents, customStyles];
export default configBundle;
