const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '400px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        primaryOpp: 'var(--color-primaryOpp)',
        heading: 'var(--heading-color)',
        font: 'var(--font-color)',
        fontOpp: 'var(--fontOpp-color)',
        fontLight: 'var(--font-light-color)',
        bg: 'var(--bg-color)',
        bgOpp: 'var(--bgOpp-color)',
        bgLight: 'var(--bg-light-color)'
      },
      spacing: {
        '32r': '32rem',
        '36r': '36rem',
        '40r': '40rem',
        '44r': '44rem'
      },
      fontFamily: {
        display: ['Alaska', 'sans-serif']
      },
      gridTemplateColumns: {
        lgDashLayout: '300px auto',
        DashLayout: '100px auto'
      },
      gridTemplateRows: {
        lgDashLayout: '10% 90%',
        DashLayout: '75px auto 75px'
      }
    }
  },
  variants: {
    borderColor: ['dark', 'responsive', 'hover', 'focus', 'focus-within'],
    scrollbar: ['dark', 'rounded'],
    extend: { opacity: ['disabled'], backgroundColor: ['disabled'], textColor: ['disabled'] }
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/forms')]
}
