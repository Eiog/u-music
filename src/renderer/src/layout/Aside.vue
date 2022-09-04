<script setup lang="ts" name="">
import toggleCollapsed from './components/toggleCollapsed.vue';
import AsideMenu from './components/AsideMenu.vue';
import { useAppStore } from '@@/store';
const appStore = useAppStore();
</script>
<template>
  <aside flex="~ col" relative>
    <toggleCollapsed />
    <AsideMenu :collapsed="appStore.sideCollapsed" />
  </aside>
</template>
<style scoped lang="less"></style>
