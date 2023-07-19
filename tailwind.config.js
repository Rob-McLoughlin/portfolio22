module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#140C2C',
        ink_light: '#343041',
        ink_grey: '#D0CFD2',
        pink: '#DFABB0',
        flamingo: '#5b74f0',
        error: '#AE2A2A',
        success: '#059502'
      },
      fontFamily: {
        outfit: ['Outfit', 'Helvetica, sans-serif'],
        inter: ['Inter', 'Helvetica, sans-serif']
      },
      fontSize: {
        body: ['16px', '24px'],
        title: ['32px', '32px'],
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
