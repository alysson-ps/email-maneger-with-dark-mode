module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        shark: {
          50: '#f4f4f4',
          100: '#e8e8e8',
          200: '#c7c7c7',
          300: '#a5a5a5',
          400: '#616161',
          500: '#1d1d1d',
          600: '#1a1a1a',
          700: '#161616',
          800: '#111111',
          900: '#0e0e0e',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
