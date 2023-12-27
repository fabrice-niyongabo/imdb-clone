/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      "imdb-gold": "#F5C518",
      "imdb-blue": "#5799ef",
      "imdb-black": "#121212",
      "imdb-light-black": "#252525",
      "imdb-light-blue-bg": "#313131",
      "imdb-search-bg": "#222222",
      "imdb-gray-text": "#6d6d6d",
    },
  },
  plugins: [],
};
