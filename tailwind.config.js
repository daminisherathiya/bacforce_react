/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // https://www.color-name.com/
      white: "#FFFFFF",
      "ghost-white": "#F9F9F9",
      "green-blue": "#0B5CAB",
      charcoal: "#31384E",
      black: "#000000",
      water: "#DEEFFF",
      green: "#1EDB4A",
    },
    fontFamily: {
      HarmoniaSans: ["HarmoniaSans", ...defaultTheme.fontFamily.sans],
    },
    fontWeight: {
      light: "300",
      normal: "400",
      semibold: "600",
      bold: "700",
      black: "900",
    },
    textColor: {
      white: "#FFFFFF",
      primary: "#161616",
      secondary: "#454545",
      "dark-blue": "#103278",
    },
    borderColor: {
      gray: "#D0D0D0",
    },
    boxShadow: {
      DEFAULT: "0px 50px 60px #0000000D",
      sm: "0px 10px 60px #DDE7FBCC",
    },
    extend: {
      screens: {
        xs: "359px",
      },
    },
  },
  plugins: [],
};
