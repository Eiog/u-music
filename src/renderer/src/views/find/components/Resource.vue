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
  <div bg="white dark:dark8" rounded-xl p2 shadow>
    <h1 text-xl my1>每日推荐歌单</h1>
    <TransitionGroup
      flex="~ wrap"
      justify-between
      m="l--2 r--2"
      tag="div"
      name="fade"
    >
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
    </TransitionGroup>
  </div>
</template>
<style scoped lang="less">
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>
