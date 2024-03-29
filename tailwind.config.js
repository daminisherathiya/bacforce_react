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
      secondary: "#09BC8A",
      "secondary-hover": "#07966e",
      "secondary-click": "#3ac9a1",
      dark: "#103278",
      "light-blue": "#F1F5FE",
    },
    fontFamily: {
      HarmoniaSans: ["HarmoniaSans", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      base: ["max(14px,0.833vw)", { lineHeight: "max(24px,1.250vw)" }], // 16px/24px
      lg: ["max(16px,0.938vw)", { lineHeight: "max(24px,1.458vw)" }], // 18px/28px
      xl: ["max(16px,1.042vw)", { lineHeight: "max(24px,1.667vw)" }], // 20px/32px
      "3xl": ["max(18px,1.458vw)", { lineHeight: "max(28px,1.875vw)" }], // 28px/36px
      "4xl": ["max(20px,1.875vw)", { lineHeight: "max(32px,2.292vw)" }], // 36px/44px
      "6xl": ["max(25px,3.333vw)", { lineHeight: "max(36px,3.958vw)" }], // 64px/76px
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
      "light-blue": "#2063F0",
      dark: "#103278",
      gray: "#737373",
      "light-gray": "A2A2A2",
    },
    borderWidth: {
      DEFAULT: "max(1px,0.052vw)",
      0: "0px",
      2: "max(2px,0.104vw)",
      4: "max(4px,0.208vw)",
      8: "max(8px,0.417vw)",
    },
    borderColor: {
      gray: "#D0D0D0",
      white: "#FFFFFF",
      "light-blue": "#2063F0",
      secondary: "#09BC8A",
      primary: "#2063F0",
    },
    boxShadow: {
      DEFAULT: "0px max(16px,0.833vw) max(32px,1.667vw) #1616161A",
      blue: "0px max(16px,0.833vw) max(32px,1.667vw) #2063F01A",
      none: "0 0 #0000",
    },
    spacing: {
      px: "1px", // 1px
      0: "0px", // 0px
      0.5: "max(0px,0.104vw)", // 2px
      1: "max(2px,0.208vw)", // 4px
      1.5: "max(4px,0.313vw)", // 6px
      2: "max(6px,0.417vw)", // 8px
      2.5: "max(8px,0.521vw)", // 10px
      3: "max(10px,0.625vw)", // 12px
      3.5: "max(12px,0.729vw)", // 14px
      4: "max(10px,0.833vw)", // 16px
      5: "max(10px,1.042vw)", // 20px
      6: "max(14px,1.25vw)", // 24px
      7: "max(26px,1.458vw)", // 28px
      8: "max(20px,1.667vw)", // 32px
      9: "max(20px,1.875vw)", // 36px
      10: "max(20px,2.083vw)", // 40px
      11: "max(40px,2.292vw)", // 44px
      12: "max(20px,2.5vw)", // 48px
      14: "max(20px,2.917vw)", // 56px
      16: "max(20px,3.333vw)", // 64px
      20: "max(35px,4.167vw)", // 80px
      24: "max(20px,5vw)", // 96px
      28: "max(40px,5.833vw)", // 112px
      32: "max(112px,6.667vw)", // 128px
      36: "max(128px,7.5vw)", // 144px
      40: "max(60px,8.333vw)", // 160px
      44: "max(100px,9.167vw)", // 176px
      48: "max(100px,10vw)", // 192px
      52: "max(152px,10.833vw)", // 208px
      56: "max(208px,11.667vw)", // 224px
      60: "max(104px,12.5vw)", // 240px
      64: "max(100px,13.333vw)", // 256px
      72: "max(56px,15vw)", // 288px
      80: "max(192px,16.667vw)", // 320px
      96: "max(320px,20vw)", // 384px
    },
    extend: {
      screens: {
        xs: "359px",
      },
      backgroundImage: {
        footer: "url('../../public/images/footer/bg.png')",
        black: "url('../../public/images/black-bg.jpg')",
      },
    },
  },
  plugins: [],
};
