<script setup lang="ts">
import { playlistApi, PlayListResult } from '~/api';
type Props = {
  id: number | string;
};
const props = defineProps<Props>();
const songsData = ref<PlayListResult['trackAll']['songs']>();
const loading = ref(true);
const init = async () => {
  try {
    loading.value = true;
    songsData.value = (await playlistApi.trackAll(props.id)).songs;
    loading.value = false;
  } catch (error) {
    loading.value = false;
  }
};
init();
</script>
<template>
  <SongTable :data="songsData" :loading="loading" />
</template>
<style scoped lang="less"></style>
