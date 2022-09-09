<script setup lang="ts" name="">
import { ScrollbarInst } from 'naive-ui';
import { usePlayerStore } from '~/stores';
import { songApi } from '~/api';
const scrollbarRef = ref<ScrollbarInst>();
const domRef = ref<HTMLElement | null>(null);
const { height } = useElementSize(domRef);
const { id, progress, currentTime } = storeToRefs(usePlayerStore());
const lyricResult = ref<string>('');
const lyric = ref<{ time: number; text: string }[]>([]);
const initLyric = async (id: number | string) => {
  lyricResult.value = (await songApi.lyric(id)).lyric;
  lyric.value = formatLyric(lyricResult.value);
};
watch(
  id,
  (id) => {
    if (id) initLyric(id);
  },
  { immediate: true },
);
const formatLyric = (lyric: string) => {
  const _lyric = lyric.split('\n');
  const result: { time: number; text: string }[] = [];
  _lyric.forEach((item) => {
    let itemArr = item.split(']');
    let text = itemArr.pop() || '';
    itemArr.forEach((_item) => {
      let timeArr = item.slice(1).split(':');
      let time = parseInt(timeArr[0]) * 60 + Math.ceil(parseInt(timeArr[1]));
      result.push({ time, text });
    });
  });
  return result;
};
watch(progress, (progress) => {
  scrollbarRef.value?.scrollTo({
    left: 0,
    top: Math.floor(height.value * (progress / 100)) - 170,
    behavior: 'smooth',
  });
});
const currentLyricIndex = computed(() => {
  let _index: number | undefined = undefined;
  lyric.value.forEach((item, index, arr) => {
    if (
      item.time &&
      currentTime.value >= item.time &&
      currentTime.value < arr[index + 1].time
    )
      _index = index;
  });
  return _index;
});
</script>
<template>
  <div flex="~ 1 shrink-0" min-h="0">
    <n-scrollbar ref="scrollbarRef">
      <div flex="~ col" ref="domRef">
        <div
          flex="~"
          items="center"
          justify="center"
          h="30px"
          v-for="(item, index) in lyric"
          :key="index"
        >
          <p
            text="sm"
            transition="colors transform duration-300"
            :class="
              index === currentLyricIndex
                ? 'text-rose-600 scale-130'
                : 'text-gray-500 scale-100'
            "
          >
            <span class="hidden">
              {{
                item.time % 60
                  ? `${Math.floor(item.time / 60)}:${item.time % 60}`
                  : `${item.time}`
              }}
            </span>
            <span>{{ item.text }}</span>
          </p>
        </div>
      </div>
    </n-scrollbar>
  </div>
</template>
<style scoped lang="less"></style>
