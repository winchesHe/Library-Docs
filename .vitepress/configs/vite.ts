import type { UserConfig } from 'vite'
import Unocss from 'unocss/vite'
import { rootDir } from '../../utils/path'

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
  ],
}
