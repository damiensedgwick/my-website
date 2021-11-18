module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
