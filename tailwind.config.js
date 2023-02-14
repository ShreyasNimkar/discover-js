/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlack: { 200: "#282828", 100: "#383838" },

        discoverPink: "#F25185",
        discoverBlue: "#60B3DC",
        discoverYellow: "#FDE12D",
        discoverPurple: "#9629C4",
      },
    },
  },
  plugins: [],
};
