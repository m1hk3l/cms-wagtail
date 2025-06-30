import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../templates/**/*.html",       // ✅ scans root-level templates
    "../wcms/templates/**/*.html",  // ✅ scans app-level templates
    "./src/**/*.{js,ts,jsx,tsx,html}", // ✅ frontend source
  ],
  theme: {
    extend: {},
  },
  plugins: [
    'tw-animate-css',
    typography
  ],
};
