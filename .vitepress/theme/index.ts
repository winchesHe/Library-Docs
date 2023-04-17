import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import HomePage from '../components/HomePage.vue'
import 'uno.css'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomePage),
    })
  },
}
