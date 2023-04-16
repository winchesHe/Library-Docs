import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '组件库文档网站',
  description: '使用Vitepress从0搭建组件库文档网站',
  srcDir: 'src',
  srcExclude: ['**/README.md', '**/TODO.md'],
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
  },
  head: [
  ],
})
