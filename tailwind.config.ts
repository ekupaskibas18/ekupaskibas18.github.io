import type { Config } from 'tailwindcss';

export default {
  content: [
    './docs/**/*.{js,jsx,ts,tsx,md,mdx}',
    './blogs/**/*.{js,jsx,ts,tsx,md,mdx}',
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
        "londrina-solid": ["'Londrina Solid'", "'Helvetica Neue'", 'Helvetica', 'Arial', 'sans-serif'],
        "poppins": ["'Poppins'", "'Helvetica Neue'", 'Helvetica', 'Arial', 'sans-serif'],
        "roboto": ["'Roboto'", "'Helvetica Neue'", 'Helvetica', 'Arial', 'sans-serif'],
        "comic-neue": ["'Comic Neue'", "cursive"],
        "handlee": ["'Handlee'", "cursive"],
        "klee-one": ["'Klee One'", "cursive"],
        "rosarivo": ["'Rosarivo'", "cursive"],
        "fragment-mono": ["'Fragment Mono'", "monospace"],
        "inconsolata": ["'Inconsolata'", "monospace"],
        "oxygen-mono": ["'Oxygen Mono'", "monospace"],
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
