/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'desktop': '1200px',
        'smallDesktop': '968px',
        'tablet': '612px',
        'mobile': '0px'
      },
      boxShadow : {
        'v1' : '0 3px 10px rgb(0 0 0 / 0.2)'
      }
    },
  },
  plugins: [],
}