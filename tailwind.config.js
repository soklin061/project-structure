/** @type {import('tailwindcss').Config} */
export default {
  // 1. Enable class-based dark mode switching
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Kantumruy Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}