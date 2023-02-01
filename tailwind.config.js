/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      heading: ["Oswald"],
      body: ['"Open Sans"'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      cta: "#FCA311",
      bg: "#E2E2E2",
      text: "#000000",
    },
    extend: {},
  },
  plugins: [],
};
