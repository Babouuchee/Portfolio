/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue"
  ],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        '1.5': '0.375rem', // 6px
      },
      fontFamily: {
        custom: ['MyFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
