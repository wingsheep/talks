<script lang="ts" setup>
import { useAttrs, computed } from 'vue'
// 封装iconfont组件，默认`font-class`引用模式，支持`unicode`引用、`font-class`引用、`symbol`引用 （https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.20&helptype=code）
const props = defineProps({
   icon: {
      type: String,
      default: '',
    },
})

const attrs = useAttrs()
const isUni = computed(() => Object.keys(attrs).includes('uni') || attrs?.iconType === 'uni')
const isSvg = computed(() => Object.keys(attrs).includes('svg') || attrs?.iconType === 'svg')

</script>
<template>
  <i v-if="isUni" class='iconfont' v-bind="$attrs">{{ props.icon }}</i>
  <svg v-else-if="isSvg" class="icon-svg" aria-hidden>
    <use :xlink:href="`#${props.icon}`"></use>
  </svg>
  <i v-else class="iconfont" v-bind="$attrs" :class="props.icon"></i>
</template>
