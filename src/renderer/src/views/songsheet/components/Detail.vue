<script setup lang="ts">
type Props = {
  data?: Song.Playlist;
};
const props = defineProps<Props>();
const { play } = usePlayerStore();
const count2wan = (count?: number | string) => {
  if (!count) return '';
  return count.toString().length > 4
    ? `(${count.toString().slice(0, count.toString().length - 4)}万)`
    : `(${count.toString()})`;
};
const handlePlayAll = () => {
  if (!props.data) return;
  play(props.data.trackIds.map((item) => item.id));
};
</script>
<template>
  <div
    wfull
    flex
    gap5
    v-if="props.data"
    bg="white dark:dark8"
    p3
    rounded-xl
    shadow-sm
  >
    <div w50>
      <div wfull hauto rounded-xl overflow-hidden>
        <img :src="props.data.coverImgUrl" alt="" />
      </div>
    </div>
    <div flex="~ 1 col" justify-start gap2>
      <h1 text-2xl font-bold>{{ props.data.name }}</h1>
      <div flex items-center gap1>
        <div rounded-full overflow-hidden>
          <img
            wfull
            hfull
            :src="`${props.data.creator.avatarUrl}?param=30y30`"
            alt=""
          />
        </div>
        <a href="">{{ props.data.creator.nickname }}</a>
        <span text="xs gray5">
          <n-time :time="props.data.createTime" format="yyyy-MM-dd" />创建
        </span>
      </div>
      <div flex items-center gap3>
        <n-button round @click="handlePlayAll">
          <i i-ri-play-fill></i>
          <span>播放全部</span>
        </n-button>
        <n-button round>
          <i i-ri-folder-add-fill></i>
          <span>{{ props.data.subscribed ? '已收藏' : '收藏' }}</span>
          <span>{{ count2wan(props.data.subscribedCount) }}</span>
        </n-button>
        <n-button round>
          <i i-ri-share-fill></i>
          <span>分享</span>
          <span>{{ count2wan(props.data.shareCount) }}</span>
        </n-button>
        <n-button round>
          <i i-ri-download-2-line></i>
          <span>下载全部</span>
        </n-button>
      </div>
      <div flex items-center gap3>
        <n-tag
          size="small"
          :bordered="false"
          v-for="(item, index) in props.data.tags"
          :key="index"
          >{{ item }}</n-tag
        >
      </div>
      <div flex items-center gap3>
        <p>歌曲：{{ props.data.trackCount }}</p>
        <p>播放：{{ props.data.playCount }}</p>
      </div>
      <n-ellipsis expand-trigger="click" line-clamp="1" :tooltip="false">
        <p :style="{ 'white-space': 'pre-line' }">
          简介：{{ props.data.description }}
        </p>
      </n-ellipsis>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
