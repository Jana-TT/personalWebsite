/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      md: ['19px', '30px'],
      md2: ['26px', '30px'],
      lg: ['32px', '32px'],
      lg2: ['48px', '58px'],
      xl: ['120px', '32px'],
      xxl: ['160px', '32px'],
    },
    colors: {
      'gray-100' : '#424549',
      'gray-200': '#36393e',
      'gray-300': '#282b30',
      'gray-400': '#1e2124',
      'galaxy-500' : '#FFC0CB',
      'galaxy-400': '#800080',
      'blush': '#DE9DAC',
      'light-pink': '#FEC5E5',
      'white': '#FFFFFF'
    },
    extend: {
      spacing: {
        '400px' : '36rem'
      },
      fontFamily: {
        cool: ['Orbitron'],
        robot: ['Roboto']
      }
    },
  },
  plugins: [],
}
