<script setup lang="ts">
import { computeSeriesColors, randomColor } from '../../utils'

function changeColor() {
  const newColor = randomColor()
  const newSeriesColor = computeSeriesColors(newColor)
  const rootEl = document.documentElement
  const rootStyle = rootEl.style

  rootStyle.setProperty('--vp-c-brand', newColor)
  rootStyle.setProperty('--vp-c-brand-light', newSeriesColor.light[2])
  rootStyle.setProperty('--vp-c-brand-lighter', newSeriesColor.light[4])
  rootStyle.setProperty('--vp-c-brand-lightest', newSeriesColor.light[6])
  rootStyle.setProperty('--vp-c-brand-dark', newSeriesColor.dark[0])
  rootStyle.setProperty('--vp-c-brand-darker', newSeriesColor.dark[1])
}
</script>

<template>
  <div flex="~ col wrap" items-center mt8>
    <div font-bold pa-2 b-rd cursor-pointer hover:bg-theme @click="changeColor">
      换个主题色
    </div>

    <h2 text="center lg" font-bold my-5>
      💕 Thanks to all the contributors!
    </h2>

    <a href="https://github.com/code-jbrc/Awesome-15docs/graphs/contributors">
      <img src="https://contrib.rocks/image?repo=code-jbrc/Awesome-15docs">
    </a>
  </div>
</template>
