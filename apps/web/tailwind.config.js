/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      nm: '0px',
      xs: '370px',
    },
    colors: {
      ...colors,
      grey: "#83868C",
    },
  },
  plugins: [],
};
