/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        smm: '440px',
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 1024px) { ... }

        lg: '1024px',
        // => @media (min-width: 1280px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1280px) { ... }

        '3xl': '1760px'
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        sans: ['Roboto', 'Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular'],
        display: ['Oswald', 'sans-serif'],
        body: ['Open Sans', 'sans-serif']
      },
      colors: {
        primary: '#FF693A', // Main Color
        secondary: '#021F69',
        'border-color': '#8E9CAB',
        'digital-color': '#A9A9A9'
        // 'capture': '#E02266',
        // 'share': '#1DAE11',
        // 'orange': '#F98E1A',
        // 'cpanel': '#F28C28',
      }
    }
  }
}
