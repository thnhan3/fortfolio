/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mypurple: '#8A51FF',
        mydark: '#5d5d5d',
        mygray: '#535353',
      },
      theme: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Libre Baskerville', 'serif'],
          mono: ['IBM Plex Mono', 'monospace'],
        },
      },
    },
  },
  plugins: [],
};
