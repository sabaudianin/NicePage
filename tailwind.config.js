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
    },
  },
  plugins: [],
};
