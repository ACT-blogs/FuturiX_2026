/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00D9FF', // Neon Blue
          50: '#E5F9FF',
          100: '#CCF3FF',
          200: '#99E7FF',
          300: '#66DBFF',
          400: '#33CFFF',
          500: '#00D9FF',
          600: '#00A8CC',
          700: '#007A99',
          800: '#004D66',
          900: '#002033',
        },
        secondary: {
          DEFAULT: '#A855F7', // Electric Purple
          50: '#F5E6FF',
          100: '#EBCCFF',
          200: '#D699FF',
          300: '#C266FF',
          400: '#AD33FF',
          500: '#A855F7',
          600: '#8533CC',
          700: '#621F99',
          800: '#3F1466',
          900: '#1C0A33',
        },
        dark: {
          DEFAULT: '#0A0A0F',
          50: '#E6E6E7',
          100: '#CCCCCE',
          200: '#99999D',
          300: '#66666C',
          400: '#33333B',
          500: '#0A0A0F',
          600: '#08080C',
          700: '#060609',
          800: '#040406',
          900: '#020203',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 217, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
