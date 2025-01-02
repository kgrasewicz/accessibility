/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#e7a90f",
      secondary: "#237B36",
      grey: {
        100: "#ffffff",
        200: "#ccc",
        300: "#545454",
        400: "#5d5d5d",
        500: "#2e2e2e",
        600: "#242424",
        900: "#000000",
      },
      link: "#976103",
      error: "#ed4337",
      success: "#4bb543"
    },
    extend: {},
  },
  plugins: [],
};
