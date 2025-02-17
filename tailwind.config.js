/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: 15,
        screens: {
          DEFAULT: "1440px",
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        "dark-navy": "#2A283E",
        "tomato-red": "#E03C33",
        "banana-yellow": "#fdc211",
        "light-gray": "#5B5A69",
      },
      maxWidth: {
        "container-xl": "1700px",
      },
      boxShadow: {
        "10-10-24-0-0.12": "10px 10px 24px 0px rgba(0, 0, 0, 0.12)",
        "4-6-24-0-0.08":
          "-4px -6px 24px 0px rgba(0, 0, 0, 0.08), 8px 12px 24px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
