<script setup lang="ts" name="">
import { searchApi } from '~/api';
import { usePlayerStore } from '~/stores';
import { SongTable } from '~/components';
const { play } = usePlayerStore();
const searchResult = ref<Song.Detail[]>();
const searchResultCount = ref<number>(0);
const limit = ref(30);
const page = ref(1);
const type = ref(1);
const loading = ref(true);
const handleSearch = async () => {
  try {
    loading.value = true;
    const { songs, songCount } = await searchApi.search(
      searchValue.value,
      limit.value,
      page.value - 1,
      type.value,
    );
    loading.value = false;
    searchResult.value = isEnd.value
      ? songs.filter((item, index) => {
          return index >= limit.value - (songCount % limit.value);
        })
      : songs;
    searchResultCount.value = songCount;
  } catch (error) {
    window.$message.error('err');
    loading.value = false;
  }
};
const route = useRoute();
const searchValue = ref('');
const pageCount = computed(() => {
  return (
    parseInt((searchResultCount.value / limit.value).toFixed(0)) +
    (searchResultCount.value % limit.value === 0 ? 0 : 1)
  );
});
watch(
  () => route.params.value,
  (val) => {
    if (val === '') return;
    searchValue.value = val as string;
    page.value = 1;
    handleSearch();
  },
  { immediate: true },
);
const handlePageUpdate = (val: number) => {
  page.value = val;
  handleSearch();
};
const prefixCount = computed(() => {
  return (page.value - 1) * limit.value + 1;
});
const isEnd = computed(() => {
  return page.value === pageCount.value;
});
const handlePlayCurrentPage = () => {
  if (!searchResult.value) return;
  play(searchResult.value.map((item) => item.id));
};
</script>
<template>
  <div flex="~ col 1" gap="3" p="8">
    <div flex="~" items="center">
      <h1 text="xl" font="light">
        搜索 <strong font="medium">{{ searchValue }}</strong> 找到
        <strong text="rose-500" font="medium">{{ searchResultCount }}</strong>
        条结果
      </h1>
      <div flex-center m="l-auto">
        <n-button round secondary strong @click="handlePlayCurrentPage">
          <div flex-center>
            <i i-ri-play-fill></i>
            <span>播放当前页</span>
          </div>
        </n-button>
      </div>
    </div>
    <div flex-1 min-h-0>
      <n-scrollbar>
        <SongTable
          flex="1"
          :data="searchResult"
          :loading="loading"
          :prefix-count="prefixCount"
        />
      </n-scrollbar>
    </div>

    <n-pagination
      v-model:page="page"
      :page-count="pageCount"
      @update:page="handlePageUpdate"
    />
  </div>
</template>
<style scoped lang="less"></style>
