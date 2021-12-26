const colors = require('tailwindcss/colors');

module.exports = {
  // mode: 'jit',
  purge: ['./app/**/*.{hbs,js,ts}', './tests/**/*.{hbs,js,ts}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
        lg: '5rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
    extend: {
      gridTemplateColumns: {
        content: '1fr 100px 1fr',
      },
      colors: {
        gray: colors.trueGray,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
