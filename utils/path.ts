import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export const rootDir = resolve(fileURLToPath(import.meta.url), '../..')
export const srcDir = resolver('src')
export const vitepressDir = resolver('.vitepress')

export function resolver(path: string) {
  return resolve(rootDir, path)
}
