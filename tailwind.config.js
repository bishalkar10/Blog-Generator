/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { "primary-color": "#FE5829" },
      keyframes: {
        "slide-up": {
          "0%": {
            display: "block",
            opacity: 1,
            transform: "translate(-50%, 0)",
          },
          "33%": { transform: "translate(-50%, -16px)" },
          "50%": { opacity: 1, transform: "translate(-50%, -16px)" },

          "100%": {
            display: "none",
            opacity: 0,
            transform: "translate(-50%, -16px)",
          },
        }, 

        
      },
      animation: {
        "slide-up": "slide-up 3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
