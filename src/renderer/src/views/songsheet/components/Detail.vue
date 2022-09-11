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
  <div wfull flex >
    <div w=1/3 px5 >
      <div wfull hauto rounded-xl overflow-hidden>
        <img :src="resData?.coverImgUrl" alt="">
      </div>
    </div>
    <div w="2/3" flex="~ col" justify-start gap2>
      <h1 text-2xl font-bold>{{resData?.name}}</h1>
      <n-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false">
    {{resData?.description}}
  </n-ellipsis>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
