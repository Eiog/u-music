<script setup lang="ts">
const { darkMode } = storeToRefs(useAppStore());
</script>
<template>
  <naive-provider :dark="darkMode">
    <default-layout>
      <router-entry />
    </default-layout>
  </naive-provider>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
