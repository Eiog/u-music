<script setup lang="ts">
import Detail from './components/Detail.vue';
const id = useRoute().params.id as string;
</script>
<template>
  <div>
    <Detail :id="id" />
  </div>
</template>
<style scoped lang="less"></style>
