<script setup lang="ts" name="">
import Banner from './components/Banner.vue';
import Ball from './components/Ball.vue';
import Resource from './components/Resource.vue';
homeApi.findBall();
</script>
<template>
  <div wfull>
    <n-scrollbar>
      <div wfull flex="~" justify-center>
        <div w5xl flex="~ col" gap5>
          <div wfull flex="~" justify="between">
            <Banner flex="~ 1" />
            <Ball />
          </div>
          <Resource />
        </div>
      </div>
    </n-scrollbar>
  </div>
</template>
<style scoped lang="less"></style>
