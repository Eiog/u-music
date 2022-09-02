<script setup lang="ts" name="">
import { useAppStore } from '@@/store';
import { NCheckbox } from 'naive-ui';
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
    <div m="l-auto" flex-center gap="3" p="x-3">
      <div class="action-btn" @click="handleMiniApp">
        <i i-ri-subtract-fill></i>
      </div>
      <div class="action-btn">
        <i i-ri-fullscreen-fill></i>
      </div>
      <div class="action-btn" @click="handleClose">
        <i i-ri-close-fill></i>
      </div>
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
