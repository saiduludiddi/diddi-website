/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#e8edf5',
          100: '#c5d0e5',
          200: '#8fa4ca',
          300: '#5a78ae',
          400: '#2e5293',
          500: '#0D2B4E',
          600: '#0b2444',
          700: '#091c36',
          800: '#071528',
          900: '#040e1a',
          950: '#020810',
        },
        brand: {
          50:  '#edfaf2',
          100: '#d0f4e0',
          200: '#a1e8c1',
          300: '#6dd6a0',
          400: '#4dc47e',
          500: '#3AB54A',
          600: '#2e9a3d',
          700: '#247c31',
          800: '#1a5e25',
          900: '#104018',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
      },
      scale: {
        '102': '1.02',
        '106': '1.06',
        '108': '1.08',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
