/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  
  ],
  theme: {
    safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]','animate-[spinner-grow_1s_ease-in-out]'],
    extend: {
      colors: {
        purple : 	"#F535AA"
      }
    },
  },
  plugins: [],
}
