/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        'not-allowed': 'not-allowed',
        'custom': 'url("/path-to-custom-cursor.png"), auto',
      },
    },
  },
  plugins: [],
}

