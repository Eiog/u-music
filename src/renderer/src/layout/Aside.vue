<script setup lang="ts" name="">
import toggleCollapsed from './components/toggleCollapsed.vue';
import brand from './components/brand.vue';
import AsideMenu from './components/AsideMenu.vue';
</script>
<template>
  <aside flex="~ col" relative>
    <toggleCollapsed />
    <brand />
    <AsideMenu />
  </aside>
</template>
<style scoped lang="less"></style>
