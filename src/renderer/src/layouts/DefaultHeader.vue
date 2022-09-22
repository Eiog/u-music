<script setup lang="ts" name="">
import { windowIpc } from '~/ipc';
const { darkMode } = storeToRefs(useAppStore());
const router = useRouter();
</script>
<template>
  <header flex="~">
    <default-brand />
    <div flex="~" flex-center gap="5">
      <n-button secondary circle strong @click="router.go(-1)">
        <i i-ri-arrow-left-s-line></i>
      </n-button>
      <n-button secondary circle strong @click="router.go(1)">
        <i i-ri-arrow-right-s-line></i>
      </n-button>
    </div>
    <div flex-center m="l-5">
      <default-search />
    </div>
    <div m="l-auto" flex-center>
      <user-dropdown />
    </div>
    <div m="l-5" flex-center gap="3" p="x-3">
      <n-button secondary circle strong @click="darkMode = !darkMode">
        <i :class="darkMode ? 'i-ri-moon-fill' : 'i-ri-sun-fill'"></i>
      </n-button>
      <ToggleTheme />
      <n-button secondary circle strong @click="router.push('/setting')">
        <i i-ri-settings-4-line></i>
      </n-button>
      <n-button secondary circle strong @click="windowIpc.miniScreen()">
        <i i-ri-subtract-fill></i>
      </n-button>
      <n-button secondary circle strong @click="windowIpc.fullscreenToggle()">
        <i i-ri-fullscreen-fill></i>
      </n-button>
      <n-button secondary circle strong @click="windowIpc.hideWindow()">
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
