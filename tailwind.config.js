/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Dancing Script"', "cursive"],
        mrDeHaviland: ["Mr De Haviland", "cursive"],
        roboto: ['"Roboto"', "sans-serif"],
      },
      keyframes: {
        moveLeftRight: {
          "0%, 100%": { transform: "translateX(-15px)" },
          "50%": { transform: "translateX(15px)" },
        },
        moveRightLeft: {
          "0%, 100%": { transform: "translateX(15px)" },
          "50%": { transform: "translateX(-15px)" },
        },
      },
      animation: {
        moveLeftRight: "moveLeftRight 4s infinite ease-in-out",
        moveRightLeft: "moveRightLeft 4s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
