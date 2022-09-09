<script setup lang="ts">
import { recommendApi, RecommendResult } from '~/api';
const router = useRouter();
const resourceData = ref<RecommendResult['Resource']['recommend']>();
const init = async () => {
  try {
    resourceData.value = (await recommendApi.resource()).recommend.splice(
      0,
      10,
    );
  } catch (error) {}
};
init();
</script>
<template>
  <div flex="~ wrap" justify-between m="l--2 r--2">
    <div
      w="1/5"
      flex="~"
      flex-col
      gap1
      p2
      cursor-pointer
      v-for="(item, index) in resourceData"
      :key="index"
      @click="router.push(`/songsheet/${item.id}`)"
    >
      <div wfull rounded-md overflow-hidden>
        <img wfull hfull object-cover :src="item.picUrl" alt="" />
      </div>
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
