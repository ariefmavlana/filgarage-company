/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        archivo: ["var(--font-archivo-black)"],
        orbitron: ["var(--font-orbitron)"],
        sans: ["var(--font-outfit)"], // default font = Outfit
      },
      colors: {
        primary: "#566D5D",
      },
    },
  },
  plugins: [],
};
