const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '400px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-dark-primary)',
        normal: 'var(--font-color)',
        'normal-light': 'var(--bg-light-color)',
        inverse: 'var(--bg-color)',
        'normal-dark': 'var(--font-dark-color)',
        'inverse-dark': 'var(--bg-dark-color)'
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
        lgDashLayout: '200px auto',
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
