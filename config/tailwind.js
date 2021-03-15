const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false,
  plugins: [require('@tailwindcss/forms')],
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
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
