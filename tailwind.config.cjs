// https://tailwindcss.com/docs/configuration
module.exports = {
  content: [
    "./safelist.txt",
    "./index.php",
    "./app/**/*.php",
    "./resources/**/*.{php,vue,js}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      transparent: "#FFFFFF00",
      black: "#282828",
      gray: "#757373",
      white: "#ffffff",
      "warm-white": "#f9f4ea",
      "green-white": "#eaede2",
      "pink-white": "#fcf0fb",
      "pink-white": "#fcf0fb",
      "red-light": "#f5806a",
      "red-dark": "#fc6e42",
      "teal-bright": "#5ac1ae",
      "teal-light": "#5d98a8",
      "teal-dark": "#3e879f",
      "blue-dark": "#3270a9",
      "blue-light": "#407ccb",
      "green-dark": "#2c5d58",
      "green-light": "#35877d",
      "wellbeing-dark": "#2f6d62",
      "wellbeing-light": "#57c1ad",
      "design-dark": "#a75499",
      "design-light": "#da9bc4",
      "strategy-dark": "#c2873a",
      "strategy-light": "#f7a738",
      orange: "#ffa201",
    },
    fontFamily: {
      sans: ["Karla", "sans-serif"],
      serif: ["Source Serif Pro", "serif"],
    },
    extend: {
      colors: {}, // Extend Tailwind's default colors
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
