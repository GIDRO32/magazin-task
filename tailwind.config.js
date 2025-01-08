/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{html,js}'], // Adjust this path as per your project structure
  theme: {
    extend: {
      fontFamily: {
        gilroyBold: ['Gilroy-Bold', 'sans-serif'], // Define the Gilroy font with a fallback
        gilroyRegular: ['Gilroy-Regular', 'sans-serif'], // Define the Gilroy font with a fallback
        gilroyHeavy: ['Gilroy-Heavy', 'sans-serif'],
        gilroySemibold: ['Gilroy-Semibold', 'sans-serif'],
        gilroyBlack: ['Gilroy-Black', 'sans-serif'], // Define the Gilroy font with a fallback
        gilroyMedium: ['Gilroy-Medium', 'sans-serif'], // Define the Gilroy font with a fallback
      },
      animation: {
        fade: 'fade 0.5s ease',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      colors:
      {
        'mint': '#5DB075',
        'cucumber' : '#73B05D',
        'magenta' : '#FA1D6D'
      }
    },
  },
  plugins: [], 
};


