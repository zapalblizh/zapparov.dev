import easyImport from "postcss-easy-import/index.js";
import discardComments from "postcss-discard-comments";
import mergeRules from "postcss-merge-rules";
import twPostcss from "@tailwindcss/postcss";

export default {
  plugins: [
    easyImport,
    twPostcss,
    discardComments({ removeAll: true }),
    mergeRules,
  ],
};
