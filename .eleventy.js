import {minify} from "html-minifier-terser";

import shortcodes from "./cfg/shortcodes.js";
import plugins from "./cfg/plugins.js";
import filters from "./cfg/filters.js";

export default async function (eleventyConfig) {
  Object.keys(plugins).forEach((pluginName) => {
    plugins[pluginName](eleventyConfig);
  });

  Object.keys(shortcodes).forEach((shortcodeName) => {
    shortcodes[shortcodeName](eleventyConfig);
  });

  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  // Copy contents of the `public` folder to the output folder
  eleventyConfig.addPassthroughCopy({
    "./src/public/": "/",
  });

  // HTML Minifier for production builds
  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_ENV === "production" &&
      this.page.outputPath &&
      this.page.outputPath.endsWith(".html")
    ) {
      return minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
    }

    return content
  })

  return {
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "./src/content", // default: "."
      output: "./_site", // default: "_site"
      includes: "../_includes", // default: "_includes"
      layouts: "../_includes/layouts", // default: "_layouts"
      data: "../_data", // default: "_data"
    },
    pathPrefix: "/",
  };
}
