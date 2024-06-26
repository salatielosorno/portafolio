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
        'amarillo': { DEFAULT: '#EAFB00'},
        'rosa': { DEFAULT: '#D15187'},
        'spink': { DEFAULT: '#EE3EC9' },
        'syellow': { DEFAULT: '#FFCF74' },
        'spurple': { DEFAULT: '#AFC2E7'},
        'spurple-2': { DEFAULT: '#5874AC' },
        'sorange': { DEFAULT: '#FFB074' },
        'sgreen': { DEFAULT: '#499F99' },
        'sblue': { DEFAULT: '#84E1D8'}
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
