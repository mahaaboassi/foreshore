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
      scale: {
        '90': '0.9', // 90% scaling
        '80': '0.8', // 80% scaling
        '70': '0.7', // 70% scaling
        '60': '0.6', // 60% scaling
        
      },
    },
  },
  plugins: [],
}

