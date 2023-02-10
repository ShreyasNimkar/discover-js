/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlack: "#282828",
        discoverPink: "#F25185",
        discoverBlue: "#60B3DC",
        discoverYellow: "#FDE12D",
        discoverPurple: "#9629C4",
      },
    },
  },
  plugins: [],
};
