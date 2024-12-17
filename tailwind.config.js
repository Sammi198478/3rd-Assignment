/** @type {import('tailwindcss').Config} */
const {nextui, colors} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg:"#F2F2F2",
        primary:"#1677BD",
        secondary:"#1E1E1E",
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

