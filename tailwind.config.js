/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js", 
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