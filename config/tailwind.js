module.exports = {
  content: [
    './app/index.html',
    './app/templates/**/*.hbs',
    './app/components/**/*.hbs',
  ],

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
    },
    plugins: [require('@tailwindcss/forms')],
  },
};
