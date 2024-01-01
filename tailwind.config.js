import plugins from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,vue}",
    "./index.html"
  ],
  theme: {
    colors: {
      white: '#FFF',
      grey: '#19182B',
      'pale-navy': '#36384D',
      'dark-navy': '#242742',
      vermilion: '#FF6155',
    },
    fontFamily: {
      roboto: ["'Roboto'", "sans-serif"]
    }
  },
  plugins: [
    plugins(({ addUtilities, theme }) => {
      addUtilities({
        '.heading': {
          fontFamily: theme('fontFamily.roboto'),
          fontSize: '2.5rem',
          lineHeight: '100%',
          '@screen md': {
            fontSize: '3.5rem'
          }
        },
        '.body': {
          fontFamily: theme('fontFamily.roboto'),
          fontSize: '1rem',
          lineHeight: '150%',
        },
        '.body-small': {
          fontFamily: theme('fontFamily.roboto'),
          fontSize: '0.75rem',
          lineHeight: '150%',
        },
        '.card-shadow': {
          boxShadow: "0px 15px 60px 0px rgba(0, 0, 0, 0.25)" 
        },
        '.btn-shadow': {
          boxShadow: "0px 16px 32px 0px rgba(255, 97, 85, 0.50)" 
        },
        '.btn-empty-shadow': {
          boxShadow: "0px 16px 32px 0px rgba(255, 97, 85, 0.0)" 
        },
        '.bg-gradient-1': {
          background: 'linear-gradient(204deg, #FF6A3A 0%, #FF527B 100%)',
        }
      })
    })
  ],
}

