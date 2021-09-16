module.exports = {
  mode:['jit'],
  purge: ['./src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color:{
        't-blue':'#1D9BF0',
        't-blue-dark':'#1B95E0',
        't-light':'#EFF3F4',
        't-gray':'#616161',
        't-light-gray':'#536471',
        't-dark-gray':'#0F1419'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
