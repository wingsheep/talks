<template>
  <video ref="videoRef" class="w-150 rounded-xl" controls="controls">
    <source src="https://cdn.jsdelivr.net/gh/wingsheep/FigureBed@master/img/ai_test.mp4" type="video/mp4" />
  </video>

</template>

<script setup>
import {ref} from 'vue'
const videoRef = ref(null)
// 播放视频
function playVideo() {
  videoRef.value.play();
}

// 暂停视频
function pauseVideo() {
  videoRef.value.pause();
}
</script>

<style lang="scss" scoped>

</style>
