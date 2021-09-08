module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
   variants: {
    extend: {},
  },
  plugins: [],
  colors: {
    black: {
      DEFAULT:'#181719',
  },
    white : {
      DEFAULT:'#FFFFFF',
    }
  },
  fontFamily: {
    'serif': 'Crimson Pro',
  },
  
}
