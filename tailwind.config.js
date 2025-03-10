/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      exo: ['Exo', 'sans-serif'],
      lexend: [
        'Lexend',
        'sans-serif',
      ]
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        primary: {
          DEFAULT: '#FCFCFC',
          100: '#FCFCFC',
          200: '#F5F5F5',
          300: '#E6E6E6',
          400: '#CECECE',
          500: '#B6B6B6'
        },
        secondary: {
          DEFAULT: '#170440',
          100: '#250666',
          200: '#1E0553',
          300: '#170440',
          400: '#110133',
          500: '#0F0327'
        },
        blue: colors.blue,
        red: colors.red
      },
      backgroundImage: {
        'welcome-dark': "url('/images/sections/welcome-dark.jpg')",
        /* Seems like we're not using this 
          'welcome-light': "url('/images/sections/welcome-light.jpg')",
        */
        'faq': "url('/images/sections/faq.png')",
        'applications-light': "url('/images/sections/applications-light.png')",
        'applications-dark': "url('/images/sections/applications-dark.png')"
      }
    }
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true
  }
}
