module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    textColor: {
      dark: "#353b48",
      light: "#f5f6fa",
    },
    colors: {
      dark: "#353b48",
      light: "#f5f6fa",
    },
    fontFamily: {
      jetbrains: '"JetBrains Mono"',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
