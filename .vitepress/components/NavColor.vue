<script setup lang="ts">
import { SwitchFilled } from '@element-plus/icons-vue'
import { computeSeriesColors, randomColor } from '~/utils/color'

function changeCompColor() {
  const newColor = randomColor()
  const newSeriesColor = computeSeriesColors(newColor)
  const rootEl = document.documentElement
  const rootStyle = rootEl.style
  // 设置组件主题
  rootStyle.setProperty('--el-color-primary', newColor)
  rootStyle.setProperty('--el-color-primary-light-3', newSeriesColor.light[2])
  rootStyle.setProperty('--el-color-primary-light-5', newSeriesColor.light[4])
  rootStyle.setProperty('--el-color-primary-light-7', newSeriesColor.light[6])
  rootStyle.setProperty('--el-color-primary-light-9', newSeriesColor.light[8])
  rootStyle.setProperty('--el-color-primary-dark-2', newSeriesColor.dark[1])
}
</script>

<template>
  <el-popover
    placement="bottom-end"
    trigger="hover"
    width="160"
    popper-style="border-radius: 0.5rem;"
  >
    <template #reference>
      <div flex="~ items-center" class="nav-color-item" @click="changeCompColor">
        <el-icon size="22">
          <SwitchFilled />
        </el-icon>
      </div>
    </template>
    <div comp-text-theme font-bold>
      点击更换组件主题色
    </div>
  </el-popover>
</template>

<style scoped>
.nav-color-item {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 12px;
  color: var(--vp-c-text-2);
  transition: color 0.5s;
  user-select: none;
}

.nav-color-item:hover {
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}
</style>
