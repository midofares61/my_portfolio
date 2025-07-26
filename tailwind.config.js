/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#60A5FA',
          500: '#0A84FF',
          600: '#0072EF',
          700: '#005DD1',
        },
        teal: {
          400: '#2DD4BF',
          500: '#00C7BE',
          600: '#00B6AB',
        },
        purple: {
          400: '#C084FC',
          500: '#BF5AF2',
          600: '#A347DE',
        },
        success: {
          100: '#D1FAE5',
          500: '#10B981',
          700: '#047857',
        },
        warning: {
          100: '#FEF3C7',
          500: '#F59E0B',
          700: '#B45309',
        },
        error: {
          100: '#FEE2E2',
          500: '#EF4444',
          700: '#B91C1C',
        },
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};