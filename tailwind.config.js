/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
      xs: "0.6875rem",
      sm: "0.75rem",
      base: "0.875rem",
      lg: "1rem",
      xl: "1.125rem",
      "2xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "1.875rem",
      },
      colors: {
        primary: "#1E40AF",
        secondary: "#64748B",
        blackVariant: "#1F2937",
        gray: "#CBD5E0",
        lightGray: "#F3F4F6",
        link: "#3182CE",
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        custom: "0px 0px 5px 2px rgba(0, 0, 0, 0.1)",
      }
    },
  },
  plugins: [],
}

