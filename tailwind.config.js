/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Lato",
      secondary:"Poppins"
    },
    container: {
      padding: {
        DEFAULT: "2.5rem",
        // lg: '3rem',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#009A56",
        accent: "#999999",
        secondary: "#a67a68",
      },
    },
  },
  plugins: [],
};
