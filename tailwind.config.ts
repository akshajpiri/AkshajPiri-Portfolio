import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas:  '#F5F0E8',
        surface: '#EDE8DF',
        line:    '#D9D3C9',
        ink:     '#1C1C1A',
        dust:    '#6B6560',
        pine: {
          DEFAULT: '#2E4A5C',
          dark:    '#253E50',
        },
      },
    },
  },
  plugins: [],
}

export default config
