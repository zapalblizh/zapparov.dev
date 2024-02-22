/** @type {import('tailwindcss').Config} */

module.exports = {
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
          700: "#D9C29A",
          DEFAULT: "#ECE3CA",
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
          "@apply max-w-4xl mx-auto": {},
        },
      });
    },
  ],
};
