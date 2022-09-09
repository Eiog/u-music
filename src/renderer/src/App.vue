<script setup lang="ts">
import DefaultLayout from './layouts/DefaultLayout.vue';
import RouterEntry from './components/common/RouterEntry.vue';
import { useAppStore } from '~/stores';
const { darkMode } = storeToRefs(useAppStore());
</script>
<template>
  <naive-provider :dark="darkMode">
    <DefaultLayout>
      <RouterEntry />
    </DefaultLayout>
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
