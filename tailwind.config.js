/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blocks-dark': '#242424',
        'blocks-dark-purple': '#A11CF3',
        'blocks-purple': '#D835C5',
        'blocks-bg': '#FBFBFBFB',
        'blocks-text-gray': '#322E2E',
      },
    },
  },
  plugins: [],
};
