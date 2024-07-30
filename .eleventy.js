import {minify} from "html-minifier";

import shortcodes from "./cfg/shortcodes";
import plugins from "./cfg/plugins";
import filters from "./cfg/filters";
import {DateTime} from "luxon";
import fs from "fs";

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

  const getSvgContent = function (fileName, classes = '') {
    const relativeFilePath = `./src/assets/svg/${fileName}.svg`;
    let data = fs.readFileSync(relativeFilePath,
      function (err, contents) {
        if (err) return err
        return contents
      });

    if (classes) {
      data = data.replace("<svg", `<svg class="${classes}"`)
    }

    return data.toString('utf8');
  }

  eleventyConfig.addShortcode("svg", getSvgContent);

  /**
   * HTML Minifier for production builds
   */
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

  eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
    return DateTime.fromJSDate(new Date(dateObj), {zone: zone || "utc"}).toFormat(format || "dd LLLL, yyyy");
  });

  return {
    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ["md", "njk"],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: "njk",

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: "njk",

    // These are all optional:
    dir: {
      input: "./src/content", // default: "."
      output: "./_site", // default: "_site"
      includes: "../_includes", // default: "_includes"
      layouts: "../_includes/layouts", // default: "_layouts"
      data: "../_data", // default: "_data"
    },

    // -----------------------------------------------------------------
    // Optional items:
    // -----------------------------------------------------------------

    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

    // When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
    // it will transform any absolute URLs in your HTML to include this
    // folder name and does **not** affect where things go in the output folder.
    pathPrefix: "/",
  };
}
