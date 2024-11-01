import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#28FFE3',
        secondary: '#6843E1',
        tertiary: '#2E5DFF',
        black: '#000000',
      },
      screens: {
        farox2xl: '1366px',
        farox3xl: '1660px',
      },
    },
  },
  plugins: [],
};
export default config;
