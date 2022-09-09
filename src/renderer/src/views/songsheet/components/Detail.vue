<script setup lang="ts">
import { playlistApi, PlayListResult } from '~/api';
type Props = {
  id: number | string;
};
const props = defineProps<Props>();
const resData = ref<PlayListResult['detail']['playlist']>();
const init = async () => {
  try {
    resData.value = (await playlistApi.detail(props.id)).playlist;
  } catch (error) {
    console.log(error);
  }
};
init();
</script>
<template>
  <div>{{ resData?.name }}</div>
</template>
<style scoped lang="less"></style>
