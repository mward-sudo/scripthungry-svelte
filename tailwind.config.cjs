module.exports = {
  content: ['./src/**/*.{html,css,svelte}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
}
