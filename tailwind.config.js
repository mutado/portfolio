/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        'white': '#f2f3f4',
        'white-soft': '#f8f8f8',
        'white-mute': '#f2f2f2',

        'black': '#181818',
        'black-soft': '#222222',
        'black-mute': '#282828',
        'black-light': '#333333',
      },
      screens: {
        'xs': '475px',
      }
    },
  },
  plugins: [],
}

