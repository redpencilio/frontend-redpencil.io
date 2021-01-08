module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      gray: {
        darkest: '#151515',
        dark: '#222222',
        DEFAULT: '#505050',
        light: '#C8C8C8',
        lightest: '#f9fafc',
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
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
