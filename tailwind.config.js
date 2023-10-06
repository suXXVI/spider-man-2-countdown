/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index/html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../assets/title-screen.png')",
      },
    },
  },
  plugins: [],
};
