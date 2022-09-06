<script setup lang="ts" name="">
import { usePlayerStore } from '@@/store';
import { useAppStore } from '@@/store';
const { list, index: currentIndex } = storeToRefs(usePlayerStore());
const { clearList, play } = usePlayerStore();
const { playerListShow } = storeToRefs(useAppStore());
const target = ref<HTMLElement | null>(null);
onClickOutside(target, () => {
  playerListShow.value = false;
});
</script>
<template>
  <div
    ref="target"
    fixed
    flex="~ col 1"
    gap="3"
    right="0"
    top="14"
    bottom="20"
    p="t-3"
    w="1/3"
    shadow="xl"
    bg="opacity-60 white"
    transition="all duration-300 ease-in-out"
    rounded-l-xl
    class="backdrop-blur-xl"
    :class="
      playerListShow
        ? 'translate-x-0 visible opacity-100'
        : 'translate-x-80 invisible opacity-0'
    "
  >
    <div
      v-if="list.length !== 0"
      flex="~"
      items="center"
      justify="between"
      p="x-3"
    >
      <h1>
        当前播放列表
        <strong text="rose-700" font="semibold">{{ list.length }}</strong>
        首歌曲
      </h1>
      <n-button secondary size="small" @click="clearList">清空</n-button>
    </div>
    <n-scrollbar>
      <div flex="~ col 1" gap="2" p="x-3">
        <div
          flex="~"
          items="center"
          transition="colors"
          bg="gray-100 hover:gray-200 active:gray-300"
          p="1"
          text="sm gray-800"
          rounded-md
          class="cursor-default select-none"
          :class="currentIndex === index ? 'bg-gray-200 !text-rose-500' : ''"
          v-for="(item, index) in list"
          :key="index"
          @dblclick="play(item.id)"
        >
          <div w="5" flex-center>
            <span v-if="currentIndex !== index">{{ index + 1 }}</span>
            <i v-if="currentIndex === index" p="" i-ri-play-circle-fill></i>
          </div>
          <div flex="1" overflow="hidden" truncate>
            {{ item.name }}
          </div>
          <div w="1/4" overflow="hidden" truncate>
            <span v-for="(ar, index) in item.ar" :key="index">
              {{ ar.name }}
            </span>
          </div>
          <div w="1/4" overflow="hidden" truncate>{{ item.al.name }}</div>
        </div>
      </div>
    </n-scrollbar>
    <div v-if="list.length === 0" flex="~ 1" justify="center">
      <p text="gray-500">什么都米有</p>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
