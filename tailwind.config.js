/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#F8FAFC",
          200: "#E2E8F0",
          300: "#CBD5E1",
          600: "#475569",
          800: "#1E293B",
          900: "#0F172A",
        },
        purple: {
          100: "#996DFF",
          200: "#7C3AED",
        },
        orange: {
          500: "#FBA94C",
        },
      },
    },
  },
  plugins: [],
};
