<script setup lang="ts">
import { homeApi, HomeType } from '~/api';
const ballData = ref<HomeType['ball']>();
const init = async () => {
  try {
    ballData.value = await homeApi.findBall();
  } catch (error) {
    console.log(error);
  }
};
init();
</script>
<template>
  <div w210px h210px bg="white dark:dark8" rounded-xl shadow-md py3>
    <n-scrollbar>
      <div flex="~ wrap" gap-y-1>
        <div
          w="1/3"
          hauto
          flex="~ col"
          items="center"
          justify="center"
          gap1
          cursor="pointer"
          v-for="(item, index) in ballData"
          :key="index"
        >
          <div
            w40px
            h40px
            transition="colors"
            bg="gray-3 hover:gray-4 dark:(dark3 hover:dark2)"
            rounded-full
            flex-center
          >
            <img w30px h30px :src="item.iconUrl" alt="" />
          </div>
          <span text-xs>{{ item.name }}</span>
        </div>
      </div>
    </n-scrollbar>
  </div>
</template>
<style scoped lang="less"></style>
