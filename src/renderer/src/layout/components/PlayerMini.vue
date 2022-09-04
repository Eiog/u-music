<script setup lang="ts" name="">
import PlayerController from './PlayerController.vue';
import PlayerSongInfo from './PlayerSongInfo.vue';
import PlayerAction from './PlayerAction.vue';
import PlayerProgress from './PlayerProgress.vue';
import { usePlayerStore } from '@@/store';
const { song, progress } = storeToRefs(usePlayerStore());
</script>
<template>
  <div flex="~ col 1" p="x-2 y-2" gap="2">
    <PlayerProgress :value="progress" />
    <div flex="~ 1" justify="between">
      <PlayerSongInfo w="1/3" :song="song" />
      <PlayerController w="1/3" />
      <PlayerAction w="1/3" />
    </div>
  </div>
</template>
<style scoped lang="less"></style>
