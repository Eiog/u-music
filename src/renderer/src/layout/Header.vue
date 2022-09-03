<script setup lang="ts" name="">
import { useAppStore } from '@@/store';
import { NCheckbox } from 'naive-ui';
import UserDropdown from './components/UserDropdown.vue';
import Search from './components/Search.vue';
const router = useRouter();
const appStore = useAppStore();
const handleClose = () => {
  if (appStore.closeByMini === true)
    return window.electron.ipcRenderer.send('hide-window');
  if (appStore.closeByMini === false)
    return window.electron.ipcRenderer.send('close-window');
  if (appStore.closeByMini === undefined)
    return window.$dialog.create({
      title: '设置关闭按钮',
      positiveText: '关闭',
      negativeText: '最小化',
      content: () => {
        return h(
          NCheckbox,
          {
            checked: appStore.closeByMini,
            onUpdateChecked: (val: boolean) => {
              appStore.closeByMini = val;
            },
          },
          { default: () => '记住选择' },
        );
      },
      onPositiveClick: () => {
        window.electron.ipcRenderer.send('close-window');
      },
      onNegativeClick: () => {
        window.electron.ipcRenderer.send('hide-window');
      },
    });
};
const handleMiniApp = () => {
  window.electron.ipcRenderer.send('mini-window');
};
const handleFullscreen = (mode?: string) => {};
</script>
<template>
  <header flex="~">
    <div flex="~" flex-center gap="5" m="l-5">
      <n-button secondary circle strong @click="router.go(-1)">
        <i i-ri-arrow-left-s-line></i>
      </n-button>
      <n-button secondary circle strong @click="router.go(1)">
        <i i-ri-arrow-right-s-line></i>
      </n-button>
    </div>
    <div flex-center m="l-5">
      <Search />
    </div>
    <div m="l-auto" flex-center>
      <user-dropdown />
    </div>
    <div m="l-5" flex-center gap="3" p="x-3">
      <n-button secondary circle strong>
        <i i-ri-settings-4-line></i>
      </n-button>
      <n-button secondary circle strong @click="handleMiniApp">
        <i i-ri-subtract-fill></i>
      </n-button>
      <n-button secondary circle strong>
        <i i-ri-fullscreen-fill></i>
      </n-button>
      <n-button secondary circle strong @click="handleClose">
        <i i-ri-close-fill></i>
      </n-button>
    </div>
  </header>
</template>
<style scoped lang="less">
header {
  -webkit-app-region: drag;
  > * {
    -webkit-app-region: no-drag;
  }
}
.action-btn {
  @apply bg-black rounded-full cursor-pointer flex bg-opacity-5 h-8 transition-colors w-8 items-center justify-center hover:bg-opacity-10;
}
</style>
