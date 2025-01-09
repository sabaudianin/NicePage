/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Wskazuje na pliki, w których używasz klasy Tailwind
  ],
  theme: {
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
      keyframes: {
        bgPulse: {
          "0%": { color: "#fff" },
          "50%": { color: "#000" },
          "100%": { color: "#fff)" },
        },
        iconCarusel: {
          "0%": { transform: "translateX(20%)" }, // Start na środku
          "33%": { transform: "translateX(-80%)" }, // Do końca w lewo
          "66%": { transform: "translateX(25%)" }, // Do końca w prawo
          "100%": { transform: "translateX(-100%)" }, // Powrót na środek
        },
      },
      animation: {
        bgPulse: "bgPulse 3s infinite",
        iconCarusel: "iconCarusel 30s linear infinite",
      },
    },
  },
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
