<script setup lang="ts" name="">
import ToggleCollapsed from './components/ToggleCollapsed.vue';
import AsideMenu from './components/AsideMenu.vue';
import { useAppStore } from '~/stores';
const appStore = useAppStore();
</script>
<template>
  <aside flex="~ col" relative>
    <ToggleCollapsed />
    <AsideMenu :collapsed="appStore.sideCollapsed" />
  </aside>
</template>
<style scoped lang="less"></style>
