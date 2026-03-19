/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    './templates/**/*.html',
    './node_modules/flowbite/**/*.js',
  ],
  safelist: [
    {
      pattern: /bg-\[url\(/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin.js')
  ],
}
