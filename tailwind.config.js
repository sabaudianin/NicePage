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
      },
      animation: {
        bgPulse: "bgPulse 3s infinite",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "1px 1px 2px #000",
        },
        ".text-shadow-lg": {
          textShadow: "4px 4px 8px #000",
        },
        ".text-shadow-fff": {
          textShadow: "4px 4px 8px #fff",
        },
      };
      addUtilities(newUtilities, ["hover", "dark"]);
    }),
  ],
};
