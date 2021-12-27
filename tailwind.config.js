module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    colors: {
      'body': '#fff',
      'blue': '#093eb6',
      'yellow': '#ffda44',
      'gray-dark': '#f4f5f8',
      'gray': '#677078',

    },
    fontFamily: {
      sans: ['Roboto Condensed', 'sans-serif'],

    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}