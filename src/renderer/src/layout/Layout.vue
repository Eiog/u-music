<script setup lang="ts" name="">
import Header from './Header.vue';
import Aside from './Aside.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';
import Player from './components/Player.vue';
import PlayerList from './components/PlayerList.vue';
import Audio from './components/Audio.vue';
import { useAppStore } from '@@/store';
const appStore = useAppStore();
</script>
<template>
  <div flex="~ col 1" overflow="hidden" relative>
    <Header h="14" shadow="md" z="1" bg="white dark:dark-8" transition="all" />
    <div flex="~ 1" min-h="0" z="0">
      <Aside
        transition="all"
        bg="white dark:dark-8"
        border="t b r gray-1 dark:dark-1"
        :class="appStore.sideCollapsed ? 'w-14' : 'w-46'"
      />
      <Main
        flex="~ 1"
        p="1"
        overflow="hidden"
        transition="all"
        bg="gray-1 dark:dark-2"
      />
    </div>
    <Footer h="20" bg="white dark:dark-8" z="1" transition="all" />
  </div>
  <Player z="2" />
  <Audio />
  <PlayerList z="3" />
</template>
<style scoped lang="less"></style>
