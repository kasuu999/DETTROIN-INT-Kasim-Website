/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2540',
          50: '#E8ECF1',
          100: '#C7D2DF',
          200: '#9FB1C4',
          300: '#7790A9',
          400: '#4F6F8E',
          500: '#2C4F72',
          600: '#1A3A5C',
          700: '#0A2540',
          800: '#081D33',
          900: '#051526',
        },
        gold: {
          DEFAULT: '#D4AF37',
          50: '#FBF6E8',
          100: '#F6EBC9',
          200: '#EEDA96',
          300: '#E6C963',
          400: '#DDBA45',
          500: '#D4AF37',
          600: '#B4922A',
          700: '#8A7020',
          800: '#5F4D16',
          900: '#352A0C',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(10, 37, 64, 0.25)',
      },
    },
  },
  plugins: [],
}