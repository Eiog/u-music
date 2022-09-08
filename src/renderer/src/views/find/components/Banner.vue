<script setup lang="ts" name="">
import { homeApi, HomeType } from '@@/api';
import { usePlayerStore } from '@@/store';
const { play } = usePlayerStore();
const banner = ref<HomeType['banner']>();
const init = async () => {
  try {
    banner.value = await homeApi.banner();
  } catch (error) {
    console.log(error);
  }
};
init();
</script>
<template>
  <div w540px h210px overflow-hidden rounded-xl>
    <n-carousel show-arrow draggable dot-type="line">
      <div
        relative
        w540px
        h210px
        cursor-pointer
        v-for="(item, index) in banner"
        :key="index"
        @click="play(item.targetId)"
      >
        <span
          absolute
          left-0
          top-0
          px2
          py1
          bg="red-6/60"
          select="none"
          rounded="rb-lg"
          text="white"
        >
          {{ item.typeTitle }}
        </span>
        <img wfull hfull object-cover :src="item.imageUrl" />
      </div>
    </n-carousel>
  </div>
</template>
<style scoped lang="less"></style>
