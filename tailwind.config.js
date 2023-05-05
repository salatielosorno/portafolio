/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-montserrat)'],
    },
    extend: {
      colors: {
        'spink': { DEFAULT: '#EE3EC9' },
        'syellow': { DEFAULT: '#FFCF74' }
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
