<script setup lang="ts">
import { isDark, toggleDark } from '@slidev/client/logic/dark'
const toggle = () => {
  toggleDark()
}
</script>

<template>
  <button
    class="bg-blue-400 rounded border-b-2 border-blue-900 text-white text-sm px-2 pt-1.5 pb-1 inline-block !outline-none hover:bg-opacity-85"
    @click="toggle"
  >
    <div class="flex">
      <carbon:moon v-if="isDark" />
      <carbon:sun v-else />
      <span class="mr-1 ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
    </div>
  </button>
</template>
