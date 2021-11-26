/* eslint-disable global-require */
module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#dcf4ff',
          DEFAULT: '#61A0DA',
          dark: '#447f99',
          secondary: '#C6ADE4',
        },
      },
      fontFamily: {
        headline: ['Lexend Deca', 'serif'],
        description: ['Open Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
};
