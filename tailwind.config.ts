import type { Config } from 'tailwindcss';

export default {
  content: [
    './docs/**/*.{js,jsx,ts,tsx,md,mdx}',
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './tailwind.safelist.txt',
  ],
  darkMode: [
    'class', // or "media"
    '[data-theme="dark"]', // hooks into docusaurus' dark mode settings
  ],
  important: false,
  theme: {
    extend: {
      fontFamily: {
        brand: ["'Londrina Solid'", "'Helvetica Neue'", 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    // preflight: false, // disable Tailwind's reset
    visibility: false,
  },
  plugins: [
    require('./plugins/index'),
  ],
} satisfies Config;
