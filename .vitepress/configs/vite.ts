import type { UserConfig } from 'vite'
import Unocss from 'unocss/vite'

export const vite: UserConfig = {
  plugins: [
    Unocss({
      configFile: '../../uno.config.ts',
    }),
  ],
}
