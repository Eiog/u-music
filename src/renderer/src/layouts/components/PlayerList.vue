<script setup lang="ts" name="">
import { ScrollbarInst } from 'naive-ui';
const { list, index: currentIndex } = storeToRefs(usePlayerStore());
const { clearList, play } = usePlayerStore();
const { playerListShow } = storeToRefs(useAppStore());
const target = ref<HTMLElement | null>(null);
onClickOutside(target, () => {
  playerListShow.value = false;
});
const scrollbarRef = ref<ScrollbarInst>();
const wrapRef = ref();
const currentRef = ref();

const initScroll = () => {
  const { top: wrapTop } = useElementBounding(wrapRef);
  const { top: currentTop } = useElementBounding(currentRef.value[0]);
  const scrollVal = currentTop.value - wrapTop.value;
  console.log(scrollVal);

  scrollbarRef.value?.scrollTo({ left: 0, top: scrollVal - 100 });
};
onMounted(() => {
  watch(playerListShow, (show) => {
    if (show) initScroll();
  });
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
    bottom="0"
    p="t-3"
    w="1/3"
    shadow="xl"
    bg="white/20 dark:(dark/20)"
    transition="all duration-300 ease-in-out"
    class="backdrop-blur-2xl"
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
    <n-scrollbar ref="scrollbarRef">
      <div flex="~ col 1" gap="2" p="x-3" ref="wrapRef">
        <div
          flex="~"
          items="center"
          transition="colors"
          bg="black/10 hover:black/20 active:black/30 dark:(white/10 hover:white/20 active:white/30)"
          p="1"
          text="sm gray8 dark:(gray3)"
          rounded-md
          class="cursor-default select-none"
          :class="currentIndex === index ? 'bg-gray-200 !text-rose-500' : ''"
          v-for="(item, index) in list"
          :key="index"
          @dblclick="play(item.id)"
          :ref="currentIndex === index ? 'currentRef' : ''"
        >
          <div wauto mr1 flex-center>
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
