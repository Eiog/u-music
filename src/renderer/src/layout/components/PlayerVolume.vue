<script setup lang="ts" name="">
import { usePlayerStore } from '@@/store';
const { changeVolume } = usePlayerStore();
const { progress, _currentTime, _duration, volume } = storeToRefs(
  usePlayerStore(),
);
const handleVolumeClick = (e: MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  const x = e.offsetX;
  const w = e.currentTarget!['offsetWidth'];
  changeVolume(parseInt(((x / w) * 100).toFixed(0)));
};
</script>
<template>
  <n-popover
    style="
      width: 140px;
      height: 30px;
      padding: 0;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0);
    "
    content-style=" width:100%;height:100%"
    placement="top"
    trigger="click"
  >
    <template #trigger>
      <div class="btn">
        <i i-ri-volume-down-fill></i>
      </div>
    </template>
    <div w="full" h="full" bg="white" px="2" flex-center rounded-xl>
      <div
        w="full"
        h="10px"
        transition="colors"
        bg="white hover:gray-200"
        rounded-full
        flex-center
        px="1"
        class="cursor-pointer group"
        @click.self="handleVolumeClick($event)"
      >
        <div
          w="full"
          h="4px"
          transition="colors"
          bg="gray-200"
          group-hover="bg-white"
          rounded-full
          relative
          class="pointer-events-none"
        >
          <span
            absolute
            h="4px"
            left="0"
            top="0px"
            bg="rose-600"
            rounded-full
            :style="{ width: `${volume}%` }"
          >
            <span
              absolute
              w="8px"
              h="8px"
              right="-2px"
              top="-2px"
              bg="rose-600"
              rounded-full
            ></span>
          </span>
        </div>
      </div>
      <span text="xs">{{ `${volume}%` }}</span>
    </div>
  </n-popover>
</template>
<style scoped lang="less">
.btn {
  @apply cursor-pointer text-black transition-opacity text-opacity-60 hover:text-opacity-80 active:text-opacity-100;
}
</style>
