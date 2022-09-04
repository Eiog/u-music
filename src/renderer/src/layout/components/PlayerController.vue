<script setup lang="ts" name=""></script>
<template>
  <div flex-center gap="5">
    <div class="btn">
      <i i-ri-skip-back-mini-fill></i>
    </div>
    <div class="btn" transform="scale-120">
      <i i-ri-play-fill></i>
    </div>
    <div class="btn">
      <i i-ri-skip-forward-mini-fill></i>
    </div>
  </div>
</template>
<style scoped lang="less">
.btn {
  @apply rounded-full cursor-pointer flex bg-gray-100 h-10 transition-colors text-2xl w-10 items-center justify-center hover:bg-gray-200 active:bg-gray-300;
}
</style>
