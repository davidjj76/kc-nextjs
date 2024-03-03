import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderColor: { DEFAULT: colors.gray[200] },
    colors: {
      base: colors.gray[800],
      accent: colors.orange[600],
      'header-bg': colors.slate[900],
      'header-text': colors.gray[50],
    },
  },
  plugins: [],
};
export default config;
