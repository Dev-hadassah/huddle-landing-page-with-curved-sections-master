/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
         Pink: '#ff52bf',
         LightPink: '#ff8fd8',
         LightRed: '#ff4242',
         VeryDarkCyan: '#00252e',
         VeryPaleBlue: '#f5faff',
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [],
}
