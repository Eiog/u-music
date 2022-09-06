<script setup lang="ts" name="">
import { useAppStore, usePlayerStore } from '@@/store';
const { playerListShow } = storeToRefs(useAppStore());
const { mode } = storeToRefs(usePlayerStore());
const { changeMode } = usePlayerStore();
const modeIcon = computed(() => {
  switch (mode.value) {
    case 'order':
      return `i-ri-order-play-fill`;
      break;
    case 'loop':
      return `i-ri-repeat-2-fill`;
      break;
    case 'repeat':
      return `i-ri-repeat-one-fill`;
    case 'random':
      return `i-ri-shuffle-fill`;
    default:
      return `i-ri-order-play-fill`;
      break;
  }
});
</script>
<template>
  <div flex="~ 1" items="center" justify="end" gap="5" m="r-5">
    <div class="btn" @click="changeMode">
      <i :class="modeIcon"></i>
    </div>
    <div class="btn">
      <i i-ri-hq-fill></i>
    </div>
    <div class="btn">
      <i i-ri-volume-down-fill></i>
    </div>
    <div class="btn" @click="playerListShow = !playerListShow">
      <i i-ri-play-list-fill></i>
    </div>
  </div>
</template>
<style scoped lang="less">
.btn {
  @apply cursor-pointer text-black transition-opacity text-opacity-60 hover:text-opacity-80 active:text-opacity-100;
}
</style>
