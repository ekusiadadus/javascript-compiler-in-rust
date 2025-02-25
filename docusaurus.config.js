// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Writing a JavaScript Compiler in Rust',
  tagline: '',
  url: 'https://boshen.github.io',
  baseUrl: '/javascript-compiler-in-rust/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // favicon: '',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Boshen', // Usually your GitHub org/user name.
  projectName: 'javascript-compiler-in-rust', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'rust, javascript, compiler, tutorial'}],
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'Home',
        // logo: {
          // alt: 'My Site Logo',
          // src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Book',
          },
          {to: '/blog', label: 'Tutorials', position: 'left'},
          {
            href: 'https://github.com/Boshen/javascript-compiler-in-rust',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer: {
        // style: 'dark',
        // links: [
          // {
            // title: 'Docs',
            // items: [
              // {
                // label: 'Tutorial',
                // to: '/docs/intro',
              // },
            // ],
          // },
          // {
            // title: 'Community',
            // items: [
              // {
                // label: 'Stack Overflow',
                // href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
                // label: 'Discord',
                // href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
                // label: 'Twitter',
                // href: 'https://twitter.com/docusaurus',
              // },
            // ],
          // },
          // {
            // title: 'More',
            // items: [
              // {
                // label: 'Blog',
                // to: '/blog',
              // },
              // {
                // label: 'GitHub',
                // href: 'https://github.com/facebook/docusaurus',
              // },
            // ],
          // },
        // ],
        // copyright: `Copyright © ${new Date().getFullYear()} Boshen, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust']
      },
    }),
};

module.exports = config;
