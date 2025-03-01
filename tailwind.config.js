/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'green': {
          500: '#22c55e',
          600: '#16a34a',
        },
        'gray': {
          200: '#e5e7eb',
          300: '#d1d5db',
          900: '#111827',
        }
      }
    },
  },
  plugins: [],
}
