/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CA2227",
        secondary: "#0C1F58",
      },
    },
  },
  plugins: [],
};
