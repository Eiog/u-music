<script setup lang="ts"></script>
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade-transform" mode="out-in">
      <component
        bg="white dark:dark-6"
        flex="~ col 1"
        rounded-md
        p="3"
        :is="Component"
      ></component>
    </transition>
  </router-view>
</template>
<style scoped lang="less">
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s ease-in-out;
}

.fade-transform-enter-from {
  transform: scale(0.95);
  opacity: 0;
}

.fade-transform-leave-to {
  transform: scale(1.05);
  opacity: 0;
}
</style>
