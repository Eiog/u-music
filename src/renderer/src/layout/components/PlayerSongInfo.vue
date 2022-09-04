<script setup lang="ts" name="">
import { useAppStore } from '@@/store';
import { SongType } from '@@/api';
type Song = SongType['songDetail']['songs'][0];
const appStore = useAppStore();
type Props = {
  song?: Song;
};
const props = defineProps<Props>();
</script>
<template>
  <div flex="~ 1" items="center" overflow="hidden" gap2>
    <div
      w="12"
      h="12"
      rounded-md
      overflow="hidden"
      bg="gray-200"
      flex-center
      cursor-pointer
      @click="appStore.playerShow = !appStore.playerShow"
    >
      <i v-if="!props.song" text="3xl gray-500" i-ri-album-fill></i>
      <img w="12" h="12" v-if="props.song" :src="props.song.al.picUrl" />
    </div>
    <div
      flex="~ col 1 shrink-0"
      min-w="0"
      items="start"
      justify="center"
      gap="1"
      text="sm"
    >
      <n-button text>{{
        (props.song && props.song.name) || '什么都没有'
      }}</n-button>
      <div flex="~ 1" items="center">
        <n-button text>{{
          (props.song && props.song.al.name) || '未知'
        }}</n-button>
        -
        <n-button
          text
          v-for="(item, index) in props.song && props.song.ar"
          :key="index"
        >
          {{ item.name || '未知' }}
        </n-button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
