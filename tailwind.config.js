/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";
import safeArea from "tailwindcss-safe-area";

export default {
  content: ['./src/**/*.njk', './src/**/*.md'],
  darkMode: "class",
  theme: {
    extend: {
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
    typography,
    forms,
    aspectRatio,
    safeArea,
    ({ addComponents, theme }) => {
      addComponents({
        ".container": {
          "@apply px-4 max-w-screen-2xl mx-auto": {},
        },
        "[data-theme=light] .prose": {
          "--tw-prose-links": "#06c",
          "--tw-prose-quote-borders": "#06c",
          "--tw-prose-headings": "#222",
        },
        "[data-theme=dark] .prose": {
          "--tw-prose-links": "#3366cc",
          "--tw-prose-quote-borders": "#3366cc",
          "--tw-prose-quotes": "#f2f2f2",
          "--tw-prose-body": "#f2f2f2",
          "--tw-prose-headings": "#f2f2f2",
          "--tw-prose-bold": "#f2f2f2",
        },
        ".prose": {
          "@apply text-base md:text-lg": {},
        },
        ".prose p": {
          "@apply text-pretty": {},
        },
        '.prose :where(a):not(:where([class~="not-prose"] *))': {
          textDecoration: "none",
          "@apply hover:underline": {},
        },
      });
    },
  ],
};
