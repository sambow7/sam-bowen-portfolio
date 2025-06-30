/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: '#0D0D0D',
        space: '#1B1F3B',
        nebula: '#6D83F2',
        star: '#E2E8F0',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['"Neue Montreal"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}