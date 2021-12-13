/* eslint-disable global-require */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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

  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
};
