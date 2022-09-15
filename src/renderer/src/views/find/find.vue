<script setup lang="ts" name="">
import Banner from './components/Banner.vue';
import Ball from './components/Ball.vue';
import Resource from './components/Resource.vue';
</script>
<template>
  <div wfull>
    <div wfull flex="~" justify-center>
      <div w5xl flex="~ col" gap3>
        <div wfull flex="~" justify="between" gap3>
          <Banner flex="~ 1" />
          <Ball />
        </div>
        <Resource />
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
