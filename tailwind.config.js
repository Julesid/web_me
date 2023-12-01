/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      'perso': "url('../img/picture4k.png')",
    },
    colors: {
      monblanc: '#ffedd5',
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake", "luxury"],
  },
}