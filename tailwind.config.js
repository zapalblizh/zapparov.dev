/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.njk', './src/**/*.md'],
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#3366CC",
            },
          },
        },
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        DEFAULT: "10px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        inherit: "inherit",
        white: "#fff",
        black: "#000",
        carbon: {
          500: "#191919",
          DEFAULT: "#191919",
        },
        skin: {
          500: "#ECE3CA",
          600: "#E5D8B4",
          700: "#ADA17F",
          DEFAULT: "#ECE3CA",
        },
        red: {
          100: "#CF4037"
        },
        pale: {
          500: "#dddddd",
          DEFAULT: "#dddddd"
        }
      },
      aspectRatio: {
        auto: "auto",
        box: "1",
        landscape: "4/3",
        portrait: "3/4",
        video: "16/9",
      },
      maxWidth: {
        "copy-xs": "25ch",
        "copy-sm": "45ch",
        "copy-md": "55ch",
        "copy-lg": "65ch",
        "copy-xl": "75ch",
        "copy-2xl": "85ch",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-safe-area"),
    ({ addComponents, theme }) => {
      addComponents({
        ".container": {
          "@apply px-4 max-w-screen-2xl mx-auto": {},
        },
        ".prose": {
          "@apply max-w-4xl mx-auto text-base md:text-lg dark:text-white dark:prose-h1:text-white": {},
        },
      });
    },
  ],
};
