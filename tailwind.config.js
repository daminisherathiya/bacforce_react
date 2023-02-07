/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      water: "#DEEFFF",
    },
    backgroundColor: {
      white: "#FFFFFF",
      primary: "#2063F0",
      "primary-hover": "#1A4FC0",
      "primary-click": "#4D82F3",
      secondary: "#1EDB4A",
      "secondary-hover": "#18AF3B",
      "secondary-click": "#4BE26E",
      light: "#F9F9F9", // todo
      dark: "#103278",
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
      dark: "#103278",
    },
    borderColor: {
      gray: "#D0D0D0",
      white: "#FFFFFF",
    },
    boxShadow: {
      DEFAULT: "0px 50px 60px #0000000D",
      sm: "0px 10px 60px #DDE7FBCC",
      md: "0px 50px 60px #3B4F781A",
    },
    extend: {
      screens: {
        xs: "359px",
      },
    },
  },
  plugins: [],
};
