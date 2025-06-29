/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../templates/*.html",
    "../templates/**/*.html",
    "../templates/base/header.html",
    " './src/**/*.{js,ts,jsx,tsx,html}',"
  ],
  theme: {
    extend: {},
  },
  plugins: ['tw-animate-css'],
}

