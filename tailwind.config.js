/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0F",
        primary: "#7B3FE4",
        accent: "#00FFB2",
        card: "rgba(255, 255, 255, 0.03)",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
