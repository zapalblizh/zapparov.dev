/**
 * Add Eleventy shortcodes here
 * https://www.11ty.dev/docs/shortcodes/
 */
import path from "path";
import eleventyImage from "@11ty/eleventy-img";
import fs from "fs";

const relativeToInputPath = (inputPath, relativeFilePath) => {
    let split = inputPath.split("/");
    split.pop();

    let relativePath = path.resolve(split.join(path.sep), relativeFilePath);

    if (relativeFilePath.startsWith("/")) {
        relativePath = path.resolve("./src/assets" + relativeFilePath);
    }

    return relativePath;
};

const getSvgContent = function (fileName, classes = '') {
  const relativeFilePath = `./src/assets/svg/${fileName}.svg`;
  let data = fs.readFileSync(relativeFilePath, 'utf8');

  if (classes) {
    // console.log(data);
    data = data.replace("<svg", `<svg class="${classes}"`);
    return data.toString('utf8');
  }
}

export default {
    // Eleventy Image shortcode
    // https://www.11ty.dev/docs/plugins/image/
    image: (eleventyConfig) => {
        eleventyConfig.addAsyncShortcode(
            "image",
            async function imageShortcode(src, alt, widths, classes, sizes) {
                // Full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
                // Warning: Avif can be resource-intensive so take care!
                let formats = ["avif", "webp", "auto"];
                let file = relativeToInputPath(this.page.inputPath, src);
                let metadata = await eleventyImage(file, {
                    widths: widths || ["auto"],
                    formats,
                    // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
                    outputDir: path.join(eleventyConfig.dir.output, "img"),
                });

                if (!alt || !alt.length) {
                    // extract name form filename
                    alt = path.basename(src, path.extname(src));
                }

                let imageAttributes = {
                    alt,
                    sizes,
                    class: classes,
                    loading: "lazy",
                    decoding: "async",
                };

                return eleventyImage.generateHTML(metadata, imageAttributes);
            }
        );
    },

    svg: (eleventyConfig) => {
      eleventyConfig.addShortcode("svg", getSvgContent);
    },

    imagePath: (eleventyConfig) => {},

    year: (eleventyConfig) => {
        eleventyConfig.addShortcode("year", function yearShortcode() {
            return new Date().getFullYear();
        });
    },

    video: (eleventyConfig) => {
        eleventyConfig.addShortcode(
            "video",
            function videoShortcode(src, poster, classes) {
                return `<video class="${classes}" poster="${poster}" controls><source src="${src}" type="video/mp4"></video>`;
            }
        );
    },

    videoImage: (eleventyConfig) => {
        eleventyConfig.addShortcode(
            "videoImage",
            function videoImageShortcode(src, classes = "w-full h-auto") {
                if (src.startsWith("./")) {
                    src = "/videos/" + src.slice(2);
                }
                return `<video class="${classes}" autoplay="" loop="" muted="" playsinlin="" src="${src}"></video>`;
            }
        );
    },
};
