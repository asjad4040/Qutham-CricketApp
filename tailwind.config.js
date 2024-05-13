/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  './layout/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:['Roboto','sans-serif'],
        openSans:['Open Sans','sans-serif'],
        robotoCondensed:['Roboto Condensed','sans-serif']
      },
      colors:{
        'primary':'#0088CC',
        'secondary':'#2C3E50',
        'tertiary':'#F7F8F9',
        'gray':'#BBBBBB',
        'lightBlue':'#72BBEF',
        'lightRed':'#FAA9BA'
      }
    },
  },
  plugins: [],
}