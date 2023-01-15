/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    fontFamily: {
      'urban': ['Urbanist', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
       require('flowbite/plugin')
  ],
}