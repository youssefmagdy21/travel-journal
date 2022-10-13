/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#F55A5A",
        primary: "#2B283A",
        secondary: "#918E9B",
        clrBorder: "#F5F5F5",
      },
      fontFamily: {
        body: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
