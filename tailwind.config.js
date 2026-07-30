/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0F172A",      // 1. Dark Slate (Text & Structure)
          cyan: "#0284C7",      // 2. Royal Cyan Blue (Primary Accent)
          magenta: "#E11D48",   // 3. Crisp Crimson Magenta (Secondary Accent)
          surface: "#F8FAFC",   // Light Gray Off-white section background
          border: "#E2E8F0",    // Crisp light border
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'clean': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'clean-md': '0 4px 12px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'clean-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}
