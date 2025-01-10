/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{ 
        Jersey:["Jersey 10", "serif"]
      },
      fontWeight:{
        sise:[400]
      }
    },
  },
  plugins: [],
}
