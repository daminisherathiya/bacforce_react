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
    fontSize: {
      base: ['max(16px,0.833vw)', { lineHeight: 'max(18px,1.042vw)' }], // 16px/20px
      lg: ['max(16px,0.938vw)', { lineHeight: 'max(20px,1.458vw)' }], // 18px/28px
      xl: ['max(18px,1.042vw)', { lineHeight: 'max(28px,1.667vw)' }], // 20px/32px
      '3xl': ['max(20px,1.458vw)', { lineHeight: 'max(32px,1.875vw)' }], // 28px/36px
      '4xl': ['max(28px,1.875vw)', { lineHeight: 'max(36px,2.292vw)' }], // 36px/44px
      '6xl': ['max(36px,3.333vw)', { lineHeight: 'max(44px,3.958vw)' }], // 64px/76px
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
      DEFAULT: "0px 16px 32px #1616161A",
    },
    extend: {
      screens: {
        xs: "359px",
      },
    },
  },
  plugins: [],
};
