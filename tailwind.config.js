/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(90deg, #F87516 0%, #5E11FF 100%)",
      },
    },
  },
  plugins: [],
};
