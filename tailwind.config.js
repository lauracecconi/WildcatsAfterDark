/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0a0a0c',
        crypt:    '#14141a',
        slab:     '#1e1e26',
        line:     '#2c2a33',
        blood:    '#8b0f14',
        gore:     '#c41e24',
        pumpkin:  '#e8701a',
        harvest:  '#f2a444',
        bone:     '#e8e4d9',
        ash:      '#9b9691',
      },
      fontFamily: {
        scream: ['Creepster', 'cursive'],
        body:   ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 22%, 55%': { opacity: '0.45' },
        },
      },
      animation: {
        flicker: 'flicker 5s linear infinite',
      },
    },
  },
  plugins: [],
}
