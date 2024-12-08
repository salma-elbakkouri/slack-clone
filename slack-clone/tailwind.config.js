/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-gray': '#343434',
        'dark-purple': '#611f69',
        'light-purple':'#611f69',
        'very-dark-purple': '#3f1344',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        heading: ['Barlow', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

