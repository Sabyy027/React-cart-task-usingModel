/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto Flex"', 'Arial', 'Helvetica', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pop': {
          '0%': { transform: 'scale(0.8)' },
          '60%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shadow-pulse': {
          '0%': { boxShadow: '0 0 0 0 rgba(40,116,240,0.3)' },
          '70%': { boxShadow: '0 0 16px 8px rgba(40,116,240,0.15)' },
          '100%': { boxShadow: '0 0 0 0 rgba(40,116,240,0.3)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s cubic-bezier(0.4,0,0.2,1) both',
        'pop': 'pop 0.4s cubic-bezier(0.4,0,0.2,1) both',
        'slide-up': 'slide-up 0.5s cubic-bezier(0.4,0,0.2,1) both',
        'shadow-pulse': 'shadow-pulse 0.5s cubic-bezier(0.4,0,0.2,1) both',
      },
    },
  },
  plugins: [],
}
