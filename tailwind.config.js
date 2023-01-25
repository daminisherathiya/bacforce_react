/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // https://www.color-name.com/
      "white": "#FFFFFF",
      "ghost-white": "#F9F9F9",
      "green-blue": "#0B5CAB",
      "charcoal": "#31384E",
      "black": "#000000",
      "water": "#DEEFFF",
    },
    extend: {
      screens: {
        "3xl": "1920px",
      },
      container: {
        center: true,
        screens: {
          DEFAULT: "1920px",
        },
      },
    },
  },
  plugins: [],
}
