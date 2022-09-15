<script setup lang="ts" name="">
import Header from './Header.vue';
import Aside from './Aside.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';
import Player from './components/Player.vue';
import PlayerList from './components/PlayerList.vue';
import Audio from './components/Audio.vue';
import { useAppStore } from '~/stores';
const appStore = useAppStore();
</script>
<template>
  <div wfull hfull flex="~ col 1" overflow="hidden" relative>
    <Header h="14" shadow="md" z="1" bg="white dark:dark-8" transition="all" />
    <div flex="~ 1" min-h="0" z="0">
      <Aside
        transition="all"
        bg="white dark:dark-8"
        :class="appStore.sideCollapsed ? 'w-14' : 'w-46'"
      />
      <main
        flex="~ 1"
        overflow="hidden"
        transition="all"
        bg="gray-1 dark:dark5"
      >
        <n-scrollbar>
          <div wfull p2 bg="gray-1 dark:dark5">
            <slot></slot>
          </div>
        </n-scrollbar>
      </main>
    </div>
    <Footer h="20" bg="white dark:dark-8" z="1" transition="all" />
  </div>
  <Player z="2" />
  <Audio />
  <PlayerList z="3" />
</template>
<style scoped lang="less"></style>
