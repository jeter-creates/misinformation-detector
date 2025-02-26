/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3a86ff',
        secondary: '#8338ec',
        success: '#38b000',
        warning: '#ffbe0b',
        danger: '#ff006e',
        neutral: '#6c757d',
        light: '#f8f9fa',
        dark: '#212529',
      },
    },
  },
  plugins: [],
} 