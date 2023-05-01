import type { Component } from 'vue'
import Contributor from './common/Contributor.vue'

type Global = [string, Component][]

export const global: Global = [
  ['Contributor', Contributor],
]
