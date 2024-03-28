/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js,jsx,css}",
    "./src/components/*.{html,js,jsx,css}",
    "./src/pages/*.{html,js,jsx,css}",
    "./src/*.{html,js,jsx,css}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
