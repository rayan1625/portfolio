/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        navyLight: '#112240',
        accent: '#2dd4bf',
        gold: '#d4af37',
        textPrimary: '#e6f1ff',
        textSecondary: '#8892b0',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

