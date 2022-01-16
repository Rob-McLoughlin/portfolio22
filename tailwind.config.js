module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#140C2C',
        ink_light: '#343041'
      },
      fontFamily: {
        outfit: ['Outfit', 'Helvetica, sans-serif'],
        body: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol'
        ]
      },
      fontSize: {
        body: ['16px', '24px'],
        h1: ['24px', '30px'],
        h2: ['24px', '24px'],
        h3: ['24px', '30px'],
        h4: ['18px', '24px'],
        meta: ['12px', '16px']
      }
    }
  },
  plugins: []
}