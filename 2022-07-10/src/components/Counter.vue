<script setup lang="ts">
import { ref, unref, computed } from 'vue'
import type { Ref } from 'vue'
const props = defineProps({
  count: {
    default: 0,
  },
})

const counter = ref(props.count)
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
const a = ref(1)
const b = 2
const count = add(counter, b)
</script>

<template>
  {{ count}}
  <div flex="~" w="min" border="~ gray-400 opacity-50 rounded-md">
    <button
      border="r gray-400 opacity-50"
      p="2"
      font="mono"
      outline="!none"
      hover:bg="gray-400 opacity-20"
      @click="counter -= 1"
    >
      -
    </button>
    <span m="auto" p="2">{{ counter }}</span>
    <button
      border="l gray-400 opacity-50"
      p="2"
      font="mono"
      outline="!none"
      hover:bg="gray-400 opacity-20"
      @click="counter += 1"
    >
      +
    </button>
    
  </div>
</template>
