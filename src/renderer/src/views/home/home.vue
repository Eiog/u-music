<script setup lang="ts" name="">
import HelloWorld from '@@/components/HelloWorld.vue';
import { useAppStore } from '@@/store';
const appStore = useAppStore();
</script>
<template>
  <div flex="~ col 1" gap="3">home</div>
</template>
<style scoped lang="less"></style>
