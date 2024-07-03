/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "mint": {
        100: "#A1E2D3",
        200: "#8FD8C7",
        300: "#7DCFBB",
        400: "#6BC5B0",
        500: "#58BBA4",
        600: "#46B298",
        700: "#34A88C"
      },
      "midnight": {
        100: "#5C6876",
        200: "#535E6A",
        300: "#4B545E",
        400: "#424A53",
        500: "#393F47",
        600: "#31353B",
        700: "#282B2f"
      },
      "gray": {
        100: "#AFB4BA",
        200: "#A2A7AE",
        300: "#949AA1",
        400: "#878D95",
        500: "#7A8088",
        600: "#6C737C",
        700: "#5F666F",
      },
      "white": colors.white,
    }
  },
  plugins: [],
}

