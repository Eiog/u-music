<script setup lang="ts" name="">
import { searchApi, SearchType } from '@@/api';
import SongTable from './components/SongTable.vue';
const searchResult = ref<SearchType['searchResult']['songs']>();
const searchResultCount = ref<number>(0);
const limit = ref(30);
const page = ref(1);
const type = ref(1);
const handleSearch = async () => {
  try {
    const { songs, songCount } = await searchApi.search(
      searchValue.value,
      limit.value,
      page.value - 1,
      type.value,
    );
    searchResult.value = songs;
    searchResultCount.value = songCount;
  } catch (error) {}
};
const route = useRoute();
const searchValue = ref('');
watch(
  () => route.params.value,
  (val) => {
    searchValue.value = val as string;
    handleSearch();
  },
  { immediate: true },
);
</script>
<template>
  <div flex="~ col 1" gap="3" p="8">
    <h1 text="xl" font="light" m="y-2">
      搜索 <strong font="medium">{{ searchValue }}</strong> 找到
      <strong text="rose-500" font="medium">{{ searchResultCount }}</strong>
      条结果
    </h1>
    <SongTable flex="1" :data="searchResult" />
  </div>
</template>
<style scoped lang="less"></style>
