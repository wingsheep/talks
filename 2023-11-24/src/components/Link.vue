<script setup lang="ts">

defineProps<{
  to: number | string
  title?: string
}>()
</script>

<template>
  <RouterLink :to="String(to)" @click="$event.target.blur()">
    <slot />
  </RouterLink>
</template>
