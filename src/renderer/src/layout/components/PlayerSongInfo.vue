<script setup lang="ts" name="">
import { useAppStore } from '@@/store';
const appStore = useAppStore();
type Props = {
  cover?: string;
  name?: string;
  album?: string;
  author?: string[];
};
const props = defineProps<Props>();
</script>
<template>
  <div flex-center gap2>
    <img
      w="14"
      h="14"
      rounded-md
      overflow="hidden"
      :src="props.cover"
      bg="gray-200"
      cursor-pointer
      @click="appStore.playerShow = !appStore.playerShow"
    />
    <div flex="~ col">
      <p text="sm">{{ props.name || '什么都没有' }}</p>
      <p text="sm">
        <span>{{ props.album || '未知' }}</span>
        <span v-for="(item, index) in props.author" :key="index">
          {{ item || '未知' }}
        </span>
      </p>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
