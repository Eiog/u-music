<script setup lang="ts" name=""></script>
<template>
  <div flex-center gap="5" m="r-5">
    <div class="btn">
      <i i-ri-shuffle-fill></i>
    </div>
    <div class="btn">
      <i i-ri-hq-fill></i>
    </div>
    <div class="btn">
      <i i-ri-volume-down-fill></i>
    </div>
    <div class="btn">
      <i i-ri-play-list-fill></i>
    </div>
  </div>
</template>
<style scoped lang="less">
.btn {
  @apply cursor-pointer hover:text-gray-500 active:text-gray-700;
}
</style>
