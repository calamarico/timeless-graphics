/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0c0c0c",
        fg: "#f4f4f4",
        muted: "#9ca3af",
      },
    },
  },
  plugins: [],
}

