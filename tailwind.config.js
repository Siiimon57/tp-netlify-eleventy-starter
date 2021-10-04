// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{njk,md,js}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'my-color': '#e8096e',
        'my-color2': 'rgba(79,153,52,0.51)',
      },
      screens: {
        media: { min: '600px', max: '800px' },
      },
      fontFamily: {
        'my-font': 'Raleway',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'inherit',
          },
        },
      }),
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
