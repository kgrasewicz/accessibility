/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#e7a90f",
      secondary: "#36af4d",
      grey: {
        100: "#ffffff",
        200: "#ccc",
        300: "#888888",
        400: "#5d5d5d",
        500: "#2e2e2e",
        600: "#242424",
        900: "#000000",
      },
    },
    extend: {},
  },
  plugins: [],
};
