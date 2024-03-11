import type { Config } from 'tailwindcss';

const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f06915',
        secondary: '#159cf0',
        error: colors.red[500],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
