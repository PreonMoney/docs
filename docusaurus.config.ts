import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";


const config: Config = {
  title: "Preon Docs",
  tagline: "Reach for the $STARs",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://docs.preon.finance",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "PreonMoney", // Usually your GitHub org/user name.
  projectName: "preon-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: "3F36J3AKUM",

      // Public API key: it is safe to commit it
      apiKey: "4a5ab78612140f7089edd1d9c406cb48",

      indexName: "preon",

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: "external\\.com|domain\\.com",

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: "/docs/", // or as RegExp: /\/docs\//
      //   to: "/",
      // },

      // Optional: Algolia search parameters
      // searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      // searchPagePath: "search",

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      // insights: false,

      //... other Algolia params
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    metadata: [
      {
        name: "og:title",
        content: "Preon | Reach for the $STARs",
      },
      {
        name: "og:description",
        content:
          "Preon empowers you to leverage your crypto as collateral, granting quick access to funds without the need to sell or compromise your portfolio.",
      },
      {
        name: "twitter:description",
        content:
          "Preon empowers you to leverage your crypto as collateral, granting quick access to funds without the need to sell or compromise your portfolio.",
      },
      {
        name: "og:image",
        content: "https://assets-global.website-files.com/629a91a5b00da53e513b5098/64d138cac6601eb4d2af7b93_opengraph3.jpg", // URL to your OG image
      },
      {
        name: "twitter:image",
        content: "https://assets-global.website-files.com/629a91a5b00da53e513b5098/64d138cac6601eb4d2af7b93_opengraph3.jpg", // URL to your OG image
      },
    ],
    // metadata: [
    //   {name: 'keywords', content: 'cooking, blog'},
    //   {name: 'twitter:card', content: 'summary_large_image'},
    // ],
    // Replace with your project's social card
    image: "https://assets-global.website-files.com/629a91a5b00da53e513b5098/64d138cac6601eb4d2af7b93_opengraph3.jpg",
    navbar: {
      title: "Preon",
      logo: {
        alt: "Preon logo",
        src: "img/preon-logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        // {
        //   href: "https://github.com/facebook/docusaurus",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      // style: "dark",
      links: [
        // {
        //   title: "Developers",
        //   items: [
        //     {
        //       label: "Feedback",
        //       href: "https://forms.gle/13XtjmkwdXQ2jMn26",
        //     },
        //     {
        //       label: "Bug Bounty",
        //       href: "https://github.com/Uniswap/uniswap-v3-periphery/blob/main/bug-bounty.md",
        //     },
        //     {
        //       label: "#dev-chat",
        //       href: "https://discord.com/invite/uniswap",
        //     },
        //     {
        //       label: "Whitepaper",
        //       href: "https://uniswap.org/whitepaper-v3.pdf",
        //     },
        //   ],
        // },
        // {
        //   title: "Github",
        //   items: [
        //     {
        //       label: "uniswap-v3-core",
        //       href: "https://github.com/Uniswap/uniswap-v3-core",
        //     },
        //     {
        //       label: "uniswap-v3-sdk",
        //       href: "https://github.com/Uniswap/uniswap-v3-sdk",
        //     },
        //     {
        //       label: "uniswap-v3-periphery",
        //       href: "https://github.com/Uniswap/uniswap-v3-periphery",
        //     },
        //     {
        //       label: "Deployment addresses",
        //       href: "https://github.com/Uniswap/uniswap-v3-periphery/blob/main/deploys.md",
        //     },
        //   ],
        // },
        {
          title: "Ecosystem",
          items: [
            {
              label: "Home",
              href: "https://preon.finance/",
            },
            {
              label: "App",
              href: "https://app.preon.finance/",
            },
            // {
            //   label: "Analytics",
            //   href: "https://info.uniswap.org/home",
            // },
            // {
            //   label: "Token Lists",
            //   href: "https://tokenlists.org/",
            // },
            {
              label: "Brand Assets",
              href: "/docs/Information/Brand%20Assets",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // {
            //   label: "Governance",
            //   href: "https://gov.uniswap.org/",
            // },
            {
              label: "Discord",
              href: "https://discord.com/invite/preon",
            },
            {
              label: "X (Twitter)",
              href: "https://x.com/PreonFinance",
            },
            {
              label: "Blog",
              href: "https://preonfinance.medium.com/",
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Preon`,
    },
    prism: {
      theme: prismThemes.dracula,
      // theme: prismThemes.github,
      // darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
