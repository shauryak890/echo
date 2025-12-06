module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f77d2b',
          50: 'rgba(247, 125, 43, 0.05)',
          100: 'rgba(247, 125, 43, 0.1)',
          200: 'rgba(247, 125, 43, 0.2)',
          300: 'rgba(247, 125, 43, 0.3)',
          400: 'rgba(247, 125, 43, 0.4)',
          500: '#f77d2b',
          600: '#e66a1b',
          700: '#d25a12',
          800: '#bf4c0a',
          900: '#ac3f03'
        },
        background: {
          light: '#f8f7f5',
          dark: '#221710'
        }
      }
    },
  },
  plugins: [],
};
