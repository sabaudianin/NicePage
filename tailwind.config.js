/** @type {import('tailwindcss').Config} */
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
          "0%": { background: "rgb(240, 204, 173)" },
          "50%": { background: "rgb(255, 60, 0)" },
          "100%": { background: "rgb(238, 198, 160)" },
        },
      },
      animation: {
        bgPulse: "bgPulse 1.5s infinite",
      },
    },
  },
  plugins: [],
};
