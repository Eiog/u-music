<script setup lang="ts" name="">
import { usePlayerStore, useAppStore } from '@@/store';
const { progressUpdate } = usePlayerStore();
const { themeColor } = storeToRefs(useAppStore());
const { progress, _currentTime, _duration } = storeToRefs(usePlayerStore());
const handleClick = (e: MouseEvent) => {
  const x = e.offsetX;
  const w = e.currentTarget!['offsetWidth'];
  progressUpdate((x / w) * 100);
};
</script>
<template>
  <div w="full" h="2" flex-center gap="3">
    <span text="xs gray-400">{{ _currentTime }}</span>
    <div
      flex="~ 1"
      items="center"
      h="2"
      transition="colors"
      bg="white hover:gray-300 dark:(dark-1 hover:dark-2)"
      p=".5"
      rounded-full
      class="cursor-pointer group"
      @click="handleClick($event)"
    >
      <span
        relative
        flex="~ 1"
        bg="gray-200"
        rounded-full
        transition="colors"
        group-hover="bg-gray-500"
      >
        <span
          relative
          h="1"
          bg="rose-600"
          transition="all ease-in-out"
          rounded="full"
          :style="{
            width: `${progress}%`,
            backgroundColor: `${themeColor.primary}`,
          }"
        >
          <span
            absolute
            inline-block
            right="-1.5"
            top="-1"
            w="3"
            h="3"
            rounded-full
            bg="rose-700"
            outline="transparent 2 group-hover:gray-100"
            :style="{ backgroundColor: `${themeColor.primary}` }"
          ></span>
        </span>
      </span>
    </div>
    <span text="xs gray-400">{{ _duration }}</span>
  </div>
</template>
<style scoped lang="less"></style>
