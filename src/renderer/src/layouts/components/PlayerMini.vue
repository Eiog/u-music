<script setup lang="ts" name="">
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
      bg="opacity-50 white dark:dark-8"
      z="1"
    ></div>
    <player-progress
      :value="progress"
      :current-time="_currentTime"
      :duration="_duration"
      @update:value="progressUpdate"
    />
    <div flex="~ 1" justify="between">
      <player-song-info w="1/3" :song="song" />
      <player-controller w="1/3" />
      <player-action w="1/3" />
    </div>
  </div>
</template>
<style scoped lang="less"></style>
