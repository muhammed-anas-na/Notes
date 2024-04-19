/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundYellow: '#FFC701',
        baseTextColor:"#12286D"
      }
    },
  },
  plugins: [],
}

