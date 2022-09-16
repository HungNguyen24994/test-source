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
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1400px',
      'min-sm': {min: '480px'},
      'max-sm': {max: '480px'},
      'min-md': { min: '769px' },
      'max-md': { max: '768px' },
      'min-lg': { min: '1400px' },
    },
    colors: {
      ...colors,
      dark: {
        500: "#010101",
        200: "#1B1D1C",
        100: "#3B3E3C",
      },
      white: {
        200: "#EDEDED",
      },
      danger: "#FF0033",
      inspire: "#371BE7",
      grey: "#83868C",
    },
  },
  plugins: [],
};
