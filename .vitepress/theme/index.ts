import { h } from 'vue'
import Theme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import type { Theme as ThemeType } from 'vitepress'
import HomePage from '../components/HomePage.vue'
import Wave from '../components/Wave.vue'
import NavColor from '../components/NavColor.vue'
import { define } from '~/utils/types'

import 'uno.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './style.css'

export default define<ThemeType>({
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-hero-before': () => h(Wave),
      'home-features-after': () => h(HomePage),
      'nav-bar-content-after': () => h(NavColor),
    })
  },
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)
  },
})
