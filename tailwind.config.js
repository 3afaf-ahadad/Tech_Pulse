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
            dark: "#0D1117", // Un bleu-noir profond (style GitHub Dark)
            terminal: "#161B22", // Un gris-bleu pour les cartes et sections
            cyan: "#7EE7F2", // Pour les titres et liens (très "tech")
            code: "#79C0FF", // Un bleu clair pour le texte important
            purple: "#D2A8FF", // Une touche de violet pour le côté créatif
          },
        },
      },
    },
  },
  plugins: [],
};
