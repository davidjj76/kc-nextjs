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
      'base-color': colors.gray[800],
      'accent-color': colors.orange[600],
      'header-bg-color': colors.slate[900],
      'header-text-color': colors.gray[200],
    },
  },
  plugins: [],
};
export default config;
