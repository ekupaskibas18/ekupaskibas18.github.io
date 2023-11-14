// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/dracula');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const remarkAttr = require('remark-attr');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '@randelltuazon',
  tagline: `One day, I'll quit coding, and start writing again.`,
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ekupaskibas18.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ekupaskibas18', // Usually your GitHub org/user name.
  projectName: 'ekupaskibas18.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    // '@whyframe/jsx/docusaurus',
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("postcss-import"));
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    async function injectHtml(context, options) {
      return {
        name: "docusaurus-plugin-inject",
        injectHtmlTags({content}) {
          return {
            postBodyTags: [
              `
                <script>
                  document.addEventListener('DOMContentLoaded', function() {
                    Waves.init({});
                  }, false);
                </script>
              `
            ],
          };
        },
      };
    },
    [
      '@docusaurus/plugin-content-docs',
      // {
      //   id: 'docs',
      //   path: 'docs/docs',
      //   routeBasePath: 'docs',
      //   sidebarPath: require.resolve('./docs/sidebars.js'),
      //   editUrl:
      //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      //   remarkPlugins: [remarkAttr],
      // },
      {
        id: 'components',
        path: 'docs/components',
        routeBasePath: 'components',
        sidebarPath: require.resolve('./docs/sidebars-components.js'),
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        remarkPlugins: [remarkAttr],
      }
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'sonnets-blog',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: '/blogs/sonnets',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './blogs/sonnets',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'Sonnets',
        postsPerPage: 'ALL',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'love-letters-blog',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: '/blogs/love-letters',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './blogs/love-letters',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'Love Letters',
        postsPerPage: 'ALL',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'haikus-blog',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: '/blogs/haikus',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './blogs/haikus',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'Haikus',
        postsPerPage: 'ALL',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./docs/sidebars-docs.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          path: 'docs/docs',
          routeBasePath: 'docs',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [remarkAttr],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('swiper/css/bundle'),
            require.resolve('nouislider/dist/nouislider.css'),
          ],
        },
      }),
    ],
  ],

  scripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js',
      integrity: 'sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3',
      crossOrigin: 'anonymous',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js',
      integrity: 'sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD',
      crossOrigin: 'anonymous',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/tinymce@6.3.1/tinymce.min.js',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/mprogress@0.1.1/mprogress.min.js',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/node-waves@0.7.6/dist/waves.min.js',
    },
  ],

  stylesheets: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: true,
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.datatables.net/1.13.2/css/jquery.dataTables.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/mprogress@0.1.1/mprogress.min.css',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/node-waves@0.7.6/dist/waves.min.css',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'Randell Tuazon, poetry, sonnets, love letters, haiku'}
      ],
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '@randelltuazon',
        logo: {
          alt: 'Randell Tuazon Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'tutorial-basics/create-a-page',
          //   position: 'left',
          //   label: 'Docs',
          // },
          // {
          //   to: '/components/layout/containers',
          //   label: 'Components',
          //   position: 'left',
          //   activeBaseRegex: `/components/`,
          // },
          // {
          //   type: 'docSidebar',  // docSidebar
          //   position: 'left',
          //   sidebarId: 'docs', // foldername
          //   label: 'Docs',     // navbar title
          // },
          // {
          //   type: 'docSidebar',  // docSidebar
          //   position: 'left',
          //   sidebarId: 'components', // foldername
          //   label: 'Components',     // navbar title
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          { to: '/blogs/sonnets', label: 'Sonnets', position: 'left' },
          { to: '/blogs/haikus', label: 'Haikus', position: 'left' },
          { to: '/blogs/love-letters', label: 'Love Letters', position: 'left' },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Poetry',
            items: [
              { label: 'Sonnets', to: '/blogs/sonnets' },
              { label: 'Haikus', to: '/blogs/haikus' },
              { label: 'Love Letters', to: '/blogs/love-letters' },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}, by Randell Tuazon with 💔`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'powershell',
        ],
      },
    }),
  customFields: {
    email: 'iam@randelltuazon.com',
  },
};

module.exports = config;
