<script setup lang="ts" name=""></script>
<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component
          bg="white dark:dark-6"
          flex="~ col 1"
          rounded-md
          p="5"
          :is="Component"
        ></component>
      </transition>
    </router-view>
  </div>
</template>
<style scoped lang="less">
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s ease-in-out;
  transform-style: preserve-3d;
}
.fade-transform-enter-from {
  transform: translate(20px, 0);
  opacity: 0;
}
.fade-transform-leave-to {
  transform: translate(-20px, 0);
  opacity: 0;
}
</style>
