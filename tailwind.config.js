/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
const omrTailwindTheme = require('./lib/styles/omrTailwindTheme')

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./lib/**/*.{js,ts,jsx,tsx,vue}'],
  theme: omrTailwindTheme,
  plugins: [],
}
