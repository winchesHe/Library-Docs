import type { UserConfig } from 'vite'
import Unocss from 'unocss/vite'
import Inspect from 'vite-plugin-inspect'
import { rootDir } from '../../utils/path'
import { MarkdownTransform } from './plugins'

export const vite: UserConfig = {
  resolve: {
    alias: [
      {
        find: '~/',
        replacement: `${rootDir}/`,
      },
    ],
  },
  plugins: [
    Unocss({
      configFile: '../../uno.config.ts',
    }),
    MarkdownTransform(),
    Inspect(),
  ],
}
