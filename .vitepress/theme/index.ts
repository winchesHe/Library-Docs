import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import HomePage from '../components/HomePage.vue'
import Wave from '../components/Wave.vue'
import 'uno.css'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-hero-before': () => h(Wave),
      'home-features-after': () => h(HomePage),
    })
  },
}
