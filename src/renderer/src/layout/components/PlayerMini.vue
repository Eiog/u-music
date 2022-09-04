<script setup lang="ts" name="">
import PlayerController from './PlayerController.vue';
import PlayerSongInfo from './PlayerSongInfo.vue';
import PlayerAction from './PlayerAction.vue';
import PlayerProgress from './PlayerProgress.vue';
</script>
<template>
  <div flex="~ col 1" justify="center" p="x-2 y-1" gap="1">
    <PlayerProgress />
    <div flex="~ 1" justify="between">
      <PlayerSongInfo />
      <PlayerController />
      <PlayerAction />
    </div>
  </div>
</template>
<style scoped lang="less"></style>
