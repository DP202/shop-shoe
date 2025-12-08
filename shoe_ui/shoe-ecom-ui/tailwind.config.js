import plugin from 'tailwindcss/plugin'
import lineClamp from '@tailwindcss/line-clamp'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  corePlugins: {
    container: false
  },

  theme: {
    extend: {
      colors: {
        orange: '#ee4d2d',
        dodgerblue: '#1E90FF'
      }
    }
  },

  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: '80rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),

          '@screen xl': {
            maxWidth: '80rem'
          }
        }
      })
    }),

    lineClamp
  ]
}
