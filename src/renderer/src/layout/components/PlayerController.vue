<script setup lang="ts" name="">
import { usePlayerStore } from '@@/store';
const { play, prev, next } = usePlayerStore();
const { playing } = storeToRefs(usePlayerStore());
</script>
<template>
  <div flex-center flex="1" gap="8">
    <div class="btn" @click="prev()">
      <i i-ri-skip-back-mini-fill></i>
    </div>
    <div class="btn" transform="scale-120" @click="playing = !playing">
      <i :class="playing ? 'i-ri-pause-fill' : 'i-ri-play-fill'"></i>
    </div>
    <div class="btn" @click="next()">
      <i i-ri-skip-forward-mini-fill></i>
    </div>
  </div>
</template>
<style scoped lang="less">
.btn {
  @apply rounded-full cursor-pointer flex bg-gray-100 h-8 text-black transition-opacity transition-colors text-opacity-60 text-2xl w-8 items-center justify-center hover:(bg-gray-200 text-opacity-80) active:(bg-gray-300 text-opacity-100) ;
}
</style>
