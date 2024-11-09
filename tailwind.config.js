/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-Darker_inter)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/bg-space.jpg')",
        'bg-intro': "url('/images/hero-bg.png')",  
        'bg-city': "url('/images/bg-city.jpg')",      
        'bg-mountains': "url('/images/bg-mountains.jpg')"
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      boxShadow: {
        button: '0px 0px 68px 7px rgba(56, 189, 248, 0.4)',
      },
    },
  },
  plugins: [],
}
