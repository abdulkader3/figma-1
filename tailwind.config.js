
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'WorkSans' : ['Work Sans', 'sans-serif'],
      'lato' : ["Lato", 'sans-serif'],
    },
    extend: {
      colors:{
        'brand': '#00061D',
      }
    },
  },
  plugins: [],
}
