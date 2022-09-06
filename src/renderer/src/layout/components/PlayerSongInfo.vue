<script setup lang="ts" name="">
import { useAppStore } from '@@/store';
import { SongType } from '@@/api';
type Song = SongType['songDetail']['songs'][0];
const appStore = useAppStore();
const { playerShow } = storeToRefs(useAppStore());
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
      relative
      rounded-md
      overflow="hidden"
      bg="gray-200"
      flex-center
      cursor-pointer
      @click="playerShow = !playerShow"
    >
      <i v-if="!props.song" text="3xl gray-500" i-ri-album-fill></i>
      <div
        class="cursor-pointer opacity-0 absolute backdrop-blur-xl hover:opacity-100"
        transition="opacity duration-300"
        left="0"
        right="0"
        top="0"
        bottom="0"
        bg="opacity-30 white"
        flex-center
      >
        <i
          text="white 3xl"
          i-ri-arrow-up-s-line
          transition="transform"
          :class="playerShow ? 'rotate-180' : '0'"
        ></i>
      </div>
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
