module.exports = (ctx) => ({
  map: { inline: false },
  plugins: {
    autoprefixer: {},
    'postcss-nesting': {},
    'postcss-extend': {}
  }
})
