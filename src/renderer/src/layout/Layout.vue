<script setup lang="ts" name="">
import Header from './Header.vue';
import Aside from './Aside.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';
import Player from './components/Player.vue';
import BackdropBlur from './components/BackdropBlur.vue';
import PlayerList from './components/PlayerList.vue';
import Audio from './components/Audio.vue';
import { useAppStore } from '@@/store';
const appStore = useAppStore();
</script>
<template>
  <div flex="~ col 1" overflow="hidden" relative>
    <Header h="14" shadow="md" z="1" bg="white" transition="all" />
    <div flex="~ 1" min-h="0" z="0">
      <Aside
        transition="all"
        bg="white"
        border="t b r gray-100"
        :class="appStore.sideCollapsed ? 'w-14' : 'w-46'"
      />
      <Main flex="~ 1" p="1" overflow="hidden" transition="all" bg="gray-100" />
    </div>
    <Footer h="20" bg="white" z="1" transition="all" />
  </div>
  <Player z="2" />
  <Audio />
  <PlayerList />
</template>
<style scoped lang="less"></style>
