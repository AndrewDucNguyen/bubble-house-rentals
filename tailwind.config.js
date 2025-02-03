/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/images/forrest_bounce.jpeg')",
      },
      fontFamily: {
        'libre': ['Libre Baskerville', 'sans-serif'],
        'montserrat': ['Montserrat Variable', 'Montserrat', 'sans-serif']
      },
      fontWeight: {
        'light': 300,
        'regular': 400,
        'medium': 500,
        'semi': 600,
        'bold': 700,
      }
    },
  },
  plugins: [],
}