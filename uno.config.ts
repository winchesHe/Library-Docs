/* eslint-disable n/no-path-concat */
import {
  defineConfig,
  presetAttributify,
  presetUno,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  transformers: [transformerDirectives()],
  include: [`${__dirname}/**/*`],
  exclude: [`${__dirname}/node_modules/**/*`],
  rules: [
    ['bg-theme', { background: 'var(--vp-c-brand)' }],
    ['comp-bg-theme', { background: 'var(--el-color-primary)' }],
    ['comp-text-theme', { color: 'var(--el-color-primary)' }],
  ],
})
