module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {},
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
};
