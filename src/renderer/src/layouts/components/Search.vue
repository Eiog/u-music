<script setup lang="ts" name="">
import { DropdownOption, InputProps } from 'naive-ui';
import { searchApi } from '~/api';
const router = useRouter();
const inputValue = ref('');
const showDropdown = ref(false);
const loading = ref(false);
const options = ref<DropdownOption[]>([]);
const hotSearchCache = ref<DropdownOption[]>([]);
const handleSelect = (key: string) => {
  showDropdown.value = false;
  inputValue.value = key;
  handleSearch();
};
const handleSearch = () => {
  router.push(`/search/${inputValue.value}`);
};
const handleHotSearch = () => {
  if (hotSearchCache.value.length > 0) {
    options.value = hotSearchCache.value;
    showDropdown.value = true;
    return;
  }
  loading.value = true;
  searchApi.hotSearch().then((res) => {
    let result: { key: string; label: string }[] = [];
    res.forEach((item) => {
      result.push({ key: item.searchWord, label: item.searchWord });
    });
    hotSearchCache.value = result;
    options.value = result;
    showDropdown.value = true;
    loading.value = false;
  });
};
const handleSelectOutside = () => {
  showDropdown.value = false;
};
const handleVagueSearch = useDebounceFn((val: string) => {
  loading.value = true;
  searchApi
    .vagueSearch(val)
    .then((res) => {
      let result: { key: string; label: string }[] = [];
      res.songs.forEach((item) => {
        result.push({ key: item.name, label: item.name });
      });
      options.value = result;
      loading.value = false;
    })
    .catch(() => {
      loading.value = false;
    });
}, 1000);

const handleFocus = () => {
  inputValue.value === ''
    ? handleHotSearch()
    : handleVagueSearch(inputValue.value);
  showDropdown.value = true;
};
const handleUpdateValue = (val: string) => {
  val === '' ? handleHotSearch() : handleVagueSearch(inputValue.value);
};
const renderLabel = (option: DropdownOption) => {
  return h(
    'div',
    {
      style: {
        minWidth: '200px',
      },
    },
    { default: () => option.label },
  );
};
const handleKeyUp = () => {
  handleSearch();
};
</script>
<template>
  <n-dropdown
    size="small"
    :show="showDropdown"
    :options="options"
    :render-label="renderLabel"
    @select="handleSelect"
    @clickoutside="handleSelectOutside"
  >
    <n-input
      v-model:value="inputValue"
      :loading="loading"
      round
      placeholder="搜索"
      @focus="handleFocus"
      @update:value="handleUpdateValue"
      @keyup.enter="handleKeyUp"
    >
      <template #prefix>
        <i i-ri-search-2-line></i>
      </template>
    </n-input>
  </n-dropdown>
</template>
<style scoped lang="less"></style>
