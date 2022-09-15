<script setup lang="ts">
import Detail from './components/Detail.vue';
import SongList from './components/SongList.vue';
import CommonList from './components/CommonList.vue';
import SubscribeList from './components/SubscribeList.vue';
import { playlistApi } from '~/api';
const id = useRoute().params.id as string;
const detailData = ref<Song.Playlist>();
const init = async () => {
  try {
    detailData.value = (await playlistApi.detail(id)).playlist;
  } catch (error) {
    console.log(error);
  }
};
init();
</script>
<template>
  <div flex="~ col" gap3>
    <Detail :data="detailData" />
    <div flex="1" bg="white dark:dark8" p3 rounded-xl shadow-sm>
      <n-tabs type="line" animated>
        <n-tab-pane name="song-list" display-directive="show" tab="歌曲列表">
          <SongList :id="id" />
        </n-tab-pane>
        <n-tab-pane
          name="common-list"
          :tab="`评论(${detailData?.commentCount})`"
        >
          <CommonList :id="id" />
        </n-tab-pane>
        <n-tab-pane name="subscribe-list" tab="收藏者">
          <SubscribeList :id="id" />
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
