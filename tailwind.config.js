module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    colors: {
      'body': '#fff',
      'blue': '#093eb6',
      'yellow': '#ffb600',
      'gray-dark': '#23282d',
      'gray': '#ebebeb',

    },
    fontFamily: {
      sans: ['Montserrat'],

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