/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'table-white': 'rgb(255, 255, 255)',
        'light-blue': 'rgb(247, 250, 251)',
        'blue-chartbar': 'rgb(53, 204, 208)',
        'gray-table-header': 'rgb(223, 229, 231)',
        'gray-border': 'rgb(210, 212, 218)',
        'green-success': 'rgb(0, 210, 162)',
        'red-failed': 'rgb(225, 40, 40)',
        'gray-cancelled': 'rgba(55, 74, 80, 0.5)',
        'black-text': 'rgb(23, 24, 28)',
        'grey-text': 'rgb(82, 87, 101)',
        'light-grey-chart': 'rgba(7, 17, 44, 0.6)',
      },
      fontFamily: {
        gordita: ['Gordita', 'sans-serif']
      },
      fontSize: {
        'title': '26px',
        'subtitle-medium': '16px',
        'axis': '10px',
        'title-small': '11px',
        'body-medium': '13px',
        'small-body': '12px',
      },
      lineHeight: {
        'title': '34.61px',
        'subtitle-medium': '21.3px',
        'axis': '13.31px',
        'title-small': '14.64px',
        'body-medium': '17.3px',
        'small-body': '15.97px',
      },
      spacing: {
        '3.2': '13px',
        '3.8': '15px',
        '17': '68px',
        '18': '76px',
        '21': '82px',
        '37': '148px',
        '53': '212px',
        '95': '380px',
        '70': '280px'
      },
    },
  },
  plugins: [],
}

