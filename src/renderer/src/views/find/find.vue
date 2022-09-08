<script setup lang="ts" name="">
import Banner from './components/Banner.vue';
import Ball from './components/Ball.vue';

homeApi.findBall();
</script>
<template>
  <div flex="~ col">
    <div flex="~" justify="between">
      <div flex="~ 1" justify="center">
        <Banner />
      </div>
      <Ball />
    </div>
  </div>
</template>
<style scoped lang="less"></style>
