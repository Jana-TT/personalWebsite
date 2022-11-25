/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xl: ['120px', '32px'],
    },
    colors: {
      'sky-100' : '#004764',
      'sky-200' : '#7AE5F5',
      'gray-100' : '#424549'
    },
    extend: {

    },
  },
  plugins: [],
}
