// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const npm2yarn = require('@docusaurus/remark-plugin-npm2yarn');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LaraDocs',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://laradocs.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ttungbmt', // Usually your GitHub org/user name.
  projectName: 'laradocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          editUrl:
            'https://github.com/laragis/laradocs/tree/main/',
          remarkPlugins: [
            [npm2yarn, {sync: true}],
          ],
        },
        pages: {
          remarkPlugins: [npm2yarn],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/laragis/laradocs/tree/main/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'LaraDocs',
        logo: {
          alt: 'LaraDocs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'doc',
            docId: 'courses',
            label: 'Courses',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dev',
            label: 'Development',
          },
          {
            type: 'docSidebar',
            sidebarId: 'db',
            label: 'Databases',
          },
          {
            type: 'docSidebar',
            sidebarId: 'devops',
            label: 'DevOps',
          },
          {
            type: 'docSidebar',
            sidebarId: 'os',
            label: 'OS',
          },
          {
            type: 'docSidebar',
            sidebarId: 'design',
            label: 'Design',
          },
          {
            type: 'docSidebar',
            sidebarId: 'testing',
            label: 'Testing',
          },
          {
            type: 'docSidebar',
            sidebarId: 'gis',
            label: 'GIS',
          },
          {
            type: 'docSidebar',
            sidebarId: 'server',
            label: 'Server',
          },
          {
            type: 'docSidebar',
            sidebarId: 'editor',
            label: 'Editor',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
