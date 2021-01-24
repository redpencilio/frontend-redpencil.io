module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        darkest: '#141414',
        dark: '#222222',
        DEFAULT: '#505050',
        light: '#C8C8C8',
        lightest: '#f5f5f5',
      },
      red: {
        DEFAULT: '#CC0000'
      },
    },
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
