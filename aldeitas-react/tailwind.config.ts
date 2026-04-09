import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#1f4d1f',
          mid: '#2d6a2d',
          light: '#f4f8ed',
        },
        gold: {
          DEFAULT: '#c9a227',
          light: '#f5e9c2',
        },
        blue: {
          DEFAULT: '#185fa5',
          mid: '#1a6fc4',
          light: '#e6f1fb',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Open Sans', 'Arial', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
