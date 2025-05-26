/**
 * Add Eleventy plugins here
 * https://www.11ty.dev/docs/plugins/
 */

import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import pluginSpeculationRules from "eleventy-plugin-speculation-rules";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { eleventyImageTransformPlugin as pluginImageTransform } from "@11ty/eleventy-img";
import pluginSvgContents from "eleventy-plugin-svg-contents";

export default {
  ImageTransform: (eleventyConfig) => {
    // Image optimization: https://www.11ty.dev/docs/plugins/image/#eleventy-transform
    eleventyConfig.addPlugin(pluginImageTransform, {
      // File extensions to process in _site folder
      extensions: "html",

      // Output formats for each image.
      formats: ["avif", "webp", "auto"],

      outputDir: "./_site/img/",
      urlPath: "/img/",

      // optional, output image widths
      widths: ["auto"],

      defaultAttributes: {
        // e.g. <img loading decoding> assigned on the HTML tag will override these values.
        loading: "lazy",
        decoding: "async",
        class: "mx-auto rounded drop-shadow-lg",
      },
    });
  },

  SpeculationRules: (eleventyConfig) => {
    eleventyConfig.addPlugin(pluginSpeculationRules);
  },

  SyntaxHighlight: (eleventyConfig) => {
    eleventyConfig.addPlugin(pluginSyntaxHighlight, {
      preAttributes: { tabindex: 0 },
    });
  },

  EleventyHtmlBase: (eleventyConfig) => {
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  },

  // {{ '/src/assets/images/icons/regular/activity.svg' | svgContents("h-8 w-8 text-amber") | safe }}
  svgContents: function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginSvgContents);
  },
};
