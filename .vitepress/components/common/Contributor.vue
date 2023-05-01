<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import contributorJSON from '~/contributor.json'

const props = defineProps<{
  source: string
}>()

const data = contributorJSON[props.source as 'button'].flatMap(i => [
  {
    avatar: i.avatarUrl,
    name: i.name || i.login,
    links: [
      { icon: 'github', link: i.url },
    ],
  },
])
</script>

<template>
  <VPTeamMembers class="contributor-wrap" size="small" :members="data" />
</template>

<style scoped>
</style>
