<script setup lang="ts" name="">
import { useAppStore, usePlayerStore } from '@@/store';
import PlayerMini from './PlayerMini.vue';
import PlayerCover from './PlayerCover.vue';
import PlayerLyric from './PlayerLyric.vue';
import PlayerRec from './PlayerRec.vue';
const { playerShow } = storeToRefs(useAppStore());
const { song } = storeToRefs(usePlayerStore());
const showClass = computed(() => {
  return playerShow.value
    ? `visible opacity-100 translate-y-0`
    : `invisible opacity-0 translate-y-100%`;
});
</script>
<template>
  <div
    v-if="song"
    fixed
    left="0"
    top="14"
    right="0"
    bottom="0"
    bg="opacity-50 white"
    flex="~ col 1"
    transition="all duration-300 ease-in-out"
    class="z-999 backdrop-blur-xl"
    :class="showClass"
  >
    <div
      absolute
      w="full"
      h="full"
      z="-1"
      class="bg-linear backdrop-blur-3xl backdrop-saturate-50 backdrop-brightness-110"
    ></div>
    <img
      absolute
      w="full"
      h="full"
      class="object-full"
      z="-2"
      :src="song.al.picUrl"
    />
    <main flex="~ col 1">
      <div flex="~ col" items="center" gap="1" m="t-3">
        <h1 text="3xl">
          <span>{{ song.name }}</span>
        </h1>
        <p text="sm">
          <span v-for="(item, index) in song.ar" :key="index">
            {{ item.name }}
          </span>
          -
          <span>{{ song.al.name }}</span>
        </p>
      </div>
      <div flex="~ 1">
        <PlayerCover w="1/3" />
        <PlayerLyric w="1/3" />
        <PlayerRec w="1/3" />
      </div>
    </main>
    <footer w="full" h="20">
      <PlayerMini />
    </footer>
  </div>
</template>
<style scoped lang="less">
.bg-linear {
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.6)
  );
}
</style>
