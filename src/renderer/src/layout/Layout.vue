<script setup lang="ts" name="">
import Header from './Header.vue';
import Aside from './Aside.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';
import { useAppStore } from '@@/store';
</script>
<template>
  <div flex="~ 1" overflow="hidden">
    <Aside
      :w="useAppStore().sideCollapsed ? 0 : 60"
      bg="gray-100"
      transition="all"
    />
    <div flex="~ col 1">
      <Header h="16" bg="gray-50" transition="all" />
      <Main flex="~ 1" bg="gray-200" p="1" overflow="hidden" transition="all" />
      <Footer h="16" bg="gray-50" transition="all" />
    </div>
  </div>
</template>
<style scoped lang="less"></style>
