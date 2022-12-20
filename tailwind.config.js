/** @type {import('tailwindcss').Config} */
// ruskelUI v2 colour system & typography
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      'xs': '.75rem', // 12xpx
      'sm': '.875rem', // 14px
      'base': '1rem', // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.75rem', // 28px
      '4xl': '2rem', // 32px
      '5xl': '2.5rem', // 40px
      '6xl': '3rem', // 48px
      '7xl': '3.625rem', // 58px
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        neropside: '#0f172a',
        asphalt: '#1a232e',
        onyx: '#f4f4fc',
        amethyst: {
          50: '#f7f7ff',
          100: '#f0efff',
          200: '#d9d6ff',
          300: '#c1bdff',
          400: '#938cff',
          500: '#655bff',
          600: '#5b52e6',
          700: '#4c44bf',
          800: '#3d3799',
          900: '#312d7d',
        },
        bayoux: {
          50: '#fbfdff',
          100: '#f7fbff',
          200: '#ecf6ff',
          300: '#e0f0ff',
          400: '#c9e5ff',
          500: '#B2DAFF',
          600: '#a0c4e6',
          700: '#86a4bf',
          800: '#6b8399',
          900: '#576b7d',
        },
        citrine: {
          50: '#fffdf5',
          100: '#fffbeb',
          200: '#fff4cc',
          300: '#ffedad',
          400: '#ffe070',
          500: '#FFD333',
          600: '#e6be2e',
          700: '#bf9e26',
          800: '#997f1f',
          900: '#7d6719',
        },
        jade: {
          50: '#f2fefa',
          100: '#e6fcf5',
          200: '#bff9e6',
          300: '#99f5d6',
          400: '#4dedb8',
          500: '#00E599',
          600: '#00ce8a',
          700: '#00ac73',
          800: '#00895c',
          900: '#00704b',
        },
        celuria: {
          '50': '#f2f8ff',
          '100': '#e6f1ff',
          '200': '#bfddff',
          '300': '#99c9ff',
          '400': '#4da0ff',
          '500': '#0077ff',
          '600': '#006be6',
          '700': '#0059bf',
          '800': '#004799',
          '900': '#003a7d'
        },
        lazure: {
          50: '#f2fbff',
          100: '#e6f7ff',
          200: '#bfeaff',
          300: '#99ddff',
          400: '#4dc4ff',
          500: '#00AAFF',
          600: '#0099e6',
          700: '#0080bf',
          800: '#006699',
          900: '#00537d',
        },
        obsidian: {
          50: '#f7f8f9',
          100: '#eff1f4',
          200: '#d6dce3',
          300: '#bec7d3',
          400: '#8d9cb1',
          500: '#5C7290',
          600: '#536782',
          700: '#45566c',
          800: '#374456',
          900: '#2d3847',
        },
        purpalite: {
          50: '#fef5fe',
          100: '#fceafc',
          200: '#f9cbf9',
          300: '#f5abf5',
          400: '#ed6ded',
          500: '#E52EE5',
          600: '#ce29ce',
          700: '#ac23ac',
          800: '#891c89',
          900: '#701770',
        },
        rosian: {
          50: '#fff6fa',
          100: '#ffecf4',
          200: '#ffd0e4',
          300: '#feb4d3',
          400: '#fe7bb2',
          500: '#FD4391',
          600: '#e43c83',
          700: '#be326d',
          800: '#982857',
          900: '#7c2147',
        },
        scarlet: {
          50: '#fff5f7',
          100: '#ffecef',
          200: '#ffcfd7',
          300: '#ffb3bf',
          400: '#ff7990',
          500: '#FF4060',
          600: '#e63a56',
          700: '#bf3048',
          800: '#99263a',
          900: '#7d1f2f',
        },
        sunstone: {
          50: '#fff9f6',
          100: '#fff2ec',
          200: '#ffdfd0',
          300: '#ffcbb4',
          400: '#ffa57c',
          500: '#FF7E44',
          600: '#e6713d',
          700: '#bf5f33',
          800: '#994c29',
          900: '#7d3e21',
        },
        tingual: {
          50: '#f2fcfb',
          100: '#e6f8f7',
          200: '#c0efeb',
          300: '#9ae5de',
          400: '#4fd1c6',
          500: '#03bdad',
          600: '#03aa9c',
          700: '#028e82',
          800: '#027168',
          900: '#015d55',
        },
      },
    },
  },
  plugins: [],
}