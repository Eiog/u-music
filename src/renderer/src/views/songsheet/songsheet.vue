<script setup lang="ts">
import Detail from './components/Detail.vue';
import SongList from './components/SongList.vue';
const id = useRoute().params.id as string;
</script>
<template>
  <div>
    <Detail :id="id" />
    <SongList :id="id" />
  </div>
</template>
<style scoped lang="less"></style>
