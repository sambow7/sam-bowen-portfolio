/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ash: '#7F7F56',
        moss: '#2A2E18',
        fog: '#D2DCE2',
        sand: '#D0CD8A',
        forest: '#122620',
      },
      fontFamily: {
        sans: ['"Neue Montreal"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}