module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
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
        'content': '1fr 100px 1fr',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}
