<script setup lang="ts" name="">
const appStore = useAppStore();
</script>
<template>
  <div wfull hfull flex="~ col 1" overflow="hidden" relative>
    <default-header
      h="14"
      shadow="md"
      z="1"
      bg="white dark:dark-8"
      transition="all"
    />
    <div flex="~ 1" min-h="0" z="0">
      <default-aside
        transition="all"
        bg="white dark:dark-8"
        :class="appStore.sideCollapsed ? 'w-14' : 'w-46'"
      />
      <main
        flex="~ 1"
        overflow="hidden"
        transition="all"
        bg="gray-1 dark:dark5"
      >
        <n-scrollbar>
          <div wfull p2 bg="gray-1 dark:dark5">
            <slot></slot>
          </div>
        </n-scrollbar>
      </main>
    </div>
    <default-footer h="20" bg="white dark:dark-8" z="1" transition="all" />
  </div>
  <default-player z="2" />
  <default-audio />
  <player-list z="3" />
</template>
<style scoped lang="less"></style>
