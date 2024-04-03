/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideup: {
          from: {
            opacity: "0",
            transform: "translateY(100px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slidedown: {
          from: {
            opacity: "0",
            transform: "translateY(-100px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideright: {
          from: {
            opacity: "0",
            transform: "translatex(-100px)",
          },
          to: {
            opacity: "1",
            transform: "translatex(0)",
          },
        },
        slideleft: {
          from: {
            opacity: "0",
            transform: "translatex(100px)",
          },
          to: {
            opacity: "1",
            transform: "translatex(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 3s infinite ease var(--slidein-delay, 0) forwards",
        slideup: "slideup 3s ease var(--slideup-delay, 0) forwards",
        slidedown: "slidedown 3s ease var(--slidedown-delay, 0) forwards",
        slideright: "slideright 3s ease var(--slideright-delay, 0) forwards",
        slideleft: "slideleft 3s ease var(--slideleft-delay, 0) forwards",
      },
    },
  },
  plugins: [],
};
