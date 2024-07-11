/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: { 
        "dm-sans": ["DM Sans", "sans-serif"] 
      }
    },
  },
  plugins: [],
}
