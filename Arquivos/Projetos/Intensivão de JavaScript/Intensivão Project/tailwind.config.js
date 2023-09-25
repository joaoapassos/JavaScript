/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// Esse ./* serve para dizer para a biblioteca Tailwind para olhar para qualquer arquivo html e js não importando o nome
