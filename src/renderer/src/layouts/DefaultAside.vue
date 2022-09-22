<script setup lang="ts" name="">
const appStore = useAppStore();
</script>
<template>
  <aside flex="~ col" relative>
    <toggle-collapsed />
    <aside-menu :collapsed="appStore.sideCollapsed" />
  </aside>
</template>
<style scoped lang="less"></style>
