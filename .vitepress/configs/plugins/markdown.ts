import path from 'node:path'
import type { Plugin } from 'vite'
import glob from 'fast-glob'
import { examplesDir } from '../../../utils'

type Append = Record<'headers' | 'footers' | 'scriptSetups', string[]>

function combineScriptSetup(codes: string[]) {
  return `\n<script setup>
  ${codes.join('\n')}
</script>
`
}

function combineMarkdown(code: string,
  headers: string[],
  footers: string[]) {
  const frontmatterEnds = code.indexOf('\n---\n') + 4
  const firstSubheader = code.search(/\n## \w/)
  const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader

  if (headers.length > 0) {
    code
      = code.slice(0, sliceIndex) + headers.join('') + code.slice(sliceIndex)
  }
  code += footers.join('')

  return `${code}`
}

export function MarkdownTransform(): Plugin {
  return {
    name: 'md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md'))
        return
      if (id.includes('guide'))
        return code

      const componentId = path.basename(id, '.md')
      const append: Append = {
        headers: [],
        footers: [],
        scriptSetups: [
          `const demos = import.meta.globEager('../../examples/${componentId}/*.vue')`,
        ],
      }

      // 获取组件
      const components = await glob('*', {
        cwd: examplesDir,
        onlyDirectories: true,
      })

      // 如果是组件md文件则添加贡献者
      if (components.some(compName => componentId.includes(compName))) {
        const sourcePath = `https://github.com/winchesHe/Library-Docs/blob/main/src/component/${componentId}.md`
        const sourceText = `[${componentId}源码](${sourcePath})`

        const sourceInfo = `
## 源码

${sourceText}
`
        const contributorInfo = `
## 贡献者

<Contributor source="${componentId}" />
`

        append.footers.push(sourceInfo, contributorInfo)
      }

      return combineMarkdown(
        code,
        [combineScriptSetup(append.scriptSetups), ...append.headers],
        append.footers,
      )
    },
  }
}
