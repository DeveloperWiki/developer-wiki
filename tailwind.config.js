const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./**/*.vue'],
  theme: {
    container: {
      center: true,
      padding: '4rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: colors.green,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
