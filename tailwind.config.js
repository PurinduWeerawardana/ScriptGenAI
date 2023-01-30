/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPurple: "#F4F3FF",
        textPurple: "#776BFF"
      },
    },
  },
  plugins: [],
});
