<script setup lang="ts" name="">
import Header from './Header.vue';
import Aside from './Aside.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';
import Player from './components/Player.vue';
import BackdropBlur from './components/BackdropBlur.vue';
import { useAppStore } from '@@/store';
const appStore = useAppStore();
</script>
<template>
  <div flex="~ col 1" overflow="hidden" relative>
    <Header h="16" bg="white" transition="all" />
    <div flex="~ 1" min-h="0">
      <Aside
        transition="all"
        bg="light-300"
        :class="appStore.sideCollapsed ? 'w-16' : 'w-50'"
      />
      <Main
        flex="~ 1"
        p="2"
        overflow="hidden"
        transition="all"
        bg="light-500"
      />
    </div>
    <Footer h="20" bg="white" transition="all" />
  </div>
  <Player v-model:show="appStore.playerShow" />
</template>
<style scoped lang="less"></style>
