<script setup lang="ts" name="">
import PlayerController from './PlayerController.vue';
import PlayerSongInfo from './PlayerSongInfo.vue';
import PlayerAction from './PlayerAction.vue';
import PlayerProgress from './PlayerProgress.vue';
import { usePlayerStore } from '@@/store';
const { progressUpdate } = usePlayerStore();
const { song, list, progress, _currentTime, _duration } = storeToRefs(
  usePlayerStore(),
);
</script>
<template>
  <div flex="~ col 1" p="x-2 y-2" gap="2" relative>
    <div
      v-if="list.length === 0"
      absolute
      left="0"
      top="0"
      right="0"
      bottom="0"
      bg="opacity-50 white"
      z="1"
    ></div>
    <PlayerProgress
      :value="progress"
      :current-time="_currentTime"
      :duration="_duration"
      @update:value="progressUpdate"
    />
    <div flex="~ 1" justify="between">
      <PlayerSongInfo w="1/3" :song="song" />
      <PlayerController w="1/3" />
      <PlayerAction w="1/3" />
    </div>
  </div>
</template>
<style scoped lang="less"></style>
