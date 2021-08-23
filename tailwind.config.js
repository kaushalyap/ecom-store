/* eslint-disable global-require */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#A8E0F2',
          DEFAULT: '#61A0DA',
          dark: '#447f99',
          secondary: '#C6ADE4',
        },
      },
      fontFamily: {
        headline: '',
        description: '',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
};
