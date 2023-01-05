/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    fontFamily: {
      'Barlow1': ['Barlow', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
       require('flowbite/plugin')
  ],
}