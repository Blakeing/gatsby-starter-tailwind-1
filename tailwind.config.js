// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    fontFamily: {
      // body: 'Futura',
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/typography'),
  ],
};
