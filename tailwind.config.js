/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './client/**/*.{html,js,jsx,ts,tsx}',
  ],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        'abel': ["abel", "sans-serif"],
        'source': ["source", "sans-serif"]
      },
      backgroundImage: {
        'hero-pattern': "url('/client/assets/surf.jpg')",
        'lotus-pattern': "url('/client/assets/lot.jpg')",
        'croc-pattern': "url('/client/assets/croc.jpg')",
        'ridge-pattern': "url('/client/assets/ridge.jpg')",
        'turtle-pattern': "url('/client/assets/turtle.jpg')",
        'profile-pattern': "url('/client/assets/profile.png')",
        'wave-pattern': "url('/client/assets/wave.jpg')",
        'stars-pattern': "url('/client/assets/stars.jpg')",
        'shore-pattern': "url('/client/assets/shore.jpg')",
      },
      colors: {
        leaf: '#1C210C',
        shadow: '#0E110A',
        sand: '#D8A178',
        lsand: '#E0B38C',
        dune: '#D29B72',
        surf: '#3FA1A0',
        depths: '#1D4D53',
      }
    },
  },
  extend: {
    color: {},
  },
  plugins: [],
}
