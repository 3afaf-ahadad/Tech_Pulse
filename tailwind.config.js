/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        luxury: {
          g_com: {
            peach: "#edb4b4",
            rose: "#ff9898",
            mocha: "#b5ec9e",
            coffee: "#5C4A4A",
          },
          com: {
            dark: "#0D1117",
            terminal: "#161B22",
            cyan: "#7EE7F2",
            code: "#79C0FF",
            purple: "#D2A8FF",
          },
        },
      },
    },
  },
  plugins: [],
};
