/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#a78bfa",
        },
      },
      maxWidth: {
        "8xl": "1200px",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#3b82f6",
          "base-100": "#ffffff",
          "base-content": "#1f2937",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#a78bfa",
          "base-100": "#0f172a",
          "base-content": "#f8fafc",
        },
      },
    ],
  },
};
