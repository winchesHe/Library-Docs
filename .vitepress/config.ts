import { defineConfig } from 'vitepress'
import { vite } from './configs/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '组件库文档网站',
  description: '使用Vitepress从0搭建组件库文档网站',
  srcDir: 'src',
  srcExclude: ['**/README.md', '**/TODO.md'],
  vite,
  outDir: '../dist',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/quickstart', activeMatch: 'guide' },
      { text: 'Component', link: '/component/button', activeMatch: 'component' },
    ],

    sidebar: {
      '/guide': [
        {
          text: 'Basic',
          items: [
            { text: 'Quick Start', link: '/guide/quickstart' },
          ],
        },
      ],
      '/component': [
        {
          text: 'Component',
          items: [
            { text: 'Button', link: '/component/button' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    editLink: {
      pattern: 'https://github.com/winchesHe/Library-Docs/tree/main/src/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Made with ❤️',
      copyright:
        'MIT License © 2023 <a href="https://github.com/winchesHe">winchesHe</a>',
    },
  },
  head: [
  ],
  lastUpdated: true,
})
