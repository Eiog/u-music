<script setup lang="ts" name="">
import Header from './Header.vue'
import Aside from './Aside.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'
</script>
<template>
  <div flex="~ 1">
    <Aside w="60" bg="gray-100" />
    <div flex="~ col 1">
      <Header h="16" bg="gray-200" />
      <Main flex="1" />
      <Footer h="16" bg="gray-300" />
    </div>
  </div>
</template>
<style scoped lang="less"></style>
