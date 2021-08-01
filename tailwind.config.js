module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        custom_gray: {
          darkest: "#1f2123",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
