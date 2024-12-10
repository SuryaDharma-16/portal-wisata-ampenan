/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        montserrat: ['Montserrat', 'sans-serif'], 
      },
      fontSize: {
        'h1': '3.812rem',
        'h2': '3.062rem',
        'h3': '2.438rem',
        'h4': '1.938rem',
        'h5': '1.562rem',
        'h6': '1.250rem',
        'p': '1rem',
        'small': '0.812rem',
        'tiny': '0.625rem',
      },
    },
  },
  plugins: [],
}
