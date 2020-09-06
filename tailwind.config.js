module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.tsx']
  },
  theme: {},
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
