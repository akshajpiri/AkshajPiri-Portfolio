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
        canvas:  '#181A20',
        surface: '#1E2028',
        line:    '#2A2D38',
        ink:     '#F5F2EB',
        dust:    '#9A968F',
        pine: {
          DEFAULT: '#A37A5C',
          dark:    '#8F6849',
        },
      },
    },
  },
  plugins: [],
}

export default config
