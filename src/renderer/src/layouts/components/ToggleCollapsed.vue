<script setup lang="ts" name="">
const appStore = useAppStore();
const icon = computed(() =>
  appStore.sideCollapsed ? `i-ri-arrow-right-s-line` : `i-ri-arrow-left-s-line`,
);
</script>
<template>
  <div
    class="cursor-pointer absolute"
    transition="all"
    top="50%"
    right="0"
    p="x-0 y-3"
    flex-center
    text="xl gray-500"
    rounded-full
    z="9"
    :class="[
      `-translate-y-50%`,
      appStore.sideCollapsed ? `translate-x-6` : `translate-x-0`,
    ]"
    @click="appStore.sideCollapsed = !appStore.sideCollapsed"
  >
    <i :class="icon" transition="transform" hover="scale-110"></i>
  </div>
</template>
<style scoped lang="less"></style>
