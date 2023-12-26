/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.{html, js}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      spacing: {
        '14': '3.5rem',
        '125px': '125px',
      },
      colors: {
        'hoverspt': '#18D760',
        'purple-main': '#2D46B9',
        'green-main': '#1ED760'
      },
      backgroundImage: theme => ({
        'spotify-theme': 'url("../assets/icon/bursts.svg")',
        'spotify-theme-mobile': 'url("../assets/icon/bursts-mobile.svg")'
      }),
      backgroundSize: {
        '175%': '175%',
        '192%': '192%',
        '195%': '195%',
        '250%': '250%'
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center'
      },
    },
  },
  plugins: [],
}
