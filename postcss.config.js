module.exports = {
  // Plugins to add tailwindcss and resolve flexbox bug
  plugins: [
    'tailwindcss',
    'postcss-flexbugs-fixes',
    // Plugin to add support for css variables, prefixing and stage 3 features
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
  ],
}
