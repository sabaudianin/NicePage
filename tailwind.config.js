/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", //.files where tailwind will be using class
  ],
  theme: {
    //Custom class
    extend: {
      fontFamily: {
        rubik: ["Rubik Vinyl", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xxs: [".5rem"],
      },
      maxWidth: {
        "custom-3xl": "2048px",
      },
      boxShadow: {
        light: "4px 4px 6px rgba(0, 0, 0, 0.1)",
        dark: "4px 4px 6px rgba(254, 249, 249, 0.1)",
      },
      //Animations
      keyframes: {
        bgPulse: {
          "0%": { color: "#fff" },
          "50%": { color: "#000" },
          "100%": { color: "#fff)" },
        },
        iconCarusel: {
          "0%": { transform: "translateX(0%)" },
          "33%": { transform: "translateX(-25%)" },
          "66%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-25%)" },
        },
      },
      animation: {
        bgPulse: "bgPulse 3s infinite",
        iconCarusel: "iconCarusel 60s linear infinite",
      },
    },
  },
  //custom class not supported by tailwind, + import plugin (on top)
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "1px 1px 1px #000",
        },
        ".text-shadow-lg": {
          textShadow: "2px 2px 8px #000",
        },
        ".text-shadow-fff": {
          textShadow: "2px 2px 8px #fff",
        },
      };
      addUtilities(newUtilities, ["hover", "dark"]);
    }),
  ],
};
