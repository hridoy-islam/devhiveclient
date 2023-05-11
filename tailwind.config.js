/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#5c6ac4",
      secondary: "#f43f5e",
    },
    extend: {
      animation: {
        slide: "slide 5s linear infinite",
      },
      keyframes: {
        slide: {
          "0%, 100%": {
            "margin-top": "-270px",
          },
          "5%, 33%": {
            "margin-top": "-180px",
          },
          "38%, 66%": {
            "margin-top": "-90px",
          },
          "71%, 99.99%": {
            "margin-top": "0px",
          },
        },
      },
      fontFamily: {
        playfair: ["Playfair", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
