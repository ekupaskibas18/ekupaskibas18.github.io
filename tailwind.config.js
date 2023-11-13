module.exports = {
  // corePlugins: {
  //   preflight: false, // disable Tailwind's reset
  // },
  content: [
    "./docs/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./tailwind.safelist.txt"
  ],
  darkMode: ['class', '[data-theme="dark"]'], // hooks into docusaurus' dark mode settings
  important: false,
  theme: {
    extend: {},
  },
  corePlugins:  {
    visibility: false,
  },
  plugins: [
    require('./plugins/index')
  ],
};
