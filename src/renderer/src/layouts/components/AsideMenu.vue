<script setup lang="ts" name="">
import { MenuOption, NIcon } from 'naive-ui';
import { Component } from 'vue';
import RiAppsFill from '~icons/ri/apps-fill';
import RiMovie2Fill from '~icons/ri/movie-2-fill';
import RiRadioFill from '~icons/ri/radio-fill';
const { sideCollapsed, darkMode } = storeToRefs(useAppStore());
const router = useRouter();
const route = useRoute();
const currentPath = ref('');
watch(
  () => route.path,
  (path) => (currentPath.value = path),
);
const renderIcon = (icon: Component) =>
  h(NIcon, null, { default: () => h(icon) });
const menuOption: MenuOption[] = [
  {
    label: '发现音乐',
    key: '/find',
    icon: () => renderIcon(RiAppsFill),
  },
  {
    label: '视频MV',
    key: '/video',
    icon: () => renderIcon(RiMovie2Fill),
  },
  {
    label: '私人FM',
    key: '/fm',
    icon: () => renderIcon(RiRadioFill),
  },
];
const handleClick = (path: string) => {
  router.push(path);
};
</script>
<template>
  <n-menu
    :collapsed="sideCollapsed"
    :collapsed-width="56"
    :collapsed-icon-size="26"
    :inverted="darkMode"
    mode="vertical"
    :options="menuOption"
    :value="currentPath"
    @update:value="handleClick"
  />
</template>
<style scoped lang="less">
.collapsed {
  @apply w-10 justify-center;
}
.active {
  @apply bg-gray-1 text-lg dark:bg-dark-3;
}
</style>
