/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#e7a90f",
      grey: {
        100: "#ffffff",
        200: "#ccc",
        300: "#888888",
        400: "#5d5d5d",
        900: "#000000",
      },
    },
    extend: {},
  },
  plugins: [],
};
